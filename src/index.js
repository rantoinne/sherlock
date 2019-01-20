import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider } from 'react-redux';
import { persistor, store } from './app/ConfigureStore';
import App from './App';

ReactDOM.render((
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <App />
    </Provider>
  </PersistGate>
), document.getElementById('root'));

serviceWorker.unregister();