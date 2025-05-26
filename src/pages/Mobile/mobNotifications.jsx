import { Grid, } from '@mui/material';
import MobHeading from "../../modules/components/Mobile/mobileHeading"
import MobileBottomTab from "../../modules/components/Mobile/mobileBottomTab"
import MobNotificationTopTab from "../../modules/components/Mobile/mobNotification/mobNotificationTopTab"
const MobNotifications = () => {
    return (
        <Grid>
            <MobHeading Heading='Notifications' />
            <MobNotificationTopTab />
            <MobileBottomTab />
        </Grid>

    )
}

export default MobNotifications