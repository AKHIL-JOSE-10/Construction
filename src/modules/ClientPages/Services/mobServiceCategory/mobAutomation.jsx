import { Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MobHeading from "@/modules/components/Mobile/mobileHeading";
import MobServiceCategoryList from "@/modules/components/Mobile/mobServiceCategoryList";
import BackToHomeButton from "./backToHome";

import Security_Automation_Img from "@/assets/Security_Automation_Img.png";
import Smart_Home_Img from "@/assets/Smart_Home_Img.png";
import Smart_Lock_Img from "@/assets/Smart_Lock_Img.png";

const MobAutomation = () => {
  const navigate = useNavigate();

  const automationServices = [
    { service: "Security & Surveillance Specialists", img: Security_Automation_Img },
    { service: "Smart Home Automation Experts", img: Smart_Home_Img },
    { service: "Audio and Video System Integrators", img: Security_Automation_Img },
    { service: "Automated Smart Lock Installers", img: Smart_Lock_Img },
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
