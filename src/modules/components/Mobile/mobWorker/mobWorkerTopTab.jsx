import { Box, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

import MobWorkerservice from './mobWorkerService';
import MobWorkerReview from './mobWorkerReview';
import MobWorkerAbout from './mobWorkerAbout';

const MobWorkerTopTab = ({service}) => {
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
      <Box sx={{ borderBottom: 1, borderColor: 'divider', p: 0 }}>
        <Tabs value={value} onChange={handleTabChange} centered>
          <Tab label="Services" />
          <Tab label="About" sx={{ mx: 3 }} />
          <Tab label="Reviews" />
        </Tabs>
      </Box>

      {/* Swipeable Views */}
      <SwipeableViews index={value} onChangeIndex={handleSwipeChange}>
        <Box sx={{ p: 1 }}>{value === 0 && <MobWorkerservice selectedService={service}/>}</Box>
        <Box sx={{ p: 1 }}>{value === 1 && <MobWorkerAbout />}</Box>
        <Box sx={{ p: 1 }}>{value === 2 && <MobWorkerReview />}</Box>
      </SwipeableViews>
    </Box>
  );
};

export default MobWorkerTopTab;
