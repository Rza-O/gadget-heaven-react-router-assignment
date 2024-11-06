import React from 'react';

const BannerHome = () => {
    return (
        <div className='mb-80 w-11/12 mx-auto text-white'>
            <div className='text-center  space-y-4 pb-72 pt-12 bg-primary rounded-b-3xl'>
                <div className='relative space-y-4'>
                    <h1 className='font-bold text-[56px]'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className=''>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</p>
                    <button className='btn rounded-3xl py-4 px-7 text-primary'>Shop Now</button>
                </div>
                <div className=' absolute w-full mx-auto h-[563px] left-0'>
                    <img src="/banner.jpg" alt="" className='w-[962px] rounded-3xl h-full mx-auto border p-5 backdrop-blur-xl' />
                </div>
            </div>
        </div>
    );
};

export default BannerHome;