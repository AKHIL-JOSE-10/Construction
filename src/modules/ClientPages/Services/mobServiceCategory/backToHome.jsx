import { Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

const BackToHomeButton = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 5,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <Box
        onClick={() => navigate(-1)}
        sx={{
          px: 2,
          py: 1.2,
          bgcolor: "rgba(103, 102, 102, 1)",
          color: "#fff",
          borderRadius: "30px",
          cursor: "pointer",
          fontWeight: 500,
          fontSize: 12,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ArrowBackIosIcon sx={{ fontSize: 16, mr: 1 }} />
        Back to Home
      </Box>
    </Box>
  );
};

export default BackToHomeButton;
