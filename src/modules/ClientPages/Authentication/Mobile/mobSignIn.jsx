import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Paper
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import SignInPhoneImg from '@/assets/SignInPhoneImg.png';

const MobSignIn = () => {
  const navigate = useNavigate();

  const handleVerifyClick = () => {
    navigate("/mobile-Otp-verification");
  };

  return (
    <Box
      sx={{
        mt:3,
        bgcolor: "#f9f9f9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 420,
          borderRadius: 4,
          p: 4,
          backgroundColor: "#fff",
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
            Sign in to Continue
          </Typography>
        </Box>

        <Box
          sx={{
            width: '100%',
            height: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 3,
            mt: 2
          }}
        >
          <img
            src={SignInPhoneImg}
            alt="OTP Verification"
            style={{ height: "100%", objectFit: "contain" }}
          />
        </Box>

        <Box>
          <Typography variant="body1" fontWeight="600" gutterBottom>
            Mobile Number
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="99880-00988"
            InputProps={{
              startAdornment: <InputAdornment position="start">+91</InputAdornment>,
              sx: {
                borderRadius: "12px",
                backgroundColor: "#fafafa",
              },
            }}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              borderRadius: "12px",
              backgroundColor: "#D1004D",
              color: "#fff",
              py: 1.3,
              textTransform: "none",
              fontWeight: "600",
              fontSize: "16px",
              boxShadow: "0px 4px 10px rgba(209, 0, 77, 0.3)",
              '&:hover': {
                backgroundColor: "#b80040",
              },
            }}
            endIcon={<ArrowForwardIcon />}
            onClick={handleVerifyClick}
          >
            Verify OTP
          </Button>
        </Box>

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography sx={{ fontSize: 14, color: "#555" }}>
            Need help?{" "}
            <Box
              component="span"
              sx={{
                fontSize: 14,
                color: "#D1004D",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Contact Us
            </Box>
          </Typography>

          <Typography sx={{ fontSize: 13, color: "#888", mt: 2 }}>
            By signing up, you agree to our{" "}
            <Box
              component="span"
              sx={{
                fontSize: 13,
                color: "#D1004D",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Terms & Conditions
            </Box>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default MobSignIn;
