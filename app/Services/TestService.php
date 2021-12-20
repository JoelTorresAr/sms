<?php

namespace App\Services;

use App\Traits\ConsumeExternalServices;
use Illuminate\Support\Str;

class TestService
{
    use ConsumeExternalServices;

    protected $baseUri;
    protected $baseUriSimpleSMS;
    protected $baseUriWtp;
    protected $clientId;
    protected $clientSecret;

    public function __construct()
    {
        $this->baseUri = config('services.nexmo.base_uri');
        $this->baseUriSimpleSMS = config('services.nexmo.base_uri_simple');
        $this->baseUriWtp = config('services.nexmo.base_uri_wtp');
        $this->clientId = config('services.nexmo.client_id');
        $this->clientSecret = config('services.nexmo.client_secret');
    }

    /**
     * Envia en la cabezara la autorizacion
     *
     * @param   string  $queryParams  Parametros
     * @param   string  $formParams   Parametros de Form
     * @param   string  $headers      Cabecera
     *
     * @return  string                Respuesta de la cabecera de autorizacion
     */
    public function resolveAuthorization(&$queryParams, &$formParams, &$headers)
    {
        $headers['Authorization'] = $this->resolveAccessToken();
    }

    /**
     * Codifico las credenciales en base54 y lo retorno
     *
     * @return  string  Retorno las redenciales  (token)
     */
    public function resolveAccessToken()
    {
        $credentials = base64_encode("{$this->clientId}:{$this->clientSecret}");
        return "Basic {$credentials}";
    }

    public function sendSimpleSMS($from, $to, $body, $user)
    {
        return $this->makeRequest(
            'POST',
            'json',
            [],
            [
                "api_key" => $this->clientId,
                "api_secret" => $this->clientSecret,
                "from" => $from,
                "to" => $to,
                "text" => $body,
                "client-ref" => $user,
            ],
            [
                'Accept' => 'application/json',
            ],
            $isJsonRequest = true
        );
    }

    public function sendSMS($from, $to, $body, $user)
    {
        return $this->makeRequest(
            'POST',
            'messages',
            [],
            [
                'from' => [
                    'type' => 'sms',
                    'number' => $from,
                ],
                'to' => [
                    'type' => 'sms',
                    'number' => $to,
                ],
                'message' => [
                    'content' => [
                        'type' => 'text',
                        'text' => $body, //Text Message limited to 4096 characters, including unicode.
                    ],
                ],
                "client_ref" => $user,
            ],
            [
                'Accept' => 'application/json',
            ],
            $isJsonRequest = true
        );
    }

    public function sendWhatsApp($from, $to, $body, $user)
    {
        return $this->makeRequest(
            'POST',
            'messages',
            [],
            [
                'from' => [
                    'type' => 'whatsapp',
                    'number' => $from,
                ],
                'to' => [
                    'type' => 'whatsapp',
                    'number' => $to,
                ],
                'message' => [
                    'content' => [
                        'type' => 'text',
                        'text' => $body, //Text Message limited to 4096 characters, including unicode.
                    ],
                ],
                "client_ref" => $user,
            ],
            [
                'Accept' => 'application/json',
            ],
            $isJsonRequest = true
        );
    }
}
