import { Routes, Route, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ScrollToTop from "./ScrollToTop";
import MobBookingInfo from "./modules/ClientPages/MobileView/MobBookings/MobBookingInfo/mobBookingInfo";
import MobMyBookings from "./modules/ClientPages/MobileView/MobBookings/MobMyBookings/mobmyBookings";
import MobProfilePage from "./modules/ClientPages/MobileView/MobProfile/mobProfile";
import MobSettings from "./modules/ClientPages/MobileView/MobProfile/MobSettings/mobSettings";
import MobNotifications from "./modules/ClientPages/MobileView/MobNotification/mobNotifications";
import Signinpage from "./modules/ClientPages/ComputerView/Authentication/signinpage";
import Home from "./modules/ClientPages/MobileView/MobHome/Home";
import Profile from "./modules/ClientPages/ComputerView/Profile/Profile";
import MobSignin from "./modules/ClientPages/MobileView/MobAuthentication/Mobsignin/mobsignin";
import MobSignup from "./modules/ClientPages/MobileView/MobAuthentication/MobSignup/mobSignup";
import MobAllServiceCategory from "./modules/ClientPages/MobileView/MobServices/MobAllServices.jsx/mobAllServices";
import MobViewWorkerProfile from "./modules/ClientPages/MobileView/MobViewWorkerProfile/mobViewWorkerprofile";
import MobForgotPassword from "./modules/ClientPages/MobileView/MobAuthentication/MobForgotPassword/mobForgotPassword";
import Bookings from "./modules/ClientPages/ComputerView/Bookings/Bookings";
import EditInfo from "./modules/ClientPages/MobileView/MobProfile/AccountInfo/AccountInfo";
import RouteListPage from "./RouterListPage";
import MobMessages from "./modules/ClientPages/MobileView/MobMessage/mobMessages";
import MobPremium from "./modules/ClientPages/MobileView/MobPremium/mobPremium";
import MobHelpSupport from "./modules/ClientPages/MobileView/MobProfile/MobHelpSupport/mobHelpSupport";
import MobHelpSupportChat from "./modules/ClientPages/MobileView/MobProfile/MobHelpSupport/MobHelpSupportChat/mobHelpSupportChat";
import MobSavedAddress from "./modules/ClientPages/MobileView/MobProfile/MobSavedAddress/mobSavedAddress";
import MobArtisansServices from "./modules/ClientPages/MobileView/MobServices/MobArtisansServices/mobArtisansServices";
import MobArchitecturalServices from "./modules/ClientPages/MobileView/MobServices/MobArchitecturalServices/mobArchitecturalServices";
import MobAutomationServices from "./modules/ClientPages/MobileView/MobServices/MobAutomationServices/mobAutomationServices";
import MobFabricationServices from "./modules/ClientPages/MobileView/MobServices/MobFabricationServices/mobFabricationServices";
import MobMessageChat from "./modules/ClientPages/MobileView/MobMessage/MobMessageChat/mobMessageChat";
import MobSearchWorker from "./modules/ClientPages/MobileView/MobSearchWorker/mobSearchWorker";
import MobSavedWorkers from "./modules/ClientPages/MobileView/MobProfile/MobSavedWorkers/mobSavedWorkers";
import MobRecentSearch from "./modules/ClientPages/MobileView/MobSearchWorker/mobRecentSearch";
import AddressDetails from "./modules/ClientPages/MobileView/MobHome/Address/AdressDetails/AddressDetails";
import MobSearchWorkerFilter from "./modules/ClientPages/MobileView/SearchWorkerFilter/mobSearchWorkerFilter";

//worker pages

import MobClientWorkRequestConfirmed from "./modules/WorkerPages/MobileView/MobClientRequests/MobClientWorkRequestConfirmed/mobClientWorkRequestConfirmed";
import MobClientWorkRequestConfirmation from "./modules/WorkerPages/MobileView/MobClientRequests/MobClientWorkRequestConfirmation/mobClientWorkRequestConfirmation";
import MobClientRequestDetails from "./modules/WorkerPages/MobileView/MobClientRequests/MobClientRequestDetails/mobClientRequestDetails";
import MobWorkerForm1 from "./modules/WorkerPages/MobileView/MobWorkerForm/MobWorkerForm1/mobWorkerForm1";
import MobWorkerForm2 from "./modules/WorkerPages/MobileView/MobWorkerForm/MobWorkerForm2/mobWorkerForm2";
import MobWorkerForm3 from "./modules/WorkerPages/MobileView/MobWorkerForm/MobWorkerForm3/mobWorkerForm3";
import MobWorkerForm4 from "./modules/WorkerPages/MobileView/MobWorkerForm/MobWorkerForm4/mobWorkerForm4";
import MobWorkerMainPage from "./modules/WorkerPages/MobileView/MobWorkerMainPage/mobWorkerMainPage";

import MobileLayout from "./modules/ClientPages/MobileView/MobBottomTab/MobileLayout";
import AccessDenied from "./Error/AccessDenied";

function App() {
  const [searchParams] = useSearchParams();
  const [accessGranted, setAccessGranted] = useState(true);

  // useEffect(() => {
  //   const tokenFromUrl = searchParams.get("access_token");
  //   const savedToken = localStorage.getItem("access_token");
  //   const allowedToken = import.meta.env.VITE_ACCESS_TOKEN;

  //   if (tokenFromUrl) {
  //     if (tokenFromUrl === allowedToken) {
  //       localStorage.setItem("access_token", tokenFromUrl);
  //       setAccessGranted(true);
  //     } else {
  //       setAccessGranted(false);
  //     }
  //   } else if (savedToken === allowedToken) {
  //     setAccessGranted(true);
  //   } else {
  //     setAccessGranted(false);
  //   }
  // }, [searchParams]);

  // if (!accessGranted) {
  //   return <AccessDenied />;
  // }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MobileLayout />}>
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
          <Route path="/mobile-workerpage" element={<MobViewWorkerProfile />} />
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
          <Route path="/mobile-Recent-Search" element={<MobRecentSearch />} />
          <Route path="/mobile-search-worker-filter" element={<MobSearchWorkerFilter />} />




          {/* worker page routes */}
          <Route
            path="/mobile-worker-request-confirmed"
            element={<MobClientWorkRequestConfirmed />}
          />
          <Route
            path="/mobile-worker-request-confirmation"
            element={<MobClientWorkRequestConfirmation />}
          />
          <Route
            path="/mobile-worker-request-detail"
            element={<MobClientRequestDetails />}
          />
          <Route path="/mobile-worker-form1" element={<MobWorkerForm1 />} />
          <Route path="/mobile-worker-form2" element={<MobWorkerForm2 />} />
          <Route path="/mobile-worker-form3" element={<MobWorkerForm3 />} />
          <Route path="/mobile-worker-form4" element={<MobWorkerForm4 />} />
          <Route path="/mobile-worker-mainpage" element={<MobWorkerMainPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
