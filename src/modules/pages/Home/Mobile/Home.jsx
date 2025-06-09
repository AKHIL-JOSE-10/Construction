import {
  KeyboardArrowDownOutlined,
  LocationOnOutlined,
  NotificationsNoneOutlined,
  Search as SearchIcon,
  StarOutline,
  Tune,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Grid,
  Input,
  InputAdornment,
  Typography,
  IconButton,
} from "@mui/material";
import React from "react";
import {
  color,
  ServiceList,
  ServiceListValues,
  textDecoration,
} from "./constants";
import { ServiceLayer } from "./ServiceLayer";
import MobileBottomTab from "../../../components/Mobile/mobileBottomTab";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate();

  return (
    <Grid container size={12}>
      {/* Top part with search bar and information */}
      <Grid
        container
        size={12}
        sx={{
          height: "18vh",
          bgcolor: color.primary,
          position: "relative",
        }}
        justifyContent={"center"}
        overflow={"hidden"}
        mb={2}
      >
        {/* Top Header information container */}
        {/* <Box
          sx={{
            width: "70%",
            height: "18vh",
            bgcolor: color.dark,
            borderRadius: "0px 1000px 1000px 0px",
            position: "absolute",
            top: -10,
            left: -20,
            zIndex: 0,
          }}
        /> */}
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
            <Typography sx={{ ...textDecoration.headerSecondary }}>
              Current Location
            </Typography>
            <Grid container>
              <Typography sx={{ ...textDecoration.headerPrimary }}>
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
              >
              </Avatar>
            </Link>
          </Grid>
        </Grid>
        {/* Search bar container */}
        <Grid
          sx={{
            bgcolor: color.layoutColor,
            height: "5vh",
            borderRadius: "1000px",
            display: "flex",
            alignItems: "center",
            px: 1,
            cursor: "pointer"
          }}
          size={10}
          onClick={() => navigate('/mobile-search-worker')}
        >
          <SearchIcon sx={{ color: "gray", mr: 1 }} />
          <Typography sx={{ color: "#c0c0c0", fontSize: "0.9em" }}>
            Job title, keyword, worker
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Tune sx={{ color: "gray" }} />
        </Grid>
        {/* <Box
          sx={{
            width: "10vh",
            height: "10vh",
            bgcolor: color.dark,
            borderRadius: "100%",
            position: "absolute",
            bottom: -30,
            right: -30,
            zIndex: -1000,
          }}
        /> */}

      </Grid>
      <Grid
        container
        size={12}
        direction={"column"}
        sx={{
          bgcolor: color.layoutColor,
          height: "100%",
          paddingBottom: "60px",
        }}
      >
        <Grid container>
          <Grid container size={12} p={1} sx={{ height: "fit-content" }}>
            <Grid flexGrow={1}>
              <Typography sx={{ ...textDecoration.headingPrimaryDark }}>
                Service Category
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            p={1}
            spacing={2}
            alignItems={"flex-start"}
            justifyContent={"center"}
            sx={{ overflow: "hidden", height: "38vh" }}
          >
            {ServiceList.slice(0, 6).map((data) => (
              <ServiceLayer key={data.name} data={data} />
            ))}
          </Grid>
        </Grid>

        <Grid container size={12} sx={{ mt: 1 }}>
          <Grid container size={12} p={1} sx={{ height: "fit-content" }}>
            <Grid flexGrow={1}>
              <Typography sx={{ ...textDecoration.headingPrimaryDark, mb: 2 }}>
                Popular Service on Archisans
              </Typography>
            </Grid>
            <Grid>
              <Typography
                mt={0.4}
                sx={{ ...textDecoration.headingPrimaryColored }}
              >
                See all
              </Typography>
            </Grid>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row", // Horizontal layout
                overflowX: "auto", // Enable horizontal scrolling
                width: "100vw", // Full viewport width
                gap: "20px",
                scrollbarWidth: "thin",
                "&::-webkit-scrollbar": {
                  height: "8px", // Height for horizontal scrollbar
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#aaa",
                  borderRadius: "4px",
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              {[...Array(4)].map((_, index) => (
                <Grid
                  key={index}
                  container
                  direction={"column"}
                  size={3}
                  sx={{
                    width: "30vh",
                    minWidth: "30vh", // Prevent shrinking
                    flexShrink: 0, // Prevent shrinking when overflowing
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                  mt={2}
                >
                  <Grid
                    size={12}
                    sx={{
                      height: "70%",
                      borderRadius: "12px",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <img
                      src="/assets/DummyImages/Sample-1.png"
                      style={{ width: "100%", height: "100%" }}
                      alt="Sample"
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        bgcolor: color.primary,
                        height: "1.4em",
                        width: "7em",
                        borderRadius: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        sx={{ color: color.TextColorPrimary, fontSize: "12px" }}
                      >
                        Starts @ 100$/hr
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item size={12} spacing={1} sx={{ padding: "5px" }}>
                    <Typography sx={{ fontSize: "10px", fontWeight: "600" }}>
                      Electrical Help {index + 1}
                    </Typography>
                    <Typography sx={{ fontSize: "8px", color: "gray" }}>
                      The cost of house cleaning depends on the square footage
                      being cleaned
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          size={12}
          direction={"column"}
          p={1}
          pt={4}
          sx={{ overflow: "hidden", mt: 1 }}
        >
          <Grid container size={12} sx={{ height: "fit-content" }}>
            <Grid flexGrow={1}>
              <Typography sx={{ ...textDecoration.headingPrimaryDark, mb: 2 }}>
                Top Workers Near You
              </Typography>
            </Grid>
            <Grid>
              <Typography
                mt={0.4}
                sx={{ ...textDecoration.headingPrimaryColored }}
              >
                See all
              </Typography>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              overflowX: "auto",
              width: "100vw",
              gap: "20px",
              scrollbarWidth: "thin",
              "&::-webkit-scrollbar": {
                height: "8px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#aaa",
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            {[...Array(4)].map((_, index) => (
              <Link
                to="/mobile-workerpage"
                key={index}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Grid
                  container
                  direction="column"
                  height="28vh"
                  minWidth="15vh"
                  mt={2}
                  sx={{
                    border: "1px solid rgba(237, 237, 237, 1)",
                    borderRadius: "12px",
                    cursor: "pointer",
                    overflow: "hidden",
                  }}
                >
                  <Grid
                    item
                    height="50%"
                    sx={{
                      borderTopRightRadius: "12px",
                      borderTopLeftRadius: "12px",
                    }}
                  >
                    <img
                      src="/assets/DummyImages/Sample-2.jpg"
                      width="100%"
                      height="100%"
                      alt="Worker"
                    />
                  </Grid>
                  <Grid item container direction="column" height="40%" ml={1}>
                    <Grid
                      item
                      container
                      direction="row"
                      sx={{
                        bgcolor: "rgba(254, 252, 232, 1)",
                        width: "40px",
                        borderRadius: "6px",
                      }}
                      justifyContent="space-around"
                    >
                      <StarOutline
                        sx={{ color: "rgba(234, 179, 8, 1)", fontSize: "15px" }}
                      />
                      <Typography
                        sx={{ color: "rgba(234, 179, 8, 1)", fontSize: "12px" }}
                      >
                        5.0
                      </Typography>
                    </Grid>
                    <Grid item mt={1}>
                      <Typography sx={{ color: "rgba(10, 6, 20, 1)", fontSize: "10px" }}>
                        Perry Wilson
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ color: "rgba(123, 123, 123, 1)", fontSize: "10px" }}>
                        Location
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid
          container
          direction={"column"}
          size={12}
          pt={3}
          pb={1}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography sx={{ color: "rgba(119, 119, 119, 1)" }}>
            Don't see what you are looking for?
          </Typography>

          <Typography
            component={Link}
            to="/mobile-service-category"
            sx={{
              color: "hsl(26, 29.10%, 56.30%)",
              textDecoration: 'none',
              cursor: 'pointer',
              fontWeight: 500
            }}
          >
            View all services
          </Typography>
        </Grid>
      </Grid>
      <MobileBottomTab />
    </Grid>
  );
}
