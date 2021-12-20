<template>
    <div class="pcoded-content">
        <div class="page-header">
            <div class="page-block">
                <div class="row align-items-center">
                    <div class="col-md-12">
                        <div class="page-header-title">
                            <h5 class="m-b-10">Gestión de Logs</h5>
                        </div>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link  :to="{name:'log.index'}">
                                    <i class="feather icon-power"></i>
                                </router-link>
                            </li>
                            <li class="breadcrumb-item">
                                <router-link  :to="{name:'log.index'}">
                                    Navegar entre Logs
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
                                        <input type="text" class="form-control" placeholder="Buscar" v-model="filter" @keyup.enter.prevent="getListarLogs">
                                    </div>
                                    <button type="button" class="btn btn-primary mb-2" v-loading.fullscreen.lock="fullscreenLoading" @click.passive="getListarLogs">Buscar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="card-body table-border-style">
                        <div class="table-responsive">
                            <template v-if="listFilter.length">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Usuario</th>
                                            <th>Proceso</th>
                                            <th>Fecha</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, index) in listFilter" :key="index">
                                            <td v-text="item.user_name"></td>
                                            <td v-text="item.description"></td>
                                            <td v-text="item.fecha"></td>
                                            <td>
                                                <el-tooltip class="item" effect="dark" content="Ver Detalle" placement="top">
                                                    <button  class="btn  btn-icon btn-outline-primary" @click.prevent="abrirModalByOption('log', 'ver', item)">
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
                                    :total="listLogs.length">
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

        <el-dialog title="Detalle de la Acción" :visible.sync="modalLog" width="85%" :close-on-click-modal="false">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-body table-border-style">
                            <pre>{{ record.json | pretty }}</pre>
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
    export default {
        data(){
            return {
                filter: '',
                listFilter: [],
                listLogs: [],
                modalLog: false,
                record: {
                    json: ''
                },
                fullscreenLoading: false,
                currentPage1: 1,
                page: 0,
            }
        },
        filters: {
            pretty: function(value) {
                if (value) {
                    return JSON.stringify(JSON.parse(value), null, 2);
                }
                return ''
            }
        },
        mounted() {
            this.getListarLogs()
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
                this.listFilter =  this.listLogs.slice(inicio, fin);
            },
            async getListarLogs(){
                this.fullscreenLoading = true;

                var url = '/seguridad/log/index'

                const res = await this.callGetApi('get', url, {
                    'filter'    :   this.filter,
                })
                this.listLogs = [];

                if (res.status == 200) {
                    let response = res.data;
                    if (Object.keys(response).length > 0) {
                        response.forEach(element => {
                            this.listLogs.push({
                                'id'            :   element.id,
                                'model'         :   element.model,
                                'description'   :   element.description,
                                'response'      :   element.response,
                                'user_id'       :   element.user_id,
                                'user_name'     :   (element.user) ? element.user.name : 'Generado por migración',
                                'fecha'         :   moment(element.created_at).format('YYYY-MM-DD hh:mm')
                            })
                        });
                    }
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
            abrirModalByOption(modulo, accion, data){
                switch (modulo) {
                    case "log":
                    {
                        switch (accion) {
                            case "ver":
                            {
                                //Setear información del arreglo
                                this.record.json    =   data.response;
                                this.modalLog       =   true
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
            abrirModal(){
                this.modalLog = !this.modalLog;
                this.limpiarModal();
            },
            limpiarModal(){
                this.record.json           =   ''
            },
        }
    }
</script>

<style>

</style>
