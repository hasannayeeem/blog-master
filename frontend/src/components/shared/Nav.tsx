import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import { MdDashboardCustomize, MdEventNote } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
function Nav() {
  return (
    <div className="block sticky top-0 w-full z-[999]" id="menu">
      <nav className="w-full grid grid-cols-3 bg-white rounded px-[106px] py-[10px] text-center shadow-lg">
        <NavLink
          to={"/"}
          style={{ fontFamily: "Tulpen One", color: "#027785" }}
          className="text-8xl col-start-1 col-end-3 text-left"
        >
          Blog-Master
        </NavLink>
        <ul className="flex items-center h-24 absolute right-28">
          <li className="ml-4">
            <NavLink
              to={"/"}
              className="px-7 py-11 inline-block text-black font-semibold text-2xl hover:text-[#027785] duration-300 relative after:content-[''] after:bg-[#027785] after:h-1 after:block after:w-0 after:absolute after:bottom-0 left-0 ease-in-out transition-all after:duration-300 hover:after:w-full after:left-0"
            >
              <div className="flex items-center text-3xl">
                <BiHomeAlt2 className="m-[5px] ml-[-10px] mr-3"></BiHomeAlt2>
                <span className="">Crowd</span>
              </div>
            </NavLink>
          </li>
          <li className="ml-4">
            <NavLink
              to={"/events"}
              className="px-7 py-11 inline-block text-black font-semibold text-2xl hover:text-[#027785] duration-300 relative after:content-[''] after:bg-[#027785] after:h-1 after:block after:w-0 after:absolute after:bottom-0 left-0 ease-in-out transition-all after:duration-300 hover:after:w-full after:left-0"
            >
              <div className="flex items-center text-3xl">
                <MdEventNote className="m-[5px] ml-[-10px] mr-3"></MdEventNote>
                <span className="">Events</span>
              </div>
            </NavLink>
          </li>
          <li className="ml-4">
            <NavLink
              to={"/mail"}
              className="px-7 py-11 inline-block text-black font-semibold text-2xl hover:text-[#027785] duration-300 relative after:content-[''] after:bg-[#027785] after:h-1 after:block after:w-0 after:absolute after:bottom-0 left-0 ease-in-out transition-all after:duration-300 hover:after:w-full after:left-0"
            >
              <div className="flex items-center text-3xl">
                <FiMail className="m-[5px] ml-[-10px] mr-3"></FiMail>
                <span className="">Mail</span>
              </div>
            </NavLink>
          </li>

          <NavLink to={"/profile"} className="avatar ml-14">
            <div className="rounded-full ring-[#027785] ring-2 ring-offset-base-100 ring-offset-2 flex items-center justify-center">
              <FaUserAlt className="text-4xl text-[#027785]"></FaUserAlt>
            </div>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
