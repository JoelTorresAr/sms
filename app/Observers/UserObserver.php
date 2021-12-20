<?php

namespace App\Observers;

use App\Models\Log;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserObserver
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
     * Handle the User "created" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function created(User $user)
    {
        $authuserid = Auth::id();
        
        $record = new Log;
        $record->model         =   User::class;
        $record->user_id       =   $this->authuserid;
        $record->description   =   'Usuario creado exitosamente';
        $record->response      =   $user->toJson();

        $record->save();
    }

    /**
     * Handle the User "updated" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function updated(User $user)
    {
        $authuserid = Auth::id();
        
        $record = new Log;
        $record->model         =   User::class;
        $record->user_id       =   $this->authuserid;
        $record->description   =   'Usuario actualizado exitosamente';
        $record->response      =   $user->toJson();
        $record->save();
    }

    /**
     * Handle the User "deleted" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function deleted(User $user)
    {
        //
    }

    /**
     * Handle the User "restored" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function restored(User $user)
    {
        //
    }

    /**
     * Handle the User "force deleted" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function forceDeleted(User $user)
    {
        //
    }
}
