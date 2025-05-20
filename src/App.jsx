import { Grid, Typography, Avatar, Box, Button, Accordion, Tabs, AccordionSummary, AccordionDetails, Tab, Paper } from '@mui/material';
import MobHeading from './modules/components/Mobile/mobileHeading';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VerifiedIcon from '@mui/icons-material/Verified';
import MobBookingInfo from './pages/Mobile/mobBookingInfo'
import MobmyBookings from './pages/Mobile/mobmyBookings';
import ServiceCategory from './pages/Mobile/serviceCategory';
import MobProfilePage from './pages/Mobile/mobProfile';

function App() {
  return (
    // <Signinpage/>
    // <Signuppage/>
    // <MobProfilePage/>
    // <MobmyBookings/>
    // <Workerpage/>
   //<MobBookingInfo/>
   <ServiceCategory/>
  );
}

export default App;
