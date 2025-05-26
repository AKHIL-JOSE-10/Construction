import { Grid, Box, Tab, Tabs } from '@mui/material';
import MobileBottomTab from '../../modules/components/Mobile/mobileBottomTab';
import MobHeading from "../../modules/components/Mobile/mobileHeading";
import MobNotificationList from '../../modules/components/Mobile/mobNotificationList';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CancelIcon from '@mui/icons-material/Cancel';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const MobNotification = () => {
    return (
        <Grid container >

            <MobHeading Heading='Notification' />

            <Grid sx={{mt:5,width:"100%"}}>

                <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Tabs aria-label="booking tabs" TabIndicatorProps={{ style: { backgroundColor: '#BFA088' } }}>
                        <Tab label="All" sx={{ color: '#777777', fontSize: '1rem', textTransform: 'none', mr: 3 }} />
                        <Tab label="Bookings" sx={{ color: '#777777', fontSize: '1rem', textTransform: 'none', mr: 3 }} />
                        <Tab label="System" sx={{ color: '#777777', fontSize: '1rem', textTransform: 'none' }} />
                    </Tabs>
                </Box>

                <Box sx={{ mt: 3,px:0 }}>
                    <MobNotificationList
                        img={<CheckCircleIcon color="success" />}
                        heading="Order Confirmed"
                        subheading="your order #6754 has been confirmed"
                        datetime="12-03-2025 | 9:00 am"
                    />
                    <MobNotificationList
                        img={<LocalShippingIcon color="primary" />}
                        heading="Order Delivered"
                        subheading="your order #6754 has been delivered"
                        datetime="12-03-2025 | 9:00 am"
                    />
                    <MobNotificationList
                        img={<CancelIcon color="error" />}
                        heading="Order Rejected"
                        subheading="your order #6754 has been rejected"
                        datetime="12-03-2025 | 9:00 am"
                    />
                    <MobNotificationList
                        img={<AccessTimeIcon color="warning" />}
                        heading="Order Pick Up"
                        subheading="your order #6754 has been picked up"
                        datetime="12-03-2025 | 9:00 am"
                    />
                </Box>
            </Grid>
            <MobileBottomTab />
        </Grid>
    );
};

export default MobNotification;
