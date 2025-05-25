import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import DashBoardLayout from "../../layouts/DashBoardLayout/DashBoardLayout";
import SideBarLayout from "../../layouts/SideBarLayout/SideBarLayout";
import {
  Message,
  MoreVert,
  Search as SearchIcon,
  Verified,
} from "@mui/icons-material";
import Search from "../../integrated/components/Search/Search";
import SideBar from "../../integrated/components/SideBar/SideBar"
function Bookings() {
  return (
    <>
      <SideBarLayout SideBar={SideBar}>
        <Search />
        {/* Outer Layout */}
        <DashBoardLayout padding={3}>
          {/* Heading */}
          <Box>
            <Typography variant="h5">Bookings</Typography>
            <Typography color="textSecondary" pt={1}>
              View and manage your bookings
            </Typography>
          </Box>
          {/* Outer Box Layout for bookings (DashboardInnerLayout) */}
          <Box
            sx={{
              width: "100%",
              height: "30rem",
              border: "1px solid rgba(204, 203, 202)",
              borderRadius: "10px",
            }}
          >
            {/* Top Header Contents inside inner layout */}
            <Box
              sx={{
                width: "100%",
                height: "3rem",
                borderBottom: "1px solid rgba(204, 203, 202)",
                borderTopLeftRadius: "10px", // Rounded top left corner
                borderTopRightRadius: "10px", // Rounded top right corner
                bgcolor: "#F7F0E9",
              }}
            >
              {/* Contents inside the top inner layout */}
              <Grid
                container
                justifyContent={"space-between"}
                p={1}
                alignItems={"center"}
              >
                <Grid container spacing={1}>
                  <Box
                    component="img"
                    src="/assets/Icon/TotalBookingIcon.png"
                    sx={{ height: "22px" }}
                  />
                  <Typography color="textPrimary">Total Booking: 9</Typography>
                </Grid>
                <Grid container spacing={3}>
                  <Grid>
                    <Input
                      disableUnderline
                      sx={{
                        bgcolor: "#FDF9F7",
                        height: "2rem",
                        border: "1px solid rgba(204, 203, 202)",
                        width: "20rem",
                        borderRadius: "5px",
                        paddingLeft: "5px",
                      }}
                      placeholder="Search name or work titles"
                      startAdornment={
                        <InputAdornment>
                          <SearchIcon />
                        </InputAdornment>
                      }
                    />
                  </Grid>
                  <Grid>
                    <Box
                      component="button"
                      sx={{
                        height: "2rem",
                        bgcolor: "#FDF9F7",
                        width: "4rem",
                        border: "1px solid rgba(204, 203, 202)",
                        borderRadius: "5px",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Box
                        component="img"
                        src="/assets/Icon/filter-funnel.png"
                        sx={{ height: "11px", width: "11px" }}
                      />
                      <Typography sx={{ fontSize: "12px" }}>Filter</Typography>
                    </Box>
                  </Grid>
                  <Grid>
                    <Box
                      component="button"
                      sx={{
                        height: "2rem",
                        bgcolor: "#FDF9F7",
                        width: "4rem",
                        border: "1px solid rgba(204, 203, 202)",
                        borderRadius: "5px",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Box
                        component="img"
                        src="/assets/Icon/FunnelSimple.png"
                        sx={{ height: "13px", width: "13px" }}
                      />
                      <Typography sx={{ fontSize: "12px" }}>Sort</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Box>

            {/* Grid to place the cards */}
            <Grid
              container
              direction="row"
              p={2}
              size={12}
              justifyContent={"space-evenly"}
              sx={{
                height: "90%",
                overflowY: "auto",
                scrollbarWidth: "thin",
                "&::-webkit-scrollbar": {
                  width: "8px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#aaa",
                  borderRadius: "4px",
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: "#f0f0f0", // Track color
                },
              }}
            >
              {/* BookingCardLayout */}
              <Grid
                container
                direction="column"
                sx={{
                  height: "19.9rem",
                  width: "20rem",
                  bgcolor: "rgba(247, 228, 221, 0.15)",
                  border: "1px solid rgba(74, 85, 103, 0.21)",
                  borderRadius: "6px",
                  marginBottom:"15px"
                }}
                size={4}
              >
                <Grid
                  container
                  alignItems="center"
                  sx={{
                    borderBottom: "1px solid rgba(74, 85, 103, 0.21)",
                    borderTopLeftRadius: "6px",
                    borderTopRightRadius: "6px",
                    height: "2.5rem",
                  }}
                  pl={2}
                  pr={2}
                  justifyContent={"space-between"}
                >
                  <Box
                    component="button"
                    sx={{
                      height: "1.5rem",
                      bgcolor: "#FDF9F7",
                      width: "6rem",
                      border: "1px solid rgba(204, 203, 202)",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <Message
                      sx={{ height: "18px", marginTop: "2px", color: "grey" }}
                    />
                    <Typography sx={{ fontSize: "12px" }}>Message</Typography>
                  </Box>
                  <Box
                    component="button"
                    sx={{
                      height: "1.5rem",
                      bgcolor: "#FDF9F7",
                      width: "1.5rem",
                      border: "1px solid rgba(204, 203, 202)",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconButton>
                      <MoreVert sx={{ height: "18px" }} />
                    </IconButton>
                  </Box>
                </Grid>
                <Grid container direction="column" p={2}>
                  <Grid container direction="row" spacing={2}>
                    <Avatar
                      src="https://randomuser.me/api/portraits/women/79.jpg"
                      alt="Jane"
                      sx={{ height: "2rem", width: "2rem" }}
                    />
                    <Grid container direction="column" spacing={0} flexGrow={2}>
                      <Grid
                        container
                        direction="row"
                        spacing={1}
                        alignItems="center"
                      >
                        <Typography
                          variant="body"
                          component="div"
                          sx={{ lineHeight: "0" }}
                        >
                          Jane
                        </Typography>
                        <Verified sx={{ color: "#4e9cf5", height: "15px" }} />
                      </Grid>
                      <Typography
                        variant="subtitle2"
                        color="textPrimary"
                        sx={{ fontSize: "10px" }}
                        mt={0.4}
                      >
                        janecope@gmail.com
                      </Typography>
                    </Grid>
                    <Grid>
                      <Box
                        sx={{
                          height: "1.5rem",
                          width: "5rem",
                          bgcolor: "#EBEFFE",
                          display: "flex",
                          alignItems: "center",
                          borderRadius: "4px",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          color="secondary"
                          sx={{
                            color: "#3963F8",
                            fontSize: "12px",
                            textShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          In Progress
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid container direction={"column"}>
                    <List>
                      <ListItem sx={{ padding: 0, paddingTop: 1 }}>
                        <Box
                          sx={{
                            height: "1.5rem",
                            width: "5rem",
                            border: "1.5px solid rgba(204, 203, 202,0.5)",
                            display: "flex",
                            alignItems: "center",
                            borderRadius: "4px",
                            gap: "4px",
                            justifyContent: "center",
                          }}
                        >
                          <Box
                            sx={{
                              width: "5px",
                              height: "5px",
                              bgcolor: "#5759F9",
                              borderRadius: "50%",
                            }}
                          />
                          <Typography
                            color="secondary"
                            sx={{
                              color: "#3963F8",
                              fontSize: "12px",
                              textShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            Engineer
                          </Typography>
                        </Box>
                      </ListItem>
                      <ListItem
                        sx={{
                          alignItems: "center",
                          gap: 1,
                          padding: 0,
                          paddingTop: 1,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            component="img"
                            src="/assets/Icon/Location.png"
                            sx={{ height: "10px" }}
                          />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography sx={{ fontSize: "12px" }} mt={0.3}>
                            Location: Thiruvananthapuram
                          </Typography>
                        </ListItemText>
                      </ListItem>
                      <ListItem
                        sx={{
                          alignItems: "center",
                          gap: 1,
                          padding: 0,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            component="img"
                            src="/assets/Icon/money.png"
                            sx={{ height: "10px" }}
                          />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography sx={{ fontSize: "12px" }} mt={0.1}>
                            Cost: 4000/day
                          </Typography>
                        </ListItemText>
                      </ListItem>
                      <ListItem
                        sx={{
                          alignItems: "center",
                          gap: 1,
                          padding: 0,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            component="img"
                            src="/assets/Icon/money-graph.png"
                            sx={{ height: "10px" }}
                          />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography sx={{ fontSize: "12px" }}>
                            Payment status: Pending
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </List>
                    <Box
                      sx={{
                        width: "100%",
                        height: "1px",
                        bgcolor: "rgba(204, 203, 202,0.5)",
                      }}
                    />
                    <List sx={{ padding: 0, paddingTop: 1 }}>
                      <ListItem
                        sx={{ justifyContent: "space-between", padding: 0 }}
                      >
                        <Typography
                          sx={{ fontSize: "14px" }}
                          color="textSecondary"
                        >
                          Work Request
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                          Electrical
                        </Typography>
                      </ListItem>
                      <ListItem
                        sx={{ justifyContent: "space-between", padding: 0 }}
                      >
                        <Typography
                          sx={{ fontSize: "14px" }}
                          color="textSecondary"
                        >
                          Start Date
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                          Feb 23, 2025
                        </Typography>
                      </ListItem>
                      <ListItem
                        sx={{ justifyContent: "space-between", padding: 0 }}
                      >
                        <Typography
                          sx={{ fontSize: "14px" }}
                          color="textSecondary"
                        >
                          End Date
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                          June 23, 2025
                        </Typography>
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                sx={{
                  height: "19.9rem",
                  width: "20rem",
                  bgcolor: "rgba(247, 228, 221, 0.15)",
                  border: "1px solid rgba(74, 85, 103, 0.21)",
                  borderRadius: "6px",
                }}
                size={4}
              >
                <Grid
                  container
                  alignItems="center"
                  sx={{
                    borderBottom: "1px solid rgba(74, 85, 103, 0.21)",
                    borderTopLeftRadius: "6px",
                    borderTopRightRadius: "6px",
                    height: "2.5rem",
                  }}
                  pl={2}
                  pr={2}
                  justifyContent={"space-between"}
                >
                  <Box
                    component="button"
                    sx={{
                      height: "1.5rem",
                      bgcolor: "#FDF9F7",
                      width: "6rem",
                      border: "1px solid rgba(204, 203, 202)",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <Message
                      sx={{ height: "18px", marginTop: "2px", color: "grey" }}
                    />
                    <Typography sx={{ fontSize: "12px" }}>Message</Typography>
                  </Box>
                  <Box
                    component="button"
                    sx={{
                      height: "1.5rem",
                      bgcolor: "#FDF9F7",
                      width: "1.5rem",
                      border: "1px solid rgba(204, 203, 202)",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconButton>
                      <MoreVert sx={{ height: "18px" }} />
                    </IconButton>
                  </Box>
                </Grid>
                <Grid container direction="column" p={2}>
                  <Grid container direction="row" spacing={2}>
                    <Avatar
                      src="https://randomuser.me/api/portraits/women/79.jpg"
                      alt="Jane"
                      sx={{ height: "2rem", width: "2rem" }}
                    />
                    <Grid container direction="column" spacing={0} flexGrow={2}>
                      <Grid
                        container
                        direction="row"
                        spacing={1}
                        alignItems="center"
                      >
                        <Typography
                          variant="body"
                          component="div"
                          sx={{ lineHeight: "0" }}
                        >
                          Jane
                        </Typography>
                        <Verified sx={{ color: "#4e9cf5", height: "15px" }} />
                      </Grid>
                      <Typography
                        variant="subtitle2"
                        color="textPrimary"
                        sx={{ fontSize: "10px" }}
                        mt={0.4}
                      >
                        janecope@gmail.com
                      </Typography>
                    </Grid>
                    <Grid>
                      <Box
                        sx={{
                          height: "1.5rem",
                          width: "5rem",
                          bgcolor: "#FCE2EF",
                          display: "flex",
                          alignItems: "center",
                          borderRadius: "4px",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          color="secondary"
                          sx={{
                            color: "#F83995",
                            fontSize: "12px",
                            textShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          Cancelled
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid container direction={"column"}>
                    <List>
                      <ListItem sx={{ padding: 0, paddingTop: 1 }}>
                        <Box
                          sx={{
                            height: "1.5rem",
                            width: "5rem",
                            border: "1.5px solid rgba(204, 203, 202,0.5)",
                            display: "flex",
                            alignItems: "center",
                            borderRadius: "4px",
                            gap: "4px",
                            justifyContent: "center",
                          }}
                        >
                          <Box
                            sx={{
                              width: "5px",
                              height: "5px",
                              bgcolor: "#5759F9",
                              borderRadius: "50%",
                            }}
                          />
                          <Typography
                            color="secondary"
                            sx={{
                              color: "#3963F8",
                              fontSize: "12px",
                              textShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            Engineer
                          </Typography>
                        </Box>
                      </ListItem>
                      <ListItem
                        sx={{
                          alignItems: "center",
                          gap: 1,
                          padding: 0,
                          paddingTop: 1,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            component="img"
                            src="/assets/Icon/Location.png"
                            sx={{ height: "10px" }}
                          />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography sx={{ fontSize: "12px" }} mt={0.3}>
                            Location: Thiruvananthapuram
                          </Typography>
                        </ListItemText>
                      </ListItem>
                      <ListItem
                        sx={{
                          alignItems: "center",
                          gap: 1,
                          padding: 0,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            component="img"
                            src="/assets/Icon/money.png"
                            sx={{ height: "10px" }}
                          />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography sx={{ fontSize: "12px" }} mt={0.1}>
                            Cost: 4000/day
                          </Typography>
                        </ListItemText>
                      </ListItem>
                      <ListItem
                        sx={{
                          alignItems: "center",
                          gap: 1,
                          padding: 0,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            component="img"
                            src="/assets/Icon/money-graph.png"
                            sx={{ height: "10px" }}
                          />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography sx={{ fontSize: "12px" }}>
                            Payment status: Pending
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </List>
                    <Box
                      sx={{
                        width: "100%",
                        height: "1px",
                        bgcolor: "rgba(204, 203, 202,0.5)",
                      }}
                    />
                    <List sx={{ padding: 0, paddingTop: 1 }}>
                      <ListItem
                        sx={{ justifyContent: "space-between", padding: 0 }}
                      >
                        <Typography
                          sx={{ fontSize: "14px" }}
                          color="textSecondary"
                        >
                          Work Request
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                          Electrical
                        </Typography>
                      </ListItem>
                      <ListItem
                        sx={{ justifyContent: "space-between", padding: 0 }}
                      >
                        <Typography
                          sx={{ fontSize: "14px" }}
                          color="textSecondary"
                        >
                          Start Date
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                          Feb 23, 2025
                        </Typography>
                      </ListItem>
                      <ListItem
                        sx={{ justifyContent: "space-between", padding: 0 }}
                      >
                        <Typography
                          sx={{ fontSize: "14px" }}
                          color="textSecondary"
                        >
                          End Date
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                          June 23, 2025
                        </Typography>
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                sx={{
                  height: "19.9rem",
                  width: "20rem",
                  bgcolor: "rgba(247, 228, 221, 0.15)",
                  border: "1px solid rgba(74, 85, 103, 0.21)",
                  borderRadius: "6px",
                }}
                size={4}
              >
                <Grid
                  container
                  alignItems="center"
                  sx={{
                    borderBottom: "1px solid rgba(74, 85, 103, 0.21)",
                    borderTopLeftRadius: "6px",
                    borderTopRightRadius: "6px",
                    height: "2.5rem",
                  }}
                  pl={2}
                  pr={2}
                  justifyContent={"space-between"}
                >
                  <Box
                    component="button"
                    sx={{
                      height: "1.5rem",
                      bgcolor: "#FDF9F7",
                      width: "6rem",
                      border: "1px solid rgba(204, 203, 202)",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <Message
                      sx={{ height: "18px", marginTop: "2px", color: "grey" }}
                    />
                    <Typography sx={{ fontSize: "12px" }}>Message</Typography>
                  </Box>
                  <Box
                    component="button"
                    sx={{
                      height: "1.5rem",
                      bgcolor: "#FDF9F7",
                      width: "1.5rem",
                      border: "1px solid rgba(204, 203, 202)",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconButton>
                      <MoreVert sx={{ height: "18px" }} />
                    </IconButton>
                  </Box>
                </Grid>
                <Grid container direction="column" p={2}>
                  <Grid container direction="row" spacing={2}>
                    <Avatar
                      src="https://randomuser.me/api/portraits/women/79.jpg"
                      alt="Jane"
                      sx={{ height: "2rem", width: "2rem" }}
                    />
                    <Grid container direction="column" spacing={0} flexGrow={2}>
                      <Grid
                        container
                        direction="row"
                        spacing={1}
                        alignItems="center"
                      >
                        <Typography
                          variant="body"
                          component="div"
                          sx={{ lineHeight: "0" }}
                        >
                          Jane
                        </Typography>
                        <Verified sx={{ color: "#4e9cf5", height: "15px" }} />
                      </Grid>
                      <Typography
                        variant="subtitle2"
                        color="textPrimary"
                        sx={{ fontSize: "10px" }}
                        mt={0.4}
                      >
                        janecope@gmail.com
                      </Typography>
                    </Grid>
                    <Grid>
                      <Box
                        sx={{
                          height: "1.5rem",
                          width: "5rem",
                          bgcolor: "#E3FDF2",
                          display: "flex",
                          alignItems: "center",
                          borderRadius: "4px",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          color="secondary"
                          sx={{
                            color: "#18D49B",
                            fontSize: "12px",
                            textShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          Completed
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid container direction={"column"}>
                    <List>
                      <ListItem sx={{ padding: 0, paddingTop: 1 }}>
                        <Box
                          sx={{
                            height: "1.5rem",
                            width: "5rem",
                            border: "1.5px solid rgba(204, 203, 202,0.5)",
                            display: "flex",
                            alignItems: "center",
                            borderRadius: "4px",
                            gap: "4px",
                            justifyContent: "center",
                          }}
                        >
                          <Box
                            sx={{
                              width: "5px",
                              height: "5px",
                              bgcolor: "#5759F9",
                              borderRadius: "50%",
                            }}
                          />
                          <Typography
                            color="secondary"
                            sx={{
                              color: "#3963F8",
                              fontSize: "12px",
                              textShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            Engineer
                          </Typography>
                        </Box>
                      </ListItem>
                      <ListItem
                        sx={{
                          alignItems: "center",
                          gap: 1,
                          padding: 0,
                          paddingTop: 1,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            component="img"
                            src="/assets/Icon/Location.png"
                            sx={{ height: "10px" }}
                          />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography sx={{ fontSize: "12px" }} mt={0.3}>
                            Location: Thiruvananthapuram
                          </Typography>
                        </ListItemText>
                      </ListItem>
                      <ListItem
                        sx={{
                          alignItems: "center",
                          gap: 1,
                          padding: 0,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            component="img"
                            src="/assets/Icon/money.png"
                            sx={{ height: "10px" }}
                          />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography sx={{ fontSize: "12px" }} mt={0.1}>
                            Cost: 4000/day
                          </Typography>
                        </ListItemText>
                      </ListItem>
                      <ListItem
                        sx={{
                          alignItems: "center",
                          gap: 1,
                          padding: 0,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            component="img"
                            src="/assets/Icon/money-graph.png"
                            sx={{ height: "10px" }}
                          />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography sx={{ fontSize: "12px" }}>
                            Payment status: Pending
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </List>
                    <Box
                      sx={{
                        width: "100%",
                        height: "1px",
                        bgcolor: "rgba(204, 203, 202,0.5)",
                      }}
                    />
                    <List sx={{ padding: 0, paddingTop: 1 }}>
                      <ListItem
                        sx={{ justifyContent: "space-between", padding: 0 }}
                      >
                        <Typography
                          sx={{ fontSize: "14px" }}
                          color="textSecondary"
                        >
                          Work Request
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                          Electrical
                        </Typography>
                      </ListItem>
                      <ListItem
                        sx={{ justifyContent: "space-between", padding: 0 }}
                      >
                        <Typography
                          sx={{ fontSize: "14px" }}
                          color="textSecondary"
                        >
                          Start Date
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                          Feb 23, 2025
                        </Typography>
                      </ListItem>
                      <ListItem
                        sx={{ justifyContent: "space-between", padding: 0 }}
                      >
                        <Typography
                          sx={{ fontSize: "14px" }}
                          color="textSecondary"
                        >
                          End Date
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                          June 23, 2025
                        </Typography>
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Grid>
                            <Grid
                container
                direction="column"
                sx={{
                  height: "19.9rem",
                  width: "20rem",
                  bgcolor: "rgba(247, 228, 221, 0.15)",
                  border: "1px solid rgba(74, 85, 103, 0.21)",
                  borderRadius: "6px",
                }}
                size={4}
              >
                <Grid
                  container
                  alignItems="center"
                  sx={{
                    borderBottom: "1px solid rgba(74, 85, 103, 0.21)",
                    borderTopLeftRadius: "6px",
                    borderTopRightRadius: "6px",
                    height: "2.5rem",
                  }}
                  pl={2}
                  pr={2}
                  justifyContent={"space-between"}
                >
                  <Box
                    component="button"
                    sx={{
                      height: "1.5rem",
                      bgcolor: "#FDF9F7",
                      width: "6rem",
                      border: "1px solid rgba(204, 203, 202)",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <Message
                      sx={{ height: "18px", marginTop: "2px", color: "grey" }}
                    />
                    <Typography sx={{ fontSize: "12px" }}>Message</Typography>
                  </Box>
                  <Box
                    component="button"
                    sx={{
                      height: "1.5rem",
                      bgcolor: "#FDF9F7",
                      width: "1.5rem",
                      border: "1px solid rgba(204, 203, 202)",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconButton>
                      <MoreVert sx={{ height: "18px" }} />
                    </IconButton>
                  </Box>
                </Grid>
                <Grid container direction="column" p={2}>
                  <Grid container direction="row" spacing={2}>
                    <Avatar
                      src="https://randomuser.me/api/portraits/women/79.jpg"
                      alt="Jane"
                      sx={{ height: "2rem", width: "2rem" }}
                    />
                    <Grid container direction="column" spacing={0} flexGrow={2}>
                      <Grid
                        container
                        direction="row"
                        spacing={1}
                        alignItems="center"
                      >
                        <Typography
                          variant="body"
                          component="div"
                          sx={{ lineHeight: "0" }}
                        >
                          Jane
                        </Typography>
                        <Verified sx={{ color: "#4e9cf5", height: "15px" }} />
                      </Grid>
                      <Typography
                        variant="subtitle2"
                        color="textPrimary"
                        sx={{ fontSize: "10px" }}
                        mt={0.4}
                      >
                        janecope@gmail.com
                      </Typography>
                    </Grid>
                    <Grid>
                      <Box
                        sx={{
                          height: "1.5rem",
                          width: "5rem",
                          bgcolor: "#EBEFFE",
                          display: "flex",
                          alignItems: "center",
                          borderRadius: "4px",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          color="secondary"
                          sx={{
                            color: "#3963F8",
                            fontSize: "12px",
                            textShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          In Progress
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid container direction={"column"}>
                    <List>
                      <ListItem sx={{ padding: 0, paddingTop: 1 }}>
                        <Box
                          sx={{
                            height: "1.5rem",
                            width: "5rem",
                            border: "1.5px solid rgba(204, 203, 202,0.5)",
                            display: "flex",
                            alignItems: "center",
                            borderRadius: "4px",
                            gap: "4px",
                            justifyContent: "center",
                          }}
                        >
                          <Box
                            sx={{
                              width: "5px",
                              height: "5px",
                              bgcolor: "#5759F9",
                              borderRadius: "50%",
                            }}
                          />
                          <Typography
                            color="secondary"
                            sx={{
                              color: "#3963F8",
                              fontSize: "12px",
                              textShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            Engineer
                          </Typography>
                        </Box>
                      </ListItem>
                      <ListItem
                        sx={{
                          alignItems: "center",
                          gap: 1,
                          padding: 0,
                          paddingTop: 1,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            component="img"
                            src="/assets/Icon/Location.png"
                            sx={{ height: "10px" }}
                          />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography sx={{ fontSize: "12px" }} mt={0.3}>
                            Location: Thiruvananthapuram
                          </Typography>
                        </ListItemText>
                      </ListItem>
                      <ListItem
                        sx={{
                          alignItems: "center",
                          gap: 1,
                          padding: 0,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            component="img"
                            src="/assets/Icon/money.png"
                            sx={{ height: "10px" }}
                          />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography sx={{ fontSize: "12px" }} mt={0.1}>
                            Cost: 4000/day
                          </Typography>
                        </ListItemText>
                      </ListItem>
                      <ListItem
                        sx={{
                          alignItems: "center",
                          gap: 1,
                          padding: 0,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            component="img"
                            src="/assets/Icon/money-graph.png"
                            sx={{ height: "10px" }}
                          />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography sx={{ fontSize: "12px" }}>
                            Payment status: Pending
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </List>
                    <Box
                      sx={{
                        width: "100%",
                        height: "1px",
                        bgcolor: "rgba(204, 203, 202,0.5)",
                      }}
                    />
                    <List sx={{ padding: 0, paddingTop: 1 }}>
                      <ListItem
                        sx={{ justifyContent: "space-between", padding: 0 }}
                      >
                        <Typography
                          sx={{ fontSize: "14px" }}
                          color="textSecondary"
                        >
                          Work Request
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                          Electrical
                        </Typography>
                      </ListItem>
                      <ListItem
                        sx={{ justifyContent: "space-between", padding: 0 }}
                      >
                        <Typography
                          sx={{ fontSize: "14px" }}
                          color="textSecondary"
                        >
                          Start Date
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                          Feb 23, 2025
                        </Typography>
                      </ListItem>
                      <ListItem
                        sx={{ justifyContent: "space-between", padding: 0 }}
                      >
                        <Typography
                          sx={{ fontSize: "14px" }}
                          color="textSecondary"
                        >
                          End Date
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                          June 23, 2025
                        </Typography>
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                sx={{
                  height: "19.9rem",
                  width: "20rem",
                  bgcolor: "rgba(247, 228, 221, 0.15)",
                  border: "1px solid rgba(74, 85, 103, 0.21)",
                  borderRadius: "6px",
                }}
                size={4}
              >
                <Grid
                  container
                  alignItems="center"
                  sx={{
                    borderBottom: "1px solid rgba(74, 85, 103, 0.21)",
                    borderTopLeftRadius: "6px",
                    borderTopRightRadius: "6px",
                    height: "2.5rem",
                  }}
                  pl={2}
                  pr={2}
                  justifyContent={"space-between"}
                >
                  <Box
                    component="button"
                    sx={{
                      height: "1.5rem",
                      bgcolor: "#FDF9F7",
                      width: "6rem",
                      border: "1px solid rgba(204, 203, 202)",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <Message
                      sx={{ height: "18px", marginTop: "2px", color: "grey" }}
                    />
                    <Typography sx={{ fontSize: "12px" }}>Message</Typography>
                  </Box>
                  <Box
                    component="button"
                    sx={{
                      height: "1.5rem",
                      bgcolor: "#FDF9F7",
                      width: "1.5rem",
                      border: "1px solid rgba(204, 203, 202)",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconButton>
                      <MoreVert sx={{ height: "18px" }} />
                    </IconButton>
                  </Box>
                </Grid>
                <Grid container direction="column" p={2}>
                  <Grid container direction="row" spacing={2}>
                    <Avatar
                      src="https://randomuser.me/api/portraits/women/79.jpg"
                      alt="Jane"
                      sx={{ height: "2rem", width: "2rem" }}
                    />
                    <Grid container direction="column" spacing={0} flexGrow={2}>
                      <Grid
                        container
                        direction="row"
                        spacing={1}
                        alignItems="center"
                      >
                        <Typography
                          variant="body"
                          component="div"
                          sx={{ lineHeight: "0" }}
                        >
                          Jane
                        </Typography>
                        <Verified sx={{ color: "#4e9cf5", height: "15px" }} />
                      </Grid>
                      <Typography
                        variant="subtitle2"
                        color="textPrimary"
                        sx={{ fontSize: "10px" }}
                        mt={0.4}
                      >
                        janecope@gmail.com
                      </Typography>
                    </Grid>
                    <Grid>
                      <Box
                        sx={{
                          height: "1.5rem",
                          width: "5rem",
                          bgcolor: "#FCE2EF",
                          display: "flex",
                          alignItems: "center",
                          borderRadius: "4px",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          color="secondary"
                          sx={{
                            color: "#F83995",
                            fontSize: "12px",
                            textShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          Cancelled
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid container direction={"column"}>
                    <List>
                      <ListItem sx={{ padding: 0, paddingTop: 1 }}>
                        <Box
                          sx={{
                            height: "1.5rem",
                            width: "5rem",
                            border: "1.5px solid rgba(204, 203, 202,0.5)",
                            display: "flex",
                            alignItems: "center",
                            borderRadius: "4px",
                            gap: "4px",
                            justifyContent: "center",
                          }}
                        >
                          <Box
                            sx={{
                              width: "5px",
                              height: "5px",
                              bgcolor: "#5759F9",
                              borderRadius: "50%",
                            }}
                          />
                          <Typography
                            color="secondary"
                            sx={{
                              color: "#3963F8",
                              fontSize: "12px",
                              textShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            Engineer
                          </Typography>
                        </Box>
                      </ListItem>
                      <ListItem
                        sx={{
                          alignItems: "center",
                          gap: 1,
                          padding: 0,
                          paddingTop: 1,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            component="img"
                            src="/assets/Icon/Location.png"
                            sx={{ height: "10px" }}
                          />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography sx={{ fontSize: "12px" }} mt={0.3}>
                            Location: Thiruvananthapuram
                          </Typography>
                        </ListItemText>
                      </ListItem>
                      <ListItem
                        sx={{
                          alignItems: "center",
                          gap: 1,
                          padding: 0,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            component="img"
                            src="/assets/Icon/money.png"
                            sx={{ height: "10px" }}
                          />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography sx={{ fontSize: "12px" }} mt={0.1}>
                            Cost: 4000/day
                          </Typography>
                        </ListItemText>
                      </ListItem>
                      <ListItem
                        sx={{
                          alignItems: "center",
                          gap: 1,
                          padding: 0,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            component="img"
                            src="/assets/Icon/money-graph.png"
                            sx={{ height: "10px" }}
                          />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography sx={{ fontSize: "12px" }}>
                            Payment status: Pending
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </List>
                    <Box
                      sx={{
                        width: "100%",
                        height: "1px",
                        bgcolor: "rgba(204, 203, 202,0.5)",
                      }}
                    />
                    <List sx={{ padding: 0, paddingTop: 1 }}>
                      <ListItem
                        sx={{ justifyContent: "space-between", padding: 0 }}
                      >
                        <Typography
                          sx={{ fontSize: "14px" }}
                          color="textSecondary"
                        >
                          Work Request
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                          Electrical
                        </Typography>
                      </ListItem>
                      <ListItem
                        sx={{ justifyContent: "space-between", padding: 0 }}
                      >
                        <Typography
                          sx={{ fontSize: "14px" }}
                          color="textSecondary"
                        >
                          Start Date
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                          Feb 23, 2025
                        </Typography>
                      </ListItem>
                      <ListItem
                        sx={{ justifyContent: "space-between", padding: 0 }}
                      >
                        <Typography
                          sx={{ fontSize: "14px" }}
                          color="textSecondary"
                        >
                          End Date
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                          June 23, 2025
                        </Typography>
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                sx={{
                  height: "19.9rem",
                  width: "20rem",
                  bgcolor: "rgba(247, 228, 221, 0.15)",
                  border: "1px solid rgba(74, 85, 103, 0.21)",
                  borderRadius: "6px",
                }}
                size={4}
              >
                <Grid
                  container
                  alignItems="center"
                  sx={{
                    borderBottom: "1px solid rgba(74, 85, 103, 0.21)",
                    borderTopLeftRadius: "6px",
                    borderTopRightRadius: "6px",
                    height: "2.5rem",
                  }}
                  pl={2}
                  pr={2}
                  justifyContent={"space-between"}
                >
                  <Box
                    component="button"
                    sx={{
                      height: "1.5rem",
                      bgcolor: "#FDF9F7",
                      width: "6rem",
                      border: "1px solid rgba(204, 203, 202)",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <Message
                      sx={{ height: "18px", marginTop: "2px", color: "grey" }}
                    />
                    <Typography sx={{ fontSize: "12px" }}>Message</Typography>
                  </Box>
                  <Box
                    component="button"
                    sx={{
                      height: "1.5rem",
                      bgcolor: "#FDF9F7",
                      width: "1.5rem",
                      border: "1px solid rgba(204, 203, 202)",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconButton>
                      <MoreVert sx={{ height: "18px" }} />
                    </IconButton>
                  </Box>
                </Grid>
                <Grid container direction="column" p={2}>
                  <Grid container direction="row" spacing={2}>
                    <Avatar
                      src="https://randomuser.me/api/portraits/women/79.jpg"
                      alt="Jane"
                      sx={{ height: "2rem", width: "2rem" }}
                    />
                    <Grid container direction="column" spacing={0} flexGrow={2}>
                      <Grid
                        container
                        direction="row"
                        spacing={1}
                        alignItems="center"
                      >
                        <Typography
                          variant="body"
                          component="div"
                          sx={{ lineHeight: "0" }}
                        >
                          Jane
                        </Typography>
                        <Verified sx={{ color: "#4e9cf5", height: "15px" }} />
                      </Grid>
                      <Typography
                        variant="subtitle2"
                        color="textPrimary"
                        sx={{ fontSize: "10px" }}
                        mt={0.4}
                      >
                        janecope@gmail.com
                      </Typography>
                    </Grid>
                    <Grid>
                      <Box
                        sx={{
                          height: "1.5rem",
                          width: "5rem",
                          bgcolor: "#E3FDF2",
                          display: "flex",
                          alignItems: "center",
                          borderRadius: "4px",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          color="secondary"
                          sx={{
                            color: "#18D49B",
                            fontSize: "12px",
                            textShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          Completed
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid container direction={"column"}>
                    <List>
                      <ListItem sx={{ padding: 0, paddingTop: 1 }}>
                        <Box
                          sx={{
                            height: "1.5rem",
                            width: "5rem",
                            border: "1.5px solid rgba(204, 203, 202,0.5)",
                            display: "flex",
                            alignItems: "center",
                            borderRadius: "4px",
                            gap: "4px",
                            justifyContent: "center",
                          }}
                        >
                          <Box
                            sx={{
                              width: "5px",
                              height: "5px",
                              bgcolor: "#5759F9",
                              borderRadius: "50%",
                            }}
                          />
                          <Typography
                            color="secondary"
                            sx={{
                              color: "#3963F8",
                              fontSize: "12px",
                              textShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            Engineer
                          </Typography>
                        </Box>
                      </ListItem>
                      <ListItem
                        sx={{
                          alignItems: "center",
                          gap: 1,
                          padding: 0,
                          paddingTop: 1,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            component="img"
                            src="/assets/Icon/Location.png"
                            sx={{ height: "10px" }}
                          />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography sx={{ fontSize: "12px" }} mt={0.3}>
                            Location: Thiruvananthapuram
                          </Typography>
                        </ListItemText>
                      </ListItem>
                      <ListItem
                        sx={{
                          alignItems: "center",
                          gap: 1,
                          padding: 0,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            component="img"
                            src="/assets/Icon/money.png"
                            sx={{ height: "10px" }}
                          />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography sx={{ fontSize: "12px" }} mt={0.1}>
                            Cost: 4000/day
                          </Typography>
                        </ListItemText>
                      </ListItem>
                      <ListItem
                        sx={{
                          alignItems: "center",
                          gap: 1,
                          padding: 0,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            component="img"
                            src="/assets/Icon/money-graph.png"
                            sx={{ height: "10px" }}
                          />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography sx={{ fontSize: "12px" }}>
                            Payment status: Pending
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </List>
                    <Box
                      sx={{
                        width: "100%",
                        height: "1px",
                        bgcolor: "rgba(204, 203, 202,0.5)",
                      }}
                    />
                    <List sx={{ padding: 0, paddingTop: 1 }}>
                      <ListItem
                        sx={{ justifyContent: "space-between", padding: 0 }}
                      >
                        <Typography
                          sx={{ fontSize: "14px" }}
                          color="textSecondary"
                        >
                          Work Request
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                          Electrical
                        </Typography>
                      </ListItem>
                      <ListItem
                        sx={{ justifyContent: "space-between", padding: 0 }}
                      >
                        <Typography
                          sx={{ fontSize: "14px" }}
                          color="textSecondary"
                        >
                          Start Date
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                          Feb 23, 2025
                        </Typography>
                      </ListItem>
                      <ListItem
                        sx={{ justifyContent: "space-between", padding: 0 }}
                      >
                        <Typography
                          sx={{ fontSize: "14px" }}
                          color="textSecondary"
                        >
                          End Date
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                          June 23, 2025
                        </Typography>
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </DashBoardLayout>
      </SideBarLayout>
    </>
  );
}

export default Bookings;
