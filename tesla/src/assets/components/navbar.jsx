import React from "react";
import Vehicle from "./vehicle";
import Energy from "./Energy";
import Charging from "./charging";
import Discover from "../Discover";
import Shop from "../shop";
import "./navbar.css";

const Navlinks = () => {

      const links = [
    { name: "Vehicles", component: <Vehicle /> },
    { name: "Energy", component: <Energy /> },
    { name: "Charging", component: <Charging /> },
    { name: "Discover", component: <Discover /> },
    { name: "Shop", component: <Shop /> },
  ];

  


  return (
      <div className="nav-container">
        {links.map((link, index) => (
          <div
            key={index}
            className="relative group flex items-center justify-center min-w-[100px]"
          >
            <h2
              className="text-white top-0.5 cursor-pointer hover:bg-slate-400 transition duration-500 ease-in-out "
            >
              {link.name}
            </h2>
            <div className="absolute hidden group-hover:block top-full left-1 -right-1/4 transform -translate-x-1/3 mt-2 p-4 bg-white shadow-lg z-5 w-[1500px] ">

              {/* Set consistent width */}
              <div>{link.component}</div>
            </div>
          </div>
        ))}
      </div>

  );
};

export default Navlinks; 