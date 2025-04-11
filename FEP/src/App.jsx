import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Adopt from './views/Adopt';
import Form from "./views/Form";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#006D77',
    },
    secondary: {
      main: '#83C5BE',
    },
    background: {
      default: '#EDF6F9',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;