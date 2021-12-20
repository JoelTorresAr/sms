<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\EstadisticaController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\LandingClientController;
use App\Http\Controllers\LogController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\PhoneController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SmsController;
use App\Http\Controllers\TipoController;
use App\Http\Controllers\TipomonedaController;
use App\Http\Controllers\TipomediaController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WelcomeConttroller;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;

Route::group(['prefix' => 'auth'], function ($router) {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('me', [AuthController::class, 'me']);
});

Route::group(['prefix' => 'seguridad'], function ($router) {
    Route::get('log/index', [LogController::class, 'index']);

    Route::get('permiso/index', [PermissionController::class, 'index']);
    Route::post('permiso/store', [PermissionController::class, 'store']);
    Route::get('permiso/show/{id}', [PermissionController::class, 'show']);
    Route::put('permiso/update/{id}', [PermissionController::class, 'update']);

    Route::get('rol/index', [RoleController::class, 'index']);
    Route::post('rol/store', [RoleController::class, 'store']);
    Route::get('rol/show/{id}', [RoleController::class, 'show']);
    Route::put('rol/update/{id}', [RoleController::class, 'update']);

    Route::get('usuario/index', [UserController::class, 'index']);
    Route::post('usuario/store', [UserController::class, 'store']);
    Route::get('usuario/show/{id}', [UserController::class, 'show']);
    Route::get('usuario/showProfile', [UserController::class, 'showProfile']);
    Route::put('usuario/update/{id}', [UserController::class, 'update']);
    Route::put('usuario/updateProfile/{id}', [UserController::class, 'updateProfile']);
    Route::delete('usuario/destroy/{id}', [UserController::class, 'destroy']);
    Route::post('usuario/permission', [UserController::class, 'permission']);
    Route::get('usuario/rolesPermissions', [UserController::class, 'rolesPermissions']);
});

Route::group(['prefix' => 'file'], function ($router) {
    Route::post('store', [FileController::class, 'store']);
    Route::post('update/{id}', [FileController::class, 'update']);
});

Route::group(['prefix' => 'configuracion'], function ($router) {
    Route::post('telefono/store', [PhoneController::class, 'store']);
    Route::put('telefono/update/{id}', [PhoneController::class, 'update']);
    Route::get('telefono/show', [PhoneController::class, 'show']);

    Route::get('tipo/index', [TipoController::class, 'index']);
    Route::post('tipo/store', [TipoController::class, 'store']);
    Route::get('tipo/show/{id}', [TipoController::class, 'show']);
    Route::put('tipo/update/{id}', [TipoController::class, 'update']);

    Route::get('tipomedia/index', [TipomediaController::class, 'index']);
    Route::post('tipomedia/store', [TipomediaController::class, 'store']);
    Route::get('tipomedia/show/{id}', [TipomediaController::class, 'show']);
    Route::put('tipomedia/update/{id}', [TipomediaController::class, 'update']);

    Route::get('tipomoneda/index', [TipomonedaController::class, 'index']);
    Route::post('tipomoneda/store', [TipomonedaController::class, 'store']);
    Route::get('tipomoneda/show/{id}', [TipomonedaController::class, 'show']);
    Route::put('tipomoneda/update/{id}', [TipomonedaController::class, 'update']);

    Route::get('mensaje/index', [MessageController::class, 'index']);
    Route::post('mensaje/store', [MessageController::class, 'store']);
    Route::get('mensaje/show/{id}', [MessageController::class, 'show']);
    Route::put('mensaje/update/{id}', [MessageController::class, 'update']);
    Route::delete('mensaje/destroy/{id}', [MessageController::class, 'destroy']);
});

Route::group(['prefix' => 'operacion'], function ($router) {
    Route::get('cliente/index', [ClientController::class, 'index']);
    Route::get('cliente/onlyActive', [ClientController::class, 'onlyActive']);
    Route::post('cliente/store', [ClientController::class, 'store']);
    Route::post('cliente/storeMultiple', [ClientController::class, 'storeMultiple']);
    Route::get('cliente/show/{id}', [ClientController::class, 'show']);
    Route::put('cliente/update/{id}', [ClientController::class, 'update']);
    Route::delete('cliente/destroy/{id}', [ClientController::class, 'destroy']);

    Route::post('sms/send', [SmsController::class, 'send']);
    Route::get('sms/notification-state', [SmsController::class, 'notificationState']);
});

Route::group(['prefix' => 'landing'], function ($router) {
    Route::get('landing-page/index', [ProductController::class, 'index']);
    Route::post('landing-page/store', [ProductController::class, 'store']);
    Route::get('landing-page/getURI', [ProductController::class, 'getURI']);
    Route::get('landing-page/show/{id}', [ProductController::class, 'show']);
    Route::post('landing-page/show/{id}', [ProductController::class, 'saveForm']);
});

Route::group(['prefix' => 'reports'], function ($router) {
    Route::get('landing-page', [ReportController::class, 'LandingForm']);
    Route::get('payments', [ReportController::class, 'Payments']);
});

Route::group(['prefix' => 'estadisticas'], function ($router) {
    Route::post('records', [EstadisticaController::class, 'records']);
});

Route::get('/{optional?}', [WelcomeConttroller::class, 'verifyAction'])->name('basepath')->where('optional', '.*');
