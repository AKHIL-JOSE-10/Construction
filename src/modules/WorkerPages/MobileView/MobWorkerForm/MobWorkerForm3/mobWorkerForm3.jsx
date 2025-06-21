import React, { useState } from 'react';
import {
    Box,
    Typography,
    IconButton,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
} from '@mui/material';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from 'react-router-dom';
import MobWorkerFormbottomButton from '../Components/mobWorkerFormbottomButton';
import CustomProgressBar from '../Components/mobWorkerFormTopProgressBar'; // updated import

const MobWorkerForm3 = () => {
    const navigate = useNavigate();
    const [customBio, setCustomBio] = useState('');
    const [selectedOption, setSelectedOption] = useState('custom');

    const defaultBio =
        "I’ve been working as a professional Carpenter/Handyman for over 5 years, handling both residential and commercial jobs with precision and dedication. I’m committed to delivering high-quality, dependable, and efficient workmanship on every project. Whether it’s a small repair or a complete renovation, I’m here to help. Don’t hesitate to reach out with any questions or service needs!";

    const handleNext = () => {
        navigate('/mobile-worker-form4');
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
                    <Typography fontSize="0.95rem" fontWeight="bold">3 / 4</Typography>
                </Box>
                <CustomProgressBar activeStep={2} />
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
                    {/* Main Heading */}
                    <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold', mb: 3, mt: 4 }}>
                        Write a small bio of you
                    </Typography>

                    <RadioGroup
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    >
                        <FormControlLabel
                            value="custom"
                            control={<Radio />}
                            label={
                                <Typography fontWeight="bold">
                                    Write your own bio
                                </Typography>
                            }
                            sx={{ alignItems: 'center', mb: 1 }}
                        />
                        {selectedOption === 'custom' && (
                            <TextField
                                multiline
                                minRows={4}
                                placeholder="Describe yourself briefly"
                                variant="outlined"
                                fullWidth
                                value={customBio}
                                onChange={(e) => setCustomBio(e.target.value)}
                                inputProps={{
                                    style: {
                                        fontSize: '0.9rem',
                                        padding: '12px',
                                    },
                                }}
                                sx={{ mb: 3}}
                            />
                        )}

                        <FormControlLabel
                            value="archisans"
                            control={<Radio />}
                            label={
                                <Typography fontWeight="bold">
                                    Let Archisans choose a bio for you
                                </Typography>
                            }
                            sx={{ alignItems: 'center', mb: 1 }}
                        />
                        {selectedOption === 'archisans' && (
                            <Box
                                sx={{
                                    bgcolor: '#f5f5f5',
                                    borderRadius: 2,
                                    p: 2,
                                    mb: 3,
                                    fontSize: '0.9rem',
                                    color: 'text.secondary',
                                }}
                            >
                                {defaultBio}
                            </Box>
                        )}
                    </RadioGroup>
                </Box>

                <MobWorkerFormbottomButton handleNext={handleNext} />
            </Box>
        </Box>
    );
};

export default MobWorkerForm3;
