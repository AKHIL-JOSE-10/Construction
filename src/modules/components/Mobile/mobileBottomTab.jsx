import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Tabs, Tab } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MessageIcon from '@mui/icons-material/Message';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const MobileBottomTab = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const getTabValue = (pathname) => {
        if (pathname.startsWith('/home')) return 0;
        if (pathname.startsWith('/mobile-messages')) return 1;
        if (pathname.startsWith('/mobile-bookings')) return 2;
        if (pathname.startsWith('/mobile-profile')) return 3;
        return 0;
    };

    const [value, setValue] = useState(getTabValue(location.pathname));

    useEffect(() => {
        setValue(getTabValue(location.pathname));
    }, [location.pathname]);

    const handleChange = (event, newValue) => {
        setValue(newValue);

        if (newValue === 0) navigate('/home');
        else if (newValue === 1) navigate('/mobile-messages');
        else if (newValue === 2) navigate('/mobile-bookings');
        else if (newValue === 3) navigate('/mobile-profile');
    };

    return (
        <>
            <Box sx={{ height: 60 }} />
            <Box sx={{ mt: 13, position: 'fixed', overflow: 'hidden', bottom: 0, left: 0, right: 0, width: '100%', bgcolor: 'white', zIndex: 10, borderTop: '1px solid #ccc' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="icon label tabs example"
                    variant="fullWidth"
                    sx={{ minHeight: 45, height: 48, pt: 1 }}
                >
                    <Tab icon={<HomeOutlinedIcon sx={{ width: 25, height: 25 }} />} label="Explore" sx={{ fontSize: '0.6rem', minWidth: 0, px: 0.8, mx: 0.4, py: 0.2, my: 0.2, textTransform: 'none', minHeight: 45, height: 45 }} />
                    <Tab icon={<MessageIcon sx={{ width: 23, height: 23 }} />} label="Messages" sx={{ fontSize: '0.55rem', minWidth: 0, px: 0.8, mx: 0.4, py: 0.2, my: 0.2, textTransform: 'none', minHeight: 45, height: 45 }} />
                    <Tab icon={<EventAvailableIcon sx={{ width: 23, height: 23 }} />} label="Bookings" sx={{ fontSize: '0.6rem', minWidth: 0, px: 0.8, mx: 0.4, py: 0.2, my: 0.2, textTransform: 'none', minHeight: 45, height: 45 }} />
                    <Tab icon={<AccountCircleIcon sx={{ width: 23, height: 23 }} />} label="Profile" sx={{ fontSize: '0.6rem', minWidth: 0, px: 0.8, mx: 0.4, py: 0.2, my: 0.2, textTransform: 'none', minHeight: 45, height: 45 }} />
                </Tabs>
            </Box>
        </>

    );
};

export default MobileBottomTab;
