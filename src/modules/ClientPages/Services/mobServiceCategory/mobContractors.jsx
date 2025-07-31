import { Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MobServiceCategoryList from "@/modules/components/Mobile/mobServiceCategoryList";
import BackToHomeButton from "./backToHome";
import MobHeading from "@/modules/components/Mobile/mobileHeading";


import CivilEngineer from "@/assets/CivilEngineerImg.png";

const MobContractors = () => {
  const navigate = useNavigate();

  const contractorServices = [
    { service: "Civil contractors", img: CivilEngineer },
    { service: "MEP contractors", img: CivilEngineer },
    { service: "Electrical contractors", img: CivilEngineer },
    { service: "Plumbing contractors", img: CivilEngineer },
    { service: "Interior contractors", img: CivilEngineer },
    { service: "HVAC contractors", img: CivilEngineer },
    { service: "Carpentry contractors", img: CivilEngineer },
    { service: "Roofing contractors", img: CivilEngineer },
    { service: "Prefabricated framing contractors", img: CivilEngineer },
    { service: "Demolition contractors", img: CivilEngineer },
    { service: "Landscaping contractors", img: CivilEngineer },
    { service: "Painting contractors", img: CivilEngineer },
    { service: "Tiling contractors", img: CivilEngineer },
    { service: "Flooring contractors", img: CivilEngineer },
    { service: "Waterproofing contractors", img: CivilEngineer },
    { service: "Masonry contractors", img: CivilEngineer },
    { service: "Glass fabrication contractors", img: CivilEngineer },
    { service: "Exterior finishing contractors", img: CivilEngineer },
    { service: "Excavation contractors", img: CivilEngineer },
  ];

  const handleClick = (serviceName) => {
    navigate("/mobile-search-worker", { state: { selectedService: serviceName } });
  };

  return (
    <Box sx={{ pt: 2, pb: 8 }}>
      <MobHeading Heading="Contractors" />
      <Grid container gap={0.5} justifyContent="center">
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

export default MobContractors;
