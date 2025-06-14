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
import MobHeading from "@/modules/components/Mobile/mobileHeading";
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
    },
    {
        id: 2,
        name: "Tim Brevis",
        price: "$6.88",
        rating: 3.8,
        reviews: 40,
        verified: false,
        img: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
        id: 3,
        name: "Lana Wu",
        price: "$7.50",
        rating: 4.3,
        reviews: 120,
        verified: true,
        img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        id: 4,
        name: "Carlos",
        price: "$6.20",
        rating: 4.1,
        reviews: 95,
        verified: false,
        img: "https://randomuser.me/api/portraits/men/21.jpg",
    },
    {
        name: "Amara",
        price: "$5.45",
        rating: 4.6,
        reviews: 210,
        verified: true,
        img: "https://randomuser.me/api/portraits/women/47.jpg",
    },
    {
        id: 5,
        name: "Ethan Clark",
        price: "$7.10",
        rating: 4.2,
        reviews: 150,
        verified: true,
        img: "https://randomuser.me/api/portraits/men/35.jpg",
    },
    {
        id: 6,
        name: "Aisha Khan",
        price: "$5.75",
        rating: 3.9,
        reviews: 88,
        verified: false,
        img: "https://randomuser.me/api/portraits/women/28.jpg",
    },
    {
        id: 7,
        name: "Liam Chen",
        price: "$6.30",
        rating: 4.4,
        reviews: 134,
        verified: true,
        img: "https://randomuser.me/api/portraits/men/49.jpg",
    },
    {
        id: 8,
        name: "Maya Patel",
        price: "$5.60",
        rating: 4.5,
        reviews: 200,
        verified: true,
        img: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
        id: 9,
        name: "Noah",
        price: "$6.95",
        rating: 3.7,
        reviews: 70,
        verified: false,
        img: "https://randomuser.me/api/portraits/men/14.jpg",
    },
];

const relatedSearches = ["Architects", "Steel Fabricators", "Civil Engineers"];

const MobSavedWorkers = () => {
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
            <MobHeading Heading='Saved Workers' />
            <Grid sx={{ px: 1.5, }}>


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
                        <Grid key={index} sx={{ display: "flex", width: "48%",mb:2 }}>
                            <Box
                                onClick={() => handleClick(worker)}
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
                                                            fontSize: "8px",
                                                            fontWeight: 600,
                                                            color: "green",
                                                        }}
                                                    >
                                                        Archisans Verified
                                                    </Typography>
                                                    <VerifiedIcon
                                                        sx={{ fontSize: 10, ml: 0.3, color: "green" }}
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
                                            <LocationOnOutlined sx={{ fontSize: 16, mr: 0.5 }} />
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
                                                sx={{ fontSize: 14, color: "#fbc02d", mr: 0.5 }}
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
                                            <Bookmark sx={{ fontSize: 25, color: "#B49176" }} />
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
        </Box>
    );
};

export default MobSavedWorkers;
