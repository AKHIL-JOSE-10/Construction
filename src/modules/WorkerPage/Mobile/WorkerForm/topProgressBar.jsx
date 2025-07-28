import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

const TopProgressBar = ({ activeStep, pgnum }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // ✅ Go back to previous page
  };

  return (
    <Box sx={{ width: "100%", boxSizing: "border-box", mb: 2 }}>
      {/* Top row with back arrow and page number */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <IconButton onClick={handleBackClick} size="small">
          <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
        </IconButton>
        <Typography fontSize={14} fontWeight={500}>
          {pgnum}
        </Typography>
      </Box>

      {/* Progress bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "95%",
          gap: 1.5,
          pb: 1,
          ml: 1,
        }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Box
            key={i}
            sx={{
              flex: 1,
              height: 5,
              backgroundColor: i <= activeStep ? "#9c0037" : "#ccc",
              borderRadius: 2,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TopProgressBar;
