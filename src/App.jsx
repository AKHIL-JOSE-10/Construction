import { Grid, Typography, Avatar, Box, Button, Accordion, Tabs, AccordionSummary, AccordionDetails, Tab, Paper } from '@mui/material';
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
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import Workerpage from './pages/Mobile/Workerpage';

function App() {
  return (
    // <Signinpage/>
    // <Signuppage/>
    // <MobProfilePage/>
    // <MobmyBookings/>

   <Workerpage/>
  );
}

export default App;
