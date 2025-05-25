import { Grid, Box, Typography, Button } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import VerifiedIcon from '@mui/icons-material/Verified';

const Mobbookingcard = ({ status }) => {
    return (
        <Grid sx={{ mx: 1, mt: 2, border: '2px solid #E5E5E5', borderRadius: 3 }}>
            <Box sx={{ p: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography sx={{ fontSize: 16, fontWeight: 'bold' }}>Indoor Cleaning</Typography>
                <Typography sx={{ fontSize: 14 }}>{status}</Typography>
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

                <Box sx={{ alignSelf: 'flex-start', textAlign: 'right', ml: 'auto' }}>
                    <Typography sx={{ fontSize: 13 }}>9am - 11am</Typography>
                    <Typography sx={{ fontSize: 13 }}>Feb 23 - Mar 23</Typography>
                </Box>
            </Grid>

            {/* Conditional Buttons */}
            {status !== "cancelled" && (
                <Box sx={{ display: 'flex', gap: 2, ml: 2, mb: 2 }}>
                    {status === "completed" ? (
                        <>
                            <Button variant="outlined"
                                sx={{
                                    borderRadius: '50px', textTransform: 'none', px: 2, borderColor: '#333333', color: '#333333',
                                    '&:hover': { borderColor: 'black', backgroundColor: '#f0f0f0' }
                                }}>
                                <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>Rate Service</Typography>
                            </Button>
                            <Button variant="outlined"
                                sx={{
                                    borderRadius: '50px', textTransform: 'none', px: 2, borderColor: '#333333', color: '#333333',
                                    '&:hover': { borderColor: 'black', backgroundColor: '#f0f0f0' }
                                }}>
                                <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>Click to Pay</Typography>
                            </Button>
                        </>
                    ) : (
                        <Button variant="outlined"
                            sx={{
                                borderRadius: '50px', textTransform: 'none', px: 2, borderColor: '#333333', color: '#333333',
                                '&:hover': { borderColor: 'black', backgroundColor: '#f0f0f0' }
                            }}>
                            <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>Mark as completed</Typography>
                        </Button>
                    )}
                </Box>
            )}
        </Grid>
    );
};

export default Mobbookingcard;
