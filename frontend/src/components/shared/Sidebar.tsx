import React, { useState } from "react";
import { AiFillHome, AiFillEdit } from "react-icons/ai";
import { MdEventNote } from "react-icons/md";

import { NavLink } from "react-router-dom";
import { FiUserPlus } from "react-icons/fi";
const Sidebar = () => {
  const activeStyle = ` font-semibold text-2xl tracking-wide  bg-[#027785]  [&>*:not(:last-child)]:text-green-500 [&>*:not(:first-child)]:text-white transition-colors duration-200  flex items-center px-6 py-5 rounded w-full`;
  const noActiveStyle = ` font-semibold text-2xl tracking-wide  text-gray-700 transition-colors duration-200 flex items-center px-6 py-5 rounded w-full hover:bg-[#027785] hover:text-white`;
  return (
    <div className="sidebar">
      <div className="sidebar_wrapper">
        <ul className="text-light list-unstyled sidebar_list">
          <li className="mb-2 sidebar_list_item">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? `${activeStyle}` : `${noActiveStyle}`
              }
            >
              <span className="sidebar_icon_bg">
                <AiFillHome className={`sidebar_icon`} />
              </span>
              {/* Home */}
              <span className="sidebar_list_item_text">Home</span>
            </NavLink>
          </li>

          <li className="mb-2 sidebar_list_item">
            <NavLink
              to={`/blogs`}
              className={({ isActive }) =>
                isActive ? activeStyle : noActiveStyle
              }
            >
              <span className="sidebar_icon_bg">
                <AiFillEdit className={`sidebar_icon`} />
              </span>
              {/* Blog */}
              <span className="sidebar_list_item_text">Blogs</span>
            </NavLink>
          </li>

          <li className="mb-2 sidebar_list_item">
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? activeStyle : noActiveStyle
              }
            >
              <span className="sidebar_icon_bg">
                <MdEventNote className={`sidebar_icon`} />
              </span>
              {/* Events */}
              <span className="sidebar_list_item_text">Events</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
