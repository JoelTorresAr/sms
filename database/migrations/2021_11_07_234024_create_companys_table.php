<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompanysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companys', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre');
            $table->string('ruc');
            $table->string('direccion');
            $table->string('correo');
            $table->string('representante');
            $table->string('telefono');
            $table->string('logo');
            $table->string('video');
            $table->string('youtube');
            $table->string('facebook');
            $table->string('instagram');
            $table->string('likeding');
            $table->string('configuracion');
            $table->string('url');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('companys');
    }
}
