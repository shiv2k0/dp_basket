import React, { useState } from "react";
import Logo from "../assets/logo2.png";
import Cart from "./Cart";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";
// import UserLocation from "./UserLocation";

const Header = () => {
  const [openState, setOpenState] = useState(false);
  return (
    <header className="fixed z-50 w-screen bg-yellow-200 p-5 px-10 ">
      {/* Desktop and Tablet */}
      <div className="hidden md:flex w-full h-full justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="logo"
            className="w-60 object-cover min-w-[200px] logo"
          />
        </div>
        
        {/* <UserLocation/> */}

        <SearchBar />

        <div className="flex items-center gap-8">
          {openState && <Dropdown className="ml-auto w-28" />}
          <button
            className="text-xl"
            onClick={() => setOpenState((prev) => !prev)}
          >
            Account
          </button>
          <Cart className="text-3xl" />
        </div>
      </div>
      {/* Mobile */}
      <div className="flex md:hidden w-full h-full">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
