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
  KeyboardArrowDownOutlined,
} from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AdvertisementCarousel from "./AdvertisementCarousal";
import SearchBar from "./SearchBar";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import MobileBottomTab from "@/modules/components/Mobile/mobileBottomTab";
import ArchisansWorker from "../../../../assets/ArchisansWorker.jpg";
import ArchitecturalIcon from "@/assets/Architectural.png";
import AllIcon from "@/assets/All.jpg";
import ArtisansIcon from "@/assets/Artisans.png";
import FabricationIcon from "@/assets/Fabrication.png";
import AutomationIcon from "@/assets/Automation.png"
import InstantService from "../../../../assets/InstantService.png"
import AddressDrawer from "../../OldHome/Address/AddressSelectBottomDrawer/AddressDrawer";

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
  {
    name: "Cochin",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.Sl-g2yvpMdb6q9WABtR3rwHaE8?pid=Api&P=0&h=180",
  },
  {
    name: "Calicut",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.Sl-g2yvpMdb6q9WABtR3rwHaE8?pid=Api&P=0&h=180",
  },
  {
    name: "Malappuram",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.Sl-g2yvpMdb6q9WABtR3rwHaE8?pid=Api&P=0&h=180",
  },
  {
    name: "kannur",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.Sl-g2yvpMdb6q9WABtR3rwHaE8?pid=Api&P=0&h=180",
  },
  {
    name: "Thrissur",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.Sl-g2yvpMdb6q9WABtR3rwHaE8?pid=Api&P=0&h=180",
  },
];

const architects = [
  {
    name: "Athul Murali T",
    role: "Architect",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    name: "Alan Jose",
    role: "Architect",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Arun Krishna Das",
    role: "Architect",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Joshy John",
    role: "Architect",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
  },
];

const plumbers = [
  {
    name: "Akhil Jose",
    role: "Plumber",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    name: "Alwin Mathew",
    role: "Plumber",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    name: "Abhishek P S",
    role: "Plumber",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Joshy John",
    role: "Plumber",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
  },
];

const popularServices = [
  { name: "Architectural", icon: ArchitecturalIcon },
  { name: "Artisans", icon: ArtisansIcon },
  { name: "Fabrication", icon: FabricationIcon },
  { name: "Automation", icon: AutomationIcon },
  { name: "Other", icon: AllIcon },
];

