import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Toaster></Toaster>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;