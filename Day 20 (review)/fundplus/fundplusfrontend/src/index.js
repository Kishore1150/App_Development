import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Assets/Styles/index.css';
import './Assets/Styles/font.css';
import store from './Redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from "@material-tailwind/react";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);