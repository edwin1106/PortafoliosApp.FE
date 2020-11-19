import {ACTIONS} from '../actions/types';

const defaultState = {
  actividadUsuariosData : [],
  actualizarActividadUsuarioData: undefined,
}

const actividadUsuarios = (state = defaultState, action) =>{
  switch(action.type) {   
    case ACTIONS.FETCH_ACTIVIDADUSUARIOS:
      return { ...state, actividadUsuariosData: action.payload};
    case ACTIONS.FETCH_USUARIOS_BY_ACTIVIDAD_ID:
      return { ...state, actividadUsuariosData: action.payload};
    case ACTIONS.CREATE_ACTIVIDADUSUARIO:
      return {...state, actividadUsuariosData: [...state.actividadUsuariosData, action.payload]}
    case ACTIONS.DELETE_ACTIVIDADUSUARIO:
      return {...state, actividadUsuariosData: state.actividadUsuariosData.filter(({id}) => id !== action.payload)}
    case ACTIONS.UPDATE_ACTIVIDADUSUARIO:
      return {...state}
    case ACTIONS.FETCH_ACTIVIDADUSUARIO_BY_ID:
      return {...state, actualizarActividadUsuarioData: action.payload}

    default: 
      return state; 
  }
};
export default actividadUsuarios;
