import { Outlet } from 'react-router-dom';
import MobileBottomTab from './mobileBottomTab';

const MobileLayout = () => {
  return (
    <div style={{ paddingBottom: '60px' }}>
      <Outlet />
      <MobileBottomTab />
    </div>
  );
};

export default MobileLayout;