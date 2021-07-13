<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMaterialsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('materials', function (Blueprint $table) {
            $table->id();
            $table->string('MAT_CD');
            $table->string('MAT_NM');
            $table->string('MAT_NM_JP');
            $table->string('ENT_DT');
            $table->string('UPD_DT');
            $table->string('DEL_DT');
            $table->string('USA_EXP_FLG');
            $table->string('USA_COUNTRY_OF_HARVEST');
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
        Schema::dropIfExists('materials');
    }
}
