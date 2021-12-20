<?php

namespace App\Http\Controllers;

use App\Models\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class FileController extends Controller
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
    public function store(Request $request)
    {
        $file           =   $request->file;
        $flag           =   Str::random(10);
        $fileName       =   $file->getClientOriginalName();
        $fileNameServer =   $flag .'_'. $fileName;

        Storage::putFileAs('public/' . $request->path, $file, $fileNameServer);

        $record =   new File();
        $record->path       =   asset('storage/' . $request->path . '/' . $fileNameServer);
        $record->filename   =   $fileNameServer;

        $record->save();

        return response()->json($record->id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $file           =   $request->file;
        $flag           =   Str::random(10);
        $fileName       =   $file->getClientOriginalName();
        $fileNameServer =   $flag .'_'. $fileName;

        // Si es diferente null entonces elimina la imagen anterior
        if ($id != 'null') {
            $record = File::find($id);
            Storage::delete('public/' . $request->path . '/' . $record->filename);
        }

        Storage::putFileAs('public/' . $request->path, $file, $fileNameServer);

        $record =   new File;
        $record->path       =   asset('storage/' . $request->path . '/' . $fileNameServer);
        $record->filename   =   $fileNameServer;

        $record->save();

        return response()->json($record->id);
    }
}
