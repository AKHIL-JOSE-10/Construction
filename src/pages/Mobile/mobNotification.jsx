import { Grid, Box, Tab, Tabs } from '@mui/material';
import MobileBottomTab from '../../modules/components/Mobile/mobileBottomTab';
import MobHeading from "../../modules/components/Mobile/mobileHeading";
import MobNotificationList from '../../modules/components/Mobile/mobNotificationList';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CancelIcon from '@mui/icons-material/Cancel';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const MobNotification = () => {
    return (
        <Grid container >

            <MobHeading Heading='Notifications' />

            <Grid sx={{mt:5,width:"100%"}}>

                <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Tabs aria-label="booking tabs" TabIndicatorProps={{ style: { backgroundColor: '#BFA088' } }}>
                        <Tab label="All" sx={{ color: '#777777', fontSize: '1rem', textTransform: 'none', mr: 3 }} />
                        <Tab label="Bookings" sx={{ color: '#777777', fontSize: '1rem', textTransform: 'none', mr: 3 }} />
                        <Tab label="System" sx={{ color: '#777777', fontSize: '1rem', textTransform: 'none' }} />
                    </Tabs>
                </Box>

                <Box sx={{ mt:3 ,mb:10 ,px:0 ,width:'100%' }}>
                    <MobNotificationList
                        img={<NotificationsNoneIcon sx={{ color: '#4A90E2' }} />}
                        heading="Booking Confirmed"
                        subheading="Jane has confirmed your bokking request"
                        datetime="12-03-2025 | 9:00 am"
                    />
                    <MobNotificationList
                        img={<NotificationsNoneIcon sx={{ color: '#4A90E2' }} />}
                        heading="Booking Rejected"
                        subheading="Jane has rejected your bokking request"
                        datetime="12-03-2025 | 9:00 am"
                    />
                    <MobNotificationList
                        img={<NotificationsNoneIcon sx={{ color: '#4A90E2' }} />}
                        heading="Work Completed"
                        subheading="“The job by Jane has been completed. Please review."
                        datetime="12-03-2025 | 9:00 am"
                    />
                    <MobNotificationList
                        img={<NotificationsNoneIcon sx={{ color: '#4A90E2' }} />}
                        heading="* Cancelled by User"
                        subheading="You cancelled the booking with Elanor"
                        datetime="12-03-2025 | 9:00 am"
                    />
                     <MobNotificationList
                       img={<NotificationsNoneIcon sx={{ color: '#4A90E2' }}} />}
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
                        subheading="You have completed the payment for booking #6754"
                        datetime="12-03-2025 | 9:00 am"
                    />
                </Box>
            </Grid>
            <MobileBottomTab />
        </Grid>
    );
};

export default MobNotification;
