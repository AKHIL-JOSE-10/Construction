import { Box, List, ListItem, ListItemButton, ListItemText, Avatar } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const MobServiceCategoryList = ({img,heading,subheading}) => {
    return (
        <Box sx={{ ml: 1,mt:1, mr: 2, display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <List sx={{ width: '100%' }} disablePadding>
                <ListItem disablePadding>
                    <ListItemButton disablePadding sx={{ borderRadius: 2, '&:hover': { backgroundColor: '#F1E6DD' }, '&:hover .MuiListItemText-primary': { color: 'black' } }}>
                            <Avatar src={img} alt="icon" sx={{ width: 35, height: 35, mr: 2,borderRadius:0 }} />
                        <ListItemText primary={heading} secondary={subheading} slotProps={{ primary: { sx: { fontSize: '1rem', fontWeight: 'bold' }, variant: "body2", } }} />
                        <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
                    </ListItemButton>
                </ListItem >
            </List>
        </Box>
    )
}

export default MobServiceCategoryList                                      