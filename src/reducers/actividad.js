import {ACTIONS} from '../actions/types';

const defaultState = {
  actividadesData : [],
  actualizarActividadData: undefined
}

const actividad = (state = defaultState, action) =>{
  switch(action.type) {   
    case ACTIONS.FETCH_ACTIVIDADES:
      return { ...state, actividadesData: action.payload};
    case ACTIONS.CREATE_ACTIVIDADES:
      return {...state, actividadesData: [...state.actividadesData, action.payload]}
    case ACTIONS.DELETE_ACTIVIDADES:
      return {...state, actividadesData: state.actividadesData.filter(({id}) => id !== action.payload)}
    case ACTIONS.UPDATE_ACTIVIDADES:
      return {...state}
    case ACTIONS.FETCH_ACTIVIDADES_BY_ID:
      return {...state, actualizarActividadData: action.payload}
    default: 
      return state; 
  }
};
export default actividad;
