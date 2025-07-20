import React from "react";
import { Box, InputBase } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";

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
        border: "1px solid #ccc",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.08)", // subtle shadow
        transition: "box-shadow 0.3s ease",
        "&:hover": {
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.12)", // stronger on hover
        },
      }}
      onClick={handleClick}
    >
      <MagnifyingGlassIcon
        size={20}
        color="#b0b0b0"
        style={{ marginLeft: 16, marginRight: 16 }}
      />
      <InputBase
        placeholder={placeholder}
        sx={{
          flex: 1,
          fontSize: "0.8rem",
          color: "#555",
        }}
        inputProps={{ readOnly: true }}
      />
    </Box>
  );
};

export default SearchBar;
