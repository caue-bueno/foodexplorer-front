import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global'

import theme from './styles/theme';
import { SignIn } from './pages/SignIn/index.jsx'
import { SignUp } from './pages/SignUp';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Menu />
    </ThemeProvider>
  </React.StrictMode>,
)
