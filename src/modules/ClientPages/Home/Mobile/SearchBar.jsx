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
        bgcolor: "rgba(242, 242, 248, 1)", 
        borderRadius: 1,
        height: 45,
        display: "flex",
        alignItems: "center",
        width: "100%",
        cursor: "pointer",
        border:'0.7px solid #d4d3d3ff',
        boxShadow: "0 0 10px rgba(6, 14, 85, 0.2)", // subtle red shadow
        transition: "box-shadow 0.3s ease, border 0.3s ease",
      }}
      onClick={handleClick}
    >
      <MagnifyingGlassIcon
        size={20}
        color="#000000ff"
        style={{ marginLeft: 16, marginRight: 16 }}
      />
<InputBase
        placeholder={placeholder}
        sx={{
          flex: 1,
          fontSize: "0.8rem",
          color: "#000000ff",
          "& input::placeholder": {
            color: "#000000ff",
            opacity: 1,
          },
        }}
        inputProps={{ readOnly: true }}
      />
    </Box>
  );
};

export default SearchBar;
