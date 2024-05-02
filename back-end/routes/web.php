<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('dashboard');
})->name('dashboard');

Route::get('/products', function(){
    return view('products');
})->name('products');

Route::get('/brands', function(){
    return view('brands');
})->name('brands');

Route::get('/categories', function(){
    return view('categories');
})->name('categories');

Route::get('/orders', function(){
    return view('orders');
})->name('orders');

