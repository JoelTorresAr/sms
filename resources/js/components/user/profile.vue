<template>
    <div class="pcoded-content">
        <div class="user-profile user-card mb-4">
			<div class="card-body py-0">
				<div class="user-about-block m-0">
					<div class="row">
						<div class="col-md-4 text-center mt-n5">
							<div class="change-profile text-center">
								<div class="dropdown w-auto d-inline-block">
									<a class="dropdown-toggle" aria-expanded="false">
										<div class="profile-dp">
											<div class="position-relative d-inline-block">
												<img class="img-radius img-fluid wid-100" src="/images/user/avatar-5.jpg" :alt="profile.name" v-if="!profile.file_id">
												<img class="img-radius img-fluid wid-100" :src="profile.file_path" :alt="profile.name" v-else>
											</div>
										</div>
									</a>
								</div>
							</div>
							<h5 class="mb-1" v-text="profile.name"></h5>
							<div class="mb-2 text-muted">
                                {{ currentRole.name }}
                            </div>
						</div>
						<div class="col-md-8 mt-md-4">
							<div class="row">
								<div class="col-md-6">
									<a class="mb-1 text-muted d-flex align-items-end text-h-primary">
                                        <i class="feather icon-user mr-2 f-18"></i> {{ profile.username }}
                                    </a>
									<div class="clearfix"></div>
									<a :href="'mailto:'+ profile.email" class="mb-1 text-muted d-flex align-items-end text-h-primary">
                                        <i class="feather icon-mail mr-2 f-18"></i> {{ profile.email }}
                                    </a>
								</div>
								<div class="col-md-6">
									<div class="media">
										<i class="feather icon-users mr-2 mt-1 f-18"></i>
										<div class="media-body" v-for="(item, index) in profile.roles" :key="index">
                                            <p class="mb-0 text-muted" v-text="item.name"></p>
                                        </div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

        <div class="row">
            <div class="col-12">
                <div class="tab-pane fade active show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div class="card">
                        <div class="card-body d-flex align-items-center justify-content-between">
                            <h5 class="mb-0">Información Personal</h5>
                            <el-tooltip class="item" effect="dark" :content="(mode) ? 'Modo Edición' : 'Modo Visualización' " placement="top">
                                <button type="button" class="btn btn-primary btn-sm rounded m-0 float-right"
                                        data-toggle="collapse" 
                                        aria-expanded="false" 
                                        @click.prevent="cambiarModalidad()">
                                    <i class="feather icon-edit"></i>
                                </button>
                            </el-tooltip>
                        </div>
                        <div class="card-body border-top pro-det-edit collapse " :class="(mode) ? '' : 'show' " >
                            <form @submit.prevent>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label font-weight-bolder">Nombre</label>
                                    <div class="col-sm-9" v-text="profile.name"></div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label font-weight-bolder">Correo Electronico</label>
                                    <div class="col-sm-9" v-text="profile.email"></div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label font-weight-bolder">Usuario</label>
                                    <div class="col-sm-9" v-text="profile.username"></div>
                                </div>
                            </form>
                        </div>
                        <div class="card-body border-top pro-det-edit collapse " :class="(mode) ? 'show' : ''" >
                            <form @submit.prevent>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label font-weight-bolder">Nombre</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" placeholder="Nombre" @keyup.enter="setEditarUsuario" v-model="record.name">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label font-weight-bolder">Correo Electronico</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" placeholder="Correo Electronico" @keyup.enter="setEditarUsuario" v-model="record.email">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label font-weight-bolder">Usuario</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" placeholder="Usuario" @keyup.enter="setEditarUsuario" v-model="record.username">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label font-weight-bolder">Contraseña</label>
                                    <div class="col-sm-9">
                                        <el-input class="form-control" placeholder="Contraseña" v-model="record.password" @keyup.enter="setEditarUsuario" show-password></el-input>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label font-weight-bolder">Archivo</label>
                                    <div class="col-sm-9">
                                        <input type="file" class="form-control" :class="(record.image) ? ' image-selected' : ''" @change="getFile"/>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label"></label>
                                    <div class="col-sm-9">
                                        <button type="button" class="btn btn-primary has-ripple" @click.prevent="setEditarUsuario" v-loading.fullscreen.lock="fullscreenLoading">
                                            Guardar
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                profile: {
                    id: '',
                    name: '',
                    email: '',
                    username: '',
                    password: '',
                    file_id: '',
                    file_path: '',
                    image: '',
                    roles: []
                },
                record: {
                    id: '',
                    name: '',
                    email: '',
                    username: '',
                    password: '',
                    file_id: '',
                    image: '',
                    roles: []
                },
                mode: false,
                form : new FormData,
                fullscreenLoading: false,
                error: 0,
            }
        },
        mounted() {
            this.getUserById();
        },
        methods: {
            async getUserById(){
                this.fullscreenLoading = true;

                var url = '/seguridad/usuario/showProfile'

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

                this.profile.id          =   response.data.id;
                this.profile.name        =   response.data.name;
                this.profile.email       =   response.data.email;
                this.profile.username    =   response.data.username;
                this.profile.file_id     =   response.data.file_id;
                this.profile.file_path   =   (response.data.file) ? response.data.file.path: '';
                this.profile.roles       =   response.data.roles;

                this.record.id          =   response.data.id;
                this.record.name        =   response.data.name;
                this.record.email       =   response.data.email;
                this.record.username    =   response.data.username;
                this.record.file_id     =   response.data.file_id;
                this.record.roles       =   response.data.roles;
            },
            cambiarModalidad() {
                this.mode   =   !this.mode
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
                var url = '/seguridad/usuario/updateProfile/' + this.record.id

                const res = await this.callApi('put', url, this.record)

                if (res.status == 200) {
                    this.notification('success', 'Registro actualizado con éxito', 0)
                    this.limpiarCriterios()
                    this.getUserById()
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

                return this.error;
            },
            limpiarCriterios(){
                this.record.password            =   '';
            },
        }
    }
</script>

<style>
.img-fluid{
    min-height: 6.1rem !important
}
.user-profile {
    margin-top: -25px;
    margin-left: -25px;
    margin-right: -25px;
    background: #fff;
}
.mb-4, .my-4 {
    margin-bottom: 1.5rem !important;
}
.card-header:first-child {
    border-radius: calc(0.25rem - 0px) calc(0.25rem - 0px) 0 0;
}
.user-card .cover-img-block {
    position: relative;
}
.user-card .cover-img-block .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.4);
    transition: all 0.3s ease-in-out;
}
.user-card .cover-img-block .change-cover {
    position: absolute;
    top: 30px;
    left: 30px;
    z-index: 5;
    opacity: 0;
    transition: all 0.3s ease-in-out;
}
.dropup, .dropright, .dropdown, .dropleft {
    position: relative;
}
.user-card .cover-img-block .change-cover .dropdown-toggle {
    color: #fff;
    background: rgba(0, 0, 0, 0.6);
    width: 45px;
    height: 45px;
    border-radius: 50%;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.user-profile .card-body {
    position: relative;
    z-index: 1;
    box-shadow: 0 2px 4px -2px rgb(54 80 138 / 30%);
}
.text-muted {
    color: #868e96 !important;
}
.user-profile .profile-tabs {
    border-bottom: 0;
    margin-top: 30px;
}
</style>