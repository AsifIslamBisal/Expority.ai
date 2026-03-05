import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Assets/Icons imports (kept exactly same)
import SalesAutomation from '../../assets/Services/Sales Automation.svg'
import CRMWorkflow from '../../assets/Services/CRM & Workflow Automation.svg'
import AIAgents from '../../assets/Services/AI Agents.svg'
import LeadQualification from '../../assets/Services/Lead Qualification.svg'
import AppointmentBooking from '../../assets/Services/Appointment Booking.svg'

const FeatureCardsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left
  const [hoveredCard, setHoveredCard] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const navigate = useNavigate();

  const features = [
    { icon: SalesAutomation, title: "Sales Automation", description: "Sales Automation is the use of technology to automate repetitive sales tasks like lead capture, follow-ups, pipeline tracking, and reporting.", cta: "Learn More", link: "/Solutions/sales-automation" },
    { icon: CRMWorkflow, title: "CRM & Workflow Automation", description: "Powerful automation that streamlines processes, manages customer data, and eliminates repetitive tasks completely.", cta: "Learn More", link: "/Solutions/crm-automation" },
    { icon: AIAgents, title: "AI Agents", description: "Intelligent chatbots that engage customers 24/7, answer questions instantly, and provide personalized support across all your channels.", cta: "Learn More", link: "/Solutions/ai-Agent" },
    { icon: LeadQualification, title: "Lead Qualification", description: "Smart AI that identifies high-quality prospects, scores leads automatically, and routes them to the right team members.", cta: "Learn More", link: "/Solutions/leadQualification" },
    { icon: AppointmentBooking, title: "Appointment Booking", description: "Automated scheduling system that books meetings, sends confirmations, and syncs with your calendar effortlessly.", cta: "Book a Demo", link: "/booking" },
  ];

  const handleCtaClick = (feature) => {
    navigate(feature.link);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  // Variants for smooth sliding
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  // Logic to show 3 cards at once in Desktop
  const getVisibleIndices = () => {
    return [
      currentSlide,
      (currentSlide + 1) % features.length,
      (currentSlide + 2) % features.length,
    ];
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (window.innerWidth < 768) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

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
        
        {/* Header (Keep same) */}
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

        {/* Desktop View */}
        <div className="hidden md:block relative px-12">
          <button 
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 text-cyan-300 hover:text-cyan-500 transition-colors"
          >
            <ChevronLeft size={48} />
          </button>
          
          <div className="grid grid-cols-3 gap-6 mb-12 min-h-[400px]">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              {getVisibleIndices().map((idx, i) => {
                const feature = features[idx];
                return (
                  <motion.div
                    key={`${idx}-${i}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`${
                      hoveredCard === idx
                        ? 'bg-gradient-to-br from-blue-500 via-cyan-400 to-cyan-300 scale-105'
                        : 'bg-white'
                    } rounded-3xl p-8 shadow-lg transition-all duration-300 h-full cursor-pointer flex flex-col justify-between`}
                  >
                    <div>
                      <div className={`${hoveredCard === idx ? 'bg-white' : 'bg-blue-100'} w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto`}>
                        <img src={feature.icon} alt={feature.title} className="w-10 h-10 object-contain" />
                      </div>
                      <h3 className={`text-xl font-semibold mb-4 text-center ${hoveredCard === idx ? 'text-gray-900' : 'text-gray-800'}`}>
                        {feature.title}
                      </h3>
                      <p className={`text-sm mb-4 text-center ${hoveredCard === idx ? 'text-gray-800' : 'text-gray-600'}`}>
                        {feature.description}
                      </p>
                    </div>
                    <div className="text-center">
                      <button onClick={() => handleCtaClick(feature)} className={`${hoveredCard === idx ? 'text-gray-900' : 'text-blue-600'} font-medium`}>
                        {feature.cta} →
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <button 
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-cyan-300 hover:text-cyan-500 transition-colors"
          >
            <ChevronRight size={48} />
          </button>
        </div>

        {/* Phone View (Swipeable with Animation) */}
        <div 
          className="md:hidden relative mb-12 overflow-hidden px-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="min-h-[350px] flex items-center justify-center relative">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="w-full absolute"
              >
                <div className="bg-white rounded-2xl p-8 shadow-md border border-cyan-50 text-center mx-2">
                  <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <img src={features[currentSlide].icon} alt={features[currentSlide].title} className="w-10 h-10 object-contain" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">{features[currentSlide].title}</h3>
                  <p className="text-xs text-gray-600 mb-4">{features[currentSlide].description}</p>
                  <button onClick={() => handleCtaClick(features[currentSlide])} className="text-blue-600 font-bold text-xs">{features[currentSlide].cta} →</button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Dots (Keep same) */}
        <div className="flex justify-center gap-3">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-cyan-400 w-8' : 'bg-cyan-200 hover:bg-cyan-300 w-3'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCardsSlider;