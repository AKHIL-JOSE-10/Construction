import {
    Grid,
    Typography,
    Box,
    List,
    ListItem,
    IconButton,
    Menu,
    MenuItem,
    Button,
    ListItemAvatar,
    Avatar,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MobHeading from "../../modules/components/Mobile/mobileHeading";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { useState } from "react";

const MobSavedAddress = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);

    const handleMenuClick = (event, index) => {
        event.stopPropagation(); // Prevents triggering selection
        setAnchorEl({ anchor: event.currentTarget, index });
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
        <Box sx={{ position: "relative", minHeight: "100vh", pb: "80px" }}>
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
                                backgroundColor: selectedAddressIndex === index ? "rgb(251, 244, 236)" : "#f9f9f9",
                                borderRadius: 1,
                                p: 1,
                                border: selectedAddressIndex === index ? "2px solid rgb(225, 189, 150)" : "1px solid #e0e0e0",
                                mb: 1.5,
                                transition: "all 0.3s ease-in-out",
                                cursor: "pointer",
                            }}
                            onClick={() => setSelectedAddressIndex(index)}
                        >
                            <List disablePadding>
                                <ListItem
                                    disableGutters
                                    secondaryAction={
                                        <>
                                            <IconButton
                                                onClick={(e) => handleMenuClick(e, index)}
                                            >
                                                <MoreVertIcon sx={{ color: "#757575" }} />
                                            </IconButton>
                                            <Menu
                                                anchorEl={anchorEl?.anchor}
                                                open={anchorEl?.index === index}
                                                onClose={handleMenuClose}
                                            >
                                                <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
                                                <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
                                            </Menu>
                                        </>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: "transparent" }}>
                                            <LocationOnIcon color="primary" />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <Box sx={{ml:-1}}>
                                        <Box sx={{display:'flex', flexDirection:'row',ml:-1}}>
                                        <IconButton
                                            size="small"
                                            sx={{
                                                color: selectedAddressIndex === index ? "#1976d2" : "#bdbdbd",
                                                p: 0.5,
                                                mr: 0.5,
                                            }}
                                        >
                                            {selectedAddressIndex === index ? (
                                                <RadioButtonCheckedIcon fontSize="small" />
                                            ) : (
                                                <RadioButtonUncheckedIcon fontSize="small" />
                                            )}
                                        </IconButton>
                                        
                                            <Typography
                                                sx={{
                                                    fontSize: "15px",
                                                    fontWeight: selectedAddressIndex === index ? "bold" : "normal",
                                                    color: selectedAddressIndex === index ? "rgb(70, 39, 4)" : "inherit",
                                                }}
                                            >
                                                {item.title}
                                            </Typography>
                                            </Box>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: "text.secondary", fontSize: "14px", mt: 0.5 }}
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

export default MobSavedAddress;
