<?php

namespace App\Observers;

use App\Models\File;
use App\Models\Log;
use Illuminate\Support\Facades\Auth;

class FileObserver
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
     * Handle the File "created" event.
     *
     * @param  \App\Models\File  $file
     * @return void
     */
    public function created(File $file)
    {
        $authuserid = Auth::id();
        
        $record = new Log;
        $record->model         =   File::class;
        $record->user_id       =   $this->authuserid;
        $record->description   =   'Archivo creado exitosamente';
        $record->response      =   $file->toJson();

        $record->save();
    }

    /**
     * Handle the File "updated" event.
     *
     * @param  \App\Models\File  $file
     * @return void
     */
    public function updated(File $file)
    {
        $authuserid = Auth::id();
        
        $record = new Log;
        $record->model         =   File::class;
        $record->user_id       =   $this->authuserid;
        $record->description   =   'Archivo actualizado exitosamente';
        $record->response      =   $file->toJson();
        $record->save();
    }

    /**
     * Handle the File "deleted" event.
     *
     * @param  \App\Models\File  $file
     * @return void
     */
    public function deleted(File $file)
    {
        //
    }

    /**
     * Handle the File "restored" event.
     *
     * @param  \App\Models\File  $file
     * @return void
     */
    public function restored(File $file)
    {
        //
    }

    /**
     * Handle the File "force deleted" event.
     *
     * @param  \App\Models\File  $file
     * @return void
     */
    public function forceDeleted(File $file)
    {
        //
    }
}
