<?php

namespace App\Http\Controllers;

use App\Models\Log;
use Illuminate\Http\Request;

class LogController extends Controller
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
        $records = Log::where('description', 'like', '%'.$request->filter.'%')
                        ->orWhere('model', 'like', '%'.$request->filter.'%')
                        ->with('user')
                        ->orderBy('id', 'desc')
                        ->get();

        return response()->json($records);
    }
    
}
