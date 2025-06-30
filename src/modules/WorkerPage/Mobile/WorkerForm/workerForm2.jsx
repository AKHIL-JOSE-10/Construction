import React, { useState } from 'react';
import {
    TextField,
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
        navigate('/mobile-worker-form4');
    };

    return (

        <Box sx={{ p: 2 }}>
            {/* Title */}
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 8, textAlign: 'center', mt: 1 }}>
                Create Your Worker Profile
            </Typography>

            {/* Contact Details Heading */}
            <Typography
                sx={{
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    mt: 3,
                    mb: 4,
                    pb: 1,
                    borderBottom: '1px solid #ccc',
                    width: '100%',
                }}
            >
                Contact Details
            </Typography>


            {/* Email Address */}
            <Typography
                sx={{
                    fontSize: { xs: "15px", sm: "20px", md: "20px" },
                    color: "#666666",
                    fontWeight: "550",
                    mb: 1,
                    ml: 0.5,
                }}
            >
                Email Address
            </Typography>
            <TextField
                placeholder="Enter your Email"
                variant="outlined"
                fullWidth
                type="email"
                slotProps={{
                    input: {
                        style: {
                            height: '40px',
                            padding: '0 10px',
                            fontSize: '0.9rem',
                            backgroundColor: 'white',
                        },
                    },
                }}
                sx={{
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#ccc' },
                        '&:hover fieldset': { borderColor: '#999' },
                        '&.Mui-focused fieldset': { borderColor: '#666' },
                    },
                }}
            />

            {/* Phone Number */}
            <Typography
                sx={{
                    fontSize: { xs: "15px", sm: "20px", md: "20px" },
                    color: "#666666",
                    fontWeight: "550",
                    mb: 1,
                    ml: 0.5,
                }}
            >
                Phone Number
            </Typography>
            <TextField
                placeholder="Enter your Phone Number"
                variant="outlined"
                fullWidth
                type="tel"
                inputProps={{
                    inputMode: 'numeric',
                    maxLength: 10,
                    style: {
                        height: '40px',
                        padding: '0 10px',
                        fontSize: '0.9rem',
                        backgroundColor: 'white',
                    },
                }}
                sx={{
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#ccc' },
                        '&:hover fieldset': { borderColor: '#999' },
                        '&.Mui-focused fieldset': { borderColor: '#666' },
                    },
                }}
            />

            {/* Alternate Phone Number */}
            <Typography
                sx={{
                    fontSize: { xs: "15px", sm: "20px", md: "20px" },
                    color: "#666666",
                    fontWeight: "550",
                    mb: 1,
                    ml: 0.5,
                }}
            >
                Alternate Phone Number
            </Typography>
            <TextField
                placeholder="Enter Alternate Phone Number"
                variant="outlined"
                fullWidth
                type="tel"
                inputProps={{
                    inputMode: 'numeric',
                    maxLength: 10,
                    style: {
                        height: '40px',
                        padding: '0 10px',
                        fontSize: '0.9rem',
                        backgroundColor: 'white',
                    },
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#ccc' },
                        '&:hover fieldset': { borderColor: '#999' },
                        '&.Mui-focused fieldset': { borderColor: '#666' },
                    },
                }}
            />



            <Box>
                {/* Bottom Buttons */}
                <BottomButton handleNext={handleNext} pgnum="2/2" />

            </Box>
        </Box>
    );
};

export default WorkerForm2;
