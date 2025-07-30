import { Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MobServiceCategoryList from "@/modules/components/Mobile/mobServiceCategoryList";
import BackToHomeButton from "./backToHome";
import MobHeading from "@/modules/components/Mobile/mobileHeading";

import LandScapeArchitect from "@/assets/LandScapeArchitectImg.png";
import CivilEngineer from "@/assets/CivilEngineerImg.png";
import InteriorDesign from "@/assets/InteriorDesignerImg.png";
import PoolDesigning from "@/assets/PoolDesignerImg.png";
import ArchitecturalDesigner from "@/assets/ArchitecturalDesignerImg.png";
import ConstructionContractor from "@/assets/ConstructionContractorImg.png";
import SteelFabricators from "@/assets/SteelFabricatorImg.png";
import StructuralEngineering from "@/assets/StructuralEngineerImg.png";
import MEP from "@/assets/MEPServiceProviderImg.png";

const MobArchitecturalServices = () => {
  const navigate = useNavigate();

  const architecturalServices = [
    { service: "Architectural Designers", img: ArchitecturalDesigner },
    { service: "Civil Engineers", img: CivilEngineer },
    { service: "Interior Designers", img: InteriorDesign },
    { service: "Landscaping architects", img: LandScapeArchitect },
    { service: "Structural Engineerings", img: StructuralEngineering },
    { service: "MEP Service providers", img: MEP },
    { service: "Pool Designers", img: PoolDesigning },
    { service: "Steel Fabricators", img: SteelFabricators },
    { service: "Construction Contractors", img: ConstructionContractor },
  ];

  const handleClick = (serviceName) => {
    navigate("/mobile-search-worker", { state: { selectedService: serviceName } });
  };

  return (
    <Box sx={{ px: 1, pt: 2, pb: 8}}>
      <MobHeading Heading="Architects" />

      <Grid container  gap={0.5} justifyContent="center">
        {architecturalServices.map((item, index) => (
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

export default MobArchitecturalServices;
