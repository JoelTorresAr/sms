<template>
    <div class="pcoded-content">
        <div class="page-header">
            <div class="page-block">
                <div class="row align-items-center">
                    <div class="col-md-12">
                        <div class="page-header-title">
                            <h5 class="m-b-10">Gestión Permisos</h5>
                        </div>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link  :to="{name:'permiso.index'}">
                                    <i class="feather icon-power"></i>
                                </router-link>
                            </li>
                            <li class="breadcrumb-item">
                                <router-link  :to="{name:'permiso.crear'}">
                                    Crear Permiso
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
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="Nombre">Nombre (*)</label>
                                        <input type="text" class="form-control" id="Nombre" placeholder="Nombre" v-model="record.name" @keyup.enter="setRegistrarPermiso">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="Url">Url Amigable (*)</label>
                                        <input type="text" class="form-control" for="Url" placeholder="Url Amigable" v-model="record.slug" @keyup.enter="setRegistrarPermiso">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <button type="button" class="btn btn-outline-primary has-ripple" @click.prevent="setRegistrarPermiso" v-loading.fullscreen.lock="fullscreenLoading">Guardar</button>
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
                    name: '',
                    slug: '',
                },
                fullscreenLoading: false,
                error: 0,
            }
        },
        computed: {
        },
        methods: {
            limpiarCriterios(){
                this.record.name   = '';
                this.record.slug      = '';
            },
            async setRegistrarPermiso(){
                if (this.validarRegistrarPermiso()) {
                    return;
                }

                this.fullscreenLoading = true;

                var url = '/seguridad/permiso/store'

                const res = await this.callApi('post', url, this.record)

                if (res.status == 200) {
                    this.notification('success', 'Registro creado con éxito', 0)
                    this.$router.push('/permiso');
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
                this.fullscreenLoading  =   false;
            },
            validarRegistrarPermiso(){
                this.error = 0;

                if (!this.record.name) {
                    this.notification('error', 'El Nombre es un campo obligatorio', 0)
                    this.error = 1;
                }
                if (!this.record.slug) {
                    this.notification('error', 'La Url Amigable es un campo obligatorio', 10)
                    this.error = 1;
                }

                return this.error;
            }
        }
    }
</script>

<style>

</style>
