import { Typography, Box, TextField, InputAdornment, Checkbox, FormControlLabel, Stack, Button } from '@mui/material';
import AuthenticationLayout from '../modules/layouts/authenticationLayout'

const Signuppage = () => {
    
  return (
    <AuthenticationLayout mainheading='Join & Build Smart' subheading='Sign up to connect with trusted pros for your construction needs'>
        <Typography variant='h6' sx={{ fontWeight: 'bold', pt: 5, textAlign: { xs: 'left', sm: 'center' }, ml: { xs: 8, sm: 0 } }}> Create an account</Typography>
            <Box pl={5} pb={5} pr={5} pt={3}>
                <Typography sx={{ fontSize: '11px', color: '#666666', fontWeight: 'bold' }}>Full Name</Typography>
                <TextField
                    size='small'
                    required
                    sx={{ width: { lg: '52vh', md: '52vh', sm: '35vh', xs: '31vh' }, mb: 2 }}
                    slotProps={{
                        input: {
                            sx: { height: { xs: '30px', sm: '35px' } }
                        }
                    }}
                />
                <Typography sx={{ fontSize: '11px', color: '#666666', fontWeight: 'bold' }}>Email</Typography>
                <TextField
                    size='small'
                    required
                    sx={{ width: { lg: '52vh', md: '52vh', sm: '35vh', xs: '31vh' }, mb: 2 }}
                    slotProps={{
                        input: {
                            sx: { height: { xs: '30px', sm: '35px' } }
                        }
                    }}
                />
                <Typography sx={{ fontSize: '10px', color: '#666666', fontWeight: 'bold' }}>Phone number</Typography>
                <TextField
                    size="small"
                    required
                    sx={{ width: { lg: '52vh', md: '52vh', sm: '30vh', xs: '31vh' } }}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    +91
                                </InputAdornment>
                            ),
                            sx: { height: { xs: '30px', sm: '35px' }, mb: 2 }
                        }
                    }}
                    inputProps={{
                        inputMode: 'numeric',
                        type: 'tel',
                    }}
                />
                <Typography sx={{ fontSize: '11px', color: '#666666', fontWeight: 'bold' }}>Password</Typography>
                <TextField
                    size='small'
                    type='password'
                    required
                    sx={{ width: { lg: '52vh', md: '52vh', sm: '35vh', xs: '31vh' }, mb: 0.5 }}
                    slotProps={{
                        input: {
                            sx: { height: { xs: '30px', sm: '35px' } }
                        }
                    }}
                />
                <Typography sx={{ fontSize: '10px', color: '#666666' }}>Use 8 or more characters with a mix of letters, numbers & symbols</Typography>
                <FormControlLabel
                    control={<Checkbox />}
                    label={<Typography sx={{ fontSize: '11px', color: '#666666' }}>By creating an account, I agree to our <span style={{ color: '#666666', fontWeight: 'bold', textDecoration: 'underline' }}>Terms of use</span> and <span style={{ color: '#666666', fontWeight: 'bold', textDecoration: 'underline' }}>privacy policy</span></Typography>}
                    sx={{ mt: 3 }}
                />
                <Stack spacing={2} mt={3} sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, pl: { lg: 4, md: 4, sm: 0, xs: 3 } }}>
                    <Button sx={{ borderRadius: '20px', bgcolor: '#B08B6F', color: 'white', width: { xs: '200px', sm: '100px' }, textTransform: 'none' }}>Sign Up</Button>
                    <Stack direction={'row'} spacing={1} sx={{ pt: 1, pl: 3 }}>
                        <Typography sx={{ fontSize: '12px', color: '#666666', mt: 1 }}>Already have an account ?</Typography>
                        <Typography sx={{ fontSize: '12px', color: '#666666', fontWeight: 'bold', textDecoration: 'underline' }}>Log in</Typography>
                    </Stack>
                </Stack>
            </Box>
    </AuthenticationLayout>
  )
}

export default Signuppage