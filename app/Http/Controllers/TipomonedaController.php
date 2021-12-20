<?php

namespace App\Http\Controllers;

use App\Http\Requests\Tipomoneda\store;
use App\Http\Requests\Tipomoneda\update;
use App\Models\Tipomoneda;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TipomonedaController extends Controller
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
        $records = Tipomoneda::where('name', 'like', '%'.$request->filter.'%')
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
        $record = new Tipomoneda;

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
        $record = Tipomoneda::find($id);

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
        $record = Tipomoneda::find($id);

        $record->name = Str::upper($request->name);

        $record->save();
    }
}
