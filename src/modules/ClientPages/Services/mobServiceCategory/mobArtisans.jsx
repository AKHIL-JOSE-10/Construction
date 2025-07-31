import { Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MobHeading from "@/modules/components/Mobile/mobileHeading";
import MobServiceCategoryList from "@/modules/components/Mobile/mobServiceCategoryList";
import BackToHomeButton from "./backToHome";

import InteriorDesign from "@/assets/InteriorDesignerImg.png";

const MobArtisans = () => {
  const navigate = useNavigate();

  const artisansServices = [
    { service: "Masons", img: InteriorDesign },
    { service: "Carpenters", img: InteriorDesign },
    { service: "Metal Fabricators", img: InteriorDesign },
    { service: "Electricians", img: InteriorDesign },
    { service: "Plumbers", img: InteriorDesign },
    { service: "Painters", img: InteriorDesign },
    { service: "Water Proofing Specialists", img: InteriorDesign },
    { service: "Flooring Installers", img: InteriorDesign },
  ];

  const handleClick = (serviceName) => {
    navigate("/mobile-search-worker", { state: { selectedService: serviceName } });
  };

  return (
    <Box sx={{ px: 1, pt: 2, pb: 8 }}>
      <MobHeading Heading="Artisans Services" />

      <Grid container gap={0.5} justifyContent="center">
        {artisansServices.map((item, index) => (
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

export default MobArtisans;
