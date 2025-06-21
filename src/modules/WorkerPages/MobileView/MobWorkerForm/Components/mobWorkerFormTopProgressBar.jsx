// components/CustomProgressBar.jsx
import { Stepper, Step, StepLabel } from '@mui/material';
import React from 'react';

const steps = ['Basic Info', 'Experience', 'Skills', 'Review'];

const CustomProgressBar = ({ activeStep }) => {
  return (
    <Stepper
      activeStep={activeStep}
      alternativeLabel
      sx={{
        mt: 1,
        mb: 2,
        '& .MuiStepLabel-label': { fontSize: '0.75rem', color: '#6b4e2e' },
        '& .MuiStepIcon-root': { color: '#d6bfa6' },
        '& .MuiStepIcon-root.Mui-active': { color: '#8B6E4A' },
        '& .MuiStepIcon-root.Mui-completed': { color: '#A9825A' },
      }}
    >
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default CustomProgressBar;