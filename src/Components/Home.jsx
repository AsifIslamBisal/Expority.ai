import React from 'react';

import Agent from './Agent.jsx';
import HeroSection from './HeroSection/HeroSection.jsx';
import BrandSlider from './BrandSlider.jsx';
import Refined from './Refined.jsx';
import Contact from './Contact.jsx';
import Services from './Services/Services.jsx';
import FeatureCardsSlider from './Services/FeatureCardsSlider.jsx';

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <BrandSlider/>
            <Services/>
            <FeatureCardsSlider/>
            <Agent/>
            <Refined/>
            <Contact/>
            
            
        </div>
    );
};

export default Home;