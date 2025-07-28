import { Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MobServiceCategoryList from "@/modules/components/Mobile/mobServiceCategoryList";
import BackToHomeButton from "./backToHome";
import MobHeading from "@/modules/components/Mobile/mobileHeading";


import PoolDesigning from "@/assets/PoolDesignerImg.png";

const MobContractorServices = () => {
  const navigate = useNavigate();

  const contractorServices = [
    { service: "Civil contractors", img: PoolDesigning },
    { service: "MEP contractors", img: PoolDesigning },
    { service: "Electrical contractors", img: PoolDesigning },
    { service: "Plumbing contractors", img: PoolDesigning },
    { service: "Interior contractors", img: PoolDesigning },
    { service: "HVAC contractors", img: PoolDesigning },
    { service: "Carpentry contractors", img: PoolDesigning },
    { service: "Roofing contractors", img: PoolDesigning },
    { service: "Prefabricated framing contractors", img: PoolDesigning },
    { service: "Demolition contractors", img: PoolDesigning },
    { service: "Landscaping contractors", img: PoolDesigning },
    { service: "Painting contractors", img: PoolDesigning },
    { service: "Tiling contractors", img: PoolDesigning },
    { service: "Flooring contractors", img: PoolDesigning },
    { service: "Waterproofing contractors", img: PoolDesigning },
    { service: "Masonry contractors", img: PoolDesigning },
    { service: "Glass fabrication contractors", img: PoolDesigning },
    { service: "Exterior finishing contractors", img: PoolDesigning },
    { service: "Excavation contractors", img: PoolDesigning },
  ];

  const handleClick = (serviceName) => {
    navigate("/mobile-search-worker", { state: { selectedService: serviceName } });
  };

  return (
    <Box sx={{ px: 1, pt: 2, pb: 8, position: "relative" }}>
      <MobHeading Heading="Contractors" />
      <Grid container spacing={1.5} justifyContent="space-evenly">
        {contractorServices.map((item, index) => (
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

export default MobContractorServices;
