import React from "react";
import { Link, useParams } from "react-router-dom";
import { CgCalendarDates } from "react-icons/cg";
import { MdSend } from "react-icons/md";
import { ChangeEvent, useState } from "react";
import useBlog from "../../hooks/useBlog";
import BlogComments from "./BlogComments";

const BlogDetails = () => {
  const { blogId } = useParams();
  
  const [blog] = useBlog(blogId);
  const {id, title, body} = blog || {}
  const img = `https://nepirockcastle.com/wp-content/uploads/2019/03/nepi-MEGA-MALL-ROMANIA-1.jpg`
  
  return (
    <div className="-ml-10">
      {/* Banner */}
      <img
        className="w-full h-[50vh]"
        src={img}
        alt=""
      />
      {/* Details Section */}
      <div className="p-28 py-14">
        <div className="mb-5 flex gap-10">
          <div className="flex items-center gap-5">
            <img
              className="h-[40px] rounded-full"
              src={`https://lh3.googleusercontent.com/a/AGNmyxZxcFP3APf4SZkCLm3AFkjIT-BhPlCunuuWs8op=s360`}
              alt=""
            />
            <span>
              by
              <Link
                to="/creator/Nayeem_Hasan"
                className="ml-1 font-bold underline"
              >
                {`Nayeem Hasan`}
              </Link>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CgCalendarDates className="text-3xl"></CgCalendarDates>
            <span className="font-bold">
              {`27 May, 2023`}
            </span>
          </div>
        </div>
        <h1 className="text-[56px] font-bold">
          {title}
        </h1>
        <p className="my-8 text-2xl text-justify">
          {body}
        </p>
      </div>
      {/* Comments Section */}
      <BlogComments />
    </div>
  );
};

export default BlogDetails;
