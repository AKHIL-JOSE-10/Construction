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
        bgcolor: "#d5e4fcff", // light red inner shade
        borderRadius: 1,
        height: 40,
        display: "flex",
        alignItems: "center",
        width: "100%",
        cursor: "pointer",
        boxShadow: "0 0 10px rgba(114, 126, 234, 0.7)", // subtle red shadow
        transition: "box-shadow 0.3s ease, border 0.3s ease",
        "&:hover": {
          boxShadow: "0px 4px 12px rgba(255, 4, 0, 5)", // stronger on hover
          borderColor: "#d32f2f",
        },
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
          color: "#fff",
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
