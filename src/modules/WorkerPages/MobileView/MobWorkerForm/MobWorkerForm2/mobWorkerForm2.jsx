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
import CustomProgressBar from '../Components/mobWorkerFormTopProgressBar'; // updated to use CustomProgressBar

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
        navigate('/mobile-worker-form3');
    };

    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: '100vh',
                bgcolor: '#F8F1E8',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                px: 0.5,
                pb: 5,
                pt: 1,
                overflow: 'hidden',
                '::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '135px',
                    backgroundColor: '#E0CBB2',
                    transform: 'skewY(-3deg)',
                    transformOrigin: 'top left',
                    zIndex: 0,
                },
                '::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: '100%',
                    height: '280px',
                    backgroundColor: '#E0CBB2',
                    transform: 'skewY(-5deg)',
                    transformOrigin: 'bottom right',
                    zIndex: 0,
                },
            }}
        >
            {/* Top Controls */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    maxWidth: 420,
                }}
            >
                <Box display="flex" alignItems="center" justifyContent="space-between" px={0.5}>
                    <IconButton onClick={() => navigate(-1)}>
                        <ArrowBackIosIcon sx={{ fontSize: '1.5rem' }} />
                    </IconButton>
                    <Typography fontSize="0.95rem" fontWeight="bold">2 / 4</Typography>
                </Box>
                <CustomProgressBar activeStep={1} />
            </Box>

            {/* Form Card */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    bgcolor: 'white',
                    borderRadius: 3,
                    boxShadow: 3,
                    width: '100%',
                    maxWidth: 420,
                    px: 2,
                    pt: 2,
                    mt: 1,
                }}
            >
                <Box sx={{ px: 1, mb: 8 }}>
                    <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold', mb: 4, mt: 4 }}>
                        Your Services & Experience
                    </Typography>

                    {/* Select Service */}
                    <Typography variant="body2" mb={0.5}>Select Service</Typography>
                    <FormControl fullWidth sx={{ mb: 2 }} variant="standard">
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
                    <FormControl fullWidth sx={{ mb: 2 }} variant="standard">
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

                    {/* Add Button */}
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
                            mb: 5,
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
