import { Grid, Box } from '@mui/material';
import MobHeading from "../../../modules/components/Mobile/mobileHeading";
import MobServiceCategoryList from '../../../modules/components/Mobile/mobServiceCategoryList';

import ConstructionIcon from '@mui/icons-material/Construction';
import CarpenterIcon from '@mui/icons-material/Carpenter';
import BuildIcon from '@mui/icons-material/Build';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import WaterDamageIcon from '@mui/icons-material/WaterDamage';
import CheckroomIcon from '@mui/icons-material/Checkroom';

import MobileBottomTab from '../../../modules/components/Mobile/mobileBottomTab';

const MobArtisansServices = () => {
  return (
    <Grid container >
      <MobHeading Heading='Artisans Services' />
      <Box sx={{ width: '100%', mt:8,pb:7 }}>
        <MobServiceCategoryList
          img={<ConstructionIcon fontSize="large" />}
          heading="Masonry"
          subheading="Brickwork and structural craftsmanship"
        />
        <MobServiceCategoryList
          img={<CarpenterIcon fontSize="large" />}
          heading="Carpentry"
          subheading="Woodwork for furniture and fittings"
        />
        <MobServiceCategoryList
          img={<BuildIcon fontSize="large" />}
          heading="Fabrications"
          subheading="Metalwork for frames and structures"
        />
        <MobServiceCategoryList
          img={<ElectricalServicesIcon fontSize="large" />}
          heading="Electrical"
          subheading="Wiring, lighting and electrical fixes"
        />
        <MobServiceCategoryList
          img={<PlumbingIcon fontSize="large" />}
          heading="Plumbing"
          subheading="Water supply and pipe installations"
        />
        <MobServiceCategoryList
          img={<FormatPaintIcon fontSize="large" />}
          heading="Painting"
          subheading="Interior and exterior painting"
        />
        <MobServiceCategoryList
          img={<WaterDamageIcon fontSize="large" />}
          heading="Waterproofing"
          subheading="Sealants and moisture protection"
        />
        <MobServiceCategoryList
          img={<CheckroomIcon fontSize="large" />}
          heading="Flooring"
          subheading="Tile, marble, and wooden floor work"
        />
      </Box>
      <MobileBottomTab />
    </Grid>
  );
};

export default MobArtisansServices;
