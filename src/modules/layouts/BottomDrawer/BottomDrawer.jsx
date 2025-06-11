import { Box, Button, Drawer, Grid } from "@mui/material";
import React, { useState } from "react";

export default function BottomDrawerLayout({ children, open, setOpen, sx }) {
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
    <Drawer
      anchor="bottom"
      open={open}
      onClose={() => handleOpen(false)}
      hideBackdrop={false}
      slotProps={{
        paper: {
          sx: {
            height: "60vh",
            width: "100%",
            borderRadius: "22px 22px 0px 0px",
            overflow: "hidden",
          },
        },
      }}
    >
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
          <Box pb={4} />
        </Box>
      </Box>
    </Drawer>

    // </Box>
  );
}
