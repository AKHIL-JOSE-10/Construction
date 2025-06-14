import { Grid, Box } from "@mui/material";
import MobHeading from "../../../components/Mobile/mobileHeading";
import MobileBottomTab from "../../../components/Mobile/mobileBottomTab";
import MobMyBookingsTopTab from "../../../components/Mobile/mobMyBookings/mobMyBookingsTopTab";

const MobMyBookings = () => {
  return (
    <Grid container sx={{ width: "100vw" , bgcolor: "#fefaf7"}}>
      <MobHeading Heading="My Bookings" backArrow={false} />
      <Box sx={{ width: "100%",  }}>
        <MobMyBookingsTopTab />
        <MobileBottomTab />
      </Box>
    </Grid>
  );
};

export default MobMyBookings;
