<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBatchesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('batches', function (Blueprint $table) {
            $table->id();
            $table->string('hinbanId',30);
            $table->string('class',5);
            $table->smallInteger('shipmentWeek');
            $table->smallInteger('shipmentYear');
            $table->smallInteger('encodedBy');
            $table->timestamps();
            $table->softDeletes();

            $table->smallInteger('rndJaApprover')->nullable();
            $table->smallInteger('rndJaRecieve')->nullable();
            $table->string('rndJaRecievedDate',50)->nullable();
            $table->smallInteger('rndJaApproval')->nullable();
            $table->string('rndJaApprovedDate',50)->nullable();

            $table->smallInteger('classAApprover')->nullable();
            $table->smallInteger('classARecieve')->nullable();
            $table->string('classARecievedDate',50)->nullable();
            $table->smallInteger('classAApproval')->nullable();
            $table->string('classAApprovedDatesAApprover',50)->nullable();

            $table->smallInteger('logisticsRecieve')->nullable();
            $table->string('logisticsRecievedDate',50)->nullable();
            $table->smallInteger('logisticsUpdatedBy')->nullable();
            $table->string('logisticsFieldUpdatedDate',50)->nullable();
            $table->smallInteger('logisticsFields')->nullable();
            
            $table->smallInteger('toCsv')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('batches');
    }
}
