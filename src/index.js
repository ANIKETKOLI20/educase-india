import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react'; 
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Auth0Provider
    domain="dev-i2m3hkabd0giyfby.us.auth0.com"
    clientId="71NkJMqrm2t94NwpEwP828Ca2PrKRyEd"
    redirectUri={window.location.origin} 
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

reportWebVitals();
