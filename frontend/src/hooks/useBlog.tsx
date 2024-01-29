import { useEffect, useState } from "react";

const useBlog = (blogId) => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5001/api/v1/getBlog/${blogId}`)
      .then((res) => res.json())
      .then((data) => setBlog(data.singleBlog));
  }, [blog, setBlog]);

  return [blog, setBlog];
};
export default useBlog;
