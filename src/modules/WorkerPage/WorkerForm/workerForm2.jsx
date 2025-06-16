import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    IconButton,
    Stepper,
    Step,
    StepLabel,
    Chip,
    Stack,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button
} from '@mui/material';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from 'react-router-dom';
import BottomButton from './bottomButton';

const WorkerForm2 = () => {
    const navigate = useNavigate();

    const [experience, setExperience] = useState('');
    const [selectedService, setSelectedService] = useState('');
    const [addedServices, setAddedServices] = useState([]);

    const steps = ['', '', '', ''];

    const availableServices = [
        "Architectural Design",
        "Civil Engineering",
        "Interior Design",
        "Landscaping",
        "Structural Engineering",
        "MEP Services",
        "Pool Design",
        "Steel Fabrication",
        "Construction Contracting",
        "Masonry Work",
        "Carpentry Services",
        "Metal Fabrication",
        "Electrical Services",
        "Plumbing Services",
        "Painting Services",
        "Waterproofing Solutions",
        "Flooring Installation",
        "Security & Surveillance",
        "Smart Home Automation",
        "Audio & Video Systems",
        "Automated Smart Locks",
        "Aluminium Fabrication",
        "Stainless Steel Fabrication",
        "Roofing Solutions",
        "Mild Steel Fabrication",
        "Glass Fabrication",
    ];


    const handleAddService = () => {
        if (selectedService && !addedServices.includes(selectedService)) {
            setAddedServices((prev) => [...prev, selectedService]);
            setSelectedService('');
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
            {/* Top Header */}
            <Box display="flex" alignItems="center" justifyContent="space-between" mb={2} pt={1.5} px={1}>
                <IconButton onClick={() => navigate(-1)}>
                    <ArrowBackIosIcon sx={{ fontSize: '1.5rem' }} />
                </IconButton>
                <Typography fontSize="0.95rem" fontWeight="bold">2 / 4</Typography>
            </Box>

            <Box sx={{ bgcolor: 'white', pb: 7, display: 'flex', flexDirection: 'column' }}>
                {/* Stepper */}
                <Stepper activeStep={1} alternativeLabel sx={{ mb: 3 }}>
                    {steps.map((_, index) => (
                        <Step key={index}><StepLabel /></Step>
                    ))}
                </Stepper>

                <Box px={2}>
                    <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold', mb: 4, mt: 1 }}>
                        Your Services & Experience
                    </Typography>

                    {/* Experience */}
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

                    {/* Select Service */}
                    <Typography variant="body2" mb={0.5}>Select Your Services</Typography>
                    <Box display="flex" gap={1} alignItems="center" sx={{ mb: 3 }}>
                        <FormControl fullWidth>
                            <InputLabel>Select a service</InputLabel>
                            <Select
                                value={selectedService}
                                onChange={(e) => setSelectedService(e.target.value)}
                                label="Select a service"
                            >
                                {availableServices.filter(s => !addedServices.includes(s)).map((service, idx) => (
                                    <MenuItem key={idx} value={service}>
                                        {service}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Button
                            variant="contained"
                            onClick={handleAddService}
                            disabled={!selectedService}
                            sx={{
                                bgcolor: '#d7b49e',
                                color: '#4b2e2e',
                                textTransform: 'none',
                                fontWeight: 'bold',
                                height: 40,
                                px: 3,
                                '&:hover': {
                                    bgcolor: '#c19a84'
                                }
                            }}
                        >
                            Add
                        </Button>
                    </Box>

                    {/* Added Services */}
                    {addedServices.length > 0 && (
                        <Box mb={3}>
                            <Typography variant="body2" mb={1}>Added Services</Typography>
                            <Stack direction="row" gap={1.5} flexWrap="wrap">
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
                </Box>

                {/* Bottom Button */}
                <BottomButton handleNext={handleNext} />
            </Box>
        </Box>
    );
};

export default WorkerForm2;
