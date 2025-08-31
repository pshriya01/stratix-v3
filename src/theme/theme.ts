import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#783C91',
      dark: '#3F214C',
      light: '#AA86B9',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#90789B',
      light: '#F0E2F6',
      contrastText: '#FFFFFF'
    },
    text: {
      primary: '#1E002B',
      secondary: '#676767'
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF'
    },
    grey: {
      100: '#EFECF0',
      200: '#DCD0E1',
      300: '#CFCFCF',
      400: '#DFDFDF'
    }
  },
  typography: {
    fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '44px',
      color: '#1E002B'
    },
    h2: {
      fontWeight: 700,
      fontSize: '33px',
      color: '#1E002B'
    },
    h3: {
      fontWeight: 700,
      fontSize: '24px',
      color: '#1E002B'
    },
    h4: {
      fontWeight: 700,
      fontSize: '20px',
      color: '#1E002B'
    },
    h5: {
      fontWeight: 700,
      fontSize: '15px',
      color: '#1E002B'
    },
    body1: {
      fontWeight: 400,
      fontSize: '14px',
      color: '#1E002B'
    },
    body2: {
      fontWeight: 400,
      fontSize: '12px',
      color: '#676767'
    },
    button: {
      fontWeight: 700,
      fontSize: '14px',
      textTransform: 'uppercase'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          height: '41px',
          padding: '10px 24px',
          textTransform: 'uppercase',
          fontWeight: 700
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '4px',
            '& fieldset': {
              borderColor: '#AA86B9'
            },
            '&:hover fieldset': {
              borderColor: '#783C91'
            },
            '&.Mui-focused fieldset': {
              borderColor: '#783C91'
            }
          }
        }
      }
    }
  }
});

export default theme;
