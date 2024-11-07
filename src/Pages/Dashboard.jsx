import React, { useEffect } from 'react';
import Banner from '../Components/Banner';
import { Outlet } from 'react-router-dom';
import DocumentTitle from '../Utility/DocumentTitle';

const Dashboard = () => {
    DocumentTitle('Dashboard')
    return (
        <div>
            <Banner title='Dashboard' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;