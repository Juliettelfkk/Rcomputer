<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Brand;
use App\Models\Category;
use Illuminate\Support\Facades\Storage;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::orderby('created_at', 'DESC')->paginate(4);

        return view('pages.products', [
            'products' => $products,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $brands = Brand::all();
        $categories = Category::all();
        return view('forms.product-form', [
            'brands' => $brands,
            'categories' => $categories,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'description' => 'required',
            'price' => 'required',
            'discount' => 'required',
            'quantity' => 'required',
            'image' => 'image',
            'sku' => 'required',
            'category' => 'required',
            'brand' => 'required',
        ]);

        $validated['admin_id'] = auth()->user()->id;

        if (request()->hasFile('image')) {
            $imagePath = request('image')->store('products', 'public');
            $validated['image'] = $imagePath;
        }

        Product::create([
            'name' => $validated['name'],
            'description' => $validated['description'],
            'price' => $validated['price'],
            'discount' => $validated['discount'],
            'quantity' => $validated['quantity'],
            'image' => $validated['image'],
            'sku' => $validated['sku'],
            'admin_id' => $validated['admin_id'],
            'category_id' => $validated['category'],
            'brand_id' => $validated['brand'],
        ]);

        return redirect()
            ->route('products')
            ->with('success', 'Product Added Successfully !');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {

        Storage::disk('public')->delete($product->image ?? '');
        $admin_image = $product::get('image');
        $product->delete();

        return redirect()
            ->route('products')
            ->with('success', 'Product Deleted Successfully !');
    }
}
