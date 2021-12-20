<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role = Role::create([
            'name' => 'Administrador',
            'slug' => 'Administrador',
        ]);

        $permissionsCount = Permission::all()->count();
        $collection = collect([]);
        for ($i = 1; $i <= $permissionsCount; $i++) {
            $collection->push($i);
        }

        $role->permissions()->attach($collection);
    }
}
