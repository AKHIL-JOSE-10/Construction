import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MobBookingInfo from "./pages/Mobile/mobBookingInfo";
import MobMyBookings from "./pages/Mobile/mobmyBookings";
import MobProfilePage from "./pages/Mobile/mobProfile/mobProfile";
import MobSettings from "./pages/Mobile/mobSettings";
import MobNotifications from "./pages/Mobile/mobNotifications";
import Signinpage from "./pages/signinpage";
import Home from "./modules/pages/Home/Mobile/Home";
import Profile from "./modules/pages/Profile/Profile";
import MobSignin from "./pages/Mobile/Authentication/mobsignin";
import MobSignup from "./pages/Mobile/Authentication/mobSignup";
import MobAllServiceCategory from "./pages/Mobile/mobServiceCategory/mobAllServiceCategory";
import MobWorkerpage from "./pages/Mobile/mobWorkerpage";
import MobForgotPassword from "./pages/Mobile/Authentication/mobForgotPassword";
import Bookings from "./modules/pages/Bookings/Bookings";
import EditInfo from "./modules/pages/EditInfo/EditInfo";
import RouteListPage from "./RouterListPage";
import MobMessages from "./pages/Mobile/mobMessage/mobMessages";
import MobPremium from "./pages/Mobile/mobPremium";
import MobHelpSupport from "./pages/Mobile/mobProfile/mobHelpSupport/mobHelpSupport";
import MobHelpSupportChat from "./pages/Mobile/mobProfile/mobHelpSupport/mobHelpSupportChat";
import MobSavedAddress from "./pages/Mobile/mobProfile/mobSavedAdderess";
import MobArtisansServices from "./pages/Mobile/mobServiceCategory/mobArtisansServices";
import MobArchitecturalServices from "./pages/Mobile/mobServiceCategory/mobArchitecturalServices";
import MobAutomationServices from "./pages/Mobile/mobServiceCategory/mobAutomationServices";
import MobFabricationServices from "./pages/Mobile/mobServiceCategory/mobFabricationServices";
import MobMessageChat from "./pages/Mobile/mobMessage/mobMessageChat";
import MobSearchWorker from "./pages/Mobile/mobSearchWorker";
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
        {/* <Route path="/test" element={<Test />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
