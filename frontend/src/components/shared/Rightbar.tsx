import React from 'react'


const Rightbar = () => {
    return (
        <div className="right_content">
            {/* profile */}
            <div className='profile'>
                <h2 className='font-semibold profile_heading'>Profile</h2>
                <p className='profile_id'>ID: 15152020478</p>
            </div>
            <div className='profile_content'>
                <div className='profile_img_bg'>
                    <img className='object-cover w-full profile_img' src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
                </div>
                <h4 className='profile_name'>Rohim Karim</h4>
            </div>
            <div className='profile_details'>
                <p className='profile_details_para'>Foundation Engineer </p>
                <p className='profile_details_para'>General Member since 2018</p>
            </div>
            
            {/* upcoming_events */}
            <div className='upcoming_events_details'>
                <h2 className='upcoming_events_title'>Upcoming Events</h2>
                <div className='upcoming_events_schedule'>
                    <p className='upcoming_events_time'>4th February 2023</p>
                    <h3 className='upcoming_events_smtitle'>General Meeting</h3>
                </div>
                <div className='upcoming_events_schedule'>
                    <p className='upcoming_events_time'>28th March 2023</p>
                    <h3 className='upcoming_events_smtitle'>Iftar Mahfil</h3>
                </div>
            </div>
            
        </div>
    )
}

export default Rightbar