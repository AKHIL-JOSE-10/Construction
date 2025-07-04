import { Grid, Box, List, ListItem, ListItemButton, ListItemText, Avatar } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const MobServiceCategoryList = ({ img, heading, subheading }) => {
    return (
        <Grid >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <List disablePadding sx={{ width: '100%' }}>
                    <ListItem disablePadding sx={{ width: '100%', border: '0.5px solid #e0e0e0' }}>
                        <ListItemButton
                            sx={{
                                width: '100%',
                                '&:hover': {
                                    backgroundColor: '#F1E6DD',
                                },
                                '&:hover .MuiListItemText-primary': {
                                    color: 'black',
                                },
                            }}
                        >
                            <Avatar
                                alt="icon"
                                src={img}
                                sx={{ width: 35, height: 35, mr: 2, borderRadius: 0 }}
                            />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', }}>
                                <ListItemText primary={heading} secondary={subheading}
                                    slotProps={{
                                        primary: {
                                            sx: { fontSize: '15px', fontWeight: '600' },
                                        },
                                        secondary: {
                                            sx: { fontSize: '13px', width: "98%" }
                                        }
                                    }}
                                    sx={{ flexGrow: 1 }}
                                />
                                <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
                            </Box>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Grid>
    );
};

export default MobServiceCategoryList;
