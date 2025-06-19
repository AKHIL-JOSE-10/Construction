import { Box, Typography, Grid } from "@mui/material";

const sampleWorks = [
  "https://www.mmarchitecturalphotography.com/chicago-architectural-photographer/uploads/2016/01/south-haven-custom-home-interiors.jpg",
  "https://www.mmarchitecturalphotography.com/chicago-architectural-photographer/uploads/2016/01/south-haven-custom-home-interiors.jpg",
  "https://www.mmarchitecturalphotography.com/chicago-architectural-photographer/uploads/2016/01/south-haven-custom-home-interiors.jpg",
  "https://www.mmarchitecturalphotography.com/chicago-architectural-photographer/uploads/2016/01/south-haven-custom-home-interiors.jpg"
];

const MobWorkerMyWorks = () => {
  return (
    <Box sx={{ mt: 3, width: "100%" }}>
      <Typography sx={{ fontSize: 18, fontWeight: 600, px: 1, mb: 3 }}>
        My Works
      </Typography>

      <Grid
        container
        sx={{
          overflowX: "auto",
          flexWrap: "nowrap",
          pr: 2,
          gap: 2,
          scrollbarWidth: "none", // for Firefox
          "&::-webkit-scrollbar": { display: "none" }, // Chrome/Safari
        }}
      >
        {sampleWorks.map((img, index) => (
          <Grid
            item
            key={index}
            sx={{
              flexShrink: 0,
              width: 160,
              height: 100,
              borderRadius: 1,
              overflow: "hidden",
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            }}
          >
            <Box
              component="img"
              src={img}
              alt={`work-${index}`}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MobWorkerMyWorks;
