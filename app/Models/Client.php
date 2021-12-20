<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['status_name'];
    
    /**
     * Get the tipo that owns the client.
     */
    public function tipo()
    {
        return $this->belongsTo('App\Models\Tipo');
    }

    public function getStatusNameAttribute()
    {
        if ($this->status == 'A') {
            return 'Activo';
        }
        return 'Inactivo';
    }
}
