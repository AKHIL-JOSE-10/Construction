import { Grid, Box } from '@mui/material';
import EngineeringIcon from '@mui/icons-material/Engineering';
import MobHeading from "../../../modules/components/Mobile/mobileHeading";
import MobServiceCategoryList from '../../../modules/components/Mobile/mobServiceCategoryList';
import MobileBottomTab from '../../../modules/components/Mobile/mobileBottomTab';

const MobArchitecturalServices = () => {
  return (
    <Grid container>
      <MobHeading Heading='Architectural Services' />
      <Box sx={{ width: '100%', mt: 8 }}>
        <MobServiceCategoryList
          icon={<EngineeringIcon fontSize="large" />}
          heading="Architects"
          subheading="Create innovative building designs and plans"
        />
        <MobServiceCategoryList
          icon={<EngineeringIcon fontSize="large" />}
          heading="Civil Engineers"
          subheading="Plan, design, and oversee construction"
        />
        <MobServiceCategoryList
          icon={<EngineeringIcon fontSize="large" />}
          heading="Interior Designers"
          subheading="Enhance interior functionality and aesthetics"
        />
        <MobServiceCategoryList
          icon={<EngineeringIcon fontSize="large" />}
          heading="Landscapers"
          subheading="Design and maintain outdoor environments"
        />
        <MobServiceCategoryList
          icon={<EngineeringIcon fontSize="large" />}
          heading="Structural"
          subheading="Ensure building stability and strength"
        />
        <MobServiceCategoryList
          icon={<EngineeringIcon fontSize="large" />}
          heading="MEP"
          subheading="Design mechanical, electrical, and plumbing systems"
        />
        <MobServiceCategoryList
          icon={<EngineeringIcon fontSize="large" />}
          heading="Pool Designers"
          subheading="Plan and design residential and commercial pools"
        />
        <MobServiceCategoryList
          icon={<EngineeringIcon fontSize="large" />}
          heading="Steel Fabricators"
          subheading="Create structural steel components and assemblies"
        />
        <MobServiceCategoryList
          icon={<EngineeringIcon fontSize="large" />}
          heading="Contractors"
          subheading="Execute and manage full construction projects"
        />
      </Box>
      <MobileBottomTab />
    </Grid>
  );
};

export default MobArchitecturalServices;
