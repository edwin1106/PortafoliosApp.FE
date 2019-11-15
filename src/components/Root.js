import React from 'react'
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history'
import HomePage from '../pages/HomePage';
import PortafoliosPage from '../pages/PortafoliosPage';


const Root = () => {

  return (<>
    <Router history={history}>
      <div id="main-container">
        <Switch>
          <Route path="/" exact component = {PortafoliosPage}/>
        </Switch>  
      </div>
    </Router>
      
  </>)
}
export default Root;