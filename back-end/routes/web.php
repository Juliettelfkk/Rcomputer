<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('dashboard');
})->name('dashboard');

Route::get('/register', [AuthController::class, 'register'])->name('register');

Route::post('/register', [AuthController::class, 'store']);

Route::get('/login', [AuthController::class, 'login'])->name('login');

Route::get('/products', function(){
    return view('pages.products');
})->name('products');

Route::get('/brands', function(){
    return view('pages.brands');
})->name('brands');

Route::get('/categories', function(){
    return view('pages.categories');
})->name('categories');

Route::get('/orders', function(){
    return view('pages.orders');
})->name('orders');

Route::get('/add-product', function () {
    return view('forms.product-form');
})->name('product-form');

Route::get('/add-category', function () {
    return view('forms.category-form');
})->name('category-form');

Route::get('/add-brand', function () {
    return view('forms.brand-form');
})->name('brand-form');
