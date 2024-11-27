import React from "react";
import { Link } from "react-router-dom";

function Discover() {
  return (
    <>
      <div className="relative w-full bg-white text-black" style={{ height: "560px" }}>
        {/* Navigation */}
        <nav className="w-full flex justify-between px-4 md:px-4 py-7 bg-white text-black" style={{ zIndex: 1 }}>
          <div>
            <Link to="/">
              <img
                src="https://www.carlogos.org/car-logos/tesla-logo-2007-wordmark-download.png"
                className="w-16"
                alt="Logo"
              />
            </Link>
          </div>
          {/*Updated navigation items*/}
          <ul className="md:flex hidden font-semibold">
            <li className="mx-[10px]">Vehicles</li>
            <li className="mx-[10px]">Energy</li>
            <li className="mx-[10px]">Charging</li>
            <li className="mx-[10px]">Discover</li>
            <li className="mx-[10px]">Shop</li>
          </ul>
          {/*Adjust spacing and layout for icons*/}
          <div className="md:flex hidden p-4 h-12">
            <img
              src="https://www.pngarts.com/files/4/Question-Mark-PNG-Image-Background.png"
              className="w-7 mx-[10px]"
              alt="question"
            />
            <img
              src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3868264/earth-icon-md.png"
              className="w-7 mx-[10px]"
              alt="earth"
            />
            <img
              src="https://static.wixstatic.com/media/710aa2_6684568f236a4c099e2200f3f33ba547~mv2.png/v1/fill/w_512,h_512,al_c,q_85,enc_auto/user.png"
              className="w-7 mx-[10px]"
              alt="user"
            />
          </div>
          {/*Menu button*/}
          <div className="md:hidden px-2 py-2 bg-blue-300 text-black rounded font-bold">
            Menu
          </div>
        </nav>

        {/* Discover Content */}
        <div className="flex flex-row justify-around mt-12">
          {/* Resources */}
          <div className="flex flex-col items-start">
            <p className="text-gray-500 font-semibold mb-4">Resources</p>
            <ul className="font-semibold">
              <li className="text-black mb-2">Demo Drive</li>
              <li className="text-black mb-2">Insurance</li>
              <li className="text-black mb-2">Military Purchase Program</li>
              <li className="text-black mb-2">Video Guides</li>
              <li className="text-black mb-2">Customer Stories</li>
              <li className="text-black">Events</li>
            </ul>
          </div>

          {/* Location Services */}
          <div className="flex flex-col items-start">
            <p className="text-gray-500 font-semibold mb-4">Location Services</p>
            <ul className="font-semibold">
              <li className="text-black mb-2">Find Us</li>
              <li className="text-black mb-2">Find a Collision Center</li>
              <li className="text-black">Find a Certified Installer</li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col items-start">
            <p className="text-gray-500 font-semibold mb-4">Company</p>
            <ul className="font-semibold">
              <li className="text-black mb-2">About</li>
              <li className="text-black mb-2">Careers</li>
              <li className="text-black">Investor Relations</li>
            </ul>
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
