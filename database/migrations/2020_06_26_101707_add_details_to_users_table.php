<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDetailsToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            //
            $table->string('firstNameJp',30)->nullable();
            $table->string('lastNameJp',30)->nullable();
            $table->string('department',30)->nullable();
            $table->string('employeeId',30)->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
            $table->dropColumn('firstNameJp');
            $table->dropColumn('lastNameJp');
            $table->dropColumn('department');
            $table->dropColumn('employeeId');
        });
    }
}
