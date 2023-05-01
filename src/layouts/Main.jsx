import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <NavigationBar/>
            <Outlet/>
        </div>
    );
};

export default Main;