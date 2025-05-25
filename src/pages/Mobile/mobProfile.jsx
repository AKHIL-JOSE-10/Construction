import { Grid, Typography, Avatar, Box, List, ListItem, ListItemButton, ListItemText, } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MobHeading from '../../modules/components/Mobile/mobileHeading';
import MobileBottomTab from '../../modules/components/Mobile/mobileBottomTab';

const MobProfilePage = () => {
    return (
        <Grid container direction="column">
            <Grid>
                <MobHeading Heading="profile" />

                <Grid pl={2} pr={3.5} pt={3} mt={'50px'}>
                    <Box sx={{ bgcolor: '#B08B6F', height: '80px', width: '320px', display: 'flex', flexDirection: 'row', pl: 3, pt: 2, borderRadius: 4 }}>
                        <Box sx={{ flexDirection: 'column' }}>
                            <Typography variant='h5' sx={{ color: 'white', fontWeight: 'bold' }}> Hi Rehan</Typography>
                            <Typography variant='body2' sx={{ color: 'white', pt: 1 }}> rehan@gmail.com</Typography>
                        </Box>
                        <Avatar sx={{ ml: 15, height: 60, width: 60 }}
                            src="https://randomuser.me/api/portraits/women/79.jpg"
                            alt="Jane"
                        />
                    </Box>
                </Grid>
                <Grid sx={{pb:12}}>
                    <Box sx={{ ml: 1, mt: 3, mr: 2 }}>
                        <List >
                            <ListItem disablePadding sx={{ mb: 1 }}>
                                <ListItemButton sx={{ borderRadius: 2, '&:hover': { backgroundColor: '#F1E6DD' }, '&:hover .MuiListItemText-primary': { color: 'black' } }}>
                                    <ListItemText primary="Account info" slotProps={{ primary: { sx: { color: 'grey', fontSize: '1rem', fontWeight: 'bold' }, variant: "body2", } }} />
                                    <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
                                </ListItemButton>
                            </ListItem >

                            <ListItem disablePadding sx={{ mb: 1 }}>
                                <ListItemButton sx={{ borderRadius: 2, '&:hover': { backgroundColor: '#F1E6DD' }, '&:hover .MuiListItemText-primary': { color: 'black' } }}>
                                    <ListItemText primary="Premium Subscription" slotProps={{ primary: { sx: { color: 'grey', fontSize: '1rem', fontWeight: 'bold' }, variant: "body2", } }} />
                                    <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding sx={{ mb: 1 }}>
                                <ListItemButton sx={{ borderRadius: 2, '&:hover': { backgroundColor: '#F1E6DD' }, '&:hover .MuiListItemText-primary': { color: 'black' } }}>
                                    <ListItemText primary="Saved Workers" slotProps={{ primary: { sx: { color: 'grey', fontSize: '1rem', fontWeight: 'bold' }, variant: "body2", } }} />
                                    <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding sx={{ mb: 1 }}>
                                <ListItemButton sx={{ borderRadius: 2, '&:hover': { backgroundColor: '#F1E6DD' }, '&:hover .MuiListItemText-primary': { color: 'black' } }}>
                                    <ListItemText primary="Payment History " slotProps={{ primary: { sx: { color: 'grey', fontSize: '1rem', fontWeight: 'bold' }, variant: "body2", } }} />
                                    <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding sx={{ mb: 1 }}>
                                <ListItemButton sx={{ borderRadius: 2, '&:hover': { backgroundColor: '#F1E6DD' }, '&:hover .MuiListItemText-primary': { color: 'black' } }}>
                                    <ListItemText primary="Refer a Friend" slotProps={{ primary: { sx: { color: 'grey', fontSize: '1rem', fontWeight: 'bold' }, variant: "body2", } }} />
                                    <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding sx={{ mb: 1 }}>
                                <ListItemButton sx={{ borderRadius: 2, '&:hover': { backgroundColor: '#F1E6DD' }, '&:hover .MuiListItemText-primary': { color: 'black' } }}>
                                    <ListItemText primary="Terms and Condition" slotProps={{ primary: { sx: { color: 'grey', fontSize: '1rem', fontWeight: 'bold' }, variant: "body2", } }} />
                                    <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding sx={{ mb: 1 }}>
                                <ListItemButton sx={{ borderRadius: 2, '&:hover': { backgroundColor: '#F1E6DD' }, '&:hover .MuiListItemText-primary': { color: 'black' } }} >
                                    <ListItemText primary="Privacy Policy" slotProps={{ primary: { sx: { color: 'grey', fontSize: '1rem', fontWeight: 'bold' }, variant: "body2", } }} />
                                    <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding sx={{ mb: 1 }}>
                                <ListItemButton sx={{ borderRadius: 2, '&:hover': { backgroundColor: '#F1E6DD' }, '&:hover .MuiListItemText-primary': { color: 'black' } }}>
                                    <ListItemText primary="Settings" slotProps={{ primary: { sx: { color: 'grey', fontSize: '1rem', fontWeight: 'bold' }, variant: "body2", } }} />
                                    <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding sx={{ mb: 1 }}>
                                <ListItemButton sx={{ borderRadius: 2, '&:hover': { backgroundColor: '#F1E6DD' }, '&:hover .MuiListItemText-primary': { color: 'black' } }}>
                                    <ListItemText primary="Help & Support" slotProps={{ primary: { sx: { color: 'grey', fontSize: '1rem', fontWeight: 'bold' }, variant: "body2", } }} />
                                    <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding sx={{ mb: 1 }}>
                                <ListItemButton sx={{ borderRadius: 2, '&:hover': { backgroundColor: '#F1E6DD' }, '&:hover .MuiListItemText-primary': { color: 'black' } }}>
                                    <ListItemText primary="Logout" slotProps={{ primary: { sx: { color: 'grey', fontSize: '1rem', fontWeight: 'bold' }, variant: "body2", } }} />
                                    <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                    <Box sx={{ ml: 2.8, width: 330, display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ flex: 1, height: '0.9px', bgcolor: '#ccc' }} />
                    </Box>
                </Grid>

                <MobileBottomTab />
            </Grid>
        </Grid>
    )
}

export default MobProfilePage