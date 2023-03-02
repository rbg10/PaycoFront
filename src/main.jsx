import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';
import './index.css'; 
import { theme } from './theme/Theme';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
