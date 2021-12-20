<?php

namespace App\Http\Controllers;

use App\Http\Requests\SMS\send;
use App\Models\Sms;
use App\Services\MessageApi;
use App\Services\TestService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class SmsController extends Controller
{
    /**
     * Create a new UserController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth', ['except' => ['notificationState']]);
    }

    public function send(Request $request)
    {
        try {
            DB::beginTransaction();

            $recipients = $request->recipients;
            $record = $request->record;

            $test = resolve(MessageApi::class);

            foreach (array_chunk($recipients, 1000) as $t) {
                foreach ($t as $key => $value) {

                    $typeMessage = $request->typeMessage;

                    if ($typeMessage == 1) {
                        $body = $record['body'];
                    } else {
                        $body = Str::replaceFirst('{NOMBRE}', $value['name'], $record['bodyDefault']);
                    }

                    $nameUser = Str::substr($value['name'], 0, 40);

                    //$message_uuid = $test->sendSimpleSMS($record['from'], $value['phone_number'], $body, $nameUser);
                    // $message_uuid = $test->sendWhatsApp($record['from'], $value['phone_number'], $body, $nameUser);
                    $response = $test->sendMessage($value['phone_number'], $body);
                    $sms = Sms::create(
                        [
                            'to' => $value['phone_number'],
                            'body' => $body,
                            'from' => $record['from'],
                            'client_id' => $value['id'],
                            'message_uuid' => $response->idAck,
                            'status' => $response->status == 200 ? 'Exito' : null,
                        ]
                    );
                }
            }
            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            Log::error($e->getMessage());
            return response()->json($e->getMessage(), 500);
        }
    }

    public function notificationState(Request $request)
    {
        //dd($request->all());
        $data = $request->notification;
        $sms = Sms::where('to', 'like', "%" . $data['destination'] . "%")
            ->where('message_uuid', 'like', $data['idAck'] . "%")->first();
        $sms->status =  $data['status'];
        $sms->save();

        return "OK";
    }
}
