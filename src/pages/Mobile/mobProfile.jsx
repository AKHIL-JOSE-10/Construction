import {
  Grid,
  Typography,
  Avatar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MobHeading from '../../modules/components/Mobile/mobileHeading';
import MobileBottomTab from '../../modules/components/Mobile/mobileBottomTab';
import { Link } from 'react-router-dom';
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
  const menuItems = [
    { text: 'Account info', icon: <AccountCircleIcon /> },
    { text: 'Premium Subscription', icon: <StarIcon /> },
    { text: 'Saved Workers', icon: <BookmarkIcon /> },
    { text: 'Payment History', icon: <PaymentIcon /> },
    { text: 'Refer a Friend', icon: <GroupAddIcon /> },
    { text: 'Terms and Condition', icon: <GavelIcon /> },
    { text: 'Privacy Policy', icon: <PrivacyTipIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
    { text: 'Help & Support', icon: <HelpIcon /> },
    { text: 'Logout', icon: <LogoutIcon /> },
  ];

  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        overflowX: 'hidden',
        boxSizing: 'border-box',
        bgcolor: '#fff',
        mb:10
      }}
    >
      <Grid container direction="column" sx={{ width: '100%' }}>
        <Grid item xs={12}>
          <MobHeading Heading="Profile" />

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              mb:2
            }}
          >
            <Avatar
              sx={{ height: 100, width: 100, mx:2, mb: 2 }}
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
                <Button size='small' variant="contained" color="primary">
                  Edit Profile
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <List sx={{ width: '100%', p: 0 }}>
            {menuItems.map((item, index) => (
              <ListItem
                key={index}
                disablePadding
                sx={{ width: '100%', px: 0 }}
              >
                <ListItemButton
                  sx={{
                    width: '100%',
                    px: 3,
                    py: 1,
                    '&:hover': { backgroundColor: '#F1E6DD' },
                    '&:hover .MuiListItemText-primary': { color: 'black' },
                  }}
                >
                  {item.icon && (
                    <Box sx={{ minWidth: 30,  color: '#757575', mr: 2 }}>
                      {item.icon}
                    </Box>
                  )}
                  <ListItemText
                    primary={item.text}
                    slotProps={{
                      primary: {
                        sx: {
                          color: 'black',
                          fontSize: '16px',
                          fontWeight: '500',
                        },
                        variant: 'body2',
                      },
                    }}
                  />
                  <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box sx={{ px: 2 }}>
            <Box sx={{ width: '100%', height: '0.9px', bgcolor: '#ccc' }} />
          </Box>
        </Grid>

        <MobileBottomTab />
      </Grid>
    </Box>
  );
};

export default MobProfilePage;
