<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('application_lists', function (Blueprint $table) {
            $table->id();
            $table->json('selected_program')->nullable();
            $table->string('fullname')->nullable();
            $table->string('gender')->nullable();
            $table->string('date_of_birth')->nullable();
            $table->text('address')->nullable();
            $table->string('email')->nullable();
            $table->string('phone_number')->nullable();
            $table->json('educational_background')->nullable();
            $table->json('work_experience')->nullable();
            $table->json('requirements')->nullable();
            $table->string('status')->nullable();
            $table->text('reason')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('application_lists');
    }
};
