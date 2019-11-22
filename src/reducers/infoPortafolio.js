import {ACTIONS} from '../actions/types';

//Reducer
const defaultState = {
  datosPortafolio : []
}

const infoPortafolio = (state = defaultState, action) =>{
  switch(action.type) {   
    case ACTIONS.FETCH_PORTAFOLIOS_BY_ID:
      return { ...state, datosPortafolio: [action.payload]}
    default: 
      return state; 
  }
};
export default infoPortafolio
