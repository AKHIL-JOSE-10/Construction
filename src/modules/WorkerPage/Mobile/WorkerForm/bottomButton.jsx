import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

const BottomButton = ({ handleNext, pgnum }) => {
  const navigate = useNavigate();

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
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
        <Button
          variant="outlined"
          onClick={() => navigate(-1)}
          startIcon={<ArrowBackIosIcon sx={{ fontSize: 16 }} />}
          sx={{
            borderRadius: 5,
            px: 2.5,
            py: 0.5,
            textTransform: 'none',
            fontWeight: 'bold',
            borderColor: '#a47763',
            color: '#a47763',
            '&:hover': {
              borderColor: '#a47763',
              bgcolor: '#f7f3f2',
            },
          }}
        >
          Prev
        </Button>
        <Typography sx={{ fontWeight: '550' }}> {pgnum}</Typography>
        <Button
          variant="contained"
          onClick={handleNext}
          endIcon={<ArrowForwardIosIcon sx={{ fontSize: 16 }} />}
          sx={{
            bgcolor: '#a47763',
            borderRadius: 5,
            px: 2.5,
            py: 0.5,
            textTransform: 'none',
            fontWeight: 'bold',
            '&:hover': {
              bgcolor: '#8d6551',
            },
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default BottomButton;
