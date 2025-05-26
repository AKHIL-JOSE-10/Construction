import { Box, List, ListItem, ListItemAvatar, Avatar, Typography } from '@mui/material';

const MobNotificationList = ({ img, heading, subheading, datetime }) => {
  return (
    <Box >
      <List disablePadding >
        <ListItem  sx={{ width: '100%',  borderBottom:'0.5px solid #e0e0e0', pb:2 }}>
          <ListItemAvatar>
            <Avatar sx={{ width: 28, height: 38, bgcolor: 'transparent' }}>
              {img}
            </Avatar>
          </ListItemAvatar>
          <Box sx={{width:'100%', ml:-2 }}>
            <Box sx={{  display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

              <Typography  sx={{fontSize:'14px', fontWeight: 'bold',}}>
                {heading}
              </Typography>

              <Typography
                component="span"
                variant="caption"
                sx={{ color: 'grey.600', fontWeight: 'normal' ,pl:0}}
              >
                {datetime}
              </Typography>
            </Box>

            <Typography variant="body2" sx={{ color: 'grey.700' }}>
              {subheading}
            </Typography>
          </Box>


        </ListItem>
      </List>
    </Box>
  );
};

export default MobNotificationList;
