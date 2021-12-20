<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory;

    /**
     * Get the users for the file.
     */
    public function users()
    {
        return $this->hasMany('App\Models\User');
    }
}
