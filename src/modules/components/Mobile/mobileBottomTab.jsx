import { Box,  Tabs,  Tab } from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MessageIcon from '@mui/icons-material/Message';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const MobileBottomTab = () => {
    return (
        <Box sx={{position: 'fixed',bottom: 0,}}>
            <Tabs aria-label="icon label tabs example">
                <Tab icon={<ExploreIcon sx={{ width: 27, height: 27 }} />} label="Explore" sx={{ fontSize: '0.5rem', minWidth: 'auto', padding: 0.9, pl: 1.8, margin: 0.9 }} />
                <Tab icon={<WorkspacePremiumIcon sx={{ width: 27, height: 27 }} />} label="Premium" sx={{ fontSize: '0.5rem', minWidth: 'auto', padding: 0.9, margin: 0.9 }} />
                <Tab icon={<MessageIcon sx={{ width: 27, height: 27 }} />} label="Messages" sx={{ fontSize: '0.5rem', minWidth: 'auto', padding: 0.9, margin: 0.9 }} />
                <Tab icon={<BookOnlineIcon sx={{ width: 27, height: 27 }} />} label="Bookings" sx={{ fontSize: '0.5rem', minWidth: 'auto', padding: 0.9, margin: 0.9 }} />
                <Tab icon={<AccountCircleIcon sx={{ width: 27, height: 27 }} />} label="Profile" sx={{ fontSize: '0.5rem', minWidth: 'auto', padding: 0.9, margin: 0.9 }} />
            </Tabs>
        </Box>
    )
}

export default MobileBottomTab