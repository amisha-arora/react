import React from "react";
import { Link } from "react-router-dom";

function Shop() {
  return (
    <>
      <div
        className="relative w-full bg-white text-black flex flex-col items-center"
        style={{ height: "560px" }}
      >
        {/* Navigation */}
        <nav
          className="w-full flex justify-between px-4 md:px-4 py-7 bg-white text-black"
          style={{ zIndex: 1 }}
        >
          <div>
            <Link to="/">
              <img
                src="https://www.carlogos.org/car-logos/tesla-logo-2007-wordmark-download.png"
                className="w-16"
                alt="Logo"
              />
            </Link>
          </div>
          <ul className="md:flex hidden font-semibold">
            <li className="mx-[10px]">Vehicles</li>
            <li className="mx-[10px]">Energy</li>
            <li className="mx-[10px]">Charging</li>
            <li className="mx-[10px]">Discover</li>
            <li className="mx-[10px]">Shop</li>
          </ul>
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
          <div className="md:hidden px-2 py-2 bg-blue-300 text-black rounded font-bold">
            Menu
          </div>
        </nav>

        {/* Shop Products */}
        <div className="flex flex-row justify-center items-center mt-12">
          {/* Charging */}
          <div className="flex flex-col items-center mb-12">
            <img
              className="w-44 h-54"
              src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Charging.png"
              alt="Charging"
            />
            <p className="font-semibold mt-2">Charging</p>
            <div className="flex gap-5 mt-2">
              <p className="text-gray-500 underline">Learn</p>
              <p className="text-gray-500 underline">Shop</p>
            </div>
          </div>
          {/* Vehicle Accessories */}
          <div className="flex flex-col items-center mb-12">
            <img
              className="w-44 h-54"
              src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Vehicle-Accessories.png"
              alt="Vehicle Accessories"
            />
            <p className="font-semibold mt-2">Vehicle Accessories</p>
            <div className="flex gap-3 mt-2">
              <p className="text-gray-500 underline">Learn</p>
              <p className="text-gray-500 underline">Shop</p>
            </div>
          </div>
          {/* Apparel */}
          <div className="flex flex-col items-center mb-12">
            <img
              className="w-44 h-54"
              src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Apparel.png"
              alt="Apparel"
            />
            <p className="font-semibold mt-2">Apparel</p>
            <div className="flex gap-3 mt-2">
              <p className="text-gray-500 underline">Learn</p>
              <p className="text-gray-500 underline">Shop</p>
            </div>
          </div>
          {/* Lifestyle */}
          <div className="flex flex-col items-center mb-12">
            <img
              className="w-44 h-54"
              src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Lifestyle.png"
              alt="Lifestyle"
            />
            <p className="font-semibold mt-2">Lifestyle</p>
            <div className="flex gap-3 mt-2">
              <p className="text-gray-500 underline">Learn</p>
              <p className="text-gray-500 underline">Shop</p>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="absolute top-[620px] left-1/2 transform -translate-x-1/2 flex gap-16">
        <div className="bg-white text-black px-14 py-2 rounded font-bold w-[324px] text-center">
          Shop Now
        </div>
        <div className="bg-black text-white px-14 py-2 rounded font-bold w-[324px] text-center">
          Gift Ideas
        </div>
      </div>
    </>
  );
}

export default Shop;


