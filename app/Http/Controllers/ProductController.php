<?php

namespace App\Http\Controllers;

use App\Http\Requests\Product\store;
use App\Http\Requests\Product\update;
use App\Models\LandingForm;
use App\Models\Product;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    /**
     * Create a new UserController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth', ['except' => ['show', 'saveForm']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $records = Product::where('description', 'like', '%' . $request->filter . '%')
            ->orWhere('detalle', 'like', '%' . $request->filter . '%')
            ->orWhere('titulo', 'like', '%' . $request->filter . '%')
            //  ->orWhere('price', 'like', '%' . $request->filter . '%')
            // ->orWhere('media', 'like', '%' . $request->filter . '%')
            ->orWhere('ubicacion', 'like', '%' . $request->filter . '%')
            ->orWhere('telefono', 'like', '%' . $request->filter . '%')
            ->orWhere('pago', 'like', '%' . $request->filter . '%')
            ->orWhere('correo_notificacion', 'like', '%' . $request->filter . '%')
            ->orWhere('image_fondo', 'like', '%' . $request->filter . '%')
            ->orWhere('titulo_formulario', 'like', '%' . $request->filter . '%')
            ->orWhere('promesa', 'like', '%' . $request->filter . '%')
            ->orWhere('color', 'like', '%' . $request->filter . '%')
            ->orWhere('colorcabezera', 'like', '%' . $request->filter . '%')
            ->orWhere('colorformulario', 'like', '%' . $request->filter . '%')
            ->orWhere('tamañoletra', 'like', '%' . $request->filter . '%')
            ->orWhereHas('tipomedia', function (Builder $query) use ($request) {
                $query->where('name', 'like', '%' . $request->filter . '%');
            })
            ->orWhereHas('tipomoneda', function (Builder $query) use ($request) {
                $query->where('name', 'like', '%' . $request->filter . '%');
            })
            ->with('tipomedia')
            ->with('tipomoneda')
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
        $records = Product::where([
            ['status', 'A'],
            // ['code', 'like', '%' . $request->filter . '%'],
            ['description', 'like', '%' . $request->filter . '%'],
            // ['phone_number', 'like', '%' . $request->filter . '%'],
        ])
            ->orderBy('id', 'desc')
            ->skip($request->numMin)
            ->take($request->numMax)
            ->get(['id', 'description', 'detalle', 'status']);

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
        $record = new Product;

        $record->description = $request->description;
        $record->detalle = Str::upper($request->detalle);
        $record->titulo = Str::upper($request->titulo);
        //  $record->price = Str::upper($request->price);
        // $record->media = Str::upper($request->media);
        $record->ubicacion = Str::upper($request->ubicacion);
        $record->telefono = Str::upper($request->telefono);
        $record->pago = Str::upper($request->pago);
        $record->correo_notificacion = Str::upper($request->correo_notificacion);
        $record->titulo_formulario = Str::upper($request->titulo_formulario);
        $record->promesa = Str::upper($request->promesa);
        
        
        // $record->image_fondo = Str::upper($request->image_fondo);
        $record->color = Str::upper($request->color);
        $record->colorcabezera = Str::upper($request->colorcabezera);
        $record->colorformulario = Str::upper($request->colorformulario);
        $record->tamañoletra = Str::upper($request->tamañoletra);
        // $record->price = Str::upper($request->price);

        //$record->client_id = $request->client_id;
        // $record->file_id            =   $request->file_id;
        $record->tipomedia_id = $request->tipomedia_id;
        $record->tipomoneda_id = $request->tipomoneda_id;
        $record->video_url = $request->video_url;
        $record->pago_is = $request->pago_is;
        $record->file_id = $request->file_id;
        $record->image_fondo = $request->image_fondo_id;
        $record->save();
        $usuario = Product::find($record->id);
    }

    public function storeMultiple(Request $request)
    {
        try {
            DB::beginTransaction();

            $data = $request->listProductos;

            foreach (array_chunk($data, 1000) as $t) {
                DB::table('products')->insertOrIgnore($t);
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
        $product = Product::where('id', $id)->with('file')->first();

        return view('landing.show', [
            'product' => $product
        ]);
    }

    public function showProfile()
    {
        $authuserid =   Auth::id();

        $record = Product::where('id', $authuserid)->with('file')->first();

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
        $record = Product::find($id);

        $record->description = $request->description;
        $record->detalle = Str::upper($request->detalle);
        $record->titulo = Str::upper($request->titulo);
        //  $record->price = Str::upper($request->price);
        //   $record->media = Str::upper($request->media);
        $record->ubicacion = Str::upper($request->ubicacion);
        $record->telefono = Str::upper($request->telefono);
        $record->pago = Str::upper($request->pago);
        $record->correo_notificacion = Str::upper($request->correo_notificacion);
        $record->titulo_formulario = Str::upper($request->titulo_formulario);
        $record->promesa = Str::upper($request->promesa);
        $record->image_fondo = Str::upper($request->image_fondo);
        $record->color = Str::upper($request->color);
        $record->colorcabezera = Str::upper($request->colorcabezera);
        $record->colorformulario = Str::upper($request->colorformulario);
        $record->tamañoletra = Str::upper($request->tamañoletra);
        $record->file_id            =   $request->file_id;
        $record->tipomedia_id = $request->tipomedia_id;
        $record->tipomonedia_id = $request->tipomoneda_id;


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
        $record = Product::find($id);

        $record->status = $request->status;

        $record->save();
    }

    public function saveForm(Request $request)
    {
        $form = new LandingForm();
        $form->mail = $request->email;
        $form->telephone = '';
        $form->direction = '';
        $form->nombres = $request->apellidos . " " . $request->nombres;
        $form->save();

        return response()->json(['status' => 'Formulario registrado exitosamente']);
    }


    public function getURI(Request $request)
    {
        // return URL::full();
        return URL::to('/landing/landing-page/show/' . $request->id);
    }
}
