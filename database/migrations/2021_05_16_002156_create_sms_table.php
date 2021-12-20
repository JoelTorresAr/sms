<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSmsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sms', function (Blueprint $table) {
            $table->increments('id');
            $table->string('to');
            $table->string('body');
            $table->string('from');
            $table->unsignedInteger('client_id')->nullable();
         //   $table->unsignedBigInteger('company_id')->nullable();
       //  $table->unsignedInteger('company_id')->nullable();
            $table->string('message_uuid')->nullable();
            $table->enum('status', ['S', 'F'])->default('S');
            $table->timestamps();

            $table->foreign('client_id')->references('id')->on('clients');
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
        Schema::dropIfExists('sms');
    }
}
