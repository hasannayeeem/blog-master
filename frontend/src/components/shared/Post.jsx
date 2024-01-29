import React, { useState } from 'react'
import { Users } from '../../data';

import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiTwotoneLike } from 'react-icons/ai';
import { BiLike } from 'react-icons/bi';
import { MdFavorite } from 'react-icons/md';
import { BiComment } from 'react-icons/bi';
import { FiShare2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const Post = ({ post }) => {
    console.log(post.like);

    const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
    return (
        <div className='post'>
            <div className='post_wrapper'>
                <div className='post_top'>
                    <div className='post_top_left'>
                        <Link to="/profile/userId">
                        <img className='post_profile_img' src={Users.filter((user) => user.id === post.userId)[0].profilePicture} alt="" />
                        </Link>
                        <span className='post_username'>{Users.filter((user) => user.id === post.userId)[0].username}</span>
                        <span className='post_date'>{post.date}</span>
                    </div>
                    <div className='post_top_right'>
                        <button>
                            <BsThreeDotsVertical className='post_icon' />
                        </button>
                    </div>
                </div>
                <div className='post_center'>
                    <span className="post_text">{post?.body}</span>
                    <img className='post_img' src={post.photo} alt="" />
                </div>
                <div className='post_bottom'>
                    <div className='post_bottom_left'>
                       <span className='post_bottom_icon_bg' style={{ backgroundColor:'red'}} ><MdFavorite className='post_bottom_icon'/></span>
                       <span className='post_bottom_icon_bg' style={{ backgroundColor:'blue'}} > <AiTwotoneLike className='post_bottom_icon'/></span>
                        <span className='post_like_counter'>{like}</span>
                    </div>
                    <div className='post_bottom_right'>
                        <span className='post_comment_text'>{post.comment} . comments . share</span>
                    </div>
                </div>



                <hr className="footerHr" />
                <div className="post_bottom_footer">
                    <div className="post_bottom_footer_item" onClick={likeHandler}>
                        <BiLike className="post_footer_icon" />
                        <span className="post_footer_text">Like</span>
                    </div>
                    <div className="post_bottom_footer_item">
                        <BiComment className="post_footer_icon" />
                        <span className="post_footer_text">Comment</span>
                    </div>
                    <div className="post_bottom_footer_item">
                        <FiShare2 className="post_footer_icon" />
                        <span className="post_footer_text">Share</span>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Post;