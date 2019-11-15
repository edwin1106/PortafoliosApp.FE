import ACTIONS from "./types";
import { getPortafolios } from "../api/PortafolioApi";

export const fetchPortafolios = (portafolios) => ({
    type: ACTIONS.FETCH_PORTAFOLIOS,
    payload : portafolios
})

export const fetchingPortafolios = () => async (dispatch) => {
    const portafolios = await getPortafolios()
    dispatch(fetchPortafolios(portafolios))
}