import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';

const WorkerForm4 = () => {

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        px: 3,
        pt:17
      }}
    >
      {/* Green Check Icon */}
      <CheckCircleIcon sx={{ fontSize: 80, color: '#00C853', mb: 3 }} />

      {/* Success Message */}
      <Typography
        variant="h6"
        sx={{ fontWeight: 'bold', mb: 1, textAlign: 'center' }}
      >
        Profile successfully
        <br />
        completed
      </Typography>

      {/* Move to Worker Page Button */}
      <Button
        variant="contained"
        sx={{
          mt: 4,
          bgcolor: '#B39DDB', // Light purple
          borderRadius: 50,
          px: 5,
          py: 1.5,
          textTransform: 'none',
          fontWeight: 'bold',
          fontSize: '1rem',
          '&:hover': {
            bgcolor: '#9C89D3',
          },
        }}
      >
        Move to Worker Page
      </Button>
    </Box>
  );
};

export default WorkerForm4;