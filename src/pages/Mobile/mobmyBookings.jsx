import { Grid , Box} from "@mui/material"
import MobHeading from "../../modules/components/Mobile/mobileHeading"
import MobileBottomTab from "../../modules/components/Mobile/mobileBottomTab"
import MobTopTab from "../../modules/components/Mobile/mobTopTab";

const MobmyBookings = () => {
    return (
        <Grid container sx={{width:"100vw"}}>
            <MobHeading Heading="My Bookings" />
            <Box sx={{mt:"85px",width:"100%"}}>
                <MobTopTab />
                <MobileBottomTab />
            </Box>
        </Grid>
    )
}

export default MobmyBookings