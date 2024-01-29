import React from 'react';
import Nav from '../components/shared/Nav';
import Sidebar from '../components/shared/Sidebar';

const Main = ({ children, isThisAddBlog }) => {
    return (
        <div className={`main ${isThisAddBlog ? "!pl-10" : "px-10"}`}>
            {/* <Nav/> */}
            {/* <div className="container flex mx-auto gap-x-10"> */}
            <div className=" flex  gap-x-10">
                <Sidebar/>
                {/* <div style={{ flex: 1 }}> */}
                <div style={{ flex: 4 }}>
                {/* <div className='content'> */}
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Main;