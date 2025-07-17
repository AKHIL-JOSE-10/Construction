import { Routes, Route, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ScrollToTop from "./ScrollToTop";
import MobBookingInfo from "./modules/ClientPages/Bookings/Mobile/mobBookingInfo";
import MobMyBookings from "./modules/ClientPages/Bookings/Mobile/mobmyBookings";
import MobProfilePage from "./modules/ClientPages/Profile/Mobile/mobProfile";
import MobSettings from "./modules/ClientPages/Settings/mobSettings";
import MobNotifications from "./modules/ClientPages/NotificationPage/mobNotifications";
import Signinpage from "./modules/ClientPages/Authentication/signinpage";
import MobHome from "./modules/ClientPages/Home/Mobile/mobHome";
import Profile from "./modules/ClientPages/Profile/Profile";
import MobSignin from "./modules/ClientPages/Authentication/Mobile/mobsignin";
import MobSignup from "./modules/ClientPages/Authentication/Mobile/mobSignup";
import MobAllServiceCategory from "./modules/ClientPages/Services/mobServiceCategory/mobAllServiceCategory";
import MobWorkerpage from "./modules/ClientPages/WorkerPage/Worker/mobWorkerpage";
import MobForgotPassword from "./modules/ClientPages/Authentication/Mobile/mobForgotPassword";
import Bookings from "./modules/ClientPages/Bookings/Bookings";
import EditInfo from "./modules/ClientPages/EditInfo/EditInfo";
import RouteListPage from "./RouterListPage";
import MobMessages from "./modules/ClientPages/Message/mobMessage/mobMessages";
import MobPremium from "./modules/ClientPages/Premium/mobPremium";
import MobHelpSupport from "./modules/ClientPages/Profile/Mobile/mobHelpSupport/mobHelpSupport";
import MobHelpSupportChat from "./modules/ClientPages/Profile/Mobile/mobHelpSupport/mobHelpSupportChat";
import MobSavedAddress from "./modules/ClientPages/Profile/Mobile/mobSavedAdderess";
import MobArtisansServices from "./modules/ClientPages/Services/mobServiceCategory/mobArtisansServices";
import MobArchitecturalServices from "./modules/ClientPages/Services/mobServiceCategory/mobArchitecturalServices";
import MobAutomationServices from "./modules/ClientPages/Services/mobServiceCategory/mobAutomationServices";
import MobFabricationServices from "./modules/ClientPages/Services/mobServiceCategory/mobFabricationServices";
import MobMessageChat from "./modules/ClientPages/Message/mobMessage/mobMessageChat";
import MobSearchWorker from "./modules/ClientPages/WorkerPage/SearchWorker/mobSearchWorker";
import MobSavedWorkers from "./modules/ClientPages/Profile/Mobile/mobSavedWorkers";
import MobRecentSearch from "./modules/ClientPages/WorkerPage/SearchWorker/mobRecentSearch";
import AddressDetails from "./modules/ClientPages/OldHome/Address/AdressDetails/AddressDetails";
import MobSearchFilter from "./modules/ClientPages/Filter/mobile/mobSearchFilter";

//worker pages

import WorkerRequestConfirmed from "./modules/WorkerPage/Mobile/WorkerRequest/WorkerRequestConfirmed/workerRequestConfirmed";
import WorkerRequestConfirmation from "./modules/WorkerPage/Mobile/WorkerRequest/WorkerRequestConfirmation/workerRequestConfirmation";
import WorkerRequestDetail from "./modules/WorkerPage/Mobile/WorkerRequest/WorkerRequestDetail/WorkerRequestDetail";
import WorkerForm1 from "./modules/WorkerPage/Mobile/WorkerForm/workerForm1";
import WorkerForm2 from "./modules/WorkerPage/Mobile/WorkerForm/workerForm2";
import WorkerForm3 from "./modules/WorkerPage/Mobile/WorkerForm/workerForm3";
import WorkerForm4 from "./modules/WorkerPage/Mobile/WorkerForm/workerForm4";
import WorkerMainPage from "./modules/WorkerPage/Mobile/WorkerMainPage/workerMainPage";

import MobileLayout from "./modules/components/Mobile/MobileLayout";
import AccessDenied from "./Error/AccessDenied";

function App() {
  // const [searchParams] = useSearchParams();
  // const [accessGranted, setAccessGranted] = useState(false);

  // useEffect(() => {
  //   const tokenFromUrl = searchParams.get("access_token");
  //   const savedToken = localStorage.getItem("access_token");
  //   const allowedToken = import.meta.env.VITE_ACCESS_TOKEN;

  //   if (tokenFromUrl) {
  //     console.log(tokenFromUrl);
  //     console.log("Allowed Token:", allowedToken);
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
          <Route path="/mobile-workerpage" element={<MobWorkerpage />} />
          <Route path="/mobile-settings" element={<MobSettings />} />
          <Route path="/mobile-notifications" element={<MobNotifications />} />
          <Route path="/home" element={<MobHome />} />
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
          <Route path="/mobile-Search-filter" element={<MobSearchFilter />} />


          {/* worker page routes */}
          <Route
            path="/mobile-worker-request-confirmed"
            element={<WorkerRequestConfirmed />}
          />
          <Route
            path="/mobile-worker-request-confirmation"
            element={<WorkerRequestConfirmation />}
          />
          <Route
            path="/mobile-worker-request-detail"
            element={<WorkerRequestDetail />}
          />
          <Route path="/mobile-worker-form1" element={<WorkerForm1 />} />
          <Route path="/mobile-worker-form2" element={<WorkerForm2 />} />
          <Route path="/mobile-worker-form3" element={<WorkerForm3 />} />
          <Route path="/mobile-worker-form4" element={<WorkerForm4 />} />
          <Route path="/mobile-worker-mainpage" element={<WorkerMainPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
