import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Tabs, Tab } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MessageIcon from "@mui/icons-material/Message";
import WorkIcon from "@mui/icons-material/Work";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const WorkerBottomBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState(0);

  const allowedPaths = [
    "/home",
    "/mobile-messages",
    "/mobile-worker-mainpage",       // New tab for 'Works'
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
    switch (newValue) {
      case 0:
        navigate("/home");
        break;
      case 1:
        navigate("/mobile-messages",);
        break;
      case 2:
        navigate("/mobile-worker-mainpage");
        break;
      case 3:
        navigate("/mobile-bookings");
        break;
      case 4:
        navigate( "/mobile-profile");
        break;
      default:
        break;
    }
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
        aria-label="worker bottom tabs"
        variant="fullWidth"
        sx={{ minHeight: 45, height: 48, pt: 1 }}
      >
        <Tab
          icon={<HomeOutlinedIcon sx={{ width: 25, height: 25 }} />}
          label="Home"
          sx={tabStyle}
        />
        <Tab
          icon={<MessageIcon sx={{ width: 23, height: 23 }} />}
          label="Messages"
          sx={tabStyle}
        />
        <Tab
          icon={<WorkIcon sx={{ width: 23, height: 23 }} />}
          label="Works"
          sx={tabStyle}
        />
        <Tab
          icon={<EventAvailableIcon sx={{ width: 23, height: 23 }} />}
          label="Bookings"
          sx={tabStyle}
        />
        <Tab
          icon={<AccountCircleIcon sx={{ width: 23, height: 23 }} />}
          label="Profile"
          sx={tabStyle}
        />
      </Tabs>
    </Box>
  );
};

const tabStyle = {
  fontSize: "0.6rem",
  minWidth: 0,
  px: 0.8,
  mx: 0.4,
  py: 0.2,
  my: 0.2,
  textTransform: "none",
  minHeight: 45,
  height: 45,
};

export default WorkerBottomBar;
