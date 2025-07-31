import { Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Components
import MobHeading from "@/modules/components/Mobile/mobileHeading";
import MobServiceCategoryList from "@/modules/components/Mobile/mobServiceCategoryList";
import BackToHomeButton from "./backToHome";

import LandScapeArchitect from "@/assets/LandScapeArchitectImg.png";
import CivilEngineer from "@/assets/CivilEngineerImg.png";
import InteriorDesign from "@/assets/InteriorDesignerImg.png";
import PoolDesigning from "@/assets/PoolDesignerImg.png";
import ArchitecturalDesigner from "@/assets/ArchitecturalDesignerImg.png";
import ConstructionContractor from "@/assets/ConstructionContractorImg.png";
import SteelFabricators from "@/assets/SteelFabricatorImg.png";
import StructuralEngineering from "@/assets/StructuralEngineerImg.png";
import MEP from "@/assets/MEPServiceProviderImg.png";

const MobAllServices = () => {
  const navigate = useNavigate();

  const serviceCategories = [
    { service: "Architectural Designers", img: ArchitecturalDesigner },
    { service: "Civil Engineers", img: CivilEngineer },
    { service: "Interior Designers", img: InteriorDesign },
    { service: "Landscaping architects", img: LandScapeArchitect },
    { service: "Structural Engineerings", img: StructuralEngineering },
    { service: "MEP Service providers", img: MEP },
    { service: "Pool Designers", img: PoolDesigning },
    { service: "Steel Fabricators", img: SteelFabricators },
    { service: "Construction Contractors", img: ConstructionContractor },
    { service: "Masons", img: InteriorDesign },
    { service: "Carpenters", img: InteriorDesign },
    { service: "Metal Fabricators", img: InteriorDesign },
    { service: "Electricians", img: InteriorDesign },
    { service: "Plumbers", img: InteriorDesign },
    { service: "Painters", img: InteriorDesign },
    { service: "Water Proofing Specialists", img: InteriorDesign },
    { service: "Flooring Installers", img: InteriorDesign },
    { service: "Security & Surveillance Specialists", img: InteriorDesign },
    { service: "Smart Home Automation Experts", img: InteriorDesign },
    { service: "Audio and Video System Integrators", img: InteriorDesign },
    { service: "Automated Smart Lock Installers", img: InteriorDesign },
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
    { service: "Civil Engineers", img: InteriorDesign },
    { service: "Structural Engineers", img: InteriorDesign },
    { service: "Electrical Engineers", img: InteriorDesign },
    { service: "MEP Engineers", img: InteriorDesign },
    { service: "Prefabrication Engineers", img: InteriorDesign },
    { service: "Acoustic(Sound) Engineers", img: InteriorDesign },
    { service: "Landscape Engineers", img: InteriorDesign },
    { service: "Geologists", img: InteriorDesign },
    { service: "Water Resources Engineers", img: InteriorDesign },
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
    <Box sx={{ pt: 2, pb: 8 }}>
      <MobHeading Heading="All Services" />
      <Grid container gap={0.5} justifyContent="center">
        {serviceCategories.map((item, index) => (
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

export default MobAllServices;
