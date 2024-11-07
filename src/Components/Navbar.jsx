import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from 'react-icons/fa';

const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/' || location.pathname.startsWith('/category');
    const isStats = location.pathname === '/details';
    const isDashboard = location.pathname === '/dashboard' || location.pathname.startsWith('/dashboard')
    const links = <>
        <li><Link className={`${isHomePage ? 'underline' : ''}`} to='/'>Home</Link></li>
        <li><Link className={`${isStats ? 'text-primary' : ''}`} to='/details'>Statistics</Link></li>
        <li><Link className={`${isDashboard ? 'text-primary' : ''}`} to='/dashboard'>Dashboard</Link></li>
    </>
    return (
        <div className={`${isHomePage ? 'bg-primary text-white mt-6 w-11/12 mx-auto rounded-t-3xl' : 'bg-white text-black'}`}>
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

        </div>
    );
};

export default Navbar;