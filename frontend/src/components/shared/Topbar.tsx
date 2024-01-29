import React from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

function Topbar({
  title,
  showModal,
  isSearchBar,
  setSearchTerm,
  actionTitle,
  isThisBlogPage,
}) {
  return (
    <div className="flex justify-between items-center my-6">
      <div className="ml-4">
        <h2
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
          className={`uppercase  font-bold text-3xl py-3`}
        >
          {title}
        </h2>
        <div className="flex ">
          <div className=" rounded-md w-28 h-1 bg-[#0D9488]"></div>
          <div className=" rounded-md w-10 h-1 mx-2 bg-[#0D9488]"></div>
          <div className=" rounded-md w-5 h-1 bg-[#0D9488]"></div>
        </div>
      </div>
      <div className="ml-4">
        <h2
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
          className={`${
            1 > 4 && "text-white"
          } uppercase  font-bold text-3xl py-3`}
        >
          {isSearchBar ? (
            <div className="flex items-center gap-[5px]">
              <div className="relative">
                <form action="">
                  <input
                    type="text"
                    className="p-[10px] text-2xl border-[2px] outline-none border-[#027785] rounded-[10px]"
                    placeholder="Search by City"
                    onChange={(e)=> setSearchTerm(e.target.value)}
                  ></input>
                  <button className="p-[12px] text-white text-3xl bg-[#027785] rounded-r-[10px] absolute top-0 right-0">
                    <FaSearch />
                  </button>
                </form>
              </div>
            </div>
          ) : isThisBlogPage ? (
            <Link to="/add-blog">
              <button
                className={`${"hover:bg-teal-800 bg-white text-teal-900 border border-teal-900 hover:text-white"} sm:px-7 px-5 transition py-1.5 sm:py-2.5 rounded-[3px] uppercase flex justify-center items-center`}
              >
                {actionTitle}
              </button>
            </Link>
          ) : (
            <button
              className={`${"hover:bg-teal-800 bg-white text-teal-900 border border-teal-900 hover:text-white"} sm:px-7 px-5 transition py-1.5 sm:py-2.5 rounded-[3px] uppercase flex justify-center items-center`}
              onClick={() => showModal()}
            >
              {actionTitle}
            </button>
          )}
        </h2>
        {/* <div className="flex">
              <div className=" rounded-md w-5 h-1 bg-[#0D9488]"><div>
              <div className=" rounded-md w-10 h-1 mx-2 bg-[#0D9488]"></div>
              <div className=" rounded-md w-28 h-1 bg-[#0D9488]"></div>
            </div> */}
      </div>
    </div>
  );
}

export default Topbar;
