<?php

namespace App\Observers;

use App\Models\Log;
use App\Models\Permission;
use Illuminate\Support\Facades\Auth;

class PermissionObserver
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
     * Handle the Permission "created" event.
     *
     * @param  \App\Models\Permission  $permission
     * @return void
     */
    public function created(Permission $permission)
    {
        $authuserid = Auth::id();
        
        $record = new Log;
        $record->model         =   Permission::class;
        $record->user_id       =   $this->authuserid;
        $record->description   =   'Permiso creado exitosamente';
        $record->response      =   $permission->toJson();

        $record->save();
    }

    /**
     * Handle the Permission "updated" event.
     *
     * @param  \App\Models\Permission  $permission
     * @return void
     */
    public function updated(Permission $permission)
    {
        $authuserid = Auth::id();
        
        $record = new Log;
        $record->model         =   Permission::class;
        $record->user_id       =   $this->authuserid;
        $record->description   =   'Permiso actualizado exitosamente';
        $record->response      =   $permission->toJson();
        $record->save();
    }

    /**
     * Handle the Permission "deleted" event.
     *
     * @param  \App\Models\Permission  $permission
     * @return void
     */
    public function deleted(Permission $permission)
    {
        //
    }

    /**
     * Handle the Permission "restored" event.
     *
     * @param  \App\Models\Permission  $permission
     * @return void
     */
    public function restored(Permission $permission)
    {
        //
    }

    /**
     * Handle the Permission "force deleted" event.
     *
     * @param  \App\Models\Permission  $permission
     * @return void
     */
    public function forceDeleted(Permission $permission)
    {
        //
    }
}
