import React from "react";
import { Box, Button } from "@mui/material";

const BottomButton = ({ handleNext }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100vw",
        maxWidth: "100vw",
        p: 0,
        zIndex: 10,
        boxSizing: "border-box",
        backgroundColor: "#fff", // Optional: ensures the background is solid
      }}
    >
      <Box
        sx={{
          borderTop: "1px solid #ddd", // Top border for separation
          px: 2,
          py: 1.5,
        }}
      >
        <Button
          fullWidth
          variant="contained"
          onClick={handleNext}
          sx={{
            backgroundColor: "#D1004D",
            color: "#fff",
            borderRadius: 35,
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#b80044",
            },
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default BottomButton;
