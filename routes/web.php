<?php

use Illuminate\Support\Facades\Route;

// controller
use App\Http\Controllers\Front\HomeController;
use App\Http\Controllers\Front\ProgramsController;
use App\Http\Controllers\Front\ResearchAndPublicationController;
use App\Http\Controllers\Front\LecturerController;
use App\Http\Controllers\Front\FacilityController;
use App\Http\Controllers\Front\AboutUsController;
use App\Http\Controllers\Front\NewsController;
use App\Http\Controllers\Front\AccountController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home.index');

Route::get('/programs', [ProgramsController::class, 'index'])->name('programs.index');
Route::get('/programs/{slug}', [ProgramsController::class, 'show'])->name('programs.show');

Route::get('/research-and-publication', [ResearchAndPublicationController::class, 'index'])->name('researchAndPublication.index');

Route::get('/lecturer', [LecturerController::class, 'index'])->name('lecturer.index');

Route::get('/facility', [FacilityController::class, 'index'])->name('facility.index');

Route::get('/about-us', [AboutUsController::class, 'index'])->name('aboutUs.index');
Route::get('/about-us/philosophy', [AboutUsController::class, 'philosophy'])->name('aboutUs.philosophy');
Route::get('/about-us/vision-mission', [AboutUsController::class, 'visionMission'])->name('aboutUs.visionMission');
Route::get('/about-us/our-teams', [AboutUsController::class, 'ourTeams'])->name('aboutUs.ourTeams');
Route::get('/about-us/educational-objective', [AboutUsController::class, 'educationalObjective'])->name('aboutUs.educationalObjective');

Route::get('/news', [NewsController::class, 'index'])->name('news.index');

Route::get('/my-profile', [AccountController::class, 'index'])->name('myProfile.index');
Route::put('/my-profile/profile-information', [AccountController::class, 'updateProfileInformation'])->name('myProfile.updateProfileInformation');
Route::put('/my-profile/change-password', [AccountController::class, 'changePassword'])->name('myProfile.changePassword');

Route::get('/application-list', [AccountController::class, 'applicationList'])->name('applicationList.index');
Route::post('/application-list/new-application', [AccountController::class, 'newApplication'])->name('applicationList.newApplication');
Route::get('/application-list/create', [AccountController::class, 'applicationListCreate'])->name('applicationList.create');
Route::post('/application-list', [AccountController::class, 'applicationListStore'])->name('applicationList.store');

require __DIR__ . '/custom/auth.php';
require __DIR__ . '/custom/admin.php';
