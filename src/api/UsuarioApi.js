import axios from 'axios';
import Constants, {GetEndpoint} from '../common/constants';

const USUARIOS_API_URL = GetEndpoint(Constants.API_ENDPOINTS.USUARIOS);

export const getUsuarios = async () =>{
    const response = await axios.get(USUARIOS_API_URL)
    return response.data 
}

export const postUsuario = async (usuario) => {
    const response = await axios.post(USUARIOS_API_URL,usuario)
    return response.data
}

export const putUsuario = async (usuario) => {
    return await axios.put(`${USUARIOS_API_URL}/${usuario.id}`,usuario)
}

export const getUsuarioById = async (id) => {
    const response = await axios.get(`${USUARIOS_API_URL}/${id}`)
    return response.data
}

export const deleteUsuario = async (id) => {
  await axios.delete(`${USUARIOS_API_URL}/${id}`)
}


