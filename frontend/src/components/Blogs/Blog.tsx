import React from "react";
import { Link } from "react-router-dom";
import Loading from "../shared/Loading";

const Blog = ({ blog }) => {
  if (!blog) return <Loading />;
  const { title, _id, body} = blog || {};
  const img = `https://nepirockcastle.com/wp-content/uploads/2019/03/nepi-MEGA-MALL-ROMANIA-1.jpg`
  return (
    <div>
      <div
        className={`${"bg-white border-white border"} max-w-sm  px-6 pt-6 pb-2  shadow-lg transform hover:scale-105 transition duration-500 h-[300px]`}
      >
        <div className="relative">
          <img className="w-full h-52" src={img} alt="Colors" />
        </div>
        <h1
          className={`${"text-gray-800"} mt-4  text-2xl font-bold cursor-pointer`}
        >
          {title}
        </h1>
        <p className="mt-2">{body?.slice(0, 100)}...</p>
        <div className="my-[6px]">
          <Link to={`/blogs/${_id}`} className="d-block">
            <button className="mt-4 text-xl w-full text-white bg-[#0D9488] py-2 rounded shadow-lg">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
