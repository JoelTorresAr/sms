<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
        
            $table->increments('id');
            // $table->unsignedInteger('client_id')->nullable();
             $table->string('description');
             $table->string('detalle');
             $table->string('titulo');
             $table->decimal('price', 8, 2, true);
           //  $table->string('tipo_media');
             $table->string('media');
            // $table->string('moneda');
             $table->string('ubicacion');
             $table->string('telefono');
             $table->string('descripcion');
             $table->string('pago');
             $table->string('correo_notificacion');
             $table->string('image_fondo');
             $table->string('titulo_formulario');
             $table->string('promesa');
             $table->string('color');
             $table->string('colorcabezera');
             $table->string('colorformulario');
             $table->string('tamañoletra');
            // $table->unsignedBigInteger('companys_id')->nullable();
         $table->unsignedInteger('company_id')->nullable();
         $table->unsignedInteger('tipomedia_id')->nullable();
         $table->unsignedInteger('tipomoneda_id')->nullable();
         $table->unsignedInteger('file_id')->nullable();
             $table->enum('status', ['A', 'I'])->default('A');
            $table->timestamps();

            $table->foreign('company_id')->references('id')->on('companys');
         $table->foreign('tipomedia_id')->references('id')->on('tipomedia');
         $table->foreign('tipomoneda_id')->references('id')->on('tipomoneda');
         $table->foreign('file_id')->references('id')->on('files');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
