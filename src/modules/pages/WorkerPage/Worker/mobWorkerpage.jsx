import { Grid, Typography, Avatar, Box, Button } from "@mui/material";
import workerimg from "@/assets/workerimg.jpg";
import VerifiedIcon from "@mui/icons-material/Verified";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import MobWorkerTopTab from "@/modules/components/Mobile/mobWorker/mobWorkerTopTab";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MobWorkerpage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { name, img,contact } = location.state || {};

  return (
    <Grid container sx={{ height: "auto" }}>
      <Grid sx={{ position: "relative" }}>
        <Box
          onClick={() => navigate(-1)}
          sx={{
            position: "absolute",
            width: 40,
            height: 40,
            top: 16,
            left: 10,
            zIndex: 10,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowBackIosIcon sx={{ fontSize: "25px", color: "#fff", bgcolor: "transparent" }} />
        </Box>

        <Box sx={{ position: "relative", display: "inline-block" }}>
          {/* Background image */}
          <Box
            component="img"
            src={workerimg}
            alt="Main"
            sx={{
              width: "100%",
              display: "block",
            }}
          />

          {/* Avatar with tick badge */}
          <Box
            sx={{
              position: "absolute",
              bottom: -30,
              left: "18%",
              transform: "translateX(-50%)",
            }}
          >
            <Avatar
              src={img}
              sx={{
                width: 85,
                height: 85,
                border: "5px solid white",
              }}
            />
            {/* Verified tick */}
            <Box
              sx={{
                position: "absolute",
                bottom: 2,
                right: 0,
                backgroundColor: "white",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <VerifiedIcon sx={{ color: "green", fontSize: 28 }} />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            mt: 4,
            py: 1,
            px: 2,
          }}
        >
          <Typography sx={{ fontSize: "26px", fontWeight: "600" }}>
            {name}
          </Typography>
          <Button
            variant="contained"
            onClick={()=>navigate("/mobile-message-chat",{state:{img,name,contact}})}
            sx={{ borderRadius: 4, textTransform: "none", bgcolor: "#CCB09B" }}
          >
            <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
              Message
            </Typography>
          </Button>
        </Box>
        <Box sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", flexDirection: "row", mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <WorkHistoryIcon sx={{ fontSize: 18, color: "purple" }} />
              <Typography sx={{ fontWeight: "500", fontSize: 15 }}>
                4+ yrs of experience
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, pl: 6 }}>
              <LocationOnIcon sx={{ fontSize: 18, color: "orange" }} />
              <Typography sx={{ fontWeight: "500", fontSize: 15 }}>
                Thrissur
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <VerifiedUserIcon sx={{ fontSize: 18, color: "green" }} />
            <Typography sx={{ fontWeight: "500", fontSize: 15 }}>
              Archisans verified worker
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid sx={{ width: "100%" }}>
        <MobWorkerTopTab />
      </Grid>
    </Grid>
  );
};

export default MobWorkerpage;
