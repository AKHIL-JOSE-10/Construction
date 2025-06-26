import { Box, Typography, Avatar, Card, CardContent, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import RoomIcon from '@mui/icons-material/Room';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import { useNavigate } from 'react-router-dom';
import WorkerBottomBar from './workerBottomBar';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { GlobalStyles, Paper } from '@mui/material';
import dayjs from 'dayjs';
import { useState } from 'react';

const WorkerMainPage = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(dayjs());

  return (
    <Box sx={{ px: 2, pt: 2.5 , pb: '65px', bgcolor: 'white' }}>
          <Box sx={{ mb:2}}>
        <Typography fontSize='150%' fontWeight="bold">
          Welcome, Daison! <Box component="span" sx={{ fontSize: '1.7rem' }}>👋</Box>
        </Typography>
      </Box>
      {/* Top Bar */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',mb:1, px:0.5  }}>
        <Avatar alt="Profile" src="https://randomuser.me/api/portraits/men/11.jpg" sx={{ height: 60, width: 60 }} />
        <Box sx={{ display: 'flex', gap: 1 }}>
          <NotificationsNoneOutlinedIcon sx={{ color: 'black', height: 26, width: 26, borderRadius: 50, bgcolor: 'white', border: '12px solid white' }} />
        </Box>
      </Box>


                <Typography fontWeight="bold" fontSize="19px" mt={5} mb={3}>
          My  Works
        </Typography>

      <Box sx={{ display: 'flex', gap: 2 }}>
        {/* Work Requests Card */}
        <Card
          onClick={() => navigate('/mobile-worker-request-confirmation')}
          sx={{
            flex: 1,
            bgcolor: '#fcefea',
            borderRadius: 2,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s ease',
            '&:active': { transform: 'scale(0.98)' },
          }}
        >
          <Box
            sx={{
              bgcolor: '#f8d5cc',
              p: 1.2,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 1,
            }}
          >
            <AssignmentIcon sx={{ color: '#e57373', fontSize: 28 }} />
          </Box>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: '14px',
              color: '#27323F',
              textAlign: 'center',
            }}
          >
            Work <br />Requests
          </Typography>
        </Card>

        <Card
          onClick={() => navigate('/mobile-worker-request-confirmed')}
          sx={{
            flex: 1,
            bgcolor: '#e9f5ec',
            borderRadius: 2,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s ease',
            '&:active': { transform: 'scale(0.98)' },
          }}
        >
          <Box
            sx={{
              bgcolor: '#d1ebdc',
              p: 1.2,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 1,
            }}
          >
            <CheckCircleIcon sx={{ color: 'green', fontSize: 28 }} />
          </Box>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: '14px',
              color: '#27323F',
              textAlign: 'center',
            }}
          >
            Confirmed <br /> Works
          </Typography>
        </Card>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, mt: 5 }}>
        <Typography fontWeight="bold" fontSize="19px">
          My  Availability
        </Typography>
        <EditOutlinedIcon sx={{ color: 'gray', fontSize: 20, cursor: 'pointer' }} />
      </Box>

      {/* Calendar */}
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
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
              bgcolor: 'white',
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

      {/* My Services */}
      <Box sx={{ mt: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography fontWeight="bold" fontSize="19px">
            My Services
          </Typography>
          <EditOutlinedIcon sx={{ color: 'gray', fontSize: 20, cursor: 'pointer' }} />
        </Box>

        <List sx={{ width: '100%' }}>
          {/* First Item */}
          <ListItem
            disablePadding
            sx={{
              border: '1px solid #e0e0e0',
              borderRadius: 1,
              mb: 1,
              bgcolor: 'white',
              boxShadow: '0px 2px 6px rgba(0,0,0,0.1)',
            }}
          >
            <ListItemButton>
              <Avatar sx={{ bgcolor: '#f0f1f7', mr: 2 }}>
                <PlumbingIcon sx={{ fontSize: 26, color: '#1976d2' }} />
              </Avatar>
              <ListItemText
                primary="Plumbing"
                secondary="5 Years Experience"
                slotProps={{
                  primary: { sx: { fontWeight: '600', fontSize: '15px' } },
                  secondary: { sx: { fontSize: '12.5px', color: 'gray' } },
                }}
              />
            </ListItemButton>
          </ListItem>

          {/* Second Item */}
          <ListItem
            disablePadding
            sx={{
              border: '1px solid #e0e0e0',
              borderRadius: 1,
              mb: 1,
              bgcolor: 'white',
              boxShadow: '0px 2px 6px rgba(0,0,0,0.1)',
            }}
          >
            <ListItemButton>
              <Avatar sx={{ bgcolor: '#f0f1f7', mr: 2 }}>
                <ElectricalServicesIcon sx={{ fontSize: 26, color: '#ff9800' }} />
              </Avatar>
              <ListItemText
                primary="Electrician"
                secondary="3 Years Experience"
                slotProps={{
                  primary: { sx: { fontWeight: '600', fontSize: '15px' } },
                  secondary: { sx: { fontSize: '12.5px', color: 'gray' } },
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>

      </Box>


      {/* Bottom Navigation */}
      <WorkerBottomBar />
    </Box>
  );
};

export default WorkerMainPage;
