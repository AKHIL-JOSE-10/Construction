import React from 'react';
import { Box, Grid, Typography, Stack } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstantService from "@/assets/InstantService.png";
import MobHeading from '@/modules/components/Mobile/mobileHeading';
import { useNavigate } from 'react-router-dom';

const MobInstant = () => {
  const navigate = useNavigate();

  return (
    <Grid container direction="column" alignItems="center" sx={{ px: 2, mt: 1 }}>
      <MobHeading Heading="Instant Service" />


      {/* Image Card */}
      <Box
        onClick={() => navigate("/mobile-Urgent-ServiceRequest")}
        sx={{
          mt:1,
          mb: 3,
          width: '100%',
          maxWidth: 400,
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.3s ease-in-out',
          cursor: 'pointer',
          '&:hover': {
            transform: 'scale(1.03)',
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

      {/* Description */}
      <Box sx={{ maxWidth: 400 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
          Quick Help, Anytime!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Need urgent repair, maintenance, or home service? Our instant service feature helps you get a verified technician in no time. Just tap and get help on the way.
        </Typography>
      </Box>

      {/* Features Section */}
      <Stack spacing={2} sx={{ mt: 3, maxWidth: 400 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
          Why Choose Instant Service?
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LocationOnIcon sx={{ color: 'primary.main' }} />
          <Typography variant="body2">
            Quick response from nearby professionals
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <VerifiedIcon sx={{ color: 'primary.main' }} />
          <Typography variant="body2">
            Trusted, verified service providers
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FlashOnIcon sx={{ color: 'primary.main' }} />
          <Typography variant="body2">
            Real-time tracking & instant updates
          </Typography>
        </Box>
      </Stack>
    </Grid>
  );
};

export default MobInstant;
