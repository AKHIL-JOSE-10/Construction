import { Grid, Typography, Box, } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CategoryIcon from '@mui/icons-material/Category';
import googlemap from '../../../../assets/googlemap.jpeg'

const MobWorkerAbout = () => {
    return (
        <Grid>
            <Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: '600', px: 1, py: 2 }}>About me</Typography>
                    <Box mb={1} sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
                        <CalendarTodayIcon sx={{ fontSize: 20, color: 'gray', mr: 1 }} />
                        <Typography sx={{ fontSize: '15px' }}>Joined: 12 Dec 2025</Typography>
                    </Box>

                    <Box mb={1} sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
                        <CategoryIcon sx={{ fontSize: 20, color: 'gray', mr: 1 }} />
                        <Typography sx={{ fontSize: '15px' }}>Category : Electrician / Plumber</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '14px', p: 1, color: 'black', lineHeight: 1.8, textAlign: 'justify', maxWidth: '700px', mx: 'auto' }}>
                        I’ve been working as a professional <strong>Plumber/Electrician</strong> for over 4 years, handling residential and commercial projects with care and precision. I take pride in delivering reliable, safe, and efficient service. Whether it's a quick fix or a full installation, I’m here to help. Feel free to get in touch for any support or questions!
                    </Typography>
                </Grid>
                <Grid>
                    <Typography sx={{ fontSize: '18px', fontWeight: '600', px: 1, py: 2 }}>Service Skills</Typography>
                    <Box sx={{ display: 'flex', gap: 2,mr:2,ml:0.8 }}>
                        <Typography sx={{ flex: '0 0 42%', p: 1.5, borderRadius: 2, backgroundColor: '#f5f5f5', fontWeight: 500, fontSize: '13px', boxShadow: '0 1px 4px rgba(0,0,0,0.1)', textAlign: "center" }}>
                            Troubleshooting & Repair
                        </Typography>

                        <Typography
                            sx={{ flex: '0 0 42%', p: 1.5, borderRadius: 2, backgroundColor: '#f5f5f5', fontWeight: 500, fontSize: '13px', boxShadow: '0 1px 4px rgba(0,0,0,0.1)', textAlign: "center" }}>
                            Installation & Maintenance
                        </Typography>
                    </Box>
                </Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'column',mb:1 }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: '600', mt: 2, px: 1, py: 1 }}>Location</Typography>
                    <Typography sx={{ fontSize: '15px', fontWeight: '500', px: 1, }}>Aranattukara, Thrissur</Typography>
                    <Typography sx={{ fontSize: '13px', px: 1 }}>0.2 km away</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MobWorkerAbout