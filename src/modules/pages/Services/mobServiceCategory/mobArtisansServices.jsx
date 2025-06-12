import { Grid, Box } from "@mui/material";
import MobHeading from "@/modules/components/Mobile/mobileHeading";
import MobServiceCategoryList from "@/modules/components/Mobile/mobServiceCategoryList";
import BuildIcon from "@mui/icons-material/Build";
import Electrician from "@/assets/Electrician.png";
import Plumber from "@/assets/Plumber.png";
import Painter from "@/assets/Painter.png";
import Flooring from "@/assets/Flooring.png";
import Carpentry from "@/assets/Carpentry.png";
import Masonary from "@/assets/Masonary.png";
import WaterProofing from "@/assets/WaterProofing.png";
import MobileBottomTab from "@/modules/components/Mobile/mobileBottomTab";

const MobArtisansServices = () => {
  return (
    <Grid container>
      <MobHeading Heading="Artisans Services" />
      <Box sx={{ width: "100%", mt: 8, pb: 7 }}>
        <MobServiceCategoryList
          img={Masonary}
          heading="Masonry"
          subheading="Brickwork and structural craftsmanship"
        />
        <MobServiceCategoryList
          img={Carpentry}
          heading="Carpentry"
          subheading="Woodwork for furniture and fittings"
        />
        <MobServiceCategoryList
          img={<BuildIcon fontSize="large" />}
          heading="Fabrications"
          subheading="Metalwork for frames and structures"
        />
        <MobServiceCategoryList
          img={Electrician}
          heading="Electrical"
          subheading="Wiring, lighting and electrical fixes"
        />
        <MobServiceCategoryList
          img={Plumber}
          heading="Plumbing"
          subheading="Water supply and pipe installations"
        />
        <MobServiceCategoryList
          img={Painter}
          heading="Painting"
          subheading="Interior and exterior painting"
        />
        <MobServiceCategoryList
          img={WaterProofing}
          heading="Waterproofing"
          subheading="Sealants and moisture protection"
        />
        <MobServiceCategoryList
          img={Flooring}
          heading="Flooring"
          subheading="Tile, marble, and wooden floor work"
        />
      </Box>
      <MobileBottomTab />
    </Grid>
  );
};

export default MobArtisansServices;
