import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bulma/css/bulma.css';
import './styles.scss';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {carReducer} from './reducers/CarReducer'

const store = createStore(carReducer)
console.log("current sate:", store.getstate)

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement);
