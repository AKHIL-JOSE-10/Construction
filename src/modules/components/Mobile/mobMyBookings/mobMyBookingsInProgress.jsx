import { Grid, Button, Typography } from "@mui/material";
import MobMyBookingcard from "./mobMyBookingscard";
import { Link } from "react-router-dom";

const MobMyBookingsInProgress = () => {
  const renderBookingCard = () => (
    <Link
      to="/mobile-booking-info"
      style={{
        textDecoration: "none",
        color: "inherit",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <MobMyBookingcard Heading="Processing">
        <Button
          variant="outlined"
          onClick={(e) => e.stopPropagation()} // Prevents triggering Link if button is clicked
          sx={{
            borderRadius: "50px",
            textTransform: "none",
            px: 2,
            borderColor: "#333333",
            color: "#333333",
            "&:hover": {
              borderColor: "black",
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          <Typography sx={{ fontSize: 12, fontWeight: "bold" }}>
            Mark as completed
          </Typography>
        </Button>
      </MobMyBookingcard>
    </Link>
  );

  return (
    <Grid>
      {renderBookingCard()}
      {renderBookingCard()}
      {renderBookingCard()}
    </Grid>
  );
};

export default MobMyBookingsInProgress;
