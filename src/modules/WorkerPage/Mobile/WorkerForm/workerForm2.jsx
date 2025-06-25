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
import BottomButton from './bottomButton';
import TopProgressBar from './topProgressBar';

const WorkerForm2 = () => {
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
        <Box sx={{ bgcolor: '#f1e4d4', pt: 4 }}>
            {/* Top Progress Bar */}
            <TopProgressBar activeStep={1} />

            {/* Main Form Box with Rounded Top */}
            <Box
                sx={{
                    mt: 4,
                    bgcolor: 'white',
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    px: 2,
                    py: 3.5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >

                <Box sx={{ mb: 8 }}>
                    <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold', mb: 4 }}>
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
                <BottomButton handleNext={handleNext} />
            </Box>
        </Box>
    );
};

export default WorkerForm2;
