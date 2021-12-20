<template>
    <div class="auth-wrapper">
        <div class="auth-content">
            <div class="card">
                <div class="row align-items-center text-center">
                    <div class="col-md-12">
                        <div class="card-body">
                            <img src="/images/auth/auth-logo-dark.jpeg" alt="" class="img-fluid mb-4">
                            <h4 class="mb-3 f-w-400">Iniciar Sesión</h4>
                            <div class="form-group mb-3">
                                <label class="floating-label" ></label>
                                <input type="text" class="form-control" placeholder="Usuario *" v-model="form.username">
                            </div>
                            <div class="form-group mb-4">
                                <label class="floating-label" ></label>
                                <input type="password" class="form-control" placeholder="Contaseña +" v-model="form.password">
                            </div>
                            <button class="btn btn-block btn-primary mb-4" @click.prevent="login" v-loading.fullscreen.lock="fullscreenLoading">Iniciar Sesión</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from "vuex";

    export default {
        name: 'signin',
        data() {
            return {
                form: {
                    username: '',
                    password: '',
                },
                fullscreenLoading: false,
                error: false
            }
        },
        methods: {
            ...mapActions({
                signIn: 'usuario/signIn'
            }),

            login() {
                if(!this.form.username) return this.notification('warning', 'El usuario es un campo obligatorio')
                if(!this.form.password) return this.notification('warning', 'La contraseña es un campo obligatorio')

                this.fullscreenLoading = true;

                // Envio que se requiere obtener los roles por defecto
                
                localStorage.setItem('rolSelected', 'nothing')

                this.signIn(this.form).then(() => {
                    this.$router.replace({
                        name: 'Escritorio'
                    })
                    this.notification('success', 'Bienvenido al SGC', 0)
                }).catch((error) => {
                    if (error.response.status == 401) {
                        this.notification('error', error.response.data.error, 0)
                    }
                }).finally(() => {
                    this.fullscreenLoading = false;
                })
            },
        }
    }
</script>

<style scoped>
    
</style>