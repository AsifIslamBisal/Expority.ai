import React, { useState } from 'react';
import { MessageSquare, Phone, MessageCircle, Target, Calendar, Workflow } from 'lucide-react';

const FeatureCardsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

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

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % features.length;
      cards.push({ ...features[index], originalIndex: index });
    }
    return cards;
  };

  return (
    <div className=" bg-linear-to-br from-white via-cyan-50/30 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 leading-tight">
            AI Agents 
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            That Work Like Your Best Team Members
          </h2>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {getVisibleCards().map((feature, index) => {
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`${
                  isHovered ? 'bg-linear-to-br from-blue-500 via-cyan-400 to-cyan-300' : 'bg-white '
                } rounded-3xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105`}
              >
                {/* Icon */}
                <div className={`${
                  isHovered ? 'bg-white' : 'bg-blue-100'
                } w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transition-all duration-300`}>
                  <div className={isHovered ? 'text-cyan-400' : 'text-blue-600'}>
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-xl font-semibold mb-4 text-center transition-colors duration-300 ${
                  isHovered ? 'text-gray-900' : 'text-gray-800'
                }`}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className={`text-sm mb-6 text-center leading-relaxed transition-colors duration-300 ${
                  isHovered ? 'text-gray-800' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>

                {/* CTA Button */}
                <div className="text-center">
                  <button className={`${
                    isHovered ? 'text-gray-900 hover:text-gray-700' : 'text-blue-600 hover:text-blue-700'
                  } font-medium text-sm transition-colors`}>
                    {feature.cta} →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-cyan-400 w-8'
                  : 'bg-cyan-200 hover:bg-cyan-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCardsSlider;