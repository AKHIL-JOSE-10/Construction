import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Input,
  Avatar,
  IconButton,
  Button,
  InputAdornment,
} from "@mui/material";
import {
  LocationOnOutlined,
  Search,
  Tune,
  AccessTime as AccessTimeIcon,
  CheckCircle as CheckCircleIcon,
  BookmarkBorder,
  ArrowForward as ArrowForwardIcon,
  KeyboardArrowDownOutlined,
  NotificationsNoneOutlined,
  Search as SearchIcon,
} from "@mui/icons-material";
import { Link } from 'react-router-dom';

const workers = [
  {
    name: "Shang Chi",
    price: "$5.99",
    rating: 4.8,
    reviews: 320,
    verified: true,
    img: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Tim Brevis",
    price: "$6.88",
    rating: 3.8,
    reviews: 40,
    verified: false,
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Lana Wu",
    price: "$7.50",
    rating: 4.3,
    reviews: 120,
    verified: true,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Carlos Mendez",
    price: "$6.20",
    rating: 4.1,
    reviews: 95,
    verified: false,
    img: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    name: "Amara Singh",
    price: "$5.45",
    rating: 4.6,
    reviews: 210,
    verified: true,
    img: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Ethan Clark",
    price: "$7.10",
    rating: 4.2,
    reviews: 150,
    verified: true,
    img: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    name: "Aisha Khan",
    price: "$5.75",
    rating: 3.9,
    reviews: 88,
    verified: false,
    img: "https://randomuser.me/api/portraits/women/28.jpg",
  },
  {
    name: "Liam Chen",
    price: "$6.30",
    rating: 4.4,
    reviews: 134,
    verified: true,
    img: "https://randomuser.me/api/portraits/men/49.jpg",
  },
  {
    name: "Maya Patel",
    price: "$5.60",
    rating: 4.5,
    reviews: 200,
    verified: true,
    img: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Noah James",
    price: "$6.95",
    rating: 3.7,
    reviews: 70,
    verified: false,
    img: "https://randomuser.me/api/portraits/men/14.jpg",
  },
];

const relatedSearches = ["Architects", "Steel Fabricators", "Civil Engineers"];

