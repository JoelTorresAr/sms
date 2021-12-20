<template>
    <div class="pcoded-content">
        <div class="page-header">
            <div class="page-block">
                <div class="row align-items-center">
                    <div class="col-md-12">
                        <div class="page-header-title">
                            <h5 class="m-b-10">Gestión Mensajes Predeterminados</h5>
                        </div>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link  :to="{name:'mensaje.predeterminado.index'}">
                                    <i class="far fa-comment"></i>
                                </router-link>
                            </li>
                            <li class="breadcrumb-item">
                                <router-link  :to="{name:'mensaje.predeterminado.index'}">
                                    Navegar entre Mensajes Predeterminados
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
                                        <input type="text" class="form-control" placeholder="Buscar" v-model="filter" @keyup.enter.prevent="getListarMensajes">
                                    </div>
                                    <button type="button" class="btn btn-primary mb-2" v-loading.fullscreen.lock="fullscreenLoading" @click.passive="getListarMensajes">Buscar</button>
                                </form>
                            </div>
                            <div class="col-sm-6">
                                <div class="btn-actions">
                                    <div class="btn-group card-option" v-if="listPermissions.includes('mensaje.predeterminado.crear')">
                                        <el-tooltip class="item" effect="dark" content="Nuevo Mensaje Predetermiando" placement="top">
                                            <router-link class="btn  btn-icon btn-outline-primary" :to="{name:'mensaje.predeterminado.crear'}">
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
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, index) in listFilter" :key="index">
                                            <td v-text="item.message"></td>
                                            <td>
                                                <el-tooltip class="item" effect="dark" content="Editar Mensaje Predetermiando" placement="top" v-if="listPermissions.includes('mensaje.predeterminado.editar')">
                                                    <router-link class="btn  btn-icon btn-outline-primary" :to="{name:'mensaje.predeterminado.editar', params:{id: item.id}}">
                                                        <i class="feather icon-edit"></i>
                                                    </router-link>
                                                </el-tooltip>
                                                <el-tooltip class="item" effect="dark" content="Eliminar Mensaje Predeterminado" placement="top" v-if="listPermissions.includes('mensaje.predeterminado.eliminar')">
                                                    <button  class="btn  btn-icon btn-outline-danger" @click.prevent="setEliminarMensaje(item.id)">
                                                        <i class="fas fa-trash"></i>
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
                                    :total="listMensajes.length">
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
                listMensajes: [],
                fullscreenLoading: false,
                currentPage1: 1,
                page: 0,
            }
        },
        mounted() {
            this.getListarMensajes()
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
                this.listFilter =  this.listMensajes.slice(inicio, fin);
            },
            async getListarMensajes(){
                this.fullscreenLoading = true;

                var url = '/configuracion/mensaje/index'

                const res = await this.callGetApi('get', url, {
                    'filter'    :   this.filter,
                })

                if (res.status == 200) {
                    this.listMensajes   =   res.data;
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
            setEliminarMensaje(id){
                this.$swal.fire({
                    title: '¿Está seguro de eliminar el Mensaje Predeterminado?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#2196F3',
                    cancelButtonColor: '#F44336',
                    confirmButtonText: 'Si, eliminar'
                }).then((result) => {
                    if (result.value) {
                        this.fullscreenLoading = true;
                        var url = '/configuracion/mensaje/destroy/' + id

                        axios.delete(url).then(response => {
                            this.notification('success', 'Se eliminó el Mensaje', 0)
                            this.getListarMensajes();
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
                this.fullscreenLoading = false;

            },
        }
    }
</script>

<style>

</style>
