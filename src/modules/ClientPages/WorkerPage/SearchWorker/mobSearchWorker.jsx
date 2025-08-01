import React from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  Button,
  Stack,
  IconButton,
  Card,
  Chip,
} from "@mui/material";
import {
  ArrowBackIos,
  LocationOnOutlined,
} from "@mui/icons-material";
import {
  BellIcon,
  MagnifyingGlassIcon,
  SlidersHorizontalIcon,
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
    price: "₹ 7,499",
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
    price: "₹ 7,499",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const WorkerCard = ({ worker }) => (
  <Box
    sx={{
      mx: 2,
      mb: 2,
      borderRadius: 1,
      bgcolor: "#fff",
      overflow: "hidden",
      boxShadow: 1,
    }}
  >
    {/* Image with Rating */}
 <Box sx={{ position: "relative", height: 120 }}>
      <img
        src={worker.image}
        alt="background"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      {/* Rating Box - Semi-transparent white */}
      <Box
        sx={{
          position: "absolute",
          bottom: 8,
          right: 8,
          bgcolor: "rgba(255, 255, 255, 0.75)", // Transparent white
          borderRadius: 2,
          px: 1,
          py: 0.3,
          display: "flex",
          alignItems: "center",
          boxShadow: 2,
        }}
      >
        <StarIcon sx={{ fontSize: 16, color: "#FFB400" }} />
        <Typography fontSize={12} fontWeight={600} ml={0.5}>
          {worker.rating} ({worker.reviews} reviews)
        </Typography>
      </Box>

      {/* Action Buttons - Transparent white background */}
      <Stack
        direction="column"
        spacing={1}
        sx={{ position: "absolute", top: 8, right: 8 }}
      >
        <IconButton sx={{ bgcolor: "rgba(255,255,255,0.75)" }} size="small">
          <ShareNetworkIcon fontSize="small" />
        </IconButton>
        <IconButton sx={{ bgcolor: "rgba(255,255,255,0.75)" }} size="small">
          <HeartIcon fontSize="small" />
        </IconButton>
      </Stack>
    </Box>

    {/* Info */}
    <Box sx={{ p: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar src={worker.avatar} />
          <Box>
            <Typography fontWeight={700}>{worker.name}</Typography>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <MapPinIcon size={14} />
              <Typography color="text.secondary" fontSize={13}>
                {worker.location}
              </Typography>
            </Stack>
          </Box>
        </Stack>
        <Box textAlign="right">
          <Typography fontSize={13}>Starts from</Typography>
          <Typography fontWeight={600}>{worker.price} /hr</Typography>
        </Box>
      </Stack>

      {/* Tags */}
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
          borderColor: "#7d3fff",
          color: "#7d3fff",
          textTransform: "none",
          fontWeight: 600,
        }}
      >
        Book Now
      </Button>
    </Box>
  </Box>
);

const MobSearchWorker = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ pb: 8 }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          pt: 2,
        }}
      >
        <Box display="flex" alignItems="center">
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIos sx={{ fontSize: 20 }} />
          </IconButton>
          <LocationOnOutlined sx={{ fontSize: 24, color: "black" }} />
          <Box ml={1}>
            <Typography fontSize={12} color="gray">
              Current location
            </Typography>
            <Typography fontWeight="bold">
              Kuala Lumpur, Malaysia
            </Typography>
          </Box>
        </Box>

        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton onClick={() => navigate("/notifications")}>
            <BellIcon size={22} />
          </IconButton>
          <Avatar
            src="https://randomuser.me/api/portraits/men/85.jpg"
            sx={{ width: 32, height: 32 }}
            onClick={() => navigate("/profile")}
          />
        </Stack>
      </Box>

      {/* Search */}
      <Box
        sx={{
          mx: 2,
          mt: 2,
          mb: 3,
          bgcolor: "#fff",
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          px: 2,
          py: 1,
          boxShadow: 1,
        }}
      >
        <MagnifyingGlassIcon size={20} color="#999" />
        <Typography color="#999" ml={1} flexGrow={1} fontSize={14}>
          Search Services & Workers
        </Typography>
        <SlidersHorizontalIcon size={20} />
      </Box>

      {/* Cards */}
      {workers.map((worker, idx) => (
        <WorkerCard key={idx} worker={worker} />
      ))}


    </Box>
  );
};

export default MobSearchWorker;
