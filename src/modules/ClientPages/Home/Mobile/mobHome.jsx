import React, { useState, useRef } from "react";
import {
  Grid,
  Box,
  Typography,
  Stack,
  IconButton,
  Avatar,
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
import AllIcon from "@/assets/All.png";
import AutomationIcon from "@/assets/SecurityAutomation.png"
import InstantService from "../../../../assets/InstantService.png"
import AddressDrawer from "../../OldHome/Address/AddressSelectBottomDrawer/AddressDrawer";
import { useNavigate } from "react-router-dom";

import Artisans from '@/assets/Artisans.png'
import LegalIcon from '@/assets/Legal.png'
import FabricationIcon from '@/assets/Fabrication.png'
import ArchitecturalIcon from '@/assets/Architectural.png'
import EducationalIcon from '@/assets/Educational.png'
import ContractorsIcon from '@/assets/Contractors.png'
import EngineersIcon from '@/assets/Engineers.png'
import InstantIcon from '@/assets/Instant.png'

import ServiceScrollBar from "./serviceScrollBar";

import {
  MapPinIcon,
  BellIcon,
} from "@phosphor-icons/react";


const pages = [
  [
    { label: "All", icon: AllIcon },
    { label: "Urgent", icon: InstantIcon },
    { label: "Architects", icon: ArchitecturalIcon },
    { label: "Engineers", icon: EngineersIcon },
    { label: "Legal", icon: LegalIcon },
    
  { label: "Fabrication", icon: FabricationIcon },
    { label: "Contractors", icon: ContractorsIcon },

{ label: "Automation", icon: AutomationIcon },
    
    { label: "Artisans", icon: Artisans },
  
    
    { label: "Education", icon: EducationalIcon },

  ]
];

const serviceImages = {
  Fast: AllIcon,
  All: AllIcon,
  Architectural: ArchitecturalIcon,
  Artisans: Artisans,
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
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    name: "Alan Jose",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Arun Krishna Das",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Joshya ",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
  },
];

const plumbers = [
  {
    name: "Akhil Jose",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    name: "Alwin Mathew",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    name: "Abhishek P S",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Jaison",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
  },
];

