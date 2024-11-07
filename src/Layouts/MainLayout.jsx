import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className='bg-[#f7f7f7]'>
            <Navbar></Navbar>
            <Toaster />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;