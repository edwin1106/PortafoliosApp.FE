import React from 'react'
import InfoPortafolioContainer from '../containers/InfoPortafolioContainer'
import ActividadesPortafolioContainer from '../containers/ActividadesPortafolioContainer'


const InfoPortafolioPage = () => (
  <div className="container full-h">
  <>
    <h2>Detalles</h2>
    <hr />

    <InfoPortafolioContainer />

    <h2>Actividades</h2>
    <hr />
    <ActividadesPortafolioContainer/>
    
  </>
  </div>
)

export default InfoPortafolioPage
