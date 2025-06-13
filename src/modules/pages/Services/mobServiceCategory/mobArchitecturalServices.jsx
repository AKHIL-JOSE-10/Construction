import { Grid, Box } from "@mui/material";
import MobHeading from "@/modules/components/Mobile/mobileHeading";
import MobServiceCategoryList from "@/modules/components/Mobile/mobServiceCategoryList";
import LandScaping from "@/assets/LandScaping.png";
import CivilEngineer from "@/assets/CivilEngineer.png";
import InteriorDesign from "@/assets/InteriorDesign.png";
import PoolDesigning from "@/assets/PoolDesigning.png";
import Architect from "@/assets/Architect.png";
import Contractor from "@/assets/Architect.png";
import MetalFabrication from "@/assets/MetalFabrication.png";
import StructuralEngineering from "@/assets/StructuralEngineering.png";
import MEP from "@/assets/MEP.png";
import MobileBottomTab from "@/modules/components/Mobile/mobileBottomTab";

const MobArchitecturalServices = () => {
  const architecturalServices = [
    {
      service: "Architectural Design",
      img: Architect,
      description: "Create innovative building designs and plans",
    },
    {
      service: "Civil Engineering",
      img: CivilEngineer,
      description: "Plan, design, and oversee construction",
    },
    {
      service: "Interior Design",
      img: InteriorDesign,
      description: "Enhance interior functionality and aesthetics",
    },
    {
      service: "Landscaping",
      img: LandScaping,
      description: "Design and maintain outdoor environments",
    },
    {
      service: "Structural Engineering",
      img:StructuralEngineering,
      description: "Ensure building stability and strength",
    },
    {
      service: "MEP Services",
      img:MEP,
      description: "Design mechanical, electrical, and plumbing systems",
    },
    {
      service: "Pool Design",
      img: PoolDesigning,
      description: "Plan and design residential and commercial pools",
    },
    {
      service: "Steel Fabrication",
      img: MetalFabrication,
      description: "Create structural steel components and assemblies",
    },
    {
      service: "Construction Contracting",
      img: Contractor,
      description: "Execute and manage full construction projects",
    },
  ];

  return (
    <Grid container>
      <MobHeading Heading="Architectural Services" />
      <Box sx={{ width: "100%", mt: 8, mb: 7 }}>
        {architecturalServices.map((service, index) => (
          <MobServiceCategoryList
            key={index}
            img={service.img}
            heading={service.service}
            subheading={service.description}
          />
        ))}
      </Box>
      <MobileBottomTab />
    </Grid>
  );
};

export default MobArchitecturalServices;
