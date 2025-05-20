import { Box, List, ListItem, ListItemAvatar, Avatar, Typography } from '@mui/material';

const MobNotificationList = ({ img, heading, subheading, datetime }) => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between',mt:2 }}>
      <List >
        <ListItem >
          <ListItemAvatar>
            <Avatar sx={{ width: 38, height: 38, bgcolor: 'transparent' }}>
              {img}
            </Avatar>
          </ListItemAvatar>
          <Box>
            <Box sx={{ width: '115%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

              <Typography variant="body1" sx={{ fontWeight: 'bold', }}>
                {heading}{' '}
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
