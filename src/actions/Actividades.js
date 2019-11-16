import ACTIONS from "./types";
import {getActividades} from "../api/ActividadApi";

export const fetchActividades = (actividades) => ({
    type: ACTIONS.FETCH_ACTIVIDADES,
    payload : actividades
})

export const fetchingActividades = () => async (dispatch) => {
    const actividades = await getActividades()
    dispatch(fetchActividades(actividades))
}
