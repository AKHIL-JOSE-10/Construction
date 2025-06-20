import { Close } from "@mui/icons-material";
import { Box, Button, Drawer, Grid } from "@mui/material";
import React, { useState } from "react";

export default function MobBottomDrawerLayout({ children, open, setOpen, sx }) {
  const handleOpen = (toggleOpen) => {
    setOpen(toggleOpen);
  };

  return (
    // <Box width="100vw">
    //   {/* <Button
    //     onClick={() => handleOpen(true)}
    //     sx={{ width: "100px" }}
    //     variant="contained"
    //   >
    //     Hello
    //   </Button> */}
    <>
      {open && (
        <Box
          sx={{
            height: "40px",
            width: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            color: "lightgrey",
            bgcolor: "rgba(39, 39, 39, 0.37)",
            position: "fixed",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "75vh", // slightly above the Drawer
            zIndex: 2001, // above Drawer (Drawer default is 1200–1300)
          }}
          onClick={() => handleOpen(false)}
        >
          <Close sx={{ fontSize: "20px" }} />
        </Box>
      )}
      <Drawer
        anchor="bottom"
        open={open}
        onClose={() => handleOpen(false)}
        hideBackdrop={false}
        slotProps={{
          paper: {
            sx: {
              height: "74vh",
              width: "100%",
              borderRadius: "22px 22px 0px 0px",
              overflow: "hidden",
            },
          },
        }}
      >
        <Close
          sx={{
            fontSize: "20px",
            borderRadius: "50px",
            position: "fixed",
            bgcolor: "lighgrey",
            left: 20,
            top: -20,
            zIndex: 2000,
          }}
          onClick={() => handleOpen(false)}
        />
        <Box
          width="100%"
          height="100%"
          sx={{
            overflow: "hidden",
            bgcolor: "white",
            position: "relative",
            ...sx,
          }}
          pt={2}
        >
          <Box
            sx={{
              height: "6px",
              width: "70px",
              bgcolor: "lightgrey",
              borderRadius: "50px",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            onClick={() => handleOpen(false)}
          />

          <Box
            sx={{
              height: "100%",
              position: "relative",
              overflow: "auto",
              scrollbarWidth: "none",
            }}
            m={2}
          >
            {children}
          </Box>
        </Box>
      </Drawer>
    </>

    // </Box>
  );
}
