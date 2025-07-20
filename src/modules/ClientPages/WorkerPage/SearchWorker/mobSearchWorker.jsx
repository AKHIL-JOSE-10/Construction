import React from "react";
import {
  Grid,
  Box,
  Typography,
  Avatar,
  IconButton,
  Button,
  Stack,
  Card,
  InputBase
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import {
  LocationOnOutlined,
  KeyboardArrowDownOutlined,
  ArrowBackIos
} from "@mui/icons-material";

import {
  BookmarkSimpleIcon,
  StarIcon,
  FilePlusIcon,
  ChatTextIcon,
  ShareNetworkIcon,
  PhoneIcon,
  MapPinIcon,
  BellIcon,
  MagnifyingGlassIcon,
  SlidersHorizontalIcon
} from "@phosphor-icons/react";
import SearchBar from "../../Home/Mobile/SearchBar";

// Dummy data
const workers = [
  {
    name: "Ramesh Nair",
    location: "Palakkad",
    rating: 4.7,
    reviews: 312,
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Suresh Kumar",
    location: "Palakkad",
    rating: 4.6,
    reviews: 275,
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    name: "Arun Pillai",
    location: "Palakkad",
    rating: 4.7,
    reviews: 288,
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Vivek Raj",
    location: "Palakkad",
    rating: 4.8,
    reviews: 320,
    image: "https://randomuser.me/api/portraits/men/53.jpg",
  },
  {
    name: "Kiran Mohan",
    location: "Palakkad",
    rating: 4.7,
    reviews: 299,
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    name: "Ajay Menon",
    location: "Palakkad",
    rating: 4.5,
    reviews: 267,
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Rahul Varma",
    location: "Palakkad",
    rating: 4.9,
    reviews: 330,
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    name: "Abhishek R",
    location: "Palakkad",
    rating: 4.6,
    reviews: 310,
    image: "https://randomuser.me/api/portraits/men/57.jpg",
  },
  {
    name: "Nikhil Joseph",
    location: "Palakkad",
    rating: 4.7,
    reviews: 305,
    image: "https://randomuser.me/api/portraits/men/58.jpg",
  },
  {
    name: "Manoj Das",
    location: "Palakkad",
    rating: 4.8,
    reviews: 315,
    image: "https://randomuser.me/api/portraits/men/59.jpg",
  },
];

const WorkerCard = ({ worker }) => (
  <Grid sx={{ px: 1.5 }}>
    <Box
      sx={{
        bgcolor: "#fff",
        borderRadius: 1,
        boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
        mb: 2,
        p: 1,
        position: "relative", // Important: make parent relative
      }}
    >
      {/* TOP-LEFT SAVED ICON */}
      <Box
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          width: 32,
          height: 22,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BookmarkSimpleIcon size={23} />
      </Box>

      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "none",
          px: 0.5,
          py: 1
        }}
      >
        <Stack direction="row" spacing={2} alignItems={'center'}>
          <Avatar
            src={worker.image}
            alt={worker}
            sx={{ width: 46, height: 46 }}
          />

          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                color: "text.secondary",
                fontSize: 14,
              }}
            >
              <Typography sx={{ fontWeight: '700', mb: 0.7 }}>
                {worker.name}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 4,
                  alignItems: 'center',
                }}
              >
                {/* Location */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <MapPinIcon size={16} style={{ marginRight: 4 }} />
                  <Typography color="#a7a3a3ff" fontSize={14}>
                    {worker.location}
                  </Typography>
                </Box>

                {/* Rating */}
                <Box sx={{ display: "flex", flexDirection: 'row', alignItems: "center" }}>
                  <StarIcon size={14} weight="fill" color="#FFB400" />
                  <Typography sx={{ fontSize: 13, mx: 0.5 }}>
                    {worker.rating.toFixed(1)}{" "}
                  </Typography>
                  <Typography sx={{ color: "grey", fontSize: 10 }}>
                    ({worker.reviews} reviews)
                  </Typography>
                </Box>
              </Box>
            </Box>

          </Box>
        </Stack>
      </Card>

      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "none",
          mt: 0.5
        }}
      >
        <Stack direction="row" gap={0.2} >
          <IconButton>
            <FilePlusIcon color="black" size={25} />
          </IconButton>
          <IconButton>
            <ChatTextIcon size={25} color="black" />
          </IconButton>
          <IconButton>
            <ShareNetworkIcon size={25} color="black" />
          </IconButton>
          <IconButton>
            <PhoneIcon size={25} color="black" />
          </IconButton>
        </Stack>

        <Button
          variant="contained"
          disabled
          sx={{
            bgcolor: "#D1004D",
            borderRadius: 0.6,
            px: 4,
            py: 0.5,
            textTransform: "none",
            fontWeight: 600,
            "&.Mui-disabled": {
              bgcolor: "#D1004D",
              color: "#fff",
              opacity: 1,
            },
          }}
        >
          <Typography sx={{ fontSize: 14, color: 'white' }}>Book Now</Typography>
        </Button>
      </Card>
    </Box>

  </Grid>
);

const MobSearchWorker = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/mobile-Recent-Search");
  };

  return (
    <Grid sx={{ bgcolor: "#f8f0f0ff" }}>
      <Grid sx={{ pt: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
            pr: 2
          }}
        >
          <Box display="flex" alignItems="center">
            {/* Back Arrow */}
            <IconButton onClick={() => navigate(-1)} >
              <ArrowBackIos sx={{ fontSize: 20, color: "black" }} />
            </IconButton>

            {/* Location */}
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
            <IconButton onClick={() => navigate("/mobile-notifications")}>
              <BellIcon />
            </IconButton>
            <Avatar
              onClick={() => navigate("/editInfo")}
              sx={{ width: 32, height: 32 }}
              src={"https://randomuser.me/api/portraits/men/83.jpg"}
            />
          </Stack>
        </Box>

        {/* SearchBar */}
        <Box sx={{ mb: 3, px: 1 }}>
          <Box
            sx={{
              mt: 2,
              bgcolor: "#fff",
              borderRadius: 1,
              height: 40,
              display: "flex",
              alignItems: "center",
              width: "100%",
              cursor: "pointer",
              border: "1px solid #ccc",
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.08)",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.12)",
              },
            }}
            onClick={handleClick}
          >
            <MagnifyingGlassIcon
              size={20}
              color="#b0b0b0"
              style={{ marginLeft: 16, marginRight: 16 }}
            />
            <InputBase
              placeholder={'Search for “Plumbing Services”'}
              sx={{
                flex: 1,
                fontSize: "0.8rem",
                color: "#555",
              }}
              inputProps={{ readOnly: true }}
            />
            <Box sx={{ pr: 1 }}>
              <SlidersHorizontalIcon
                size={26}
                color="black"
              />
            </Box>
          </Box>
        </Box>

      </Grid>
      {workers.map((worker, index) => (
        <WorkerCard key={index} worker={worker} />
      ))}
    </Grid>
  );
};

export default MobSearchWorker;
