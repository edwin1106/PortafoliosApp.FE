import ACTIONS from "./types";
import {getActividades, postActividades, getActividadById, putActividad, deleteActividad, getActividadesByPortafolioId} from "../api/ActividadApi";
import history from '../history'
import {processDateAttributes} from '../common/utilities/dataTransformations'

export const fetchActividades = (actividades) => ({
    type: ACTIONS.FETCH_ACTIVIDADES,
    payload : actividades
})

export const createActividad = (actividad) => ({
  type: ACTIONS.CREATE_ACTIVIDADES,
  payload: actividad
})

export const fetchActividadById = (actividad) =>({
  type: ACTIONS.FETCH_ACTIVIDADES_BY_ID,
  payload: actividad
})

export const updateActividad = () =>({
  type: ACTIONS.UPDATE_ACTIVIDADES
})

export const removeActividad = (id) => ({
  type: ACTIONS.DELETE_ACTIVIDADES,
  payload: id
})

export const fetchActividadesByPortafolioId = (actividades) =>({
  type: ACTIONS.FETCH_ACTIVIDADES_BY_PORTAFOLIO_ID,
  payload: actividades
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

export const fetchingActividadById =(id) =>async(dispatch) =>{
  const response = await getActividadById(id);
  processDateAttributes(response, ['fecha'])
  dispatch(fetchActividadById(response))
}

export const updatingActividad = (actividad) =>async() =>{
  await putActividad(actividad)
  history.push(`/Actividades`)
}

export const removingActividad = (id) => async (dispatch) =>{
  await deleteActividad(id)
  dispatch(removeActividad(id))
}

export const fetchingActividadesByPortafolioId =(id) => async (dispatch) =>{
  const response = await getActividadesByPortafolioId(id);
  console.log(response);
  dispatch(fetchActividadesByPortafolioId(response))
}
