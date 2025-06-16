import { useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid
} from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { TabContext, TabPanel } from "@mui/lab";

import MobMyBookingsInProgress from "./mobMyBookingsInProgress";
import MobMyBookingsCompleted from "./mobMyBookingsCompleted";
import MobMyBookingsCancelled from "./mobMyBookingsCancelled";

const MobMyBookingsTopTab = () => {
  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSwipeChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <TabContext value={value.toString()}>
      <Box mb={1} sx={{ width: "100%" }}>
        {/* Tabs */}
        <Box
          sx={{
            width: "100%",
            marginTop: "15px",
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
                  backgroundColor: "#BFA088"
                }
              }
            }}
          >
            <Tab label="In progress" sx={{fontSize:'15px'}}/>
            <Tab label="Completed" sx={{fontSize:'15px'}}/>
            <Tab label="Cancelled" sx={{fontSize:'15px'}}/>
          </Tabs>
        </Box>

        {/* Filter */}
        {/*<Grid
          container
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            mt: 10,
            mb: -1.5
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", mr: 1, mt: 5, mb:1 }}>
            <FormControl sx={{ minWidth: 80 }} size="small">
              <InputLabel id="filter-label" sx={{ fontSize: 14 }}>
                Sort
              </InputLabel>
              <Select
                labelId="sort-label"
                id="sort-select"
                label="Sort"
                sx={{ borderRadius: 5, height: 36 }}
              >
                <MenuItem value={10}>Latest</MenuItem>
                <MenuItem value={20}>Oldest</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>*/}

        {/* Swipeable Views */}
        <SwipeableViews index={value} onChangeIndex={handleSwipeChangeIndex}>
          <TabPanel value="0" sx={{ p: 0 }}>
            <MobMyBookingsInProgress />
          </TabPanel>
          <TabPanel value="1" sx={{ p: 0 }}>
            <MobMyBookingsCompleted />
          </TabPanel>
          <TabPanel value="2" sx={{ p: 0 }}>
            <MobMyBookingsCancelled />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </TabContext>
  );
};

export default MobMyBookingsTopTab;
