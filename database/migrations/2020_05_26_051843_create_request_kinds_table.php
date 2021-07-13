<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRequestKindsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('request_kinds', function (Blueprint $table) {
            $table->id();
            $table->string('REQ_KIND_CD');
            $table->string('REQ_KIND_NO');
            $table->string('REQ_KIND_DTL_NAME');
            $table->string('REQ_KIND_DTL_NAME_JP');
            $table->string('MIX_KBN');
            $table->string('ENT_DT');
            $table->string('UPD_DT');
            $table->string('NON_PREFAB_KBN');
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
        Schema::dropIfExists('request_kinds');
    }
}
