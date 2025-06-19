import React, { useState } from 'react';
import {
    Grid,
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
import googlemap from '../../../../../assets/googlemap.jpeg';
import { useLocation, useNavigate } from 'react-router-dom';
const WorkerRequestDetail = () => {

    const { state } = useLocation();
    const { isFromConfirmation, location, client, avatar } = state || {};


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
        <Grid >
            <Box sx={{mt:1, ml:2}}>
            {/* Header Icons */}
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2} ml={-1}>
                <IconButton onClick={() => navigate(-1)}>
                    <ArrowBackIosIcon />
                </IconButton>
                <Typography sx={{ fontSize: '1.3rem', }}>Work Detail</Typography>
                <IconButton onClick={handleMenuClick}>
                    <MoreVert sx={{ fontSize: '2rem', }} />
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
            </Box>


            {/* Title Section */}
            <Grid sx={{ px: 2, pt: 1, pb: 2, maxWidth: 400, mx: 'auto' }}>
                <Box  >
                    <Stack direction="Row" mb={3} alignItems={'center'} ml={0.2}>
                        <Work sx={{ fontSize: '2.5rem', color: 'Black', }} />
                        <Typography sx={{ fontSize: '1.5rem', color: 'Black', ml: 2, mt: 1 }} fontWeight="bold">
                            Steel Fabrication
                        </Typography>
                        <Box>

                        </Box>
                    </Stack>
                </Box>

                {/* Details */}
                <Box
                    sx={{
                        px: 1.5,
                        py: 2.5,
                        border: '1px solid #e0e0e0',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)', // subtle shadow
                        backgroundColor: 'white', // optional for better contrast
                    }}
                >
                    <Stack direction="row" alignItems="center" spacing={1} mb={3}>
                        <CalendarToday fontSize="small" />
                        <Typography sx={{ fontSize: '0.9rem' }}>Sunday, 21 Jan</Typography>
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={1} mb={3}>
                        <AccessTime fontSize="small" />
                        <Typography sx={{ fontSize: '0.9rem' }}>09:30 am – 10:30 am</Typography>
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={1} mb={3}>

                        <Avatar src={avatar} sx={{ width: '2rem', height: '2rem' }} />
                        <Typography sx={{ fontSize: '0.9rem' }}>{client}</Typography>
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={1} mb={3}>
                        <Phone fontSize="small" />
                        <Typography sx={{ fontSize: '0.9rem' }}>+91 8828743213</Typography>
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={1}>
                        <LocationOn fontSize="small" />
                        <Typography sx={{ fontSize: '0.9rem' }}>{location}</Typography>
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

                <Box>
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
            </Grid>

        </Grid>
    );
};

export default WorkerRequestDetail;
