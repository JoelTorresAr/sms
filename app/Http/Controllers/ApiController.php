<?php

namespace App\Http\Controllers;

use App\Services\TestService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Nexmo\Laravel\Facade\Nexmo;

class ApiController extends Controller
{
    public function store(Request $request)
    {
        $rules = [
            'to' => ['required'],
            'from' => ['required'],
            'body' => ['required'],
        ];
        $request->validate($rules);

        $test = resolve(TestService::class);
        // return $test->sendSMS($request->to, $request->from, $request->body, Auth::user()->name);
        // return $test->sendWhatsApp($request->to, $request->from, $request->body, Auth::user()->name);
    }

    public function storeLibrary(Request $request)
    {
        $rules = [
            'to' => ['required'],
            'from' => ['required'],
            'body' => ['required'],
        ];
        $request->validate($rules);

        return Nexmo::message()->send([
            'to'   => $request->to,
            'from' => $request->from,
            'text' => $request->body
        ]);
    }
}
