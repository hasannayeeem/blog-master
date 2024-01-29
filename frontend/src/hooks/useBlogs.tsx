import { useEffect, useState } from "react";
import { combineFields } from "../utils/combineFields";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5001/api/v1/getBlogs`)
      .then((res) => res.json())
      .then((data)=> setBlogs(combineFields(data.allBlog, localData)));
  }, [setBlogs]);
  return [blogs, setBlogs];
};
export default useBlogs;




const localData = [
  {
    "date": "27 May, 2023",
    "image": "https://nepirockcastle.com/wp-content/uploads/2019/03/nepi-MEGA-MALL-ROMANIA-1.jpg"
  },
  {
    "date": "27 May, 2023",
    "image": "https://simex.com.bd/wp-content/uploads/2021/05/Fugear-1Construction-%E2%80%93-SIMEX-Bangladesh-1200x720.jpg"
  },
  {
    "date": "27 May, 2023",
    "image": "https://simex.com.bd/wp-content/uploads/2020/10/SIMEX-Bangladesh-can-Provide-the-Ultimate-Guidelines-for-Building-Construction-1200x720.jpg"
  },
  {
    "date": "27 May, 2023",
    "image": "https://media.istockphoto.com/photos/hand-sketching-a-designer-villa-with-pool-image-id1063723682?k=20&m=1063723682&s=612x612&w=0&h=m4E1YDtdg8WhGwr1hBG_X_wGoN9jNRME1DXHJ9oqSl4="
  },
  {
    "date": "27 May, 2023",
    "image": "https://img.tradeford.com/pimages/l/7/941967.jpg"
  },
  {
    "date": "27 May, 2023",
    "image": "https://img.tradeford.com/pimages/l/7/941967.jpg"
  },
  {
    "date": "27 May, 2023",
    "image": "https://img.tradeford.com/pimages/l/7/941967.jpg"
  },
  {
    "date": "27 May, 2023",
    "image": "https://img.tradeford.com/pimages/l/7/941967.jpg"
  }
]