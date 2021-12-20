<?php

namespace App\Services;

use App\Traits\ConsumeExternalServices;

class ChatApi
{
    use ConsumeExternalServices;

    protected $baseUri;
    protected $clientSecret;

    public function __construct()
    {
        $this->baseUri = config('services.chatapi.base_uri');
        $this->clientSecret = config('services.chatapi.client_secret');
    }

    public function sendWhatsAppChatApi($to, $from, $body, $user)
    {
        return $this->makeRequest(
            'POST',
            'sendMessage',
            [
                'token' => $this->clientSecret,
            ],
            [
                'phone' => $to,
                'body' => $body, //Text Message limited to 4096 characters, including unicode.
            ],
            [
                'Accept' => 'application/json',
            ],
            $isJsonRequest = true
        );
    }
}
