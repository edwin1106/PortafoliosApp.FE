import React from 'react'
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history'
import HomePage from '../pages/HomePage';


const Root = () => {

  return (<>
    <Router history={history}>
      <div id="main-container">
        <Switch>
          <Route path="/" exact component = {HomePage}/>
        </Switch>  
      </div>
    </Router>
      
  </>)
}
export default Root;