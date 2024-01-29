import React from 'react'
import { FcLike } from 'react-icons/fc';
import { FaCommentAlt } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { loveCountDecrement, loveCountIncrement } from './ThreadSlice';
import EditThread from './EditThread';


const SingleThread = ({thread}) => {
    const {id,threadText,image,username,usertitle,date,loveCount,disabled,comments} = thread;
    console.log(thread);

    const dispatch = useDispatch();

    const handleLikeCount = (id)=>{
        if(!disabled){
            dispatch(loveCountIncrement(id))
        }
        if(disabled){
            dispatch(loveCountDecrement(id))
        }
    }

  return (
    <div className='single_thread'>
            <div className='single_thread_top'>
                <div className='single_thread_top_left'>
                    <img className='single_thread_profile_img' src={image} alt="" />
                    <div className='single_thread_user_info'>
                        <h2 className='single_thread_username'>{username}</h2>
                        <span className='single_thread_user_title'>{usertitle}</span>
                    </div>
                </div>
                <div className='single_thread_top_right'>
                    <span className='single_thread_date'>posted {date} ago</span>
                </div>
            </div>

            <div className='single_thread_text_content'>
                <p className='single_thread_text'>{threadText}</p>
            </div>
            <div className='love-comment-content'>
                {
                    loveCount > 0 && <div className='love_count'>
                    <span className='love_icon_btn' >
                        <FcLike/>
                    </span>
                    <p>{loveCount} Likes</p>
                </div>
                }
                <div className='single_thread_btm'>
                    <div className='single_thread_btm_left'>
                        <button className='love_btn' onClick={() => handleLikeCount(id)} style={disabled ? { color: '#FF7171' } : { color: '#67656B' }}>
                            <span className='love_icon-btn'>
                               <AiFillHeart/>
                            </span>
                        </button>
                        <button className='comment_btn'>
                            <span className='icon-btn'>
                                <FaCommentAlt/>
                            </span>
                            Add Response
                        </button>
                    </div>
                    <div>
                        <EditThread thread={thread}/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SingleThread