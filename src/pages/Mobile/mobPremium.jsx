import {Grid, Box, Typography} from '@mui/material';
import MobileBottomTab from '../../modules/components/Mobile/mobileBottomTab';
const MobPremium = () => {
    return (
        <Grid>
            <Box
                sx={{
                    height: '86vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: 'white',
                    textAlign: 'center',
                    px: 2,
                    flexDirection:'column'
                }}
            >
                <Typography variant='h4'>Premium Page</Typography>
                <Typography
                    variant="h6"
                    sx={{ color: '#555', fontWeight: 500,mt:2 }}
                >
                    🚧 Work in Progress 🚧
                </Typography>
            </Box>
            <MobileBottomTab />
        </Grid>

    );
};

export default MobPremium;
