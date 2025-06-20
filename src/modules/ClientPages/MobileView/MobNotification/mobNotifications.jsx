import { Grid, } from '@mui/material';
import MobHeading from "../MobTopBarHeading/mobTopBarHeading"
import MobNotificationTopTab from "./Components/mobNotificationTopTab"

const MobNotifications = () => {
    return (
        <Grid>
            <MobHeading Heading='My Notifications' />
            <MobNotificationTopTab />
        </Grid>

    )
}

export default MobNotifications