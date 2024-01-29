import { useEffect, useState } from "react";

const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("posts.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [posts, setPosts]);
  return [posts, setPosts];
};
export default usePosts;


