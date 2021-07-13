<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->string('hinbanCode',20);
            $table->string('color',8);
            $table->string('hinbanNameJp',150);
            $table->string('hinbanName',150);
            $table->double('sizeL',10,5);
            $table->double('sizeW',10,5);
            $table->double('sizeH',10,5);
            $table->double('cbmQty',10,5);
            $table->double('kgQty',10,5);
            $table->smallInteger('unitPrc');
            $table->smallInteger('unit');
            $table->smallInteger('matCd');
            $table->smallInteger('catCd');
            $table->string('reqKind',8);
            $table->string('useFor',8);
            $table->string('description',150);
            $table->string('attachments',150);
            // $table->string('deletedDate',50)->nullable();
            $table->softDeletes();
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
        Schema::dropIfExists('items');
    }
}
