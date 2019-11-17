import {ACTIONS} from '../actions/types';

const defaultState = {
  portafoliosData : [],
  actualizarPortafolioData: undefined
}

const portafolio = (state = defaultState, action) =>{
  switch(action.type) {   
    case ACTIONS.FETCH_PORTAFOLIOS:
      return { ...state, portafoliosData: action.payload};
    case ACTIONS.CREATE_PORTAFOLIOS:
      return { ...state, portafoliosData: [...state.portafoliosData, action.payload]}
    default: 
      return state; 
  }
};
export default portafolio
