import { Search } from "@mui/icons-material";
import { Grid, Input, InputAdornment } from "@mui/material";
import React from "react";
import { color } from "./constants";
export default function SearchBar({sx,text}) {
  return (
    <Grid
      sx={{     
        bgcolor: color.layoutColor,
        height: "5vh",
        borderRadius: "1000px",
        display: "flex",
          ...sx, 
      }}
      alignItems={"center"}
      size={10}
    >
      <Input
        placeholder= {text ? text : "Job title, keyword, worker"}
        disableUnderline
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <Search sx={{ color: "gray", marginLeft: "0.3em" }} />
          </InputAdornment>
        }
        sx={{
          "& .MuiInputBase-root": {
            border: "none", // Ensure no border
            backgroundColor: "transparent", // Transparent background
            display: "flex",
            alignItems: "center",
            height: "100%",
          },
          "& .MuiInputBase-input": {
            padding: "0.5em", // Padding for text
            fontSize: "0.9em", // Font size
          },
        }}
      />
    </Grid>
  );
}
