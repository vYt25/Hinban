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
            $table->string('CAT_CD');
            $table->string('CAT_NM');
            $table->string('CAT_NM_JP');
            $table->string('DIV_CD');
            $table->string('ENT_DT');
            $table->string('UPD_DT');
            $table->string('DEL_DT');
            $table->string('TAX_DEPARTMENT_CD');
            $table->string('MEGASOLOR_KBN');
            $table->string('NCV_KBN');
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
        Schema::dropIfExists('category');
    }
}
