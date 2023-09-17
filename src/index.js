import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App';
import { GlobalStyles } from 'components/styles/GlobalStyles';
import './index.css';
import { Global } from '@emotion/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <Global styles={GlobalStyles} />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
