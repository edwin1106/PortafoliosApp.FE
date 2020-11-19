import ACTIONS from "./types";
import { deleteActividadUsuario, getActividadUsuarioById, getActividadUsuarios, getUsuariosByActividadId, postActividadUsuarios, putActividadUsuario } from "../api/ActividadUsuarioApi";
import history from '../history'
import {processDateAttributes} from '../common/utilities/dataTransformations'


export const fetchActividadUsuarios = (actividadUsuarios) => ({
  type: ACTIONS.FETCH_ACTIVIDADUSUARIOS,
  payload: actividadUsuarios
})
export const createActividadUsuario = (actividadUsuarios) => ({
  type: ACTIONS.CREATE_ACTIVIDADUSUARIO,
  payload: actividadUsuarios
})

export const updateActividadUsuario = () => ({
  type: ACTIONS.UPDATE_ACTIVIDADUSUARIO
})

export const fetchActividadUsuarioById = (actividadUsuarios) => ({
  type: ACTIONS.FETCH_ACTIVIDADUSUARIO_BY_ID,
  payload: actividadUsuarios
})

export const removeActividadUsuario = (id) => ({
  type: ACTIONS.DELETE_ACTIVIDADUSUARIO,
  payload: id
})

export const fetchUsuariosByActividadId = (actividadUsuarios) => ({
  type: ACTIONS.FETCH_USUARIOS_BY_ACTIVIDAD_ID,
  payload: actividadUsuarios
})

export const fetchingActividadUsuarios = () => async (dispatch) => {
  const usuarios = await getActividadUsuarios()
  dispatch(fetchActividadUsuarios(usuarios))
}

export const creatingActividadUsuario = (usuario) => async (dispatch) => {
  const response = await postActividadUsuarios(usuario)
  dispatch(createActividadUsuario(response))
  history.push(`/Usuarios`)
}

export const updatingActividadUsuario = (actividadUsuario) => async () => {
  await putActividadUsuario(actividadUsuario)
  history.push(`/Usuarios`)
}

export const fetchingActividadUsuarioById = (id) => async (dispatch) => {
  const actividadUsuario = await getActividadUsuarioById(id);
  dispatch(fetchActividadUsuarioById(actividadUsuario))
}

export const removingActividadUsuario = (id) => async (dispatch) =>{
  await deleteActividadUsuario(id)
  dispatch(removeActividadUsuario(id))
}

export const fetchingUsuariosByActividadId = (id) => async (dispatch) => {
  const actividadUsuario = await getUsuariosByActividadId(id)
  dispatch(fetchUsuariosByActividadId(actividadUsuario))
}
