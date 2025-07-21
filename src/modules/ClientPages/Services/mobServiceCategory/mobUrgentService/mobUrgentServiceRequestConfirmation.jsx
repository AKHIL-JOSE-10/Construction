import React from "react";
import {
    Box,
    Card,
    CardContent,
    Avatar,
    Typography,
    Divider,
    Button,
    Grid,
    Stack,
} from "@mui/material";

import {
    StarIcon,
    PhoneIcon,
    MapPinIcon,
    UserIcon,
    CalendarCheckIcon,
    WrenchIcon,
} from "@phosphor-icons/react";
import MobHeading from "@/modules/components/Mobile/mobileHeading";
import { useNavigate } from "react-router-dom";

const MobUrgentServiceRequestConfirmation = () => {


    return (
        <Box sx={{ p: 2 }}>

            <MobHeading Heading='Fast booking' />

            <Box>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar
                        sx={{ width: 66, height: 66, borderRadius: 0.5 }}
                        src=""
                    />
                    <Box sx={{ width: "100%" }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <Typography sx={{ fontSize: 18, fontWeight: 600, ml: 0.3 }}>Athul Murali T</Typography>
                            <Box
                                sx={{
                                    ml: "auto",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 0.3,
                                    mb: 1.3
                                }}
                            >
                                <StarIcon size={16} color="#FFC107" weight="fill" />
                                <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
                                    4.7
                                </Typography>
                            </Box>
                        </Box>

                        <Stack direction="row" alignItems="center" spacing={0.5} mb={0.9}>
                            <MapPinIcon size={15} color="gray" />
                            <Typography sx={{ fontSize: 12, color: "gray" }}>
                                Thrissur, kerala
                            </Typography>
                        </Stack>

                        <Typography sx={{ fontSize: 16, color: "#0077ff", mt: 0.5, ml: 0.3 }}>
                            $120 <span style={{ color: "gray" }}>/hour</span>
                        </Typography>
                    </Box>
                </Stack>
                <Box
                    sx={{
                         py:3,
                        px: 2,
                        mt: 2,
                        border: '1px solid rgba(226, 223, 223, 1)',
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                        borderRadius: 1,
                        backgroundColor: "#fff",
                    }}
                >
                    <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 2, color: "#0077ff" }}>
                        Your Booking
                    </Typography>

                    <Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: 1.5,
                            }}
                        >
                            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <CalendarCheckIcon size={19} color="gray" />
                                <Typography sx={{ fontSize: 14, ml: 1 }}>Date</Typography>
                            </Box>
                            <Typography sx={{ fontSize: 14, fontWeight: 600 }}>12 - 14 Nov 2024</Typography>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: 1.5,
                            }}
                        >
                            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <UserIcon size={20} color="gray" />
                                <Typography sx={{ fontSize: 15, ml: 1 }}>Worker</Typography>
                            </Box>
                            <Typography sx={{ fontSize: 14, fontWeight: 600 }}>Mathew Kiayne</Typography>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: 1.5,
                            }}
                        >
                            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <WrenchIcon size={20} color="gray" />
                                <Typography sx={{ fontSize: 15, ml: 1 }}>Service</Typography>
                            </Box>
                            <Typography sx={{ fontSize: 14, fontWeight: 600 }}>Plumbing</Typography>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <PhoneIcon size={20} color="gray" />
                                <Typography sx={{ fontSize: 15, ml: 1 }}>Phone</Typography>
                            </Box>
                            <Typography sx={{ fontSize: 14, fontWeight: 600 }}>0214345646</Typography>
                        </Box>
                    </Box>


                    <Divider sx={{ my: 3 }} />

                    <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 1, color: "#0077ff" }}>
                        Price Details
                    </Typography>

                    <Stack spacing={1.5}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography sx={{ fontSize: 14 }}>Price</Typography>
                            <Typography sx={{ fontSize: 14 }}>$139.00</Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between" >
                            <Typography sx={{ fontSize: 14 }}>Admin fee</Typography>
                            <Typography sx={{ fontSize: 14 }}>$2.50</Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between" >
                            <Typography sx={{ fontWeight: 600 }}>Total price</Typography>
                            <Typography sx={{ fontWeight: 600 }}>$141.50</Typography>
                        </Box>
                    </Stack>

                </Box>
            </Box>

            <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                <Button
                    fullWidth
                    variant="outlined"
                    color="inherit"
                    sx={{
                        borderRadius: 0.5,
                        textTransform: "none",
                        fontWeight: 600,
                    }}
                >
                    Decline
                </Button>
                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        backgroundColor: "#e91e63",
                        color: "#fff",
                        borderRadius: 0.5,
                        textTransform: "none",
                        fontWeight: 600,
                        "&:hover": {
                            backgroundColor: "#d81b60",
                        },
                    }}
                >
                    Accept
                </Button>
            </Stack>

            {/* Hot Offer */}
            <Typography fontWeight={600} mt={5}>
                Hot offer
            </Typography>
            <Grid container spacing={1}>
                <Grid >
                    <Box
                        sx={{
                            p: 1.5,
                            bgcolor: "#fff",
                            borderRadius: 2,
                            boxShadow: "0px 1px 4px rgba(0,0,0,0.1)",
                        }}
                    >
                        <Stack direction="row" spacing={1} alignItems="center">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/196/196561.png"
                                alt="Mastercard"
                                style={{ width: 84, height: 84 }}
                            />
                            <Box>
                                <Typography fontSize={17} fontWeight={600}>
                                    15% discount with mastercard
                                </Typography>
                                <Typography fontSize={15} color="grey">
                                    Lorem ipsum dolor sit amet et adip
                                </Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MobUrgentServiceRequestConfirmation;
