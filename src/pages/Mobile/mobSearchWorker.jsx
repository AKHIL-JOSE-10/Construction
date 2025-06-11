import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Input,
  Avatar,
  IconButton,
  Button,
} from "@mui/material";
import {
  LocationOnOutlined,
  Search,
  Tune,
  AccessTime as AccessTimeIcon,
  CheckCircle as CheckCircleIcon,
  BookmarkBorder,
  ArrowForward as ArrowForwardIcon,
  NotificationsNoneOutlined,
  KeyboardArrowDownOutlined,
  Bookmark,
} from "@mui/icons-material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import VerifiedIcon from "@mui/icons-material/Verified";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

// Randomly generate 2 unavailable dates per worker from the set
const generateUnavailableDates = () => {
  const allDates = [17, 18, 19, 20, 21, 22];
  const unavailable = new Set();
  while (unavailable.size < 3) {
    const rand = allDates[Math.floor(Math.random() * allDates.length)];
    unavailable.add(rand);
  }
  return [...unavailable];
};

const workers = [
  {
    id: 1,
    name: "Shang Chi",
    price: "$5.99",
    rating: 4.8,
    reviews: 320,
    verified: true,
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    services: ["Plumbing", "Electrician"],
  },
  {
    id: 2,
    name: "Kumar G",
    price: "$9.49",
    rating: 4.5,
    reviews: 210,
    verified: true,
    img: "https://randomuser.me/api/portraits/men/9.jpg",
    services: ["Carpentry", "Painter"],
  },
  {
    id: 3,
    name: "Rajesh P",
    price: "$7.99",
    rating: 4.2,
    reviews: 150,
    verified: false,
    img: "https://randomuser.me/api/portraits/men/20.jpg",
    services: ["AC Repair", "Electrician"],
  },
  {
    id: 4,
    name: "Arun T",
    price: "$8.20",
    rating: 4.5,
    reviews: 185,
    verified: true,
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    services: ["Security", "Driving"]
  },
  {
    id: 5,
    name: "Suresh V",
    price: "$8.75",
    rating: 4.6,
    reviews: 195,
    verified: false,
    img: "https://randomuser.me/api/portraits/men/30.jpg",
    services: ["Gardening", "Masonry"],
  },
  {
    id: 6,
    name: "Priya M",
    price: "$7.00",
    rating: 4.4,
    reviews: 160,
    verified: true,
    img: "https://randomuser.me/api/portraits/women/25.jpg",
    services: ["Cooking", "Cleaning"],
  },
  {
    id: 7,
    name: "Deepak R",
    price: "$6.50",
    rating: 4.3,
    reviews: 140,
    verified: false,
    img: "https://randomuser.me/api/portraits/men/35.jpg",
    services: ["Driver", "Delivery"]
  },
  {
    id: 8,
    name: "Meera S",
    price: "$7.80",
    rating: 4.6,
    reviews: 175,
    verified: true,
    img: "https://randomuser.me/api/portraits/women/40.jpg",
    services: ["Nanny", "Cooking"]
  },
];


const relatedSearches = ["Architects", "Steel Fabricators", "Civil Engineers"];

