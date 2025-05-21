import Search from "../../integrated/components/Search/Search";
import SideBar from "../../integrated/components/SideBar/SideBar";

import SideBarLayout from "../../layouts/SideBarLayout/sideBarLayout";
import {ProfileManagementDashboard} from "./ProfileManagement";

export default function Profile() {
  return (
    <SideBarLayout SideBar={SideBar}>
      <Search />
      <ProfileManagementDashboard/>
    </SideBarLayout>
  );
}
