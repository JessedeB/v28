<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
})->name('home');

Route::get('/cards', function() {
    return view('cards');
})->name('cards');

Route::get('/profile', function() {
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
