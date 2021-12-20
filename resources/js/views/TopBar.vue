<template>
    <header class="navbar pcoded-header navbar-expand-lg navbar-light header-blue ">
		<div class="m-header">
			<a class="mobile-menu " :class="(navbar) ? 'on' : '' " id="mobile-collapse" href="#!" @click.prevent="SwitchMenu"><span></span></a>
			<router-link class="b-brand" :to="{name:'Escritorio'}">
				<!-- ========   change your logo hear   ============ -->
				<img src="/images/auth/auth-logo-2.png" alt="" class="logo" style="width: 100px;height: 50px;">
				
				<img src="/images/logo-icon.png" alt="" class="logo-thumb">
			</router-link>
			<a href="#!" class="mob-toggler" @click.prevent="ShowProfile">
				<i class="feather icon-more-vertical"></i>
			</a>
		</div>
		<div class="collapse navbar-collapse " :class="(Profile) ? 'd-flex' : '' ">
			<ul class="navbar-nav ml-auto">
				<li>
					<div class="dropdown drp-user">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							<i class="feather icon-user"></i>
						</a>
						<div class="dropdown-menu dropdown-menu-right profile-notification">
							<div class="pro-head">
								<span> {{ userAuthenticate.name }} </span>
								<a href="#" class="dud-logout" title="Logout" @click.prevent="logout" v-loading.fullscreen.lock="fullscreenLoading">
									<i class="feather icon-log-out"></i>
								</a>
							</div>
							<ul class="pro-body">
								<li>
									<router-link class="dropdown-item" :to="{name:'usuario.perfil'}">
										<i class="feather icon-user"></i> Perfil
									</router-link>
								</li>
							</ul>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</header>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";

    export default {
		props: {
            navbar: {
                type: Boolean
            }
        },
        data() {
            return {
				Profile: false,
                fullscreenLoading: false,
            }
        },
        methods: {
            ...mapActions({
                attempt: 'usuario/attempt',
                signOutAction: 'usuario/signOut'
            }),
            logout() {
                this.fullscreenLoading = true;

                this.signOutAction().then(() => {
                    this.$router.replace({
                        name: 'login'
                    })
                    this.fullscreenLoading = false;
                })
            },
			SwitchMenu() {
                this.$emit('navbarState', !this.navbar);
            },
			ShowProfile(){
				this.Profile = !this.Profile
			}
        }
    }
</script>

<style>
	.pcoded-navbar.mob-open ~ .pcoded-header:before, .pcoded-navbar.mob-open ~ .pcoded-main-container:before, .pcoded-navbar.navbar-collapsed:hover ~ .pcoded-header:before, .pcoded-navbar.navbar-collapsed:hover ~ .pcoded-main-container:before{
		position: unset !important;
	}
</style>