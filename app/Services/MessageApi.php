<?php

namespace App\Services;

use App\Traits\ConsumeExternalServices;
use Illuminate\Support\Str;

class MessageApi
{
    use ConsumeExternalServices;

    protected $baseUri;
    protected $user;
    protected $password;
    protected $sSenderId;

    public function __construct()
    {
        $this->baseUri = config('services.altiria.base_uri');
        $this->sSenderId = config('services.altiria.sender_id');
        $this->user = config('services.altiria.user');
        $this->password = config('services.altiria.password');
    }
    /**
     * @param string $to Numero a quien se enviara el mensaje
     * @param string $body Cuerpo del mensaje que se va a enviar
     *
     * @return boolean
     */

    public function sendMessage(string $to,string $body)
    {
        //URL base de los recursos REST
        $endpoint = $this->baseUri . '/sendSms';

        //Se inicia el objeto CUrl
        $curl = curl_init();

        //XX, YY y ZZ se corresponden con los valores de identificación del
        //usuario en el sistema.
        //domainId solo es necesario si el login no es un email
        $credentials = array(
            'login'    => $this->user,
            'passwd'   => $this->password
        );

        $destinations = explode(',', $to);

        $jsonMessage = array(
            'msg'      => substr($body, 0, 160),
            'senderId' => $this->sSenderId,
            'ack'      => "true",
            'idAck'    => (string) Str::uuid()
        );

        $jsonData = array(
            'credentials' => $credentials,
            'destination' => $destinations,
            'message'     => $jsonMessage
        );

        //Se construye el mensaje JSON
        $jsonDataEncoded = json_encode($jsonData);

        curl_setopt_array($curl, array(
            CURLOPT_URL => $endpoint,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => $jsonDataEncoded,
            CURLOPT_HTTPHEADER => array(
                'Content-Type: application/json;charset=UTF-8'
            ),
        ));

        //Se envía la petición y se consigue la respuesta
        $response = curl_exec($curl);

        $statusCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);

        //Si ha ocurrido algún error se lanza una excepción
        if ($statusCode != 200)  throw new \Exception("ERROR GENERAL: $statusCode");
        //Si ha ocurrido algún error se lanza una excepción
        if (curl_errno($curl))  throw new \Exception(curl_error($curl));

        $json_parsed = json_decode($response);
        $status = $json_parsed->status;
        $json_parsed->idAck = $jsonMessage['idAck'];

        if ($status != '000') throw new \Exception("ERROR: $response");

        return $json_parsed;
    }
}
