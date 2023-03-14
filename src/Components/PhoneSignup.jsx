import React, { useState } from "react";
import Logo from "../assets/logo.png";
import image from "../assets/loginPageImg.png";
import { BsFillShieldLockFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import { auth } from "../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import PhoneInput from "react-phone-input-2";
import { toast, Toaster } from "react-hot-toast";

const PhoneSignup = () => {
  // const [data, setData] = useState({});
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  // const handleChange = (event) => {
  //   const newInput = { [event.target.name]: event.target.value };
  //   setData({ ...data, ...newInput });
  //   console.log(newInput);
  // };

  const onCaptchVerify = () => {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
        },
        auth
      );
    
  };
  const onSignup = () => {
    setLoading(true);
    onCaptchVerify();
    const appVerifier = window.recaptchaVerifier;
    const formatPh = "+" + ph;
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP Sent Successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  const onOTPVerify = () => {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <div>
      <div className="hidden md:flex ">
        <div className="login_background"></div>
        <div className="login_background_dark"></div>
        {showOTP ? (
          <div>
            <Toaster toastOptions={{ duration: 4000 }} />
            
            {user ? (
              <div className="center">
                <div className="successContainer bg-yellow-50">
                  👍 Login Success
                </div>
              </div>
            ) : (
              <>
                <div className="center">
                  <div className="otpContainer bg-yellow-50">
                    <div className="flex items-center gap-2 mt-14 mb-10">
                      <BsFillShieldLockFill className="text-3xl" />
                      <span className="text-2xl">Authentication</span>
                    </div>
                    <div className="">
                      <label htmlFor="otp" className="font-bold text-xl">
                        Enter your OTP
                      </label>
                    </div>
                    <div>
                      <OtpInput
                        value={otp}
                        onChange={setOtp}
                        OTPLength={6}
                        otpType="number"
                        disabled={false}
                        autofocus
                        className="otp-container"
                      ></OtpInput>
                    </div>
                    <div>
                      <button
                        onClick={onOTPVerify}
                        className="bg-yellow-300 hover:bg-yellow-400 text-white font-extrabold my-10 w-[18.5rem] shadow-xl py-2 px-10  rounded focus:outline-none focus:shadow-outline relative right-2 flex items-center justify-center gap-2"
                      >
                        {loading && <CgSpinner className="animate-spin" />}
                        Verify
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ) : (
          <>
            <div className="flex justify-center mx-auto">
              <div className="loginContainer ">
                <div className="loginLeft">
                  <div className="welcomeText">Welcome to</div>
                  <div className="flex justify-center">
                    <img src={Logo} alt="" className="loginLogo" />
                  </div>
                  <div className="relative top-16">
                    <img src={image} alt="" className="vegnfruit" />
                  </div>
                </div>
                <div className="loginRight">
                  <div className="text-3xl flex justify-center pt-8 pb-1">
                    Members Login
                  </div>
                  <div>
                    <form className="bg-white  rounded pt-6 pb-8 mb-4">
                      {/* <div className="mb-6 mx-10">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="name"
                        >
                          Name
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="name"
                          type="text"
                          name="name"
                          onChange={handleChange}
                          placeholder="Name"
                        />
                      </div> */}
                      <div id="recaptcha-container"></div>
                      <div className="bg-white mx-10">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="phone"
                        >
                          Phone
                        </label>
                        <PhoneInput
                          className="shadow flex gap-4 border rounded  py-2 px-3 text-gray-700 mb-3  focus:outline-none focus:shadow-outline"
                          country="in"
                          value={ph}
                          onChange={setPh}
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
                          className="ml-2 my-1 text-sm font-medium text-yellow-400 dark:text-gray-500"
                        >
                          Keep me logged in
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <button
                          className="bg-yellow-300 hover:bg-yellow-400 text-white font-extrabold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mx-10"
                          type="button"
                          onClick={onSignup}
                        >
                          Get OTP
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
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
                  onClick={onSignup}
                >
                  Get OTP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneSignup;
