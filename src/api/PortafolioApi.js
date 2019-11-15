import axios from 'axios';
import Constants, {GetEndpoint} from '../common/constants';

const PORTAFOLIOS_API_URL = GetEndpoint(Constants.API_ENDPOINTS.PORTAFOLIOS);

export const getPortafolios = async () =>{
    const response = await axios.get(PORTAFOLIOS_API_URL)
    return response.data 
}

export const postPortafolios = async (portafolio) => {
    const response = await axios.post(PORTAFOLIOS_API_URL,portafolio)
    return response.data
}

export const putPortafolios = async (portafolio) => {
    return await axios.put(`${PORTAFOLIOS_API_URL}/${portafolio.id}`,portafolio)
}

export const getPortafoliosById = async (id) => {
    const response = await axios.get(`${PORTAFOLIOS_API_URL}/${id}`)
    return response.data
}



