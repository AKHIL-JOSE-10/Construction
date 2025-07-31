import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Tabs, Tab } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FlashOnIcon from "@mui/icons-material/FlashOn"; 
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const MobileBottomTab = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState(0);

  const allowedPaths = [
    "/home",
    "/mobile-Urgent-ServiceRequest",   // ⬅️ Updated path
    "/mobile-bookings",
    "/mobile-profile",
  ];

  useEffect(() => {
    const tabValue = allowedPaths.indexOf(location.pathname);
    if (tabValue !== -1) {
      setValue(tabValue);
    }
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) navigate("/home");
    else if (newValue === 1) navigate("/mobile-Urgent-ServiceRequest"); 
    else if (newValue === 2) navigate("/mobile-bookings");
    else if (newValue === 3) navigate("/mobile-profile");
  };

  if (!allowedPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "60px",
        bgcolor: "white",
        zIndex: 1000,
        borderTop: "1px solid lightgrey",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="mobile bottom navigation"
        variant="fullWidth"
        sx={{
          minHeight: 45,
          height: 48,
          pt: 1,
        }}
      >
        <Tab
          icon={<HomeOutlinedIcon sx={{ width: 25, height: 25 }} />}
          label="Home"
          sx={{
            fontSize: "0.6rem",
            minWidth: 0,
            px: 0.8,
            mx: 0.4,
            py: 0.2,
            my: 0.2,
            textTransform: "none",
            minHeight: 45,
            height: 45,
          }}
        />
        <Tab
          icon={<FlashOnIcon sx={{ width: 23, height: 23 }} />} // ⬅️ New icon
          label="Instant"
          sx={{
            fontSize: "0.6rem",
            minWidth: 0,
            px: 0.8,
            mx: 0.4,
            py: 0.2,
            my: 0.2,
            textTransform: "none",
            minHeight: 45,
            height: 45,
          }}
        />
        <Tab
          icon={<EventAvailableIcon sx={{ width: 23, height: 23 }} />}
          label="Bookings"
          sx={{
            fontSize: "0.6rem",
            minWidth: 0,
            px: 0.8,
            mx: 0.4,
            py: 0.2,
            my: 0.2,
            textTransform: "none",
            minHeight: 45,
            height: 45,
          }}
        />
        <Tab
          icon={<AccountCircleIcon sx={{ width: 23, height: 23 }} />}
          label="Profile"
          sx={{
            fontSize: "0.6rem",
            minWidth: 0,
            px: 0.8,
            mx: 0.4,
            py: 0.2,
            my: 0.2,
            textTransform: "none",
            minHeight: 45,
            height: 45,
          }}
        />
      </Tabs>
    </Box>
  );
};

export default MobileBottomTab;
