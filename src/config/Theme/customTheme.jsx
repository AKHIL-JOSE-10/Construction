import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#B49176',
      light: '#F1E6DD',
      dark: '#030712',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#677489',
      light: '#E7E9EF',
      dark: '#4A5567',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#434966',
      secondary: '#82889C',
    },
    background: {
      default: '#F1E6DD',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 700, color: '#434966' },
    h2: { fontSize: '2rem', fontWeight: 600, color: '#434966' },
    body1: { fontSize: '1rem', fontWeight: 400, color: '#434966' },
    body2: { fontSize: '0.875rem', fontWeight: 400, color: '#82889C' },
    button: { fontWeight: 500, textTransform: 'none' },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          padding: '8px 16px',
          fontFamily: 'Poppins, sans-serif',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: '#E7E9EF',
          fontFamily: 'Poppins, sans-serif',
        },
      },
    },
  },
});

export default theme;
