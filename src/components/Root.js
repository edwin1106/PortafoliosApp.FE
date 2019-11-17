import React from 'react'
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history'
import HomePage from '../pages/HomePage';
import PortafoliosPage from '../pages/PortafoliosPage';
import ActividadesPage from '../pages/ActividadesPage';
import Navigation from './Navigation';
import CrearActividadPage from '../pages/CrearActividadPage';
import CrearPortafolioPage from '../pages/CrearPortafolioPage';


const Root = () => {

  return (<>
    <Router history={history}>
      <Navigation/>
      <div id="main-container">
        <Switch>
        <Route path="/" exact component = {HomePage}/>
          <Route path="/Portafolios" exact component = {PortafoliosPage}/>
          <Route path="/Actividades" exact component = {ActividadesPage}/>
          <Route path="/Actividades/Crear" exact component = {CrearActividadPage}/>
          <Route path="/Portafolios/Crear" exact component = {CrearPortafolioPage}/>
        </Switch>  
      </div>
    </Router>
      
  </>)
}
export default Root;
