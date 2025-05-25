import { useState } from "react";
import { Box, Tab, Tabs, FormControl, InputLabel, Select, MenuItem, Grid } from "@mui/material";
import Mobbookingcard from "./mobbookingcard";

const MobTopTab = () => {
    const [value, setValue] = useState(0); // Tab index

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getStatus = () => {
        switch (value) {
            case 0:
                return "in progress";
            case 1:
                return "completed";
            case 2:
                return "cancelled";
            default:
                return "";
        }
    };

    return (
        <Box sx={{width: '100%'}}>
            {/* Tabs */}
            <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Tabs value={value} onChange={handleChange} aria-label="booking tabs"  TabIndicatorProps={{ style: { backgroundColor: '#BFA088' } }}>
                    <Tab label="In progress" sx={{ color: '#777777', fontSize: '1rem', textTransform: 'none', mr: 1 }} />
                    <Tab label="Completed" sx={{ color: '#777777', fontSize: '1rem', textTransform: 'none', mr: 1 }} />
                    <Tab label="Cancelled" sx={{ color: '#777777', fontSize: '1rem', textTransform: 'none' }} />
                </Tabs>
            </Box>

            {/* Filter Dropdown */}
            <Grid container sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', mt: 2, mr: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <FormControl sx={{ minWidth: 80 }} size="small">
                        <InputLabel id="filter-label" sx={{ fontSize: 14 }}>Filter</InputLabel>
                        <Select
                            labelId="filter-label"
                            id="filter-select"
                            label="Filter"
                            sx={{ borderRadius: 5, height: 36 }}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Grid>

            {/* Booking Card Component */}
            <Box sx={{ mt: 3 }}>
                <Mobbookingcard status={getStatus()} />
            </Box>
        </Box>
    );
};

export default MobTopTab;
