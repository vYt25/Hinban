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
            // $table->id();
            // $table->string('class',5);
            // $table->smallInteger('shipmentWeek');
            // $table->smallInteger('shipmentYear');
            // $table->smallInteger('toCsv');
            // $table->smallInteger('approved')->nullable();
            // $table->smallInteger('approvedBy')->nullable();
            // $table->string('approvedDate',50)->nullable();
            // // $table->string('deletedDate',50)->nullable();
            // $table->timestamps();
            // $table->softDeletes();


            $table->id();
            $table->string('hinbanId');
            $table->string('class',5);
            $table->smallInteger('shipmentWeek');
            $table->smallInteger('shipmentYear');
            $table->smallInteger('encodedBy');
            $table->timestamps();
            $table->softDeletes();

            $table->smallInteger('rndJaApprover');
            $table->smallInteger('rndJaRecieve');
            $table->string('rndJaRecievedDate',50);
            $table->smallInteger('rndJaApproval');
            $table->string('rndJaApprovedDate',50);

            $table->smallInteger('classAApprover');
            $table->smallInteger('classARecieve');
            $table->string('rndJaRecievedDate',50);
            $table->smallInteger('classAApproval');
            $table->string('clasclassAApprovedDatesAApprover',50);

            $table->smallInteger('logisticsRecieve');
            $table->string('logisticsRecievedDate',50);
            $table->smallInteger('logisticsUpdatedBy');
            $table->string('logisticsFieldUpdatedDate');
            $table->smallInteger('logisticsFields',50);
            
            $table->smallInteger('toCsv');



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
