import { Grid, Typography, Avatar, Box, List, ListItem, Tabs, ListItemButton, ListItemText, Tab } from '@mui/material';
import { Headingcontent } from './modules/components/signin-up/headingcontent';
import Signinpage from './pages/signinpage';
import Signuppage from './pages/signuppage';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MobileHeading from './modules/components/Mobile/mobileHeading';
import MobileTab from './modules/components/Mobile/mobileTab';
import MobProfilePage from './pages/Mobile/mobProfile';
import MobmyBookings from './pages/Mobile/mobmyBookings';

function App() {
  return (
    // <Signinpage/>
    // <Signuppage/>
    // <MobProfilePage/>
    <MobmyBookings/>
  );
}

export default App;
