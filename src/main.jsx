import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global'

import { SignIn } from './pages/SignIn/index.jsx'
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SignIn />
    </ThemeProvider>
  </React.StrictMode>,
)
