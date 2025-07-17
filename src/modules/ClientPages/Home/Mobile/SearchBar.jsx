import React from "react";
import { Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ placeholder = 'Search for “Plumbing Services”' }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/mobile-Recent-Search");
  };

  return (
    <Box
      sx={{
        mt: 2,
        bgcolor: "#fff",
        borderRadius: 1,
        height: 40,
        display: "flex",
        alignItems: "center",
        width: "100%",
        cursor: "pointer",
        border: '1px solid #ccc',   // subtle light grey border
      }}
      onClick={handleClick}
    >
      <SearchIcon
        sx={{
          fontSize: 26,              
          color: "#b0b0b0",        
          mx: 2
        }}
      />
      <InputBase
        placeholder={placeholder}
        sx={{
          flex: 1,
          fontSize: "1rem",
          color: "#555",
        }}
        inputProps={{ readOnly: true }}
      />
    </Box>
  );
};

export default SearchBar;
