import { Box, Typography, IconButton, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { useNavigate } from 'react-router-dom';

const MobHelpSupportChatTop = () => {
    const navigate = useNavigate();

    return (
        <Grid container direction="column">
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

                {/* Help Center Icon */}
                <SupportAgentIcon sx={{ fontSize: 46, color: 'black', mx: 2 }} />

                <Typography variant="subtitle1" fontWeight={500} fontSize={20}>
                    Help Center
                </Typography>
            </Box>
        </Grid>
    );
};

export default MobHelpSupportChatTop;
