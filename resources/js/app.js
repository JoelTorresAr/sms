require('./bootstrap');

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/es'
Vue.use(ElementUI, { locale })

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);

import moment from 'moment';
moment.locale('es');
window.moment = moment;

import common from './common';
Vue.mixin(common)

require('./plugins/Form');

require('./store/subscriber')
//axios.defaults.baseURL='http://localhost:63038/'

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters['usuario/authenticated']) {
            if (store.getters['usuario/permissions'].includes(to.name)) {
                next();
            } else {
                next({
                    name: "Escritorio",
                });
            }
        } else {
            next({
                name: "login",
            });
        }
    } else {
        if (store.getters['usuario/authenticated']) {
            next({
                name: "Escritorio",
            });
        } else {
            next(); // ¡asegúrese de llamar siempre a next ()!
        }
    }
});

 store.dispatch('usuario/attempt', localStorage.getItem('token')).then(() => {
    const app = new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
})
