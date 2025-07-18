import React from 'react';
import {
    Avatar,
    Box,
    Typography,
    Stack,
} from '@mui/material';
import {
    LocationOn,
} from '@mui/icons-material';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from 'react-router-dom';
import WorkerRequestConfirmedCard from './workerRequestConfirmedCard';

const requests = [
    {
        id: 1,
        title: 'Steel Fabrication',
        location: 'Ernakulam, Kerala',
        time: '09:00am, Jan 21',
        client:  'Santhosh',
        avatar: 'https://randomuser.me/api/portraits/men/14.jpg',
        week: 'this',
    },
    {
        id: 2,
        title: 'Steel Fabrication',
        location: 'Thrissur, Kerala',
        time: '09:00am, Jan 21',
        client: 'Kumaran',
        avatar: 'https://randomuser.me/api/portraits/men/30.jpg',
        week: 'this',
    },
    {
        id: 3,
        title: 'Steel Fabrication',
        location: 'Thrissur, Kerala',
        time: '09:00am, Jan 21',
        client: 'Nikhil Babu',
        avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
        week: 'next',
    },
];

export default function WorkerRequestConfirmed() {
    const navigate = useNavigate();
    const thisWeek = requests.filter(r => r.week === 'this');
    const nextWeek = requests.filter(r => r.week === 'next');

    return (
        <Box sx={{ bgcolor: '#fefaf7', minHeight: '100vh', p: 2 }}>
            {/* Header */}
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <ArrowBackIosIcon
                    onClick={() => navigate(-1)}
                    sx={{ fontSize: "23px", color: "grey", mt: '1.5%', cursor: 'pointer' }}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
                    <Typography variant="h6" fontWeight="bold">
                       Hi, Daison Babu
                    </Typography>
                    <Stack direction="row" alignItems="center">
                        <LocationOn sx={{ fontSize: "13px", mr: 0.5, color: 'grey' }} />
                        <Typography variant="body2" color="text.secondary">
                            Thrissur , Kerala
                        </Typography>
                    </Stack>
                </Box>
            </Box>

            {/* Highlight Card */}
            <Box
                sx={{
                    width: '96%',
                    height: '120px',
                    bgcolor: 'rgba(171, 124, 43, 0.73)',
                    color: 'white',
                    borderRadius: 1,
                    py: 2,
                    pl: 2,
                    my: 3,
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 500
                }}
            >
                {/* Circle Design */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: -280,
                        left: -120,
                        width: 420,
                        height: 450,
                        borderRadius: '50%',
                        backgroundColor: '#b87d51',
                        zIndex: 100,
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: -285,
                        left: -60,
                        width: 420,
                        height: 450,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(213, 189, 169, 0.96)',
                        zIndex: -1,
                    }}
                />

                {/* Content */}
                <Box sx={{ position: 'relative', zIndex: 1000, height: '100%' }}>
                    <Box>
                        <Typography sx={{ fontWeight: '550', fontSize: '120%', color: 'white', pr: 14, mt: 0.5 }}>
                            You have a pretty busy week
                        </Typography>
                    </Box>

                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        sx={{ mt: 4, mb: 1, color: 'white', position: 'absolute', bottom: 1 }}
                    >
                        <FactCheckIcon sx={{ fontSize: "15px", color: 'white' }} />
                        <Typography variant="body2" sx={{ fontSize: "14px", color: 'white' }}>
                            5 works scheduled for this week.
                        </Typography>
                    </Stack>
                </Box>
            </Box>

            {/* Request Lists */}
            <Typography fontSize={15} fontWeight={600} mb={1}>
                All the requests
            </Typography>

            <Typography variant="body2" color="text.secondary" mb={1}>
                This week
            </Typography>

            {thisWeek.map(req => (
                <WorkerRequestConfirmedCard key={req.id} {...req} />
            ))}

            <Typography variant="body2" color="text.secondary" mt={3} mb={1}>
                Next week
            </Typography>

            {nextWeek.map(req => (
                <WorkerRequestConfirmedCard key={req.id} {...req} />
            ))}
        </Box>
    );
}


