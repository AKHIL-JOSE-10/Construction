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
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
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
    <Box sx={{ px: 1, pt: 2, pb: 8, position: "relative", }}>
      <MobHeading Heading="Architects" />

      <Grid container spacing={1.5} justifyContent="space-evenly">
        {architecturalServices.map((service, index) => (
          <Grid item key={index}>
            <Box
              onClick={() => handleClick(service.service)}
              sx={{
                width: 105,
                height: 110,
                borderRadius: 1,
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: "0px 3px 12px rgba(0, 0, 0, 0.1)",
                position: "relative",
              }}
            >
              <Box
                component="img"
                src={service.img}
                alt={service.service}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* Overlay text */}
              {/* Overlay text */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  bgcolor: "rgba(0, 0, 0, 0.6)",
                  color: "#fff",
                  textAlign: "center",
                  py: 0.5
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: "10px",             // Slightly smaller font
                    fontWeight: 600,
                    lineHeight: "1.8",            // Tight line spacing
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                    display: "block",
                  }}
                >
                  {service.service}
                </Typography>
              </Box>

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
            py: 1.2,
            bgcolor: "rgba(85, 84, 84, 1)",
            color: "#fff",
            borderRadius: "30px",
            cursor: "pointer",
            fontWeight: 500,
            fontSize: 12,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
            display: "flex",
            alignItems: "center",
            gap: 1, // spacing between icon and text
          }}
        >
          <ArrowBackIosIcon sx={{ fontSize: 18 }} />
          Back to Home
        </Box>

      </Box>
    </Box>
  );
};

export default MobArchitecturalServices;
