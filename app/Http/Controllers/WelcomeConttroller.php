<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;

class WelcomeConttroller extends Controller
{
    public function verifyAction()
    {
        if (!Str::contains(URL::current(), 'landing-page/show')) {
            return view('welcome');
        }
    }
}
