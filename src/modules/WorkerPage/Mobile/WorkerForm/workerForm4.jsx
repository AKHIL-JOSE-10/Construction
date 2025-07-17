import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';

const WorkerForm4 = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                bgcolor: '#f1e4d4', // light brown background
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                px: 2,
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    bgcolor: 'white',
                    borderRadius: 4,
                    p: 4,
                    maxWidth: 400,
                    width: '100%',
                    textAlign: 'center',
                }}
            >
                {/* Success Icon */}
                <CheckCircleIcon sx={{ fontSize: 80, color: '#00C853', mb: 2 }} />

                {/* Main Message */}
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Profile Completed!
                </Typography>

                {/* Subtitle */}
                <Typography sx={{ color: 'gray', mb: 4, fontSize: '0.95rem' }}>
                    Your profile is now ready. You can start offering your services.
                </Typography>

                {/* Button */}
                <Button
                    variant="contained"
                    sx={{
                        bgcolor: '#a47763',
                        borderRadius: 50,
                        mt:5,
                        px: 4,
                        py: 1.2,
                        textTransform: 'none',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        width: '100%',
                        '&:hover': {
                            bgcolor: '#8d6551',
                        },
                    }}
                    onClick={() => navigate('/mobile-worker-mainpage')}
                >
                    Go to Worker Page
                </Button>
            </Paper>
        </Box>
    );
};

export default WorkerForm4;
