import React from 'react';
import { useLocation } from 'react-router-dom';

const Banner = ({title, subtitle}) => {
    const location = useLocation();
    const isDetails = location.pathname.startsWith('/details/')
    return (
        <div>
            <div className='w-11/12 mx-auto text-white'>
                <div className='text-center  space-y-4 pb-72 pt-12 bg-primary'>
                    <div className='relative space-y-4'>
                        <h1 className='font-bold text-[32px]'>{title}</h1>
                        <p className=''>{subtitle}</p>
                        {isDetails || <button className='btn rounded-3xl py-4 px-7 text-primary'>Shop Now</button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;