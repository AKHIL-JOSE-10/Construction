import { Box } from "@mui/material";

const ServiceList = ({ name, image, selected, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        px: 1.5,
        py: 0.5,
        borderRadius: 1,
        border: "1px solid #e91e63",
        backgroundColor: selected ? "#e91e63" : "#fff",
        color: selected ? "#fff" : "#000",
        mr: 1,
        minWidth: "fit-content",
        cursor: "pointer",
        fontWeight: 600,
        fontSize: 13,
      }}
    >
      <Box
        sx={{
          width: 26,
          height: 26,
          bgcolor: "#fff",
          borderRadius: 1,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mr: 1,
        }}
      >
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      {name}
    </Box>
  );
};

export default ServiceList;
