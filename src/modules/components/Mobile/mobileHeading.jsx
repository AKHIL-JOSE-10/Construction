import { Typography, Box, Grid } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const MobHeading = ({ Heading, backArrow = true }) => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <Grid sx={{ mb: 8 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          position: "fixed",
          top: 0,
          zIndex: 1000,
          height: "60px",
        }}
      >
        {/* Back Arrow */}
        {backArrow && (
          <ArrowBackIosIcon
            onClick={() => navigate(-1)}
            sx={{ fontSize: "20px", marginLeft: "15px" }}
          />
        )}

        {/* Centered Heading */}
        <Typography
          noWrap
          sx={{
            fontSize: "20px",
            fontWeight: 600,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            marginLeft: "15px"
          }}
        >
          {Heading}
        </Typography>
      </Box>
    </Grid>
  );
};

export default MobHeading;
