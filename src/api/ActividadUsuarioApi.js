import axios from 'axios';
import Constants, {GetEndpoint} from '../common/constants';

const ACTIVIDADUSUARIOS_API_URL = GetEndpoint(Constants.API_ENDPOINTS.ACTIVIDAD_USUARIOS);

export const getActividadUsuarios = async () =>{
    const response = await axios.get(ACTIVIDADUSUARIOS_API_URL)
    return response.data 
}

export const postActividadUsuarios = async (actividadUsuario) => {
    const response = await axios.post(ACTIVIDADUSUARIOS_API_URL, actividadUsuario)
    return response.data
}

export const putActividadUsuario = async (actividadUsuario) => {
    return await axios.put(`${ACTIVIDADUSUARIOS_API_URL}/${actividadUsuario.id}`, actividadUsuario)
}

export const getActividadUsuarioById = async (id) => {
    const response = await axios.get(`${ACTIVIDADUSUARIOS_API_URL}/${id}`)
    return response.data
}

export const getUsuariosByActividadId = async (id) => {
  const response = await axios.get(`${ACTIVIDADUSUARIOS_API_URL}/actividadId/${id}`)
  return response.data
}

export const deleteActividadUsuario = async (id) => {
  await axios.delete(`${ACTIVIDADUSUARIOS_API_URL}/${id}`)
}
