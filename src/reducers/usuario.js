import {ACTIONS} from '../actions/types';

const defaultState = {
  usuariosData : [],
  actualizarUsuarioData: undefined,
}

const usuario = (state = defaultState, action) =>{
  switch(action.type) {   
    case ACTIONS.FETCH_USUARIOS:
      return { ...state, usuariosData: action.payload};
    case ACTIONS.CREATE_USUARIO:
      return {...state, usuariosData: [...state.usuariosData, action.payload]}
    case ACTIONS.DELETE_USUARIO:
      return {...state, usuariosData: state.usuariosData.filter(({id}) => id !== action.payload)}
    case ACTIONS.UPDATE_USUARIO:
      return {...state}
    case ACTIONS.FETCH_USUARIO_BY_ID:
      return {...state, actualizarUsuarioData: action.payload}

    default: 
      return state; 
  }
};
export default usuario;
