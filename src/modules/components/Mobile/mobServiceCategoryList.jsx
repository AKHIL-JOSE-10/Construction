import { Box, Typography } from "@mui/material";

const MobServiceCategoryList = ({ img, title, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: 105,
        height: 110,
        borderRadius: "10px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
      }}
    >
      {/* Background Image (fills entire box) */}
      <Box
        component="img"
        src={img}
        alt={title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.7))",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          pb: 0.8,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: "#fff",
            fontSize: "11px",
            fontWeight: 550,
            textAlign: "center",
            lineHeight: "1.2",
            wordWrap: "break-word",
            mb:0.7,
            px:0.7
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default MobServiceCategoryList;
