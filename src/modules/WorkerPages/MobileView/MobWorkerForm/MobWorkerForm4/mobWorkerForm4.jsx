import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';

const MobWorkerForm4 = () => {

    const navigate = useNavigate();

    return (
        <Box
            sx={{
                bgcolor: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                px: 2,
                pt: 17
            }}
        >
            {/* Green Check Icon */}
            <CheckCircleIcon sx={{ fontSize: 80, color: '#00C853', mb: 3 }} />

            {/* Success Message */}
            <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', mb: 1, textAlign: 'center' }}
            >
                Profile successfully
                <br />
                completed
            </Typography>

            <Button
                variant="contained"
                sx={{
                    mt: 4,
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
                onClick={() => navigate("/mobile-worker-mainpage")} // ✅ Added this line
            >
                Move to Worker Page
            </Button>
        </Box>
    );
};

export default MobWorkerForm4;