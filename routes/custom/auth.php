<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redirect;

use App\Http\Controllers\AuthController;

Route::group([
    'prefix'        => 'auth',
    'middleware'    => 'authenticate',
    'as'            => 'auth.'
], function () {
    Route::get('/login', [AuthController::class, 'index'])->name('index');
    Route::post('/login', [AuthController::class, 'login'])->name('login');

    Route::get('/register', [AuthController::class, 'registerView'])->name('register.index');
    Route::post('/register', [AuthController::class, 'register'])->name('register');

    Route::get('/forget-password', [AuthController::class, 'forgetPasswordView'])->name('forgetPassword.index');
    Route::post('/forget-password', [AuthController::class, 'forgetPassword'])->name('forgetPassword');

    Route::get('/reset-password/{token?}', [AuthController::class, 'resetPasswordView'])->name('resetPassword.index');
    Route::post('/reset-password', [AuthController::class, 'resetPassword'])->name('resetPassword');
});

Route::get('/logout', [AuthController::class, 'logout'])->name('auth.logout');