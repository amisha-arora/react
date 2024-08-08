import React from "react";
import { Link } from "react-router-dom";
function Discover() {
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
        {/*Resources*/}
          <div className="flex flex-col items-start mb-12" style={{ marginRight: '20px' }}>
            <p className=" text-gray-500 font-semibold" style={{ marginLeft: '70px' }}>Resources</p>
            <div className="flex gap-5 font-semibold" style={{ marginLeft: '69px' }}>
                <ul>
                    <li className="text-black">Demo Drive</li>
                    <li className="text-black">Insurance</li> 
                    <li className="text-black">Military Purchase Program</li>
                    <li className="text-black">Video Guides</li>
                    <li className="text-black">Customer Stories</li>
                    <li className="text-black">Events</li> 
                </ul>
            </div>
          </div>



          {/*Location Services*/}
          <div className="flex flex-col items-start mb-12" style={{ marginRight: '20px' }}>
            <p className=" text-gray-500 font-semibold" style={{ marginLeft: '70px' }}>Location Services</p>
            <div className="flex gap-5 font-semibold" style={{ marginLeft: '69px' }}>
                <ul>
                    <li className="text-black">Find Us</li>
                    <li className="text-black">Find a Collision Center</li> 
                    <li className="text-black">Find a Certified Installer</li>
                </ul>
            </div>
          </div>
          {/*Company*/}
          <div className="flex flex-col items-start mb-12" style={{ marginRight: '20px' }}>
            <p className=" text-gray-500 font-semibold" style={{ marginLeft: '70px' }}>Company</p>
            <div className="flex gap-5 font-semibold" style={{ marginLeft: '69px' }}>
                <ul>
                    <li className="text-black">About</li>
                    <li className="text-black">Careers</li> 
                    <li className="text-black">Investor Relations</li>
                </ul>
            </div>
          </div>
          </div>

        
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

export default Discover;
