<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login()
    {
        return view('auth.login');
    }

    public function register()
    {
        return view('auth.register');
    }

    public function store(Request $request)
    {
        $validated = request()->validate([
            'first_name' => 'required|max:14|min:4',
            'last_name' => 'required|max:14|min:4',
            'email' => 'required|email|unique:admins,email',
            'password' => 'required|confirmed|min:8',
            'image' => '', // Adjust file types and size as needed
        ]);

        if (request()->hasFile('image')) {
            $imagePath = request('image')->store('profile', 'public');
            $validated['image'] = $imagePath;
        }

        Admin::create([
            'first_name' => $validated['first_name'],
            'last_name' => $validated['last_name'],
            'image' => $validated['image'] ?? null, // Ensure to handle the case when no image is uploaded
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        return redirect()
            ->route('dashboard')
            ->with('success', 'Account created successfully!');
    }

}
