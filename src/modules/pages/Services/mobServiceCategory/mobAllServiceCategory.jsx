import { Grid, Box } from "@mui/material";
import MobHeading from "@/modules/components/Mobile/mobileHeading";
import MobServiceCategoryList from "@/modules/components/Mobile/mobServiceCategoryList";
import ArchitectIcon from "@/assets/ArchitectIcon.png";
import StructuralIcon from "@/assets/StructuralIcon.png";
import LandscapingIcon from "@/assets/LandscapingIcon.png";
import InteriorIcon from "@/assets/InteriorIcon.png";
import CarpentersIcon from "@/assets/CarpentersIcon.png";
import CivilIcon from "@/assets/CivilIcon.png";
import ContractorsIcon from "@/assets/ContractorsIcon.png";
import PlumbersIcon from "@/assets/PlumbersIcon.png";
import ElectriciansIcon from "@/assets/ElectriciansIcon.png";
import RoofingIcon from "@/assets/RoofingIcon.png";
import FlooringIcon from "@/assets/FlooringIcon.png";
import SteelIcon from "@/assets/SteelIcon.png";
import GlassIcon from "@/assets/GlassIcon.png";
import SkillfulIcon from "@/assets/SkillfulIcon.png";
import ArtisticIcon from "@/assets/ArtisticIcon.png";
import AluminiumIcon from "@/assets/AluminiumIcon.png";
import MobileBottomTab from "@/modules/components/Mobile/mobileBottomTab";

const MobAllServiceCategory = () => {
  const serviceCategories = [
    {
      img: ArchitectIcon,
      heading: "Architect",
      subheading: "Plan buildings and layouts",
    },
    {
      img: StructuralIcon,
      heading: "Structural",
      subheading: "Check building strength and safety",
    },
    {
      img: LandscapingIcon,
      heading: "Landscaping",
      subheading: "Design outdoor spaces",
    },
    {
      img: InteriorIcon,
      heading: "Interior",
      subheading: "Style and plan indoor areas",
    },
    { img: CivilIcon, heading: "Civil", subheading: "Build houses and more" },
    {
      img: ContractorsIcon,
      heading: "Contractors",
      subheading: "Manage construction work",
    },
    {
      img: CarpentersIcon,
      heading: "Carpentry",
      subheading: "Build and fix woodwork",
    },
    {
      img: PlumbersIcon,
      heading: "Plumbing",
      subheading: "Fix pipes and water systems",
    },
    {
      img: ElectriciansIcon,
      heading: "Electrical",
      subheading: "Install and repair wiring",
    },
    {
      img: RoofingIcon,
      heading: "Roofing",
      subheading: "Work on roofs and coverings",
    },
    {
      img: FlooringIcon,
      heading: "Flooring",
      subheading: "Install and finish all types of floors",
    },
    {
      img: AluminiumIcon,
      heading: "Aluminium",
      subheading: "Craft doors, windows, and frames",
    },
    {
      img: SteelIcon,
      heading: "Steel",
      subheading: "Shape and weld structural metal",
    },
    {
      img: GlassIcon,
      heading: "Glass",
      subheading: "Cut and install glass fittings",
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
  ];

  return (
    <Grid container>
      <MobHeading Heading="Service Category" />
      <Box sx={{ width: "100%", mt: -1 }}>
        {serviceCategories.map((service, index) => (
          <MobServiceCategoryList
            key={index}
            img={service.img}
            heading={service.heading}
            subheading={service.subheading}
          />
        ))}
      </Box>
      <MobileBottomTab />
    </Grid>
  );
};

export default MobAllServiceCategory;
