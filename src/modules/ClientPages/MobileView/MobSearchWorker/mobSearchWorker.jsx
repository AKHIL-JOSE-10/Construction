import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Input,
  Avatar,
  IconButton,
} from "@mui/material";
import {
  LocationOnOutlined,
  Search,
  Tune,
  AccessTime as AccessTimeIcon,
  BookmarkBorder,
  Bookmark,
  ArrowBackIos,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import VerifiedIcon from "@mui/icons-material/Verified";
import AdvertisementCarousal from "../MobHome/Components/AdvertisementCarousal";

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
    name: "Akhil Raj",
    price: "$5.99",
    rating: 4.8,
    reviews: 320,
    verified: true,
    img: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 2,
    name: "Bhaskaran",
    price: "$6.88",
    rating: 3.8,
    reviews: 40,
    verified: false,
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 3,
    name: "Shekaran",
    price: "6.20",
    rating: 4.1,
    reviews: 95,
    verified: false,
    img: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    id: 4,
    name: "Nikhil Babu",
    price: "$7.10",
    rating: 4.2,
    reviews: 150,
    verified: true,
    img: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    id: 5,
    name: "Arjun",
    price: "$6.30",
    rating: 4.4,
    reviews: 134,
    verified: true,
    img: "https://randomuser.me/api/portraits/men/49.jpg",
  },
  {
    id: 6,
    name: "Santhosh",
    price: "$6.95",
    rating: 3.7,
    reviews: 70,
    verified: false,
    img: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    id: 7,
    name: "Kumaran",
    price: "$5.85",
    rating: 4.0,
    reviews: 112,
    verified: true,
    img: "https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
    id: 8,
    name: "Abdul",
    price: "$6.45",
    rating: 4.3,
    reviews: 160,
    verified: true,
    img: "https://randomuser.me/api/portraits/men/18.jpg",
  },
];

const relatedSearches = ["Architects", "Steel Fabricators", "Civil Engineers"];

const MobSearchWorker = () => {

  const location = useLocation();
  const selectedService = location.state?.selectedService;
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");


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
        selectedService: location.state?.selectedService,
      },
    });
  };

  return (
    <Box>
      <Grid sx={{ px: 1.5, pt: 1.5 }}>
        <Box px={0} display="flex" alignItems="center">
          {/* Left Side: Back Arrow + Location Info */}
          <ArrowBackIos
            sx={{ fontSize: 23, cursor: "pointer", color: 'grey' }}
            onClick={() => navigate(-1)}
          />
          <Box display="flex">
            <LocationOnOutlined sx={{ fontSize: 25, mr: 1, mt: 0.5, color: 'black' }} />
            <Box display="flex" flexDirection="column">
              <Typography variant="caption" color="gray" sx={{ lineHeight: 1, fontSize: 13 }}>
                Current Location
              </Typography>
              <Typography sx={{ fontWeight: 'Bold', fontSize: 15 }}>
                Thrissur, Kerala
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Search Bar */}
        <Box
          sx={{
            bgcolor: "#fff",
            borderRadius: "12px",
            px: 1.1,
            py: 0.3,
            my: 1.5,
            display: "flex",
            alignItems: "center",
            border: "0.5px solid grey"
          }}
        >
          <Search sx={{ color: "gray", mr: 1 }} />
          <Input
            fullWidth
            disableUnderline
            placeholder="Search Services & Workers"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ fontSize: 14 }}
          />
          <IconButton>
            <Tune />
          </IconButton>
        </Box>
      </Grid>
      <Box>
        <AdvertisementCarousal />
      </Box>
      {/* Worker Cards */}
      <Grid container px={0} mt={2} sx={{ justifyContent: "space-evenly" }}>
        {filteredWorkers.map((worker, index) => {
          const unavailableDates = generateUnavailableDates();
          return (
            <Grid key={index} sx={{ display: "flex", width: "45%" }}>
              <Box
                onClick={() => handleClick(worker)}
                sx={{
                  position: "relative",
                  borderRadius: 0.5,
                  width: "100%",
                  height: "fit-content",
                  mb: 1.5,
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
                    bottom: "58%",
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
                      sx={{
                        ml: -0.3,
                        width: 45,
                        height: 45,
                        border: "3px solid white",
                      }}
                    />
                    <Box ml={1}>
                      <Typography
                        fontWeight={600}
                        fontSize={15}
                        sx={{ mt: worker.verified ? "none" : 1.8 }}
                      >
                        {worker.name}
                      </Typography>
                      {worker.verified && (
                        <Box
                          sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: "white",
                            px: 0.5,
                            py: 0.3,
                            borderRadius: 0.5,
                            fontSize: "8px",
                            mt: 0.5,
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "9px",
                              fontWeight: 600,
                              color: "#0492C2",
                            }}
                          >
                            Archisans
                          </Typography>
                          <VerifiedIcon
                            sx={{ fontSize: 10, ml: 0.3, color: "#0492C2" }}
                          />
                        </Box>
                      )}
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      fontSize={10}
                      color="text.secondary"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <LocationOnOutlined sx={{ fontSize: 13, mr: 0.3 }} />
                      <Typography sx={{ fontSize: "100%", color: "grey" }}>
                        5.1 km away{" "}
                      </Typography>
                    </Typography>
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
                        fontSize: 11,
                        color: "white",
                        bgcolor: "#0492C2",
                        borderRadius: 10,
                        ml: 0.2,
                      }}
                    />
                    {[17, 18, 19, 20, 21, 22].map((date) => (
                      <Typography
                        key={date}
                        fontSize="10px"
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

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Box display="flex" alignItems="center" mr={0.5}>
                      <StarIcon
                        sx={{ fontSize: 14, color: "#fbc02d", mr: 0.4 }}
                      />
                      <Typography fontSize={11} lineHeight={1}>
                        {worker.rating}
                      </Typography>
                    </Box>
                    <Typography fontSize={9.5} lineHeight={1}>
                      ({worker.reviews} reviews)
                    </Typography>
                  </Box>

                  <Typography fontWeight="bold" fontSize={16} pt={1} pl={0.5}>
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
                      sx={{ position: "absolute", right: -5, bottom: -5 }}
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

      <Typography
        my={1}
        sx={{
          color: "#888",
          fontWeight: 500,
          textDecoration: "underline",
          cursor: "pointer",
          fontSize: 14,
          textAlign: "center",
        }}
      >
        View More
      </Typography>

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
                  height: 90,
                  borderRadius: 0.5,
                  border: "0.5px solid grey",
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
