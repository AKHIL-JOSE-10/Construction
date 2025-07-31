import { Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MobHeading from "@/modules/components/Mobile/mobileHeading";
import MobServiceCategoryList from "@/modules/components/Mobile/mobServiceCategoryList";
import BackToHomeButton from "./backToHome";

import InteriorDesign from "@/assets/InteriorDesignerImg.png";

const MobAutomation = () => {
  const navigate = useNavigate();

  const automationServices = [
    { service: "Security & Surveillance Specialists", img: InteriorDesign },
    { service: "Smart Home Automation Experts", img: InteriorDesign },
    { service: "Audio and Video System Integrators", img: InteriorDesign },
    { service: "Automated Smart Lock Installers", img: InteriorDesign },
  ];

  const handleClick = (serviceName) => {
    navigate("/mobile-search-worker", { state: { selectedService: serviceName } });
  };

  return (
    <Box sx={{ px: 1, pt: 2, pb: 8 }}>
      <MobHeading Heading="Automation Services" />

      <Grid container gap={0.5} justifyContent="center">
        {automationServices.map((item, index) => (
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

export default MobAutomation;
