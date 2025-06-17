import { Outlet, useLocation } from "react-router-dom";
import MobileBottomTab from "./mobileBottomTab";

const MobileLayout = () => {
  const location = useLocation();

  const bottomTabs = [
    "/home",
    "/mobile-messages",
    "/mobile-bookings",
    "/mobile-profile",
  ];

  return (
    <div
      style={{
        paddingBottom: bottomTabs.includes(location.pathname) ? "60px" : "25px",
      }}
    >
      <Outlet />
      <MobileBottomTab />
    </div>
  );
};

export default MobileLayout;