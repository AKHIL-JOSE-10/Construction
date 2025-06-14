import { Grid, Box } from "@mui/material";

// Components
import MobHeading from "@/modules/components/Mobile/mobileHeading";
import MobServiceCategoryList from "@/modules/components/Mobile/mobServiceCategoryList";


// Icons
import {
  Build,
  PrecisionManufacturing as PrecisionManufacturingIcon,
  Handyman as HandymanIcon,
  Roofing as RoofingIcon,
  Build as BuildIcon,
  Layers as LayersIcon,
} from "@mui/icons-material";

// Assets
import StructuralIcon from "@/assets/StructuralIcon.png";
import SkillfulIcon from "@/assets/SkillfulIcon.png";
import ArtisticIcon from "@/assets/ArtisticIcon.png";
import CivilEngineer from "@/assets/CivilEngineer.png";
import InteriorDesign from "@/assets/InteriorDesign.png";
import PoolDesigning from "@/assets/PoolDesigning.png";
import Electrician from "@/assets/Electrician.png";
import Plumber from "@/assets/Plumber.png";
import Painter from "@/assets/Painter.png";
import Flooring from "@/assets/Flooring.png";
import Carpentry from "@/assets/Carpentry.png";
import Masonary from "@/assets/Masonary.png";
import WaterProofing from "@/assets/WaterProofing.png";
import Roofing from "@/assets/Roofing.png";
import Glass from "@/assets/Glass.png";
import Steel from "@/assets/Steel.png";
import CCTV from "@/assets/CCTV.png";
import Automation from "@/assets/Automation.png";
import AudioVideo from "@/assets/AudioVideo.png";
import SmartLock from "@/assets/SmartLock.png";
import LandScaping from "@/assets/LandScaping.png";
import Contractor from "@/assets/Architect.png";
import MetalFabrication from "@/assets/MetalFabrication.png";
import StructuralEngineering from "@/assets/StructuralEngineering.png";
import MEP from "@/assets/MEP.png";
import Architect from "@/assets/Architect.png";

const MobAllServiceCategory = () => {
  const serviceCategories = [
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
      img: StructuralEngineering,
      description: "Ensure building stability and strength",
    },
    {
      service: "MEP Services",
      img: MEP,
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
    {
      service: "Masonry Work",
      img: Masonary,
      description: "Brickwork and structural craftsmanship",
    },
    {
      service: "Carpentry Services",
      img: Carpentry,
      description: "Woodwork for furniture and fittings",
    },
    {
      service: "Metal Fabrication",
      img: MetalFabrication,
      description: "Metalwork for frames and structures",
    },
    {
      service: "Electrical Services",
      img: Electrician,
      description: "Wiring, lighting and electrical fixes",
    },
    {
      service: "Plumbing Services",
      img: Plumber,
      description: "Water supply and pipe installations",
    },
    {
      service: "Painting Services",
      img: Painter,
      description: "Interior and exterior painting",
    },
    {
      service: "Waterproofing Solutions",
      img: WaterProofing,
      description: "Sealants and moisture protection",
    },
    {
      service: "Flooring Installation",
      img: Flooring,
      description: "Tile, marble, and wooden floor work",
    },
    {
      service: "Security & Surveillance",
      img: CCTV,
      description: "Plan, design, and oversee construction",
    },
    {
      service: "Smart Home Automation",
      img: Automation,
      description: "Enhance interior functionality and aesthetics",
    },
    {
      service: "Audio & Video Systems",
      img: AudioVideo,
      description: "Design and maintain outdoor environments",
    },
    {
      service: "Automated Smart Locks",
      img: SmartLock,
      description: "Ensure building stability and strength",
    },
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
      <MobHeading Heading="Service Category" />
      <Box sx={{ width: "100%", mt: 8 }}>
        {serviceCategories.map((service, index) => (
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

export default MobAllServiceCategory;
