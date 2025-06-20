import React, { useState } from 'react';
import {
    Box,
    Typography,
    IconButton,
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
import MobWorkerFormbottomButton from '../Components/mobWorkerFormbottomButton';
import MobWorkerFormTopProgressBar from '../Components/mobWorkerFormTopProgressBar';

const MobWorkerForm2 = () => {

    const navigate = useNavigate();

    const [selectedService, setSelectedService] = useState('');
    const [selectedExperience, setSelectedExperience] = useState('');
    const [addedServiceExperience, setAddedServiceExperience] = useState([]);


    const availableServices = [
        "Architectural Design", "Civil Engineering", "Interior Design", "Landscaping",
        "Structural Engineering", "MEP Services", "Pool Design", "Steel Fabrication",
        "Construction Contracting", "Masonry Work", "Carpentry Services", "Metal Fabrication",
        "Electrical Services", "Plumbing Services", "Painting Services", "Waterproofing Solutions",
        "Flooring Installation", "Security & Surveillance", "Smart Home Automation",
        "Audio & Video Systems", "Automated Smart Locks", "Aluminium Fabrication",
        "Stainless Steel Fabrication", "Roofing Solutions", "Mild Steel Fabrication",
        "Glass Fabrication",
    ];

    const years = Array.from({ length: 51 }, (_, i) => i); // 0-50 years

    const handleAddService = () => {
        if (selectedService && selectedExperience !== '') {
            const alreadyAdded = addedServiceExperience.some(
                (item) => item.service === selectedService
            );
            if (!alreadyAdded) {
                setAddedServiceExperience([
                    ...addedServiceExperience,
                    { service: selectedService, experience: selectedExperience },
                ]);
                setSelectedService('');
                setSelectedExperience('');
            }
        }
    };

    const handleDeleteService = (indexToRemove) => {
        setAddedServiceExperience(prev => prev.filter((_, idx) => idx !== indexToRemove));
    };

    const handleNext = () => {
        // You can pass `addedServiceExperience` to the next step
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

                {/* Top Progress Bar */}

                <MobWorkerFormTopProgressBar activeStep={1} />

                <Box sx={{ px: 2, mb: 8 }}>
                    <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold', mb: 4, mt: 4 }}>
                        Your Services & Experience
                    </Typography>

                    {/* Select Service */}
                    <Typography variant="body2" mb={0.5}>Select Service</Typography>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel>Select a service</InputLabel>
                        <Select
                            value={selectedService}
                            onChange={(e) => setSelectedService(e.target.value)}
                            label="Select a service"
                        >
                            {availableServices
                                .filter(s => !addedServiceExperience.some(item => item.service === s))
                                .map((service, idx) => (
                                    <MenuItem key={idx} value={service}>
                                        {service}
                                    </MenuItem>
                                ))}
                        </Select>
                    </FormControl>

                    {/* Select Experience */}
                    <Typography variant="body2" mb={0.5}>Years of Experience</Typography>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel>Experience</InputLabel>
                        <Select
                            value={selectedExperience}
                            onChange={(e) => setSelectedExperience(e.target.value)}
                            label="Experience"
                        >
                            {years.map((year) => (
                                <MenuItem key={year} value={year}>
                                    {year} {year === 1 ? 'year' : 'years'}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <Button
                        variant="contained"
                        onClick={handleAddService}
                        disabled={!selectedService || selectedExperience === ''}
                        sx={{
                            bgcolor: '#d7b49e',
                            color: '#4b2e2e',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            height: 40,
                            px: 3,
                            mb: 3,
                            '&:hover': {
                                bgcolor: '#c19a84'
                            }
                        }}
                    >
                        Add
                    </Button>

                    {/* Display Added Service-Experience */}
                    {addedServiceExperience.length > 0 && (
                        <Box mb={3}>
                            <Typography variant="body2" mb={1}>Added Services</Typography>
                            <Stack direction="row" gap={1.5} flexWrap="wrap">
                                {addedServiceExperience.map((item, idx) => (
                                    <Chip
                                        key={idx}
                                        label={`${item.service} - ${item.experience} ${item.experience === 1 ? 'year' : 'years'}`}
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
                <MobWorkerFormbottomButton handleNext={handleNext} />
            </Box>
        </Box>
    );
};

export default MobWorkerForm2;
