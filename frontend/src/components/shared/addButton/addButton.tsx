import React from 'react';
import { FiPlus } from "react-icons/fi";
import "./addButton.css"

const AddButton = ({showModal}) => {
  return (
    <div className='relative]'>
      <div className='fixed bottom-5 right-5 md:bottom-10 md:right-10'>
        <button
        onClick={()=>showModal()}
          style={{boxShadow: "0px 9px 19px rgba(2, 119, 133, 0.25)"}}
          id="addButton"
          className={`addButton bg-[#027785] text-white p-[5px] transition duration-[.5s] rounded-full uppercase flex justify-center items-center`}>
          <FiPlus className="text-5xl md:text-6xl"/>
        </button>
      </div>
    </div>
  )
}

export default AddButton
