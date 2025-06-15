import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Stack,
  Button,
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

const WorkerRequestConfirmationCard = ({ title, location, time, client, avatar }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <Card
      sx={{
        borderRadius: 1,
        mb: 2,
        boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
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

          {/* Dropdown Menu */}
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

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box sx={{ alignSelf: 'center' }}>
            <Stack direction="row" spacing={1} alignItems="center" my={1.5}>
              <LocationOn fontSize="small" color="disabled" />
              <Typography sx={{ fontSize: '0.7rem' }} color="#b87d51">{location}</Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center" mt={0.5}>
              <CalendarToday fontSize="small" color="disabled" />
              <Typography sx={{ fontSize: '0.7rem' }} color="#b87d51">{time}</Typography>
            </Stack>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Button
            variant="outlined"
            sx={{
              height: '30px',
              border: '1px solid black',
              borderRadius: 2,
              mt: 3.5,
              px: 4,
              mr: '4rem',
            }}
          >
            Confirm
          </Button>
          <Box sx={{ alignSelf: 'center' }}>
            <Typography variant="caption" color="#b87d51" ml={0.5}>Client</Typography>
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

export default WorkerRequestConfirmationCard;
