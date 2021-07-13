<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUnitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('units', function (Blueprint $table) {
            $table->id();
            $table->string('UNIT_CD');
            $table->string('UNIT_SINGLE');
            $table->string('UNIT_PLURAL');
            $table->string('UNIT_JP');
            $table->string('ENT_DT');
            $table->string('UPD_DT');
            $table->string('DEL_DT');
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
        Schema::dropIfExists('units');
    }
}
