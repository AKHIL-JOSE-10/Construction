import React from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  Button,
  Stack,
  IconButton,
  Chip,
  InputBase,
} from "@mui/material";
import {
  KeyboardArrowDownOutlined,
  Tune,
  Search,
  LocationOnOutlined,
  ArrowBackIos
} from "@mui/icons-material";
import {
  BellIcon,
  MapPinIcon,
  ShareNetworkIcon,
  HeartIcon,
  StarIcon,
} from "@phosphor-icons/react";

import { useNavigate } from "react-router-dom";

const workers = [
  {
    name: "Alan Jose",
    location: "Kukatpally",
    rating: 3.8,
    reviews: 520,
    roles: ["Designer", "Architect", "+ 2"],
    description:
      "I will do app UI UX design in figma and Frontend coding. Fast and Super cheap",
    price: "899 Rs",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Alan Jose",
    location: "Kukatpally",
    rating: 3.8,
    reviews: 520,
    roles: ["Designer", "Architect", "+ 2"],
    description:
      "I will do app UI UX design in figma and Frontend coding. Fast and Super cheap",
    price: "799 Rs",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const WorkerCard = ({ worker }) => (
  <Box
    sx={{
      mx: 2,
      mb: 2,
      borderRadius: 0.5,
      bgcolor: "#fff",
      overflow: "hidden",
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    }}
  >
    {/* Image with Rating */}
    <Box sx={{ position: "relative", height: 110 }}>
      <img
        src={worker.image}
        alt="background"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      {/* Rating Box */}
      <Box
        sx={{
          position: "absolute",
          bottom: 8,
          right: 8,
          bgcolor: "rgba(255, 255, 255, 0.7)",
          borderRadius: 2,
          px: 1,
          py: 0.3,
          display: "flex",
          alignItems: "center",
          boxShadow: 2,
        }}
      >
        <StarIcon fontSize={13} weight="fill" color="#7D81F0" />
        <Typography fontSize={12} fontWeight={650} ml={0.3}>
          {worker.rating}
        </Typography>
        <Typography fontSize={9} fontWeight={650}>
          ({worker.reviews} reviews)
        </Typography>
      </Box>

      {/* Action Buttons */}
      <Stack
        direction="row"
        spacing={1.5}
        sx={{ position: "absolute", top: 8, right: 8 }}
      >
        <IconButton sx={{ bgcolor: "rgba(255,255,255,0.75)" }} size="small">
          <ShareNetworkIcon fontSize="medium" color="#0030CC" />
        </IconButton>
        <IconButton sx={{ bgcolor: "rgba(255,255,255,0.75)" }} size="small">
          <HeartIcon fontSize="medium" color="#ff0000ff" />
        </IconButton>
      </Stack>
    </Box>

    {/* Info Section */}
    <Box sx={{ p: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar src={worker.avatar} sx={{ height: 55, width: 55 }} />
          <Box>
            <Typography mb={0.5} fontSize={18} fontWeight={600}>
              {worker.name}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <MapPinIcon size={18} />
              <Typography color="text.secondary" fontSize={15}>
                {worker.location}
              </Typography>
            </Stack>
          </Box>
        </Stack>
        <Box textAlign="right">
          <Typography fontSize={15} color="grey">
            Starts from
          </Typography>
          <Typography fontSize={18} fontWeight={600}>
            {worker.price} /hr
          </Typography>
        </Box>
      </Stack>

      {/* Roles */}
      <Stack direction="row" spacing={1} mt={1} mb={1}>
        {worker.roles.map((role, i) => (
          <Chip
            key={i}
            label={role}
            size="small"
            sx={{
              bgcolor: "#f1e9ff",
              color: "#5f3dc4",
              fontWeight: 500,
              fontSize: 12,
            }}
          />
        ))}
      </Stack>

      {/* Description */}
      <Typography fontSize={13} mb={2}>
        {worker.description}
      </Typography>

      {/* Book Button */}
      <Button
        fullWidth
        variant="outlined"
        sx={{
          borderColor: "#6739B7",
          color: "#a17fddff",
          bgcolor: "#f6f3f9ff",
          textTransform: "none",
          fontSize: 15.5,
          py: 0.5,
        }}
      >
        Book Now
      </Button>
    </Box>
  </Box>
);

const MobSearchWorker = () => {
  const navigate = useNavigate();

  const handleOpen = () => {
    console.log("Location dropdown clicked");
  };

  return (
    <Box sx={{ pb: 8 }}>
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

    {/* Location Info */}
     <Box display="flex" alignItems="center">
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
          

  {/* Notification and Avatar */}
  <Stack direction="row" spacing={1} alignItems="center">
    <IconButton onClick={() => navigate("/mobile-notifications")}>
      <BellIcon color="#050b5fff" />
    </IconButton>
    <Avatar
      onClick={() => navigate("/editInfo")}
      sx={{ width: 32, height: 32 }}
      src="https://randomuser.me/api/portraits/men/83.jpg"
    />
  </Stack>
</Box>

      {/* Search Bar */}
      <Box
              mt={2}
              display="flex"
              alignItems="center"
              border="1px solid #ccc"
              borderRadius={1}
              px={1}
              py={1}
              mx={1}
              mb={2}
            >
              <Search sx={{ mr: 1, cursor: 'pointer' }} onClick={() => navigate('/mobile-search-worker')} />
              <InputBase sx={{ fontSize: "14px" }} placeholder="Search Services & Workers" fullWidth />
              <Tune sx={{ color: "#888" }} onClick={() => navigate('/mobile-Search-filter')} />
            </Box>

      {/* Worker Cards */}
      {workers.map((worker, idx) => (
        <WorkerCard key={idx} worker={worker} />
      ))}
    </Box>
  );
};

export default MobSearchWorker;
