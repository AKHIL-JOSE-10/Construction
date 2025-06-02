import { Box, Button, Drawer, Grid } from "@mui/material";
import React, { useState } from "react";

export default function Test({ children }) {
  const [open, setOpen] = useState(false);

  const handleOpen = (toggleOpen) => {
    setOpen(toggleOpen);
  };

  return (
    <Box width="100vw">
      <Button
        onClick={() => handleOpen(true)}
        sx={{ width: "100px" }}
        variant="contained"
      >
        Hello
      </Button>
      <Box sx={{ bgcolor: "grey" }} height="100vh" width="100vw">
        <Drawer
          anchor="bottom"
          open={open}
          onClose={() => handleOpen(false)}
          hideBackdrop={false}
          slotProps={{
            paper: {
              sx: {
                bgcolor: "yellow",
                height: "88vh",
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
              overflow: "auto",
              bgcolor: "white",
              position: "relative",
            }}
            pt={2}
            onClick={() => handleOpen(false)}
          >
            <Box
              sx={{
                height: "6px",
                width: "70px",
                bgcolor: "lightgrey",
                borderRadius: "50px",
                position: "fixed",
                left: "50%",
                transform: "translateX(-50%)",
              }}
              onClick={() => handleOpen(false)}
            />

            <Box sx={{ height: "92%",border:"2px solid black" }} m={2}>
              {children}
            </Box>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
}
