import React, { useState } from 'react';
import {
  Grid,
  Box,
  Typography,
  TextField,
  Stack,
  Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import OTPImg from '@/assets/OTPImg.png';

const MobOtpVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const navigate = useNavigate(); // <-- Added this line

  const handleChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join('');
    console.log('OTP entered:', enteredOtp);
    
    // Add validation logic if needed
    navigate('/home'); // <-- Navigate to /home
  };

  return (
    <Grid>
      <Box
        sx={{
          width: '100%',
          height: 250,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 7
        }}
      >
        <img
          src={OTPImg}
          alt="OTP Verification"
          style={{ height: "100%", objectFit: "contain" }}
        />
      </Box>

      <Box
        sx={{
          maxWidth: 350,
          margin: 'auto',
          p: 3,
          textAlign: 'center',
          backgroundColor: '#fff',
          borderRadius: 2,
        }}
      >
        <Typography variant="body2" sx={{ mb: 2 }}>
          Please enter the 4-digit code sent to you at
          <br />
          <strong>+91 99880 09888</strong>
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" mb={3}>
          {otp.map((digit, index) => (
            <TextField
              key={index}
              id={`otp-${index}`}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              inputProps={{
                maxLength: 1,
                style: {
                  textAlign: 'center',
                  fontSize: '20px',
                  padding: '10px',
                  width: '45px',
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  backgroundColor: '#f9f9f9',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: digit ? '#f44336' : '#ccc',
                },
              }}
            />
          ))}
        </Stack>

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#D1004D",
            textTransform: 'none',
            fontWeight: 'bold',
            fontSize: '16px',
            borderRadius: 2,
            py: 1.2,
            mt: 1
          }}
          onClick={handleVerify}
        >
          Verify
        </Button>
      </Box>
    </Grid>
  );
};

export default MobOtpVerification;
