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
        p: 0,
        zIndex: 10,
        boxSizing: "border-box",
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          display:'flex',
          justifyContent:'center',
          borderTop: "1px solid #ddd", 
          px: 2,
          py: 1.5,
        }}
      >
        <Button
          variant="contained"
          onClick={handleNext}
          sx={{
            backgroundColor: "#D1004D",
            color: "#fff",
            borderRadius: 35,
            fontWeight: "bold",
            px:15,
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
