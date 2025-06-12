import { Grid, Typography } from "@mui/material";
import { textDecoration, color } from "./constants";
import { useNavigate } from "react-router-dom";
export const ServiceLayer = (props) => {
  const { name, path , image} = props?.data || {};
  const navigate = useNavigate();
  console.log(image)
  return (
    
    <Grid
      container
      direction={"column"}
      spacing={0.8}
      alignItems={"center"}
      justifyContent={"center"}
      size={4}
      sx={{
        WebkitTapHighlightColor: "transparent",
      }}
      onClick={() => navigate(path)}
      flexWrap
    >
      <Grid
        container
        size={1}
        height={"4em"}
        width={"4em"}
        sx={{ ...textDecoration.serviceLayout }}
        justifyContent={"center"}
        alignItems={"center"}
      >
         <img
          src={image}
          alt={name}
          style={{
            maxWidth: "68%",
            maxHeight: "73%",
            objectFit: "contain",
          }}
        />
      </Grid>
      <Grid
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <Typography sx={{ fontSize: "12px" }}>{name}</Typography>
      </Grid>
    </Grid>
  );
};
