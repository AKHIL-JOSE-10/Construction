import { Typography, Box, InputAdornment, TextField, Checkbox, FormControlLabel, Stack, Button } from '@mui/material';
import MobAuthLayout from '../../../modules/layouts/Mobile/mobAuthLayout';

const MobSignup = () => {
    return (
        <MobAuthLayout heading1="Join & Build" heading2="Smart">
            <Box sx={{ height: 'auto', width: '95%', mb: 3, bgcolor: 'white', border: '2px solid #B08B6F', borderRadius: 2 }}>
                <Typography  sx={{fontSize:{xs:'30px',sm:'40px'}, fontWeight: '700', pt: 3.5, textAlign: 'center', }}>Sign up </Typography>

                <Box px={3} pb={5} pt={4}>
                    <Typography sx={{ fontSize: { xs: '15px', sm: '26px', md: '26px' }, color: '#666666', fontWeight: '550', mb: 1, ml: 0.5 }}>Full Name</Typography>
                    <TextField
                        size="small"
                        required
                        sx={{ width: { xs: '38vh', sm: '55vh', md: '64vh' }, mb: 2 }}
                        slotProps={{
                            input: {
                                sx: {
                                    height: { xs: '4.5vh', sm: '5vh', md: '5vh' },
                                    fontSize: { xs: '16px', sm: '24px', md: '25px' }
                                }
                            }
                        }}
                    />

                    <Typography sx={{ fontSize: { xs: '15px', sm: '26px', md: '26px' }, color: '#666666', fontWeight: '550', mb: 1, ml: 0.5 }}>Email</Typography>
                    <TextField
                        size="small"
                        required
                        sx={{
                            width: { xs: '38vh', sm: '55vh', md: '64vh' },
                            mb: 2
                        }}
                        slotProps={{
                            input: {
                                sx: {
                                    height: { xs: '4.5vh', sm: '5vh', md: '5vh' },
                                    fontSize: { xs: '16px', sm: '22px', md: '24px' }
                                }
                            }
                        }}
                    />

                    <Typography sx={{ fontSize: { xs: '15px', sm: '26px', md: '26px' }, color: '#666666', fontWeight: '550', mb: 1, ml: 0.5 }}>Phone number</Typography>
                    <TextField
                        size="small"
                        required
                        sx={{ width: { xs: '38vh', sm: '55vh', md: '64vh' }, mb: 2 }}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        +91
                                    </InputAdornment>
                                ),
                                sx: {
                                    height: { xs: '4.5vh', sm: '5vh', md: '5vh' },
                                    fontSize: { xs: '16px', sm: '24px', md: '25px' }
                                }
                            }
                        }}
                        inputProps={{
                            inputMode: 'numeric',
                            type: 'tel',
                        }}
                    />

                    <Typography sx={{ fontSize: { xs: '15px', sm: '26px', md: '26px' }, color: '#666666', fontWeight: '550', mb: 1, ml: 0.5 }}>Password</Typography>
                    <TextField
                        size="small"
                        type="password"
                        required
                        sx={{ width: { xs: '38vh', sm: '55vh', md: '64vh' }, mb: 0.5 }}
                        slotProps={{
                            input: {
                                sx: {
                                    height: { xs: '4.5vh', sm: '5vh', md: '5vh' },
                                    fontSize: { xs: '16px', sm: '24px', md: '25px' }
                                }
                            }
                        }}
                    />

                    <Typography sx={{ fontSize: { xs: '11px', sm: '19px', md: '20px' }, color: '#666666' }}>
                        Use 8 or more characters with a mix of letters, numbers & symbols
                    </Typography>

                    <FormControlLabel
                        control={<Checkbox />}
                        label={
                            <Typography sx={{ fontSize: { xs: '13px', sm: '20px', md: '20px' }, color: '#666666' }}>
                                By creating an account, I agree to our{' '}
                                <span style={{ color: '#666666', fontWeight: 'bold', textDecoration: 'underline' }}>
                                    Terms of use
                                </span>{' '}
                                and{' '}
                                <span style={{ color: '#666666', fontWeight: 'bold', textDecoration: 'underline' }}>
                                    privacy policy
                                </span>
                            </Typography>
                        }
                        sx={{ mt: 3 }}
                    />

                    <Stack spacing={2} mt={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Button
                            sx={{
                                borderRadius: '20px',
                                bgcolor: '#B08B6F',
                                color: 'white',
                                width: '200px',
                                textTransform: 'none'
                            }}
                        >
                            <Typography sx={{ fontSize: { xs: "15px", sm: "30px", md: "40px" }, color: "white" }}>Sign Up</Typography>
                        </Button>

                        <Stack direction="row" spacing={1} sx={{ pt: 1, }}>
                            <Typography sx={{ fontSize: { xs: '15px', sm: '25px', md: '25px' }, color: '#666666', mt: 1 }}>
                                Already have an account ?
                            </Typography>
                            <Typography sx={{ fontSize: { xs: '15px', sm: '25px', md: '26px' }, color: '#666666', fontWeight: 'bold', textDecoration: 'underline' }}>
                                Log in
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Box>

        </MobAuthLayout>

    )
}

export default MobSignup