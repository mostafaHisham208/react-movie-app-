import { combineReducers} from 'redux'
import languageReducer from './language';
import loaderReducer from './loader';
import moviesReducer from './movie';
import FavReducer from './favoirte';

export default combineReducers({
    lang:languageReducer,
    loader:loaderReducer,
    movies: moviesReducer,
    favo:FavReducer

})


