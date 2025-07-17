import { Grid, Box, } from '@mui/material';
import MobNotificationList from './mobNotificationList';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


const MobNotificationSystem = () => {
    return (
        <Grid container >
            <Grid sx={{width: "100%" }}>
                <Box sx={{ mt: 3, mb: 10, px: 0, width: '100%' }}>
                    <MobNotificationList
                        img={<InfoOutlinedIcon sx={{ color: '#4A90E2' }} />}
                        heading="Archisans"
                        subheading="Renew Subscription."
                        datetime="9:00 am"
                    />
                    <MobNotificationList
                        img={<InfoOutlinedIcon sx={{ color: '#4A90E2' }} />}
                        heading="Password Updated Successfully."
                        subheading="Your password has been updated successfully."
                        datetime="8:00 am"
                    />
                </Box>
            </Grid>
        </Grid>
    )
}

export default MobNotificationSystem