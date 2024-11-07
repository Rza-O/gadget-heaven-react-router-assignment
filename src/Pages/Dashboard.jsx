import React from 'react';
import Banner from '../Components/Banner';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <Banner title='Dashboard' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;