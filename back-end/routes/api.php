<?php

use App\Http\Controllers\BrandsController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\MessagesController;
use App\Http\Controllers\ProductsController;
use Illuminate\Support\Facades\Route;

Route::get('/products', [ProductsController::class, 'allProducts']);
    // the endpoint is : http://127.0.0.1:8000/api/products

Route::get('/categories', [CategoriesController::class, 'allCategories']);
    // the endpoint is : http://127.0.0.1:8000/api/categories

Route::get('/brands', [BrandsController::class, 'allBrands']);
    // the endpoint is : http://127.0.0.1:8000/api/brands

Route::apiResource('/message', MessagesController::class);
    // just use post the endpoint for add a new message is : http://127.0.0.1:8000/api/message


