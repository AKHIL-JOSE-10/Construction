import { Grid, Typography, Avatar, Box, Button, Accordion, Tabs, AccordionSummary, AccordionDetails, Tab } from '@mui/material';
import workerimg from './assets/workerimg.jpg'
import serviceImg from './assets/serviceImg.png'
import VerifiedIcon from '@mui/icons-material/Verified';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import EventIcon from '@mui/icons-material/Event';

function App() {
  return (
    // <Signinpage/>
    // <Signuppage/>
    // <MobProfilePage/>
    // <MobmyBookings/>

    <Grid container>
      <Grid>
        <Box sx={{ position: 'relative', display: 'inline-block' }}>
          {/* Background image */}
          <Box
            component="img"
            src={workerimg}
            alt="Main"
            sx={{
              width: '100%',
              borderRadius: 2,
              display: 'block',
            }}
          />

          {/* Avatar with tick badge */}
          <Box
            sx={{
              position: 'absolute',
              bottom: -30,
              left: '15%',
              transform: 'translateX(-50%)',
            }}
          >
            <Avatar
              src="https://randomuser.me/api/portraits/women/79.jpg"
              sx={{
                width: 85,
                height: 85,
                border: '5px solid white',
              }}
            />
            {/* Verified tick */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 2,
                right: 0,
                backgroundColor: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

              }}
            >
              <VerifiedIcon sx={{ color: 'green', fontSize: 28 }} />
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mt: 4, p: 1 }}>
          <Typography sx={{ fontSize: '26px', fontWeight: 'bold' }}>Jane Cooper</Typography>
          <Button variant="contained" sx={{ borderRadius: 4, textTransform: 'none', bgcolor: '#CCB09B' }}><Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>Message</Typography></Button>
        </Box>
        <Box sx={{ p: 2, display: "flex", flexDirection: 'column' }}>
          <Box sx={{ display: "flex", flexDirection: 'row', mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <WorkHistoryIcon sx={{ fontSize: 18, color: 'purple' }} />
              <Typography sx={{ fontWeight: 'bold', fontSize: 15 }}>4+ yrs of experience</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pl: 6 }}>
              <LocationOnIcon sx={{ fontSize: 18, color: 'orange' }} />
              <Typography sx={{ fontWeight: 'bold', fontSize: 15 }}>Thrissur</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <VerifiedUserIcon sx={{ fontSize: 18, color: 'green' }} />
            <Typography sx={{ fontWeight: 'bold', fontSize: 15 }}>Archisans verified worker</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', p: 2, }}>
          <Tabs aria-label="basic tabs example" centered >
            <Tab label="Services" />
            <Tab label="About" sx={{ mx: 3 }} />
            <Tab label="Reviews" />
          </Tabs>
        </Box>
        <Box>
          <Typography sx={{ fontSize: '18px', fontWeight: 'bold', p: 2 }}>My Services</Typography>
          <Accordion sx={{ borderRadius: 50, border: '1px solid brown', overflow: 'hidden', }}>
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

                  <Typography variant='h5' component="span" sx={{ ml: 2, fontWeight: 'bold' }}>Plumping </Typography>
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
                <Typography sx={{fontSize:'13px',color:'grey',mt:2}}>" Final pricing will be determined based on the scope of additional work and time required."</Typography>
              </Box>
            </AccordionDetails>
          </Accordion>

        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
