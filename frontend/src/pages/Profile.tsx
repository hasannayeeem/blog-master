import React from 'react'
import Sidebar from '../components/shared/Sidebar'
import ProfileRightBar from './ProfileRightBar'
import Share from '../components/shared/Share'


const Profile = () => {

  return (
    <div className='profile -ml-10'>
       {/* <div className="container mx-auto"></div> */}
      <div className='profile_wrapper'>
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
          
          <div className="profile_right_bottom">
            <Share/>
           <ProfileRightBar/>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Profile