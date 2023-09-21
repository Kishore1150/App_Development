import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Assets/Styles/index.css';
import './Assets/Styles/font.css';
import store from './Redux/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);