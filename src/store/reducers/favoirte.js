const INTIAL_STATE = {
    favo: [],
};

export default function FavReducer(state = INTIAL_STATE, action) {
    switch (action.type) {
        case "ADD_FAV":
            return { ...state, favo: action.payload };
        case "REMOVE_FAV":
             return { ...state, favo:action.payload}
        default:
            return state;
    }
}