import { mapGetters } from "vuex";

export default {
    data() {
        return {
            windowWidth: 0,
            windowHeight: 0,
        }
    },
    mounted() {
        this.$nextTick(function() {
            window.addEventListener('resize', this.getWindowWidth);
            window.addEventListener('resize', this.getWindowHeight);
            this.getWindowWidth()
            this.getWindowHeight()
        })
    },
    computed: {
        ...mapGetters({
            authenticated: 'usuario/authenticated',
            user: 'usuario/user',
            permissions: 'usuario/permissions',
            roleSelected: 'usuario/roleSelected',
            roles: 'usuario/roles',
        }),
        listPermissions() {
            if (this.permissions) {
                return this.permissions
            }
            return []
        },
        userAuthenticate() {
            if (this.user) {
                return this.user
            }
            return ''
        },
        currentRole() {
            if (this.roleSelected) {
                return this.roleSelected
            }
            return ''
        }
    },
    methods: {
        async callApi(method, url, dataObj, header) {
            try {
                return await axios({
                    method: method,
                    url: url,
                    data: dataObj,
                    header
                });
            } catch (e) {
                return e.response
            }
        },
        async callGetApi(method, url, dataObj) {
            try {
                return await axios({
                    method: method,
                    url: url,
                    params: dataObj
                });
            } catch (e) {
                return e.response
            }
        },
        async callApiExport(method, url, dataObj, header) {
            try {
                return await axios({
                    method: method,
                    url: url,
                    data: dataObj,
                    responseType: header
                });
            } catch (e) {
                return e.response
            }
        },
        notification(typeNotify, value, timeout = 0) {
            setTimeout(() => {
                this.$notify({
                    type: typeNotify,
                    title: typeNotify,
                    message: value,
                });
            }, timeout);
        },
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
        formatPrice(value) {
            let val = (value / 1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        getWindowWidth(event) {
            this.windowWidth = document.documentElement.clientWidth;
        },
        getWindowHeight(event) {
            this.windowHeight = document.documentElement.clientHeight;
        }
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.getWindowWidth);
        window.removeEventListener('resize', this.getWindowHeight);
    }
}