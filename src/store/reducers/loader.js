
const INTIAL_STATE = {

    loader: false


};


export default function loaderReducer(state = INTIAL_STATE, action) {

    switch (action.type) {
        case 'SET_LOADER':
            return { ...state, loader: action.payload }

        default:
            return state;
    }

}