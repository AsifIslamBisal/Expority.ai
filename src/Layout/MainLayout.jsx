import React from 'react';
import Navbar from '../Components/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer.jsx';


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <Outlet/>
                <Footer/>
            </div>
        </div>
    );
};

export default MainLayout;