import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CryptoPrices from './components/getAPI';
import TopCryptos from './components/topCrytos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

    <TopCryptos></TopCryptos>

  </React.StrictMode>
);