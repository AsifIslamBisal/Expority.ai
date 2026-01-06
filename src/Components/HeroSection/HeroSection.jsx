import React from 'react';
import robotImg from "../../assets/Ai Bot.png";
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-linear-to-br from-white via-cyan-50/30 to-white flex items-center justify-center overflow-hidden px-6 md:px-12 lg:px-20 py-16">
      
      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-200/15 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Section */}
        <div className="lg:col-span-3 flex flex-col items-center lg:items-start justify-end h-full">
          <div className="text-center lg:text-left mb-auto mt-16">
            <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-gray-200 rounded-2xl p-3 mb-4 bg-white shadow-sm">
              <div className="flex items-end justify-center gap-0.5 h-full">
                <div className="w-1.5 h-4 bg-cyan-400 rounded-full"></div>
                <div className="w-1.5 h-6 bg-cyan-400 rounded-full"></div>
                <div className="w-1.5 h-3 bg-cyan-400 rounded-full"></div>
                <div className="w-1.5 h-5 bg-cyan-400 rounded-full"></div>
                <div className="w-1.5 h-4 bg-cyan-400 rounded-full"></div>
              </div>
            </div>
            <p className="text-xs tracking-[0.25em] text-gray-500 font-medium mb-1">
              AI-POWERED
            </p>
            <h2 className="text-sm tracking-[0.15em] text-gray-700 font-semibold">
              SALES AGENT
            </h2>
          </div>

          {/* Cyan vertical line — desktop only */}
          <div className="hidden lg:block w-0.5 h-28 bg-cyan-400 rounded-full mb-40"></div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-4">
            {["Lead Generation", "CRM", "SMM"].map((text) => (
              <button
                key={text}
                className="px-6 py-2.5 text-xs font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 hover:border-gray-400 transition-all"
              >
                {text}
              </button>
            ))}
          </div>
        </div>

        {/* Center Section */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          
          {/* Social Icons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-20">
            <a 
              href="https://www.facebook.com/share/14VkXSqMYvT/?mibextid=wwXIfr" 
              className="w-12 h-12 rounded-full ml-2 bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://www.instagram.com/expority_marketing?igsh=OHY3YTAza2x0azZt" 
              className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/company/exmarketing/" 
              className="w-12 h-12 rounded-full ml-3 bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Robot Image */}
          <div className="relative w-full max-w-md md:max-w-lg mt-10 lg:mt-0 lg:ml-12">
            <style>
              {`
                @keyframes float {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-20px); }
                }
                .floating {
                  animation: float 3s ease-in-out infinite;
                }
              `}
            </style>
            <div className="relative">
              <img 
                src={robotImg}
                alt="AI Robot" 
                className="w-full h-auto drop-shadow-2xl floating"
              />
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-4 space-y-8 text-center lg:text-left pb-5 lg:-ml-10"> 
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight bg-linear-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
              AI Automation That Turns <br /> Conversations Into Revenue
            </h1>

            <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-sm mx-auto lg:ml-20 lg:mx-0">
              Expority builds AI-powered agents and automation systems that handle lead engagement, qualification, follow-up, and booking for service-based businesses — 24/7, without adding headcount.
            </p>
          </div>

          {/* Stats */}
          <div className="space-y-6 lg:ml-20">
            {[
              { label: "Qualified Lead", value: "78%" },
              { label: "Reach", value: "1M+" },
            ].map((item) => (
              <div key={item.label} className="flex items-baseline gap-3 justify-center lg:justify-start">
                <div className="w-2 h-2 rounded-full bg-gray-800 mt-2"></div>
                <div>
                  <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider">{item.label}</p>
                  <h2 className="text-5xl md:text-6xl text-gray-900">{item.value}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
