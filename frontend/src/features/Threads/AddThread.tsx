import React, { useState } from 'react'

import { Input, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addThreads } from './ThreadSlice';



const AddThread = () => {
    const[newThreads, setNewThreads] = useState("");
    const dispatch = useDispatch();

     //@ts-ignore
    // const thread = useSelector((state) => console.log(state.threadReducer.threads));
    //@ts-ignore
    const noOfThread = useSelector((state) => state.threadReducer.threads.length);
 
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
    setIsModalOpen(true);
    };
        
    const handleOk = (e) => {
    e.preventDefault();
    const thread = { id: noOfThread + 1, threadText: newThreads, comments: [], likeCount: 0, disabled: false };

    dispatch(addThreads(thread));
    setNewThreads('');
    
    setIsModalOpen(false);
    };
    
    const handleCancel = () => {
    setIsModalOpen(false);
    };


  return (
    <>
       <div>
          <div className='thread'>
                <div className='add_thread'>
                    <Input type="text" onClick={showModal} placeholder=" Add a new thread" className='input_field'/>
                </div>
                <Modal  open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Create Thread">
                <div className='single_thread_top'>
                    <img className='single_thread_profile_img' src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />
                    <h2 className='single_thread_username'>Username</h2>
                </div>
                  <form className='form_create'>
                      <input type="text" placeholder=' Add a new thread...' className='form_field' onChange={(e) => setNewThreads(e.target.value)} value={newThreads} required/>
                  </form>
                </Modal>
          </div>
       </div>  
    </>
  )
}

export default AddThread