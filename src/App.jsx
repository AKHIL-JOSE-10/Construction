import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import MobBookingInfo from "./modules/ClientPages/Bookings/Mobile/mobBookingInfo";
import MobMyBookings from "./modules/ClientPages/Bookings/Mobile/mobmyBookings";
import MobProfilePage from "./modules/ClientPages/Profile/Mobile/mobProfile";
import MobSettings from "./modules/ClientPages/Settings/mobSettings";
import MobNotifications from "./modules/ClientPages/NotificationPage/mobNotifications";
import MobOtpVerification from "./modules/ClientPages/Authentication/Mobile/mobOtpVerification";
import Signinpage from "./modules/ClientPages/Authentication/signinpage";
import MobHome from "./modules/ClientPages/Home/Mobile/mobHome";
import Profile from "./modules/ClientPages/Profile/Profile";
import MobSignIn from "./modules/ClientPages/Authentication/Mobile/mobSignIn";
import MobAllServices from "./modules/ClientPages/Services/mobServiceCategory/mobAllServices";
import MobWorkerpage from "./modules/ClientPages/WorkerPage/Worker/mobWorkerpage";
import Bookings from "./modules/ClientPages/Bookings/Bookings";
import EditInfo from "./modules/ClientPages/EditInfo/EditInfo";
import RouteListPage from "./RouterListPage";
import MobPremium from "./modules/ClientPages/Premium/mobPremium";
import MobHelpSupport from "./modules/ClientPages/Profile/Mobile/mobHelpSupport/mobHelpSupport";
import MobHelpSupportChat from "./modules/ClientPages/Profile/Mobile/mobHelpSupport/mobHelpSupportChat";
import MobSavedAddress from "./modules/ClientPages/Profile/Mobile/mobSavedAdderess";
import MobArtisans from "./modules/ClientPages/Services/mobServiceCategory/mobArtisans";
import MobArchitects from "./modules/ClientPages/Services/mobServiceCategory/mobArchitects";
import MobContractors from "./modules/ClientPages/Services/mobServiceCategory/mobContractors";
import MobAutomation from "./modules/ClientPages/Services/mobServiceCategory/mobAutomation";
import MobFabricators from "./modules/ClientPages/Services/mobServiceCategory/mobFabricators";
import MobEngineers from "./modules/ClientPages/Services/mobServiceCategory/mobEngineers";
import MobSearchWorker from "./modules/ClientPages/WorkerPage/SearchWorker/mobSearchWorker";
import MobSavedWorkers from "./modules/ClientPages/Profile/Mobile/mobSavedWorkers";
import MobRecentSearch from "./modules/ClientPages/WorkerPage/SearchWorker/mobRecentSearch";
import AddressDetails from "./modules/ClientPages/OldHome/Address/AdressDetails/AddressDetails";
import MobSearchFilter from "./modules/ClientPages/Filter/mobile/mobSearchFilter";
import MobUrgentServiceRequest from "./modules/ClientPages/Services/mobServiceCategory/mobUrgentService/mobUrgentServiceRequest";
import MobUrgentServiceRequestConfirmation from "./modules/ClientPages/Services/mobServiceCategory/mobUrgentService/mobUrgentServiceRequestConfirmation";


//worker pages


import WorkerForm1 from "./modules/WorkerPage/Mobile/WorkerForm/workerForm1";
import WorkerForm2 from "./modules/WorkerPage/Mobile/WorkerForm/workerForm2";
import WorkerForm3 from "./modules/WorkerPage/Mobile/WorkerForm/workerForm3";
import WorkerForm4 from "./modules/WorkerPage/Mobile/WorkerForm/workerForm4";
import WorkerForm5 from "./modules/WorkerPage/Mobile/WorkerForm/workerForm5";
import WorkerMainPage from "./modules/WorkerPage/Mobile/WorkerMainPage/workerMainPage";
import MobMyWorks from "./modules/WorkerPage/Mobile/MyWorks/mobMyWorks";

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
          <Route path="/mobile-signin" element={<MobSignIn />} />

          <Route path="/mobile-otp-verification" element={<MobOtpVerification />} />
          <Route path="/mobile-profile" element={<MobProfilePage />} />
          <Route path="/mobile-bookings" element={<MobMyBookings />} />
          <Route path="/mobile-booking-info" element={<MobBookingInfo />} />
          <Route
            path="/mobile-all-services"
            element={<MobAllServices/>}
          />
          <Route path="/mobile-workerpage" element={<MobWorkerpage />} />
          <Route path="/mobile-settings" element={<MobSettings />} />
          <Route path="/mobile-notifications" element={<MobNotifications />} />
          <Route path="/home" element={<MobHome />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/editInfo" element={<EditInfo />} />
          <Route path="/mobile-premium" element={<MobPremium />} />
          <Route path="/mobile-helpsupport" element={<MobHelpSupport />} />
          <Route
            path="/mobile-helpsupportchat"
            element={<MobHelpSupportChat />}
          />
          <Route path="/mobile-saved-address" element={<MobSavedAddress />} />
          <Route
            path="/mobile-artisans"
            element={<MobArtisans />}
          />
          <Route
            path="/mobile-architects"
            element={<MobArchitects/>}
          />
          <Route
            path="/mobile-automation"
            element={<MobAutomation />}
          />
          <Route
            path="/mobile-fabricators"
            element={<MobFabricators />}
          />
          <Route
            path="/mobile-contractors"
            element={<MobContractors />}
          />
          <Route
            path="/mobile-engineers"
            element={<MobEngineers />}
          />

          
          <Route path="/mobile-search-worker" element={<MobSearchWorker />} />
          <Route path="/address" element={<AddressDetails />} />
          <Route path="/mobile-saved-workers" element={<MobSavedWorkers />} />
          <Route path="/mobile-Recent-Search" element={<MobRecentSearch />} />
          <Route path="/mobile-Search-filter" element={<MobSearchFilter />} />
          <Route path="/mobile-Urgent-ServiceRequest" element={<MobUrgentServiceRequest />} />
          <Route path="/mobile-Urgent-ServiceRequestConfirmation" element={<MobUrgentServiceRequestConfirmation />} />


          {/* worker page routes */}

          <Route path="/mobile-worker-form1" element={<WorkerForm1 />} />
          <Route path="/mobile-worker-form2" element={<WorkerForm2 />} />
          <Route path="/mobile-worker-form3" element={<WorkerForm3 />} />
          <Route path="/mobile-worker-form4" element={<WorkerForm4 />} />
          <Route path="/mobile-worker-form5" element={<WorkerForm5 />} />

          WorkerForm5
          <Route path="/mobile-worker-mainpage" element={<WorkerMainPage />} />
          <Route path="/mobile-worker-myworks" element={<MobMyWorks />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
