import React from 'react';
import time from '../assets/time.png'
import number from '../assets/247.png'
import growth from '../assets/growth.png'
import automated from '../assets/automated.png'
import { Clock, TrendingUp, Clock3, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

const Refined = () => {
    return (
        <div className=" bg-linear-to-br from-white via-cyan-50/30 to-white px-6 py-16 lg:px-20">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                    <div className="text-left">
  <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight sm:leading-snug">
    Refined for
  </h2>
  <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight sm:leading-snug">
    <span className="bg-linear-to-r from-cyan-400 to-blue-500 text-white px-2 sm:px-3 py-1 rounded-md inline-block">
      Maximum Impact
    </span>
  </h2>
</div>

                    
                    <p className="text-gray-700 text-base leading-relaxed max-w-md">
                        Our solutions are optimized to maximize efficiency, boost conversions, and drive measurable growth. They streamline workflows, reduce manual effort, and ensure every lead and opportunity is fully leveraged.
                    </p>

                    <div className="flex gap-4 pt-4">
    {/* Learn More Button */}
    <button className="border-2 bg-[#3b82f6] hover:border-gray-400 text-white px-5 py-1.5 text-sm md:px-8 md:py-3 md:text-base rounded-full font-medium transition-colors">
        Learn More
    </button>

    {/* Contact Us Button */}
    
        <button className="border-2 bg-[#3b82f6] hover:border-gray-400 text-white px-3 py-1.5 text-sm md:px-8 md:py-3 md:text-base rounded-full font-medium transition-colors">
            Book a Demo
        </button>
    
</div>
                </div>

               {/* Right Features Grid */}
<div className="relative">
    {/* Vertical Line */}
    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-300 -translate-x-1/2"></div>
    {/* Horizontal Line */}
    <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-300 -translate-y-1/2"></div>
    
    <div className="grid grid-cols-2">
        {/* Feature 1 */}
        <div className="p-4 md:p-10 text-center flex flex-col items-center justify-center">
            {/* Mobile icon container w-10, Desktop w-16 */}
            <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center mb-2 md:mb-4">
                <img className="w-7 h-7 md:w-10 md:h-10" src={time} alt="" />
            </div>
            {/* Mobile text text-[10px], Desktop text-sm */}
            <h3 className="font-medium text-gray-900 text-[10px] md:text-sm">Save Time on</h3>
            <h3 className="font-medium text-gray-900 text-[10px] md:text-sm">Repetitive Tasks</h3>
        </div>

        {/* Feature 2 */}
        <div className="p-4 md:p-10 text-center flex flex-col items-center justify-center">
            <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center mb-2 md:mb-4">
                <img className="w-7 h-7 md:w-10 md:h-10" src={growth} alt="" />
            </div>
            <h3 className="font-medium text-gray-900 text-[10px] md:text-sm">Scale</h3>
            <h3 className="font-medium text-gray-900 text-[10px] md:text-sm">without Hiring</h3>
        </div>

        {/* Feature 3 */}
        <div className="p-4 md:p-10 text-center flex flex-col items-center justify-center">
            <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center mb-2 md:mb-4">
                <img className="w-7 h-7 md:w-10 md:h-10" src={number} alt="" />
            </div>
            <h3 className="font-medium text-gray-900 text-[10px] md:text-sm">24/7</h3>
            <h3 className="font-medium text-gray-900 text-[10px] md:text-sm">Availability</h3>
        </div>

        {/* Feature 4 */}
        <div className="p-4 md:p-10 text-center flex flex-col items-center justify-center">
            <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center mb-2 md:mb-4">
                <img className="w-8 h-8 md:w-12 md:h-12" src={automated} alt="" />
            </div>
            <h3 className="font-medium text-gray-900 text-[10px] md:text-sm">Automate your</h3>
            <h3 className="font-medium text-gray-900 text-[10px] md:text-sm">Workflows</h3>
        </div>
    </div>
</div>
            </div>
        </div>
    );
};

export default Refined;