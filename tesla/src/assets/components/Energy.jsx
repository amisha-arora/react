import React from "react";
import { Link } from "react-router-dom";
function Energy() {
  return (
    <>
      <div className="relative w-full bg-white text-black flex flex-col" style={{ height: '450px' }}>
        <nav className="w-full flex justify-between items-center px-4 md:px-10 py-5 bg-white text-black" style={{ zIndex: 1 }}>
        <Link to="/">
           
           <img 
             src='https://www.carlogos.org/car-logos/tesla-logo-2007-wordmark-download.png'
             className="w-16"
             alt="Logo"/> 
           </Link>
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
        
        <div className="flex flex-row justify-center items-start mt-12">
          {/* Solar Panel */}
          <div className="flex flex-col items-start mb-12" style={{ marginRight: '20px' }}>
            <img className="w-44 h-54" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Panels.png"/> 
            <p className="font-semibold" style={{ marginLeft: '45px' }}>Solar Panels</p>
            <div className="flex gap-5" style={{ marginLeft: '35px' }}>
              <p className="text-gray-500 underline">Learn</p>
              <p className="text-gray-500 underline">Order</p>
            </div>
          </div>

          {/* Solar Roof */}
          <div className="flex flex-col items-start mb-12" style={{ marginRight: '20px' }}>
            <img className="w-44 h-54" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Roof.png" />
            <p className="font-semibold" style={{ marginLeft: '35px' }}>Solar Roof</p>
            <div className="flex gap-3" style={{ marginLeft: '20px' }}>
              <p className="text-gray-500 underline">Learn</p>
              <p className="text-gray-500 underline">Order</p>
            </div>
          </div>

          {/* Powerwall */}
          <div className="flex flex-col items-start mb-12" style={{ marginRight: '20px' }}>
            <img className="w-44 h-54" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Powerwall-US.png" />
            <p className="font-semibold" style={{ marginLeft: '45px' }}>Powerwall</p>
            <div className="flex gap-3" style={{ marginLeft: '30px' }}>
              <p className="text-gray-500 underline">Learn</p>
              <p className="text-gray-500 underline">Order</p>
            </div>
          </div>

          {/* Megapack */}
          <div className="flex flex-col items-start mb-12">
            <img className="w-44 h-54" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Megapack.png" />
            <p className="font-semibold" style={{ marginLeft: '35px' }}>Megapack</p>
            <div className="flex gap-3" style={{ marginLeft: '55px' }}>
              <p className="text-gray-500 underline">Learn</p>
            </div>
          </div>
        </div>
         {/* Vertical Line */}
        <div className="absolute mx-10" style={{ right: '280px', top: '130px', height: '210px', width: '1px', backgroundColor: 'gray' }}></div>
          <ul className="absolute text-black font-semibold py-2" style={{right:'120px', top:'110px',height:'320px',}}>
            <li className="my-[5px]">Schedule a Consultation</li> 
            <li className="my-[5px]">Why Solar</li>
            <li className="my-[5px]">Incentives</li>
            <li className="my-[5px]">Support</li>
            <li className="my-[5px]">Partner with Tesla</li>
            <li className="my-[5px]">Commercial</li>
            <li className="my-[5px]">Utilities</li>
          </ul>
      </div>

      {/* Buttons */}
      <div className="absolute top-[620px] left-1/2 transform -translate-x-1/2 flex gap-16">
        <div className="bg-white text-black px-14 py-2 rounded font-bold w-[324px] text-center">
          Order Now
        </div>
        <div className="bg-black text-white px-14 py-2 rounded font-bold w-[324px] text-center">
          Demo Drive
        </div>
      </div>
    </>
  );
}

export default Energy;
