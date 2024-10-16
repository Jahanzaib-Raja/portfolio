// app/theme.ts
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#4caf50' }, // Vibrant Green
    secondary: { main: '#2196f3' }, // Bright Blue
    background: { default: '#f5f5f5', paper: '#fff' },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h2: { fontWeight: 700, color: '#333' },
    h4: { fontWeight: 500, marginBottom: '1rem' },
  },
});

export const ThemeWrapper = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}> {children} </ThemeProvider>
);
