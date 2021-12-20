<?php

use App\Services\TestService;

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'nexmo' => [
        'base_uri' => env('NEXMO_BASE_URI'),
        'base_uri_simple' => env('NEXMO_BASE_SIMPLE_URI'),
        'base_uri_wtp' => env('NEXMO_BASE_URI_WTP'),
        'client_id' => env('NEXMO_KEY'),
        'client_secret' => env('NEXMO_SECRET'),
        'class' => TestService::class,
    ],
    'altiria' => [
        'base_uri' => env('ALTIRIA_BASE_URI','http://www.altiria.net/apirest/ws'),
        'sender_id' => env('ALTIRIA_SENDER_ID','TestAltiria'),
        'user' => env('ALTIRIA_USER'),
        'password' => env('ALTIRIA_PASSWORD'),
    ],

];
