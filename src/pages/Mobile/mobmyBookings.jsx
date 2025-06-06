import { Grid , Box} from "@mui/material"
import MobHeading from "../../modules/components/Mobile/mobileHeading"
import MobileBottomTab from "../../modules/components/Mobile/mobileBottomTab"
import MobMyBookingsTopTab from "../../modules/components/Mobile/mobMyBookings/mobMyBookingsTopTab"

const MobMyBookings = () => {
    return (
        <Grid container sx={{width:"100vw"}}>
            <MobHeading Heading="My Bookings" />
            <Box sx={{width:"100%"}}>
                <MobMyBookingsTopTab />
                <MobileBottomTab />
            </Box>
        </Grid>
    )
}

export default MobMyBookings