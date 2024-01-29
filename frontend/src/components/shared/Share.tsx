import React, { useState } from 'react';


import { FiVideo } from 'react-icons/fi';
import { MdPhotoLibrary } from 'react-icons/md';
import { BsFillEmojiSmileFill } from 'react-icons/bs';
// import Posts from '../Posts/Posts';
// import Post from '../Post/Post';
// import { Posts } from '../../data';


const Share = () => {
  const [file, setFile]= useState(null);
  const removeImage = ()=>{
    setFile(null);
  }
  return (
   <div className='share_post'>
     <div className='share'>
      <div className='share_wrapper'>
        <div className='shareTop'>
          <img className="share_profile_img"  src="https://images.unsplash.com/photo-1557555187-23d685287bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt="" />
          <input className='share_input' type="text" name='' id='' placeholder="What's on your mind ?"/>
        </div>
        <hr className="shareHr" />
        
        <div className='shareBottom'>
          <div className="share_options">
            <div className="share_option">
              <FiVideo className='share_icon' style={{ color: "#bb0000f2" }}/>
              <span className='share_option_text'>Live Video</span>
            </div>
            <div className="share_option">
              <MdPhotoLibrary className='share_icon' style={{ color: "#2e0196f1" }}/>
              <span className='share_option_text'>Photo/Video</span>
            </div>
            <div className="share_option">
              <BsFillEmojiSmileFill className='share_icon' style={{ color: "#bfc600ec" }}/>
              <span className='share_option_text'>Feelings/Activity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
      <div>
        {/* <Posts/> */}
        {
            // Posts.map((post) => <Post key={post.id} post={post}/>)
            
        }
      </div>
   </div>
  )
}

export default Share