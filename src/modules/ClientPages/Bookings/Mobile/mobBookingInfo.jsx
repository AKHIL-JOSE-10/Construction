import {
  Grid,
  Typography,
  Box,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import MobHeading from "../../../components/Mobile/mobileHeading";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VerifiedIcon from "@mui/icons-material/Verified";

const MobBookingInfo = () => {
  return (
    <Grid container>
      <MobHeading Heading="Booking info" />
      <Grid sx={{ px: 2, mt: 8, width: "100%" }}>
        <Box>
          <Typography sx={{ fontSize: "23px", fontWeight: "600" }}>
            Plumping Service
          </Typography>
          <Typography sx={{ fontSize: 14, color: "grey", mb: 2 }}>
            Booking ID : #7082195
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Typography sx={{ fontSize: "15px", fontWeight: "550", mr: 1 }}>
              Booking Confirmed by worker
            </Typography>
            <VerifiedIcon sx={{ color: "green", fontSize: 20 }} />
          </Box>
        </Box>

        <Grid>
          <Typography sx={{ fontSize: "16px", fontWeight: "550", mb: 2 }}>
            Service Details
          </Typography>
          <Accordion
            defaultExpanded
            sx={{
              borderRadius: 1,
              border: "1px solid brown",
              overflow: "hidden",
              mb: 3,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography sx={{ fontSize: "17px", fontWeight: "545" }}>
                Plumping Service
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{ display: "flex", alignItems: "center", mb: 1, mt: -1 }}
              >
                <Box sx={{ flex: 1, height: "1px", bgcolor: "#ccc" }} />
                <Box sx={{ flex: 1, height: "1px", bgcolor: "#ccc" }} />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  my: 2,
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: "15px", color: "grey" }}>
                    Start date
                  </Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: "550" }}>
                    Wed, march 7
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "15px", color: "grey" }}>
                    Time Slot
                  </Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: "550" }}>
                    9:00 am-5 pm
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Box sx={{ flex: 1, height: "1px", bgcolor: "#ccc" }} />
                <Box sx={{ flex: 1, height: "1px", bgcolor: "#ccc" }} />
              </Box>

              <Box sx={{ my: 2 }}>
                <Typography sx={{ fontSize: "15px", color: "grey" }}>
                  Worker
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: "550", mr: 1 }}
                  >
                    Jane Cooper
                  </Typography>
                  <VerifiedIcon sx={{ color: "purple", fontSize: 20 }} />
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Box sx={{ flex: 1, height: "1px", bgcolor: "#ccc" }} />
                <Box sx={{ flex: 1, height: "1px", bgcolor: "#ccc" }} />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  my: 2,
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: "15px", color: "grey" }}>
                    Worker contact info
                  </Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: "550" }}>
                    +91 98xxxxxxxx
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "15px", color: "grey" }}>
                    Service Duration
                  </Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: "550" }}>
                    1 month
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Box sx={{ flex: 1, height: "1px", bgcolor: "#ccc" }} />
                <Box sx={{ flex: 1, height: "1px", bgcolor: "#ccc" }} />
              </Box>

              <Box sx={{ my: 2 }}>
                <Typography sx={{ fontSize: "15px", color: "grey" }}>
                  Special Instruction
                </Typography>
                <Box>
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: "550", mr: 1 }}
                  >
                    Gate is locked, call on arrival
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Box sx={{ flex: 1, height: "1px", bgcolor: "#ccc" }} />
                <Box sx={{ flex: 1, height: "1px", bgcolor: "#ccc" }} />
              </Box>

              <Box sx={{ mt: 2 }}>
                <Typography sx={{ fontSize: "15px", color: "grey" }}>
                  City / Area
                </Typography>
                <Box>
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: "550", mr: 1 }}
                  >
                    Thrissur, arnattukara, National Studio
                  </Typography>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Grid>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  m1: 2,
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: "14px", fontWeight: "550" }}>
                    Service Sub Total
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "15px", fontWeight: "550" }}>
                    12700 Rs
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  my: 1,
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: "14px", fontWeight: "550" }}>
                    Processing fee
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "15px", fontWeight: "550" }}>
                    100 Rs
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  my: 1,
                }}
              >
                <Box>
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: "550", color: "grey" }}
                  >
                    Promo code (20% OFF)
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{ fontSize: "15px", fontWeight: "550", color: "grey" }}
                  >
                    110 Rs
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  my: 1,
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: "14px", fontWeight: "550" }}>
                    Booking Cost
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "15px", fontWeight: "550" }}>
                    12000 Rs
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Box sx={{ flex: 1, height: "1px", bgcolor: "#ccc" }} />
              <Box sx={{ flex: 1, height: "1px", bgcolor: "#ccc" }} />
            </Box>

            <Typography
              sx={{
                mt: 3,
                fontSize: 13,
                lineHeight: 1.2,
                textAlign: "justify",
                color: "grey",
              }}
            >
              You won’t be charged until the job is completed.
            </Typography>
          </Grid>

          <Box sx={{ display: "flex", flexDirection: "row", gap: 2, my: 2 }}>
            <Button
              variant="outlined"
              sx={{ borderRadius: 5, border: "1px solid black", color: "#434966", fontWeight: "600" }}
            >
              Cancel booking
            </Button>
            <Button
              variant="contained"
              sx={{ borderRadius: 5 }}
            >
              Pay now
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MobBookingInfo;
