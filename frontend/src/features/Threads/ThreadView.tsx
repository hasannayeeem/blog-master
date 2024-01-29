import React from 'react'
import { useSelector } from 'react-redux'
import SingleThread from './SingleThread';


const ThreadView = () => {
    //@ts-ignore
    const threads: any = useSelector((state) => state.threadReducer.threads)
    console.log(threads);

  return (
    <div className='thread_view_section'>
        {

          threads && threads.map((thread) => <SingleThread thread={thread} key={thread.id}></SingleThread>)
        }
    </div>
  )
}

export default ThreadView