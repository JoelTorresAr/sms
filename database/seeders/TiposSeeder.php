<?php

namespace Database\Seeders;

use App\Models\Tipo;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class TiposSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Tipo::create([
            'name' => Str::upper('Persona Natural')
        ]);
        Tipo::create([
            'name' => Str::upper('Persona Jurídica')
        ]);
        Tipo::create([
            'name' => Str::upper('Sucesión Indivisa')
        ]);
        Tipo::create([
            'name' => Str::upper('Sociedad Conyugal')
        ]);
        Tipo::create([
            'name' => Str::upper('Sociedad Irregular')
        ]);
        Tipo::create([
            'name' => Str::upper('Menor de Edad')
        ]);
    }
}
