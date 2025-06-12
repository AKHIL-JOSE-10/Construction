import { Grid, Box } from '@mui/material';
import MobHeading from "../../../modules/components/Mobile/mobileHeading";
import MobServiceCategoryList from '../../../modules/components/Mobile/mobServiceCategoryList';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import HandymanIcon from '@mui/icons-material/Handyman';
import RoofingIcon from '@mui/icons-material/Roofing';
import BuildIcon from '@mui/icons-material/Build';
import LayersIcon from '@mui/icons-material/Layers';
import Roofing from '../../../assets/Roofing.png';
import Glass from '../../../assets/Glass.png';
import Steel from '../../../assets/Steel.png';
import MobileBottomTab from '../../../modules/components/Mobile/mobileBottomTab';

const MobFabricationServices = () => {
  return (
    <Grid container>
      <MobHeading Heading='Fabrication Services' />
      <Box sx={{ width: '100%', mt:8 }}>
        <MobServiceCategoryList
          img={<PrecisionManufacturingIcon />}
          heading="Aluminium"
          subheading="Doors, windows, and structural fittings"
        />
        <MobServiceCategoryList
          img={Steel}
          heading="Stainless Steel"
          subheading="Railings, grills, and modern steel designs"
        />
        <MobServiceCategoryList
          img={Roofing}
          heading="Roofing Solutions"
          subheading="Metal, sheet, and industrial roof works"
        />
        <MobServiceCategoryList
          img={<BuildIcon />}
          heading="M.S. Fabrication"
          subheading="Mild steel gates, frames, and supports"
        />
        <MobServiceCategoryList
          img={Glass}
          heading="Glass Fabrication"
          subheading="Partitions, railings, and glass structures"
        />
      </Box>
      <MobileBottomTab />
    </Grid>
  );
};

export default MobFabricationServices;
