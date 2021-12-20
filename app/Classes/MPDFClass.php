<?php

namespace App\Classes;

use Illuminate\Support\Facades\Auth;
use Mpdf\HTMLParserMode;
use Illuminate\Support\Facades\Config;
use Mpdf\Mpdf;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\View;

class MPDFClass
{

    protected $mpdf;
    protected $config = [];

    public function __construct($config = [])
    {
        $this->config = $config;

        $defaultConfig = (new \Mpdf\Config\ConfigVariables())->getDefaults();
        $fontDirs = $defaultConfig['fontDir'];
        $tempDir = $defaultConfig['tempDir'];

        $defaultFontConfig = (new \Mpdf\Config\FontVariables())->getDefaults();
        $fontData = $defaultFontConfig['fontdata'];

        $this->mpdf = new Mpdf([
            'mode' => $this->getConfig('mode'),
            'format' => $this->getConfig('format'),
            'orientation' => $this->getConfig('orientation'),
            'default_font_size' => $this->getConfig('default_font_size'),
            'default_font' => $this->getConfig('default_font'),
            'margin_left' => $this->getConfig('margin_left'),
            'margin_right' => $this->getConfig('margin_right'),
            'margin_top' => $this->getConfig('margin_top'),
            'margin_bottom' => $this->getConfig('margin_bottom'),
            'margin_header' => $this->getConfig('margin_header'),
            'margin_footer' => $this->getConfig('margin_footer'),
            'fontDir' => array_merge($fontDirs, [
                $this->getConfig('custom_font_dir')
            ]),
            'fontdata' => array_merge($fontData, $this->getConfig('custom_font_data')),
            'default_font' => $this->getConfig('default_font'),
            'autoScriptToLang' => $this->getConfig('auto_language_detection'),
            'autoLangToFont' => $this->getConfig('auto_language_detection'),
            'tempDir' => ($this->getConfig('temp_dir')) ?: $tempDir,
        ]);

        $this->mpdf->SetTitle($this->getConfig('title'));
        $this->mpdf->SetAuthor($this->getConfig('author'));
        $this->mpdf->SetWatermarkText($this->getConfig('watermark'));
        $this->mpdf->SetDisplayMode($this->getConfig('display_mode'));

        $this->mpdf->PDFA = $this->getConfig('pdfa') ?? false;
        $this->mpdf->PDFAauto = $this->getConfig('pdfaauto') ?? false;

        $this->mpdf->showWatermarkText  = $this->getConfig('show_watermark');
        $this->mpdf->showWatermarkImage  = $this->getConfig('show_watermark_image');
        $this->mpdf->watermark_font     = $this->getConfig('watermark_font');
        $this->mpdf->watermarkTextAlpha = $this->getConfig('watermark_text_alpha');
        $path_css = asset('css/style_pdf_print.css');
        $stylesheet = file_get_contents($path_css);
        $this->mpdf->WriteHTML($stylesheet, HTMLParserMode::HEADER_CSS);
        $this->getMpdf()->SetFooter('Impreso el: {DATE d-m-Y h:i A}||Página {PAGENO} de {nbpg}');

    }

    protected function getConfig($key)
    {
        if (isset($this->config[$key])) {
            return $this->config[$key];
        } else {
            return Config::get('mpdf.' . $key);
        }
    }

    /**
     * Get instance mpdf
     * @return static
     */
    public function getMpdf()
    {
        return $this->mpdf;
    }

    /**
	 * Load a HTML string
	 *
	 * @param string $html
	 * @return Pdf
	 */
	public function loadHTML($html)
	{
		return $this->mpdf->WriteHTML($html);
	}

	/**
	 * Load a HTML file
	 *
	 * @param string $file
	 * @return Pdf
	 */
	public function loadFile($file)
	{
		return $this->mpdf->WriteHTML(File::get($file));
	}

	/**
	 * Load a Header View and convert to Header HTML
	 *
	 * @param string $view
	 * @param array $data
	 * @param array $mergeData
	 * @return Pdf
	 */
	public function loadHeaderView($view, $data = [], $mergeData = [])
	{
		return $this->mpdf->SetHTMLHeader(View::make($view, $data, $mergeData)->render());
	}

	/**
	 * Load a View and convert to HTML
	 *
	 * @param string $view
	 * @param array $data
	 * @param array $mergeData
	 * @return Pdf
	 */
	public function loadView($view, $data = [], $mergeData = [])
	{
		return $this->mpdf->WriteHTML(View::make($view, $data, $mergeData)->render());
	}
	/**
	 * Load a View and convert to HTML
	 *
	 * @param string $view
	 * @param array $data
	 * @param array $mergeData
	 * @return Pdf
	 */
	public function loadViewHeavy($view, $data = [], $mergeData = [])
	{
		$html = View::make($view, $data, $mergeData)->render();
        $long_html = strlen($html);
        $long_int  = intval($long_html / 100000);

        if ($long_int > 0) {
            for ($i = 0; $i < $long_int; $i++) {
                $temp_html = substr($html, ($i * 100000), 99999);
                $this->mpdf->WriteHTML($temp_html);
            }
            //Last block
            $temp_html = substr($html, ($i * 100000), ($long_html - ($i * 100000)));
            $this->mpdf->WriteHTML($temp_html);
        } else {
            $this->mpdf->WriteHTML($html);
        }
        return $this->mpdf;
	}

	/**
	 * Load a View and convert to HTML
	 *
	 * @param string $view
	 * @param array $data
	 * @param array $mergeData
	 * @return Pdf
	 */
	public function addView($view, $data = [], $mergeData = [], $pagebreak = true)
	{
        if ($pagebreak) {
            $this->mpdf->WriteHTML('<pagebreak>');
        }
		return $this->mpdf->WriteHTML(View::make($view, $data, $mergeData)->render());
	}

    /**
     * Output the PDF as a string.
     *
     * @return string The rendered PDF as string
     */
    public function output()
    {
        return $this->mpdf->Output('', 'S');
    }

    /**
     * Save the PDF to a file
     *
     * @param $filename
     * @return static
     */
    public function save($filename)
    {
        return $this->mpdf->Output($filename, 'F');
    }

    /**
     * Make the PDF downloadable by the user
     *
     * @param string $filename
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function download($filename = 'document.pdf')
    {
        return $this->mpdf->Output($filename, 'D');
    }

    /**
     * Return a response with the PDF to show in the browser
     *
     * @param string $filename
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function stream($filename = 'document.pdf')
    {
        return $this->mpdf->Output($filename, 'I');
    }

    /**
     * Load a Header View and convert to Header HTML
     *
     * @param string $view
     * @param array $data
     * @param array $mergeData
     * @return Pdf
     */
    public function loadFooterView($view, $data = [], $mergeData = [])
    {
        return $this->mpdf->SetHTMLFooter(View::make($view, $data, $mergeData)->render());
    }

}
