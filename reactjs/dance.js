// index.js - CORRECTED
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import app from './app1';
import reportWebVitals from './reportWebVitals';
import App1 from './app1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>
);

reportWebVitals();
