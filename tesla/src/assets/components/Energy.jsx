import React from "react";
import { Link } from "react-router-dom";

function Energy() {
  return (
    <>
      <div
        className="relative w-full bg-white text-black"
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

        {/* Energy Products */}
        <div className="flex flex-row">
          {/* Solar Panels */}
          <div
            className="flex flex-col items-start mb-12 mt-2"
            style={{ marginLeft: "160px" }}
          >
            <img
              className="w-44 h-54"
              src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Panels.png"
            />
            <p className="font-semibold" style={{ marginLeft: "35px" }}>
              Solar Panels
            </p>
            <div className="flex gap-5" style={{ marginLeft: "20px" }}>
              <p className="text-gray-500 underline">Learn</p>
              <p className="text-gray-500 underline">Order</p>
            </div>
          </div>
          {/* Solar Roof */}
          <div
            className="flex flex-col items-start mb-12 mt-2"
            style={{ marginLeft: "20px" }}
          >
            <img
              className="w-44 h-54"
              src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Roof.png"
            />
            <p className="font-semibold" style={{ marginLeft: "35px" }}>
              Solar Roof
            </p>
            <div className="flex gap-3" style={{ marginLeft: "20px" }}>
              <p className="text-gray-500 underline">Learn</p>
              <p className="text-gray-500 underline">Order</p>
            </div>
          </div>
          {/* Powerwall */}
          <div
            className="flex flex-col items-start mb-12 mt-2"
            style={{ marginLeft: "20px" }}
          >
            <img
              className="w-44 h-54"
              src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Powerwall-US.png"
            />
            <p className="font-semibold" style={{ marginLeft: "35px" }}>
              Powerwall
            </p>
            <div className="flex gap-3" style={{ marginLeft: "20px" }}>
              <p className="text-gray-500 underline">Learn</p>
              <p className="text-gray-500 underline">Order</p>
            </div>
          </div>
          {/* Megapack */}
          <div
            className="flex flex-col items-start mb-12 mt-2"
            style={{ marginLeft: "20px" }}
          >
            <img
              className="w-44 h-54"
              src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Megapack.png"
            />
            <p className="font-semibold" style={{ marginLeft: "35px" }}>
              Megapack
            </p>
            <div className="flex gap-3" style={{ marginLeft: "20px" }}>
              <p className="text-gray-500 underline">Learn</p>
            </div>
          </div>
        </div>

        {/* Vertical Line and Sidebar */}
        <div
          className="absolute"
          style={{
            right: "500px",
            top: "140px",
            height: "320px",
            width: "1px",
            backgroundColor: "gray",
          }}
        ></div>
        <ul
          className="absolute text-black font-semibold py-2"
          style={{ right: "320px", top: "140px", height: "320px" }}
        >
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

