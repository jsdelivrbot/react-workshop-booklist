import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

// Inyectar como Middleware de la applicación el redux-promise.
// Tirar acción Redux detecta que es una promise y la para. Hace la petición y devuelve el resultado
// de la llamada cuando tiene los datos y devuelve entonces el objeto con los datos correctos.
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('#container'));
