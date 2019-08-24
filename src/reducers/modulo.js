const initialState = {
    moduleSelected : 'home'
}

export default function(state = initialState, action) {

    switch (action.type) {
        case 'SELECCIONAR_MODULO':
            return {
                ...state,
                moduleSelected : action.payload
            }
        default:
                return state;
    }
}