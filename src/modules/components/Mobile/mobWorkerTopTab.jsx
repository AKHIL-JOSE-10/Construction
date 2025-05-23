import { Box, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import MobWorkerservice from './mobWorkerService';
import MobWorkerReview from './mobWorkerReview';
import MobWorkerAbout from './mobworkerAbout';

const MobWorkerTopTab = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box >
      <Box sx={{ borderBottom: 1, borderColor: 'divider', p: 2, }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Services" />
          <Tab label="About" sx={{mx:3}}/>
          <Tab label="Reviews" />
        </Tabs>
      </Box>

      {/* Tab content */}
      <Box sx={{ p: 1 }}>
        {value === 0 && <MobWorkerservice />}
        {value === 1 && <MobWorkerAbout />}
        {value === 2 && <MobWorkerReview />}
      </Box>
    </Box>
  );
};

export default MobWorkerTopTab;
