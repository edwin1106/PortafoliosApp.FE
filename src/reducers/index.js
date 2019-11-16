import { combineReducers } from "redux";
import portafolio from './portafolio';
import actividad from './actividad';

export default combineReducers({
    portafolio,
    actividad,
});
