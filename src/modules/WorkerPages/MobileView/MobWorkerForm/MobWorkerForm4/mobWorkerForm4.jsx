import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';

const MobWorkerForm4 = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: '100vh',
                bgcolor: '#F8F1E8',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                px: 2,
                pt: 15,
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
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    bgcolor: 'white',
                    borderRadius: 3,
                    boxShadow: 3,
                    width: '100%',
                    maxWidth: 420,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    py: 5,
                    px: 3,
                }}
            >
                {/* Green Check Icon */}
                <CheckCircleIcon sx={{ fontSize: 80, color: '#00C853', mb: 3 }} />

                {/* Success Message */}
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Your profile is now active as a Worker!
                </Typography>

                {/* Explanation Text */}
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
                    You can now showcase your skills, post your services, and start getting hired for work.
                    Clients will be able to see your profile and contact you directly for projects.
                </Typography>

                {/* Button to Worker Main Page */}
                <Button
                    variant="contained"
                    sx={{
                        mt: 2,
                        bgcolor: '#a47763',
                        borderRadius: 50,
                        px: 5,
                        py: 1.5,
                        textTransform: 'none',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        '&:hover': {
                            bgcolor: '#a47763',
                        },
                    }}
                    onClick={() => navigate("/mobile-worker-mainpage")}
                >
                    Go to Worker Dashboard
                </Button>
            </Box>
        </Box>
    );
};

export default MobWorkerForm4;
