import React from "react";
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  InputBase,
  Chip,
} from "@mui/material";
import {
  LocationOnOutlined,
  NotificationsNone,
  Search,
  Tune,
  Close,
  ArrowOutward,
  AccessTime as AccessTimeIcon,
  ArrowBackIos
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import Artisans from '../../../../assets/Artisans.png';
import CCTV from '../../../../assets/CCTV.png';
import Architectural from '../../../../assets/Architectural.png';
import Legal from '../../../../assets/Legal.png';
import Education from '../../../../assets/Education.png';
import Acoustic from '../../../../assets/Acoustic.png';


const MobRecentSearch = () => {

  const navigate = useNavigate();

  const recentSearches = [
    { name: "Artisans Services" },
    {
      name: "Tim Brevis",
      avatar: true,
      image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    { name: "Architectural Services" },
    {
      name: "Ethan Clark",
      avatar: true,
      image: "https://randomuser.me/api/portraits/men/35.jpg",
    },
  ];

  const popularSearches = [
    "Masonry Work",
    "Carpentry Services",
    "Metal Fabrication",
    "Plumbing Services",
    "Painting Services",
  ];

  const topServices = [
    {
      name: "Architectural Services",
      image: Architectural
    },
    {
      name: "Artisans Services",
      image: Artisans
    },
    {
      name: "Security & Automation Services",
      image: CCTV
    },
    {
      name: "Acoustic Services",
      image: Acoustic
    },
    {
      name: "Legal Services",
      image: Legal
    },
    {
      name: "Education Services",
      image: Education
    },
  ];

  return (
    <Box py={2} sx={{ fontFamily: "sans-serif" }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" px={1}>
        {/* Left Side: Back Arrow + Location Info */}
        <Box display="flex" alignItems="flex-start" >
          <ArrowBackIos
            sx={{ fontSize: 22, cursor: "pointer", mt: 0.4, color: 'grey' }}
            onClick={() => navigate(-1)}
          />
          <LocationOnOutlined sx={{ fontSize: 25, mr: 1, mt: 0.5, color: 'black' }} />
          <Box display="flex" flexDirection="column">
            <Typography variant="caption" color="gray" sx={{ lineHeight: 1, fontSize: 13 }}>
              Current Location
            </Typography>
            <Typography sx={{ fontWeight: 'Bold', fontSize: 15 }}>
              Kuala Lumpur, Malaysia
            </Typography>
          </Box>
        </Box>

        {/* Right Side: Notification + Avatar */}
        <Box display="flex" alignItems="center" gap={2}>
          <NotificationsNone sx={{ fontSize: "28px" }} />
          <Avatar
            src="https://randomuser.me/api/portraits/men/76.jpg"
            sx={{ width: 35, height: 35 }}
          />
        </Box>
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
      >
        <Search sx={{ mr: 1, cursor: 'pointer' }} onClick={() => navigate('/mobile-search-worker')} />
        <InputBase placeholder="Search Services & Workers" fullWidth />
        <Tune sx={{ color: "#888" }} />
      </Box>

      <Box >
        {/* Recent Searches */}
        <Box mt={3} borderBottom="1px solid rgba(0, 0, 0, 0.1)" boxShadow='0px 2px 4px rgba(0, 0, 0, 0.1)' px={1}>
          <Typography fontWeight={500} mb={1} color="grey">
            Recent searches
          </Typography>
          {recentSearches.map((item, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb={1}
              onClick={() => navigate('/mobile-search-worker')}
              sx={{ cursor: 'pointer' }}
            >
              {/* Left: Clock for first 2, Search for rest */}
              <Box display="flex" alignItems="center" gap={1}>
                {index < 2 ? (
                  <AccessTimeIcon sx={{ fontSize: 22, color: "gray" }} />
                ) : (
                  <Search sx={{ fontSize: 25, color: "gray" }} />
                )}
                <Typography sx={{ fontSize: '90%', fontWeight: 550 }}>{item.name}</Typography>
              </Box>

              {/* Right: Avatar (if any) + Arrow/Close */}
              <Box display="flex" alignItems="center" gap={1}>
                {item.avatar && (
                  <Avatar
                    src={item.image}
                    sx={{ width: 30, height: 30 }}
                  />
                )}
                <IconButton size="small">
                  {item.avatar ? <ArrowOutward /> : <Close />}
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Popular Services */}
        <Box sx={{
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          px:1
        }}>
          <Typography sx={{
            fontSize: '115%', fontWeight: 600, mb: 2, mt: 3,
          }} >
            Popular services
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1} bgcolor={'white'} >
            {popularSearches.map((item, idx) => (
              <Chip
                key={idx}
                label={item}
                clickable
                onClick={() => navigate('/mobile-search-worker')}
                sx={{
                  borderRadius: 2,
                  backgroundColor: "white",
                  border: '1px solid #D3D3D3',
                  mb: 1,
                  '& .MuiChip-deleteIcon': {
                    color: '#555555',
                    fontSize: 20,
                    marginRight: '4px',
                  },
                }}
                deleteIcon={<ArrowOutward />}
                onDelete={() => { }}
              />
            ))}
          </Box>
        </Box>


        {/* Top Services */}
        <Box mt={5} px={1}>
          <Typography fontWeight={600} fontSize={'115%'} mb={2}>
            Top services on Archisans
          </Typography>
          <Box display="flex" overflow="auto" gap={3}>
            {topServices.map((service, index) => (
              <Box
                key={index}
                textAlign="center"
                onClick={() => navigate('/mobile-search-worker')}
                sx={{ cursor: 'pointer' }}
              >
                <Avatar
                  variant="square"
                  src={service.image}
                  alt={service.name}
                  sx={{ width: 40, height: 40, margin: "0 auto" }}
                />
                <Typography variant="caption" display="block" mt={1}>
                  {service.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MobRecentSearch;
