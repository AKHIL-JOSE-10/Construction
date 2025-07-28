import { Box, Typography } from "@mui/material"

const MobServiceCategoryList = ({ img, title, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: 105,
        height: 110,
        borderRadius: 1,
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: "0px 3px 12px rgba(0, 0, 0, 0.1)",
        position: "relative",
      }}
    >
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

      {/* Overlay Text */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          bgcolor: "rgba(0, 0, 0, 0.6)",
          color: "#fff",
          textAlign: "center",
          py: 0.5,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontSize: "10px",
            fontWeight: 600,
            lineHeight: "1.2",
            whiteSpace: "normal",
            wordWrap: "break-word",
            overflowWrap: "break-word",
            display: "block",
            px: 0.5,
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default MobServiceCategoryList;
