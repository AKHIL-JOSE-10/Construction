import React from "react";
import {
    Box,
    Typography,
    Stack,
    IconButton,
    Avatar,
    Button,
    Grid,
    Card,
    Divider
} from "@mui/material";
import {
    BellIcon,
    MapPinIcon,
    CalendarBlankIcon,
    ClockIcon,
    SuitcaseSimpleIcon,
    CalendarCheckIcon,
    BankIcon,
    UserIcon,
    PencilSimpleIcon,
    StarIcon
} from "@phosphor-icons/react";

import plumbingImg from '@/assets/plumbingImg.png'
import AdvertisementCarousel from "@/modules/ClientPages/Home/Mobile/AdvertisementCarousal";

const WorkerMainPage = () => {
    return (
        <Box sx={{ bgcolor: "#06113C", minHeight: "100vh" }}>
            {/* Top Bar */}
            <Box
                sx={{
                    bgcolor: "#06113C",
                    color: "#fff",
                    p: 2,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2,
                        pr: 2
                    }}
                >
                    <Box display="flex">

                        {/* Location */}
                        <MapPinIcon size={22} />
                        <Box display="flex" flexDirection="column" ml={1}>
                            <Typography
                                variant="caption"
                                color="white"
                                sx={{ lineHeight: 1, fontSize: 12 }}
                            >
                                Current Location
                            </Typography>
                            <Grid container>
                                <Typography sx={{ fontWeight: "550", fontSize: 15, color: 'white' }}>
                                    Thrissur, Kerala
                                </Typography>
                            </Grid>
                        </Box>
                    </Box>

                    <Stack direction="row" spacing={1} alignItems="center">
                        <IconButton onClick={() => navigate("/mobile-notifications")}>
                            <BellIcon color="white" />
                        </IconButton>
                        <Avatar
                            onClick={() => navigate("/editInfo")}
                            sx={{ width: 32, height: 32 }}
                            src={"https://randomuser.me/api/portraits/men/83.jpg"}
                        />
                    </Stack>
                </Box>

                <Typography mt={2} fontSize={20} fontWeight={600} color="white">
                    Hi, Athul Murali T
                </Typography>
                <Typography fontSize={12} color="#ccc">
                    Welcome to Archisans
                </Typography>
            </Box>


            <Grid sx={{ bgcolor: 'white', borderRadius: '8px 8px 0 0', }}>
                {/* Action Buttons */}

                <Box >
                    <Grid container spacing={2} justifyContent="space-around" pt={3}>
                        {[
                            { text: "My Works", icon: <SuitcaseSimpleIcon size={32} color="white" /> },
                            { text: "Availability", icon: <CalendarCheckIcon size={32} color="white" /> },
                            { text: "Bank Details", icon: <BankIcon size={32} color="white" /> },
                            {
                                text: "Work Profile", icon: (
                                    <Box position="relative" display="inline-block">
                                        <UserIcon size={32} color="#fff" />
                                        <PencilSimpleIcon size={20} color="#ffffffff"
                                            style={{ zIndex: 1, position: "absolute", bottom: 2, right: -5, }} />
                                    </Box>),
                            }

                        ].map(({ text, icon }, idx) => (
                            <Grid item xs={3} key={idx} textAlign="center">
                                <Avatar
                                    sx={{
                                        bgcolor: "#5233cbff",
                                        width: 60,
                                        height: 60,
                                        mx: "auto",
                                    }}
                                >
                                    {icon}
                                </Avatar>
                                <Typography fontSize={12} mt={1}>
                                    {text}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* My Service */}
                <Box mt={4} pl={1}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography fontWeight={600}>My Service</Typography>
                        <Typography fontSize={12} color="primary" mr={1}>
                            View All
                        </Typography>
                    </Stack>

                    <Box
                        mt={1}
                        sx={{
                            display: 'flex',
                            gap: 1,
                            overflowX: 'auto',
                            pb: 1,
                            mr: 0.5,
                            '&::-webkit-scrollbar': { display: 'none' },
                        }}
                    >
                        {[
                            {
                                title: 'Plumbing Service',
                            },
                            {
                                title: 'Electrical Service',
                            },
                            {
                                title: 'Carpentry Service',
                            },
                            {
                                title: 'Painting Service',
                            },
                            {
                                title: 'Cleaning Service',
                            },
                        ].map((service, idx) => (
                            <Card
                                key={idx}
                                sx={{
                                    minWidth: 100,
                                    maxWidth: 120,
                                    flex: '0 0 auto',
                                    p: 1,
                                    border: '1px solid #ccc',
                                }}
                            >
                                <img
                                    src={plumbingImg}
                                    alt={service.title}
                                    style={{ width: '100%', borderRadius: 8 }}
                                />
                                <Typography fontSize={12} mt={1}>
                                    {service.title}
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <StarIcon size={10} weight="fill" color="#FFB400" />
                                    <Typography fontSize={10} color="grey" mx={0.5}>
                                        4.8
                                    </Typography>
                                    <Typography sx={{ fontSize: 8 }}>(320 reviews)</Typography>
                                </Box>
                            </Card>
                        ))}
                    </Box>
                </Box>


                {/* Ads */}
                <AdvertisementCarousel />

                {/* New Requests */}
                <Box mt={2} px={2} mb={4}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography fontWeight={600}>New Requests</Typography>
                        <Typography fontSize={12} color="primary">
                            View All
                        </Typography>
                    </Stack>

                    {[1, 2].map((_, idx) => (
                        <Box
                            key={idx}
                            sx={{
                                bgcolor: "#fff",
                                borderRadius: 1,
                                p: 2,
                                mt: 2,
                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                border:'1px solid #ccc'
                            }}
                        >
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Avatar
                                    variant="rounded"
                                    src={plumbingImg}
                                    sx={{ width: 56, height: 56 }}
                                />
                                <Box flex={1}>
                                    <Typography fontWeight={650}>Plumbing</Typography>
                                    <Stack direction="row" spacing={1} mt={0.5}>
                                        <CalendarBlankIcon size={14} />
                                        <Typography fontSize={12}>Sunday, 12 June</Typography>
                                    </Stack>
                                    <Stack direction="row" spacing={1} mt={0.5}>
                                        <ClockIcon size={14} />
                                        <Typography fontSize={12}>11:00 – 12:00 AM</Typography>
                                    </Stack>
                                </Box>
                            </Stack>
<Divider sx={{ my: 2, height:2, color: "rgba(243, 235, 235, 1)" }} />
                            <Box mt={2}>
                                <Box justifyContent="space-between" alignItems="center">
<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }}>
    {/* avatar */}
    <Avatar
        src="https://randomuser.me/api/portraits/men/45.jpg"
        alt="Dr. Joseph Brostito"
        sx={{ width: 40, height: 40 }}
    />
    
    <Box sx={{ flex: 1 }}>
        <Typography fontSize={14} fontWeight={600}>
            Daison Babu
        </Typography>

        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                mt: 0.5,
            }}
        >
            <Typography fontSize={12} color="grey">
                Palakkad
            </Typography>
            <Typography
                fontSize={10}
                sx={{
                    bgcolor: "#E0F7FA",
                    display: "inline-block",
                    px: 1,
                    borderRadius: 1,
                }}
            >
                New Request
            </Typography>
        </Box>
    </Box>
</Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', mt: 2 }}>
                                        <Button
                                            variant="outlined"
                                            sx={{ color: "black", fontSize: 14, px: 5 }}
                                        >
                                            Book Now
                                        </Button>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                textTransform: "none",
                                                fontSize: 14,
                                                bgcolor: "#D1004D",
                                                px: 5,
                                            }}
                                        >
                                            Accept
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>

            </Grid>

        </Box>
    );
};

export default WorkerMainPage;
