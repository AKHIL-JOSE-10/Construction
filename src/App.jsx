import { Grid, Typography, Avatar, Box, Button, Accordion, Tabs, AccordionSummary, AccordionDetails, Tab, Paper } from '@mui/material';
import MobHeading from './modules/components/Mobile/mobileHeading';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VerifiedIcon from '@mui/icons-material/Verified';
import MobBookingInfo from './pages/Mobile/mobBookingInfo'
import MobmyBookings from './pages/Mobile/mobmyBookings';
import MobProfilePage from './pages/Mobile/mobProfile';
import MobSettings from './pages/Mobile/mobSettings';
import MobNotification from './pages/Mobile/mobNotification';
import Signinpage from './pages/signinpage';
import Home from "./modules/pages/Home/Mobile/Home"
import Profile from "./modules/pages/Profile/Profile"
import Mobsignin from './pages/Mobile/Authentication/mobsignin';
import MobSignup from './pages/Mobile/Authentication/mobSignup';
import MobServiceCategory from './pages/Mobile/mobServiceCategory';
import MobWorkerpage from './pages/Mobile/mobWorkerpage';
import MobForgotPassword from './pages/Mobile/Authentication/mobForgotPassword';

function App() {
  return (
    // <Signinpage/>
    // <Signuppage/>
    // <MobProfilePage/>
    // <MobmyBookings/>
    // <MobWorkerpage/>
  //  <MobBookingInfo/>
  //  <MobServiceCategory/>
  // <MobSettings/>
  // // <MobNotification />
  // <Home/>
  // <Profile/>
  // <Bookings/>
  // <Mobsignin/>
  <MobSignup/>
  // <MobForgotPassword />
  );
}

export default App;
