import React from 'react'
import { MdDriveFolderUpload } from 'react-icons/md';
import Sidebar from '../components/shared/Sidebar';



const EditProfile = () => {
  return (
    <div className='edit_profile -ml-10'>
       <div className="edit_profile_wrapper">
            {/* <Sidebar/> */}
            <div className='profile_right'>
                <div className="profile_right_top">
                <div className="profile_cover">
                    <img className='profile_cover_img' src="https://images.unsplash.com/photo-1570264878711-8500505a92db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />
                    <img className='profile_user_img' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
                </div>
                
                <div className='profile_info'>
                        <h4 className='profile_user_name'>Humaira Akila</h4>
                        <span className='profile_user_desc'>Hi Friends!</span>
                    </div>
                </div>
          
          
                <div className="edit_profile_right_bottom">
                    <div className='edit_profile_top'>
                        <h1 className='edit_user_title'>Edit User Profile</h1>
                    </div>
                    <div className='edit_profile_bottom'>
                        <div className="edit_profile_left_content">
                            <img className='edit_profile_img' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                        </div>
                        <div className="edit_profile_right_content">
                            <form className='edit_profile_form'>
                                <div className="form_input">
                                    <label className='form_input_label' htmlFor="file">
                                        Image: <MdDriveFolderUpload className="image_folder_icon"/>
                                    </label>
                                    <input className='form_input_field' type="file" id="file" style={{ display: "none" }}/>
                                </div>
                                <div className="form_input">
                                    <label className='form_input_label'>Name</label>
                                    <input className='form_input_field' type="text" placeholder="Humaira Akila" />
                                </div>
                                <div className="form_input">
                                    <label className='form_input_label'>Username</label>
                                    <input className='form_input_field' type="text" placeholder="humaira_akila" />
                                </div>
                                <div className="form_input">
                                    <label className='form_input_label'>Email</label>
                                    <input className='form_input_field' type="email" placeholder="abc@gmail.com" />
                                </div>
                                <div className="form_input">
                                    <label className='form_input_label'>Phone</label>
                                    <input className='form_input_field' type="text" placeholder="+1 23 456 789" />
                                </div>
                                <div className="form_input">
                                    <label className='form_input_label'>Address</label>
                                    <input className='form_input_field' type="text" placeholder="sylhet, Bangladesh"/>
                                </div>
                                <div className="form_input">
                                    <label className='form_input_label'>Country</label>
                                    <input className='form_input_field' type="text" placeholder="Bangladesh" />
                                </div>
                                <button type="submit" className="update_button">
                                    Update Profile
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default EditProfile