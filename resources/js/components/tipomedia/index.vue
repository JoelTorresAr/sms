<template>
    <div class="pcoded-content">
        <div class="page-header">
            <div class="page-block">
                <div class="row align-items-center">
                    <div class="col-md-12">
                        <div class="page-header-title">
                            <h5 class="m-b-10">Gestión Tipomedia</h5>
                        </div>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link  :to="{name:'tipomedia.index'}">
                                    <i class="fas fa-tasks"></i>
                                </router-link>
                            </li>
                            <li class="breadcrumb-item">
                                <router-link  :to="{name:'tipomedia.index'}">
                                    Navegar entre Tipos media
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
                                        <input type="text" class="form-control" placeholder="Buscar" v-model="filter" @keyup.enter.prevent="getListarTipomedia">
                                    </div>
                                    <button type="button" class="btn btn-primary mb-2" v-loading.fullscreen.lock="fullscreenLoading" @click.passive="getListarTipomedia">Buscar</button>
                                </form>
                            </div>
                            <div class="col-sm-6">
                                <div class="btn-actions">
                                    <div class="btn-group card-option" v-if="listPermissions.includes('tipomedia.crear')">
                                        <el-tooltip class="item" effect="dark" content="Nuevo Tipomedia" placement="top">
                                            <router-link class="btn  btn-icon btn-outline-primary" :to="{name:'tipomedia.crear'}">
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
                                            <td v-text="item.name"></td>
                                            <td>
                                                <el-tooltip class="item" effect="dark" content="Editar Tipomedia" placement="top" v-if="listPermissions.includes('tipomedia.editar')">
                                                    <router-link class="btn  btn-icon btn-outline-primary" :to="{name:'tipomedia.editar', params:{id: item.id}}">
                                                        <i class="feather icon-edit"></i>
                                                    </router-link>
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
                                    :total="listTipomedia.length">
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
                listTipomedia: [],
                fullscreenLoading: false,
                currentPage1: 1,
                page: 0,
            }
        },
        mounted() {
            this.getListarTipomedia()
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
                this.listFilter =  this.listTipomedia.slice(inicio, fin);
            },
            async getListarTipomedia(){
                this.fullscreenLoading = true;

                var url = '/configuracion/tipomedia/index'

                const res = await this.callGetApi('get', url, {
                    'filter'    :   this.filter,
                })

                if (res.status == 200) {
                    this.listTipomedia  =   res.data;
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
            }
        }
    }
</script>

<style>

</style>
