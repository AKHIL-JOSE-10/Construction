import Architectural from '../../../../assets/Architectural.png';
import Fabrication from '../../../../assets/Fabrication.png'
import Artisans from '../../../../assets/Artisans.png';
import Automation from '../../../../assets/Automation.png';
import Education from '../../../../assets/Education.png';
import Legal from '../../../../assets/Legal.png';
import { Height } from '@mui/icons-material';




export const color = {
  primary: "rgba(176, 139, 111, 0.81)",
  dark: "rgba(114, 97, 84, 0.33)",
  layoutColor: "rgba(255, 252, 249, 1)",
  TextColorMain: "rgba(10, 6, 20, 0.75)",
  TextColorPrimary: "rgba(255, 255, 255, 1)",
  TextSecondary: "rgba(119, 119, 119, 1)",
};

export const textDecoration = {
  headerPrimary: {
    fontSize: "14px",
    color: color.TextColorPrimary,
  },
  headerSecondary: {
    fontSize: "11px",
    color: color.TextColorPrimary,
  },
  headingPrimaryDark: {
    fontSize: "1.1rem",
    color: color.TextColorMain,
    fontWeight: "600",
  },
  headingPrimaryColored: {
    color: color.primary,
  },
  serviceLayout: {
    minHeight:'70px',
    width:'85px',
    borderRadius:20,
    bgcolor: "rgba(207, 159, 95, 0.55)",
  },
};

export const ServiceListValues = [
  {
    name: "Architects",
    path: "./Images/Icons/Architects.png",
    description: "Plan buildings and layouts",
  },
  {
    name: "Structural Consultants",
    path: "./Images/Icons/Structural Consultants",
    description: "Check building strength and safety",
  },
  {
    name: "Landscaping Designers",
    path: "./Images/Icons/Landscaping Designers",
    description: "Design outdoor spaces",
  },
  {
    name: "Interior Designers",
    path: "./Images/Icons/Interior Designers",
    description: "Style and plan indoor areas",
  },
  {
    name: "Civil Engineers",
    path: "./Images/Icons/Civil Engineers",
    description: "Build houses and more",
  },
  {
    name: "Contractors",
    path: "./Images/Icons/Contractors",
    description: "Manage construction work",
  },
  {
    name: "Carpenters",
    path: "./Images/Icons/Carpenters",
    description: "Build and fix woodwork",
  },
  {
    name: "Plumbers",
    path: "./Images/Icons/Plumbers",
    description: "Fix pipes and water systems",
  },
  {
    name: "Electricians",
    path: "./Images/Icons/Electricians",
    description: "Install and repair wiring",
  },
  {
    name: "Roofing Technicians",
    path: "./Images/Icons/Roofing Technicians",
    description: "Work on roofs and coverings",
  },
  {
    name: "Flooring Professionals",
    path: "./Images/Icons/Flooring Professionals",
    description: "Install and finish all types of floors",
  },
  {
    name: "Aluminium Fabricators",
    path: "./Images/Icons/Aluminium Fabricators",
    description: "Craft doors, windows and frames",
  },
  {
    name: "Steel Fabricators",
    path: "./Images/Icons/Steel Fabricators",
    description: "Shape and weld structural metal",
  },
  {
    name: "Glass Fabricators",
    path: "./Images/Icons/Glass Fabricators",
    description: "Cut and install glass fittings",
  },
  {
    name: "Skillful Jobs",
    path: "./Images/Icons/Skillful Jobs",
    description: "Specialized hands-on work",
  },
  {
    name: "Aristic jobs",
    path: "./Images/Icons/Aristic jobs",
    description: "Design, branding, and creative art",
  },
];

export const ServiceList = [
  {
    name: "Architectural",
    path: "/mobile-architectural-services",
    image: Architectural
  },
  {
    name: "Artisans",
    path: "/mobile-artisans-services",
    image: Artisans
  },
  {
    name: "Fabrication",
    path: "/mobile-fabrication-services",
    image: Fabrication
  },
  {
    name: "Automation",
    path: "/mobile-automation-services",
    image: Automation
  },
  {
    name: "Educational",
    path: "",
    image: Education
  },
  {
    name: "Legal",
    path: "",
    image: Legal
  },
];
