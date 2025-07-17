import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Stack,
  IconButton,
  Avatar,
  Card,
  CardContent,
  Rating,
} from "@mui/material";
import {
  NotificationsNoneOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import BookIcon from "@mui/icons-material/Book";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AdvertisementCarousel from "./AdvertisementCarousal";
import SearchBar from "./SearchBar";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import MobileBottomTab from "@/modules/components/Mobile/mobileBottomTab";
import ArchisansWorker from "../../../../assets/ArchisansWorker.jpg";
import ArchitecturalIcon from "@/assets/Architectural.png";
import AllIcon from "@/assets/All.jpg";
import ArtisansIcon from "@/assets/Artisans.png";
import FabricationIcon from "@/assets/Fabrication.png";

const serviceLists = [
  "Fast",
  "All",
  "Architectural",
  "Artisans",
  "Fabrication",
  "Other",
];

const serviceImages = {
  Fast: AllIcon,
  All: AllIcon,
  Architectural: ArchitecturalIcon,
  Artisans: ArtisansIcon,
  Fabrication: FabricationIcon,
  Other: AllIcon,
};

const locations = [
  { name: "Cochin", image: "https://tse2.mm.bing.net/th/id/OIP.Sl-g2yvpMdb6q9WABtR3rwHaE8?pid=Api&P=0&h=180" },
  { name: "Calicut", image: "https://tse2.mm.bing.net/th/id/OIP.Sl-g2yvpMdb6q9WABtR3rwHaE8?pid=Api&P=0&h=180" },
  { name: "Coorg", image: "https://tse2.mm.bing.net/th/id/OIP.Sl-g2yvpMdb6q9WABtR3rwHaE8?pid=Api&P=0&h=180" },
  { name: "Kusgalnagar", image: "https://tse2.mm.bing.net/th/id/OIP.Sl-g2yvpMdb6q9WABtR3rwHaE8?pid=Api&P=0&h=180" },
  { name: "Thrissur", image: "https://tse2.mm.bing.net/th/id/OIP.Sl-g2yvpMdb6q9WABtR3rwHaE8?pid=Api&P=0&h=180" },
];

const architects = [
  { name: "Athul Murali T", role: "Architect", image: "https://randomuser.me/api/portraits/men/10.jpg" },
  { name: "Alan Jose", role: "Architect", image: "https://randomuser.me/api/portraits/men/11.jpg" },
  { name: "Arun Krishna Das", role: "Architect", image: "https://randomuser.me/api/portraits/men/12.jpg" },
  { name: "Joshy John", role: "Architect", image: "https://randomuser.me/api/portraits/men/13.jpg" },
];

const plumbers = [
  { name: "Akhil Jose", role: "Plumber", image: "https://randomuser.me/api/portraits/men/20.jpg" },
  { name: "Alwin Mathew", role: "Plumber", image: "https://randomuser.me/api/portraits/men/21.jpg" },
  { name: "Abhishek P S", role: "Plumber", image: "https://randomuser.me/api/portraits/men/22.jpg" },
  { name: "Joshy John", role: "Plumber", image: "https://randomuser.me/api/portraits/men/23.jpg" },
];

const HorizontalScroll = ({ children }) => (
  <Box className="horizontal-scroll" sx={{ py: 1, px: 1, overflowX: "auto", whiteSpace: "nowrap" }}>
    <Box sx={{ display: "flex", flexDirection: "row", gap: 1, flexWrap: "nowrap" }}>{children}</Box>
  </Box>
);

const MobHome = () => {
  const [selectedService, setSelectedService] = useState("Fast");
  const [liked, setLiked] = useState([]);

  const toggleLike = (name) => {
    setLiked((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  return (
    <Box sx={{ pb: 2, bgcolor: "#fff", minHeight: "100vh" }}>
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2, px: 2 }}>
        <Box display="flex">
          <LocationOnOutlined sx={{ fontSize: 25, mr: 1, mt: 0.5, color: "black" }} />
          <Box display="flex" flexDirection="column">
            <Typography variant="caption" color="gray" sx={{ lineHeight: 1, fontSize: 13 }}>
              Current Location
            </Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: 15 }}>
              Thrissur, Kerala
            </Typography>
          </Box>
        </Box>
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton><NotificationsNoneOutlined /></IconButton>
          <Avatar sx={{ width: 32, height: 32 }} src={"https://randomuser.me/api/portraits/men/83.jpg"} />
        </Stack>
      </Box>

      {/* Search */}
      <Box sx={{ px: 2, mb: 1.5 }}>
        <SearchBar />
      </Box>

      {/* Banner */}
      <AdvertisementCarousel />

      {/* Services */}
      <Box sx={{ position: "sticky", top: 0, bgcolor: "#fff", zIndex: 1, py: 0.7 }}>
        <HorizontalScroll>
          {serviceLists.map((service) => (
            <Box key={service} onClick={() => setSelectedService(service)} sx={{
              display: "flex", alignItems: "center", px: 1.5, py: 0.5,
              borderRadius: 0.6, border: "1px solid #e91e63",
              backgroundColor: selectedService === service ? "#e91e63" : "#fff",
              color: selectedService === service ? "#fff" : "#000",
              mr: 1, cursor: "pointer", fontWeight: 600, fontSize: 13,
            }}>
              <Box sx={{
                width: 26, height: 26, bgcolor: "#fff", borderRadius: "0px",
                overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", mr: 1,
              }}>
                <Box component="img" src={serviceImages[service]} alt={service} sx={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </Box>
              {service}
            </Box>
          ))}
        </HorizontalScroll>
      </Box>

      {/* Scooter Animation */}
      <Grid item xs={6}>
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <DotLottieReact
            src="https://lottie.host/9c0dd527-6e0a-4043-b7d1-826256f76fd9/pLxjPbrNe3.lottie"
            loop autoplay style={{ width: "100%", height: "auto" }} />
        </Box>
      </Grid>

      {/* Join as Worker */}
      <Grid container justifyContent="center">
        <Grid sx={{ my: 3, px: 1 }}>
          <Box component="img" src={ArchisansWorker} alt="Sample" sx={{
            width: "100%", height: "auto", objectFit: "cover",
            borderRadius: 1, cursor: "pointer",
          }} />
        </Grid>
      </Grid>

      {/* Locations */}
      <Typography sx={{ fontSize: 17, fontWeight: 600, mt: 2, mb: 1, px: 1.5 }}>
        Locations we offer
      </Typography>

      <HorizontalScroll>
        {locations.map((loc) => (
          <Box key={loc.name} sx={{
            bgcolor: "#fff", width: 110, borderRadius: 0.5, display: "flex",
            flexDirection: "column", alignItems: "center", justifyContent: "center",
            fontSize: 12, fontWeight: 500, border: '1px solid #ccc', flex: '0 0 auto',
          }}>
            <Box component="img" src={loc.image} alt={loc.name} sx={{
              width: '100%', height: 'auto', mb: 0.5, objectFit: "contain",
            }} />
            <Typography sx={{ fontSize: 14, mb: 0.8 }}>{loc.name}</Typography>
          </Box>
        ))}
      </HorizontalScroll>

      {/* Architects Near You */}
      <Typography sx={{ fontSize: 17, fontWeight: 600, mt: 2, mb: 1, px: 1.5 }}>
        Architect’s Near You
      </Typography>

      <HorizontalScroll>
        {architects.map((arch) => (
          <Card
            key={arch.name}
            sx={{
              minWidth: 130,
              height: 185,
              border: "1px solid #ccc",
              borderRadius: 0.5,
              position: "relative",
            }}
          >
            <IconButton
              onClick={() => toggleLike(arch.name)}
              sx={{
                position: "absolute",
                top: 2,
                right: 2,
                zIndex: 1,
              }}
            >
              {liked.includes(arch.name) ? (
                <FavoriteIcon sx={{ color: "red", fontSize: 18 }} />
              ) : (
                <FavoriteBorderIcon sx={{ color: "grey", fontSize: 18 }} />
              )}
            </IconButton>

            <CardContent sx={{ textAlign: "center", p: 0, pt: 2,  }}>
              <Box sx={{ position: "relative", mb: 1 }}>
                <Avatar
                  src={arch.image}
                  alt={arch.name}
                  sx={{ mx: "auto", width: 80, height: 80 }}
                />
                <Typography
                  sx={{
                    color:'rgba(13, 162, 208, 1)',
                    position: "absolute",
                    bottom: -5,
                    left: "50%",
                    transform: "translateX(-50%)",
                    bgcolor: "#fff",
                    px: 0.5,
                    fontSize: 9,
                    fontWeight: 500,
                    borderRadius: 0.2,
                    border:'0.5px solid #ccc'
                  }}
                >
                  View Details
                </Typography>
              </Box>

              <Typography sx={{ fontSize: 14, fontWeight: 600 , mt:2}}>
                {arch.name}
              </Typography>
              <Typography sx={{ fontSize: 11, color: "gray", mt:0.5 }}>
                {arch.role}
              </Typography>
              <Rating name="read-only" value={4} sx={{fontSize:10}} readOnly />
            </CardContent>
          </Card>
        ))}
      </HorizontalScroll>


      <Typography sx={{ fontSize: 17, fontWeight: 600, mt: 2, mb: 1, px: 1.5 }}>
        Plumber’s Near You
      </Typography>

      <HorizontalScroll>
        {plumbers.map((plumber) => (
          <Card
            key={plumber.name}
            sx={{
              minWidth: 120,
              height: 185,
              border: "1px solid #ccc",
              borderRadius: 0.5,
              position: "relative",
            }}
          >
            <IconButton
              onClick={() => toggleLike(plumber.name)}
              sx={{
                position: "absolute",
                top: 2,
                right: 2,
                zIndex: 1,
              }}
            >
              {liked.includes(plumber.name) ? (
                <FavoriteIcon sx={{ color: "red", fontSize: 18 }} />
              ) : (
                <FavoriteBorderIcon sx={{ color: "grey", fontSize: 18 }} />
              )}
            </IconButton>

            <CardContent sx={{ textAlign: "center", p: 0, pt: 2 }}>
              <Box sx={{ position: "relative", mb: 1 }}>
                <Avatar
                  src={plumber.image}
                  alt={plumber.name}
                  sx={{ mx: "auto", width: 80, height: 80 }}
                />
                <Typography
                 sx={{
                    color:'rgba(13, 162, 208, 1)',
                    position: "absolute",
                    bottom: -9,
                    left: "50%",
                    transform: "translateX(-50%)",
                    bgcolor: "#fff",
                    px: 0.5,
                    fontSize: 9,
                    fontWeight: 500,
                    borderRadius: 0.2,
                    border:'0.5px solid #ccc'
                  }}
                >
                  View Details
                </Typography>
              </Box>

              <Typography sx={{ fontSize: 14, fontWeight: 600,mt:2 }}>
                {plumber.name}
              </Typography>
              <Typography sx={{ fontSize: 11, color: "gray",mt:0.5 }}>
                {plumber.role}
              </Typography>
              <Rating name="read-only" value={4} sx={{fontSize:10}} readOnly />
            </CardContent>
          </Card>
        ))}
      </HorizontalScroll>

      {/* Bottom Navigation */}
      <MobileBottomTab/>
    </Box>
  );
};

export default MobHome;
