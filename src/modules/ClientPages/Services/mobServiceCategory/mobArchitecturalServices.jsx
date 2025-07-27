import { Grid, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

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
    <Box sx={{ px: 1, pt: 2 }}>
      <Typography variant="h6" fontWeight={600} mb={3}>
        Architectural Services
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {architecturalServices.map((service, index) => (
          <Grid item key={index}>
            <Box
              onClick={() => handleClick(service.service)}
              sx={{
                width: 160,
                borderRadius: 1,
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                bgcolor: "#fff",
              }}
            >
              <Box
                component="img"
                src={service.img}
                alt={service.service}
                sx={{
                  height: 'auto',
                  width: "100%",
                  objectFit: "cover",
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              />

              <Box sx={{ p: 1.2 }}>
                <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                  <Typography
                    variant="body1"
                    fontWeight={600}
                    fontSize={13}
                    textAlign="center"
                  >
                    {service.service}
                  </Typography>
                </Box>

                <Box display="flex" alignItems="center" justifyContent="center" mt={1}>
                  <Typography variant="body1" color="textSecondary" fontSize={10}>
                    1k users Booked
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" mt={5}>
        <Box
          onClick={() => navigate("/")}
          sx={{
            px: 4,
            py: 1.5,
            bgcolor: "#444",
            color: "#fff",
            borderRadius: "30px",
            cursor: "pointer",
            fontWeight: 500,
            fontSize: 14,
          }}
        >
          Back to Home
        </Box>
      </Box>
    </Box>
  );
};

export default MobArchitecturalServices;

