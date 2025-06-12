import { Grid, Box } from '@mui/material';
import MobHeading from "../../../modules/components/Mobile/mobileHeading";
import MobServiceCategoryList from '../../../modules/components/Mobile/mobServiceCategoryList';
import MobileBottomTab from '../../../modules/components/Mobile/mobileBottomTab';
import CCTV from '../../../assets/CCTV.png';
import Automation from '../../../assets/Automation.png';
import AudioVideo from '../../../assets/AudioVideo.png';
import SmartLock from '../../../assets/SmartLock.png';

const MobAutomationServices = () => {
  return (
     <Grid container>
      <MobHeading Heading='Automation Services' />
      <Box sx={{ width: '100%', mt: 8 }}>
        <MobServiceCategoryList
          img={CCTV}
          heading="Security and CCTV"
          subheading="Plan, design, and oversee construction"
        />
        <MobServiceCategoryList
          img={Automation}
          heading="Home Automation"
          subheading="Enhance interior functionality and aesthetics"
        />
        <MobServiceCategoryList
          img={AudioVideo}
          heading="Audio and Video"
          subheading="Design and maintain outdoor environments"
        />
        <MobServiceCategoryList
          img={SmartLock}
          heading="Locks Automation"
          subheading="Ensure building stability and strength"
        />
      </Box>
      <MobileBottomTab />
    </Grid>
  )
}

export default MobAutomationServices