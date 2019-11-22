import axios from 'axios';
import Constants, {GetEndpoint} from '../common/constants';

const ACTIVIDADES_API_URL = GetEndpoint(Constants.API_ENDPOINTS.ACTIVIDADES);

export const getActividades = async () =>{
    const response = await axios.get(ACTIVIDADES_API_URL)
    return response.data 
}

export const postActividades = async (actividad) => {
    const response = await axios.post(ACTIVIDADES_API_URL,actividad)
    return response.data
}

export const putActividad = async (actividad) => {
    return await axios.put(`${ACTIVIDADES_API_URL}/${actividad.id}`,actividad)
}

export const getActividadById = async (id) => {
    const response = await axios.get(`${ACTIVIDADES_API_URL}/${id}`)
    return response.data
}

export const deleteActividad = async (id) => {
  await axios.delete(`${ACTIVIDADES_API_URL}/${id}`)
}
