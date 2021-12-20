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
                                <router-link  :to="{name:'usuario.crear'}">
                                    Editar Usuario
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
                                        <input type="text" class="form-control" id="Nombre" placeholder="Nombre" v-model="record.name" @keyup.enter="setEditarUsuario">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="Correo">Correo Electronico</label>
                                        <input type="email" class="form-control" for="Correo" placeholder="Correo Electronico" v-model="record.email" @keyup.enter="setEditarUsuario">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="Usuario">Usuario (*)</label>
                                        <input type="text" class="form-control" id="Usuario" placeholder="Usuario" v-model="record.username" @keyup.enter="setRegistrarUsuario">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="Contraseña">Contraseña (*)</label>
                                        <el-input class="form-control" placeholder="Contraseña *" v-model="record.password" @keyup.enter="setEditarUsuario" show-password></el-input>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="Perfil">Perfil (*)</label>
                                        <el-select  v-model="record.roles"
                                                    multiple
                                                    placeholder="roles *"
                                                    filterable>
                                            <el-option
                                                v-for="item in listRoles"
                                                :key="item.id"
                                                :label="item.name"
                                                :value="item.id">
                                            </el-option>
                                        </el-select>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="Archivo">Archivo</label>
                                        <input type="file" class="form-control" :class="(record.image) ? ' image-selected' : ''" @change="getFile"/>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <button type="button" class="btn btn-outline-primary has-ripple" @click.prevent="setEditarUsuario" v-loading.fullscreen.lock="fullscreenLoading">Guardar</button>
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
                    name: '',
                    username: '',
                    email: '',
                    password: '',
                    roles: [],
                    image: '',
                    file_id: '',
                },
                listRoles: [],
                listHorarios: [],
                form : new FormData,
                fullscreenLoading: false,
                error: 0,
            }
        },
        mounted() {
            this.getListarRoles();
            this.getUserById();
        },
        methods: {
            async getUserById(){
                this.fullscreenLoading = true;

                var url = '/seguridad/usuario/show/' + this.record.id

                const res = await this.callApi('get', url)

                if (res.status == 200) {
                    this.setDataUserById(res)
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
                let me = this;

                this.record.name        =   response.data.name;
                this.record.username    =   response.data.username;
                this.record.email       =   response.data.email;
                this.record.file_id     =   response.data.file_id;

                let roles = response.data.roles;

                if (roles.length > 0) {
                    roles.map(function (x,y) {
                        me.record.roles.push(x.id)
                    })
                }
            },
            limpiarCriterios(){
                this.record.name                =   '';
                this.record.username            =   '';
                this.record.email               =   '';
                this.record.password            =   '';
                this.record.roles               =   [];
            },
            async getListarRoles(){
                this.fullscreenLoading = true;

                var url = '/seguridad/rol/index'

                const res = await this.callApi('get', url)

                if (res.status == 200) {
                    this.listRoles  =   res.data;
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
            getFile(e){
                this.record.image = e.target.files[0];
            },
            setEditarUsuario(){
                if (this.validarRegistrarUsuario()) {
                    return;
                }
                this.fullscreenLoading = true;

                if (!this.record.image || this.record.image == undefined) {
                    this.setGuardarUsuario();
                } else {
                    this.setRegistrarArchivo();
                }
            },
            async setRegistrarArchivo(){
                this.form.append('file', this.record.image)
                this.form.append('path', 'user')

                const config = { headers: { 'Content-Type': 'multipart/form-data'}}

                var url = '/file/update/' + this.record.file_id

                const res = await this.callApi('post', url, this.form, config)

                if (res.status == 200) {
                    this.record.file_id = res.data;
                    this.setGuardarUsuario();
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
            async setGuardarUsuario(){
                if (this.validarRegistrarUsuario()) {
                    return;
                }
                var url = '/seguridad/usuario/update/' + this.record.id

                const res = await this.callApi('put', url, this.record)

                if (res.status == 200) {
                    this.notification('success', 'Registro actualizado con éxito', 0)
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
                this.fullscreenLoading  =   false;
            },
            validarRegistrarUsuario(){
                this.error = 0;
                this.mensajeError = [];

                if (!this.record.name) {
                    this.notification('error', 'El Nombre es un campo obligatorio', 0)
                    this.error = 1;
                }
                if (!this.record.username) {
                    this.notification('error', 'El Usuario es un campo obligatorio', 0)
                    this.error = 1;
                }
                if (!this.record.roles || this.record.roles.length == 0) {
                    this.notification('error', 'Debe seleccionar al menos un Rol', 15)
                    this.error = 1;
                }

                return this.error;
            }
        }
    }
</script>

<style scoped>
</style>
