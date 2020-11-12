import ACTIONS from "./types";
import { deleteUsuario, getUsuarioById, getUsuarios, postUsuario, putUsuario } from "../api/UsuarioApi";
import history from '../history'
import {processDateAttributes} from '../common/utilities/dataTransformations'


export const fetchUsuarios = (usuarios) => ({
  type: ACTIONS.FETCH_USUARIOS,
  payload: usuarios
})
export const createUsuario = (usuario) => ({
  type: ACTIONS.CREATE_USUARIO,
  payload: usuario
})

export const updateUsuario = () => ({
  type: ACTIONS.UPDATE_USUARIO
})

export const fetchUsuarioById = (usuario) => ({
  type: ACTIONS.FETCH_USUARIO_BY_ID,
  payload: usuario
})

export const removeUsuario = (id) => ({
  type: ACTIONS.DELETE_USUARIO,
  payload: id
})

export const fetchingUsuarios = () => async (dispatch) => {
  const usuarios = await getUsuarios()
  dispatch(fetchUsuarios(usuarios))
}
export const creatingUsuario = (usuario) => async (dispatch) => {
  const response = await postUsuario(usuario)
  dispatch(createUsuario(response))
  history.push(`/Usuarios`)
}

export const updatingUsuario = (usuario) => async () => {
  await putUsuario(usuario)
  history.push(`/Usuarios`)
}

export const fetchingUsuarioById = (id) => async (dispatch) => {
  const usuario = await getUsuarioById(id);
  processDateAttributes(usuario, ['fechaNacimiento'])
  dispatch(fetchUsuarioById(usuario))
}

export const removingUsuario = (id) => async (dispatch) =>{
  await deleteUsuario(id)
  dispatch(removeUsuario(id))
}
