import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

const MobWorkerFormTopProgressBar = ({ activeStep }) => {

    const steps = ['', '', '', ''];

    return (
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((_, index) => (
                <Step key={index}>
                    <StepLabel />
                </Step>
            ))}
        </Stepper>
    );
};
export default MobWorkerFormTopProgressBar