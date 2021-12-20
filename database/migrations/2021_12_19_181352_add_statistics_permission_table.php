<?php

use App\Models\Permission;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddStatisticsPermissionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Permission::create(['slug'=>'statistics.index','name'=> 'Visualizar Estadisticas']);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
       $permission = Permission::firstWhere('slug','statistics.index');
       if (isset($permission)) {
           $permission->delete();
       }
    }
}
