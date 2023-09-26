// import { NavLink, useLocation } from "react-router-dom";

// import { motion } from "framer-motion";
// import { useMediaQuery } from "react-responsive";
// import React, { useEffect, useState } from "react";

// import { IoIosArrowBack } from "react-icons/io";
// import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
// import { SiNetflix } from "react-icons/si";
// import { PiTelevisionSimpleBold } from "react-icons/pi";
// import { MdOutlineLocalMovies } from "react-icons/md";
// import { BsPerson } from "react-icons/bs";

// const Sidebar = () => {
//   let isTab = useMediaQuery({ query: "(max-width: 768px)" });
//   const { pathname } = useLocation();

//   const [isOpen, setIsOpen] = useState(isTab ? false : true);
//   const Sidebar_animation = isTab
//     ? {
//         open: {
//           x: 0,
//           width: "16rem",
//           transition: {
//             damping: 40,
//           },
//         },
//         closed: {
//           x: -250,
//           width: 0,
//           transition: {
//             damping: 40,
//             delay: 0.15,
//           },
//         },
//       }
//     : {
//         // system view
//         open: {
//           width: "16rem",
//           transition: {
//             damping: 40,
//           },
//         },
//         closed: {
//           width: "4rem",
//           transition: {
//             damping: 40,
//           },
//         },
//       };

//   // scrollable sidebar

//   // responsive from mobile to desktop
//   useEffect(() => {
//     if (isTab) {
//       setIsOpen(false);
//     } else {
//       setIsOpen(true);
//     }
//   }, [isTab]);

//   // when you click a link, the sidebar should close automatically
//   useEffect(() => {
//     isTab && setIsOpen(false);
//   }, [pathname]);

//   return (
//     <div>
//       <div
//         onClick={() => setIsOpen(false)}
//         className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
//           isOpen ? "block" : "hidden"
//         }`}
//       ></div>
//       <motion.div
//         variants={Sidebar_animation}
//         initial={{ x: isTab ? -250 : 0 }}
//         animate={isOpen ? "open" : "closed"}
//         className="bg-[#fbf3f0] text-black shadow-xl z-[999] w-[16rem] max-w-[16rem] h-screen overflow-hidden md:relative fixed"
//       >
//         {/* save this lines for the logo */}
//         <div className="flex items-center gap-2.5 font-medium border-b border-black py-3 mx-3">
//           {/* can be img but for now icon muna */}
//           {/* remove line 39 if have logo */}
//           <SiNetflix size={45} className="min-w-max text-black" />
//           <span className="text-xl whitespace-pre text-black">NotFlix</span>
//         </div>

//         {/* navbarlinks */}
//         <div className="flex flex-col h-full">
//           <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col font-medium overflow-x-hidden font-mono">
//             {/* first link HOME */}
//             <li>
//               <NavLink className={"link"} to="/">
//                 <AiOutlineHome size={23} className="text-black min-w-max" />
//                 Home
//               </NavLink>
//             </li>
//             {/* 2nd link Movies */}
//             <li>
//               <NavLink className={"link"} to="/movies">
//                 <MdOutlineLocalMovies
//                   size={23}
//                   className=" text-black min-w-max"
//                 />
//                 Movies
//               </NavLink>
//             </li>
//             {/* 3rd link TV */}
//             <li>
//               <NavLink className={"link"} to="/tv-shows">
//                 <PiTelevisionSimpleBold
//                   size={23}
//                   className=" text-black min-w-max"
//                 />
//                 TV Shows
//               </NavLink>
//             </li>

//             {/* add more here*/}
//             {/* if closed, make all the icons show in columns */}
//             {isOpen && (
//               <div className="border-b py-2 m-2.5 mb-5 border-black"></div>
//             )}

//             {/* manage profile */}
//             <li>
//               <NavLink className={"link"} to="/profile">
//                 <BsPerson size={23} className=" text-black min-w-max" />
//                 Profile
//               </NavLink>
//             </li>
//           </ul>
//         </div>

//         <motion.div
//           // animation for arrow in sidebar
//           animate={
//             isOpen
//               ? {
//                   x: 0,
//                   y: 0,
//                   rotate: 0,
//                 }
//               : {
//                   x: -10,
//                   y: -10,
//                   rotate: 180,
//                 }
//           }
//           // how fast does the arrow rotate
//           transition={{
//             duration: 0.3,
//           }}
//           onClick={() => setIsOpen(!isOpen)}
//           className="absolute w-fit h-fit z-50 right-2 bottom-5 md:block hidden"
//         >
//           {/* icon */}
//           <IoIosArrowBack className="cursor-pointer text-black" size={20} />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Sidebar;
