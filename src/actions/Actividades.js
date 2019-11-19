import ACTIONS from "./types";
import {getActividades, postActividades} from "../api/ActividadApi";
import history from '../history'

export const fetchActividades = (actividades) => ({
    type: ACTIONS.FETCH_ACTIVIDADES,
    payload : actividades
})

export const createActividad = (actividad) => ({
  type: ACTIONS.CREATE_ACTIVIDADES,
  payload: actividad
})

export const fetchingActividades = () => async (dispatch) => {
    const actividades = await getActividades()
    dispatch(fetchActividades(actividades))
}

export const creatingActividad = (actividad) => async(dispatch) =>{
  const response = await postActividades(actividad)
  dispatch(createActividad(response))
  history.push(`/Actividades`)
}