const electricians = [
  {
    name: "Rahul Menon",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
    name: "Vishnu R",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    name: "Nithin K",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Manu P",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
];
const painters = [
  {
    name: "Ramesh Kumar",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    name: "Suresh Nair",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Ganesh Pillai",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    name: "Anil Menon",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    name: "Manoj Varma",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Rajeev R",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Shyam Mohan",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Vijay Das",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
];

const popularServices = [
  { name: "Architectural", icon: ArchitecturalIcon },
  { name: "Artisans", icon: Artisans },
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
  const navigate = useNavigate();

    const scrollRef = useRef();

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
    <Grid sx={{ pb: 2,}}>
      <Grid > 
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pt: 2,
          px: 2,
        }}
      >
        <Box display="flex">
          <MapPinIcon fontSize={20} />
          <Box display="flex" flexDirection="column">
            <Typography
              variant="caption"
              color="gray"
              sx={{ lineHeight: 1, fontSize: 13, ml:0.9  }}
            >
              Current Location
            </Typography>
            <Grid container>
              <Typography sx={{ fontWeight: "bold", fontSize: 15,  ml:0.7 }}>
                Thrissur, Kerala
              </Typography>
              <IconButton onClick={() => handleOpen(true)} sx={{ padding: 0 }}>
                <KeyboardArrowDownOutlined sx={{ color: "grey" }} />
              </IconButton>
            </Grid>
          </Box>
        </Box>
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton onClick={() => navigate("/mobile-notifications")}>
            <BellIcon />
          </IconButton>
          <Avatar onClick={() => navigate("/editInfo")}
            sx={{ width: 32, height: 32 }}
            src={"https://randomuser.me/api/portraits/men/83.jpg"}
          />
        </Stack>
      </Box>

      {/* Search */}
      <Box sx={{ px: 2, mb: 1,pb:1.5 }}>
        <SearchBar />
      </Box>
 </Grid>

      {/* Banner */}
      <AdvertisementCarousel />

      {/* Services */}

<ServiceScrollBar pages={pages} scrollRef={scrollRef} />

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
        <Grid sx={{ mb: 3, mt:1.5 , px: 1 }}>
          <Box component="img" src={InstantService} alt="Sample" onClick={() => navigate("/mobile-Urgent-ServiceRequest")} sx={{
            width: "100%", height: "auto", objectFit: "cover",
            borderRadius: 1, cursor: "pointer",
          }} />
        </Grid>
      </Grid>

      {/* Join as Worker */}
      <Grid container justifyContent="center">
        <Grid sx={{ mt: 3, px: 1 , pb:1.5}}>
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

<Grid sx={{ bgcolor:'rgba(250, 249, 249, 1)'}}> 
  <Box sx={{mt:1.2 , pt:0.7}}>

<Typography sx={{ fontSize: 17, fontWeight: 600, mt: 1, mb: 1, px: 1.5 }}>
        Popular Services
      </Typography>

      <HorizontalScroll>
        {popularServices.map((service) => (
          <Box
            key={service.name}
            onClick={() => navigate("/mobile-search-worker")}
            sx={{
              flex: "0 0 auto",
              width: 100,
              height: 100,
              textAlign: "center",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
            }}
          >
            <Box
              component="img"
              src={service.icon}
              alt={service.name}
              sx={{
                width: 80,
                height: 65,
                objectFit: "contain",
                mx: "auto",
              }}
            />
            <Typography sx={{ fontSize: 12, fontWeight: 500, }}>
              {service.name}
            </Typography>
          </Box>
        ))}
      </HorizontalScroll>

      {/* Locations we offer*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
          mb: 1,
          px: 1.5,
        }}
      >
        <Typography sx={{ fontSize: 17, fontWeight: 600 , mt:1.5 }}>
          Locations we offer
        </Typography>

        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 500,
            color: "#bc9623ff",
          }}
        >
          View All
        </Typography>
      </Box>

      <HorizontalScroll>
        {locations.map((loc) => (
          <Box
            key={loc.name}
            sx={{
              width: 120,
              flex: "0 0 auto",
              textAlign: "center",
              mx: 1,
              mb: 2
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

  </Box>
</Grid>


      {/* Banner */}

      <Box sx={{pt:1}}>
<AdvertisementCarousel />
      </Box>
      

      {/* Architects Near You */}
      <Typography sx={{ fontSize: 17, fontWeight: 600, mt: 2.5, mb: 1, px: 1.5 }}>
        Architect’s Near You
      </Typography>

<HorizontalScroll>
  {architects.map((arch) => (
    <Box
      key={arch.name}
      onClick={() =>
        navigate("/mobile-workerpage", {
          state: {
            name: arch.name,
            img: arch.image,
            selectedService: "Architect",
          },
        })
      }
      sx={{
        minWidth: 120,
        height: 165,
        borderRadius: 1,
        position: "relative",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s ease-in-out",
        backgroundColor: "#fff", // ensure shadow is visible
        mx: 1, // optional margin between cards
        cursor: "pointer",
      }}
    >
      <IconButton
        onClick={(e) => {
          e.stopPropagation(); // prevent triggering navigate on like
          toggleLike(arch.name);
        }}
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

      <Box sx={{ textAlign: "center", p: 0, pt: 2 }}>
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
          2 km away
        </Typography>
        <Rating
          name="read-only"
          value={4}
          sx={{ fontSize: 10 }}
          readOnly
        />
      </Box>
    </Box>
  ))}
</HorizontalScroll>


      <Typography sx={{ fontSize: 17, fontWeight: 600, mt: 2, mb: 1, px: 1.5 }}>
        Plumber’s Near You
      </Typography>

<HorizontalScroll>
  {plumbers.map((plumber) => (
    <Box
      key={plumber.name}
      onClick={() =>
        navigate("/mobile-workerpage", {
          state: {
            name: plumber.name,
            img: plumber.image,
            selectedService: "Plumber",
          },
        })
      }
      sx={{
        minWidth: 120,
        height: 165,
        borderRadius: 1,
        position: "relative",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s ease-in-out",
        backgroundColor: "#fff",
        mx: 1,
        cursor: "pointer",
      }}
    >
      <IconButton
        onClick={(e) => {
          e.stopPropagation(); // prevent navigation on like click
          toggleLike(plumber.name);
        }}
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

      <Box sx={{ textAlign: "center", p: 0, pt: 2 }}>
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
          5 km away
        </Typography>
        <Rating
          name="read-only"
          value={4}
          sx={{ fontSize: 10 }}
          readOnly
        />
      </Box>
    </Box>
  ))}
</HorizontalScroll>


      <Typography sx={{ fontSize: 17, fontWeight: 600, mt: 2, mb: 1, px: 1.5 }}>
        Electrician’s Near You
      </Typography>

<HorizontalScroll>
  {electricians.map((electrician) => (
    <Box
      key={electrician.name}
      onClick={() =>
        navigate("/mobile-workerpage", {
          state: {
            name: electrician.name,
            img: electrician.image,
            selectedService: "Electrician",
          },
        })
      }
      sx={{
        minWidth: 120,
        height: 165,
        borderRadius: 1,
        position: "relative",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s ease-in-out",
        backgroundColor: "#fff",
        mx: 1,
        cursor: "pointer",
      }}
    >
      <IconButton
        onClick={(e) => {
          e.stopPropagation(); // prevent navigate when clicking the icon
          toggleLike(electrician.name);
        }}
        sx={{
          position: "absolute",
          top: 2,
          right: 2,
          zIndex: 1,
        }}
      >
        {liked.includes(electrician.name) ? (
          <FavoriteIcon sx={{ color: "red", fontSize: 18 }} />
        ) : (
          <FavoriteBorderIcon sx={{ color: "grey", fontSize: 18 }} />
        )}
      </IconButton>

      <Box sx={{ textAlign: "center", p: 0, pt: 2 }}>
        <Box sx={{ position: "relative", mb: 1 }}>
          <Avatar
            src={electrician.image}
            alt={electrician.name}
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
          {electrician.name}
        </Typography>
        <Typography sx={{ fontSize: 10, color: "gray", mt: 0.5 }}>
          5 km away
        </Typography>
        <Rating
          name="read-only"
          value={4}
          sx={{ fontSize: 10 }}
          readOnly
        />
      </Box>
    </Box>
  ))}
</HorizontalScroll>



      <Typography sx={{ fontSize: 17, fontWeight: 600, mt: 2, mb: 1, px: 1.5 }}>
        Painter’s Near You
      </Typography>

<HorizontalScroll>
  {painters.map((painter) => (
    <Box
      key={painter.name}
      onClick={() =>
        navigate("/mobile-workerpage", {
          state: {
            name: painter.name,
            img: painter.image,
            selectedService: "Painter",
          },
        })
      }
      sx={{
        minWidth: 120,
        height: 165,
        borderRadius: 1,
        position: "relative",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s ease-in-out",
        backgroundColor: "#fff",
        mx: 1,
        cursor: "pointer",
      }}
    >
      <IconButton
        onClick={(e) => {
          e.stopPropagation(); // Prevent navigation on like
          toggleLike(painter.name);
        }}
        sx={{
          position: "absolute",
          top: 2,
          right: 2,
          zIndex: 1,
        }}
      >
        {liked.includes(painter.name) ? (
          <FavoriteIcon sx={{ color: "red", fontSize: 18 }} />
        ) : (
          <FavoriteBorderIcon sx={{ color: "grey", fontSize: 18 }} />
        )}
      </IconButton>

      <Box sx={{ textAlign: "center", p: 0, pt: 2 }}>
        <Box sx={{ position: "relative", mb: 1 }}>
          <Avatar
            src={painter.image}
            alt={painter.name}
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
          {painter.name}
        </Typography>
        <Typography sx={{ fontSize: 10, color: "gray", mt: 0.5 }}>
          5 km away
        </Typography>
        <Rating
          name="read-only"
          value={4}
          sx={{ fontSize: 10 }}
          readOnly
        />
      </Box>
    </Box>
  ))}
</HorizontalScroll>



      {/* Bottom Navigation */}
      <MobileBottomTab />
      <AddressDrawer open={open} setOpen={setOpen} />
    </Grid>
  );
};

export default MobHome;
