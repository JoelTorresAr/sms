<template>
    <div>
        <!-- [ navigation menu ] start -->
        <SideBar v-if="authenticated" :navbar="NavBar"/>
        <!-- [ navigation menu ] end -->

        <!-- [ Header ] start -->
        <TopBar v-if="authenticated" :navbar="NavBar" @navbarState="SwitchMenu"/>
        <!-- [ Header ] end -->

        <!-- Main Content WebSite -->
        <div :class="(authenticated) ? 'pcoded-main-container' : ''">
            <transition name="slide-fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import TopBar from './views/TopBar'
    import SideBar from './views/SideBar'

    export default {
        components: {TopBar, SideBar},
        data() {
            return {
                NavBar: false
            }
        },
        methods: {
            SwitchMenu(valor) {
                this.NavBar =   valor
            }
        }
    }
</script>

<style>

</style>