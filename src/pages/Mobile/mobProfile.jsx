import React, { useState } from 'react';
import {
  Grid,
  Typography,
  Avatar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Dialog,
  DialogTitle,
  DialogActions,
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MobHeading from '../../modules/components/Mobile/mobileHeading';
import MobileBottomTab from '../../modules/components/Mobile/mobileBottomTab';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
  const [open, setOpen] = useState(false);

  const handleLogoutClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
              mb: 1
            }}
          >
            <Avatar
              sx={{ height: 80, width: 80, mr: 2, ml: 2.5, mb: 1 }}
              src="https://randomuser.me/api/portraits/women/79.jpg"
              alt="Jane"
            />
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ color: 'black', fontSize: 20, fontWeight: '550',mt:1.5 }}>
                Jane Cooper
              </Typography>
              <Typography sx={{ fontSize: '14px', color: 'black', pb: 1 }}>
                janecooper@gmail.com
              </Typography>
              <Typography sx={{ fontSize: '13px', color: 'black', pb: 1 }}>
                Mob:9736458763
              </Typography>              
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <List sx={{ width: '100%', p: 0 }}>

            {/* Account Info */}
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/editInfo"
                sx={{ px: 3, pb: 1 }}
              >
                <AccountCircleIcon sx={{ mr: 2, color: '#757575', fontSize: '23px' }} />
                <ListItemText
                  primary="Account Info"
                  slotProps={{
                    primary: {
                      sx: { color: 'black', fontSize: '15px', fontWeight: 500 },
                    },
                  }}
                />
                <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
              </ListItemButton>
            </ListItem>

            {/* Saved Workers */}
            <ListItem disablePadding>
              <ListItemButton sx={{ px: 3, py: 1 }}>
                <BookmarkIcon sx={{ mr: 2, color: '#757575', fontSize: '22px' }} />
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
                <PaymentIcon sx={{ mr: 2, color: '#757575', fontSize: '22px' }} />
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
                <StarIcon sx={{ mr: 2, color: '#757575', fontSize: '22px' }} />
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
              <ListItemButton sx={{ px: 3, py: 1, mb: 1.5 }}>
                <GroupAddIcon sx={{ mr: 2, color: '#757575', fontSize: '22px' }} />
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
              <ListItemButton sx={{ px: 3, py: 1, mt: 1.5 }}>
                <GavelIcon sx={{ mr: 2, color: '#757575', fontSize: '22px' }} />
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
              <ListItemButton sx={{ px: 3, py: 1, mb: 1.5 }}>
                <PrivacyTipIcon sx={{ mr: 2, color: '#757575', fontSize: '22px' }} />
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
              <ListItemButton
                component={Link}
                to="/mobile-settings"
                sx={{ px: 3, py: 1, mt: 1.5 }}
              >
                <SettingsIcon sx={{ mr: 2, color: '#757575', fontSize: '22px' }} />
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
                <HelpIcon sx={{ mr: 2, color: '#757575', fontSize: '22px' }} />
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
              <ListItemButton sx={{ px: 3, py: 1 }} onClick={handleLogoutClick}>
                <LogoutIcon sx={{ mr: 2, color: '#757575', fontSize: '22px' }} />
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
          </List>
        </Grid>
      </Grid>

      <MobileBottomTab activePage="profile" />

      {/* Logout Confirmation Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Are you sure you want to logout ?</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleClose} color="primary" autoFocus>OK</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MobProfilePage;
