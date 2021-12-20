<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'description', 'detalle', 'ubicacion', 'telefono', 'pago', 'correo_notificacion'
    ];
    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['status_description'];

    /**
     * Get the tipo that owns the client.
     */
    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function file()
    {
        return $this->belongsTo('App\Models\File');
    }

    public function imagen_fondo()
    {
        return $this->belongsTo('App\Models\File', 'image_fondo', 'id');
    }

    public function tipomedia()
    {
        return $this->belongsTo('App\Models\Tipomedia');
    }

    public function tipomoneda()
    {
        return $this->belongsTo('App\Models\Tipomoneda');
    }

    public function getStatusDescriptionAttribute()
    {
        if ($this->status == 'A') {
            return 'Activo';
        }
        return 'Inactivo';
    }
}
