<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redirect;

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\UserController;

Route::group([
    'prefix'        => 'admin',
    // 'middleware'    => 'admin',
    'as'            => 'admin.'
], function () {
    Route::get('/', function () {
        return redirect()->route('admin.dashboard.index');
    });

    // dashboard
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard.index');

    // user
    Route::get('/user', [UserController::class, 'index'])->name('user.index');
});