import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {rootReducer, presistor} from './redux/store'
import {PersistGate} from 'redux-persist/es/integration/react'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={rootReducer}>
    <PersistGate persistor={presistor}>
    <App />

    </PersistGate>
  </Provider>
);

reportWebVitals();
