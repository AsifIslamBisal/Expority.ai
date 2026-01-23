import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, MessageCircle, Target, Calendar, Workflow } from 'lucide-react';

const FeatureCardsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const features = [
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "AI Chat Agents",
      description: "Intelligent chatbots that engage customers 24/7, answer questions instantly, and provide personalized support across all your channels.",
      cta: "Learn More"
    },
    {
      icon: <Phone className="w-12 h-12" />,
      title: "AI Voice Agents",
      description: "Natural-sounding voice AI that handles phone calls, schedules appointments, and delivers seamless customer experiences.",
      cta: "Book a Demo"
    },
    {
      icon: <MessageCircle className="w-12 h-12" />,
      title: "AI SMS Agents",
      description: "Automated text messaging that nurtures leads, sends reminders, and maintains engagement through conversational SMS.",
      cta: "Discover More"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Lead Qualification",
      description: "Smart AI that identifies high-quality prospects, scores leads automatically, and routes them to the right team members.",
      cta: "Learn More"
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Appointment Booking",
      description: "Automated scheduling system that books meetings, sends confirmations, and syncs with your calendar effortlessly.",
      cta: "Book a Demo"
    },
    {
      icon: <Workflow className="w-12 h-12" />,
      title: "CRM & Workflow Automation",
      description: "Powerful automation that streamlines processes, manages customer data, and eliminates repetitive tasks completely.",
      cta: "Discover More"
    }
  ];

  // Desktop-er jonno apnar original logic (unmodified)
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % features.length;
      cards.push({ ...features[index], originalIndex: index });
    }
    return cards;
  };

  // Mobile Auto-slide logic: 1 theke 2-e jabe, abar 1-e fire ashbe
  useEffect(() => {
    const timer = setInterval(() => {
      if (window.innerWidth < 768) {
        setCurrentSlide((prev) => (prev === 0 ? 1 : 0)); // Toggle between index 0 and 1
      }
    }, 5000); // 3 second por por slide hobe
    return () => clearInterval(timer);
  }, []);

  // Phone touch swap logic (if manual touch is needed)
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) setCurrentSlide(1); // Swipe left korle 2nd card
    if (distance < -50) setCurrentSlide(0); // Swipe right korle 1st card
  };

  return (
    <div className="bg-linear-to-br from-white via-cyan-50/30 to-white py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 leading-tight">
            AI Agents 
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            That Work Like Your Best Team Members
          </h2>
        </div>

        {/* --- Desktop View (No Change) --- */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-12">
          {getVisibleCards().map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`${
                hoveredCard === index
                  ? 'bg-gradient-to-br from-blue-500 via-cyan-400 to-cyan-300 scale-105'
                  : 'bg-white'
              } rounded-3xl p-8 shadow-lg transition-all duration-300 h-full`}
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
                <button className={`${hoveredCard === index ? 'text-gray-900' : 'text-blue-600'} font-medium`}>
                  {feature.cta} →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- Phone View (Slide 1 to 2 then back to 1) --- */}
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
            {/* Displaying first two features for the 1-2-1 loop */}
            {features.slice(0, 6).map((feature, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <div className="bg-white rounded-2xl p-8 shadow-md border border-cyan-50 text-center">
                  <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <div className="text-blue-600">{feature.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-xs text-gray-600 mb-6">{feature.description}</p>
                  <button className="text-blue-600 font-bold text-xs">{feature.cta} →</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3">
          {/* Mobile-e sudhu 2ta dot dekhate chaile slice korte paren, ba sob thakte pare */}
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