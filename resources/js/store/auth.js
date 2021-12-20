export default {
    namespaced: true,
    /**
     * Es un objeto que puede contener cualquier tipo de información: strings, arrays u otros objetos
     * Es la información que almacenamos de forma centralizada en toda la app.
     */
    state: {
        token: null,
        user: null,
        permissions: null,
        roleSelected: null,
        roles: null,
        companySelected: null,
        companies: null,
    },
    /**
     * Son funciones.
     * No cambian el estado pero sí que lo formatean para que podemos utilizar esa información de la manera que la necesitemos.
     * Sería lo más parecido a una propiedad computed en el componente.
     * Un ejemplo sería una función que filtrara el estado. No lo modifica pero te devuelve un nuevo objeto diferente con los datos filtrados que necesitas.
     */
    getters: {
        authenticated(state) {
            return state.token && state.user;
        },
        user(state) {
            return state.user
        },
        permissions(state) {
            return state.permissions
        },
        roleSelected(state) {
            return state.roleSelected
        },
        roles(state) {
            return state.roles
        },
    },
    /**
     * Son funciones.
     * Son las únicas funciones que pueden modificar el estado.
     * Son llamadas por las acciones.
     * Se pueden inicializar en el componente a utilizar a través de commit o inicializarse a través de una acción.
     * Son síncronas.
     */
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_USER(state, user) {
            state.user = user;
        },
        SET_PERMISSION(state, permission) {
            state.permissions = permission;
        },
        SET_ROL_SELECTED(state, roleSelected) {
            state.roleSelected = roleSelected;
        },
        SET_ROLES(state, roles) {
            state.roles = roles;
        },
    },
    /**
     * Son funciones.
     * Poseen la lógica de negocio.
     * Para cambiar el estado deben de llamar a mutaciones a través de commit.
     * Pueden llamar otras acciones a través de dispatch.
     * La forma de inicializarse en el componente es a través de dispatch o utilizando modulos.
     * Son asíncronas.
     */
    actions: {
        /**
         * async: Para obtener respuesta en la peticion sin necesidad de utilizar el metodo then
         * await: No permite ejecutar lo que haya debajo hasta que la petición termine
         * @param {*} param0
         * @param {*} credentials
         */
        // async signIn(_, credentials) {
        async signIn({ dispatch }, credentials) {
            let response = await axios.post('/auth/login', credentials);
            // console.log(response.data)
            return dispatch('attempt', response.data.access_token);
        },
        async attempt({ commit, state }, token) {
            // Si existe el token, guardar en la mutación
            if (token) {
                commit('SET_TOKEN', token);
            }

            /**
             * Si no existe el token, hara un return y acaba el proceso
             */
            if (!state.token) {
                return
            }

            try {
                let response = await axios.get('/auth/me')
                commit('SET_USER', response.data)
            } catch (error) {
                commit('SET_TOKEN', null);
                commit('SET_USER', null);
                commit('SET_PERMISSION', null);
                commit('SET_ROL_SELECTED', null);
                commit('SET_ROLES', null);
            }

            try {
                let response = await axios.get('/seguridad/usuario/rolesPermissions', {
                    params: {
                        'rolSelected': localStorage.getItem('rolSelected')
                    }
                });

                commit('SET_PERMISSION', response.data.allPermissions.sort())
                commit('SET_ROL_SELECTED', response.data.roleSelected)
                commit('SET_ROLES', response.data.roles)

            } catch (error) {
                commit('SET_TOKEN', null);
                commit('SET_USER', null);
                commit('SET_PERMISSION', null);
                commit('SET_ROL_SELECTED', null);
                commit('SET_ROLES', null);
            }
        },
        signOut({ commit }) {
            return axios.post('/auth/logout').then(() => {
                commit('SET_TOKEN', null);
                commit('SET_USER', null);
                commit('SET_PERMISSION', null);
                commit('SET_ROL_SELECTED', null);
                commit('SET_ROLES', null);
            })
        },
    }
}