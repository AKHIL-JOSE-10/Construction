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
    <Grid container direction="column">
      <Grid sx={{ width: '100%' }}>
        <MobHeading Heading="profile" />

        <Grid pt={3} mt="40px">
          <Box
            sx={{
              bgcolor: '#B08B6F',
              height: '80px',
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              pl: 3,
              pt: 2,
              alignItems: 'center',
              justifyContent: 'space-between',
              pr: 2,
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{ color: 'white', fontWeight: 'bold' }}
              >
                Hi Rehan
              </Typography>
              <Typography variant="body2" sx={{ color: 'white', pt: 1 }}>
                rehan@gmail.com
              </Typography>
            </Box>
            <Avatar
              sx={{ height: 60, width: 60 }}
              src="https://randomuser.me/api/portraits/women/79.jpg"
              alt="Jane"
            />
          </Box>
        </Grid>

        <Grid sx={{ width: '100%' }}>
          <Box sx={{ width: '100%' }}>
            <List sx={{ width: '100%' }}>
              {menuItems.map((text, index) => (
                <ListItem key={index} disablePadding sx={{ mb: 1, width: '100%' }}>
                  <ListItemButton
                    sx={{
                      width: '100%',
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
                            color: 'grey',
                            fontSize: '1rem',
                            fontWeight: 'bold',
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
          </Box>

          <Box sx={{ ml: 2.8, width: 330, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flex: 1, height: '0.9px', bgcolor: '#ccc' }} />
          </Box>
        </Grid>

        <MobileBottomTab />
      </Grid>
    </Grid>
  );
};

export default MobProfilePage;
