<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Internship;
class internshipController extends Controller
{
    public function index()
    {
        $internships = Internship::all();
        return $internships;
    }

    public function store(Request $request)
    {
        $internship = new Internship();
        $internship->internship_title = $request->input('internship_title');
        $internship->internship_description = $request->input('internship_description');
        $internship->save();
    }

    public function show($id)
    {
       $internship = Internship::find($id);
        return $internship;
       
    }

    public function update(Request $request, $id)
    {
        $internship = Internship::find($id);
        $internship ->internship_title =$request->input('internship_title');
        $internship ->internship_description = $request ->input('internship_description');
        $internship->save();
        return "successful updating user #".$internship->id;
    }

    public function destroy($id)
    {
        $internship = Internship::find($id);  
        $internship->delete();
        return "Internship record successfully deleted # " .input('id');
       
    }
}
