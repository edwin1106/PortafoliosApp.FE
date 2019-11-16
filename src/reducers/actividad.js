import {ACTIONS} from '../actions/types';

const defaultState = {
  actividadesData : [],
  actualizarActividadData: undefined
}

const actividad = (state = defaultState, action) =>{
  switch(action.type) {   
    case ACTIONS.FETCH_ACTIVIDADES:
      return { ...state, actividadesData: action.payload};
    default: 
      return state; 
  }
};
export default actividad;
