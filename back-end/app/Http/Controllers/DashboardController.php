<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(){
        $products_number = Product::all()->count();
        $categories_number = Category::all()->count();
        $brands_number = Brand::all()->count();
        $orders_number = Order::all()->count();

        $logInUser = Admin::find(auth()->user()->id);
        $auth_image = ('storage/' . $logInUser->image);

        $auth_name = ($logInUser->first_name . ' ' . $logInUser->last_name);

        return view('dashboard', [
            'products_number' => $products_number,
            'categories_number' => $categories_number,
            'brands_number' => $brands_number,
            'orders_number' => $orders_number,
            'image' => $auth_image,
            'fullName' => $auth_name,
        ]);
    }
}
