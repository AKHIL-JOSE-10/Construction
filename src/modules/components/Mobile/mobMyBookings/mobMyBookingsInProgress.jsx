import MobMyBookingcard from "./mobMyBookingscard"
import {Grid, Button, Typography } from "@mui/material"

const MobMyBookingsInProgress = () => {

    return (

        <Grid>
            <MobMyBookingcard Heading="Processing">

                <Button variant="outlined"
                    sx={{
                        borderRadius: '50px', textTransform: 'none', px: 2, borderColor: '#333333', color: '#333333',
                        '&:hover': { borderColor: 'black', backgroundColor: '#f0f0f0' }
                    }}>
                    <Typography sx={{ fontSize: 12, fontWeight: 'bold' }}>Mark as completed</Typography>
                </Button>

            </MobMyBookingcard>
            <MobMyBookingcard Heading="Processing">

                <Button variant="outlined"
                    sx={{
                        borderRadius: '50px', textTransform: 'none', px: 2, borderColor: '#333333', color: '#333333',
                        '&:hover': { borderColor: 'black', backgroundColor: '#f0f0f0' }
                    }}>
                    <Typography sx={{ fontSize: 12, fontWeight: 'bold' }}>Mark as completed</Typography>
                </Button>

            </MobMyBookingcard>
            <MobMyBookingcard Heading="Processing">

                <Button variant="outlined"
                    sx={{
                        borderRadius: '50px', textTransform: 'none', px: 2, borderColor: '#333333', color: '#333333',
                        '&:hover': { borderColor: 'black', backgroundColor: '#f0f0f0' }
                    }}>
                    <Typography sx={{ fontSize: 12, fontWeight: 'bold' }}>Mark as completed</Typography>
                </Button>

            </MobMyBookingcard>
        </Grid>

    )
}

export default MobMyBookingsInProgress

