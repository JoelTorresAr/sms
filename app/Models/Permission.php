<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug',
        'name'
    ];

    /**
     * The users that belong to the permission.
     */
    public function users()
    {
        return $this->belongsToMany('App\Models\User');
    }

    /**
     * The roles that belong to the permission.
     */
    public function roles()
    {
        return $this->belongsToMany('App\Models\Role');
    }
}
