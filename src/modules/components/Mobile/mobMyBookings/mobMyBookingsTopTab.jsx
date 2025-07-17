import { useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";

import MobMyBookingsInProgress from "./mobMyBookingsInProgress";
import MobMyBookingsCompleted from "./mobMyBookingsCompleted";
import MobMyBookingsCancelled from "./mobMyBookingsCancelled";

const MobMyBookingsTopTab = () => {
  const [value, setValue] = useState("0");

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      {/* Tabs */}
      <Box
        sx={{
          position: "fixed",
          zIndex: 1000,
          width: "100%",
          backgroundColor: "#fff",
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleTabChange}
          aria-label="booking tabs"
          slotProps={{
            indicator: {
              sx: {
                backgroundColor: "#BFA088",
              },
            },
          }}
        >
          <Tab value="0" label="In progress" sx={{ fontSize: "15px" }} />
          <Tab value="1" label="Completed" sx={{ fontSize: "15px" }} />
          <Tab value="2" label="Cancelled" sx={{ fontSize: "15px" }} />
        </Tabs>
      </Box>

      <Box sx={{ paddingTop: "55px", paddingBottom: "10px" }}>
        <TabPanel value="0" sx={{ p: 0 }}>
          <MobMyBookingsInProgress />
        </TabPanel>
        <TabPanel value="1" sx={{ p: 0 }}>
          <MobMyBookingsCompleted />
        </TabPanel>
        <TabPanel value="2" sx={{ p: 0 }}>
          <MobMyBookingsCancelled />
        </TabPanel>
      </Box>
    </TabContext>
  );
};

export default MobMyBookingsTopTab;
