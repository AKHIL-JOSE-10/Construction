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
    const [selectedOption, setSelectedOption] = useState('archisans'); // 'archisans' | 'custom'

    const steps = ['', '', '', ''];
    const defaultBio =
        "I’ve been working as a professional Carpenter/Handyman for over 5 years, handling both residential and commercial jobs with precision and dedication. I’m committed to delivering high-quality, dependable, and efficient workmanship on every project. Whether it’s a small repair or a complete renovation, I’m here to help. Don’t hesitate to reach out with any questions or service needs!";

    const handleNext = () => {
        navigate('/mobile-worker-form4');
    };

    return (
        <Box>
            {/* Top Navigation */}
            <Box display="flex" alignItems="center" justifyContent="space-between" mb={2} pt={1.5} px={1}>
                <IconButton onClick={() => navigate(-1)}>
                    <ArrowBackIosIcon sx={{ fontSize: '1.5rem' }} />
                </IconButton>
                <Typography fontSize="0.95rem" fontWeight="bold">3 / 4</Typography>
            </Box>

            <Box sx={{ bgcolor: 'white', pb: 7, display: 'flex', flexDirection: 'column' }}>

                {/* Top Progress Bar */}

                <TopProgressBar activeStep={2} />

                <Box sx={{ px: 2, mb: 8 }}>
                    {/* Main Heading */}
                    <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold', mb: 3 }}>
                        Write a small bio of you
                    </Typography>

                    <RadioGroup
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    >
                        {/* Option 1: Archisans bio */}
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

                        {/* Option 2: Custom bio */}
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
                    </RadioGroup>
                </Box>

                {/* Bottom Button */}
                <BottomButton handleNext={handleNext} />
            </Box>
        </Box>
    );
};

export default WorkerForm3;
