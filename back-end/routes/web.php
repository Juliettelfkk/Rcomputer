<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BrandsController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProductsController;
use Illuminate\Support\Facades\Route;


Route::get('/', [DashboardController::class, 'index'])
    ->name('dashboard')
    ->middleware('auth');

Route::get('/register', [AuthController::class, 'register'])
    ->name('register');

Route::post('/register', [AuthController::class, 'store']);

Route::get('/login', [AuthController::class, 'login'])
    ->name('login');

Route::post('/login', [AuthController::class, 'authenticate']);

Route::post('/logout', [AuthController::class, 'logout'])
    ->name('logout');


Route::get('/orders', function () {
    return view('pages.orders');
})->name('orders');


Route::get('/product', [ProductsController::class, 'index'])
    ->name('products')
    ->middleware('auth');

Route::get('/add-product', [ProductsController::class, 'create'])
    ->name('product-form')
    ->middleware('auth');

Route::post('/add-product', [ProductsController::class, 'store'])
    ->name('forms.addProduct')
    ->middleware('auth');

Route::delete('/product/{product}', [ProductsController::class, 'destroy'])
    ->name('product.destroy');

Route::get('/categories', [CategoriesController::class, 'index'])
    ->name('categories')
    ->middleware('auth');

Route::get('/add-category', [CategoriesController::class, 'create'])
    ->name('category-form')
    ->middleware('auth');

Route::post('/add-category', [CategoriesController::class, 'store'])
    ->name('forms.addCategory')
    ->middleware('auth');

Route::delete('/category/{category}', [CategoriesController::class, 'destroy'])
    ->name('category.destroy');

Route::get('/brand', [BrandsController::class, 'index'])
    ->name('brands')
    ->middleware('auth');

Route::get('/add-brand', [BrandsController::class, 'create'])
    ->name('brand-form')
    ->middleware('auth');


Route::post('/add-brand', [BrandsController::class, 'store'])
    ->name('forms.addBrand')
    ->middleware('auth');

Route::delete('/brand/{brand}', [BrandsController::class, 'destroy'])
    ->name('brand.destroy');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
