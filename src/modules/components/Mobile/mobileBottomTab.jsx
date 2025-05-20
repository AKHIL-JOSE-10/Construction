import { Box, Tabs, Tab, Avatar } from '@mui/material';
import ExploreIcon from '../../../assets/ExploreIcon.png'
import PremiumIcon from '../../../assets/PremiumIcon.png'
import MessageIcon from '../../../assets/MessageIcon.png'
import BookingIcon from '../../../assets/BookingIcon.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const MobileBottomTab = () => {
    return (
        <Box sx={{mt:13, position: 'fixed',overflow:'hidden', bottom: 0 ,  left: 0,right: 0,width: '100%', bgcolor: 'white',zIndex: 10,borderTop: '1px solid #ccc'}}>
            <Tabs aria-label="icon label tabs example" variant="fullWidth" >
                <Tab
                    icon={<Avatar src={ExploreIcon} sx={{ width: 29, height: 29 }} />}
                    label="Explore"
                    sx={{ fontSize: '0.6rem', minWidth: 'auto', padding: 0.9, pl: 1.3, margin: 0.8 }}
                />

                <Tab
                    icon={<Avatar src={PremiumIcon} sx={{ width: 29, height: 29 }} />}
                    label="Premium"
                    sx={{ fontSize: '0.6rem', minWidth: 'auto', padding: 0.9, margin: 0.9 }}
                />

                <Tab
                    icon={<Avatar src={MessageIcon} sx={{ width: 29, height: 29 }} />}
                    label="Messages"
                    sx={{ fontSize: '0.6rem', minWidth: 'auto', padding: 0.9, margin: 0.9 }}
                />

                <Tab
                    icon={<Avatar src={BookingIcon} sx={{ width: 29, height: 29 }} />}
                    label="Bookings"
                    sx={{ fontSize: '0.6rem', minWidth: 'auto', padding: 0.9, margin: 0.9 }}
                />

                <Tab icon={<AccountCircleIcon sx={{ width: 27, height: 27 }} />} label="Profile" sx={{ fontSize: '0.6rem', minWidth: 'auto', padding: 0.9, margin: 0.9 }} />

            </Tabs>
        </Box>
    )
}

export default MobileBottomTab