import React, { useState } from "react";
import {
    Grid,
    Box,
    Typography,
    Slider,
    Button,
    Switch,
} from "@mui/material";
import MobHeading from "@/modules/ClientPages/MobileView/MobTopBarHeading/mobTopBarHeading";
import RoomIcon from "@mui/icons-material/Room";
import RefreshIcon from "@mui/icons-material/Refresh";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const MobSearchWorkerFilter = () => {
    const [radius, setRadius] = useState(100);
    const [showAvailableOnly, setShowAvailableOnly] = useState(false);
    const [priceRange, setPriceRange] = useState(["", ""]);

    return (
        <Grid
            sx={{
                p: 2,
                bgcolor: "#fdfdfd",
                fontFamily: "'Poppins', sans-serif", // use your global font
            }}
        >
            {/* Header */}
            <MobHeading Heading="Filter" />

            {/* Category */}
            <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ color: "#888", fontSize: 14 }}>
                    Category of Services
                </Typography>
                <Box
                    sx={{
                        mt: 1,
                        p: 1.3,
                        border: "1px solid #ccc",
                        borderRadius: "12px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: 16,
                    }}
                >
                    <Typography sx={{ color: "#111" }}>Painting, Electrical</Typography>
                    <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
                </Box>
            </Box>

            {/* Price Range */}
            <Box sx={{ mb: 3, width: '100%' }}>
                <Typography sx={{ fontSize: 14, color: "#555", mb: 1 }}>
                    Price Range (Rs)
                </Typography>

                <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
                    {/* Min Input */}
                    <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontSize: 12, mb: 0.5 }}>Min</Typography>
                        <input
                            type="number"
                            value={priceRange[0]}
                            onChange={(e) => {
                                const value = e.target.value;
                                setPriceRange([value, priceRange[1]]);
                            }}
                            style={{
                                width: "90%",
                                padding: "8px",
                                borderRadius: "8px",
                                border: "1px solid #ccc",
                                fontSize: "14px",
                            }}
                        />
                    </Box>

                    {/* Max Input */}
                    <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontSize: 12, mb: 0.5 }}>Max</Typography>
                        <input
                            type="number"
                            value={priceRange[1]}
                            onChange={(e) => {
                                const value = e.target.value;
                                setPriceRange([priceRange[0], value]);
                            }}
                            style={{
                                width: "90%",
                                padding: "8px",
                                borderRadius: "8px",
                                border: "1px solid #ccc",
                                fontSize: "14px",
                            }}
                        />
                    </Box>
                </Box>
            </Box>


            {/* Location */}
            <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ color: "#888", fontSize: 14 }}>
                    Where would you like to Appoint your Service?
                </Typography>

                <Box
                    sx={{
                        mt: 1,
                        px: 1.5,
                        py: 1.3,
                        border: "1px solid #ccc",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <RoomIcon sx={{ color: "gray", fontSize: 20 }} />
                        <Typography
                            sx={{
                                fontSize: 15,
                                color: "#aaa", // looks like a placeholder
                                fontStyle: "italic",
                            }}
                        >
                            Thrissur, Kerala
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* Radius */}
            <Box sx={{ mb: 3 }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                    }}
                >
                    <Typography sx={{ fontSize: 14, color: "#555" }}>Radius</Typography>
                    <Typography sx={{ fontSize: 14, color: "#555" }}>KM</Typography>
                </Box>
                <Slider
                    value={radius}
                    onChange={(e, val) => setRadius(val)}
                    max={100}
                    sx={{ color: "#B08B6F" }}
                />
                <Typography align="right" sx={{ fontSize: 14 }}>
                    {radius}
                </Typography>
            </Box>

            {/* Show available toggle */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 4,
                }}
            >
                <Typography sx={{ fontSize: 15, fontWeight: 500 }}>
                    Show available Workers only
                </Typography>
                <Switch
                    checked={showAvailableOnly}
                    onChange={() => setShowAvailableOnly((prev) => !prev)}
                    sx={{
                        "& .MuiSwitch-thumb": {
                            bgcolor: "#B08B6F",
                        },
                        "& .MuiSwitch-track": {
                            bgcolor: "#d6c4b4",
                        },
                    }}
                />
            </Box>

            {/* Apply Filter Button */}
            <Box
                sx={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    bgcolor: "#fff",
                    px: 2,
                    py: 1.5,
                    boxShadow: "0 -2px 8px rgba(0,0,0,0.1)",
                    zIndex: 1300,
                }}
            >
                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        bgcolor: "#B08B6F",
                        borderRadius: "12px",
                        textTransform: "none",
                        fontSize: "16px",
                        fontWeight: "bold",
                        py: 1.4,
                        "&:hover": {
                            bgcolor: "#9e775c",
                        },
                    }}
                >
                    Apply Filter
                </Button>
            </Box>

        </Grid>
    );
};

export default MobSearchWorkerFilter;
