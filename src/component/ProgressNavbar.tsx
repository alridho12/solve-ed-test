import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import LinearProg from './LinearProg';
import ModalExit from './ModalExit';
import ModalInfo from './ModalInfo';

interface ProgressNavbarProps {
  progress: number; 
}


export default function ProgressNavbar({ progress }: ProgressNavbarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ background: 'linear-gradient(98deg, #ffd946, #ffd018 23.96%, #fdbd1a)' }}>
        <Toolbar>
          <ModalExit />
          <LinearProg progress={progress}/>
          <ModalInfo />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
