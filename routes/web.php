<?php

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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/{any?}', 'SinglePageController@index')->where('any', '.*');

// Route::get('/{any?}', function () {
//     Route::get('/{any}', 'SinglePageController@index'});
// })->where('any', '.*');

Auth::routes();



// Route::get('/home', 'HomeController@index')->name('home');


Route::any('/upload','SaveController@upload');

Route::get('export/', 'ExportController@export');
