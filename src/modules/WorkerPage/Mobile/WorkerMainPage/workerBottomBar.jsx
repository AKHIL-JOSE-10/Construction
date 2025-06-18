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
    "/mobile-worker-mainpage", // Works
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
        navigate("/mobile-messages");
        break;
      case 2:
        navigate("/mobile-worker-mainpage");
        break;
      case 3:
        navigate("/mobile-bookings");
        break;
      case 4:
        navigate("/mobile-profile");
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
        bgcolor: "white",
        zIndex: 1000,
        borderTop: "1px solid lightgrey",
        height: 60,
        overflow: "visible", // critical!
      }}
    >
      {/* Wrapper for popping icon */}
      <Box
        sx={{
          position: "absolute",
          top: -30,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1100,
        }}
        onClick={() => {
          setValue(2);
          navigate("/mobile-worker-mainpage");
        }}
      >
        <Box
          sx={{
            width: 48,
            height: 48,
            bgcolor: "rgba(163, 84, 15, 0.94)",
            borderRadius: "50%",
            border: "4px solid rgb(107, 56, 5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            mt:1.5
          }}
        >
          <WorkIcon sx={{ color: "rgba(251, 248, 248, 0.91)", fontSize: 30 }} />
        </Box>
      </Box>

      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        sx={{
          height: "100%",
          overflow: "visible",
          ".MuiTabs-flexContainer": {
            overflow: "visible",
            position: "relative",
          },
        }}
      >
        <Tab
          icon={<HomeOutlinedIcon sx={{ width: 24, height: 24 }} />}
          label="Home"
          sx={tabStyle}
        />
        <Tab
          icon={<MessageIcon sx={{ width: 22, height: 22 , mr:0.5 }} />}
          label="Messages"
          sx={tabStyle}
        />

        {/* Empty tab for spacing */}
        <Tab
          sx={{
            minWidth: 0,
            width: "20px",
            height: "60px",
            padding: 0,
            margin: 0,
          }}
          disabled
        />

        <Tab
          icon={<EventAvailableIcon sx={{ width: 22, height: 22, ml:0.5}} />}
          label="Bookings"
          sx={tabStyle}
        />
        <Tab
          icon={<AccountCircleIcon sx={{ width: 22, height: 22 }} />}
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
  px: 1,
  mx: 0.4,
  py: 0.2,
  textTransform: "none",
  minHeight: 48,
  height: 48,
};

export default WorkerBottomBar;
