import React from "react";
// import { Link } from "react-router-dom"; // Uncomment if you need to use Link for routing

function Energy() {
  return (
    <div className="relative w-full bg-white text-black flex flex-col" style={{ height: '560px' }}>
      <nav className="w-full flex justify-between items-center px-4 md:px-10 py-5 bg-white text-black" style={{ zIndex: 1 }}>
        <img 
          src='https://www.carlogos.org/car-logos/tesla-logo-2007-wordmark-download.png'
          className="w-20"
          alt="Tesla Logo"
        />
        <ul className="md:flex hidden space-x-8 font-semibold">
          <li className="cursor-pointer">Vehicles</li>
          <li className="cursor-pointer">Energy</li>
          <li className="cursor-pointer">Charging</li>
          <li className="cursor-pointer">Discover</li>
          <li className="cursor-pointer">Shop</li> 
        </ul>
        <div className="md:flex hidden space-x-6 items-center">
          <img
            src='https://www.pngarts.com/files/4/Question-Mark-PNG-Image-Background.png'
            className="w-6 h-6"
            alt='Help Icon'
          />
          <img
            src='https://creazilla-store.fra1.digitaloceanspaces.com/icons/3868264/earth-icon-md.png'
            className="w-6 h-6"
            alt='Language Icon'
          />
          <img
            src='https://static.wixstatic.com/media/710aa2_6684568f236a4c099e2200f3f33ba547~mv2.png/v1/fill/w_512,h_512,al_c,q_85,enc_auto/user.png'
            className="w-6 h-6"
            alt='User Icon'
          />
        </div>
        <div className="md:hidden px-4 py-2 bg-blue-300 text-black rounded font-bold">
          Menu
        </div>
      </nav>
    </div>
  );
}

export default Energy;
