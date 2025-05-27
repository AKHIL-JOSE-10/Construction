import { Grid } from "@mui/material"
import MobMyBookingcard from "./mobMyBookingscard"


const MobMyBookingsCancelled = () => {
    return (
        <Grid>
            <MobMyBookingcard Heading="cancelled" />
            <MobMyBookingcard Heading="cancelled" />
            <MobMyBookingcard Heading="cancelled" />
            <MobMyBookingcard Heading="cancelled" />
        </Grid>

    )
}

export default MobMyBookingsCancelled