<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Http\Resources\OrdersResource;
use App\Models\Client;
use App\Models\OrderProduct;

class OrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrderRequest $request)
    {
        $client = Client::create([
            'first_name' => $request['order'][0]['first_name'],
            'last_name' => $request['order'][0]['last_name'],
            'email' => $request['order'][0]['email'],
            'phone' => $request['order'][0]['phone'],
            'address' => $request['order'][0]['address'],
            'city' => $request['order'][0]['city'],
        ]);

        $order = Order::create([
            'client_id' => $client->id,
            'total_price' => $request['order'][1]['total_price']
        ]);

        $product = count($request['order'][1]['products']);

        for($i = 0; $i < $product; $i++){
            OrderProduct::create([
                'order_id' => $order->id,
                'product_id' => $request['order'][1]['products'][$i],
                'product_quantity' => $request['order'][1]['quantities'][$i],
            ]);
        }

        return [$client, $order];
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrderRequest $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}
