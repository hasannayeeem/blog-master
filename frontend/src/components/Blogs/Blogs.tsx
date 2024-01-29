import React from "react";
import useBlogs from "../../hooks/useBlogs";
import Blog from "./Blog";
import Topbar from "../shared/Topbar";
import Loading from "../shared/Loading";

const Blogs = () => {
  const [blogs = []] = useBlogs() 
  console.log({blogs});
  !blogs.length && <Loading />
  
  return (
    <div className="flex mt-2">
      <div className="">
        <Topbar
          title={`our blogs`}
          actionTitle={`add blog`}
          isThisBlogPage={"true"}
        />
        <hr className="my-2" />
        <div className="flex justify-center items-center py-12">
          <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0">
            {blogs?.map((blog) => (
              <Blog blog={blog} key={blog._id}></Blog>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
