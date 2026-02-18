import React, { useState, useEffect } from 'react';
import robotImg from "../../assets/Ai Bot.png";

const HeroSection = () => {
  
  const [leadCount, setLeadCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 78;
    const duration = 2000; 
    const stepTime = 20;
    const increment = end / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setLeadCount(end);
      } else {
        setLeadCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-linear-to-br from-white via-cyan-50/30 to-white flex items-center justify-center overflow-hidden px-6 md:px-12 lg:px-20 py-10 lg:py-0 h-auto lg:h-screen">
      
      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-200/15 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Section */}
        <div className="lg:col-span-3 flex flex-col items-center lg:items-start justify-end h-full">
          <div className="hidden sm:block text-center lg:text-left mb-auto mt-15 animate-fadeInUp">
            <div className="inline-flex items-center justify-center w-26 h-20 border-2 border-gray-200 rounded-2xl p-3 mb-4 bg-white shadow-sm animate-bounce-slow">
              <div className="flex items-end justify-center gap-2 h-full">
                <div className="w-1.5 h-8 bg-cyan-400 rounded-full"></div>
                <div className="w-1.5 h-10 bg-cyan-400 rounded-full"></div>
                <div className="w-1.5 h-7 bg-cyan-400 rounded-full"></div>
                <div className="w-1.5 h-9 bg-cyan-400 rounded-full"></div>
                <div className="w-1.5 h-8 bg-cyan-400 rounded-full"></div>
              </div>
            </div>
            <p className="text-xs tracking-[0.25em] text-gray-500 font-medium mb-1 animate-fadeInUp delay-200">
              AI-POWERED
            </p>
            <h2 className="text-sm tracking-[0.15em] text-gray-700 font-semibold animate-fadeInUp delay-300">
              SALES AGENT
            </h2>
          </div>

          {/* Stats */}
          <div className="hidden sm:block space-y-6 mt-6">
            {/* Qualified Lead */}
            <div
              className="flex items-baseline gap-3 justify-center lg:justify-start animate-fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-2 h-2 rounded-full bg-gray-800 mt-2"></div>
              <div>
                <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider">
                  Qualified Lead
                </p>
                <h2 className="text-5xl md:text-6xl text-gray-900">
                  {leadCount}%
                </h2>
              </div>
            </div>

            {/* Reach (Static) */}
            <div
              className="flex items-baseline gap-3 justify-center lg:justify-start animate-fadeInUp"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="w-2 h-2 rounded-full bg-gray-800 mt-2"></div>
              <div>
                <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider">
                  Reach
                </p>
                <h2 className="text-5xl md:text-6xl text-gray-900">1M+</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Center Section */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl -mt-10 lg:-mt-20 lg:ml-8">
            <style>
              {`
                @keyframes float {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-15px); }
                }
                .floating {
                  animation: float 3s ease-in-out infinite;
                }
                @keyframes fadeInUp {
                  0% { opacity: 0; transform: translateY(30px); }
                  100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeInUp {
                  animation: fadeInUp 1s ease forwards;
                }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }
                .bounce-slow {
                  animation: bounce 3s ease-in-out infinite;
                }
              `}
            </style>
            <div className="relative animate-fadeInUp delay-300">
              <img 
                src={robotImg}
                alt="AI Robot" 
                className="w-full h-auto scale-105 floating"
              />
              {/* Shadow */}
              <div className="absolute bottom-[-18px] left-0 right-0 h-28 bg-linear-to-t from-white via-white/95 to-transparent"></div>
              <div className="absolute bottom-[-10px] left-0 right-0 h-24 bg-linear-to-t from-cyan-50/60 via-white/90 to-transparent blur-[45px] opacity-70"></div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-4 space-y-8 text-center lg:text-left pb-5 lg:-ml-10 mt-4 sm:mt-6 lg:-mt-36 animate-fadeInUp delay-400">
          <div>
            <h1
              className="font-bold leading-snug 
                        bg-linear-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent 
                        inline-block mx-auto lg:mx-0"
              style={{ fontSize: "clamp(1.8rem, 3.2vw, 3.2rem)", maxWidth: "fit-content" }}
            >
              <span className="block whitespace-nowrap">Turns Conversations</span>
              <span className="block whitespace-nowrap">Into Revenue</span>
            </h1>

            <p className="mt-4 text-sm text-gray-700 leading-relaxed max-w-sm mx-auto lg:ml-20 lg:mx-0 animate-fadeInUp delay-500">
              Expority builds AI-powered agents and automation systems that handle lead engagement, qualification, follow-up, and booking for service-based businesses — 24/7, without adding headcount.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
