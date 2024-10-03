<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\ProgramApplication;
use Illuminate\Support\Facades\Auth;
use App\Models\User\User;
use Illuminate\Support\Facades\Hash;

class AccountController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = User::where('email', Auth::user()->email)->first();

        return Inertia::render('front/account/my-profile/index', [
            'user' => $user
        ]);
    }

    public function updateProfileInformation(Request $request)
    {
        $user = User::where('email', Auth::user()->email)->first();
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->save();

        return redirect()->back()->with('message', [
            'type' => 'Success',
            'message' => 'My Profile updated'
        ]);
    }

    public function changePassword(Request $request)
    {
        $user = User::where('email', Auth::user()->email)->first();
        
        if (Hash::check($request->input('oldPassword'), $user->password)) {
            $user->password = Hash::make($request->input('newPassword'));
            $user->save();
            
            return redirect()->back()->with('message', [
                'type' => 'Success',
                'message' => 'Password changed'
            ]);
        } else {
            return redirect()->back()->with('message', [
                'type' => 'Error',
                'message' => 'The old password you entered do not match, please try again'
            ]);
        }
        
        // return response()->json($request->all());

        // $check = '';
        // $oldPassword = $request->input('oldPassword'); 
        // if (Hash::check($oldPassword, 'Pramukasari3')) {
        //     $check = true;
        // } else {
        //     $check = false;
        // }

        // $data = [
        //     'currentPassword' => Hash::make('Pramukasari3'),
        //     'oldPassword' => $oldPassword,
        //     'check' => $check
        // ];

        // return response()->json($data);
    }

    public function applicationList()
    {
        $data = ProgramApplication::all();

        return Inertia::render('front/account/application-list/index', [
            'program_application' => $data
        ]);
    }

    public function newApplication(Request $request)
    {
        return redirect()->route('applicationList.create', ['program' => $request->input('program')]);
    }

    public function applicationListCreate(Request $request)
    {
        if (!$request->input('program')) {
            return redirect()->route('applicationList.index');
        } else {
            $data = [];
            foreach ($request->input('program') as $id) {
                $program = ProgramApplication::where('id', $id)->first();
                array_push($data, $program);
            }

            return Inertia::render('front/account/application-list/create', [
                'program' => $data
            ]);
        }
    }

    public function applicationListStore(Request $request)
    {
        return redirect()->route('applicationList.index')->with('message', [
            'type' => 'Success',
            'message' => 'Application submitted'
        ]);
    }
}
