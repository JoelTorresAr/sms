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
                                    <i class="fas fa-key"></i> 
                                </router-link>
                            </li>
                            <li class="breadcrumb-item">
                                <router-link  :to="{name:'usuario.index'}">
                                    Gestionar Permisos del Usuario
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
                        <div class="col-sm-12">
                            <div class="btn-actions">
                                <div class="btn-group card-option">
                                    <el-tooltip class="item" effect="dark" content="Regresar" placement="top">
                                        <button class="btn btn-icon btn-outline-primary" @click.prevent="goBack">
                                            <i class="fas fa-arrow-left"></i>
                                        </button>
                                    </el-tooltip>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent>
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label for="Asingar Permisos">Asingar Permisos (*)</label>
                                        <el-select  v-model="record.permisos"
                                                    multiple
                                                    placeholder="Asingar Permisos"
                                                    filterable>
                                            <el-option
                                                v-for="item in listPermisos"
                                                :key="item.id"
                                                :label="item.name"
                                                :value="item.id">
                                            </el-option>
                                        </el-select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <button type="button" class="btn btn-outline-primary has-ripple" @click.prevent="setRegistrarPermisoByUsuario" v-loading.fullscreen.lock="fullscreenLoading">Guardar</button>
                                    <button type="button" class="btn btn-outline-info has-ripple " @click.prevent="limpiarCriterios">Limpiar</button>
                                </div>
                            </div>
                        </form>
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
                record: {
                    id: this.$attrs.id,
                    permisos: []
                },
                listPermisos: [],
                fullscreenLoading: false,
                error: 0,
            }
        },
        mounted() {
            this.getListarPermisos();
            this.getUserById();
        },
        methods: {
            limpiarCriterios(){
                this.record.permisos    =   [];
            },
            async getListarPermisos(){
                this.fullscreenLoading = true;

                var url = '/seguridad/permiso/index'
                const res = await this.callApi('get', url)

                if (res.status == 200) {
                    this.listPermisos   =   res.data;
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
            async getUserById(){
                this.fullscreenLoading = true;

                var url = '/seguridad/usuario/show/' + this.record.id

                const res = await this.callApi('get', url)

                if (res.status == 200) {
                    this.setDataUserById(res.data.permissions)
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
            setDataUserById(response){
                if (!response) {
                    return
                }
                let me = this;

                let permisos = response;

                if (permisos.length > 0) {
                    permisos.map(function (x,y) {
                        me.record.permisos.push(x.id)
                    })
                }
            },
            async setRegistrarPermisoByUsuario(){
                if (this.validarRegistrarPermisosByUsuario()) {
                    return;
                }

                var url = '/seguridad/usuario/permission'

                const res = await this.callApi('post', url, this.record)

                if (res.status == 200) {
                    this.notification('success', 'Permisos asignados con éxito', 0)
                    this.$router.push('/usuario');
                } else {
                    if (res.status == 422) {
                        for(let i in res.data.errors){
                            this.notification('error', res.data.errors[i][0])
                        }
                    }
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
                this.fullscreenLoading = true;
            },
            validarRegistrarPermisosByUsuario(){
                this.error = 0;
                this.mensajeError = [];

                if (!this.record.permisos || this.record.permisos.length == 0) {
                    this.notification('error', 'Debe seleccionar al menos un Permiso', 15)
                    this.error = 1;
                }

                return this.error;
            }
        }
    }
</script>

<style scoped>

</style>
