<?php

namespace App\Observers;

use App\Models\Log;
use App\Models\Role;
use Illuminate\Support\Facades\Auth;

class RoleObserver
{
    /**
     * Handle events after all transactions are committed.
     *
     * @var bool
     */
    public $afterCommit = true;
    public $authuserid;

    public function __construct()
    {
        $this->authuserid = Auth::id();
    }

    /**
     * Handle the Role "created" event.
     *
     * @param  \App\Models\Role  $role
     * @return void
     */
    public function created(Role $role)
    {
        $authuserid = Auth::id();
        
        $record = new Log;
        $record->model         =   Role::class;
        $record->user_id       =   $this->authuserid;
        $record->description   =   'Rol creado exitosamente';
        $record->response      =   $role->toJson();

        $record->save();
    }

    /**
     * Handle the Role "updated" event.
     *
     * @param  \App\Models\Role  $role
     * @return void
     */
    public function updated(Role $role)
    {
        $authuserid = Auth::id();
        
        $record = new Log;
        $record->model         =   Role::class;
        $record->user_id       =   $this->authuserid;
        $record->description   =   'Rol actualizado exitosamente';
        $record->response      =   $role->toJson();
        $record->save();
    }

    /**
     * Handle the Role "deleted" event.
     *
     * @param  \App\Models\Role  $role
     * @return void
     */
    public function deleted(Role $role)
    {
        //
    }

    /**
     * Handle the Role "restored" event.
     *
     * @param  \App\Models\Role  $role
     * @return void
     */
    public function restored(Role $role)
    {
        //
    }

    /**
     * Handle the Role "force deleted" event.
     *
     * @param  \App\Models\Role  $role
     * @return void
     */
    public function forceDeleted(Role $role)
    {
        //
    }
}
