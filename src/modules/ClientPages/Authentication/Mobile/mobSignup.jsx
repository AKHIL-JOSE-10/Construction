import React from "react";
import { Box, Typography, TextField, Button, InputAdornment } from "@mui/material";
import phoneIcon from "@mui/icons-material/Smartphone";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LockIcon from "@mui/icons-material/Lock";
import SecurityIcon from "@mui/icons-material/Security";
import EmailIcon from "@mui/icons-material/Email";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TimerIcon from "@mui/icons-material/Timer";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import {
  MapPinIcon,
  PhoneCallIcon,
  LockSimpleIcon
,
 ShieldCheckIcon,
 PaperPlaneRightIcon ,
 PhoneIcon
} from "@phosphor-icons/react";

const MobSignup = () => {
  return (
    <Box
      sx={{
        background: "#fff",
        display: "flex",
        flexDirection: "column",
         bgcolor:"#ffffffff"
      }}
    >

      <Box sx={{p:3, bgcolor:'rgba(248, 232, 232, 1)'}}>
{/* Top Section */}
      <Box sx={{display:'flex', justifyContent:'center'}}>
        <Typography variant="h4" fontWeight="bold">
          Sign up
        </Typography>
      </Box>

      {/* Center Image */}
      <Box
        sx={{
          mt: 5,
          width: '100%',
          height: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PhoneIcon size={150}  color="#f44336" sx={{ fontSize: 160, color: "#f44336" }} />
      </Box>

      </Box>
      
      {/* Form Section */}
<Box sx={{ width: "100%"}}>
  <Box
    sx={{
      p: 3,
    }}
  >
    <Typography variant="body2" sx={{ mb: 1, fontWeight:'550'}}>
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
        backgroundColor: "#f44336",
        color: "#fff",
        py: 1.2,
        textTransform: "none",
        fontWeight: "bold",
        fontSize: "16px",
      }}
      endIcon={<ArrowForwardIcon />}
    >
      Next
    </Button>
  </Box>
</Box>

    </Box>
  );
};

export default MobSignup;
