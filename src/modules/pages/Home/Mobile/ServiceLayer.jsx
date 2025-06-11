import { Grid, Typography } from "@mui/material";
import { textDecoration, color } from "./constants";
import { useNavigate } from "react-router-dom";
export const ServiceLayer = (props) => {
  const { name, path } = props?.data || {};
  const navigate = useNavigate();
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
        {/* <img src={`/assets/Images/Icons/${encodeURIComponent(`${name}.png`)}`} width={"60%"} height={"60%"}/> */}
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
