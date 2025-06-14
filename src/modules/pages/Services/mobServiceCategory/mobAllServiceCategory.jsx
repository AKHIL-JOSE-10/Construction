import { Grid, Box } from "@mui/material";
import MobHeading from "@/modules/components/Mobile/mobileHeading";
import MobServiceCategoryList from "@/modules/components/Mobile/mobServiceCategoryList";


// Icons
import { Build, PrecisionManufacturing } from "@mui/icons-material";

// Assets
import StructuralIcon from "@/assets/StructuralIcon.png";
import SkillfulIcon from "@/assets/SkillfulIcon.png";
import ArtisticIcon from "@/assets/ArtisticIcon.png";
import LandScaping from "@/assets/LandScaping.png";
import CivilEngineer from "@/assets/CivilEngineer.png";
import InteriorDesign from "@/assets/InteriorDesign.png";
import PoolDesigning from "@/assets/PoolDesigning.png";
import Architect from "@/assets/Architect.png";
import Contractor from "@/assets/Architect.png";
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

// Optional assets (placeholders if missing)
const HVAC = null; // You can replace with actual import
const MEP = null;

const MobAllServiceCategory = () => {
  const serviceCategories = [
    {
      img: Architect,
      heading: "Architects",
      subheading: "Create innovative building designs and plans",
    },
    {
      img: StructuralIcon,
      heading: "Structural",
      subheading: "Ensure building stability and strength",
    },
    {
      img: LandScaping,
      heading: "Landscapers",
      subheading: "Design and maintain outdoor environments",
    },
    {
      img: InteriorDesign,
      heading: "Interior Designers",
      subheading: "Enhance interior functionality and aesthetics",
    },
    {
      img: CivilEngineer,
      heading: "Civil Engineers",
      subheading: "Plan, design, and oversee construction",
    },
    {
      img: Contractor,
      heading: "Contractors",
      subheading: "Execute and manage full construction projects",
    },
    {
      img: Carpentry,
      heading: "Carpentry",
      subheading: "Woodwork for furniture and fittings",
    },
    {
      img: Plumber,
      heading: "Plumbing",
      subheading: "Fix pipes and water systems",
    },
    {
      img: Electrician,
      heading: "Electrical",
      subheading: "Install and repair wiring",
    },
    {
      img: Roofing,
      heading: "Roofing",
      subheading: "Work on roofs and coverings",
    },
    {
      img: Flooring,
      heading: "Flooring",
      subheading: "Install and finish all types of floors",
    },
    {
      img: <PrecisionManufacturing />,
      heading: "Aluminium",
      subheading: "Craft doors, windows, and frames",
    },
    {
      img: Steel,
      heading: "Stainless Steel",
      subheading: "Shape and weld structural metal",
    },
    {
      img: Glass,
      heading: "Glass",
      subheading: "Cut and install glass fittings",
    },
    {
      img: <Build />,
      heading: "M.S. Fabrication",
      subheading: "Mild steel gates, frames, and supports",
    },
    {
      img: Painter,
      heading: "Painting",
      subheading: "Interior and exterior painting",
    },
    {
      img: WaterProofing,
      heading: "Waterproofing",
      subheading: "Sealants and moisture protection",
    },
    {
      img: PoolDesigning,
      heading: "Pool Designers",
      subheading: "Plan and design residential and commercial pools",
    },
    {
      img: Masonary,
      heading: "Masonry",
      subheading: "Brickwork and structural craftsmanship",
    },

    // Automation
    {
      img: CCTV,
      heading: "Security & Surveillance",
      subheading: "Install and manage smart monitoring systems",
    },
    {
      img: Automation,
      heading: "Smart Home Automation",
      subheading: "Automate lighting, climate, and appliances",
    },
    {
      img: AudioVideo,
      heading: "Audio & Video Systems",
      subheading: "Home theatres, speakers, and media setups",
    },
    {
      img: SmartLock,
      heading: "Automated Smart Locks",
      subheading: "Smart access and security solutions",
    },

    // Other
    {
      img: HVAC || "",
      heading: "HVAC Solutions",
      subheading: "Air conditioning, heating, and ventilation systems",
    },
    {
      img: SkillfulIcon,
      heading: "Skillful",
      subheading: "Specialized hands-on work",
    },
    {
      img: ArtisticIcon,
      heading: "Artistic",
      subheading: "Design, branding, and creative art",
    },
    {
      img: MEP || "",
      heading: "MEP",
      subheading: "Design mechanical, electrical, and plumbing systems",
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
            heading={service.heading}
            subheading={service.subheading}
          />
        ))}
      </Box>
    </Grid>
  );
};

export default MobAllServiceCategory;
