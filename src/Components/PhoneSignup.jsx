import React, { useState } from "react";
import Logo from "../assets/logo.png";
import image from "../assets/loginPageImg.png";

const PhoneSignup = () => {
  const[number,setNumber]= useState("")
  const[name,setName]= useState("")
  const getOTP=(e)=>{
    e.prevent.default()
    console.log(name,number)
  }

  return (
    <>
      <div className="hidden md:flex ">
        <div className="login_background"></div>
        <div className="login_background_dark"></div>
        <div className="flex justify-center">
          <div className="loginContainer ">
            <div className="loginLeft">
              <div className="welcomeText">Welcome to</div>
              <div className="flex justify-center">
                <img src={Logo} alt="" className="loginLogo" />
              </div>
              <div className="relative top-16">
                <img src={image} alt="" className="" />
              </div>
            </div>
            <div className="loginRight">
              <div className="text-3xl flex justify-center pt-14 pb-4">
                Members Login
              </div>
              <div>
                <form className="bg-white  rounded pt-6 pb-8 mb-4">
                  <div className="mb-6 mx-10">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      value={name}
                      onChange={setName}
                      placeholder="Name"
                    />
                  </div>
                  <div className="bg-white mx-10">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="phone"
                    >
                      Phone
                    </label>
                    <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3  leading-tight focus:outline-none focus:shadow-outline">
                      +91
                    </div>
                    <input
                      className="relative -top-[2.80rem] left-[3rem] appearance-none bg-white space-x-3 w-[80%] py-1  text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                      id="phone"
                      value={number}
                      onChange={setNumber}
                      type="number"
                    />
                  </div>
                  <div className="flex items-center mb-4 mx-10">
                    <input
                      disabled
                      checked
                      id="disabled-checked-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="disabled-checked-checkbox"
                      className="ml-2 text-sm font-medium text-yellow-400 dark:text-gray-500"
                    >
                      Keep me logged in
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-yellow-300 hover:bg-yellow-400 text-white font-extrabold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mx-10"
                      type="button"
                      onClick={getOTP}
                    >
                      Get OTP
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile view */}
      <div className="flex md:hidden w-full h-full">
        <div className="flex flex-col justify-center w-full bg-white mt-5">
          <div className="text-3xl flex justify-center pt-14 pb-4">
            Members Login
          </div>
          <div>
            <form className="bg-white  rounded pt-6 pb-8 mb-4">
              <div className="mb-6 mx-10">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="bg-white mx-10">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Phone
                </label>
                <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3  leading-tight focus:outline-none focus:shadow-outline">
                  +91
                </div>
                <input
                  className="relative -top-[2.80rem] left-[3rem] appearance-none bg-white space-x-3 w-[80%] py-1  text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="number"
                />
              </div>
              <div className="flex items-center mb-4 mx-10">
                <input
                  disabled
                  checked
                  id="disabled-checked-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="disabled-checked-checkbox"
                  className="ml-2 text-sm font-medium text-yellow-400 dark:text-gray-500"
                >
                  Keep me logged in
                </label>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-yellow-300 hover:bg-yellow-400 text-white font-extrabold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mx-10"
                  type="button"
                >
                  Get OTP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhoneSignup;
