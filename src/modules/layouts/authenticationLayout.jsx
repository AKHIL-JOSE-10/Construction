import React from 'react'
import { Grid, Typography, Box, TextField, InputAdornment, Checkbox, FormControlLabel, Stack, Button } from '@mui/material';
import { Headingcontent } from '../components/signin-up/headingcontent';
const AuthenticationLayout = ({mainheading,subheading,children }) => {
    return (
        <Grid container sx={{ bgcolor: '#B08B6F', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >

            <Grid bgcolor={'#B08B6F'} sx={{ minHeight: '80vh', width: { lg: '140vh', md: '120vh', sm: '80vh' }, display: 'flex', flexDirection: { lg: 'row', md: 'row', sm: 'row', xs: 'column' }, borderRadius: { xs: 10, sm: 0 } }}>
                
                <Headingcontent mainheading={mainheading} subheading={subheading} />
               
                <Grid>
                    <Box sx={{ height: { xs: '63vh', sm: '75vh' }, width: { xs: '40vh', sm: '45vh', md: '65vh' }, bgcolor: 'white', borderRadius: { xs: '16px', sm: '15px' }, ml: { lg: 10, md: 10, sm: 1 ,xs:0}, mt: { xs: 0, sm: 4 }, border: { xs: '2px solid #B08B6F', sm: 'none' } }}>
                        {children}
                    </Box>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default AuthenticationLayout