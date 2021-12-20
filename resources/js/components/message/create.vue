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
                                <router-link  :to="{name:'mensaje.predeterminado.crear'}">
                                    Crear Mensaje Predeterminado
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
                                        <label for="Nombre">Mensaje (*)</label>
                                        <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 5, maxRows: 14}"
                                            placeholder="Ingrese su mensaje de Texto Predeterminado"
                                            :debounce="1500"
                                            maxlength="1000"
                                            show-word-limit
                                            v-model="record.message">
                                        </el-input>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <button type="button" class="btn btn-outline-primary has-ripple" @click.prevent="setRegistrarMensaje" v-loading.fullscreen.lock="fullscreenLoading">Guardar</button>
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
                    message: '',
                },
                fullscreenLoading: false,
                error: 0,
            }
        },
        computed: {
        },
        methods: {
            limpiarCriterios(){
                this.record.message   = '';
            },
            async setRegistrarMensaje(){
                if (this.validarRegistrarMensaje()) {
                    return;
                }

                this.fullscreenLoading = true;

                var url = '/configuracion/mensaje/store'

                const res = await this.callApi('post', url, this.record)

                if (res.status == 200) {
                    this.notification('success', 'Registro creado con éxito', 0)
                    this.$router.push('/mensaje');
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
            validarRegistrarMensaje(){
                this.error = 0;

                if (!this.record.message) {
                    this.notification('error', 'El Mensaje es un campo obligatorio', 0)
                    this.error = 1;
                }

                return this.error;
            }
        }
    }
</script>

<style>

</style>
