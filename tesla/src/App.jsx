import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './assets/components/Header/Header';

function App() {
  const location = useLocation();
  const hideHeaderPaths = ['/vehicles', '/Energy','/Charging','/Discover','/Shop']; 
  const shouldHideHeader = hideHeaderPaths.includes(location.pathname);

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img 
        src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-LHD-v2.jpg" 
        alt="Background" 
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />
      {/* If shouldHideHeader is false, the Header is rendered. If shouldHideHeader is true, the Header is not rendered. */}
      {!shouldHideHeader && <Header />}
      <Outlet />
    </div>
  );
}

export default App;

