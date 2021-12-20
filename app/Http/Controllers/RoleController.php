<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\Permission;
use Illuminate\Http\Request;
use App\Http\Requests\Role\store;
use App\Http\Requests\Role\update;

class RoleController extends Controller
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
        $records = Role::where('slug', 'like', '%'.$request->filter.'%')
                        ->orWhere('name', 'like', '%'.$request->filter.'%')
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
        $record = new Role;

        $record->slug = $request->slug;
        $record->name = $request->name;

        $record->save();

        $rol = Role::find($record->id);
        $rol->permissions()->sync($request->permisos);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $record = Role::where('id', $id)->with('permissions')->first();

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
        $record = Role::find($id);

        $record->slug = $request->slug;
        $record->name = $request->name;

        $record->save();

        $rol = Role::find($id);
        $rol->permissions()->sync($request->permisos);
    }
}
