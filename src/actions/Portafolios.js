import ACTIONS from "./types";
import { getPortafolios, postPortafolios } from "../api/PortafolioApi";
import history from '../history'

export const fetchPortafolios = (portafolios) => ({
    type: ACTIONS.FETCH_PORTAFOLIOS,
    payload : portafolios
})
export const createPortafolio= (portafolio) => ({
  type: ACTIONS.CREATE_PORTAFOLIOS,
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
