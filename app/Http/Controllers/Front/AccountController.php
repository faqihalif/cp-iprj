<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\ProgramApplication;

class AccountController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('front/account/my-profile/index');
    }

    public function updateProfileInformation()
    {

    }

    public function changePassword()
    {

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
}
