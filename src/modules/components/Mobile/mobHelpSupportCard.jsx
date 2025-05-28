import { Box, Typography, Grid, } from '@mui/material';

const MobHelpSupportCard = ({ title, icon }) => {
    return (

        <Grid >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    pr: 3, // side padding
                    mt: 1,
                    ml: 6,
                    mb: 3
                }}
            >
                <Box
            sx={{
                bgcolor: '#F1E6DD',
                width: '100px',
                height: '105px',
                borderRadius: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', // 👈 small shadow added
            }}
        >
                    <Box sx={{ mb: 1 }}>
                        {icon}
                    </Box>
                    <Typography sx={{ fontSize: '13px' }}>{title}</Typography>
                </Box>
            </Box>
        </Grid>
    )
}

export default MobHelpSupportCard