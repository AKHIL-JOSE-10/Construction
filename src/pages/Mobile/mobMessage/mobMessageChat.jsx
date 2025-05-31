import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Grid,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom';  // import Link

const MobMessageChat = ({ name, avatar }) => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'white' }}>
      {/* Top Bar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: 2,
          py: 1.5,
          borderBottom: '1px solid #e0e0e0',
          bgcolor: '#fff',
        }}
      >
        {/* Back Arrow wrapped with Link */}
        <Link to="/mobile-messages" style={{ color: 'inherit' }}>
        {console.log('hi')}
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </Link>

        {/* Avatar and Name */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, ml: 1 }}>
          <Avatar src={avatar} sx={{ width: 36, height: 36, mr: 1 }} />
          <Typography variant="subtitle1" fontWeight={600}>
            {name}
          </Typography>
        </Box>

        {/* Call Icon */}
        <IconButton>
          <CallIcon />
        </IconButton>
      </Box>

      {/* Chat Messages */}
      <Grid container direction="column" spacing={2} sx={{ px: 2, mt: 5, mb: 8 }}>
        {/* Support message (left aligned) */}
        <Grid item>
          <Box
            sx={{
              maxWidth: '75%',
              bgcolor: '#f1f1f1',
              p: 1.5,
              borderRadius: 2,
              alignSelf: 'flex-start',
              fontSize: 14,
            }}
          >
            Hello! How can I assist you today?
          </Box>
        </Grid>

        {/* User message (right aligned) */}
        <Grid item sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Box
            sx={{
              maxWidth: '75%',
              bgcolor: '#d1e7dd',
              p: 1.5,
              borderRadius: 2,
              fontSize: 14,
            }}
          >
            I need help with my recent ticket.
          </Box>
        </Grid>

        {/* Support message */}
        <Grid item>
          <Box
            sx={{
              maxWidth: '75%',
              bgcolor: '#f1f1f1',
              p: 1.5,
              borderRadius: 2,
              alignSelf: 'flex-start',
              fontSize: 14,
            }}
          >
            Sure! Can you please provide your ticket ID?
          </Box>
        </Grid>

        {/* User message */}
        <Grid item sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Box
            sx={{
              maxWidth: '75%',
              bgcolor: '#d1e7dd',
              p: 1.5,
              borderRadius: 2,
              fontSize: 14,
            }}
          >
            It's #4521.
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MobMessageChat;
