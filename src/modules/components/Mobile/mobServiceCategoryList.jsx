import { Box, Typography } from "@mui/material";

const MobServiceCategoryList = ({ img, title, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: 220,
        height: 80,
        borderRadius: "10px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.3)",
        backgroundColor: "#fff",
      }}
    >
      {/* Left: Image section */}
      <Box
        component="img"
        src={img}
        alt={title}
        sx={{
          width: 80,
          height: "100%",
          objectFit: "cover",
          borderTopRightRadius:5,
          borderBottomRightRadius:5
        }}
      />

      {/* Right: Text section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          width:90,
          height: "100%",
          background: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            fontSize: "11px",
            color: "#000000ff",
            wordWrap: "break-word",
            pl:1,
            pr:1
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default MobServiceCategoryList;
