import React from 'react';
import BannerHome from '../Components/BannerHome';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../Components/Categories';

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <BannerHome></BannerHome>
            <h1 className='mt-96 mb-12 text-center text-4xl text-primary font-bold'>Explore Cutting-Edge Gadgets</h1>
            <div className='w-11/12 mx-auto flex space-x-6'>
                <Categories categories={categories}></Categories>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;