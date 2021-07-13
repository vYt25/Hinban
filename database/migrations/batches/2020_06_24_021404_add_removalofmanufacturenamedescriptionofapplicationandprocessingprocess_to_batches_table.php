<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRemovalofmanufacturenamedescriptionofapplicationandprocessingprocessToBatchesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('batches', function (Blueprint $table) {
            //
            $table->dropColumn('manufactureName');
            $table->dropColumn('descriptionOfApplication');
            $table->dropColumn('processingProcess');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('batches', function (Blueprint $table) {
            //
            $table->string('manufactureName',150);
            $table->longText('descriptionOfApplication');
            $table->longText('processingProcess');
        });
    }
}
