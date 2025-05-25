import { Box, Tabs, Tab, Avatar } from '@mui/material';
import ExploreIcon from '../../../assets/ExploreIcon.png';
import PremiumIcon from '../../../assets/PremiumIcon.png';
import MessageIcon from '../../../assets/MessageIcon.png';
import BookingIcon from '../../../assets/BookingIcon.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const MobileBottomTab = () => {
    return (
        <Box sx={{ mt: 13, position: 'fixed', overflow: 'hidden', bottom: 0, left: 0, right: 0, width: '100%', bgcolor: 'white', zIndex: 10, borderTop: '1px solid #ccc' }}>
            <Tabs aria-label="icon label tabs example" variant="fullWidth" sx={{ minHeight: 45, height: 48, pt:1 }}>
                <Tab icon={<Avatar src={ExploreIcon} sx={{ width: 22, height: 22 }} />} label="Explore" sx={{ fontSize: '0.55rem', minWidth: 0, px: 0.8, mx: 0.4, py: 0.2, my: 0.2, textTransform: 'none', minHeight: 45, height: 45 }} />
                <Tab icon={<Avatar src={PremiumIcon} sx={{ width: 22, height: 22 }} />} label="Premium" sx={{ fontSize: '0.55rem', minWidth: 0, px: 0.8, mx: 0.4, py: 0.2, my: 0.2, textTransform: 'none', minHeight: 45, height: 45 }} />
                <Tab icon={<Avatar src={MessageIcon} sx={{ width: 22, height: 22 }} />} label="Messages" sx={{ fontSize: '0.55rem', minWidth: 0, px: 0.8, mx: 0.4, py: 0.2, my: 0.2, textTransform: 'none', minHeight: 45, height: 45 }} />
                <Tab icon={<Avatar src={BookingIcon} sx={{ width: 22, height: 22 }} />} label="Bookings" sx={{ fontSize: '0.55rem', minWidth: 0, px: 0.8, mx: 0.4, py: 0.2, my: 0.2, textTransform: 'none', minHeight: 45, height: 45 }} />
                <Tab icon={<AccountCircleIcon sx={{ width: 22, height: 22 }} />} label="Profile" sx={{ fontSize: '0.55rem', minWidth: 0, px: 0.8, mx: 0.4, py: 0.2, my: 0.2, textTransform: 'none', minHeight: 45, height: 45 }} />
            </Tabs>
        </Box>
    );
};

export default MobileBottomTab;
