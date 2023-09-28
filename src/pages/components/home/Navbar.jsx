import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";
import ProfileImg from "../../../assets/images/navbar-profile-img.jpg";

const Navbar = () => {
  const [burgNav, toggleBurgNav] = useCycle(false, true);
  let [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    // Navbar
    <nav className="fixed top-0 inset-x-0 h-20 bg-[#fbf3f0] dark:bg-stone-900 shadow-md mx-auto flex flex-col justify-center z-[100]">
      <div className="md:padding-x h-full px-4 flex items-center justify-between">
        {/* logo */}
        <div className="text-2xl tracking-wide font-bold text-black dark:text-gray-200 z-[101] flex items-center flex-row-reverse gap-3">
          CineVerse
          {/* hamburger styles */}
          <motion.button
            animate={burgNav ? "open" : "closed"}
            onClick={() => toggleBurgNav()}
            className="flex flex-col space-y-1"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 5 },
              }}
              className="w-5 h-px bg-black dark:bg-gray-200 block"
            ></motion.span>
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              className="w-5 h-px bg-black dark:bg-gray-200 block"
            ></motion.span>
            <motion.span
              variants={{
                closed: { rotate: 0 },
                open: { rotate: -45, y: -5 },
              }}
              className="w-5 h-px bg-black dark:bg-gray-200 block"
            ></motion.span>
          </motion.button>
        </div>
        {/* dark mode button */}
        <button
          onClick={() => {
            setDarkMode(!darkMode);
          }}
          className="text-white bg-black dark:text-gray-200 dark:bg-[#343231] px-4 py-3 rounded hover:bg-stone-700"
        >
          {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
      {/* NavMenu */}
      <AnimatePresence>
        {burgNav && (
          <MotionConfig
            transition={{
              type: "spring",
              bounce: 0.099,
            }}
          >
            <motion.div
              variants={{
                open: {
                  x: "0%",
                  transition: {
                    when: "beforeChildren",
                    type: "spring",
                    bounce: 0.25,
                  },
                },
                closed: {
                  x: "-100%",
                  transition: {
                    when: "afterChildren",
                    type: "spring",
                    bounce: 0.25,
                  },
                },
              }}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed w-full h-screen top-0 left-0 md:w-[400px] md:h-screen bg-[#fbf3f0] dark:bg-[#343231] space-y-10 p-6 flex flex-col justify-center mx-auto padding-x z-[100]"
            >
              <motion.div
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  closed: {
                    y: "25%",
                    opacity: 0,
                  },
                }}
              >
                {/* profile */}
                <div className="w-full bg-black dark:bg-white h-px my-6"></div>
                <div className="w-7 md:mx-4 font-bold text-black dark:text-gray-200 text-xl mx-auto">
                  Hello,
                </div>
                <motion.div
                  variants={{
                    open: {
                      y: "0%",
                      opacity: 1,
                    },
                    closed: {
                      y: "25%",
                      opacity: 0,
                    },
                  }}
                  className="my-5 font-bold text-2xl tracking-widest text-black dark:text-gray-200 flex items-center justify-center"
                >
                  <img
                    className="avatar rounded-full w-10"
                    src={ProfileImg}
                    alt=""
                  />
                  <div className="mx-3 tracking-normal">RaphaelPascual</div>
                </motion.div>
                <motion.div
                  variants={{
                    open: {
                      y: "0%",
                      opacity: 1,
                    },
                    closed: {
                      y: "25%",
                      opacity: 0,
                    },
                  }}
                  className="w-full bg-black dark:bg-gray-200  h-px my-6"
                ></motion.div>
                <ul className="space-y-2 flex flex-col items-center md:block">
                  <li className="text-black dark:text-gray-200 font-semibold text-xl  md:text-2xl cursor-pointer hover:bg-slate-300 dark:hover:text-black duration-100 rounded p-3">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="text-black dark:text-gray-200 font-semibold text-xl  md:text-2xl cursor-pointer hover:bg-slate-300 dark:hover:text-black duration-100 rounded p-3">
                    <Link to="/movies">Movies</Link>
                  </li>
                  <li className="text-black dark:text-gray-200 font-semibold text-xl  md:text-2xl cursor-pointer hover:bg-slate-300 dark:hover:text-black duration-100 rounded p-3">
                    <Link to="/tv-shows">Tv Shows</Link>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  closed: {
                    y: "25%",
                    opacity: 0,
                  },
                }}
                className="w-full bg-black h-px dark:bg-gray-200"
              ></motion.div>
              <motion.div
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  closed: {
                    y: "25%",
                    opacity: 0,
                  },
                }}
                className="flex items-center"
              ></motion.div>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </nav>

    // <header className="flex w-full h-[5rem] px-4 justify-between items-center bg-black text-gray-300">
    //   {/* LOGO */}
    //   <span className="font-bold text-xl">Portfolio</span>
    //   {/* NavLinks */}
    //   <ul className="hidden md:flex">
    //     <li className="hover:bg-red-800 hover:text-white hover:rounded duration-100">
    //       <Link to="home" smooth={true} duration={500}>
    //         Home
    //       </Link>
    //     </li>
    //     <li className="hover:bg-red-800 hover:text-white hover:rounded duration-100">
    //       <Link to="about" smooth={true} duration={500}>
    //         About
    //       </Link>
    //     </li>
    //     <li className="hover:bg-red-800 hover:text-white hover:rounded duration-100">
    //       <Link to="skills" smooth={true} duration={500}>
    //         Skills
    //       </Link>
    //     </li>
    //     <li className="hover:bg-red-800 hover:text-white hover:rounded duration-100">
    //       <Link to="contact" smooth={true} duration={500}>
    //         Contact
    //       </Link>
    //     </li>
    //   </ul>

    //   {/* mobile view */}
    //   <div onClick={handleClick} className="md:hidden z-[99] cursor-pointer">
    //     {!nav ? <FaBars /> : <FaTimes />}
    //   </div>

    //   {/* mobile menu */}
    //   <ul
    //     className={
    //       !nav
    //         ? "hidden"
    //         : "absolute top-0 right-0 w-[300px] h-screen bg-[#000814] flex flex-col justify-center items-center"
    //     }
    //   >
    //     <li className="py-5 text-3xl hover:bg-white hover:text-black hover:rounded duration-100">
    //       <Link onClick={handleClick} to="home" smooth={true} duration={500}>
    //         Home
    //       </Link>
    //     </li>
    //     <li className="py-5 text-3xl hover:bg-white hover:text-black hover:rounded duration-100">
    //       <Link onClick={handleClick} to="about" smooth={true} duration={500}>
    //         About
    //       </Link>
    //     </li>
    //     <li className="py-5 text-3xl hover:bg-white hover:text-black hover:rounded duration-100">
    //       <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
    //         Skills
    //       </Link>
    //     </li>
    //     <li className="py-5 text-3xl hover:bg-white hover:text-black hover:rounded duration-100">
    //       <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
    //         Contact
    //       </Link>
    //     </li>
    //   </ul>
    // </header>
  );
};

export default Navbar;
