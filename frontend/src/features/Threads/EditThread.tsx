import React, { useState } from 'react';
import { Modal } from 'antd';
import { GrFormClose } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { FcSettings } from 'react-icons/fc';
import { deleteThreads, updateThreads } from './ThreadSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EditThread = (props) => {
    const{id,threadText, loveCount, disabled} = props.thread;
    console.log(props);

    const [openEditModal, setOpenEditModal] = useState(false);
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editThread, setEditThread] = useState(threadText);
    const dispatch = useDispatch();



    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = (e) => {
        e.preventDefault();
        dispatch(updateThreads({id:id,threadText:editThread}));

        setIsModalOpen(false);
        setOpenEditModal(false)
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setOpenEditModal(false)
    };


  /*Edit Modal*/
  const handleThreadCloseModal = () => {
    setOpenEditModal(false);
  }
    
  const handleThreadModal = () => {
    setOpenEditModal(true)
  }

  
  /*Delete Thread*/
    const handleDeletePost = (id) => {
        // if (window.confirm('Are you sure that you want to delete??')) {
        //     dispatch(deleteThreads(id));
        // }
        dispatch(deleteThreads(id));
        toast("Thread is successfully deleted");
    }

    
  return (
    <>
        <div className='thread_modal'>
            {
                openEditModal ? 
                <button className='thread_modal_btn' onClick={handleThreadCloseModal}>
                    <GrFormClose/>
                </button>
                :
                <button className='thread_modal_btn' onClick={handleThreadModal}>
                    <FcSettings/> 
                </button>
            }
            
            {
                 openEditModal && 
                 <div className='modal_open'>
                     <ul className='modal_ul'>
                        <li className='modal_list'>
                            <button onClick={showModal} className="edit_btn">Edit Thread</button>
                            <Modal title="Edit Thread" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Edit Thread">
                            <form className='form_create'>
                                <input type="text" className='form_field'  value={editThread} onChange={(e) => setEditThread(e.target.value)} />
                            </form>
                            </Modal>
                        </li>
                        <li className='modal_list modal_item'>
                            <button onClick={() => handleDeletePost(id)} className="edit_btn">Delete Thread</button>
                        </li>
                    </ul>
                 </div> 
            }
            <ToastContainer />
        </div>
    </>
  )     
}

export default EditThread