<template>
    <div class="pcoded-content">
        <div class="page-header">
            <div class="page-block">
                <div class="row align-items-center">
                    <div class="col-md-12">
                        <div class="page-header-title">
                            <h5 class="m-b-10">Gestión Usuarios</h5>
                        </div>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link  :to="{name:'usuario.index'}">
                                    <i class="feather icon-user"></i>
                                </router-link>
                            </li>
                            <li class="breadcrumb-item">
                                <router-link  :to="{name:'usuario.index'}">
                                    Navegar entre Usuarios
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-sm-6">
                                <form class="form-inline" @submit.prevent>
                                    <div class="form-group mx-sm-3 mb-2 fill">
                                        <label class="sr-only">Buscar</label>
                                        <input type="text" class="form-control" placeholder="Buscar" v-model="filter" @keyup.enter.prevent="getListarUsuarios">
                                    </div>
                                    <button type="button" class="btn btn-primary mb-2" v-loading.fullscreen.lock="fullscreenLoading" @click.passive="getListarUsuarios">Buscar</button>
                                </form>
                            </div>
                            <div class="col-sm-6">
                                <div class="btn-actions">
                                    <div class="btn-group card-option" v-if="listPermissions.includes('usuario.crear')">
                                        <el-tooltip class="item" effect="dark" content="Nuevo Usuario" placement="top">
                                            <router-link class="btn  btn-icon btn-outline-primary" :to="{name:'usuario.crear'}">
                                                <i class="feather icon-plus"></i>
                                            </router-link>
                                        </el-tooltip>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body table-border-style">
                        <div class="table-responsive">
                            <template v-if="listFilter.length">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Correo</th>
                                            <th>Estado</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, index) in listFilter" :key="index">
                                            <td v-text="item.name"></td>
                                            <td v-text="item.email"></td>
                                            <td>
                                                <el-tag v-if="item.status == 'A'" type="success" v-text="item.status_name"></el-tag>
                                                <el-tag v-else type="danger" v-text="item.status_name"></el-tag>
                                            </td>
                                            <td>
                                                <template v-if="item.status == 'A'">
                                                    <el-tooltip class="item" effect="dark" content="Ver Usuario" placement="top" v-if="listPermissions.includes('usuario.ver')">
                                                        <button  class="btn  btn-icon btn-outline-primary" @click.prevent="abrirModalByOption('usuario', 'ver', item)">
                                                            <i class="fas fa-folder"></i>
                                                        </button>
                                                    </el-tooltip>

                                                    <el-tooltip class="item" effect="dark" content="Editar Usuario" placement="top" v-if="listPermissions.includes('usuario.editar')">
                                                        <router-link class="btn  btn-icon btn-outline-info" :to="{name:'usuario.editar', params:{id: item.id}}">
                                                            <i class="fas fa-pencil-alt"></i>
                                                        </router-link>
                                                    </el-tooltip>

                                                    <el-tooltip class="item" effect="dark" content="Gestionar Permisos" placement="top" v-if="listPermissions.includes('usuario.permiso')">
                                                        <router-link class="btn  btn-icon btn-outline-success" :to="{name:'usuario.permiso', params:{id: item.id}}">
                                                            <i class="fas fa-key"></i>
                                                        </router-link>
                                                    </el-tooltip>

                                                    <el-tooltip class="item" effect="dark" content="Desactivar Usuario" placement="top" v-if="listPermissions.includes('usuario.desactivar')">
                                                        <button  class="btn  btn-icon btn-outline-danger" @click.prevent="setCambiarEstadoUsuario(1, item.id)">
                                                            <i class="fas fa-eye-slash"></i>
                                                        </button>
                                                    </el-tooltip>

                                                </template>
                                                <template v-else>
                                                    <el-tooltip class="item" effect="dark" content="Activar Usuario" placement="top" v-if="listPermissions.includes('usuario.activar')">
                                                        <button class="btn  btn-icon btn-outline-danger" @click.prevent="setCambiarEstadoUsuario(2, item.id)">
                                                            <i class="fas fa-eye"></i>
                                                        </button>
                                                    </el-tooltip>
                                                </template>
                                                           <el-tooltip
                          class="item"
                          effect="dark"
                          content="Ver Detalle"
                          placement="top"
                        >
                          <button
                            class="btn btn-icon btn-outline-primary"
                            @click.prevent="
                              abrirLandingPage(item)
                            "
                          >
                            <i class="fas fa-eye"></i>
                          </button>
                        </el-tooltip>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <el-pagination
                                    background
                                    @size-change="handleSizeChange"
                                    @current-change="handleCurrentChange"
                                    :current-page.sync="currentPage1"
                                    :page-size="10"
                                    layout="total, prev, pager, next"
                                    :total="listUsuarios.length">
                                </el-pagination>
                            </template>
                            <template v-else>
                                <div class="alert alert-primary" role="alert">
                                    No se encontraron registros
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <el-dialog title="Detalle Usuario" :visible.sync="modalUsuario" width="85%" :close-on-click-modal="false">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-body">
                            <form>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="Nombre">Nombre</label>
                                            <input type="text" class="form-control" id="Nombre" placeholder="Nombre" v-model="record.name" readonly>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="Usuario">Usuario</label>
                                            <input type="text" class="form-control" id="Usuario" placeholder="Usuario" v-model="record.username" readonly>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="CorreoElectronico">Correo Electronico</label>
                                            <input type="text" class="form-control" id="CorreoElectronico" placeholder="Correo Electronico" v-model="record.email" readonly>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="Estado">Estado</label>
                                            <el-tag type="success" v-text="record.status_name" class="form-control" v-if="record.status == 'A'"></el-tag>
                                            <el-tag type="danger" v-text="record.status_name" class="form-control"  v-else></el-tag>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    <el-divider><strong>Roles</strong></el-divider>

                    <div class="card">
                        <div class="card-body table-border-style">
                            <div class="table-responsive">
                                <template v-if="listRoles.length">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Descripción</th>
                                                <th>Slug</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item, index) in listRoles" :key="index">
                                                <td v-text="item.name"></td>
                                                <td v-text="item.slug"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </template>
                                <template v-else>
                                    <div class="alert alert-primary" role="alert">
                                        No hay ningún rol asingado al usuario {{ record.name }}.
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>

                    <el-divider><strong>Permisos</strong></el-divider>

                    <div class="card">
                        <div class="card-body table-border-style">
                            <div class="table-responsive">
                                <template v-if="listPermisos.length">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Descripción</th>
                                                <th>Slug</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item, index) in listPermisos" :key="index">
                                                <td v-text="item.name"></td>
                                                <td v-text="item.slug"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </template>
                                <template v-else>
                                    <div class="alert alert-primary" role="alert">
                                        No hay ningún permiso asingado al usuario {{ record.name }}.
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <span slot="footer" class="dialog-footer">
                <el-button @click="abrirModal">Cerrar</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";

    export default {
        data(){
            return {
                listUsuarios: [],
                listFilter: [],
                filter: '',
                fullscreenLoading: false,
                currentPage1: 1,
                page: 0,
                pageNumber: 0,
                perPage: 5,
                modalUsuario: false,
                record: {
                    name : '',
                    username: '',
                    email: '',
                    status: '',
                    status_name: ''
                },
                listRoles: [],
                listPermisos: [],
                listFullPermisos: []
            }
        },
        mounted() {
            this.loadUser();
            this.getListarUsuarios();
        },
        methods: {
            handleSizeChange(val) {
                console.log(`${val} items per page`);
            },
            handleCurrentChange(val = 0) {
                this.page = val;

                if (val == 0) {
                    val = 0
                } else {
                    val = val - 1
                }

                let inicio = val * 10,
                    fin    = inicio + 10;
                this.listFilter =  this.listUsuarios.slice(inicio, fin);
            },

            ...mapActions({
                attempt: 'usuario/attempt'
            }),

            loadUser() {
                this.attempt(localStorage.getItem('token')).then(() => {
                }).catch((error) => {
                    if (error.response.status == 401) {
                        this.notification('error', error.response.data.error, 0)
                    }
                }).finally(() => {
                    this.fullscreenLoading = false;
                })
            },

            abrirModal(){
                this.modalUsuario = !this.modalUsuario;
                this.limpiarModal();
            },
            limpiarModal(){
                this.record.name           =   ''
                this.record.email          =   ''
                this.record.status         =   ''
                this.record.status_name    =   ''
                this.listRoles              =   [];
                this.listPermisos           =   [];
            },
            async getListarUsuarios(){
                this.fullscreenLoading = true;

                var url = '/seguridad/usuario/index'

                const res = await this.callGetApi('get', url, {
                    'filter'    :   this.filter,
                })

                if (res.status == 200) {
                    this.listUsuarios   =   res.data;
                    this.handleCurrentChange()
                } else {
                    if (res.status == 401) {
                        this.$router.push({name: 'login'})
                        location.reload();
                        localStorage.clear();
                    }
                    if (res.status == 419) {
                        this.notification('error', 'Fue necesario recargar la página', 0)
                        location.reload();
                    }
                }
                this.fullscreenLoading  =   false;
            },
            setCambiarEstadoUsuario(op, id){
                this.$swal.fire({
                    title: '¿Está seguro de ' + ((op == 1) ? 'desactivar' : 'activar') + ' el usuario?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#2196F3',
                    cancelButtonColor: '#F44336',
                    confirmButtonText: ((op == 1) ? 'Si, desactivar' : 'Si, activar')
                }).then((result) => {
                    if (result.value) {
                        this.fullscreenLoading = true;
                        var url = '/seguridad/usuario/destroy/' + id

                        axios.delete(url, {
                            params:{
                                'status'    : (op == 1) ? 'I' : 'A'
                            }
                        }).then(response => {
                            this.notification('success', 'Se ' + ((op == 1) ? 'desactivo' : 'activo') + ' el usuario', 0)
                            this.getListarUsuarios();
                        }).catch(error => {
                            if (error.response.status == 401) {
                                this.$router.push({name: 'login'})
                                location.reload();
                                localStorage.clear();
                                this.fullscreenLoading = false;
                            }
                            if (error.response.status == 419) {
                                this.notification('error', 'Fue necesario recargar la página', 0)
                                location.reload();
                            }
                        })
                    }
                })
            },
            async abrirLandingPage(item) {
      let link = item.link
      let url = 'storage/public/image.jpg'
      window.open('http://landing.ariadna.store/landing_page/web-design/contacts.html?' + url, '__blank')
      // this.fullscreenLoading = true;

      // var url = "/landing/landing-page/show";

      // const res = await this.callGetApi("get", url, {
      //   description: item.description,
      // });

      // if (res.status == 200) {
      //   console.log(res.data);
      // } else {
      //   if (res.status == 401) {
      //     this.$router.push({ name: "login" });
      //     location.reload();
      //     localStorage.clear();
      //   }
      //   if (res.status == 419) {
      //     this.notification("error", "Fue necesario recargar la página", 0);
      //     location.reload();
      //   }
      // }
      // this.fullscreenLoading = false;
    },
            async getRolById(id){
                this.fullscreenLoading = true;

                var url = '/seguridad/usuario/show/' + id

                const res = await this.callApi('get', url)

                if (res.status == 200) {
                    this.listRoles      =   res.data.roles
                    this.listPermisos   =   res.data.permissions
                    this.modalUsuario   =   true;
                } else {
                    if (res.status == 401) {
                        this.$router.push({name: 'login'})
                        location.reload();
                        localStorage.clear();
                    }
                    if (res.status == 419) {
                        this.notification('error', 'Fue necesario recargar la página', 0)
                        location.reload();
                    }
                }
                this.fullscreenLoading  =   false;
            },
            abrirModalByOption(modulo, accion, data){
                switch (modulo) {
                    case "usuario":
                    {
                        switch (accion) {
                            case "ver":
                            {
                                //Setear información del arreglo
                                this.record.name           =   data.name;
                                this.record.username       =   data.username;
                                this.record.email          =   data.email;
                                this.record.status         =   data.status;
                                this.record.status_name    =   data.status_name;
                                //Obtener los permisos y roles por el usuario seleccionado
                                this.getRolById(data.id);
                            }
                            break;
                            default:
                                break;
                        }
                    }
                    break;
                    default:
                        break;
                }
            },
        }
    }
</script>

<style scoped>
   
</style>
