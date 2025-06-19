import { Box, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

import MobWorkerservice from './mobWorkerService';
import MobWorkerMyProfle from './mobWorkerMyProfle';

const MobWorkerTopTab = ({ service }) => {
  const [value, setValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSwipeChange = (index) => {
    setValue(index);
  };

  return (
    <Box>
      {/* Tabs Header */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
        <Tabs
          value={value}
          onChange={handleTabChange}
          variant="fullWidth"
          centered
        >
          <Tab label="Services" />
          <Tab label="Profile" />
        </Tabs>
      </Box>

      {/* Swipeable Views */}
      <SwipeableViews index={value} onChangeIndex={handleSwipeChange}>
        <Box sx={{ p: 1 }}>{value === 0 && <MobWorkerservice selectedService={service} />}</Box>
        <Box sx={{ p: 1 }}>{value === 1 && <MobWorkerMyProfle />}</Box>
      </SwipeableViews>
    </Box>
  );
};

export default MobWorkerTopTab;
