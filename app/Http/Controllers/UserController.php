<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\store;
use App\Http\Requests\User\update;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
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
        $records = User::where('name', 'like', '%'.$request->filter.'%')
                        ->orWhere('email', 'like', '%'.$request->filter.'%')
                        ->orWhere('username', 'like', '%'.$request->filter.'%')
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
        $authuserid =   Auth::id();

        $record = new User;

        $record->name               =   $request->name;
        $record->username           =   $request->username;
        $record->email              =   $request->email;
        $record->password           =   Hash::make($request->password);
        $record->file_id            =   $request->file_id;
        $record->created_by         =   $authuserid;
        $record->updated_by         =   $authuserid;

        $record->save();

        $usuario = User::find($record->id);
        $usuario->roles()->sync($request->roles); // sincronizar los roles
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $record = User::where('id', $id)->with('roles', 'permissions')->first();

        return response()->json($record);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showProfile()
    {
        $authuserid =   Auth::id();

        $record = User::where('id', $authuserid)->with('roles', 'permissions', 'file')->first();

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
        $authuserid =   Auth::id();

        $record = User::find($id);
        $record->name       =   $request->name;
        $record->username   =   $request->username;
        $record->file_id    =   $request->file_id;

        if ($request->email) {
            $record->email   =   $request->email;
        }
        if ($request->password) {
            $record->password   =   Hash::make($request->password);
        }
        $record->updated_by     =   $authuserid;
        $record->save();

        $record->roles()->sync($request->roles);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateProfile(update $request, $id)
    {
        $authuserid =   Auth::id();

        $record = User::find($id);
        $record->name       =   $request->name;
        $record->username   =   $request->username;
        $record->file_id    =   $request->file_id;

        if ($request->email) {
            $record->email   =   $request->email;
        }
        if ($request->password) {
            $record->password   =   Hash::make($request->password);
        }
        $record->updated_by     =   $authuserid;
        $record->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $record = User::find($id);

        $record->status = $request->status;

        $record->save();
    }

    public function permission(Request $request)
    {
        $usuario = User::find($request->id);
        $usuario->permissions()->sync($request->permisos);
    }
    
    public function rolesPermissions(Request $request)
    {
        $rolSelected        =   $request->rolSelected;

        //Obtener los permisos adicionales del usuario autenticado
        $onlyPermissions    =   User::find(Auth::id())->permissions()->orderBy('name')->get();

        // Si no se selecciono ningun rol (Es decir al iniciar sesión)
        if ($rolSelected == 'nothing') {
            //Obtener el primer rol al que esta asignado el usuario autenticado para cargar por defecto
            $role               =   User::find(Auth::id())->roles()->orderBy('name')->first();
            //Obtener los permisos del rol seleccionado
            $permissionsByRol   =   Role::find($role->id)->permissions()->orderBy('name')->get();
        } else {
            //Obtener el rol seleccionado al que esta asignado el usuario autenticado
            $role               =   Role::find($rolSelected);
            //Obtener los permisos del rol seleccionado
            $permissionsByRol   =   Role::find($rolSelected)->permissions()->orderBy('name')->get();
        }

        //Une ambos resultados
        $finalResult        =   $permissionsByRol->merge($onlyPermissions);
        //Del resultado solo devuelve el slug
        $filtered           =   $finalResult->pluck('slug');
        //Obtener todos los roles del usuario autenticado
        $roles              =   User::find(Auth::id())->roles()->orderBy('name')->get();

        return response()->json([
            'allPermissions'    =>  $filtered->all(), // Todos los permisos
            'roleSelected'      =>  $role, // Rol seleccionado
            'roles'             =>  $roles // Todos los roles
        ]);
    }
}
