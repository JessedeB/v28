<?php

use Illuminate\Support\Facades\Route;

Auth::routes();

//Route::get('/login', function() {
//   return view('auth.login');
//})->name('login');

Route::get('/', function () {
    return view('home');
})->name('home');

Route::get('cards', function() {
    return view('cards');
})->name('cards');

Route::get('profile', function() {
    return view('users.profile');
})->name('profile');

Route::get('buttons', function() {
    return view('buttons');
})->name('buttons');

Route::get('typography', function() {
   return view('typography');
})->name('typography');

Route::get('forms', function() {
   return view('forms');
})->name('forms');

Route::get('icons', function() {
    return view('icons');
})->name('icons');

Route::get('charts', function() {
    return view('charts');
})->name('charts');

Route::get('toasts', function() {
   return view('toasts');
})->name('toasts');
//Toast messages
Route::post('toast/{color}', [\App\Http\Controllers\MessageController::class, 'message'])->name('toast');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
