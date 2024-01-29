import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import AddComment from "./AddComment";

function BlogComments() {
  return (
    <div className="p-28 py-14">
      <div className="bg-white rounded-xl p-5 shadow-lg">
        <h1 className="text-3xl text-black font-bold">Comments</h1>
        <AddComment />
        {/* Display Comments */}
        <div className="ml-[58px] mt-5" id="commentShow">
          <div>
            <div className="flex gap-2 mt-5">
              <img
                className="h-[35px] rounded-full"
                src="https://lh3.googleusercontent.com/a/AGNmyxZxcFP3APf4SZkCLm3AFkjIT-BhPlCunuuWs8op=s360"
                alt=""
              />
              <div>
                <p
                  className="py-3 px-5 min-w-[150px] outline-none bg-[#eeeeee] border-2 rounded-xl"
                  id="commentText"
                >
                  First Comment Here...
                </p>
                <div className="mt-3 flex ml-1 gap-5">
                  <button className="font-bold cursor-pointer">LIke</button>
                  <button className="font-bold cursor-pointer">Replay</button>
                </div>
              </div>
            </div>
            <div className="ml-[58px] mt-5">
              <div className="">
                <div className="flex gap-2 mt-5">
                  <img
                    className="h-[35px] rounded-full"
                    src="https://lh3.googleusercontent.com/a/AGNmyxZxcFP3APf4SZkCLm3AFkjIT-BhPlCunuuWs8op=s360"
                    alt=""
                  />
                  <div>
                    <p className="py-3 px-5 min-w-[150px] outline-none bg-[#eeeeee] border-2 rounded-xl">
                      First Comment Replayied Here...
                    </p>
                    <div className="mt-3 flex ml-1 gap-5">
                      <button className="font-bold cursor-pointer">LIke</button>
                      <button className="font-bold cursor-pointer">
                        Replay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogComments;
