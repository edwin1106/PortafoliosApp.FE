import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import portafolio from './portafolio';
import actividad from './actividad';
import infoPortafolio from './infoPortafolio';
import usuario from './usuario';
import actividadUsuarios from './actividadUsuarios';

export default combineReducers({
    portafolio,
    actividad,
    infoPortafolio,
    usuario,
    actividadUsuarios,
    form: formReducer
});
