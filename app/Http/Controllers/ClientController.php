<?php

namespace App\Http\Controllers;

use App\Http\Requests\Client\store;
use App\Http\Requests\Client\update;
use App\Models\Client;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class ClientController extends Controller
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
        $records = Client::where('code', 'like', '%' . $request->filter . '%')
            ->orWhere('name', 'like', '%' . $request->filter . '%')
            ->orWhere('address', 'like', '%' . $request->filter . '%')
            ->orWhere('place', 'like', '%' . $request->filter . '%')
            ->orWhere('phone_number', 'like', '%' . $request->filter . '%')
            ->orWhereHas('tipo', function (Builder $query) use ($request) {
                $query->where('name', 'like', '%' . $request->filter . '%');
            })
            ->with('tipo')
            ->orderBy('id', 'desc')
            ->take(1000)
            ->get();

        return response()->json($records);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function onlyActive(Request $request)
    {
        $records = Client::where([
                ['status', 'A'],
                // ['code', 'like', '%' . $request->filter . '%'],
                // ['name', 'like', '%' . $request->filter . '%'],
                ['phone_number', 'like', '%' . $request->filter . '%'],
            ])
            ->orderBy('id', 'desc')
            ->skip($request->numMin)
            ->take($request->numMax)
            ->get(['id', 'code', 'status', 'name', 'phone_number']);

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
        $record = new client;

        $record->code = $request->code;
        $record->name = Str::upper($request->name);
        $record->address = Str::upper($request->address);
        $record->place = Str::upper($request->place);
        $record->phone_number = $request->phone_number;
        $record->tipo_id = $request->tipo_id;

        $record->save();
    }

    public function storeMultiple(Request $request)
    {
        try {
            DB::beginTransaction();

            $data = $request->listClientes;

            foreach (array_chunk($data, 1000) as $t) {
                DB::table('clients')->insertOrIgnore($t);
            }

            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            Log::error($e->getMessage());
            return response()->json($e->getMessage(), 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $record = Client::find($id);

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
        $record = Client::find($id);

        $record->code = $request->code;
        $record->name = Str::upper($request->name);
        $record->address = Str::upper($request->address);
        $record->place = Str::upper($request->place);
        $record->phone_number = $request->phone_number;
        $record->tipo_id = $request->tipo_id;

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
        $record = Client::find($id);

        $record->status = $request->status;

        $record->save();
    }
}
