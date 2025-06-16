import React, { useState } from 'react';
import {
    Box,
    Typography,
    Stepper,
    Step,
    StepLabel,
    IconButton,
    TextField,
    Button,
    Paper,
} from '@mui/material';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from 'react-router-dom';

const WorkerForm3 = () => {
    const navigate = useNavigate();
    const [customBio, setCustomBio] = useState('');

    const steps = ['', '', '', '',];
    const defaultBio =
        " I’ve been working as a professional Carpenter/Handyman for over 5 years, handling both residential and commercial jobs with precision and dedication. I’m committed to delivering high-quality, dependable, and efficient workmanship on every project. Whether it’s a small repair or a complete renovation, I’m here to help. Don’t hesitate to reach out with any questions or service needs!"
    
    const handleNext = () => {
    navigate('/mobile-worker-form4'); 
  };

    
        return (
        <Box>
          <Box display="flex" alignItems="center" justifyContent="space-between" mb={2} p={2}>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIosIcon sx={{ fontSize: '1.5rem' }} />
          </IconButton>
          <Typography fontSize="0.95rem" fontWeight="bold">
            <Typography> 3 / 4</Typography>
          </Typography>
        </Box>            
            <Box
                sx={{
                    bgcolor: 'white',
                    px: 3,
                    pb: 3.5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >

                {/* Stepper */}
                <Stepper activeStep={2} alternativeLabel sx={{ mb: 3 }}>
                    {steps.map((_, index) => (
                        <Step key={index}>
                            <StepLabel></StepLabel>
                        </Step>
                    ))}
                </Stepper>

                {/* Heading */}
                <Typography sx={{ fontSize: '1.7rem', fontWeight: 'bold', mb: 3 }}>
                    Write a small bio of you
                </Typography>

                {/* Let Archisans choose */}
                <Typography variant="body2" fontWeight="bold" mb={1}>
                    Let Archisans choose a bio for you
                </Typography>
                <Paper elevation={1} sx={{ p: 2, mb: 3, fontSize: '0.9rem' }}>
                    {defaultBio}
                </Paper>

                {/* Write your own bio */}
                <Typography variant="body2" fontWeight="bold" mb={1}>
                    Write your own bio
                </Typography>
                <TextField
                    multiline
                    minRows={4}
                    placeholder="Describe yourself briefly"
                    variant="outlined"
                    fullWidth
                    value={customBio}
                    onChange={(e) => setCustomBio(e.target.value)}
                    sx={{ mb: 4 }}
                    inputProps={{
                        style: {
                            fontSize: '0.9rem',
                            padding: '12px',
                        },
                    }}
                />

                {/* Submit or Next */}
                <Box display="flex" justifyContent="center">
                    <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{
                            bgcolor: '#a47763',
                            borderRadius: 5,
                            width: '100%',
                            py: 1.2,
                            textTransform: 'none',
                            fontWeight: 'bold',
                        }}
                    >
                        Next
                    </Button>
                </Box>
            </Box>
        </Box>

    );
};

export default WorkerForm3;
