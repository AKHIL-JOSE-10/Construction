import React from "react";
import { Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MobHeading from "@/modules/components/Mobile/mobileHeading";
import MobServiceCategoryList from "@/modules/components/Mobile/mobServiceCategoryList";
import BackToHomeButton from "./backToHome";

import Aluminium_Fabricator_Img from "@/assets/Aluminium_Fabricator_Img.png";
import Stainless_Steel_Fabricator_Img from "@/assets/Stainless_Steel_Fabricator_Img.png";
import Mild_Steel_Fabricator_Img from "@/assets/Mild_Steel_Fabricator_Img.png";
import Glass_Fabricators_Img from "@/assets/Glass_Fabricators_Img.png";
import Roofing_Specialist_Img from "@/assets/Roofing_Specialist_Img.png";


const MobFabricators = () => {
  const navigate = useNavigate();

  const fabricatorServices = [
    { service: "Aluminium Fabricators", img: Aluminium_Fabricator_Img },
    { service: "Stainless Steel Fabricators", img: Stainless_Steel_Fabricator_Img },
    { service: "Mild Steel Fabricators", img: Mild_Steel_Fabricator_Img },
    { service: "Glass Fabricators", img: Glass_Fabricators_Img },
    { service: "Roofing Specialists", img: Roofing_Specialist_Img },
  ];

  const handleClick = (serviceName) => {
    navigate("/mobile-search-worker", { state: { selectedService: serviceName } });
  };

  return (
    <Box sx={{  pt: 2, pb: 8 }}>
      <MobHeading Heading="Fabricators" />

      <Grid container gap={0.5} justifyContent="space-evenly">
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
