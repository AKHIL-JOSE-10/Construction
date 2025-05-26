import { Grid, Box, } from '@mui/material';
import MobNotificationList from './mobNotificationList';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const MobNotificationBookings = () => {
  return (
            <Grid container >

            <Grid sx={{ width: "100%" }}>

                <Box sx={{ mt: 3, mb: 10, px: 0, width: '100%' }}>
                    <MobNotificationList
                        img={<NotificationsNoneIcon sx={{ color: '#4A90E2' }} />}
                        heading="Booking Confirmed"
                        subheading="Jane has confirmed your booking request."
                        datetime="12-03-2025 | 9:00 am"
                    />
                    <MobNotificationList
                        img={<NotificationsNoneIcon sx={{ color: '#4A90E2' }} />}
                        heading="Booking Rejected"
                        subheading="Jane has rejected your booking request."
                        datetime="12-03-2025 | 9:00 am"
                    />
                    
                    <MobNotificationList
                        img={<NotificationsNoneIcon sx={{ color: '#4A90E2' }} />}
                        heading="Work Completed"
                        subheading="The job by Jane has been completed. Please review."
                        datetime="12-03-2025 | 9:00 am"
                    />
                    <MobNotificationList
                        img={<NotificationsNoneIcon sx={{ color: '#4A90E2' }} />}
                        heading="Cancelled by User"
                        subheading="You cancelled the booking with Elanor."
                        datetime="12-03-2025 | 9:00 am"
                    />
                    <MobNotificationList
                        img={<NotificationsNoneIcon sx={{ color: '#4A90E2' }} />}
                        heading="Cancelled by Worker"
                        subheading="Jane cancelled your booking request."
                        datetime="12-03-2025 | 9:00 am"
                    />
                    <MobNotificationList
                        img={<NotificationsNoneIcon sx={{ color: '#4A90E2' }} />}
                        heading="Payment Requested"
                        subheading="Jane has requested payment for the completed work."
                        datetime="12-03-2025 | 9:00 am"
                    />
                    <MobNotificationList
                        img={<NotificationsNoneIcon sx={{ color: '#4A90E2' }} />}
                        heading="Payment Completed"
                        subheading="You have completed the payment for booking #6754."
                        datetime="12-03-2025 | 9:00 am"
                    />
                </Box>
            </Grid>
        </Grid>
  )
}

export default MobNotificationBookings