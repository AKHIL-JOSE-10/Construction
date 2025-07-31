import React from "react";
import { Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MobHeading from "@/modules/components/Mobile/mobileHeading";
import MobServiceCategoryList from "@/modules/components/Mobile/mobServiceCategoryList";
import BackToHomeButton from "./backToHome";

import InteriorDesign from "@/assets/InteriorDesignerImg.png";

const MobFabricators = () => {
  const navigate = useNavigate();

  const fabricatorServices = [
    { service: "Aluminium Fabricators", img: InteriorDesign },
    { service: "Stainless Steel Fabricators", img: InteriorDesign },
    { service: "Mild Steel Fabricators", img: InteriorDesign },
    { service: "Glass Fabricators", img: InteriorDesign },
    { service: "Roofing Specialists", img: InteriorDesign },
  ];

  const handleClick = (serviceName) => {
    navigate("/mobile-search-worker", { state: { selectedService: serviceName } });
  };

  return (
    <Box sx={{ px: 1, pt: 2, pb: 8 }}>
      <MobHeading Heading="Fabricators" />

      <Grid container gap={0.5} justifyContent="center">
        {fabricatorServices.map((item, index) => (
          <Grid item key={index}>
            <MobServiceCategoryList
              title={item.service}
              img={item.img}
              onClick={() => handleClick(item.service)}
            />
          </Grid>
        ))}
      </Grid>

      <BackToHomeButton />
    </Box>
  );
};

export default MobFabricators;
