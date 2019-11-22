import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import portafolio from './portafolio';
import actividad from './actividad';
import infoPortafolio from './infoPortafolio';

export default combineReducers({
    portafolio,
    actividad,
    infoPortafolio,
    form: formReducer
});
