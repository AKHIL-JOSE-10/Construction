import { Box, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import Workerservice from './workerservice';
import WorkerAbout from './workerAbout';
import WorkerReview from './workerReview';

const WorkerTopTab = () => {
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
        {value === 0 && <Workerservice />}
        {value === 1 && <WorkerAbout />}
        {value === 2 && <WorkerReview />}
      </Box>
    </Box>
  );
};

export default WorkerTopTab;
