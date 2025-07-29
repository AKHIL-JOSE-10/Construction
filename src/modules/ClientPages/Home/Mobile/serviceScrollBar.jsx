import React, { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import AutomationIcon from "@/assets/SecurityAutomation.png";
import AllIcon from "@/assets/All.png";
import Artisans from "@/assets/Artisans.png";
import LegalIcon from "@/assets/Legal.png";
import FabricationIcon from "@/assets/Fabrication.png";
import ArchitecturalIcon from "@/assets/Architectural.png";
import EducationalIcon from "@/assets/Educational.png";
import ContractorsIcon from "@/assets/Contractors.png";
import EngineersIcon from "@/assets/Engineers.png";
import InstantIcon from "@/assets/Instant.png";

const routeMap = {
  Architects: "/mobile-architectural-services",
  Contractors: "/mobile-contractor-services",
  Engineers: "/mobile-engineers",
  Artisans: "/mobile-artisans",
  Education: "/mobile-education",
  All: "/mobile-all-services",
  Urgent: "/mobile-urgent-services",
  Fabrication: "/mobile-fabrication",
  Automation: "/mobile-automation",
  Legal: "/mobile-legal",
};

const pages = [
  [
    { label: "All", icon: AllIcon },
    { label: "Urgent", icon: InstantIcon },
    { label: "Engineers", icon: EngineersIcon },
    { label: "Artisans", icon: Artisans },
    { label: "Education", icon: EducationalIcon },
    { label: "Architects", icon: ArchitecturalIcon },
    { label: "Contractors", icon: ContractorsIcon },
    { label: "Fabrication", icon: FabricationIcon },
    { label: "Automation", icon: AutomationIcon },
    { label: "Legal", icon: LegalIcon },
  ],
];

const ServiceScrollBar = ({ fakeScrollBarWidthPercent = 50 }) => {
  const realRef = useRef(null);
  const fakeRef = useRef(null);
  const navigate = useNavigate();

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
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        pb: 3,
      }}
    >
      {/* Real Scrollable Content */}
      <Box
        ref={realRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          pb: 1.5,
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
                  boxShadow: "0px 2px 8px rgba(136, 121, 121, 0.1)",
                  bgcolor: "rgba(242, 242, 248, 1)",
                  textAlign: "center",
                  borderRadius: 1,
                  height: 58,
                  width: 63,
                  mx: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 0.7,
                  cursor: item.label === "Architects" ? "pointer" : "default",
                }}
                onClick={() => {
                  const route = routeMap[item.label];
                  if (route) navigate(route);
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
                <Typography color="black" fontSize={11} fontWeight={550}>
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
          bottom: 20,
          left: `${(28 + fakeScrollBarWidthPercent) / 1.8}vw`,
          width: `${fakeScrollBarWidthPercent / 4}vw`,
          height: "auto",
          overflowX: "auto",
          overflowY: "hidden",
          zIndex: 10,
          "&::-webkit-scrollbar": {
            height: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#1527b0ff",
            borderRadius: "100px",
            width: "35px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#c4bcf6ff",
            borderRadius: "100px",
          },
        }}
      >
        <Box sx={{ width: `${pages.length * 40}vw`, height: "5px" }} />
      </Box>
    </Box>
  );
};

export default ServiceScrollBar;
