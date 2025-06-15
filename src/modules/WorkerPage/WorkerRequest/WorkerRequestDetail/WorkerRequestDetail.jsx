import React, { useState } from 'react';
import {
    Box,
    Typography,
    IconButton,
    Avatar,
    Stack,
    Button,
    Divider,
    Menu,
    MenuItem,
    ListItemIcon,
} from '@mui/material';
import {
    MoreVert,
    Work,
    CalendarToday,
    AccessTime,
    Person,
    Phone,
    LocationOn,
    Comment,
    CheckCircle,
    Cancel,
} from '@mui/icons-material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ReportIcon from '@mui/icons-material/Report';
import MessageIcon from '@mui/icons-material/Message';
import googlemap from '../../../../assets/googlemap.jpeg';
import { useLocation, useNavigate } from 'react-router-dom';

const WorkerRequestDetail = () => {

    const location = useLocation();
    const { isFromConfirmation } = location.state || {};

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ p: 2, maxWidth: 400, mx: 'auto' }}>
            {/* Header Icons */}
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2} ml={-2}>
                <IconButton onClick={() => navigate(-1)}>
                    <ArrowBackIosIcon />
                </IconButton>
                <IconButton onClick={handleMenuClick}>
                    <MoreVert sx={{ fontSize: '2rem' }} />
                </IconButton>

                {/* Dropdown Menu */}
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <ReportIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography >Report</Typography>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <MessageIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography>Message</Typography>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <Cancel fontSize="small" sx={{ color: 'red' }} />
                        </ListItemIcon>
                        <Typography sx={{ color: 'red' }}>Cancel</Typography>
                    </MenuItem>
                </Menu>
            </Stack>

            {/* Title Section */}
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
                    zIndex: 1,
                }}
            >
                {/* Circle Background Design */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: -280,
                        left: -120,
                        width: 420,
                        height: 450,
                        borderRadius: '50%',
                        backgroundColor: '#b87d51',
                        zIndex: 0,
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
                <Stack direction="column" spacing={1} mb={2} sx={{ position: 'relative', zIndex: 1 }}>
                    <Work sx={{ fontSize: '3rem', color: '#000040' }} />
                    <Typography sx={{ fontSize: '2rem', color: '#000040' }} fontWeight="bold">
                        Plumbing
                    </Typography>
                </Stack>
            </Box>

            {/* Details */}
            <Box sx={{px:0.5}}>
                <Stack direction="row" alignItems="center" spacing={1} mb={3}>
                    <CalendarToday fontSize="small" />
                    <Typography>Sunday, 21 Jan</Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1} mb={3}>
                    <AccessTime fontSize="small" />
                    <Typography>09:30 am – 10:30 am</Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1} mb={3}>
                    <Person fontSize="small" />
                    <Avatar src="https://randomuser.me/api/portraits/women/75.jpg" sx={{ width: '2rem', height: '2rem' }} />
                    <Typography>Alin Tomy</Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1} mb={3}>
                    <Phone fontSize="small" />
                    <Typography>+91 8828743213</Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1} mb={3}>
                    <LocationOn fontSize="small" />
                    <Typography>Hyundai Ofc, Boston</Typography>
                </Stack>
            </Box>

            {/* Map Image */}
            <Box
                component="img"
                src={googlemap}
                alt="Map"
                sx={{ width: '100%', height: '200px', borderRadius: 1, my: 2 }}
            />

            {/* Comments */}
            <Stack direction="row" alignItems="center" spacing={1} mb={0.5}>
                <Comment fontSize="small" />
                <Typography fontWeight={600}>Comments</Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary" mb={2}>
                Jan 21 you will be in Tokyo. Book a flight ticket. This is in clash with other meeting
            </Typography>

            <Divider sx={{ mb: 2 }} />

            {/* Confirm & Cancel Buttons */}
            {isFromConfirmation && (
                <Stack direction="row" spacing={2} justifyContent="center">
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<CheckCircle />}
                        sx={{
                            backgroundColor: '#865B3C',
                            '&:hover': { backgroundColor: '#6d4831' },
                            textTransform: 'none',
                            px: 4,
                            borderRadius: 5,
                        }}
                    >
                        Confirm
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<Cancel />}
                        sx={{
                            borderColor: '#ea6c6c',
                            color: '#ea6c6c',
                            textTransform: 'none',
                            px: 4,
                            borderRadius: 5,
                        }}
                    >
                        Cancel
                    </Button>
                </Stack>
            )}

        </Box>
    );
};

export default WorkerRequestDetail;
