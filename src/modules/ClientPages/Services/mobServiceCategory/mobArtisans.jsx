import { Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MobHeading from "@/modules/components/Mobile/mobileHeading";
import MobServiceCategoryList from "@/modules/components/Mobile/mobServiceCategoryList";
import BackToHomeButton from "./backToHome";

import Masons_Img from '@/assets/Masons_Img.png'
import Carpenters_Img from "@/assets/Carpenters_Img.png";
import Metal_Fabricators_Img from "@/assets/Metal_Fabricators_Img.png";
import Electrician_Img from "@/assets/Electrician_Img.png";
import Plumbers_Img from "@/assets/Plumbers_Img.png";
import Painters_Img from "@/assets/Painters_Img.png";
import WaterProofing_Img from "@/assets/WaterProofing_Img.png";
import Floor_Installation_Img from "@/assets/Floor_Installation_Img.png";



const MobArtisans = () => {
  const navigate = useNavigate();

  const artisansServices = [
    { service: "Masons", img: Masons_Img },
    { service: "Carpenters", img: Carpenters_Img },
    { service: "Metal Fabricators", img: Metal_Fabricators_Img },
    { service: "Electricians", img: Electrician_Img },
    { service: "Plumbers", img: Plumbers_Img },
    { service: "Painters", img: Painters_Img },
    { service: "Water Proofing Specialists", img: WaterProofing_Img },
    { service: "Flooring Installers", img: Floor_Installation_Img },
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
