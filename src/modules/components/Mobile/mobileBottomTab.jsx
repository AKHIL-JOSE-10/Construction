import { Box, Tabs, Tab } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MessageIcon from '@mui/icons-material/Message';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const MobileBottomTab = () => {
    return (
        <Box sx={{ mt: 10, position: 'fixed', overflow: 'hidden', bottom: 0, left: 0, right: 0, width: '100%', bgcolor: 'white', zIndex: 10, borderTop: '1px solid #ccc' }}>
            <Tabs aria-label="icon label tabs example" variant="fullWidth" sx={{ minHeight: 45, height: 48, pt: 1 }}>
                <Tab icon={<HomeOutlinedIcon sx={{ width: 25, height: 25 }} />} label="Explore" sx={{ fontSize: '0.55rem', minWidth: 0, px: 0.8, mx: 0.4, py: 0.2, my: 0.2, textTransform: 'none', minHeight: 45, height: 45 }} />
                <Tab icon={<WorkspacePremiumIcon sx={{ width: 24, height: 24 }} />} label="Premium" sx={{ fontSize: '0.55rem', minWidth: 0, px: 0.8, mx: 0.4, py: 0.2, my: 0.2, textTransform: 'none', minHeight: 45, height: 45 }} />
                <Tab icon={<MessageIcon sx={{ width: 23, height: 23 }} />} label="Messages" sx={{ fontSize: '0.55rem', minWidth: 0, px: 0.8, mx: 0.4, py: 0.2, my: 0.2, textTransform: 'none', minHeight: 45, height: 45 }} />
                <Tab icon={<EventAvailableIcon sx={{ width: 23, height: 23 }} />} label="Bookings" sx={{ fontSize: '0.55rem', minWidth: 0, px: 0.8, mx: 0.4, py: 0.2, my: 0.2, textTransform: 'none', minHeight: 45, height: 45 }} />
                <Tab icon={<AccountCircleIcon sx={{ width: 23, height: 23 }} />} label="Profile" sx={{ fontSize: '0.55rem', minWidth: 0, px: 0.8, mx: 0.4, py: 0.2, my: 0.2, textTransform: 'none', minHeight: 45, height: 45 }} />
            </Tabs>
        </Box>
    );
};

export default MobileBottomTab;
