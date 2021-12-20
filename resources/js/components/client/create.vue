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
                                <router-link  :to="{name:'cliente.crear'}">
                                    Crear Cliente
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
                                        <label for="Codigo">Código (*)</label>
                                        <input type="text" class="form-control" id="Codigo" placeholder="Codigo" v-model="record.code" @keyup.enter="setRegistrarCliente">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="Nombre">Nombre (*)</label>
                                        <input type="text" class="form-control" id="Nombre" placeholder="Nombre" v-model="record.name" @keyup.enter="setRegistrarCliente">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="Dirección">Dirección (*)</label>
                                        <input type="text" class="form-control" id="Dirección" placeholder="Dirección" v-model="record.address" @keyup.enter="setRegistrarCliente">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="Lugar">Lugar (*)</label>
                                        <input type="text" class="form-control" id="Lugar" placeholder="Lugar" v-model="record.place" @keyup.enter="setRegistrarCliente">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="phone_number">Teléfono Celular (*)</label>
                                        <input type="text" class="form-control" for="phone_number" placeholder="Teléfono Celular" v-model="record.phone_number" @keyup.enter="setRegistrarCliente">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="Tipo">Tipo (*)</label>
                                        <el-select  v-model="record.tipo_id"
                                                    placeholder="Tipo"
                                                    filterable>
                                            <el-option
                                                v-for="item in listTipos"
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
                                    <button type="button" class="btn btn-outline-primary has-ripple" @click.prevent="setRegistrarCliente" v-loading.fullscreen.lock="fullscreenLoading">Guardar</button>
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
                    code: '',
                    name: '',
                    address: '',
                    place: '',
                    phone_number: '',
                    tipo_id: ''
                },
                listTipos: [],
                fullscreenLoading: false,
                error: 0,
            }
        },
        mounted() {
            this.getListarTipos()
        },
        methods: {
            limpiarCriterios(){
                this.record.code   = '';
                this.record.name   = '';
                this.record.address   = '';
                this.record.place   = '';
                this.record.phone_number      = '';
                this.record.tipo_id      = '';
            },
            async getListarTipos(){
                this.fullscreenLoading = true;

                var url = '/configuracion/tipo/index'

                const res = await this.callApi('get', url)

                if (res.status == 200) {
                    this.listTipos       =   res.data;
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
            async setRegistrarCliente(){
                if (this.validarRegistrarCliente()) {
                    return;
                }

                this.fullscreenLoading = true;

                var url = '/operacion/cliente/store'

                const res = await this.callApi('post', url, this.record)

                if (res.status == 200) {
                    this.notification('success', 'Registro creado con éxito', 0)
                    this.$router.push('/cliente');
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
            validarRegistrarCliente(){
                this.error = 0;

                if (!this.record.code) {
                    this.notification('error', 'El Código es un campo obligatorio', 0)
                    this.error = 1;
                }
                if (!this.record.name) {
                    this.notification('error', 'El Nombre es un campo obligatorio', 0)
                    this.error = 1;
                }
                if (!this.record.address) {
                    this.notification('error', 'La Dirección es un campo obligatorio', 0)
                    this.error = 1;
                }
                if (!this.record.place) {
                    this.notification('error', 'El Lugar es un campo obligatorio', 0)
                    this.error = 1;
                }
                if (!this.record.phone_number) {
                    this.notification('error', 'La Teléfono Celular es un campo obligatorio', 10)
                    this.error = 1;
                }
                if (!this.record.tipo_id) {
                    this.notification('error', 'Debe seleccionar un Tipo', 10)
                    this.error = 1;
                }

                return this.error;
            }
        }
    }
</script>

<style>

</style>
