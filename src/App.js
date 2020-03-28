import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

// import ReactDOM from 'react-dom';
import './index.css';

import Home from './pages/Home';

const theme = createMuiTheme({
  palette: {
        primary:{ 500: '#fff333' },
        secondary:{ 500: '#222222', A400: '#222222' },
     }
   });

function App() {
  return(
    <MuiThemeProvider theme={theme}>
      <Home />
    </MuiThemeProvider>
  );
}

export default App;
