import { useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  Grid,
} from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";

import MobNotificationAll from './mobNotificationAll';
import MobNotificationBookings from './mobNotificationBookings';
import MobNotificationSystem from './mobNotificationSystem';

const MobNotificationTopTab = () => {
  const [value, setValue] = useState("0");

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Grid container>
        {/* Tabs */}
        <Box
          sx={{
            mt: -1,
            pt: 0.9,
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
            aria-label="notification tabs"
            slotProps={{
              indicator: {
                sx: {
                  backgroundColor: "#BFA088",
                },
              },
            }}
          >
            <Tab value="0" label="All" sx={{ color: '#777777', fontSize: '1rem', textTransform: 'none', mr: 3 }} />
            <Tab value="1" label="Bookings" sx={{ color: '#777777', fontSize: '1rem', textTransform: 'none', mr: 3 }} />
            <Tab value="2" label="System" sx={{ color: '#777777', fontSize: '1rem', textTransform: 'none' }} />
          </Tabs>
        </Box>

        {/* Panels */}
        <Grid sx={{ mt: 6, width: "100%" }}>
          <TabPanel value="0" sx={{ p: 0 }}>
            <MobNotificationAll />
          </TabPanel>
          <TabPanel value="1" sx={{ p: 0 }}>
            <MobNotificationBookings />
          </TabPanel>
          <TabPanel value="2" sx={{ p: 0 }}>
            <MobNotificationSystem />
          </TabPanel>
        </Grid>
      </Grid>
    </TabContext>
  );
};

export default MobNotificationTopTab;
