import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import portafolio from './portafolio';
import actividad from './actividad';

export default combineReducers({
    portafolio,
    actividad,
    form: formReducer
});
