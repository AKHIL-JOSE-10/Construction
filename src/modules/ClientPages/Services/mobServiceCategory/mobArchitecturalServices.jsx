import { Grid, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import LandScapeArchitect from "@/assets/LandScapeArchitectImg.png";
import CivilEngineer from "@/assets/CivilEngineerImg.png";
import InteriorDesign from "@/assets/InteriorDesignerImg.png";
import PoolDesigning from "@/assets/PoolDesignerImg.png";
import ArchitecturalDesigner from "@/assets/ArchitecturalDesignerImg.png";
import ConstructionContractor from "@/assets/ConstructionContractorImg.png";
import SteelFabricators from "@/assets/SteelFabricatorImg.png";
import StructuralEngineering from "@/assets/StructuralEngineerImg.png";
import MEP from "@/assets/MEPServiceProviderImg.png";

import MobHeading from "@/modules/components/Mobile/mobileHeading";

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
    <Box sx={{ px: 1, pt: 2, pb: 8, position: "relative", bgcolor:"rgba(250, 249, 249, 1)" }}>
      <MobHeading Heading="Architects" />

<Grid container spacing={2} justifyContent="space-evenly">
  {architecturalServices.map((service, index) => (
    <Grid item key={index}>
      <Box
        onClick={() => handleClick(service.service)}
        sx={{
          width: 160,
          bgcolor: "#fff",
          borderRadius: 1,
          boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
          cursor: "pointer",
          p: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={service.img}
          alt={service.service}
          sx={{
            width: "100%",
            height: 90,
            objectFit: "cover",
            borderRadius: 1,
          }}
        />

        <Typography
          fontSize={13}
          fontWeight={600}
          mt={1}
          noWrap
        >
          {service.service}
        </Typography>
      </Box>
    </Grid>
  ))}
</Grid>


      {/* Fixed Bottom Button */}
<Box
  sx={{
    position: "fixed",
    bottom: 5,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    zIndex: 1000,
  }}
>
  <Box
    onClick={() => navigate(-1)}
    sx={{
      px: 4,
      py: 1.5,
      bgcolor: "#444",
      color: "#fff",
      borderRadius: "30px",
      cursor: "pointer",
      fontWeight: 500,
      fontSize: 14,
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)", // <- Updated
    }}
  >
    Back to Home
  </Box>
</Box>
    </Box>
  );
};

export default MobArchitecturalServices;
