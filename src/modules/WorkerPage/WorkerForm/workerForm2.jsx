import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    IconButton,
    Stepper,
    Step,
    StepLabel,
    Chip,
    Stack
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from 'react-router-dom';

const WorkerForm2 = () => {
    const navigate = useNavigate();

    const [experience, setExperience] = useState('');
    const [customService, setCustomService] = useState('');
    const [addedServices, setAddedServices] = useState([]);
    const steps = ['', '', '', '']; // Total 5 steps

    const handleAddService = () => {
        const trimmed = customService.trim();
        if (trimmed && !addedServices.includes(trimmed)) {
            setAddedServices((prev) => [...prev, trimmed]);
            setCustomService('');
        }
    };

    const handleDeleteService = (indexToRemove) => {
        setAddedServices((prev) => prev.filter((_, idx) => idx !== indexToRemove));
    };

    const handleNext = () => {
        navigate('/mobile-worker-form3');
    };

    return (

        <Box>
            <Box display="flex" alignItems="center" justifyContent="space-between" mb={2} p={2}>
                <IconButton onClick={() => navigate(-1)}>
                    <ArrowBackIosIcon sx={{ fontSize: '1.5rem' }} />
                </IconButton>
                <Typography fontSize="0.95rem" fontWeight="bold">
                    <Typography> 2 / 5</Typography>
                </Typography>
            </Box>
            <Box
                sx={{
                    bgcolor: 'white',
                    px: 2,
                    pb: 3.5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                {/* Stepper showing progress */}
                <Stepper activeStep={1} alternativeLabel sx={{ mb: 3 }}>
                    {steps.map((_, index) => (
                        <Step key={index}>
                            <StepLabel></StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <Typography sx={{ fontSize: '1.7rem', fontWeight: 'bold', mb: 4, mt: 1 }}>
                    Your Services & Experience
                </Typography>

                {/* Experience Field */}
                <Typography variant="body2" mb={0.5}>Years of Experience</Typography>
                <TextField
                    type="number"
                    placeholder="Enter your experience in years"
                    variant="outlined"
                    fullWidth
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    slotProps={{
                        input: {
                            sx: {
                                bgcolor: 'white',
                                height: 40,
                                px: 1.2,
                                fontSize: '0.9rem',
                            }
                        }
                    }}
                    sx={{ mb: 3 }}
                />

                {/* Custom Service Input */}
                <Typography variant="body2" mb={0.5}>Add Your Own Services</Typography>
                <Box display="flex" alignItems="center" gap={1} sx={{ mb: 2 }}>
                    <TextField
                        placeholder="Enter service name (e.g., Painting)"
                        variant="outlined"
                        fullWidth
                        value={customService}
                        onChange={(e) => setCustomService(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handleAddService();
                            }
                        }}
                        slotProps={{
                            input: {
                                sx: {
                                    bgcolor: 'white',
                                    height: 40,
                                    px: 1.2,
                                    fontSize: '0.9rem',
                                }
                            }
                        }}
                    />
                    <IconButton
                        color="primary"
                        onClick={handleAddService}
                        sx={{ bgcolor: '#eee', height: 40, width: 40 }}
                    >
                        <ArrowForward />
                    </IconButton>
                </Box>

                {/* Display Added Services */}
                {addedServices.length > 0 && (
                    <Box mb={3}>
                        <Typography variant="body2" mb={1}>Added Services</Typography>
                        <Stack direction="row" gap={1.5} pb={2} flexWrap="wrap">
                            {addedServices.map((srv, idx) => (
                                <Chip
                                    key={idx}
                                    label={srv}
                                    color="primary"
                                    variant="outlined"
                                    onDelete={() => handleDeleteService(idx)}
                                />
                            ))}
                        </Stack>
                    </Box>
                )}

                {/* Submit Button */}
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
                            mt: 4
                        }}
                    >
                        Next
                    </Button>
                </Box>
            </Box>
        </Box>

    );
};

export default WorkerForm2;
