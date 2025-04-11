import { createTheme } from '@mui/material/styles';

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: { main: '#006D77' },
          secondary: { main: '#83C5BE' },
          background: {
            default: '#EDF6F9',
            paper: '#ffffff',
          },
        }
      : {
          primary: { main: '#83C5BE' },
          secondary: { main: '#006D77' },
          background: {
            default: '#121212',
            paper: '#1e1e1e',
          },
        }),
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export const createAppTheme = (mode) => createTheme(getDesignTokens(mode));
