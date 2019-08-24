const initialState = {
    title : 'AppReactBase',
    titleUrl : 'https://app-base-react.netlify.com'
}

export default function(state = initialState, action) {

    switch (action.type) {
        case 'CAMBIAR_NOMBRE_APP':
            return {
                ...state,
                title : action.payload
            }
        default:
                return state;
    }
}