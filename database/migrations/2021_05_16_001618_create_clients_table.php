<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->increments('id');
            $table->string('code')->nullable();
            $table->string('name');
            $table->string('address')->nullable();
            $table->string('place')->nullable();
            $table->string('phone_number');
            $table->unsignedInteger('tipo_id')->nullable();
          //  $table->unsignedBigInteger('company_id')->nullable();
        //  $table->unsignedInteger('company_id')->nullable();
            $table->enum('status', ['A', 'I'])->default('A');
            $table->timestamps();

            $table->foreign('tipo_id')->references('id')->on('tipos');
          //  $table->foreign('company_id')->references('id')->on('company');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clients');
    }
}
