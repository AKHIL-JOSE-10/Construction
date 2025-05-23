import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import MobHeading from './modules/components/Mobile/mobileHeading';
import MobBookingInfo from './pages/Mobile/mobBookingInfo';
import MobmyBookings from './pages/Mobile/mobmyBookings';
import MobProfilePage from './pages/Mobile/mobProfile';
import MobSettings from './pages/Mobile/mobSettings';
import MobNotification from './pages/Mobile/mobNotification';
import Signinpage from './pages/signinpage';
import Home from "./modules/pages/Home/Mobile/Home";
import Profile from "./modules/pages/Profile/Profile";
import Mobsignin from './pages/Mobile/Authentication/mobsignin';
import MobSignup from './pages/Mobile/Authentication/mobSignup';
import MobServiceCategory from './pages/Mobile/mobServiceCategory';
import MobWorkerpage from './pages/Mobile/mobWorkerpage';
import MobForgotPassword from './pages/Mobile/Authentication/mobForgotPassword';
import Bookings from "./modules/pages/Bookings/Bookings"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signinpage />} />
        <Route path="/mobile-signin" element={<Mobsignin />} />
        <Route path="/mobile-signup" element={<MobSignup />} />
        <Route path="/mobile-profile" element={<MobProfilePage />} />
        <Route path="/mobile-bookings" element={<MobmyBookings />} />
        <Route path="/mobile-booking-info" element={<MobBookingInfo />} />
        <Route path="/mobile-service-category" element={<MobServiceCategory />} />
        <Route path="/mobile-workerpage" element={<MobWorkerpage />} />
        <Route path="/mobile-settings" element={<MobSettings />} />
        <Route path="/mobile-notifications" element={<MobNotification />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path ="/bookings" element={<Bookings/>} />
        <Route path="/forgot-password" element={<MobForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
