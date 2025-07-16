import { Box, Tabs, Tab } from '@mui/material';
import { useState } from 'react';

import MobWorkerservice from './mobWorkerService';
import MobWorkerMyProfle from './mobWorkerMyProfle';

const MobWorkerTopTab = ({ service, setIsAlert }) => {
  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      {/* Tabs Header */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
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

      {/* Content */}
      <Box sx={{ p: 1 }}>
        {value === 0 && <MobWorkerservice setIsAlert={setIsAlert} selectedService={service} />}
        {value === 1 && <MobWorkerMyProfle />}
      </Box>
    </Box>
  );
};

export default MobWorkerTopTab;
