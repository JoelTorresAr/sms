<template>
    <div class="pcoded-content">
        <div class="page-header">
            <div class="page-block">
                <div class="row align-items-center">
                    <div class="col-md-12">
                        <div class="page-header-title">
                            <h5 class="m-b-10">Gestión Clientes</h5>
                        </div>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link  :to="{name:'cliente.index'}">
                                    <i class="fas fa-users"></i>
                                </router-link>
                            </li>
                            <li class="breadcrumb-item">
                                <router-link  :to="{name:'cliente.index'}">
                                    Navegar entre Clientes
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
                                        <input type="text" class="form-control" placeholder="Buscar" v-model="filter" @keyup.enter.prevent="getListarClientes">
                                    </div>
                                    <button type="button" class="btn btn-primary mb-2" v-loading.fullscreen.lock="fullscreenLoading" @click.passive="getListarClientes">Buscar</button>
                                </form>
                            </div>
                            <div class="col-sm-6">
                                <div class="btn-actions">
                                    <div class="btn-group card-option" v-if="listPermissions.includes('cliente.importar')">
                                        <el-tooltip class="item" effect="dark" content="Importar Cliente" placement="top">
                                            <router-link class="btn  btn-icon btn-outline-success" :to="{name:'cliente.importar'}">
                                                <i class="fas fa-cloud-upload-alt"></i>
                                            </router-link>
                                        </el-tooltip>
                                    </div>
                                    <div class="btn-group card-option" v-if="listPermissions.includes('cliente.crear')">
                                        <el-tooltip class="item" effect="dark" content="Nuevo Cliente" placement="top">
                                            <router-link class="btn  btn-icon btn-outline-primary" :to="{name:'cliente.crear'}">
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
                                            <th>Código</th>
                                            <th>Nombre</th>
                                            <th>Dirección</th>
                                            <th>Lugar</th>
                                            <th>Teléfono Celular</th>
                                            <th>Tipo</th>
                                            <th>Estado</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, index) in listFilter" :key="index">
                                            <td v-text="item.code"></td>
                                            <td v-text="item.name"></td>
                                            <td v-text="item.address"></td>
                                            <td v-text="item.place"></td>
                                            <td v-text="item.phone_number"></td>
                                            <td v-text="item.tipo.name"></td>
                                            <td>
                                                <el-tag v-if="item.status == 'A'" type="success" v-text="item.status_name"></el-tag>
                                                <el-tag v-else type="danger" v-text="item.status_name"></el-tag>
                                            </td>
                                            <td>
                                                <template v-if="item.status == 'A'">
                                                    <el-tooltip class="item" effect="dark" content="Editar Cliente" placement="top" v-if="listPermissions.includes('cliente.editar')">
                                                        <router-link class="btn  btn-icon btn-outline-primary" :to="{name:'cliente.editar', params:{id: item.id}}">
                                                            <i class="feather icon-edit"></i>
                                                        </router-link>
                                                    </el-tooltip>
                                                    <el-tooltip class="item" effect="dark" content="Desactivar Cliente" placement="top" v-if="listPermissions.includes('cliente.desactivar')">
                                                        <button  class="btn  btn-icon btn-outline-danger" @click.prevent="setCambiarEstadoCliente(1, item.id)">
                                                            <i class="fas fa-eye-slash"></i>
                                                        </button>
                                                    </el-tooltip>
                                                </template>
                                                <template v-else>
                                                    <el-tooltip class="item" effect="dark" content="Activar Usuario" placement="top" v-if="listPermissions.includes('cliente.activar')">
                                                        <button class="btn  btn-icon btn-outline-danger" @click.prevent="setCambiarEstadoCliente(2, item.id)">
                                                            <i class="fas fa-eye"></i>
                                                        </button>
                                                    </el-tooltip>
                                                </template>
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
                                    :total="listClientes.length">
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
    </div>
</template>

<script>
    export default {
        data(){
            return {
                filter: '',
                listFilter: [],
                listClientes: [],
                fullscreenLoading: false,
                currentPage1: 1,
                page: 0,
            }
        },
        mounted() {
            this.getListarClientes()
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
                this.listFilter =  this.listClientes.slice(inicio, fin);
            },
            async getListarClientes(){
                this.fullscreenLoading = true;

                var url = '/operacion/cliente/index'

                const res = await this.callGetApi('get', url, {
                    'filter'    :   this.filter,
                })

                if (res.status == 200) {
                    this.listClientes   =   res.data;
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
            setCambiarEstadoCliente(op, id){
                this.$swal.fire({
                    title: '¿Está seguro de ' + ((op == 1) ? 'desactivar' : 'activar') + ' el cliente?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#2196F3',
                    cancelButtonColor: '#F44336',
                    confirmButtonText: ((op == 1) ? 'Si, desactivar' : 'Si, activar')
                }).then((result) => {
                    if (result.value) {
                        this.fullscreenLoading = true;
                        var url = '/operacion/cliente/destroy/' + id

                        axios.delete(url, {
                            params:{
                                'status'    : (op == 1) ? 'I' : 'A'
                            }
                        }).then(response => {
                            this.notification('success', 'Se ' + ((op == 1) ? 'desactivo' : 'activo') + ' el cliente', 0)
                            this.getListarClientes();
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
        }
    }
</script>

<style scoped>

</style>
