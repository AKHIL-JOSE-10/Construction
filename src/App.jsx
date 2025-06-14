import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MobBookingInfo from "./modules/pages/Bookings/Mobile/mobBookingInfo";
import MobMyBookings from "./modules/pages/Bookings/Mobile/mobmyBookings";
import MobProfilePage from "./modules/pages/Profile/Mobile/mobProfile"
import MobSettings from "./modules/pages/Settings/mobSettings";
import MobNotifications from "./modules/pages/NotificationPage/mobNotifications";
import Signinpage from "./modules/pages/Authentication/signinpage";
import Home from "./modules/pages/Home/Mobile/Home";
import Profile from "./modules/pages/Profile/Profile";
import MobSignin from "./modules/pages/Authentication/Mobile/mobsignin";
import MobSignup from "./modules/pages/Authentication/Mobile/mobSignup";
import MobAllServiceCategory from "./modules/pages/Services/mobServiceCategory/mobAllServiceCategory";
import MobWorkerpage from "./modules/pages/WorkerPage/Worker/mobWorkerpage";
import MobForgotPassword from "./modules/pages/Authentication/Mobile/mobForgotPassword";
import Bookings from "./modules/pages/Bookings/Bookings";
import EditInfo from "./modules/pages/EditInfo/EditInfo";
import RouteListPage from "./RouterListPage";
import MobMessages from "./modules/pages/Message/mobMessage/mobMessages";
import MobPremium from "./modules/pages/Premium/mobPremium";
import MobHelpSupport from "./modules/pages/Profile/Mobile/mobHelpSupport/mobHelpSupport";
import MobHelpSupportChat from "./modules/pages/Profile/Mobile/mobHelpSupport/mobHelpSupportChat";
import MobSavedAddress from "./modules/pages/Profile/Mobile/mobSavedAdderess"
import MobArtisansServices from "./modules/pages/Services/mobServiceCategory/mobArtisansServices";
import MobArchitecturalServices from "./modules/pages/Services/mobServiceCategory/mobArchitecturalServices";
import MobAutomationServices from "./modules/pages/Services/mobServiceCategory/mobAutomationServices";
import MobFabricationServices from "./modules/pages/Services/mobServiceCategory/mobFabricationServices";
import MobMessageChat from "./modules/pages/Message/mobMessage/mobMessageChat"
import MobSearchWorker from "./modules/pages/WorkerPage/SearchWorker/mobSearchWorker";
import MobSavedWorkers from "./modules/pages/Profile/Mobile/mobSavedWorkers";
// import Test from "./test";
import AddressDetails from "./modules/pages/Home/Address/AdressDetails/AddressDetails";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RouteListPage />} />
        <Route path="/signin" element={<Signinpage />} />
        <Route path="/mobile-signin" element={<MobSignin />} />
        <Route path="/mobile-signup" element={<MobSignup />} />
        <Route path="/mobile-profile" element={<MobProfilePage />} />
        <Route path="/mobile-bookings" element={<MobMyBookings />} />
        <Route path="/mobile-booking-info" element={<MobBookingInfo />} />
        <Route
          path="/mobile-service-category"
          element={<MobAllServiceCategory />}
        />
        <Route path="/mobile-workerpage" element={<MobWorkerpage />} />
        <Route path="/mobile-settings" element={<MobSettings />} />
        <Route path="/mobile-notifications" element={<MobNotifications />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/forgot-password" element={<MobForgotPassword />} />
        <Route path="/editInfo" element={<EditInfo />} />
        <Route path="/mobile-premium" element={<MobPremium />} />
        <Route path="/mobile-messages" element={<MobMessages />} />
        <Route path="/mobile-helpsupport" element={<MobHelpSupport />} />
        <Route
          path="/mobile-helpsupportchat"
          element={<MobHelpSupportChat />}
        />
        <Route path="/mobile-saved-address" element={<MobSavedAddress />} />
        <Route
          path="/mobile-artisans-services"
          element={<MobArtisansServices />}
        />
        <Route
          path="/mobile-architectural-services"
          element={<MobArchitecturalServices />}
        />
        <Route
          path="/mobile-automation-services"
          element={<MobAutomationServices />}
        />
        <Route
          path="/mobile-fabrication-services"
          element={<MobFabricationServices />}
        />
        <Route path="/mobile-message-chat" element={<MobMessageChat />} />
        <Route path="/mobile-search-worker" element={<MobSearchWorker />} />
        <Route path="/address" element={<AddressDetails />} />
        <Route path="/mobile-saved-workers" element={<MobSavedWorkers />} />

        {/* <Route path="/test" element={<Test />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
