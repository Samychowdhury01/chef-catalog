import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import LoadingSpinner from '../pages/Shared/LoadingSpinner/LoadingSpinner';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';

const Main = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setLoading(false);
    }, []);

    if(loading){
      return <LoadingSpinner/>
    }
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