<?php

/**
 * Liste des routes :
 * /
 * /articles
 * /a-propos
 * /curriculum-vitae
 * /tableau-de-bord
 */

Auth::routes();

Route::get('/', 'Controller@home')->name('home');
Route::get('/home', 'Controller@home')->name('home');
Route::get('/a-propos', 'Controller@about')->name('about');
Route::get('/environnement', 'Controller@environnement')->name('environnement');

Route::get('/articles', 'PostsController@index')->name('posts.index');
Route::get('/articles/{slug}', 'PostsController@show')->name('posts.show');

Route::get('/articles/new', 'PostsController@add')->name('posts.add');
Route::post('/articles/new', ['uses' => 'PostsController@store'])->name('posts.store');

Route::get('/articles/edit/{id}', ['uses' => 'PostsController@edit'])->name('posts.edit');
Route::put('/articles/edit/{id}', ['uses' => 'PostsController@update'])->name('posts.update');
