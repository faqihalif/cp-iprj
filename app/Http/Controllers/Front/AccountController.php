<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\ProgramApplication;
use Illuminate\Support\Facades\Auth;
use App\Models\User\User;
use Illuminate\Support\Facades\Hash;
use App\Models\ApplicationList\ApplicationList;
use App\Jobs\SendEmailReviewApplicationList;


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
        $programApplication = ProgramApplication::all();

        // application list
        $applicationListRaw = ApplicationList::all();
        $applicationList = [];
        foreach ($applicationListRaw as $key => $value) {
            array_push($applicationList, [
                'id' => $value['id'],
                'selected_program' => json_decode($value['selected_program']),
                'fullname' => $value['fullname'],
                'gender' => $value['gender'],
                'date_of_birth' => $value['date_of_birth'],
                'address' => $value['address'],
                'email' => $value['email'],
                'phone_number' => $value['phone_number'],
                'educational_background' => json_decode($value['educational_background']),
                'work_experience' => json_decode($value['work_experience']),
                'requirements' => $value['requirements'],
                'status' => $value['status'],
                'reason' => $value['reason'],
                'created_at' => $value['created_at'],
                'updated_at' => $value['updated_at'],
            ]);
        }

        return Inertia::render('front/account/application-list/index', [
            'program_application' => $programApplication,
            'application_list' => $applicationList
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
        $applicationList = new ApplicationList;
        $applicationList->selected_program = json_encode($request->input('selected_program'));
        $applicationList->fullname = $request->input('fullname');
        $applicationList->gender = $request->input('gender');
        $applicationList->date_of_birth = $request->input('date_of_birth');
        $applicationList->address = $request->input('address');
        $applicationList->email = $request->input('email');
        $applicationList->phone_number = $request->input('phone_number');
        $applicationList->educational_background = json_encode($request->input('educational_backgrounds'));
        $applicationList->work_experience = json_encode($request->input('work_experiences'));
        $applicationList->requirements = $request->input('requirements');
        $applicationList->status = 'Waiting';
        $applicationList->save();

        // send email
        $program = $request->input('selected_program');
        dispatch(new SendEmailReviewApplicationList($request->input('fullname'), $request->input('email'), $program[0]['category'] . ' in ' . $program[0]['name']));

        return redirect()->route('applicationList.index')->with('message', [
            'type' => 'Success',
            'message' => 'Application submitted'
        ]);
    }
}
