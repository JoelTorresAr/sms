<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('category', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
         //   $table->unsignedInteger('categoryc_id')->nullable();
           // $table->unsignedBigInteger('company_id')->nullable();
         //  $table->unsignedInteger('company_id')->nullable();
            $table->timestamps();

           // $table->foreign('catogoryc_id')->references('id')->on('category_client');
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
        Schema::dropIfExists('category');
    }
}
