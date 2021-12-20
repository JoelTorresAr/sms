<template>
    <div class="pcoded-content">
        <div class="page-header">
            <div class="page-block">
                <div class="row align-items-center">
                    <div class="col-md-12">
                        <div class="page-header-title">
                            <h5 class="m-b-10">Gestión Teléfono</h5>
                        </div>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link  :to="{name:'telefono.configurar'}">
                                    <i class="fas fa-mobile-alt"></i>
                                </router-link>
                            </li>
                            <li class="breadcrumb-item">
                                <router-link  :to="{name:'telefono.configurar'}">
                                    Guardar Teléfono
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
                                <el-tooltip class="item" effect="dark" content="Regresar" placement="top">
                                    <button class="btn btn-icon btn-outline-primary" @click.prevent="goBack">
                                        <i class="fas fa-arrow-left"></i>
                                    </button>
                                </el-tooltip>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent>
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label for="PhoneNumber">Teléfono Celular (*)</label>
                                        <input type="text" class="form-control" id="PhoneNumber" placeholder="PhoneNumber" v-model="record.phone_number" @keyup.enter="setGuardarPhoneNumber">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <button type="button" class="btn btn-outline-primary has-ripple" @click.prevent="setGuardarPhoneNumber" v-loading.fullscreen.lock="fullscreenLoading">Guardar</button>
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
                    id: '',
                    phone_number: '',
                },
                fullscreenLoading: false,
                currentPage1: 1,
                error: 0,
            }
        },
        mounted() {
            this.getPhoneNumberById();
        },
        methods: {
            async getPhoneNumberById(){
                this.fullscreenLoading = true;

                var url = '/configuracion/telefono/show'

                const res = await this.callApi('get', url)

                if (res.status == 200) {
                    if (Object.keys(res.data).length > 0) {
                        this.record.id              =   res.data.id;
                        this.record.phone_number    =   res.data.phone_number;
                    }
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
            limpiarCriterios(){
                this.record.phone_number       = '';
            },
            setGuardarPhoneNumber() {
                if (!this.record.id) {
                    this.setRegistrarAbout()
                } else {
                    this.setEditarAbout()
                }
            },
            async setRegistrarAbout(){
                if (this.validarRegistrarPhoneNumber()) {
                    return;
                }

                this.fullscreenLoading = true;

                var url = '/configuracion/telefono/store'

                const res = await this.callApi('post', url, this.record)

                if (res.status == 200) {
                    this.notification('success', 'Registro creado con éxito', 0)
                    this.getPhoneNumberById();
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
            async setEditarAbout(){
                if (this.validarRegistrarPhoneNumber()) {
                    return;
                }
                this.fullscreenLoading = true;

                var url = '/configuracion/telefono/update/' + this.record.id

                const res = await this.callApi('put', url, this.record)

                if (res.status == 200) {
                    this.notification('success', 'Registro actualizado con éxito', 0)
                    this.getPhoneNumberById();
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
                this.fullscreenLoading = false;
            },
            validarRegistrarPhoneNumber(){
                this.error = 0;

                if (!this.record.phone_number) {
                    this.notification('error', 'El Teléfono Celular es un campo obligatorio', 0)
                    this.error = 1;
                }

                return this.error;
            },
        }
    }
</script>

<style>

</style>
