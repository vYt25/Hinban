<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDivisionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('divisions', function (Blueprint $table) {
            $table->id();
            $table->string('DIV_CD');
            $table->string('DIV_NM');
            $table->string('COM_CD');
            $table->string('SVR_CD');
            $table->string('PRD_FLG');
            $table->string('SHP_FLG');
            $table->string('LRD_FLG');
            $table->string('INV_FLG');
            $table->string('KG_FLG');
            $table->string('CBM_FLG');
            $table->string('TSUBO_FLG');
            $table->string('SQM_FLG');
            $table->string('MTR_FLG');
            $table->string('FLOOR_FLG');
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
        Schema::dropIfExists('divisions');
    }
}
