import { INICIAR_SESION_CORRECTO, INICIAR_SESION_ERROR, MOSTRAR_ALERTA, OCULTAR_ALERTA, USUARIO_AUTENTICADO, CERRAR_SESION } from '../types';

// axios
import clientAxios from '../axios/axios';
import { Alert } from '../helpers/Alert';
import authToken from '../axios/authToken';


// función para hacer la consulta al backend
export const startLogin = ( user ) => {
    return async( dispatch ) => {
        try {
            const res = await clientAxios.post('/api/suitreparacion/auth', user );
            const userData = res.data;
            
            if( userData.ok ) {
                dispatch( loginUser( userData ));
                dispatch( authUser(userData.token ) );
            }

        } catch (error) {
            const err = await error.response;

            dispatch({
                type: INICIAR_SESION_ERROR
            });         
            
            // verifica si hay un mensaje en la respuesta
            if( err.data.msg ){
                dispatch({
                    type: MOSTRAR_ALERTA,
                    payload: err.data.msg
                });

                // muestra un alerta de error
                Alert('¡Error!', err.data.msg, 'error');

                setTimeout(() => {
                    dispatch({
                        type: OCULTAR_ALERTA
                    })
                }, 3000);
            }

            // debido a que en el backend hay validación, puede retornar un arreglo de errores
                // valida que exista ese arreglo
            if( err.data.errors !== undefined){
                dispatch({
                    type: MOSTRAR_ALERTA,
                    payload: err.data.errors.password.msg
                });

                Alert('¡Error!', err.data.errors.password.msg, 'error' );

                setTimeout( () => {
                    dispatch({
                        type: OCULTAR_ALERTA
                    })
                }, 3000)
            }
        }
    }
}

// función para llamar al action
const loginUser = ( user ) => ({
    type: INICIAR_SESION_CORRECTO,
    payload: user 
});


// función que valida el token guardado en local storage,
    // si es valido o no ha expirado ( tiene limite de 5hras ) autentica al usuario
export const authUser = ( token ) => {
    return async ( dispatch ) => {
        
        // validación del token
        authToken( token );
        try {
            const res = await clientAxios.get('/api/suitreparacion/auth');

            if( res.data.user ) {
                dispatch({
                    type: USUARIO_AUTENTICADO,
                    payload: res.data.user
                });

            }
            
        } catch (error) {
            const err = await error.response;

            dispatch({
                type: INICIAR_SESION_ERROR
            });
            
            dispatch({
                type: MOSTRAR_ALERTA,
                payload: err.data.msg
            });

            Alert('¡Error!', err.data.msg, 'error');

            setTimeout(() => {
                dispatch({
                    type: OCULTAR_ALERTA
                });
            }, 3000);
        }
    }
}

// función para cerrar sesión del usuario
export const logoutUser = () => ({
    type: CERRAR_SESION
});