import { Grid, Box, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import ChatIcon from "@mui/icons-material/Chat";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MobHeading from "../../MobTopBarHeading/mobTopBarHeading";
import MobHelpSupportCard from "@/modules/ClientPages/MobileView/MobProfile/MobHelpSupport/Components/mobHelpSupportCard";
import HelpSupport_img from "@/assets/HelpSupport_img.jpg";
import { Link } from "react-router-dom";

const MobHelpSupport = () => {
  return (
    <Grid container direction="column">
      <Grid>
        <Grid>
          <MobHeading Heading="Help & Support" />
        </Grid>

        <Box sx={{ zIndex: 2 }}>
          <Grid>
            <Typography
              sx={{
                pl: 2,
                pr: 2,
                pb: 1,
                mb: 4,
                fontSize: 17,
                color: "text.primary",
                fontWeight: 500,
                textAlign: "center",
                lineHeight: 1.3,
              }}
            >
              Need assistance? Connect with us via chat, call, or raise a
              support ticket.
            </Typography>
          </Grid>

          <Grid container spacing={6} justifyContent="center" sx={{ mb: 5 }}>
            <Grid>
              <Link
                to="/mobile-helpsupportchat"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                <MobHelpSupportCard title="Chat Support" icon={<ChatIcon sx={{ fontSize: "35px" }} />} />
              </Link>
            </Grid>
            <Grid>
              <a
                href="tel:+18001234567"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                <MobHelpSupportCard title="Call Us" icon={<PhoneIcon sx={{ fontSize: "35px"}} />} />
              </a>
            </Grid>
          </Grid>

          <Grid container spacing={6} justifyContent="center" sx={{ mb: 5 }}>
            <Grid>
              <MobHelpSupportCard
                title="Raise a Ticket"
                icon={<ReportProblemIcon sx={{ fontSize: "35px"}} />}
              />
            </Grid>

            <Grid>
              <MobHelpSupportCard
                title="My Tickets"
                icon={<AssignmentIcon sx={{ fontSize: "35px"}} />}
              />
            </Grid>
          </Grid>

          {/* <Grid container justifyContent="center" sx={{ mb: 5 }}>
                        <Grid >
                            <MobHelpSupportCard title="FAQ" icon={<HelpOutlineIcon />} />
                        </Grid>
                    </Grid> */}
        </Box>
      </Grid>
    </Grid>
  );
};

export default MobHelpSupport;
