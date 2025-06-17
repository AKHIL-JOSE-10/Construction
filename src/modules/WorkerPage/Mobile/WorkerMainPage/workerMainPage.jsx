import React, { useState } from 'react';
import { Box, Paper, Typography, GlobalStyles, Card, CardContent } from '@mui/material';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import RoomIcon from '@mui/icons-material/Room';
import dayjs from 'dayjs';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useNavigate } from 'react-router-dom';
import WorkerBottomBar from './workerBottomBar';

const WorkerMainPage = () => {
    const navigate = useNavigate();
    const [date, setDate] = useState(dayjs());

    return (
        <Box sx={{ px: 2, py: 3, bgcolor: '#fff7f0', pb: '10px' }}>
            {/* Header */}
            <Box sx={{ mb: 2 }}>
                <Typography variant="h5" fontWeight="bold">
                    Hi, Athul Murali T
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', color: 'gray', mt: 0.5 }}>
                    <RoomIcon fontSize="small" sx={{ mr: 0.5 }} />
                    <Typography fontSize="14px">Boston, USA</Typography>
                </Box>
            </Box>

            {/* Calendar */}
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <GlobalStyles
                        styles={{
                            '.MuiPickersToolbar-root': { display: 'none !important' },
                            '.MuiPickersCalendarHeader-root': { paddingTop: '0px' },
                        }}
                    />
                    <Paper
                        elevation={3}
                        sx={{
                            borderRadius: 2,
                            border: '1px solid #ccc',
                            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                            p: 1,
                        }}
                    >
                        <StaticDatePicker
                            orientation="portrait"
                            openTo="day"
                            value={date}
                            onChange={(newValue) => setDate(newValue)}
                            slotProps={{ actionBar: { actions: [] } }}
                        />
                    </Paper>
                </LocalizationProvider>
            </Box>

            {/* Cards */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mt: 3,
                    gap: 2,
                }}
            >
                <Card
                    onClick={() => navigate('/mobile-worker-request-confirmation')}
                    sx={{
                        flex: 1,
                        boxShadow: 2,
                        height: '8rem',
                        borderRadius: 1,
                        bgcolor: 'rgb(154, 87, 33)',
                        position: 'relative',
                    }}
                >
                    <Box
                        sx={{
                            width: 100,
                            height: 90,
                            bgcolor: 'rgb(178, 109, 53)',
                            position: 'absolute',
                            top: -120,
                            right: -20,
                            transform: 'translate(10%, 90%) rotate(55deg)',
                            border: '2px solid rgb(173, 109, 57)',
                            zIndex: 1,
                        }}
                    />
                    <Box
                        sx={{
                            width: 100,
                            height: 90,
                            bgcolor: 'rgb(169, 105, 54)',
                            position: 'absolute',
                            top: 10,
                            right: 90,
                            transform: 'translate(10%, 90%) rotate(55deg)',
                            border: '2px solid rgb(152, 92, 44)',
                            zIndex: 1,
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 8,
                            right: 8,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            zIndex: 2,
                        }}
                    >
                        <NotificationsNoneOutlinedIcon sx={{ color: 'white', fontSize: 30 }} />
                    </Box>
                    <CardContent sx={{ zIndex: 2, position: 'relative' }}>
                        <Typography fontWeight="bold" align="left" color="white">
                            Work Requests
                        </Typography>
                    </CardContent>
                </Card>

                <Card
                    onClick={() => navigate('/mobile-worker-request-confirmed')}
                    sx={{
                        flex: 1,
                        boxShadow: 2,
                        height: '8rem',
                        borderRadius: 1,
                        bgcolor: 'rgb(154, 87, 33)',
                        position: 'relative',
                    }}
                >
                    <Box
                        sx={{
                            width: 100,
                            height: 90,
                            bgcolor: 'rgb(178, 109, 53)',
                            position: 'absolute',
                            top: -120,
                            right: -20,
                            transform: 'translate(10%, 90%) rotate(55deg)',
                            border: '2px solid rgb(173, 109, 57)',
                            zIndex: 1,
                        }}
                    />
                    <Box
                        sx={{
                            width: 100,
                            height: 90,
                            bgcolor: 'rgb(169, 105, 54)',
                            position: 'absolute',
                            top: 10,
                            right: 90,
                            transform: 'translate(10%, 90%) rotate(55deg)',
                            border: '2px solid rgb(152, 92, 44)',
                            zIndex: 1,
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 8,
                            right: 8,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            zIndex: 2,
                        }}
                    >
                        <CheckCircleIcon sx={{ color: 'white', fontSize: 27 }} />
                    </Box>
                    <CardContent sx={{ zIndex: 2, position: 'relative' }}>
                        <Typography fontWeight="bold" align="left" color="white">
                            Confirmed Works
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

            {/* Fixed Bottom Bar */}
            <WorkerBottomBar />
        </Box>
    );
};

export default WorkerMainPage;
