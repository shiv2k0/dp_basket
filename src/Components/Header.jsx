import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Cart from "./Cart";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";
// import UserLocation from "./UserLocation";
import { Link } from "react-router-dom";

const Header = () => {
  const [openState, setOpenState] = useState(false);
  const [login,setLogin] = useState(false)
  return (
    <header className="fixed z-50 w-screen bg-yellow-200 p-5 px-10 ">
      {/* Desktop and Tablet */}
      <div className="hidden md:flex w-full h-full justify-between items-center gap-4">
        <Link to={"/"} className="flex items-center gap-2">
          <img
            src={Logo}
            alt="logo"
            className="w-60 object-cover min-w-[200px] logo"
          />
        </Link>

        {/* <UserLocation/> */}

        <SearchBar />

        <div className="flex items-center gap-8  mx-4">
          {openState && <Dropdown className="ml-auto w-28" />}
          {
            login && <button
            className="text-xl"
            onClick={() => setOpenState((prev) => !prev)}
          >
            Account
          </button>
          }
          {
            !login && <Link 
            to={"/phonesignup"}
            className="text-xl"
          >
            Login
          </Link>
          }
          
          <Cart className="text-3xl" />
        </div>
      </div>
      {/* Mobile */}
      <div className="flex md:hidden w-full h-full">
        <div className="flex flex-col w-full items-center gap-3">
          <img
            src={Logo}
            alt="logo"
            className="w-60 object-cover min-w-[200px] logo"
          />
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
