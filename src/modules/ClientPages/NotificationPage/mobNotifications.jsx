import { Grid, } from '@mui/material';
import MobHeading from "../../components/Mobile/mobileHeading"
import MobileBottomTab from "../../components/Mobile/mobileBottomTab"
import MobNotificationTopTab from "../../components/Mobile/mobNotification/mobNotificationTopTab"
const MobNotifications = () => {
    return (
        <Grid>
            <MobHeading Heading='Notifications' />
            <MobNotificationTopTab />
        </Grid>

    )
}

export default MobNotifications