const HorizontalScroll = ({ children }) => (
  <Box
    className="horizontal-scroll"
    sx={{ mr: 0.5, py: 1, px: 1, overflowX: "auto", whiteSpace: "nowrap" }}
  >
    <Box
      sx={{ display: "flex", flexDirection: "row", gap: 1, flexWrap: "nowrap" }}
    >
      {children}
    </Box>
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

  const [open, setOpen] = useState(false);

  const handleOpen = (isOpen) => {
    setOpen(isOpen);
  };

  return (
    <Box sx={{ pb: 2, bgcolor: "#fff", minHeight: "100vh" }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
          px: 2,
        }}
      >
        <Box display="flex">
          <LocationOnOutlined
            sx={{ fontSize: 25, mr: 1, mt: 0.5, color: "black" }}
          />
          <Box display="flex" flexDirection="column">
            <Typography
              variant="caption"
              color="gray"
              sx={{ lineHeight: 1, fontSize: 13 }}
            >
              Current Location
            </Typography>
            <Grid container>
              <Typography sx={{ fontWeight: "bold", fontSize: 15 }}>
                Thrissur, Kerala
              </Typography>
              <IconButton onClick={() => handleOpen(true)} sx={{ padding: 0 }}>
                <KeyboardArrowDownOutlined sx={{ color: "grey" }} />
              </IconButton>
            </Grid>
          </Box>
        </Box>
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton>
            <NotificationsNoneOutlined />
          </IconButton>
          <Avatar
            sx={{ width: 32, height: 32 }}
            src={"https://randomuser.me/api/portraits/men/83.jpg"}
          />
        </Stack>
      </Box>

      {/* Search */}
      <Box sx={{ px: 2, mb: 1.5 }}>
        <SearchBar />
      </Box>

      {/* Banner */}
      <AdvertisementCarousel />

      {/* Services */}
      <Box
        sx={{ position: "sticky", top: 0, bgcolor: "#fff", zIndex: 1, py: 0.7 }}
      >
        <HorizontalScroll>
          {serviceLists.map((service) => (
            <Box
              key={service}
              onClick={() => setSelectedService(service)}
              sx={{
                display: "flex",
                alignItems: "center",
                px: 1.5,
                py: 0.2,
                mt: 1,
                borderRadius: 0.6,
                border: "1px solid #e91e63",
                backgroundColor:
                  selectedService === service ? "#e91e63" : "#fff",
                color: selectedService === service ? "#fff" : "#000",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 13,
              }}
            >
              <Box
                sx={{
                  width: 26,
                  height: 26,
                  bgcolor: "#fff",
                  borderRadius: "0px",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 1,
                }}
              >
                <Box
                  component="img"
                  src={serviceImages[service]}
                  alt={service}
                  sx={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </Box>
              {service}
            </Box>
          ))}
        </HorizontalScroll>
      </Box>

      {/* <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          position: "relative",
          overflow: "hidden",
          mb: 2,
        }}
      >
        
        <Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              ml: -15,
            }}
          >
            <DotLottieReact
              src="https://lottie.host/9c0dd527-6e0a-4043-b7d1-826256f76fd9/pLxjPbrNe3.lottie"
              loop
              autoplay
              style={{
                width: "100%",
              }}
            />
          </Box>
        </Grid>

        
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "80%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              fontWeight: 900,
              color: "#FF9800",
              textShadow: "1px 2px #000",
              mb: 2,
              fontFamily: "'Bangers', cursive",
              WebkitTextStroke: "1px #FF9800", // adds thickness
            }}
          >
            INSTANT <br /> SERVICES
          </Box>

          <button
            style={{
              backgroundColor: "#FF9800",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "8px 15px",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "2px 2px 5px rgba(0,0,0,0.3)",
            }}
          >
            Book Now
          </button>
        </Box>
      </Grid> */}

      <Grid container justifyContent="center">
        <Grid sx={{ my: 3, px: 1 }}>
          <Box component="img" src={InstantService} alt="Sample" sx={{
            width: "100%", height: "auto", objectFit: "cover",
            borderRadius: 1, cursor: "pointer",
          }} />
        </Grid>
      </Grid>

      {/* Join as Worker */}
      <Grid container justifyContent="center">
        <Grid sx={{ my: 3, px: 1 }}>
          <Box
            component="img"
            src={ArchisansWorker}
            alt="Sample"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: 1,
              cursor: "pointer",
            }}
          />
        </Grid>
      </Grid>


      <Typography sx={{ fontSize: 17, fontWeight: 600, mt: 2, mb: 1, px: 1.5 }}>
        Popular Services
      </Typography>

      <HorizontalScroll>
        {popularServices.map((service) => (
          <Box
            key={service.name}
            sx={{
              flex: "0 0 auto",
              width: 60,
              height: 100,
              textAlign: "center",
              backgroundColor: "#fff",
              borderRadius: "80px",
              boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
              padding: 1.2,
            }}
          >
            <Box
              component="img"
              src={service.icon}
              alt={service.name}
              sx={{
                width: 60,
                height: 60,
                objectFit: "contain",
                mx: "auto",
              }}
            />
            <Typography sx={{ fontSize: 9, fontWeight: 500, mt: 1 }}>
              {service.name}
            </Typography>
          </Box>
        ))}
      </HorizontalScroll>


      {/* Locations we offer*/}
      <Typography sx={{ fontSize: 17, fontWeight: 600, mt: 2, mb: 1, px: 1.5 }}>
        Locations we offer
      </Typography>

      <HorizontalScroll>
        {locations.map((loc) => (
          <Box
            key={loc.name}
            sx={{
              width: 120,
              flex: "0 0 auto",
              textAlign: "center",
              mx: 1,
            }}
          >
            {/* Image container */}
            <Box
              component="img"
              src={loc.image}
              alt={loc.name}
              sx={{
                width: "100%",
                height: 90,
                borderRadius: 2,
                objectFit: "cover",
              }}
            />
            {/* Text below */}
            <Box
              sx={{
                fontSize: 12,
                fontWeight: 550,
                color: "#000",
              }}
            >
              {loc.name}
            </Box>
          </Box>
        ))}
      </HorizontalScroll>

            {/* Banner */}
      <AdvertisementCarousel />

      {/* Architects Near You */}
      <Typography sx={{ fontSize: 17, fontWeight: 600, mt: 2, mb: 1, px: 1.5 }}>
        Architect’s Near You
      </Typography>

      <HorizontalScroll>
        {architects.map((arch) => (
          <Card
            key={arch.name}
            sx={{
              minWidth: 120,
              height: 165,
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

            <CardContent sx={{ textAlign: "center", p: 0, pt: 2 }}>
              <Box sx={{ position: "relative", mb: 1 }}>
                <Avatar
                  src={arch.image}
                  alt={arch.name}
                  sx={{ mx: "auto", width: 70, height: 70 }}
                />
                <Typography
                  sx={{
                    color: "rgba(13, 162, 208, 1)",
                    position: "absolute",
                    bottom: -5,
                    left: "50%",
                    transform: "translateX(-50%)",
                    bgcolor: "#fff",
                    px: 0.5,
                    fontSize: 9,
                    fontWeight: 500,
                    borderRadius: 0.2,
                    border: "0.5px solid #ccc",
                  }}
                >
                  View Details
                </Typography>
              </Box>

              <Typography sx={{ fontSize: 12, fontWeight: 600, mt: 2 }}>
                {arch.name}
              </Typography>
              <Typography sx={{ fontSize: 10, color: "gray", mt: 0.5 }}>
                {arch.role}
              </Typography>
              <Rating
                name="read-only"
                value={4}
                sx={{ fontSize: 10 }}
                readOnly
              />
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
              height: 165,
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
                  sx={{ mx: "auto", width: 70, height: 70 }}
                />
                <Typography
                  sx={{
                    color: "rgba(13, 162, 208, 1)",
                    position: "absolute",
                    bottom: -9,
                    left: "50%",
                    transform: "translateX(-50%)",
                    bgcolor: "#fff",
                    px: 0.5,
                    fontSize: 9,
                    fontWeight: 500,
                    borderRadius: 0.2,
                    border: "0.5px solid #ccc",
                  }}
                >
                  View Details
                </Typography>
              </Box>

              <Typography sx={{ fontSize: 12, fontWeight: 600, mt: 2 }}>
                {plumber.name}
              </Typography>
              <Typography sx={{ fontSize: 10, color: "gray", mt: 0.5 }}>
                {plumber.role}
              </Typography>
              <Rating
                name="read-only"
                value={4}
                sx={{ fontSize: 10 }}
                readOnly
              />
            </CardContent>
          </Card>
        ))}
      </HorizontalScroll>

      {/* Bottom Navigation */}
      <MobileBottomTab />
      <AddressDrawer open={open} setOpen={setOpen} />
    </Box>
  );
};

export default MobHome;
