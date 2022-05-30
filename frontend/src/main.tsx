import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { AppProvider } from './contexts/AppContext';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppProvider>
        <App />
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
