<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoryClientTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('category_client', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('client_id')->nullable();
         //   $table->unsignedBigInteger('company_id')->nullable();
      //   $table->unsignedInteger('company_id')->nullable();
            $table->timestamps();

             $table->foreign('client_id')->references('id')->on('clients');
           // $table->foreign('company_id')->references('id')->on('company');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('category_client');
    }
}
