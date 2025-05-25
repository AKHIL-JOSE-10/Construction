import {
  Grid,
  Typography,
  Avatar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MobHeading from '../../modules/components/Mobile/mobileHeading';
import MobileBottomTab from '../../modules/components/Mobile/mobileBottomTab';

const MobProfilePage = () => {
  const menuItems = [
    'Account info',
    'Premium Subscription',
    'Saved Workers',
    'Payment History',
    'Refer a Friend',
    'Terms and Condition',
    'Privacy Policy',
    'Settings',
    'Help & Support',
    'Logout',
  ];

  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        overflowX: 'hidden',
        boxSizing: 'border-box',
        bgcolor: '#fff',
      }}
    >
      <Grid container direction="column" sx={{ width: '100%' }}>
        <Grid item xs={12}>
          <MobHeading Heading="Profile" />

          <Box
            sx={{
              bgcolor: '	#E8D6C5',
              height: '95px',
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              pt: 2,
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: '40px',
            }}
          >
            <Box sx={{ml:2}}>
              <Typography variant="h5" sx={{ color: 'black', fontWeight: 'bold' }}>
                Hi Rehan
              </Typography>
              <Typography sx={{fontSize:'15px', color: 'black', pt: 1 }}>
                rehan@gmail.com
              </Typography>
            </Box>
            <Avatar
              sx={{ height: 60, width: 60, mr:2 }}
              src="https://randomuser.me/api/portraits/women/79.jpg"
              alt="Jane"
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <List sx={{ width: '100%', p: 0 }}>
            {menuItems.map((text, index) => (
              <ListItem
                key={index}
                disablePadding
                sx={{
                  width: '100%',
                  px: 0,
                }}
              >
                <ListItemButton
                  sx={{
                    width: '100%',
                    px: 3,
                    py: 2,
                    '&:hover': {
                      backgroundColor: '#F1E6DD',
                    },
                    '&:hover .MuiListItemText-primary': {
                      color: 'black',
                    },
                  }}
                >
                  <ListItemText
                    primary={text}
                    slotProps={{
                      primary: {
                        sx: {
                          color: 'black',
                          fontSize: '1rem',
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
