<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStatementAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('statement_answers', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('userId');
            $table->integer('statementId');
            $table->integer('statementWeight');
            $table->integer('importanceWeight');
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
        Schema::drop('statement_answers');
    }
}
