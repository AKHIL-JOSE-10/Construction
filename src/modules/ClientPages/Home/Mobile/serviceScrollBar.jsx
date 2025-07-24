import React, { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const ServiceScrollBar = ({ pages, fakeScrollBarWidthPercent = 50 }) => {
  const realRef = useRef(null);
  const fakeRef = useRef(null);

  useEffect(() => {
    const real = realRef.current;
    const fake = fakeRef.current;

    let isSyncingFromFake = false;
    let isSyncingFromReal = false;

    const syncScroll = () => {
      const realScrollableWidth = real.scrollWidth - real.clientWidth;
      const fakeScrollableWidth = fake.scrollWidth - fake.clientWidth;

      fake.onscroll = () => {
        if (isSyncingFromReal) {
          isSyncingFromReal = false;
          return;
        }
        isSyncingFromFake = true;
        real.scrollLeft =
          (fake.scrollLeft / fakeScrollableWidth) * realScrollableWidth;
      };

      real.onscroll = () => {
        if (isSyncingFromFake) {
          isSyncingFromFake = false;
          return;
        }
        isSyncingFromReal = true;
        fake.scrollLeft =
          (real.scrollLeft / realScrollableWidth) * fakeScrollableWidth;
      };
    };

    if (real && fake) {
      syncScroll();
    }
  }, []);

  return (
    <Box sx={{ position: "relative", width: "100vw", overflow: "hidden" }}>
      {/* Real Scrollable Content */}
      <Box
        ref={realRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          pb:1.5,
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
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

      {/* Fake Scrollbar */}
      <Box
        ref={fakeRef}
        sx={{
          position: "absolute",
          bottom: 0,
          left: `${(28 + fakeScrollBarWidthPercent) / 2}vw`, // to center it
          width: `${fakeScrollBarWidthPercent/2}vw`,
          height: "auto",
          overflowX: "auto",
          overflowY: "hidden",
          zIndex: 10,
          "&::-webkit-scrollbar": {
            height: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#f95353ff",
            borderRadius: "100px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f6bcbcff",
            borderRadius: "100px",
          },
        }}
      >
        <Box sx={{ width: `${pages.length * 60}vw`, height: "5px" }} />
      </Box>
    </Box>
  );
};

export default ServiceScrollBar;
