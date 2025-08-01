import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollY > 900);
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
        bottom: 70,
        left: "90%",
        transform: "translateX(-50%)",
        background: "linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(3, 5, 60, 1))",
        borderRadius: 50,
        padding:1.2,
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        backdropFilter: "blur(1px)", 
        zIndex: 1000,
      }}
    >
      <KeyboardArrowUpIcon sx={{ fontSize: 30, color: "white" }} />
    </Box>
  );
};

export default ScrollToTopButton;
