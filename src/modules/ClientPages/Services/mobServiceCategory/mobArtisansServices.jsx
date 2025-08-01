import { Grid, Box } from "@mui/material";
import MobHeading from "@/modules/components/Mobile/mobileHeading";
import MobServiceCategoryList from "@/modules/components/Mobile/mobServiceCategoryList";
import Electrician from "@/assets/Electrician.png";
import Plumber from "@/assets/Plumber.png";
import Painter from "@/assets/Painter.png";
import Flooring from "@/assets/Flooring.png";
import Carpentry from "@/assets/Carpentry.png";
import Masonary from "@/assets/Masonary.png";
import WaterProofing from "@/assets/WaterProofing.png";
import MetalFabrication from "@/assets/MetalFabrication.png";
import { useNavigate } from "react-router-dom";

const MobArtisansServices = () => {
  const navigate = useNavigate();

  const artisansServices = [
    { service: "Masonry Work", img: Masonary, description: "Brickwork and structural craftsmanship" },
    { service: "Carpentry Services", img: Carpentry, description: "Woodwork for furniture and fittings" },
    { service: "Metal Fabrication", img: MetalFabrication, description: "Metalwork for frames and structures" },
    { service: "Electrical Services", img: Electrician, description: "Wiring, lighting and electrical fixes" },
    { service: "Plumbing Services", img: Plumber, description: "Water supply and pipe installations" },
    { service: "Painting Services", img: Painter, description: "Interior and exterior painting" },
    { service: "Waterproofing Solutions", img: WaterProofing, description: "Sealants and moisture protection" },
    { service: "Flooring Installation", img: Flooring, description: "Tile, marble, and wooden floor work" },
  ];

  const handleClick = (serviceName) => {
    navigate("/mobile-search-worker", { state: { selectedService: serviceName } });
  };

  return (
    <Grid container>
      <MobHeading Heading="Artisans Services" />
      <Box sx={{ width: "100%", mt: 8, pb: 7 }}>
        {artisansServices.map((service, index) => (
          <Box
            key={index}
            onClick={() => handleClick(service.service)}
            sx={{ cursor: "pointer" }}
          >
            <MobServiceCategoryList
              img={service.img}
              heading={service.service}
              subheading={service.description}
            />
          </Box>
        ))}
      </Box>
    </Grid>
  );
};

export default MobArtisansServices;
