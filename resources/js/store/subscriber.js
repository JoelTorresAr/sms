import store from '../store'
/**
 * esta atento (observador) cambios (commit) en los store dentro de la carpeta store
 */
store.subscribe((mutation) => {
    // console.log(mutation)
    switch (mutation.type) {
        case 'usuario/SET_TOKEN':
            // si esta autenticado
            if (mutation.payload) {
                // enviar en la cabecera el token y guardar en el storage
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + mutation.payload
                localStorage.setItem('token', mutation.payload)
            } else {
                /**
                 * como es nulo al cambiar el token por navegador en la peticion (Catch) lo elimina
                 */
                // console.log('entro')
                // de lo contrario borrar la cabecera y borrar el storge
                axios.defaults.headers.common['Authorization'] = null;
                //borrar el token, rol  y menu seleccionado
                localStorage.removeItem('token')
                localStorage.removeItem('rolSelected')
                localStorage.removeItem('menuSelected')
            }
            break;

        default:
            break;
    }
})