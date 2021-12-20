<?php

namespace App\Http\Controllers;

use App\Http\Requests\Mensaje\store;
use App\Http\Requests\Mensaje\update;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class MessageController extends Controller
{
    /**
     * Create a new UserController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $records = Message::where('message', 'like', '%'.$request->filter.'%')
                        ->orderBy('id', 'desc')
                        ->get();

        return response()->json($records);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(store $request)
    {
        $record = new Message;

        $record->message = Str::upper($request->message);

        $record->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function show(Message $message)
    {
        $message = $message->all();
        $record = Message::find($message[0]->id);

        return response()->json($record);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function update(update $request, Message $message)
    {
        $message = $message->all();

        $record = Message::find($message[0]->id);

        $record->message = Str::upper($request->message);

        $record->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function destroy(Message $message)
    {
        $message = $message->all();

        $record = Message::find($message[0]->id);

        $record->delete();
    }
}
