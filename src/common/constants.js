const Constants = Object.freeze({
    API_DEV_URL: 'http://localhost:00000/api',
    API_ENDPOINTS: {
        PORTAFOLIOS: 'portafolios',
        ACTIVIDADES: 'actividades',
    } 
})

export const GetEndpoint = (endpoint) => {
    return `${Constants.API_DEV_URL}/${endpoint}`
}

export default Constants