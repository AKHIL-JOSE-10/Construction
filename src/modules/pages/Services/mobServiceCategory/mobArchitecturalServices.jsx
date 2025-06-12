import { Grid, Box } from '@mui/material';
<<<<<<< HEAD:src/pages/Mobile/mobServiceCategory/mobArchitecturalServices.jsx
import MobHeading from "../../../modules/components/Mobile/mobileHeading";
import MobServiceCategoryList from '../../../modules/components/Mobile/mobServiceCategoryList';
import LandScaping from '../../../assets/LandScaping.png';
import CivilEngineer from '../../../assets/CivilEngineer.png';
import InteriorDesign from '../../../assets/InteriorDesign.png';
import PoolDesigning from '../../../assets/PoolDesigning.png';
import Architect from '../../../assets/Architect.png';
import Contractor from '../../../assets/Architect.png';

import MobileBottomTab from '../../../modules/components/Mobile/mobileBottomTab';
=======
import EngineeringIcon from '@mui/icons-material/Engineering';
import MobHeading from "@/modules/components/Mobile/mobileHeading";
import MobServiceCategoryList from '@/modules/components/Mobile/mobServiceCategoryList';
import MobileBottomTab from '@/modules/components/Mobile/mobileBottomTab';
>>>>>>> 1cfc283819ca55cb73dbbfc34d4d0f640fdfbcde:src/modules/pages/Services/mobServiceCategory/mobArchitecturalServices.jsx

const MobArchitecturalServices = () => {
  return (
    <Grid container>
      <MobHeading Heading='Architectural Services' />
      <Box sx={{ width: '100%', mt: 8,mb:7}}>
        <MobServiceCategoryList
          img={Architect}
          heading="Architects"
          subheading="Create innovative building designs and plans"
        />
        <MobServiceCategoryList
          img={CivilEngineer}
          heading="Civil Engineers"
          subheading="Plan, design, and oversee construction"
        />
        <MobServiceCategoryList
          img={InteriorDesign}
          heading="Interior Designers"
          subheading="Enhance interior functionality and aesthetics"
        />
        <MobServiceCategoryList
          img={LandScaping}
          heading="Landscapers"
          subheading="Design and maintain outdoor environments"
        />
        <MobServiceCategoryList
          img={""}
          heading="Structural"
          subheading="Ensure building stability and strength"
        />
        <MobServiceCategoryList
          img={""}
          heading="MEP"
          subheading="Design mechanical, electrical, and plumbing systems"
        />
        <MobServiceCategoryList
          img={PoolDesigning}
          heading="Pool Designers"
          subheading="Plan and design residential and commercial pools"
        />
        <MobServiceCategoryList
          img={""}
          heading="Steel Fabricators"
          subheading="Create structural steel components and assemblies"
        />
        <MobServiceCategoryList
          img={Contractor}
          heading="Contractors"
          subheading="Execute and manage full construction projects"
        />
      </Box>
      <MobileBottomTab />
    </Grid>
  );
};

export default MobArchitecturalServices;
