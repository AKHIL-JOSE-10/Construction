import { Box, Typography, IconButton, Avatar, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const MobHelpSupportChatTop = () => {

    const navigate = useNavigate();

    return (

        <Grid container direction="column" >

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    py: 1.1,
                    pl: 0,
                    borderBottom: '1px solid #ddd',
                    boxShadow: 0.7,
                    position: 'sticky',
                    top: 0,
                    zIndex: 10,
                    backgroundColor: '#F1E6DD',
                }}
            >
                <IconButton onClick={() => navigate(-1)}>
                    <ArrowBackIcon />
                </IconButton>
                <Avatar
                    alt="Support"
                    src="https://randomuser.me/api/portraits/women/79.jpg"
                    sx={{ width: 45, height: 45, mr: 2, ml: 1 }}
                />
                <Typography variant="subtitle1" fontWeight={500} fontSize={20}>
                    Help Center
                </Typography>
            </Box>
        </Grid>
    )
}

export default MobHelpSupportChatTop