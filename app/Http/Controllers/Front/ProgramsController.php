<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Program;

class ProgramsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $fellowship = Program::where('type', 'fellowship')->get();
        $observership = Program::where('type', 'observership')->get();
        $residency = Program::where('type', 'residency')->get();

        return Inertia::render('front/program/index', [
            'fellowship' => $fellowship,
            'observership' => $observership,
            'residency' => $residency
        ]);
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        $program = Program::where('slug', $slug)->first();
        $data = [
            'id' => $program->id,
            'name' => $program->name,
            'slug' => $program->slug,
            'type' => $program->type,
            'data' => json_decode($program->data),
            'created_at' => $program->created_at,
            'updated_at' => $program->updated_at,
        ];

        return Inertia::render('front/program/show', [
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
