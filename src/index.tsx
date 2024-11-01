import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GoogleTagManager from './components/GoogleTagManager';
import reportWebVitals from './reportWebVitals';

const GTM_ID = 'GTM-THKNQX4S';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GoogleTagManager gtmId={GTM_ID} />
    <App />
  </React.StrictMode>
);

reportWebVitals();
