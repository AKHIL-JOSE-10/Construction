import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Typography,
  Paper,
  Avatar,
  Card,
  CardContent,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PaymentIcon from "@mui/icons-material/Payment";
import MessageIcon from "@mui/icons-material/Message";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import ChatIcon from "@mui/icons-material/Chat";
import AssignmentIcon from "@mui/icons-material/Assignment";
const help = () => {
  return (
    <Grid container spacing={3} sx={{ minHeight: "100vh" }}>
      <Grid>
        <Box>
          <Box sx={{ py: 2, ml: 2, mb: 2 }}>
            <Paper
              elevation={5}
              sx={{
                px: 2,
                py: 0.5,
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <Avatar
                src="https://randomuser.me/api/portraits/women/79.jpg"
                alt="Jane"
              />
              <Box sx={{ ml: 2, display: "flex", flexDirection: "column" }}>
                <Typography variant="body1">Jane</Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ fontSize: "0.6rem" }}
                >
                  jane.doe@example.com
                </Typography>
              </Box>
            </Paper>
          </Box>
          <Box sx={{ width: 210, pl: 1 }}>
            <List disablePadding dense>
              <Typography
                variant="body2"
                color="grey"
                sx={{ ml: 1.25, mb: 1, fontSize: "0.7rem" }}
              >
                {" "}
                Main Menu
              </Typography>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    borderRadius: 2,
                    "&:hover": { backgroundColor: "#F1E6DD" },
                    "&:hover .MuiListItemText-primary": { color: "black" },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <AccountCircle fontSize="0.75rem" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Profile"
                    slotProps={{
                      primary: {
                        sx: { color: "grey", fontSize: "0.8rem" },
                        variant: "body2",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    borderRadius: 2,
                    "&:hover": { backgroundColor: "#F1E6DD" },
                    "&:hover .MuiListItemText-primary": { color: "black" },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <HomeIcon fontSize="0.75rem" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Home"
                    slotProps={{
                      primary: {
                        sx: { color: "grey", fontSize: "0.8rem" },
                        variant: "body2",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    borderRadius: 2,
                    "&:hover": { backgroundColor: "#F1E6DD" },
                    "&:hover .MuiListItemText-primary": { color: "black" },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <NotificationsIcon fontSize="0.75rem" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Notification"
                    slotProps={{
                      primary: {
                        sx: { color: "grey", fontSize: "0.8rem" },
                        variant: "body2",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    borderRadius: 2,
                    "&:hover": { backgroundColor: "#F1E6DD" },
                    "&:hover .MuiListItemText-primary": { color: "black" },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <BookmarkIcon fontSize="0.75rem" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Saved Workers"
                    slotProps={{
                      primary: {
                        sx: { color: "grey", fontSize: "0.8rem" },
                        variant: "body2",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    borderRadius: 2,
                    "&:hover": { backgroundColor: "#F1E6DD" },
                    "&:hover .MuiListItemText-primary": { color: "black" },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <EventNoteIcon fontSize="0.75rem" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Bookings"
                    slotProps={{
                      primary: {
                        sx: { color: "grey", fontSize: "0.8rem" },
                        variant: "body2",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    borderRadius: 2,
                    "&:hover": { backgroundColor: "#F1E6DD" },
                    "&:hover .MuiListItemText-primary": { color: "black" },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <PaymentIcon fontSize="0.75rem" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Payment"
                    slotProps={{
                      primary: {
                        sx: { color: "grey", fontSize: "0.8rem" },
                        variant: "body2",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    borderRadius: 2,
                    "&:hover": { backgroundColor: "#F1E6DD" },
                    "&:hover .MuiListItemText-primary": { color: "black" },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <MessageIcon fontSize="0.75rem" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Messages"
                    slotProps={{
                      primary: {
                        sx: { color: "grey", fontSize: "0.8rem" },
                        variant: "body2",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    borderRadius: 2,
                    "&:hover": { backgroundColor: "#F1E6DD" },
                    "&:hover .MuiListItemText-primary": { color: "black" },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <ScheduleIcon fontSize="0.75rem" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Schedule"
                    slotProps={{
                      primary: {
                        sx: { color: "grey", fontSize: "0.8rem" },
                        variant: "body2",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>

              <Typography
                variant="body2"
                color="grey"
                sx={{ ml: 1.25, py: 1.5, fontSize: "0.75rem" }}
              >
                Preference
              </Typography>

              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    borderRadius: 2,
                    "&:hover": { backgroundColor: "#F1E6DD" },
                    "&:hover .MuiListItemText-primary": { color: "black" },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <SettingsIcon fontSize="0.75rem" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Settings"
                    slotProps={{
                      primary: {
                        sx: { color: "grey", fontSize: "0.8rem" },
                        variant: "body2",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    borderRadius: 2,
                    "&:hover": { backgroundColor: "#F1E6DD" },
                    "&:hover .MuiListItemText-primary": { color: "black" },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <HelpIcon fontSize="0.75rem" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Help & Support"
                    slotProps={{
                      primary: {
                        sx: { color: "grey", fontSize: "0.8rem" },
                        variant: "body2",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
          <Card
            sx={{
              backgroundColor: "#B08B6F",
              borderRadius: 2,
              boxShadow: 3,
              mx: "auto",
              width: 180,
              marginTop: "5.5rem",
              marginBottom: "5rem",
            }}
          >
            <CardContent>
              <Typography
                variant="body2"
                gutterBottom
                color="white"
                sx={{ fontSize: "0.8rem" }}
              >
                Get Pro Access
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "0.6rem" }}
                color="#f8ece9"
              >
                Unlock premium features with a Pro subscription.
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              startIcon={<WorkspacePremiumIcon sx={{ color: "#b0906f" }} />}
              sx={{
                backgroundColor: "white",
                color: "#b0906f",
                fontSize: "0.75rem",
                fontWeight: "bold",
                textTransform: "none",
                mb: 2,
                mx: "auto",
                display: "flex",
              }}
            >
              Get Pro Access
            </Button>
          </Card>
        </Box>
      </Grid>
      <Grid pt={10}>
        <Box
          sx={{
            bgcolor: "#FFFCF9",
            border: "2px solid #E7E9EF",
            height: 600,
            width: 1200,
            pl: 3,
            pt: 2,
            borderRadius: 3,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {" "}
            Help & Support
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "0.8rem", color: "grey" }}
          >
            {" "}
            Get assistance report issues, or find answers to your questions.
          </Typography>
          <Box
            sx={{
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              bgcolor: "#FFFCF9",
              border: "2px solid #E7E9EF",
              height: 470,
              width: 1170,
              mt: 2,
              mr: 2,
            }}
          >
            <Box
              sx={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                bgcolor: "#F7F0E9",
                padding: 2,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <TextField
                placeholder="Search a topic"
                variant="outlined"
                size="small"
                sx={{
                  width: "300px",
                  borderRadius: 2,
                  backgroundColor: "#FDF9F7",
                  border: "none",
                  "& .MuiInputBase-root": { height: "30px", borderRadius: 1 },
                }}
                slotProps={{
                  input: {
                    sx: { padding: "6px 8px", fontSize: "14px" },
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>
            <Grid container spacing={4} padding={5}>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    backgroundColor: "#C0A28B",
                    width: "200px",
                    height: "150px",
                    borderRadius: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 10,
                    ml: 15,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      mb: 2,
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -4,
                        left: 0,
                        width: "100%",
                        height: "2px",
                        backgroundColor: "white",
                      },
                    }}
                  >
                    <PlayCircleOutlineIcon
                      sx={{ fontSize: 40, color: "#292E3D" }}
                    />
                  </Box>
                  <Typography>Getting Started</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    backgroundColor: "#C0A28B",
                    width: "200px",
                    height: "150px",
                    borderRadius: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 10,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      mb: 2,
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -4,
                        left: 0,
                        width: "100%",
                        height: "2px",
                        backgroundColor: "white",
                      },
                    }}
                  >
                    <HelpOutlineIcon sx={{ fontSize: 40, color: "#292E3D" }} />
                  </Box>
                  <Typography>FAQ</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    backgroundColor: "#C0A28B",
                    width: "200px",
                    height: "150px",
                    borderRadius: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 10,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      mb: 2,
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -4,
                        left: 0,
                        width: "100%",
                        height: "2px",
                        backgroundColor: "white",
                      },
                    }}
                  >
                    <ReportProblemIcon
                      sx={{ fontSize: 40, color: "#292E3D" }}
                    />
                  </Box>
                  <Typography>Raise a Ticket</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    backgroundColor: "#C0A28B",
                    width: "200px",
                    height: "150px",
                    borderRadius: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 10,
                    ml: 15,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      mb: 2,
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -4,
                        left: 0,
                        width: "100%",
                        height: "2px",
                        backgroundColor: "white",
                      },
                    }}
                  >
                    <ChatIcon sx={{ fontSize: 40, color: "#292E3D" }} />
                  </Box>
                  <Typography>Chat Support</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    backgroundColor: "#C0A28B",
                    width: "200px",
                    height: "150px",
                    borderRadius: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      mb: 2,
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -4,
                        left: 0,
                        width: "100%",
                        height: "2px",
                        backgroundColor: "white",
                      },
                    }}
                  >
                    <PhoneIcon sx={{ fontSize: 40, color: "#292E3D" }} />
                  </Box>
                  <Typography>Call Support</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    backgroundColor: "#C0A28B",
                    width: "200px",
                    height: "150px",
                    borderRadius: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 10,
                    ml: 10,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      mb: 2,
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -4,
                        left: 0,
                        width: "100%",
                        height: "2px",
                        backgroundColor: "white",
                      },
                    }}
                  >
                    <AssignmentIcon sx={{ fontSize: 40, color: "#292E3D" }} />
                  </Box>
                  <Typography>My Requests</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default help;
