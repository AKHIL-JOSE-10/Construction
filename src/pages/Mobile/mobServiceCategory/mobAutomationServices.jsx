import { Grid, Box } from '@mui/material';
import MobHeading from "../../../modules/components/Mobile/mobileHeading";
import MobServiceCategoryList from '../../../modules/components/Mobile/mobServiceCategoryList';
import ArchitectIcon from '../../../assets/ArchitectIcon.png';
import StructuralIcon from '../../../assets/StructuralIcon.png';
import LandscapingIcon from '../../../assets/LandscapingIcon.png';
import InteriorIcon from '../../../assets/InteriorIcon.png';
import CarpentersIcon from '../../../assets/CarpentersIcon.png';
import CivilIcon from '../../../assets/CivilIcon.png';
import ContractorsIcon from '../../../assets/ContractorsIcon.png';
import PlumbersIcon from '../../../assets/PlumbersIcon.png';
import MobileBottomTab from '../../../modules/components/Mobile/mobileBottomTab';

const MobAutomationServices = () => {
  return (
     <Grid container>
      <MobHeading Heading='Automation Services' />
      <Box sx={{ width: '100%', mt: 8 }}>
        <MobServiceCategoryList
          img={ArchitectIcon}
          heading="Security and CCTV"
          subheading="Plan, design, and oversee construction"
        />
        <MobServiceCategoryList
          img={StructuralIcon}
          heading="Home Automation"
          subheading="Enhance interior functionality and aesthetics"
        />
        <MobServiceCategoryList
          img={LandscapingIcon}
          heading="Audio and Video"
          subheading="Design and maintain outdoor environments"
        />
        <MobServiceCategoryList
          img={InteriorIcon}
          heading="Locks Automation"
          subheading="Ensure building stability and strength"
        />
      </Box>
      <MobileBottomTab />
    </Grid>
  )
}

export default MobAutomationServices