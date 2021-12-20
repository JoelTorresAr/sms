<?php

namespace App\Providers;

use App\Models\File;
use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use App\Observers\FileObserver;
use App\Observers\PermissionObserver;
use App\Observers\RoleObserver;
use App\Observers\UserObserver;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
   /** protected $listen = [
       * Registered::class => [
         *   SendEmailVerificationNotification::class,
       * ],
   * ];
     */
    protected $listen = [
        'Illuminate\Auth\Events\Logout' => [
        'App\Listeners\DeleteSessionData',
        ],
        ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        User::observe(UserObserver::class);
        Permission::observe(PermissionObserver::class);
        Role::observe(RoleObserver::class);
        File::observe(FileObserver::class);
    }
}
