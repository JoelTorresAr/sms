<template>
    <nav class="pcoded-navbar menu-light " :class="validarNavBar">
        <div class="navbar-wrapper ">
            <div class="navbar-content scroll-div" :class="(navbar) ? 'ps' : '' ">
                <ul class="nav pcoded-inner-navbar">
                    <li class="nav-item">
                        <router-link class="nav-link has-ripple" :to="'/'">
                            <span class="pcoded-micon">
                                <i class="feather icon-home"></i>
                            </span>
                            <span class="pcoded-mtext">Escritorio</span>
                        </router-link>
                    </li>

                    <template v-if="listPermissions.includes('cliente.index') ||
                                    listPermissions.includes('cliente.importar') ||
                                    listPermissions.includes('sms.index')">

                        <li class="nav-item pcoded-hasmenu" :class="(menu == 'Operacion' && flag) ? 'pcoded-trigger' : ''">
                            <a href="#" class="nav-link " @click.prevent="showMenus('Operacion')">
                                <span class="pcoded-micon">
                                    <i class="fas fa-network-wired"></i>
                                </span>
                                <span class="pcoded-mtext">Operacion</span>
                            </a>
                            <ul class="pcoded-submenu" :style="(menu == 'Operacion' && flag) ? 'display: block;' : ''">
                                <li class="nav-item">
                                    <router-link class="nav-link" :to="'/cliente'" v-if="listPermissions.includes('cliente.index')">
                                        <span class="pcoded-micon">
                                            <i class="fas fa-users"></i>
                                        </span>
                                        <span class="pcoded-mtext">Cliente</span>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" :to="'/cliente/importar'" v-if="listPermissions.includes('cliente.importar')">
                                        <span class="pcoded-micon">
                                            <i class="fas fa-user-plus"></i>
                                        </span>
                                        <span class="pcoded-mtext">Importar Clientes</span>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" :to="'/sms'" v-if="listPermissions.includes('sms.index')">
                                        <span class="pcoded-micon">
                                            <i class="fas fa-sms"></i>
                                        </span>
                                        <span class="pcoded-mtext">Enviar SMS</span>
                                    </router-link>
                                </li>
                            </ul>
                        </li>

                    </template>

                    <template v-if="listPermissions.includes('telefono.configurar')">

                        <li class="nav-item pcoded-hasmenu" :class="(menu == 'Configuración' && flag) ? 'pcoded-trigger' : ''">
                            <a href="#" class="nav-link " @click.prevent="showMenus('Configuración')">
                                <span class="pcoded-micon">
                                    <i class="fas fa-cogs"></i>
                                </span>
                                <span class="pcoded-mtext">Configuración</span>
                            </a>
                            <ul class="pcoded-submenu" :style="(menu == 'Configuración' && flag) ? 'display: block;' : ''">
                                <li class="nav-item">
                                    <router-link class="nav-link" :to="'/telefono-configurar'" v-if="listPermissions.includes('telefono.configurar')">
                                        <span class="pcoded-micon">
                                            <i class="fas fa-mobile-alt"></i>
                                        </span>
                                        <span class="pcoded-mtext">Teléfono</span>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" :to="'/tipomedia'" v-if="listPermissions.includes('tipomedia.index')">
                                        <span class="pcoded-micon">
                                            <i class="fas fa-tasks"></i>
                                        </span>
                                        <span class="pcoded-mtext">Tipo Media</span>
                                    </router-link>
                                </li>
                                  <li class="nav-item">
                                    <router-link class="nav-link" :to="'/tipomoneda'" v-if="listPermissions.includes('tipomoneda.index')">
                                        <span class="pcoded-micon">
                                            <i class="fas fa-tasks"></i>
                                        </span>
                                        <span class="pcoded-mtext">Tipo Moneda</span>
                                    </router-link>
                                </li>
                                  <li class="nav-item">
                                    <router-link class="nav-link" :to="'/tipo'" v-if="listPermissions.includes('tipo.index')">
                                        <span class="pcoded-micon">
                                            <i class="fas fa-tasks"></i>
                                        </span>
                                        <span class="pcoded-mtext">Tipo Persona</span>
                                    </router-link>
                                </li>
                                  <li class="nav-item">
                                    <router-link class="nav-link" :to="'/tipo'" v-if="listPermissions.includes('tipo.index')">
                                        <span class="pcoded-micon">
                                            <i class="fas fa-tasks"></i>
                                        </span>
                                        <span class="pcoded-mtext">Tipo Persona</span>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" :to="'/mensaje'" v-if="listPermissions.includes('mensaje.predeterminado.index')">
                                        <span class="pcoded-micon">
                                            <i class="far fa-comment"></i>
                                        </span>
                                        <span class="pcoded-mtext">Mensaje</span>
                                    </router-link>
                                </li>
                            </ul>
                        </li>

                    </template>

                    <template v-if="listPermissions.includes('log.index') ||
                                    listPermissions.includes('permiso.index') ||
                                    listPermissions.includes('rol.index') ||
                                    listPermissions.includes('usuario.index')">

                        <li class="nav-item pcoded-hasmenu" :class="(menu == 'Seguridad' && flag) ? 'pcoded-trigger' : ''">
                            <a href="#" class="nav-link " @click.prevent="showMenus('Seguridad')">
                                <span class="pcoded-micon">
                                    <i class="fas fa-fingerprint"></i>
                                </span>
                                <span class="pcoded-mtext">Seguridad</span>
                            </a>
                            <ul class="pcoded-submenu" :style="(menu == 'Seguridad' && flag) ? 'display: block;' : ''">
                                <li class="nav-item">
                                    <router-link class="nav-link" :to="'/log'" v-if="listPermissions.includes('log.index')">
                                        <span class="pcoded-micon">
                                            <i class="feather icon-eye"></i>
                                        </span>
                                        <span class="pcoded-mtext">Logs</span>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" :to="'/permiso'" v-if="listPermissions.includes('permiso.index')">
                                        <span class="pcoded-micon">
                                            <i class="feather icon-power"></i>
                                        </span>
                                        <span class="pcoded-mtext">Permisos</span>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link has-ripple" :to="'/rol'" v-if="listPermissions.includes('rol.index')">
                                        <span class="pcoded-micon">
                                            <i class="feather icon-unlock"></i>
                                        </span>
                                        <span class="pcoded-mtext">Roles</span>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link has-ripple" :to="'/usuario'" v-if="listPermissions.includes('usuario.index')">
                                        <span class="pcoded-micon">
                                            <i class="feather icon-user"></i>
                                        </span>
                                        <span class="pcoded-mtext">Usuarios</span>
                                    </router-link>
                                </li>
                            </ul>
                        </li>

                    </template>

                    <template v-if="listPermissions.includes('landing.page') || listPermissions.includes('statistics.index')">
                        <li class="nav-item pcoded-hasmenu" :class="(menu == 'Landing' && flag) ? 'pcoded-trigger' : ''">
                            <a href="#" class="nav-link " @click.prevent="showMenus('Landing')">
                                <span class="pcoded-micon">
                                    <i class="fas fa-fingerprint"></i>
                                </span>
                                <span class="pcoded-mtext">Landing</span>
                            </a>
                            <ul class="pcoded-submenu" :style="(menu == 'Landing' && flag) ? 'display: block;' : ''">
                                <li class="nav-item">
                                    <router-link class="nav-link" :to="'/landing-page'" v-if="listPermissions.includes('landing.page')">
                                        <span class="pcoded-micon">
                                            <i class="feather icon-eye"></i>
                                        </span>
                                        <span class="pcoded-mtext">Productos</span>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/reports/landing-page" target="_blank"  v-if="listPermissions.includes('landing.page')">
                                        <span class="pcoded-micon">
                                            <i class="feather icon-eye"></i>
                                        </span>
                                        <span class="pcoded-mtext">Reporte de suscritos</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/reports/payments" target="_blank"  v-if="listPermissions.includes('landing.page')">
                                        <span class="pcoded-micon">
                                            <i class="feather icon-eye"></i>
                                        </span>
                                        <span class="pcoded-mtext">Reporte de Pagos</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" :to="{name : 'statistics.index'}" v-if="listPermissions.includes('statistics.index')">
                                        <span class="pcoded-micon">
                                            <i class="fas fa-chart-line"></i>
                                        </span>
                                        <span class="pcoded-mtext">Estadisticas</span>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        props: {
            navbar: {
                type: Boolean
            }
        },
        data() {
            return {
                menu: 'home',
                flag: false
            }
        },
        mounted() {
            this.menu = localStorage.getItem('menuSelected')
        },
        computed: {
            validarNavBar(){
                if (this.navbar && this.windowWidth <= 991) {
                    return 'mob-open';
                } else {
                    if (this.navbar && this.windowWidth > 991) {
                        return 'navbar-collapsed';
                    } else {
                        if (!this.navbar && this.windowWidth <= 991) {
                            return ''
                        } else {
                            return ''
                        }
                    }
                }
            }
        },
        methods: {
            showMenus(menu) {
                if (menu != this.menu) {
                    this.flag   =   true
                } else {
                    this.flag   =   !this.flag
                }
                this.menu   =   menu;
                localStorage.setItem('menuSelected', menu)
            }
        }
    }
</script>

<style>

</style>
