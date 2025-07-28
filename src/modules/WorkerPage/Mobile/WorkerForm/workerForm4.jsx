import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BottomButton from './bottomButton';
import TopProgressBar from './topProgressBar';

import serviceImg from '@/assets/serviceImg.png';

const professionList = [
  { label: "Architectural Designers", icon: serviceImg },
  { label: "Civil Engineers", icon: serviceImg },
  { label: "Interior Designers", icon: serviceImg },
  { label: "Landscaping architects", icon: serviceImg },
  { label: "Structural Engineerings", icon: serviceImg },
  { label: "MEP Service providers", icon: serviceImg },
  { label: "Pool Designers", icon: serviceImg },
  { label: "Steel Fabricators", icon: serviceImg },
  { label: "Construction Contractors", icon: serviceImg },
];

const WorkerForm4 = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  const handleToggle = (label) => {
    setSelected((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const handleNext = () => {
    navigate('/mobile-worker-form5');
  };

  return (
    <Box sx={{ p: 2 }}>
      {/* Top Progress Bar */}
      <TopProgressBar activeStep={3} NextButton="/mobile-worker-form4" pgnum="4/5" />

      {/* Title */}
      <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', mt: 1 }}>
        Select Your Profession
      </Typography>
      <Typography sx={{ fontSize: '1rem', fontWeight: '550', mb: 3, textAlign: 'center', mt: 1 }}>
        you can choose more than one
      </Typography>

      {/* Profession Grid */}
      <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
        {professionList.map((item, index) => {
          const isSelected = selected.includes(item.label);
          return (
            <Grid item key={index}>
              <Box
                onClick={() => handleToggle(item.label)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  border: isSelected ? '2px solid red' : '1px solid #ccc',
                  borderRadius: '12px',
                  py: 1,
                  px:0.3,
                  height: 40,
                  width: 130,
                  cursor: 'pointer',
                  backgroundColor: isSelected ? '#ffe5e5' : 'white',
                  transition: '0.3s',
                  '&:hover': {
                    boxShadow: 2,
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.icon}
                  alt={item.label}
                  sx={{ width: 40, height: 35, mr: 1 }}
                />
                <Typography sx={{ fontSize: '0.7rem', fontWeight: 500 }}>
                  {item.label}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>

      {/* Bottom Next Button */}
      <BottomButton handleNext={handleNext} />
    </Box>
  );
};

export default WorkerForm4;
