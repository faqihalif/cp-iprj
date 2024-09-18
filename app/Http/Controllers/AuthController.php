<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\User\User;
use Illuminate\Support\Facades\Hash;

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
                'type' => 'Error',
                'message' => 'Email or password is wrong'
            ]);
        }

        return redirect()->route('myProfile.index');
    }

    public function registerView()
    {
        return Inertia::render('auth/register');
    }

    public function register(Request $request)
    {
        $checkUser = User::where('email', $request->input('email'))->get();

        if (count($checkUser) > 0) {
            return redirect()->back()->with('message', [
                'type' => 'Error',
                'message' => 'Email already registered'
            ]);
        } else {
            $user = new User;
            $user->name = $request->input('name');
            $user->email = $request->input('email');
            $user->password = Hash::make($request->input('password'));
            $user->role = 'user';
            $user->save();

            // try to login
            $auth = Auth::attempt([
                'email' => $request->input('email'),
                'password' => $request->input('password')
            ]);

            // redirect to my profile
            return redirect()->route('myProfile.index');
        }
    }
}
