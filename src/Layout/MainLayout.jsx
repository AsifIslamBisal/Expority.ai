import React from 'react';
import Navbar from '../Components/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer.jsx';


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className='mt-10'>
                <Outlet/>
                <Footer/>
            </div>
        </div>
    );
};

export default MainLayout;