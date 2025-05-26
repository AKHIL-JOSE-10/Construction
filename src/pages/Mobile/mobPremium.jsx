import {Grid, Box, Typography} from '@mui/material';
import MobileBottomTab from '../../modules/components/Mobile/mobileBottomTab';
const MobPremium = () => {
    return (
        <Grid>
            <Box
                sx={{
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: '#f4f4f4',
                    textAlign: 'center',
                    px: 2
                }}
            >
                <Typography
                    variant="h6"
                    sx={{ color: '#555', fontWeight: 500 }}
                >
                    🚧 Work in Progress 🚧
                </Typography>
            </Box>
            <MobileBottomTab />
        </Grid>

    );
};

export default MobPremium;
