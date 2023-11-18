/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global'

import theme from './styles/theme';
import { SignIn } from './pages/SignIn/index.jsx'
import { SignUp } from './pages/SignUp';
import { Home } from './pages/Home';
import { Page } from './pages/Page/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Page />
    </ThemeProvider>
  </React.StrictMode>,
)
