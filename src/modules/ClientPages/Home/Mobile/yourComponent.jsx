import React, { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const YourComponent = ({ pages }) => {
  const scrollRef = useRef(null);
  const fakeScrollRef = useRef(null);

  useEffect(() => {
    const real = scrollRef.current;
    const fake = fakeScrollRef.current;

    if (real && fake) {
      // Sync fake scrollbar scroll with real scroll
      fake.onscroll = () => {
        real.scrollLeft = fake.scrollLeft;
      };
      real.onscroll = () => {
        fake.scrollLeft = real.scrollLeft;
      };
    }
  }, []);

  return (
    <Box sx={{ position: "relative", width: "100vw", overflow: "hidden" }}>
      {/* Real Scrollable Content */}
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          p: 1,
          scrollbarWidth: "none", // Firefox
          "&::-webkit-scrollbar": { display: "none" }, // Chrome/Safari
        }}
      >
        {pages.map((page, idx) => (
          <Box
            key={idx}
            sx={{
              flex: "0 0 100vw",
              scrollSnapAlign: "start",
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gridTemplateRows: "repeat(2, auto)",
              gap: 2,
              boxSizing: "border-box",
              padding: 2,
            }}
          >
            {page.map((item, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: "#f7f1f1ff",
                  textAlign: "center",
                  borderRadius: 1,
                  height: 65,
                  width: 65,
                  mx: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                  p: 0.7,
                }}
              >
                <Box
                  component="img"
                  src={item.icon}
                  alt={item.label}
                  sx={{
                    width: "100%",
                    height: "auto",
                  }}
                />
                <Typography color="black" fontSize={11}>
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>
        ))}
      </Box>

      {/* Fake Scrollbar (Center 50% Width) */}
      <Box
        ref={fakeScrollRef}
        sx={{
          position: "absolute",
          bottom: 0,
          left: "25vw",
          width: "50vw",
          height: "10px",
          overflowX: "auto",
          overflowY: "hidden",
          zIndex: 10,
          "&::-webkit-scrollbar": {
            height: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#f7e2e2ff",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#ffffff",
            borderRadius: "4px",
            width:'10px'
          },
        }}
      >
        <Box sx={{ width: `${pages.length * 75}vw`, height: "1px" }} />
      </Box>
    </Box>
  );
};

export default YourComponent;
