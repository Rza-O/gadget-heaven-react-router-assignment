import React from 'react';
import { Link, matchPath, NavLink, useLocation } from 'react-router-dom';

const Banner = ({ title, subtitle }) => {
    const location = useLocation();
    const isDetails = location.pathname.startsWith('/details/');
    const isDashboard = location.pathname.startsWith('/dashboard');
    return (
        <div>
            <div className='w-full text-white'>
                <div className={`text-center bg-primary space-y-4 ${isDashboard?'pb-8 ':'pb-72'} pt-12 `}>
                    <div className='relative space-y-4'>
                        <h1 className='font-bold text-[32px]'>{title}</h1>
                        <p className=''>{subtitle}</p>
                        {isDetails || <NavLink className={({ isActive }) => `${isActive ? 'btn rounded-3xl py-4 px-16 text-primary' : ' text-white rounded-3xl py-4 px-16 border'}`} to='/dashboard' end>Cart</NavLink>}
                        {isDetails || <NavLink className={({ isActive }) => `${isActive ? 'btn rounded-3xl py-4 px-16 text-primary' : ' text-white rounded-3xl py-4 px-16 border'}`} to='/dashboard/wishlist'>Wishlist</NavLink>}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;