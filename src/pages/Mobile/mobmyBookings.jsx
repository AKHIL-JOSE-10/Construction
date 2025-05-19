import { Grid } from "@mui/material"
import MobHeading from "../../modules/components/Mobile/mobileHeading"
import MobileBottomTab from "../../modules/components/Mobile/mobileBottomTab"
import MobTopTab from "../../modules/components/Mobile/mobTopTab";

const MobmyBookings = () => {
    return (
        <Grid container>
            <MobHeading Heading="My Bookings" />
            <MobTopTab />
            <MobileBottomTab />
        </Grid>
    )
}

export default MobmyBookings