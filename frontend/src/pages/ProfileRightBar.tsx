import React from 'react'
import { Link } from 'react-router-dom'

const ProfileRightBar = () => {
  return (
    <div className='profileRightBar'>
        <div className='profileRightBar_heading'>
            <span className='profileRightBar_title'>User Information</span>
            <Link to='/profile/userId/edit'>
            <span className='profile_edit_btn'>Edit Profile</span>
            </Link>
        </div>

        <div className="profileRightBar_info">
            <div className="profileRightBar_info_item">
            <span className="profileRightBar_info_title">Email: </span>
            <span className="profileRightBar_info_value">abc@gmail.com</span>
            </div>
            <div className="profileRightBar_info_item">
                <span className="profileRightBar_info_title">Phone Number: </span>
                <span className="profileRightBar_info_value">+1 23 456 789</span>
            </div>
            <div className="profileRightBar_info_item">
                <span className="profileRightBar_info_title">Address: </span>
                <span className="profileRightBar_info_value">
                    sylhet, Bangladesh
                </span>
            </div>
            <div className="profileRightBar_info_item">
                <span className="profileRightBar_info_title">Country: </span>
                <span className="profileRightBar_info_value">Bangladesh</span>
            </div>
            <div className="profileRightBar_info_item">
                <span className="profileRightBar_info_title">Relationship: </span>
                <span className="profileRightBar_info_value">Single</span>
            </div>
      </div>
      
    </div>
  )
}

export default ProfileRightBar