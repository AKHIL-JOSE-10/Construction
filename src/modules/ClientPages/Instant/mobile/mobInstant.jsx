import React from 'react';
import { Box, Grid, Typography, Stack } from '@mui/material';
import InstantService from "@/assets/InstantService.png";
import MobHeading from '@/modules/components/Mobile/mobileHeading';
import { useNavigate } from 'react-router-dom';

const MobInstant = () => {
  const navigate = useNavigate();

  return (
    <Grid container direction="column" alignItems="center" sx={{ px: 2, mt: 1 }}>
      <MobHeading Heading="Instant Service" />


      {/* Description */}
      <Box sx={{ maxWidth: 400 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
          Quick Help, Anytime!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Need urgent repair, maintenance, or home service? Our instant service feature helps you get a verified technician in no time. Just tap and get help on the way.
        </Typography>
      </Box>

 {/* Image Card */}
      <Box
        onClick={() => navigate("/mobile-Urgent-ServiceRequest")}
        sx={{
          my: 3,
          width: '100%',
          maxWidth: 400,
          borderRadius: 1,
          overflow: 'hidden',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
          transition: 'transform 0.3s ease-in-out',
          cursor: 'pointer',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        }}
      >
        <Box
          component="img"
          src={InstantService}
          alt="Instant Service"
          sx={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </Box>


      {/* Features Section */}
      <Stack spacing={1.5} sx={{ mt: 3, maxWidth: 400 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
          Why Choose Instant Service?
        </Typography>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Box sx={{ width: 8, height: 8, mt: '6px', bgcolor: 'primary.main', borderRadius: '50%' }} />
          <Typography variant="body2">Quick response from nearby professionals</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Box sx={{ width: 8, height: 8, mt: '6px', bgcolor: 'primary.main', borderRadius: '50%' }} />
          <Typography variant="body2">Trusted, verified service providers</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Box sx={{ width: 8, height: 8, mt: '6px', bgcolor: 'primary.main', borderRadius: '50%' }} />
          <Typography variant="body2">Track real-time response and updates</Typography>
        </Box>
      </Stack>
    </Grid>
  );
};

export default MobInstant;
