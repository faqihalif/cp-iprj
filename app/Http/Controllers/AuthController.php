<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\User\User;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use App\Jobs\SendEmailResetPassword;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    public function index()
    {
        return Inertia::render('auth/login');
    }

    public function login(Request $request)
    {
        $checkUser = User::where('email', $request->input('email'))->get();

        if (count($checkUser) == 0) {
            return redirect()->back()->with('message', [
                'type' => 'Error',
                'message' => 'Account not found'
            ]);
        } else {
            $auth = Auth::attempt([
                'email' => $request->input('email'),
                'password' => $request->input('password')
            ]);
    
            if (!$auth) {
                return redirect()->back()->with('message', [
                    'type' => 'Error',
                    'message' => 'Email or password is wrong'
                ]);
            } else {
                return redirect()->route('myProfile.index');
            }
        }

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
            return redirect()->route('myProfile.index')->with('message', [
                'type' => 'Success',
                'message' => 'Account has successfully created'
            ]);
        }
    }

    public function forgetPasswordView()
    {
        return Inertia::render('auth/forget-password');
    }

    public function forgetPassword(Request $request)
    {
        $user = User::where('email', $request->input('email'))->get();
        if (count($user) > 0) {
            $token = Str::random(64);

            $searchEmailReset = DB::table('password_reset_tokens')->where('email', $request->input('email'))->get();
            if (count($searchEmailReset) > 0) {
                $deleteEmailReset = DB::table('password_reset_tokens')->where('email', $request->input('email'))->delete();

                DB::table('password_reset_tokens')->insert([
                    'email' => $request->email, 
                    'token' => $token, 
                    'created_at' => Carbon::now()
                ]);
        
                dispatch(new SendEmailResetPassword($user[0]->name, $request->input('email'), $token));
                
                return redirect()->back()->with('message', [
                    'type' => 'Success',
                    'message' => 'Account has successfully created'
                ]);
            } else {
                DB::table('password_reset_tokens')->insert([
                    'email' => $request->email, 
                    'token' => $token, 
                    'created_at' => Carbon::now()
                ]);
        
                dispatch(new SendEmailResetPassword($user[0]->name, $request->input('email'), $token));
                
                return redirect()->back()->with('message', [
                    'type' => 'Success',
                    'message' => 'Account has successfully created'
                ]);
            }
        } else {
            return redirect()->back()->with('message', [
                'type' => 'Error',
                'message' => 'User not found'
            ]);
        }
    }

    public function resetPasswordView($token = null)
    {
        $resetPassword = DB::table('password_reset_tokens')->where('token', $token)->get();

        if (count($resetPassword) == 0) {
            return redirect()->route('auth.forgetPassword.index')->with('message', [
                'type' => 'Error',
                'message' => 'Reset password link expired, please try again'
            ]);
        } else {
            return Inertia::render('auth/reset-password', [
                'token' => $resetPassword[0]->token
            ]);
        }
    
    }

    public function resetPassword(Request $request)
    {
        $searchEmailReset = DB::table('password_reset_tokens')->where('token', $request->input('token'))->first();
        
        // change password
        $user = User::where('email', $searchEmailReset->email)->first();
        $user->password = Hash::make($request->input('password'));
        $user->save();

        // delete reset email
        $deleteEmailReset = DB::table('password_reset_tokens')->where('token', $request->input('token'))->delete();

        // redirect to my profile
        return redirect()->route('auth.index')->with('message', [
            'type' => 'Success',
            'message' => 'Your password has been successfully changed'
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        return redirect()->route('auth.index');
    }

}
