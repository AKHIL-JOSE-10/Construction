import { Grid, Box, Tab, Tabs, Select, InputLabel, FormControl, MenuItem, Typography, Button } from "@mui/material"
import MobHeading from "../../modules/components/Mobile/mobileHeading"
import MobileTab from "../../modules/components/Mobile/mobileTab"
import Mobbookingcard from "../../modules/components/Mobile/mobbookingcard";
import MobTopTab from "../../modules/components/Mobile/mobTopTab";

const MobmyBookings = () => {
    return (
        <Grid container>
            <MobHeading Heading="My Bookings" />
            <MobTopTab />
            <MobileTab />
        </Grid>
    )
}

export default MobmyBookings