import React from 'react';
import { Link } from 'react-router-dom';
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from 'react-icons/fa';

const Header = () => {
    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link>Statistics</Link></li>
        <li><Link>Dashboard</Link></li>
    </>
    return (
        <div className='bg-primary text-white'>
            <div className="navbar px-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Gadget Heaven </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-3">
                    <a className="btn rounded-full"><BsCart2 /></a>
                    <a className="btn rounded-full"><FaRegHeart /></a>
                </div>
            </div>
                <div className='text-center w-11/12 mx-auto space-y-4 pb-72 mt-12'>
                    <h1 className='font-bold text-[56px]'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className=''>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</p>
                    <button className='btn rounded-3xl py-4 px-7'>Shop Now</button>
                </div>
        </div>
    );
};

export default Header;