const MobSearchWorker = () => {
  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const filteredWorkers = workers.filter((worker) =>
    worker.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ bgcolor: "#fefaf7", minHeight: "100vh" }}>
      <Grid
        container
        size={12}
        sx={{
          height: "18vh",
          bgcolor: "rgba(176, 139, 111, 0.81)",
          position: "relative",
        }}
        justifyContent={"center"}
        overflow={"hidden"}
        mb={2}
      >
        <Grid
          container
          direction={"row"}
          sx={{ position: "relative", zIndex: 1 }}
          mt={1}
          alignItems={"center"}
          spacing={2}
          size={12}
          p={1}
          pb={0}
        >
          <Grid size={1}>
            <LocationOnOutlined sx={{ color: "white" }} />
          </Grid>
          <Grid flexGrow={1} size={7}>
            <Typography sx={{ fontSize: "10px", color: "rgba(255, 255, 255, 1)" }}>
              Current Location
            </Typography>
            <Grid container>
              <Typography sx={{ fontSize: "13px", color: "rgba(255, 255, 255, 1)" }}>
                Kuala Lumpur, Malaysia
              </Typography>
              <KeyboardArrowDownOutlined sx={{ color: "white" }} />
            </Grid>
          </Grid>
          <Grid
            container
            alignItems={"center"}
            spacing={1.2}
            size={3}
            justifyContent={"space-around"}
          >
            <Link to="/mobile-notifications" style={{ color: 'inherit' }}>
              <NotificationsNoneOutlined sx={{ color: "white", fontSize: "22px", cursor: 'pointer' }} />
            </Link>
            <Link to="/editInfo" style={{ color: 'inherit' }}>
              <Avatar
                src={"https://randomuser.me/api/portraits/women/79.jpg"}
                sx={{ width: "35px", height: "35px" }}
              />
            </Link>
          </Grid>
        </Grid>

        {/* Search Input */}
        <Grid
          sx={{
            bgcolor: 'white',
            height: "5vh",
            borderRadius: "1000px",
            display: "flex"
          }}
          alignItems={"center"}
          size={10}
        >
          <Input
            placeholder="Job title, keyword, worker"
            disableUnderline
            fullWidth
            inputRef={inputRef}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "gray", marginLeft: "0.3em" }} />
              </InputAdornment>
            }
            sx={{
              "& .MuiInputBase-root": {
                border: "none",
                backgroundColor: "transparent",
                display: "flex",
                alignItems: "center",
                height: "100%",
              },
              "& .MuiInputBase-input": {
                padding: "0.5em",
                fontSize: "0.9em",
                outline: "none",
              },
              "& input:focus": {
                outline: "none",
                boxShadow: "none",
                border: "none",
                backgroundColor: "transparent",
              }
            }}
          />
          <IconButton>
            <Tune />
          </IconButton>
        </Grid>
      </Grid>

      {/* Worker Cards */}
      <Grid container px={1} mt={2} justifyContent='space-between'>
        {filteredWorkers.map((worker, index) => (
          <Grid key={index} sx={{ display: "flex" }}>
            <Box
              sx={{
                borderRadius: 0.5,
                minWidth: "165px",
                mb: 1,
                border: "0.5px solid #a9a9a9",
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Box sx={{ p: 1, mt: 0.5 }}>
                <Box display="flex" alignItems="center" mb={1}>
                  <Avatar src={worker.img} />
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
                          borderRadius: 0.2,
                          fontSize: "6px",
                          mt: 0.5,
                        }}
                      >
                        Archisans Verified Worker
                        <CheckCircleIcon
                          sx={{ fontSize: 10, ml: 0.3, color: "#0492C2" }}
                        />
                      </Box>
                    )}
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography fontSize={12} color="text.secondary" sx={{ display: "flex", alignItems: "center" }}>
                    <LocationOnOutlined sx={{ fontSize: 15, mr: 0.5 }} />
                    5.1 km away
                  </Typography>
                </Box>

                <Box display="flex" alignItems="center" gap={1} my={1} flexWrap="wrap">
                  <AccessTimeIcon sx={{ fontSize: 16, color: "white", bgcolor: "#0492C2", borderRadius: 10 }} />
                  {[17, 18, 19, 20, 21, 22].map((date) => (
                    <Typography key={date} fontSize="11px" color="text.secondary">
                      {date}
                    </Typography>
                  ))}
                </Box>

                <Typography fontSize={12}>
                  ⭐ {worker.rating} ({worker.reviews} reviews)
                </Typography>
                <Typography fontWeight="bold" fontSize={16} pt={1} pl={0.5}>
                  {worker.price} <small>/hour</small>
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "space-between", my: 1, width: '140px' }}>
                  <IconButton size="small">
                    <BookmarkBorder />
                  </IconButton>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      bgcolor: "#b0876d",
                      color: "#fff",
                      borderRadius: "20px",
                      textTransform: "none",
                      px: 1.5,
                      fontSize: 12,
                      mb: 0,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Typography sx={{ fontSize: 10, color: "white" }}>
                      Book
                    </Typography>
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
                      <ArrowForwardIcon sx={{ fontSize: 10 }} />
                    </Box>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box mt={2} textAlign="center">
        <Typography
          sx={{
            color: "#888",
            fontWeight: 500,
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          View More
        </Typography>
      </Box>

      <Box mt={3}>
        <Typography fontWeight={600} mb={1}>
          Related Searches
        </Typography>
        <Grid container spacing={2}>
          {relatedSearches.map((item, idx) => (
            <Grid item key={idx}>
              <Box
                sx={{
                  bgcolor: "#fff",
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  boxShadow: 1,
                  textAlign: "center",
                }}
              >
                <Typography fontSize={13}>{item}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MobSearchWorker;
