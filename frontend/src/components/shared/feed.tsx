import React from 'react'
import AddThread from '../../features/Threads/AddThread'
import ThreadView from '../../features/Threads/ThreadView'






const Feed = () => {
  return (
    <div className='feed' style={{ flex: 5 }}> 
      <div className='feed_wrapper'>
        <AddThread/>
        <ThreadView/>
      </div>
    </div>
  )
}

export default Feed