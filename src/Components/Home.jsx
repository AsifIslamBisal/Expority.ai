import React from 'react';

import Agent from './Agent.jsx';
import HeroSection from './HeroSection/HeroSection.jsx';
import BrandSlider from './BrandSlider.jsx';
import Refined from './Refined.jsx';
import Contact from './Contact.jsx';
import Services from './Services/Services.jsx';
import FeatureCardsSlider from './Services/FeatureCardsSlider.jsx';
import CalendlyPage from '../Pages/CalendlyPage.jsx';

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <BrandSlider/>
            <Services/>
            <FeatureCardsSlider/>
            <Agent/>
            <Refined/>
            <CalendlyPage/>
            
            
        </div>
    );
};

export default Home;