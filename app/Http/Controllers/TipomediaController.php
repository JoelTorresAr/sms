<?php

namespace App\Http\Controllers;

use App\Http\Requests\Tipomedia\store;
use App\Http\Requests\Tipomedia\update;
use App\Models\Tipomedia;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TipomediaController extends Controller
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
        $records = Tipomedia::where('name', 'like', '%'.$request->filter.'%')
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
        $record = new Tipomedia;

        $record->name = Str::upper($request->name);

        $record->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $record = Tipomedia::find($id);

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
        $record = Tipomedia::find($id);

        $record->name = Str::upper($request->name);

        $record->save();
    }
}
