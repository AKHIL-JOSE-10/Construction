import { Box, Button } from '@mui/material';
import React from 'react';

const BottomButton = ({ handleNext }) => {
  return (
    <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center' }}>
      <Button
        variant="contained"
        onClick={handleNext}
        sx={{
          bgcolor: '#a47763',
          borderRadius: 5,
          px: 5,
          py: 1.5,
          textTransform: 'none',
          fontWeight: 'bold',
          fontSize: '1rem',
          '&:hover': {
            bgcolor: '#8d6551',
          },
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default BottomButton;
