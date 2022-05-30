import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

import { Ripple } from 'react-preloaders';
import { AppProvider } from './contexts/AppContext';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
    {/* <Ripple /> */}
  </React.StrictMode>,
  document.getElementById('root')
)
