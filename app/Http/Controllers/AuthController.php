<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\User\User;

class AuthController extends Controller
{
    public function index()
    {
        return Inertia::render('auth/login');
    }

    public function login(Request $request)
    {
        $checkUser = User::where('email', $request->input('email'))->first();
        return response()->json($checkUser);

        if (count($checkUser) == 0) {
            return redirect()->back()->with('message', [
                'type' => 'error',
                'message' => 'Email not registered'
            ]);
        }

        $auth = Auth::attempt([
            'email' => $request->input('email'),
            'password' => $request->input('password')
        ]);

        if (!$auth) {
            return redirect()->back()->with('message', [
                'type' => 'error',
                'message' => 'Email or password is wrong'
            ]);
        }

        return redirect()->route('admin.dashboard.index');
    }

    public function register()
    {
        return Inertia::render('auth/register');
    }
}
