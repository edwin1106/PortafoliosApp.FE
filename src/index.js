import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux';
import Root from './components/Root';
import thunk from 'redux-thunk';
import reducers from './reducers/';
import './common/overrides.css'



const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, 
    composeEnhancers(
    applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <Root store={store}/>
    </Provider>,
     document.querySelector('#root'));