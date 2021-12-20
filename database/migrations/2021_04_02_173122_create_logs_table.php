<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('logs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('model');
            $table->unsignedInteger('user_id')->nullable();
          //  $table->unsignedBigInteger('company_id')->nullable();
          //$table->unsignedInteger('company_id')->nullable();
            $table->string('description');
            $table->json('response');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
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
        Schema::dropIfExists('logs');
    }
}
