import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
// import { Link } from 'react-router-dom';

const Event = ({ event }) => {
  if (!event) return <div>Loading</div>;
  const { title, picture, id, body } = event;
  console.log(event);
  
  return (
    <div>
      <div
        className={`${"bg-white border-white border"
        } max-w-sm shadow-lg transform hover:scale-105 transition duration-500 rounded-xl `}
      >
        <div className="relative">
          <img
            className="w-full h-52 rounded-t-xl object-cover"
            src={picture}
            alt="Colors"
          />
        </div>
        <div className="p-5">
          <h1
            className={`${"text-gray-800"
            } text-2xl font-bold cursor-pointer`}
          >
            {title}
          </h1>
          <p>{body}</p>
          {/* <Link to={`/details/${_id}`} className='d-block'> */}
          <button
            id="interestedBtn"
            className="mt-8 text-xl w-full border-2 flex items-center justify-center border-[#0D9488] text-[#0D9488] bg-white py-2 rounded shadow-lg font-semibold hover:bg-[#0D9488] hover:text-white duration-500"
          >
            <span>Interested</span>
            <div className="relative">
              <AiOutlineStar className="ml-2"></AiOutlineStar>
              <AiFillStar className="absolute top-[1.8px] text-white left-[6.8px] text-[9px]"></AiFillStar>
            </div>
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Event;
