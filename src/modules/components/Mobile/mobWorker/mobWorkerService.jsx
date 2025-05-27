import { Grid, Typography, Avatar, Box, Button, Accordion, AccordionSummary, AccordionDetails, Paper } from '@mui/material';
import serviceImg from '../../../../assets/serviceImg.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import EventIcon from '@mui/icons-material/Event';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import dayjs from 'dayjs';


const MobWorkerservice = () => {

  const [date, setDate] = useState(dayjs());

  return (
    <Grid>
      <Box sx={{ px: 1 }}>
        <Typography sx={{ fontSize: '18px', fontWeight: '600', py: 2, ml: 1 }}>My Services</Typography>
        <Accordion
          sx={{ borderRadius: 1, border: '0.9px solid black', overflow: 'hidden', mb: 1 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexDirection: 'row' }}>
              <Avatar
                src={serviceImg}
                alt="Worker"
                sx={{ width: 40, height: 40 }}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                <Typography variant='h6' component="span" sx={{ ml: 2, fontWeight: '550' }}>Plumping </Typography>
                <Typography component="span" sx={{ ml: 2, fontSize: '13px' }}>Reliable solution for all your plumping needs </Typography>
              </Box>

            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AccessTimeIcon color="primary" />
                  <Typography variant="subtitle1" fontWeight="bold">Base rate</Typography>
                </Box>
                <Typography variant="subtitle1" color="text.secondary">300 rs / Hour</Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Brightness3Icon sx={{ color: '#1976d2' }} />
                  <Typography variant="subtitle1" fontWeight="bold">Evening rate</Typography>
                </Box>
                <Typography variant="subtitle1" color="text.secondary">200 rs / Hour</Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EventIcon color="success" />
                  <Typography variant="subtitle1" fontWeight="bold">Holiday rate</Typography>
                </Box>
                <Typography variant="subtitle1" color="text.secondary">250 rs / Hour</Typography>
              </Box>
              <Typography sx={{ fontSize: '13px', color: 'grey', mt: 2 }}>" Final pricing will be determined based on the scope of additional work and time required."</Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ borderRadius: 1, border: '0.9px solid black', overflow: 'hidden', mb: 1 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexDirection: 'row' }}>
              <Avatar
                src={serviceImg}
                alt="Worker"
                sx={{ width: 40, height: 40 }}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                <Typography variant='h6' component="span" sx={{ ml: 2, fontWeight: '550' }}>Electrician </Typography>
                <Typography component="span" sx={{ ml: 2, fontSize: '13px' }}>Reliable solution for all your plumping needs </Typography>
              </Box>

            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AccessTimeIcon color="primary" />
                  <Typography variant="subtitle1" fontWeight="bold">Base rate</Typography>
                </Box>
                <Typography variant="subtitle1" color="text.secondary">300 rs / Hour</Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Brightness3Icon sx={{ color: '#1976d2' }} />
                  <Typography variant="subtitle1" fontWeight="bold">Evening rate</Typography>
                </Box>
                <Typography variant="subtitle1" color="text.secondary">200 rs / Hour</Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EventIcon color="success" />
                  <Typography variant="subtitle1" fontWeight="bold">Holiday rate</Typography>
                </Box>
                <Typography variant="subtitle1" color="text.secondary">250 rs / Hour</Typography>
              </Box>
              <Typography sx={{ fontSize: '13px', color: 'grey', mt: 2 }}>" Final pricing will be determined based on the scope of additional work and time required."</Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Box>
        <Typography sx={{ fontSize: '18px', fontWeight: '600', mt: 4, ml: 2 }}>Availability</Typography>

        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                slotProps={{
                  actionBar: { actions: [] },
                  toolbar: {
                    sx: {
                      '& .MuiPickersToolbar-title': {
                        display: 'none',  // hide the "Select date" text
                      },
                    },
                  },
                }}
              />
            </Paper>
          </LocalizationProvider>
        </Box>


        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', mt: 3 }}>
          <Button sx={{ height: '50px', borderRadius: '20px', bgcolor: '#B08B6F', color: 'white', width: '85%', textTransform: 'none' }}>
            Book now
          </Button>
        </Box>
      </Box>


    </Grid>
  )
}

export default MobWorkerservice