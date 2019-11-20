import ACTIONS from "./types";
import { getPortafolios, postPortafolios, putPortafolios, getPortafoliosById } from "../api/PortafolioApi";
import history from '../history'
import {processDateAttributes} from '../common/utilities/dataTransformations'

export const fetchPortafolios = (portafolios) => ({
    type: ACTIONS.FETCH_PORTAFOLIOS,
    payload : portafolios
})
export const createPortafolio= (portafolio) => ({
  type: ACTIONS.CREATE_PORTAFOLIOS,
  payload: portafolio
})

export const updatePortafolio = () =>({
  type: ACTIONS.UPDATE_PORTAFOLIOS
})

export const fetchPortafolioById =(portafolio) =>({
  type: ACTIONS.FETCH_PORTAFOLIOS_BY_ID,
  payload: portafolio
})

export const fetchingPortafolios = () => async (dispatch) => {
    const portafolios = await getPortafolios()
    dispatch(fetchPortafolios(portafolios))
}
export const creatingPortafolio= (portafolio) => async(dispatch) =>{
  const response = await postPortafolios(portafolio)
  dispatch(createPortafolio(response))
  history.push(`/Portafolios`)
}

export const updatingPortafolio = (portafolio) => async()=>{
  await putPortafolios(portafolio)
  history.push(`/Portafolios`)
}

export const fetchingPortafolioById = (id) => async(dispatch)=>{
  const response = await getPortafoliosById(id);
  processDateAttributes(response, ['fechaInicio']);
  dispatch(fetchPortafolioById(response))
}
