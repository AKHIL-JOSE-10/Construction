import React from "react";
import { Box, Typography, TextField, Button, InputAdornment } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom"; // <-- Import this
import SignInPhoneImg from '@/assets/SignInPhoneImg.png'
const MobSignIn = () =>{
  const navigate = useNavigate(); 

  const handleVerifyClick = () => {
    
    navigate("/mobile-Otp-verification");
  };

  return (
    <Box sx={{ background: "#fff", display: "flex", flexDirection: "column", bgcolor: 'rgba(255, 255, 255, 1)' }}>
      <Box sx={{ p: 3 }}>
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Sign in
          </Typography>
        </Box>

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
            src={SignInPhoneImg}
            alt="OTP Verification"
            style={{ height: "100%", objectFit: "contain" }}
          />
        </Box>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ px: 3 }}>
          <Typography variant="body2" sx={{ mb: 1, fontWeight: '550' }}>
            Mobile number
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="99880-00988"
            InputProps={{
              startAdornment: <InputAdornment position="start">+91</InputAdornment>,
              sx: { borderRadius: "10px", backgroundColor: "#fff" },
            }}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              borderRadius: "10px",
              backgroundColor: "#D1004D",
              color: "#fff",
              py: 1.2,
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "16px",
            }}
            endIcon={<ArrowForwardIcon />}
            onClick={handleVerifyClick} 
          >
            Verify Otp
          </Button>

          <Box sx={{ px: 3, textAlign: "center", mt: 2 }}>
            <Typography sx={{ fontSize: 14, color: "gray" }}>
              Need help?{" "}
              <Typography
                component="span"
                sx={{ fontSize: 14, color: "#f44336", textDecoration: "underline", cursor: "pointer" }}
              >
                Contact Us
              </Typography>
            </Typography>

            <Typography sx={{ fontSize: 14, color: "gray", my: 2 }}>
              By signing up, you agree to our{" "}
              <Typography
                component="span"
                sx={{ fontSize: 14, color: "#f44336", textDecoration: "underline", cursor: "pointer" }}
              >
                Terms & Conditions
              </Typography>
            </Typography>
          </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default MobSignIn