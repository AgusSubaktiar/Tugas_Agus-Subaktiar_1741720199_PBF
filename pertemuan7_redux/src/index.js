import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux' 
import MainReducer from './reducer/MainReducer'
import App from './App';
import Table from './containers/Table'
import CreateTodo from './containers/CreateTodo'
import 'bootstrap/dist/css/bootstrap.min.css';

// import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';


const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => 
f)(createStore)(MainReducer)

ReactDOM.render(<Provider store={store}> 
<Table/>
</Provider>
, document.getElementById('root')); 
// registerServiceWorker();
serviceWorker.unregister();
