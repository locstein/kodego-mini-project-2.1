import ProfileImg from "../../../assets/images/navbar-profile-img.jpg";
import { BsSunFill } from "react-icons/bs";
import { SiNetflix } from "react-icons/si";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // // Toggle dark mode when the button is clicked
  // const toggleDarkMode = () => {
  //   setIsDarkMode((prevMode) => !prevMode);
  // };

  // // Update the dark mode preference in local storage
  // useEffect(() => {
  //   localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  // }, [isDarkMode]);

  // // Check for dark mode preference in local storage on component mount
  // useEffect(() => {
  //   const savedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
  //   if (savedDarkMode !== null) {
  //     setIsDarkMode(savedDarkMode);
  //   }
  // }, []);

  return (
    <div className="navbar bg-[#fbf3f0] dark:bg-black shadow-md">
      <div className="flex-1">
        <a className="normal-case text-xl text-black font-bold padding-x">
          <div className="tracking-wide text-3xl">CineVerse</div>
        </a>
      </div>
      <div className="flex-none gap-2 padding-x">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar flex">
            <div className="w-10 rounded-full flex">
              <img src={ProfileImg} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#fbf3f0] text-black rounded-box w-52"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
