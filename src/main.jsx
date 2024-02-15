import React from 'react';
import ReactDOM from 'react-dom/client';
import { CleanHomeApp } from './CleanHomeApp';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CleanHomeApp />
    </BrowserRouter>
  </React.StrictMode>,
);
