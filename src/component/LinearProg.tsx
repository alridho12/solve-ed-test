import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from '@mui/material';


const theme = createTheme({
  palette: {
    success: {
      main: '#4caf50',
    },
  },
});

interface LinearProgProps {
  progress: number; 
}


export default function LinearProg({ progress }: LinearProgProps) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%'}}>
      <LinearProgress value={progress} variant="determinate" color='success' sx={{borderRadius:'10px',height:'20px',background:'#eeeeee',color:'#4caf50' }} />
    </Box>
    </ThemeProvider>
  );
}
