import { Grid, Box, Tab, Tabs, Select, InputLabel, FormControl, MenuItem, Typography,Button } from "@mui/material"
import MobHeading from "../../modules/components/Mobile/mobileHeading"
import MobileTab from "../../modules/components/Mobile/mobileTab"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person'
import VerifiedIcon from '@mui/icons-material/Verified';

const MobmyBookings = () => {
    return (
        <Grid container>
            <MobHeading Heading="My Bookings" />
            <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Tabs aria-label="basic tabs example">
                    <Tab label="In progress" sx={{color:'#777777', fontSize: '1rem', textTransform: 'none', mr: 3 }} />
                    <Tab label="Completed" sx={{color:'#777777', fontSize: '1rem', textTransform: 'none', mr: 3 }} />
                    <Tab label="Cancelled" sx={{ color:'#777777',fontSize: '1rem', textTransform: 'none' }} />
                </Tabs>
            </Box>
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
            <Grid sx={{ width: '100%', ml: 1.7, mr: 1.7, mt: 2, border: '2px solid #E5E5E5', borderRadius: 3 }}>
                <Box sx={{ p: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: 16, fontWeight: 'bold' }}>Indoor Cleaning</Typography>
                    <Typography sx={{ fontSize: 14 }}>Processing</Typography>
                </Box>
                <Box sx={{ ml: 2.8, width: 300, display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ flex: 1, height: '0.9px', bgcolor: '#ccc' }} />
                </Box>
                <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', p: 2 }}>
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CalendarMonthIcon sx={{ fontSize: 18, color: 'grey' }} />
                            <Typography sx={{ fontSize: 13 }}>Scheduled for wed, 8 March</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                            <LocationOnIcon sx={{ fontSize: 18, color: 'grey' }} />
                            <Typography sx={{ fontSize: 13 }}>Kollam Town</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                            <PersonIcon sx={{ fontSize: 18, color: 'grey' }} />
                            <Typography sx={{ fontSize: 13 }}>Jane Cooper</Typography>
                            <VerifiedIcon sx={{ fontSize: 16, color: '#641BB4' }} />
                        </Box>
                    </Box>

                    <Box sx={{ alignSelf: 'flex-start' }}>
                        <Typography sx={{ fontSize: 13 }}>9am - 11am</Typography>
                        <Typography sx={{ fontSize: 13 }}>Feb 23 - Mar 23</Typography>
                    </Box>
                </Grid>
                <Button variant="outlined"
                    sx={{
                        borderRadius: '50px', textTransform: 'none', px:2,ml:2,mb:2, borderColor: '#333333', color: '#333333',
                        '&:hover': { borderColor: 'black', backgroundColor: '#f0f0f0' }
                    }} >
                    <Typography sx={{fontSize: 14,fontWeight:'bold'}}>Mark as completed</Typography>
                </Button>
            </Grid>
            <MobileTab />
        </Grid>
    )
}

export default MobmyBookings