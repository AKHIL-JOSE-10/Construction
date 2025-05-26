import React from 'react';
import {
  Grid,
  Typography,
  Avatar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  Divider,
} from '@mui/material';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MobHeading from '../../modules/components/Mobile/mobileHeading';
import MobileBottomTab from '../../modules/components/Mobile/mobileBottomTab';
import { Link } from 'react-router-dom';

import StarIcon from '@mui/icons-material/Star';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PaymentIcon from '@mui/icons-material/Payment';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import GavelIcon from '@mui/icons-material/Gavel';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';

const MobProfilePage = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        overflowX: 'hidden',
        boxSizing: 'border-box',
        bgcolor: '#fff',
        mb: 10,
      }}
    >
      <Grid container direction="column">
        <Grid item xs={12}>
          <MobHeading Heading="Profile" />

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <Avatar
              sx={{ height: 100, width: 100, mx: 2, mb: 2 }}
              src="https://randomuser.me/api/portraits/women/79.jpg"
              alt="Jane"
            />
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ color: 'black', fontSize: 20, fontWeight: '550' }}>
                Jane Cooper
              </Typography>
              <Typography sx={{ fontSize: '15px', color: 'black', pb: 1 }}>
                janecooper@gmail.com
              </Typography>
              <Link to="/editInfo" style={{ textDecoration: 'none' }}>
                <Button size="small" variant="contained" color="primary">
                  Edit Profile
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <List sx={{ width: '100%', p: 0 }}>
            {/* Saved Workers */}
            <ListItem disablePadding>
              <ListItemButton sx={{ px: 3, py: 1 }}>
                <BookmarkIcon sx={{ mr: 2, color: '#757575', fontSize:'22px' }} />
                <ListItemText
                  primary="Saved Workers"
                  slotProps={{
                    primary: {
                      sx: { color: 'black', fontSize: '15px', fontWeight: 500 },
                    },
                  }}
                />
                <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
              </ListItemButton>
            </ListItem>

            {/* Payment History */}
            <ListItem disablePadding>
              <ListItemButton sx={{ px: 3, py: 1 }}>
                <PaymentIcon sx={{ mr: 2, color: '#757575', fontSize:'22px' }} />
                <ListItemText
                  primary="Payment History"
                  slotProps={{
                    primary: {
                      sx: { color: 'black', fontSize: '15px', fontWeight: 500 },
                    },
                  }}
                />
                <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
              </ListItemButton>
            </ListItem>

            {/* Premium Subscription */}
            <ListItem disablePadding>
              <ListItemButton sx={{ px: 3, py: 1 }}>
                <StarIcon sx={{ mr: 2, color: '#757575', fontSize:'22px' }} />
                <ListItemText
                  primary="Premium Subscription"
                  slotProps={{
                    primary: {
                      sx: { color: 'black', fontSize: '15px', fontWeight: 500 },
                    },
                  }}
                />
                <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
              </ListItemButton>
            </ListItem>

            {/* Refer a Friend */}
            <ListItem disablePadding>
              <ListItemButton sx={{ px: 3, py: 1, mb:1.5 }}>
                <GroupAddIcon sx={{ mr: 2, color: '#757575', fontSize:'22px' }} />
                <ListItemText
                  primary="Refer a Friend"
                  slotProps={{
                    primary: {
                      sx: { color: 'black', fontSize: '15px', fontWeight: 500 },
                    },
                  }}
                />
                <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
              </ListItemButton>
            </ListItem>

            {/* Divider after Refer a Friend */}
            <Divider sx={{ mx: 3, borderColor: '#e0e0e0' }} />

            {/* Terms and Condition */}
            <ListItem disablePadding>
              <ListItemButton sx={{ px: 3, py: 1 ,mt:1.5}}>
                <GavelIcon sx={{ mr: 2, color: '#757575', fontSize:'22px' }} />
                <ListItemText
                  primary="Terms and Condition"
                  slotProps={{
                    primary: {
                      sx: { color: 'black', fontSize: '15px', fontWeight: 500 },
                    },
                  }}
                />
                <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
              </ListItemButton>
            </ListItem>

            {/* Privacy Policy */}
            <ListItem disablePadding>
              <ListItemButton sx={{ px: 3, py: 1, mb:1.5 }}>
                <PrivacyTipIcon sx={{ mr: 2, color: '#757575', fontSize:'22px' }} />
                <ListItemText
                  primary="Privacy Policy"
                  slotProps={{
                    primary: {
                      sx: { color: 'black', fontSize: '15px', fontWeight: 500 },
                    },
                  }}
                />
                <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
              </ListItemButton>
            </ListItem>

            {/* Divider after Privacy Policy */}
            <Divider sx={{ mx: 3, borderColor: '#e0e0e0' }} />

            {/* Settings */}
            <ListItem disablePadding>
              <ListItemButton sx={{ px: 3, py: 1, mt:1.5 }}>
                <SettingsIcon sx={{ mr: 2, color: '#757575', fontSize:'22px' }} />
                <ListItemText
                  primary="Settings"
                  slotProps={{
                    primary: {
                      sx: { color: 'black', fontSize: '15px', fontWeight: 500 },
                    },
                  }}
                />
                <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
              </ListItemButton>
            </ListItem>

            {/* Help & Support */}
            <ListItem disablePadding>
              <ListItemButton sx={{ px: 3, py: 1 }}>
                <HelpIcon sx={{ mr: 2, color: '#757575', fontSize:'22px' }} />
                <ListItemText
                  primary="Help & Support"
                  slotProps={{
                    primary: {
                      sx: { color: 'black', fontSize: '15px', fontWeight: 500 },
                    },
                  }}
                />
                <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
              </ListItemButton>
            </ListItem>

            {/* Logout */}
            <ListItem disablePadding>
              <ListItemButton sx={{ px: 3, py: 1 }}>
                <LogoutIcon sx={{ mr: 2, color: '#757575', fontSize:'22px' }} />
                <ListItemText
                  primary="Logout"
                  slotProps={{
                    primary: {
                      sx: { color: 'black', fontSize: '15px', fontWeight: 500 },
                    },
                  }}
                />
                <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
              </ListItemButton>
            </ListItem>

            {/* Final Divider after Logout */}
            <Divider sx={{ mx: 3, borderColor: '#e0e0e0',mb:2 }} />
          </List>
        </Grid>
      </Grid>

      <MobileBottomTab activePage="profile" />
    </Box>
  );
};

export default MobProfilePage;
