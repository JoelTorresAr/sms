import Vue from 'vue'
import VueRouter from 'vue-router'

//Components


//var  dima = $("#saddsaad").val();
//document.getElementById('prueba').style.background=''+dima+'';


const Home = () => import('../components/Home.vue')
const Login = () => import('../views/Login.vue')
const Page404 = () => import('../views/404.vue')

const Log_index = () => import('../components/log/index.vue')

const Permiso_index = () => import('../components/permission/index.vue')
const Permiso_create = () => import('../components/permission/create.vue')
const Permiso_edit = () => import('../components/permission/edit.vue')

const Role_index = () => import('../components/role/index.vue')
const Role_create = () => import('../components/role/create.vue')
const Role_edit = () => import('../components/role/edit.vue')

const User_index = () => import('../components/user/index.vue')
const User_create = () => import('../components/user/create.vue')
const User_edit = () => import('../components/user/edit.vue')
const User_permission = () => import('../components/user/permission.vue')
const User_profile = () => import('../components/user/profile.vue')

const Phone_manage = () => import('../components/phone/createOrUpdate.vue')

const Tipo_index = () => import('../components/tipo/index.vue')
const Tipo_create = () => import('../components/tipo/create.vue')
const Tipo_edit = () => import('../components/tipo/edit.vue')

const Tipomedia_index = () => import('../components/tipomedia/index.vue')
const Tipomedia_create = () => import('../components/tipomedia/create.vue')

const Tipomoneda_index = () => import('../components/tipomoneda/index.vue')
const Tipomoneda_create = () => import('../components/tipomoneda/create.vue')

const Message_index = () => import('../components/message/index.vue')
const Message_create = () => import('../components/message/create.vue')
const Message_edit = () => import('../components/message/edit.vue')

const Client_index = () => import('../components/client/index.vue')
const Client_create = () => import('../components/client/create.vue')
const Client_edit = () => import('../components/client/edit.vue')
const Client_import = () => import('../components/client/import.vue')

const SMS_manage = () => import('../components/sms/index.vue')

const landing_index = () => import('../components/landing/index.vue')
const Landing_create = () => import('../components/landing/create.vue')
const Landing_profile = () => import('../components/landing/profile.vue')
const Statistics_index = () => import('../components/statistics/index.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '/landing-page',
        name: 'landing.page',
        component: landing_index,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/landing-page/crear',
        name: 'producto.crear',
        component: Landing_create,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/landing-page/perfil',
        name: 'landing-page.perfil',
        component: Landing_profile,
        meta: {
            requiresAuth: true,
        },
    },

    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/',
        name: 'Escritorio',
        component: Home,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/log',
        name: 'log.index',
        component: Log_index,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/permiso',
        name: 'permiso.index',
        component: Permiso_index,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/permiso/crear',
        name: 'permiso.crear',
        component: Permiso_create,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/permiso/editar/:id',
        name: 'permiso.editar',
        component: Permiso_edit,
        meta: {
            requiresAuth: true,
        },
        props: true
    },
    {
        path: '/rol',
        name: 'rol.index',
        component: Role_index,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/rol/crear',
        name: 'rol.crear',
        component: Role_create,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/rol/editar/:id',
        name: 'rol.editar',
        component: Role_edit,
        meta: {
            requiresAuth: true,
        },
        props: true
    },
    {
        path: '/usuario',
        name: 'usuario.index',
        component: User_index,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/usuario/crear',
        name: 'usuario.crear',
        component: User_create,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/usuario/editar/:id',
        name: 'usuario.editar',
        component: User_edit,
        meta: {
            requiresAuth: true,
        },
        props: true
    },
    {
        path: '/usuario/permiso/:id',
        name: 'usuario.permiso',
        component: User_permission,
        meta: {
            requiresAuth: true,
        },
        props: true
    },
    {
        path: '/usuario/perfil',
        name: 'usuario.perfil',
        component: User_profile,
        meta: {
            requiresAuth: true,
        },
    },

    {
        path: '/tipo',
        name: 'tipo.index',
        component: Tipo_index,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/tipomedia',
        name: 'tipomedia.index',
        component: Tipomedia_index,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/tipomedia/crear',
        name: 'tipomedia.crear',
        component: Tipomedia_create,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/tipomoneda/crear',
        name: 'tipomoneda.crear',
        component: Tipomoneda_create,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/tipomoneda',
        name: 'tipomoneda.index',
        component: Tipomoneda_index,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/tipo/editar/:id',
        name: 'tipo.editar',
        component: Tipo_edit,
        meta: {
            requiresAuth: true,
        },
        props: true
    },
    {
        path: '/telefono-configurar',
        name: 'telefono.configurar',
        component: Phone_manage,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/mensaje',
        name: 'mensaje.predeterminado.index',
        component: Message_index,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/mensaje/crear',
        name: 'mensaje.predeterminado.crear',
        component: Message_create,
        meta: {
            requiresAuth: true,
        },
        props: true
    },
    {
        path: '/mensaje/editar/:id',
        name: 'mensaje.predeterminado.editar',
        component: Message_edit,
        meta: {
            requiresAuth: true,
        },
        props: true
    },
    {
        path: '/cliente',
        name: 'cliente.index',
        component: Client_index,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/cliente/crear',
        name: 'cliente.crear',
        component: Client_create,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/cliente/editar/:id',
        name: 'cliente.editar',
        component: Client_edit,
        meta: {
            requiresAuth: true,
        },
        props: true
    },
    {
        path: '/cliente/importar',
        name: 'cliente.importar',
        component: Client_import,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/sms',
        name: 'sms.index',
        component: SMS_manage,
        meta: {
            requiresAuth: true,
        },
        props: true
    },
    {
        path: '/estadisticas',
        name: 'statistics.index',
        component: Statistics_index,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '*',
        component: Page404
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'active'
})

export default router
