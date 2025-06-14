import { Grid, Box } from "@mui/material";
import MobHeading from "@/modules/components/Mobile/mobileHeading";
import MobServiceCategoryList from "@/modules/components/Mobile/mobServiceCategoryList";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import HandymanIcon from "@mui/icons-material/Handyman";
import RoofingIcon from "@mui/icons-material/Roofing";
import BuildIcon from "@mui/icons-material/Build";
import LayersIcon from "@mui/icons-material/Layers";
import Roofing from "@/assets/Roofing.png";
import Glass from "@/assets/Glass.png";
import Steel from "@/assets/Steel.png";
import MobileBottomTab from "@/modules/components/Mobile/mobileBottomTab";
import MetalFabrication from "@/assets/MetalFabrication.png";

const MobFabricationServices = () => {
  const fabricationServices = [
    {
      service: "Aluminium Fabrication",
      img: MetalFabrication,
      description: "Doors, windows, and structural fittings",
    },
    {
      service: "Stainless Steel Fabrication",
      img: MetalFabrication,
      description: "Railings, grills, and modern steel designs",
    },
    {
      service: "Roofing Solutions",
      img: Roofing,
      description: "Metal, sheet, and industrial roof works",
    },
    {
      service: "Mild Steel Fabrication",
      img: MetalFabrication,
      description: "Mild steel gates, frames, and supports",
    },
    {
      service: "Glass Fabrication",
      img: Glass,
      description: "Partitions, railings, and glass structures",
    },
  ];
  return (
    <Grid container>
      <MobHeading Heading="Fabrication Services" />
      <Box sx={{ width: "100%", mt: 8 }}>
        {fabricationServices.map((service, index) => (
          <MobServiceCategoryList
            key={index}
            img={service.img}
            heading={service.service}
            subheading={service.description}
          />
        ))}
      </Box>
    </Grid>
  );
};

export default MobFabricationServices;
