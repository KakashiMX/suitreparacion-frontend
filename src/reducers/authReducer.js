import { INICIAR_SESION_CORRECTO, INICIAR_SESION_ERROR, USUARIO_AUTENTICADO, CERRAR_SESION } from "../types"

const initialState = {
    token: ( typeof window !== 'undefined') ? localStorage.getItem('suitreparacion-token') : '',
    user: null,
    permissions: null,
    logged: false,
}

export const authReducer = ( state = initialState, action ) => {
    switch( action.type ){

        case INICIAR_SESION_CORRECTO:
            localStorage.setItem('suitreparacion-token', action.payload.token );
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.name,
                permissions: action.payload.permissions,
                logged: true,
            }

        case INICIAR_SESION_ERROR:
            return {
                ...state
            }

            case USUARIO_AUTENTICADO:
                return{
                    ...state,
                    user: action.payload.name,
                    permissions: action.payload.permissions,
                    logged: true,

                }

            case CERRAR_SESION:
                localStorage.removeItem('suitreparacion-token');
                return{
                    ...state,
                    token: null,
                    user: null,
                    permissions: null,
                    logged: false
                }

        default:
            return state
    }
}