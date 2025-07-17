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
import BottomButton from './bottomButton';
import TopProgressBar from './topProgressBar';

const WorkerForm3 = () => {
    const navigate = useNavigate();
    const [customBio, setCustomBio] = useState('');
    const [selectedOption, setSelectedOption] = useState('custom'); // 'archisans' | 'custom'

    const defaultBio =
        "I’ve been working as a professional Carpenter/Handyman for over 5 years, handling both residential and commercial jobs with precision and dedication. I’m committed to delivering high-quality, dependable, and efficient workmanship on every project. Whether it’s a small repair or a complete renovation, I’m here to help. Don’t hesitate to reach out with any questions or service needs!";

    const handleNext = () => {
        navigate('/mobile-worker-form4');
    };

    return (
        <Box sx={{ bgcolor: '#f1e4d4', pt: 4 }}>
            {/* Top Progress Bar */}
            <TopProgressBar activeStep={2} />

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
                    {/* Heading */}
                    <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold', mb: 3 }}>
                        Write a small bio of you
                    </Typography>

                    <RadioGroup
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    >
                        {/* Option 1: Custom Bio */}
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
                                sx={{ mb: 3 }}
                            />
                        )}

                        {/* Option 2: Archisans Bio */}
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

                {/* Bottom Next Button */}
                <BottomButton handleNext={handleNext} />
            </Box>
        </Box>
    );
};

export default WorkerForm3;
