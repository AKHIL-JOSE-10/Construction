import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, List, ListItem, ListItemButton } from "@mui/material";

const routes = [
  { path: "/signin", label: "Signin Page" },
  { path: "/mobile-signin", label: "Mobile Signin" },
  { path: "/mobile-signup", label: "Mobile Signup" },
  { path: "/mobile-profile", label: "Mobile Profile" },
  { path: "/mobile-bookings", label: "Mobile Bookings" },
  { path: "/mobile-booking-info", label: "Mobile Booking Info" },
  { path: "/mobile-service-category", label: "Mobile Service Category" },
  { path: "/mobile-workerpage", label: "Mobile Worker Page" },
  { path: "/mobile-settings", label: "Mobile Settings" },
  { path: "/mobile-notifications", label: "Mobile Notifications" },
  { path: "/home", label: "Home" },
  { path: "/profile", label: "Profile" },
  { path: "/bookings", label: "Bookings" },
  { path: "/forgot-password", label: "Forgot Password" },
  { path: "/editInfo", label: "Edit Info" },
];

function RouteListPage() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h5" gutterBottom>
        All Routes
      </Typography>
      <List>
        {routes.map((route) => (
          <ListItem key={route.path} disablePadding>
            <ListItemButton component={Link} to={route.path}>
              {route.label}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default RouteListPage;
