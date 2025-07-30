// ScrollToTopButton.jsx
import React, { useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollY > 800);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <Box
      onClick={scrollToTop}
      sx={{
        position: "fixed",
        bottom: 75,
        right: 20,
        width: 45,
        height: 45,
        backgroundColor: "#7c8cdcff",
        color: "white",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      <IconButton size="small" sx={{ color: "white" }}>
        <KeyboardArrowUpIcon />
      </IconButton>
    </Box>
  );
};

export default ScrollToTopButton;
