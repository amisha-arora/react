import React from "react";
import { Link } from "react-router-dom";
function Charging() {
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
        
        <div className="flex flex-row justify-center items-start mt-20">
          {/*Charging*/}
          <div className="flex flex-col items-start mb-12" style={{ marginRight: '20px' }}>
            <img className="w-44 h-54" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Charging.png"/> 
            <p className="font-semibold" style={{ marginLeft: '70px' }}>Charging</p>
            <div className="flex gap-5" style={{ marginLeft: '79px' }}>
              <p className="text-gray-500 underline">Learn</p>
            </div>
          </div>

          {/*Home Charging*/}
          <div className="flex flex-col items-start mb-12" style={{ marginRight: '20px' }}>
            <img className="w-44 h-54" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Home-Charging.png" />
            <p className="font-semibold" style={{ marginLeft: '35px' }}>Home Charging</p>
            <div className="flex gap-3" style={{ marginLeft: '45px' }}>
              <p className="text-gray-500 underline">Learn</p>
              <p className="text-gray-500 underline">Shop</p>
            </div>
          </div>

          {/*Super Charging*/}
          <div className="flex flex-col items-start mb-12" style={{ marginRight: '20px' }}>
            <img className="w-44 h-54" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Supercharging-NA.png" />
            <p className="font-semibold" style={{ marginLeft: '45px' }}>Super Charging</p>
            <div className="flex gap-3" style={{ marginLeft: '55px' }}>
              <p className="text-gray-500 underline">Learn</p>
              <p className="text-gray-500 underline">Find</p>
            </div>
          </div>
        </div>
         {/* Vertical Line */}
        <div className="absolute mx-10" style={{ right: '380px', top: '130px', height: '210px', width: '1px', backgroundColor: 'gray' }}></div>
          <ul className="absolute text-black font-semibold py-2" style={{right:'220px', top:'120px',height:'320px',}}>
            <li className="my-[5px]">Help Me Charge</li> 
            <li className="my-[5px]">Charging Calculator</li>
            <li className="my-[5px]">Charging With NACS</li>
            <li className="my-[5px]">Supercharger Voting</li>
            <li className="my-[5px]">Host a Supercharger</li>
            <li className="my-[5px]">Commercial Charging</li>
            <li className="my-[5px]">Host Wall Connectors</li>
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

export default Charging;
