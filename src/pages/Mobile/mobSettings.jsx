import { Box, Grid, List, ListItem, ListItemButton, ListItemText, Switch, styled } from '@mui/material'
import MobHeading from '../../modules/components/Mobile/mobileHeading'
import MobileBottomTab from '../../modules/components/Mobile/mobileBottomTab'

// iOS-style Switch
const IOSSwitch = styled((props) => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(
  ({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 1,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  })
)

const MobSettings = () => {
  return (
    <Grid>
      <MobHeading Heading="Settings"/>
      <Box sx={{ml: 1, mt: 3, mr: 2 }}>
        <List>
          {[
            "Notifications",
            "Push Notifications",
            "Offers & Announcements",
            "Recieve Security Alerts",
            "Change Password",
          ].map((label, index) => (
            <ListItem disablePadding sx={{ mb: 3}} key={index}>
              <ListItemButton
                sx={{
                  borderRadius: 2,
                  '&:hover': { backgroundColor: '#F1E6DD' },
                  '&:hover .MuiListItemText-primary': { color: 'black' },
                }}
              >
                <ListItemText
                  primary={label}
                  secondary={label === "Notifications" ? "via email and whatsapp" : null}
                  slotProps={{
                    primary: {
                      sx: {
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                      },
                      variant: "body2",
                    },
                    secondary: {
                      sx: {
                        color: '#9e9e9e',
                        fontSize: '0.90rem',
                        mt: 0.5,
                      },
                    },
                  }}
                />
                {label !== "Change Password" && <IOSSwitch />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <MobileBottomTab/>
    </Grid>
  )
}

export default MobSettings
