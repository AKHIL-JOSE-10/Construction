import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Stack,
  Menu,
  MenuItem,
  ListItemIcon,
} from '@mui/material';
import {
  LocationOn,
  MoreVert,
  CalendarToday,
  Work,
  Report,
  Message,
  Cancel,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const MobClientWorkRequestConfirmedCard = ({ title, location, time, client, avatar }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    event.stopPropagation(); // Prevent card click
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => setAnchorEl(null);

  const handleCardClick = () => {
    navigate('/mobile-worker-request-detail', { state: { isFromConfirmation: false , location, client, avatar} });
  };

  return (
    <Card
      onClick={handleCardClick}
      sx={{
        borderRadius: 1,
        mb: 2,
        boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
        cursor: 'pointer',
      }}
    >
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" spacing={1} alignItems="center">
            <Work fontSize="small" color="action" />
            <Typography fontWeight="bold">{title}</Typography>
          </Stack>
          <IconButton size="small" onClick={handleMenuOpen}>
            <MoreVert fontSize="small" />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <Report fontSize="small" />
              </ListItemIcon>
              <Typography>Report</Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <Message fontSize="small" />
              </ListItemIcon>
              Message
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <Cancel fontSize="small" sx={{ color: 'red' }} />
              </ListItemIcon>
              <Typography sx={{ color: 'red' }}>Cancel</Typography>
            </MenuItem>
          </Menu>
        </Stack>

        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Box sx={{ alignSelf: 'center', mr: '3rem' }}>
            <Stack direction="row" spacing={1} alignItems="center" my={1.5} ml={-0.4}>
              <LocationOn fontSize="small" color="disabled" />
              <Typography sx={{ fontSize: '0.7rem' }} color="#b87d51">
                {location}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center" mt={0.5}>
              <CalendarToday sx={{ fontSize: '1rem' }} color="disabled" />
              <Typography sx={{ fontSize: '0.7rem' }} color="#b87d51">
                {time}
              </Typography>
            </Stack>
          </Box>

          <Box sx={{ alignSelf: 'center', mt: 1.5 }}>
            <Typography variant="caption" color="#b87d51" ml={0.5}>
              Client
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1} mt={0.5}>
              <Avatar src={avatar} sx={{ width: '2rem', height: '2rem' }} />
              <Typography sx={{ fontWeight: '550', fontSize: '0.7rem' }}>{client}</Typography>
            </Stack>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MobClientWorkRequestConfirmedCard;
