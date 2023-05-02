import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <NavigationBar/>
            <div className='min-h-[calc(100vh-128px)]'>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;