const MobSearchWorker = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const filteredWorkers = workers.filter((worker) =>
    worker.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [bookmarkedWorkers, setBookmarkedWorkers] = useState([]);

  const handleBookmarkClick = (event, workerId) => {
    event.stopPropagation(); // Prevent navigation
    setBookmarkedWorkers((prev) =>
      prev.includes(workerId)
        ? prev.filter((id) => id !== workerId)
        : [...prev, workerId]
    );
  };

  const handleClick = (worker) => {
    navigate("/mobile-workerpage", {
      state: {
        name: worker.name,
        img: worker.img,
      },
    });
  };

  return (
    <Box sx={{ bgcolor: "#fefaf7", minHeight: "100vh" }}>
      <Grid sx={{ px: 1.5, pt: 1.5 }}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <Grid item xs={9}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                onClick={() => navigate(-1)}
                sx={{ left: 10, cursor: "pointer" }}
              >
                <ArrowBackIosIcon sx={{ fontSize: "20px", color: "grey" }} />
              </Box>
              <LocationOnOutlined sx={{ mr: 1 }} />
              <Box>
                <Typography fontSize={13}>Current location</Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Typography fontWeight="bold" fontSize={15}>
                    Kuala Lumpur, Malaysia
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Link to="/mobile-notifications" style={{ color: "inherit" }}>
                <NotificationsNoneOutlined
                  sx={{
                    color: "black",
                    fontSize: "28px",
                    cursor: "pointer",
                    mr: 1.5,
                    mt: 0.6,
                  }}
                />
              </Link>
              <Link to="/editInfo" style={{ color: "inherit" }}>
                <Avatar src="https://randomuser.me/api/portraits/women/79.jpg" />
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Search Bar */}
        <Box
          sx={{
            bgcolor: "#fff",
            borderRadius: "12px",
            px: 1.1,
            py: 0.5,
            display: "flex",
            alignItems: "center",
            boxShadow: 1,
          }}
        >
          <Search sx={{ color: "gray", mr: 1 }} />
          <Input
            inputRef={inputRef}
            fullWidth
            disableUnderline
            placeholder="Search Services & Workers"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              fontSize: 13,
              "&::placeholder": {
                fontSize: 12,
                color: "gray",
                opacity: 1,
              },
            }}
          />
          <IconButton>
            <Tune />
          </IconButton>
        </Box>
      </Grid>

      {/* Worker Cards */}
      <Grid container px={0} mt={2} sx={{ justifyContent: "space-evenly" }}>
        {filteredWorkers.map((worker, index) => {
          const unavailableDates = generateUnavailableDates();
          return (
            <Grid key={index} sx={{ display: "flex", width: "48%" }}>
              <Box onClick={() => handleClick(worker)}
                sx={{
                  position: "relative",
                  borderRadius: 0.5,
                  width: "100%",
                  height: "fit-content",
                  mb: 1,
                  border: "1px solid rgba(184, 147, 87, 0.3)",
                  boxShadow: "0px 2px 8px rgba(90, 69, 1, 0.1)",
                  overflow: "hidden",
                  cursor: "pointer", // Optional for visual cue,
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {/* Gradient Circle - bottom right */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "63%",
                    right: "-14%",
                    width: "116%",
                    height: "65%",
                    borderRadius: "47%",
                    borderBottomRightRadius: "41%",
                    background:
                      "radial-gradient(circle at center, rgba(194, 137, 67, 0.2))",
                    pointerEvents: "7one",
                  }}
                />
                <Box
                  sx={{
                    p: 1,
                    mt: 0.5,
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <Box display="flex" mb={1}>
                    <Avatar

                      src={worker.img}
                      sx={{ ml: -0.3, width: 45, height: 45, border: '3px solid white' }}
                    />
                    <Box ml={1}>
                      <Typography fontWeight={600} fontSize={15}>
                        {worker.name}
                      </Typography>
                      {worker.verified && (
                        <Box
                          sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            bgcolor: "#f3e5d7",
                            color: "#5d4037",
                            px: 0.5,
                            py: 0.3,
                            borderRadius: 0.5,
                            fontSize: "8px",
                            mt: 0.5,
                          }}
                        >
                          Archisans Verified
                          <VerifiedIcon
                            sx={{ fontSize: 10, ml: 0.3, color: "green" }}
                          />
                        </Box>
                      )}
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>

<Box display="flex" alignItems="center">
  <LocationOnOutlined sx={{ fontSize: 16, mr: 0.5, ml: -0.2 }} />
  <Typography fontSize={11.8} color="grey">
    5.1 km away
  </Typography>
</Box>

                    <Box display="flex" alignItems="center" mr={0.5}>
                      <StarIcon sx={{ fontSize: 18, color: "#fbc02d", mr: 0.5, mb: 0.25 }} />
                      <Typography fontSize={13} lineHeight={2}>
                        {worker.rating}
                      </Typography>
                    </Box>
                  </Box>



                  <Box
                    display="flex"
                    alignItems="center"
                    gap={0.5}
                    mt={0.5}
                    mb={0.6}
                    flexWrap="wrap"
                  >
                    <AccessTimeIcon
                      sx={{
                        fontSize: 14,
                        color: "white",
                        bgcolor: "#0492C2",
                        borderRadius: 10,
                        ml: 0.2,
                      }}
                    />
                    {[17, 18, 19, 20, 21, 22].map((date) => (
                      <Typography
                        key={date}
                        fontSize="11.5px"
                        sx={{
                          color: unavailableDates.includes(date)
                            ? "red"
                            : "text.secondary",
                        }}
                      >
                        {date}
                      </Typography>
                    ))}
                  </Box>

                  {worker.services && worker.services.length > 0 && (
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        ml: 0.5,
                        alignItems: "center",
                      }}
                    >
                      < WorkOutlineIcon sx={{ fontSize: 14, mr: 0.5, ml: -0.3 }} />
                      {worker.services.map((service, idx) => (
                        <Typography
                          key={idx}
                          sx={{
                            fontSize: "12px",
                            color: "#5d4037",
                            display: "flex",
                            alignItems: "center",
                            pr: 0.2,
                            py: 0.2,
                          }}
                        >

                          {service}
                          {idx < worker.services.length - 1 && ","}
                        </Typography>
                      ))}
                    </Box>
                  )}

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >


                  </Box>

                  <Typography fontWeight="bold" fontSize={16} pt={0.4} pl={0.55}>
                    {worker.price} <small>/hour</small>
                  </Typography>

                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 1,
                      right: 4,
                      display: "flex",
                      justifyContent: "end",
                      gap: 4,
                      my: 0.5,
                      width: "99%",
                    }}
                  >
                    <IconButton
                      onClick={(event) => handleBookmarkClick(event, worker.id)}
                      sx={{ position: 'absolute', right: -5, bottom: -5 }}
                    >
                      {bookmarkedWorkers.includes(worker.id) ? (
                        <Bookmark sx={{ fontSize: 25, color: "#B49176" }} /> // Filled icon
                      ) : (
                        <BookmarkBorder
                          sx={{ fontSize: 25, color: "inherit" }}
                        /> // Outlined icon
                      )}
                    </IconButton>

                    {/* <Button
                      variant="contained"
                      size="small"
                      sx={{
                        bgcolor: "#b0876d",
                        color: "#fff",
                        borderRadius: "20px",
                        textTransform: "none",
                        px: 3,
                        fontSize: 12,
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        height: 30,
                      }}
                    >
                      <Typography sx={{ fontSize: 11, color: "white" }}>Book</Typography>
                      <Box
                        sx={{
                          bgcolor: "#fff",
                          color: "#b0876d",
                          borderRadius: "50%",
                          width: 18,
                          height: 18,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <ArrowForwardIcon sx={{ fontSize: 14 }} />
                      </Box>
                    </Button> */}
                  </Box>

                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>

      <Box mt={2} textAlign="center">
        <Typography
          sx={{
            color: "#888",
            fontWeight: 500,
            textDecoration: "underline",
            cursor: "pointer",
            fontSize: 14,
          }}
        >
          View More
        </Typography>
      </Box>

      {/* Related Searches */}
      <Box sx={{ mt: 3, px: 1.5 }}>
        <Typography sx={{ fontWeight: 600, mb: 1, fontSize: 20 }}>
          Related Searches
        </Typography>
        <Grid
          container
          sx={{ overflowX: "auto", flexWrap: "nowrap", gap: 2, px: 1 }}
        >
          {relatedSearches.map((item, idx) => (
            <Grid item key={idx} sx={{ flexShrink: 0 }}>
              <Box
                sx={{
                  bgcolor: "#fff",
                  width: 120,
                  height: 80,
                  borderRadius: 0.5,
                  boxShadow: 0.5,
                  mb: 2,
                  pl: 2,
                  pt: 1,
                  pb: 1,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Typography fontSize={14}>{item}</Typography>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -40,
                    right: -20,
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle at center, rgba(62, 149, 30, 0.3))",
                    pointerEvents: "none",
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MobSearchWorker;