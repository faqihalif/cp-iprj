<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redirect;

use App\Http\Controllers\AuthController;

Route::group([
    'prefix'        => 'auth',
    // 'middleware'    => 'admin',
    'as'            => 'auth.'
], function () {
    Route::get('/login', [AuthController::class, 'index'])->name('index');
    Route::post('/login', [AuthController::class, 'login'])->name('login');
});