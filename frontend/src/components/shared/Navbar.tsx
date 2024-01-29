import React from 'react'
// import './Navbar.css'
import { BiHomeAlt2 } from 'react-icons/bi';
import { MdEventNote } from 'react-icons/md';
import { GrMail } from 'react-icons/gr';
import { RiContactsBookFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <div className="shadow-lg navbar bg-base-100 lg:px-20">
                <div className="">
                    <Link to='/'>
                        <span className="text-2xl font-extrabold normal-case btn btn-ghost">Blog-Master</span>
                    </Link>
                </div>
                <div>
                    <ul className="flex">
                        <li className="py-2 text-sm font-medium text-current rounded-md px-7 hover:text-white hover:bg-gray-700">
                            <a className='nav_link' href="#"><BiHomeAlt2 className='nav_menu_icon'/> Crowd</a>
                        </li>
                        <li className="py-2 text-sm font-medium text-current rounded-md px-7 hover:text-white hover:bg-gray-700">
                        <a className='nav_link' href="#"><MdEventNote className='nav_menu_icon'/> Event</a>
                        </li>
                        <li className="py-2 text-sm font-medium text-current rounded-md px-7 hover:text-white hover:bg-gray-700">
                        <a className='nav_link' href="#"><GrMail className='nav_menu_icon'/> Mail</a>
                        </li>
                        <li className="py-2 text-sm font-medium text-current rounded-md px-7 hover:text-white hover:bg-gray-700">
                        <a className='nav_link' href="#"><RiContactsBookFill className='nav_menu_icon'/> Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="flex-none gap-2">
                    <div className="border border-gray-300 rounded-md form-control">
                        <input type="text" placeholder="Search" className=" input input-bordered" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img className='navbar_img' src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link to='/profile/userId' className="justify-between">Profile </Link>
                            </li>
                            <li>
                                <Link to='/login'>Logout </Link>
                            </li>
                            {/* <li><a>Logout</a></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
