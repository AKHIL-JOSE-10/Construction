import {Grid, Box, Typography } from '@mui/material';
import MobileBottomTab from '../../modules/components/Mobile/mobileBottomTab';

const MobMessages = () => {
  return (
    <Grid>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#f4f4f4',
          textAlign: 'center',
          px: 2,
          flexDirection:'column'
        }}
      >
        <Typography variant='h4'>Message Page</Typography>
        <Typography
          variant="h6"
          sx={{ color: '#555', fontWeight: 500 ,mt:2 }}
        >
          🚧 Work in Progress 🚧
        </Typography>
      </Box>
      <MobileBottomTab />
    </Grid>

  );
};

export default MobMessages;
