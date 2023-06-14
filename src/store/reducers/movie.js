const INTIAL_STATE={
    movies:[]
};

export default function moviesReducer(state=INTIAL_STATE,action){
   
    switch(action.type){
        case "SET_MOVIE":
            return {...state,movies: action.payload}
        default:
            return state;
    }

}