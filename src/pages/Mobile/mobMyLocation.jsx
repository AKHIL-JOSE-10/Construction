import {
    Grid,
    Typography,
    Box,
    List,
    ListItem,
    ListItemAvatar,
    IconButton,
    Menu,
    MenuItem,
    Paper,
    Button,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MobHeading from "../../modules/components/Mobile/mobileHeading";
import { useState } from "react";

const MobMyLocation = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const addressList = [
        {
            title: "Home Address",
            details: "Jane Cooper, Pudukkad House, Thrissur, Kerala, Ph: 93648576",
        },
        {
            title: "Work Address",
            details: "Jane Cooper, Gandhi nagar, Trivandrum, Kerala, Ph: 93648576",
        },
        {
            title: "Current Address",
            details: "Jane Cooper, Near Lulu Mall, Kochi, Kerala, Ph: 93648576",
        },
    ];

    return (
        <Box >
            <MobHeading Heading="My Addresses" />
            <Grid container>
                <Typography variant="body2" sx={{ pl: 2, mb: 2 }}>
                    Your saved addresses
                </Typography>
                <Box px={1.5} pt={0} sx={{ width: "100%" }}>
                    {addressList.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                backgroundColor: "#f9f9f9",
                                borderRadius: 1,
                                p: 1.5,
                                border: "1px solid #e0e0e0",
                                mb: 1.5,
                            }}
                        >
                            <List disablePadding>
                                <ListItem
                                    disableGutters
                                    secondaryAction={
                                        <>
                                            <IconButton onClick={handleMenuClick}>
                                                <MoreVertIcon sx={{ color: "#757575" }} />
                                            </IconButton>
                                            <Menu
                                                anchorEl={anchorEl}
                                                open={Boolean(anchorEl)}
                                                onClose={handleMenuClose}
                                            >
                                                <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
                                                <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
                                            </Menu>
                                        </>
                                    }
                                >
                                    <ListItemAvatar>
                                        <LocationOnIcon sx={{ color: "#BFA088", fontSize: 28 }} />
                                    </ListItemAvatar>
                                    <Box sx={{ width: "100%", ml:-1 }}>
                                        <Typography
                                            sx={{ fontSize: "15px", fontWeight: "bold", mb: 0.5 ,}}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: "text.secondary", fontSize: "14px" }}
                                        >
                                            {item.details}
                                        </Typography>
                                    </Box>
                                </ListItem>
                            </List>
                        </Box>
                    ))}
                </Box>
            </Grid>

            {/* Fixed Bottom Button */}
            <Box
                sx={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 2,
                    backgroundColor: "#fff",
                    zIndex: 10,
                }}
            >
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ borderRadius: "10px", textTransform: "none" }}
                >
                    Add New Address
                </Button>
            </Box>
        </Box>
    );
};

export default MobMyLocation;
