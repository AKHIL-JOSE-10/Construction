import { Grid, Box } from "@mui/material";
import MobHeading from "@/modules/components/Mobile/mobileHeading";
import MobServiceCategoryList from "@/modules/components/Mobile/mobServiceCategoryList";
import MobileBottomTab from "@/modules/components/Mobile/mobileBottomTab";
import CCTV from "@/assets/CCTV.png";
import Automation from "@/assets/Automation.png";
import AudioVideo from "@/assets/AudioVideo.png";
import SmartLock from "@/assets/SmartLock.png";
import { useNavigate } from "react-router-dom";

const MobAutomationServices = () => {
  const navigate = useNavigate();

  const automationServices = [
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
  ];

  const handleClick = () => {
    navigate("/mobile-search-worker");
  };

  return (
    <Grid container>
      <MobHeading Heading="Automation Services" />
      <Box sx={{ width: "100%", mt: 8 }}>
        {automationServices.map((service, index) => (
          <Box key={index} onClick={handleClick} sx={{ cursor: "pointer" }}>
            <MobServiceCategoryList
              img={service.img}
              heading={service.service}
              subheading={service.description}
            />
          </Box>
        ))}
      </Box>
    </Grid>
  );
};

export default MobAutomationServices;
