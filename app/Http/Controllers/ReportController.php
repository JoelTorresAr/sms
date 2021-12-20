<?php

namespace App\Http\Controllers;

use App\Classes\MPDFClass;
use App\Models\LandingForm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;

class ReportController extends Controller
{
    public function LandingForm()
    {
        $reports = LandingForm::get();
        $pdf = new MPDFClass(["margin_top" => 17, "format" => "A4", "title" => "Reporte de consumo mensual por paciente"]);
        $pdf->loadView('reports.LandingForm.report_pdf', compact('reports'));
        return $pdf->stream();
    }
    public function Payments()
    {
        $reports = LandingForm::whereNotNull('pago')->get();
        $pdf = new MPDFClass(["margin_top" => 17, "format" => "A4", "title" => "Reporte de consumo mensual por paciente"]);
        $pdf->loadView('reports.Payments.report_pdf', compact('reports'));
        return $pdf->stream();
    }
}
