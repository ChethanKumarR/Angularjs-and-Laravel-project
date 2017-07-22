<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Internship extends Model
{
    protected $table = 'internships';
    protected $fillable = ['id','internship_title' , 'internship_description'];
}

