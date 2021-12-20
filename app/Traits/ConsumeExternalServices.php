<?php

namespace App\Traits;

use Exception;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;
use Illuminate\Support\Facades\Log;

trait ConsumeExternalServices 
{
    public function makeRequest($method, $requestUrl, $queryParams = [], $formParams = [], $headers = [], $isJsonRequest = false)
    {
        try {
            // Establece la Base Uri ha consumir
            $client = new Client([
                // 'base_uri' => $this->baseUri,
                'base_uri' => $this->baseUriSimpleSMS,
                // 'base_uri' => $this->baseUriWtp,
            ]);

            // Envia en la cabezara la autorizacion
            if (method_exists($this, 'resolveAuthorization')) {
                $this->resolveAuthorization($queryParams, $formParams, $headers);
            }

            // Una vez vinculado el servicio, envio el tipo de peticion y la url del api, para ejecutar (consumir) el servicio
            $response = $client->request($method, $requestUrl, [
                $isJsonRequest ? 'json' : 'form_params' => $formParams,
                'headers' => $headers,
                'query' => $queryParams,
            ]);

            // Obtengo la respuesta del servicio consumido
            $response = $response->getBody()->getContents();

            // Decodifico la respuesta
            if (method_exists($this, 'decodeResponse')) {
                $response = $this->decodeResponse($response);
            }

            Log::info($response);

            return $response;
        } catch (Exception  $e) {
            // Log::error($e->getResponse()->getBody()->getContents());
            // Log::error($e);
            Log::error($e->getMessage());
        }
    }
}