import { Box, Button } from '@mui/material';
import React from 'react';

const BottomButton = ({ handleNext }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: 'white',
        py: 2,
        px: 2, 
        boxShadow: '0 -2px 8px rgba(0,0,0,0.1)',
        zIndex: 1000,
      }}
    >
      <Button
        variant="contained"
        onClick={handleNext}
        sx={{
          bgcolor: '#a47763',
          borderRadius: 5,
          width: '100%',
          py: 1.2,
          textTransform: 'none',
          fontWeight: 'bold',
        }}
      >
        Next
      </Button>
    </Box>
  );
};

export default BottomButton;
