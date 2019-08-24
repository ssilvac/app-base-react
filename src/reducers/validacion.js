const initialState = {
    error: false
}

export default function(state = initialState, action) {

    switch (action.type) {
        case 'VALIDA_NOMBRE_MODULO':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}