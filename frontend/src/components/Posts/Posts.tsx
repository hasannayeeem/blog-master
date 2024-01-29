import React from 'react'
import usePosts from '../../hooks/usePosts'
import Post from './Post';

import Share from '../shared/Share';
import Rightbar from '../shared/Rightbar';

const Posts = () => {
    const [posts] = usePosts([]);
    // console.log(posts);

  return (
    <div>
        <h1>Posts</h1>
        <div className='home_page min-h-[90%]' >
          <div className="main_content flex gap-x-10 w-full">
                <Share/>
                <Rightbar />
          </div>
            {
              posts.map((post) => <Post key={post.id} post={post}/>)

            }
        </div>

    </div>
  )
}

export default Posts;