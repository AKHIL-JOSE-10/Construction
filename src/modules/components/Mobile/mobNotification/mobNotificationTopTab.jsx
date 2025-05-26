import { useState } from "react";
import { Box, Tab, Tabs, Grid } from "@mui/material";
import MobNotificationAll from './mobNotificationAll';
import MobNotificationBookings from './mobNotificationBookings';
import MobNotificationSystem from './mobNotificationSystem';

const MobNotificationTopTab = () => {
    const [value, setValue] = useState(0); // Tab index

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const renderComponent = () => {
        switch (value) {
            case 0:
                return <MobNotificationAll />;
            case 1:
                return <MobNotificationBookings />;
            case 2:
                return <MobNotificationSystem />;
            default:
                return null;
        }
    };

    return (
        <Grid container>


            {/* Top Tabs */}
            <Box sx={{
                position: 'fixed',
                top: '46px',
                zIndex: 1000,
                width: '100%',
                backgroundColor: '#fff',
                borderBottom: 1,
                borderColor: 'divider',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="notification tabs"
                    slotProps={{
                        indicator: {
                            sx: {
                                backgroundColor: '#BFA088'
                            }
                        }
                    }}
                >
                    <Tab label="All" sx={{ color: '#777777', fontSize: '1rem', textTransform: 'none', mr: 3 }} />
                    <Tab label="Bookings" sx={{ color: '#777777', fontSize: '1rem', textTransform: 'none', mr: 3 }} />
                    <Tab label="System" sx={{ color: '#777777', fontSize: '1rem', textTransform: 'none' }} />
                </Tabs>
            </Box>

            {/* Render Component Below Tabs */}
            <Grid sx={{ mt: 10, width: '100%' }}>
                {renderComponent()}
            </Grid>
        </Grid>
    );
};

export default MobNotificationTopTab;
