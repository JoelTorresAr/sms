<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LandingForm extends Model
{

    protected $table = 'form';
    protected $fillable = [
        'nombres', 'mail', 'direction','telephone'
    ];
}
