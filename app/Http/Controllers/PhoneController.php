<?php

namespace App\Http\Controllers;

use App\Http\Requests\Phone\store;
use App\Http\Requests\Phone\update;
use App\Models\Phone;
use Illuminate\Http\Request;

class PhoneController extends Controller
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(store $request)
    {
        $record = new Phone;

        $record->phone_number = $request->phone_number;

        $record->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $record = Phone::first();

        return response()->json($record);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(update $request, $id)
    {
        $record = Phone::find($id);

        $record->phone_number = $request->phone_number;

        $record->save();
    }
}
