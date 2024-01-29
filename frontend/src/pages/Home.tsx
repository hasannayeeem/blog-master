import React from "react";
import Sidebar from "../components/shared/Sidebar";
import Rightbar from "../components/shared/Rightbar";
import Feed from "../components/shared/feed";

const Home = () => {
  return (
    // <div className="home_page">
    //   <div className="container mx-auto">
    //     <div className="main_content">
    //       <Sidebar />
    //       <Feed />
    //       <Rightbar />
    //     </div>
    //   </div>
    // </div>

    <div className='home_page min-h-[90%]' >
      <div className="main_content flex gap-x-10 w-full">
            <Feed />
            <Rightbar />
        </div>
    </div>


  );
};

export default Home;
