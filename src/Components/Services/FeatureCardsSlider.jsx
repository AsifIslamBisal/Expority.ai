import React, { useState, useEffect } from 'react';
import {  Target, Calendar, Workflow, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { LuBrainCircuit } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { GrUserSettings } from 'react-icons/gr';

const FeatureCardsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const navigate = useNavigate()

  const features = [
    { icon: <GrUserSettings className="w-12 h-12" />, title: "Sales Automation", description: "Sales Automation is the use of technology to automate repetitive sales tasks like lead capture, follow-ups, pipeline tracking, and reporting.", cta: "Learn More", link: "/Solutions/sales-automation"  },
    { icon: <Workflow className="w-12 h-12" />, title: "CRM & Workflow Automation", description: "Powerful automation that streamlines processes, manages customer data, and eliminates repetitive tasks completely.", cta: "Learn More" },
    { icon: <LuBrainCircuit className="w-12 h-12" />, title: "AI Agents", description: "Intelligent chatbots that engage customers 24/7, answer questions instantly, and provide personalized support across all your channels.", cta: "Learn More",link: "/Solutions/ai-Agent" },
     { icon: <Target className="w-12 h-12" />, title: "Lead Qualification", description: "Smart AI that identifies high-quality prospects, scores leads automatically, and routes them to the right team members.", cta: "Learn More" },
    { icon: <Calendar className="w-12 h-12" />, title: "Appointment Booking", description: "Automated scheduling system that books meetings, sends confirmations, and syncs with your calendar effortlessly.", cta: "Book a Demo",link: "/booking" }, 
  ];

  const handleCtaClick = (feature) =>{
    navigate(feature.link);
  };

  // Desktop visible cards logic
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % features.length;
      cards.push({ ...features[index], originalIndex: index });
    }
    return cards;
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % features.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1));

  // Mobile Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      if (window.innerWidth < 768) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Touch handlers
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="bg-linear-to-br from-white via-cyan-50/30 to-white py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        
        {/* Header with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 leading-tight">
            Smart Automation Agents
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            That Execute Like Your Top Performers
          </h2>
        </motion.div>

        {/* Desktop View with Arrows */}
        <div className="hidden md:block relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 p-3 text-cyan-100  transition-all duration-300"
          >
            <ChevronLeft size={48} />
          </button>
          
          <div className="grid grid-cols-3 gap-6 mb-12">
            {getVisibleCards().map((feature, index) => (
              <motion.div
                key={`${feature.originalIndex}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`${
                  hoveredCard === index
                    ? 'bg-gradient-to-br from-blue-500 via-cyan-400 to-cyan-300 scale-105'
                    : 'bg-white'
                } rounded-3xl p-8 shadow-lg transition-all duration-300 h-full cursor-pointer`}
              >
                <div className={`${hoveredCard === index ? 'bg-white' : 'bg-blue-100'} w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto`}>
                  <div className={hoveredCard === index ? 'text-cyan-400' : 'text-blue-600'}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className={`text-xl font-semibold mb-4 text-center ${hoveredCard === index ? 'text-gray-900' : 'text-gray-800'}`}>
                  {feature.title}
                </h3>
                <p className={`text-sm mb-6 text-center ${hoveredCard === index ? 'text-gray-800' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
                <div className="text-center">
                  <button onClick={() => handleCtaClick(feature)} className={`${hoveredCard === index ? 'text-gray-900' : 'text-blue-600'} font-medium`}>
                    {feature.cta} →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 p-3 text-cyan-100  transition-all duration-300"
          >
            <ChevronRight size={48} />
          </button>
        </div>

        {/* Phone View (Swipeable All Cards) */}
        <div 
          className="md:hidden relative mb-12 overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {features.map((feature, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-md border border-cyan-50 text-center"
                >
                  <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <div className="text-blue-600">{feature.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-xs text-gray-600 mb-6">{feature.description}</p>
                  <button onClick={() => handleCtaClick(feature)} className="text-blue-600 font-bold text-xs">{feature.cta} →</button>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-cyan-400 w-8'
                  : 'bg-cyan-200 hover:bg-cyan-300 w-3'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCardsSlider;