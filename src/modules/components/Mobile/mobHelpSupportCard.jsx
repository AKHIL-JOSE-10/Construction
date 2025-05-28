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
                        boxShadow: '0px 2px 8px rgba(90, 69, 1, 0.3)', // 👈 small shadow added
                        border:'1px solid rgba(184, 147, 87, 0.3)'
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