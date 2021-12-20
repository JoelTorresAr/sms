<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Permission::create([
            'name' => 'Navegar Logs',
            'slug' => 'log.index',
        ]);
        Permission::create([
            'name' => 'Escritorio',
            'slug' => 'Escritorio',
        ]);
        Permission::create([
            'name' => 'Navegar Permisos',
            'slug' => 'permiso.index',
        ]);
        Permission::create([
            'name' => 'Crear Permiso',
            'slug' => 'permiso.crear',
        ]);
        Permission::create([
            'name' => 'Editar Permiso',
            'slug' => 'permiso.editar',
        ]);
        Permission::create([
            'name' => 'Navegar Roles',
            'slug' => 'rol.index',
        ]);
        Permission::create([
            'name' => 'Crear Rol',
            'slug' => 'rol.crear',
        ]);
        Permission::create([
            'name' => 'Editar Rol',
            'slug' => 'rol.editar',
        ]);
        Permission::create([
            'name' => 'Navegar Usuarios',
            'slug' => 'usuario.index',
        ]);
        Permission::create([
            'name' => 'Crear Usuario',
            'slug' => 'usuario.crear',
        ]);
        Permission::create([
            'name' => 'Editar Usuario',
            'slug' => 'usuario.editar',
        ]);
        Permission::create([
            'name' => 'Ver Usuario',
            'slug' => 'usuario.ver',
        ]);
        Permission::create([
            'name' => 'Activar Usuario',
            'slug' => 'usuario.activar',
        ]);
        Permission::create([
            'name' => 'Desactivar Usuario',
            'slug' => 'usuario.desactivar',
        ]);
        Permission::create([
            'name' => 'Permiso Usuario',
            'slug' => 'usuario.permiso',
        ]);
        Permission::create([
            'name' => 'Perfil Usuario',
            'slug' => 'usuario.perfil',
        ]);
        Permission::create([
            'name' => 'Navegar Tipos',
            'slug' => 'tipo.index',
        ]);
        Permission::create([
            'name' => 'Crear Tipo',
            'slug' => 'tipo.crear',
        ]);
        Permission::create([
            'name' => 'Editar Tipo',
            'slug' => 'tipo.editar',
        ]);
        Permission::create([
            'name' => 'Configurar Teléfono',
            'slug' => 'telefono.configurar',
        ]);
        Permission::create([
            'name' => 'Navegar Clientes',
            'slug' => 'cliente.index',
        ]);
        Permission::create([
            'name' => 'Crear Cliente',
            'slug' => 'cliente.crear',
        ]);
        Permission::create([
            'name' => 'Editar Cliente',
            'slug' => 'cliente.editar',
        ]);
        Permission::create([
            'name' => 'Importar Cliente',
            'slug' => 'cliente.importar',
        ]);
        Permission::create([
            'name' => 'Activar Cliente',
            'slug' => 'cliente.activar',
        ]);
        Permission::create([
            'name' => 'Desactivar Cliente',
            'slug' => 'cliente.desactivar',
        ]);
        Permission::create([
            'name' => 'Envira SMS',
            'slug' => 'sms.index',
        ]);
        Permission::create([
            'name' => 'Navegar Mensajes Predeterminados',
            'slug' => 'mensaje.predeterminado.index',
        ]);
        Permission::create([
            'name' => 'Crear Mensaje Predeterminado',
            'slug' => 'mensaje.predeterminado.crear',
        ]);
        Permission::create([
            'name' => 'Editar Mensaje Predeterminado',
            'slug' => 'mensaje.predeterminado.editar',
        ]);
        Permission::create([
            'name' => 'Eliminar Mensaje Predeterminado',
            'slug' => 'mensaje.predeterminado.eliminar',
        ]);
        Permission::create([
            'name' => 'Mi landing page',
            'slug' => 'landing.page',
        ]);
        Permission::create([
            'name' => 'Crear producto',
            'slug' => 'producto.crear',
        ]);
        Permission::create([
            'name' => 'Editar producto',
            'slug' => 'producto.editar',
        ]);
        Permission::create([
            'name' => 'Activar producto',
            'slug' => 'producto.activar',
        ]);
        Permission::create([
            'name' => 'Desactivar producto',
            'slug' => 'producto.desactivar',
        ]);
    
        
    }
}
