import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Grid,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CallIcon from '@mui/icons-material/Call';
import { useNavigate, useLocation } from 'react-router-dom';
import MobHelpSupportChatBottom from '../../../modules/components/Mobile/mobHelpSupport/mobHelpSupportChatBottom';

const MobMessageChat = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get contact from navigation state
  const { contact } = location.state || {};

  // Handle case if contact not found (direct URL access, etc)
  if (!contact) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography>No contact information available.</Typography>
        <Typography
          onClick={() => navigate(-1)}
          sx={{ color: 'blue', cursor: 'pointer', mt: 1 }}
        >
          Go back
        </Typography>
      </Box>
    );
  }

  const { name, avatar, phone } = contact;

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
          position: 'relative',
        }}
      >
        <Box
          onClick={() => navigate(-1)}
          sx={{
            position: 'absolute',
            left: 10,
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
          }}
        >
          <ArrowBackIosIcon sx={{ fontSize: '20px' }} />
        </Box>

        {/* Avatar and Name */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, ml: 4 }}>
          <Avatar src={avatar} sx={{ width: 36, height: 36, mr: 1 }} />
          <Typography variant="subtitle1" fontWeight={600}>
            {name}
          </Typography>
        </Box>

        {/* Call Icon */}
        <IconButton
          onClick={() => {
            if (phone) {
              window.location.href = `tel:${phone}`;
            } else {
              alert('Phone number not available');
            }
          }}
        >
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

      {/* Bottom chat input */}
      <MobHelpSupportChatBottom />
    </Box>
  );
};

export default MobMessageChat;
