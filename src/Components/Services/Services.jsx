import React from "react";
import { CiMedicalCase } from "react-icons/ci";
import { FiTarget, FiUsers } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdElectricBolt, MdOutlineSupportAgent } from "react-icons/md";
import { TfiStatsUp } from "react-icons/tfi";

const Services = () => {
  const items = [
    { icon: <FiUsers />, title: "Coaches & Consultants" },
    { icon: <MdOutlineSupportAgent />, title: "Agencies & Service Businesses" },
    { icon: <IoSettingsOutline />, title: "Home Services" },
    { icon: <TfiStatsUp />, title: "Legal & Financial Firms" },
    { icon: <FiTarget />, title: "Real Estate & Mortgage" },
    { icon: <MdElectricBolt />, title: "High-Ticket Sales" },
    { icon: <CiMedicalCase />, title: "Medical & Wellness" },
  ];

  return (
    <div className="bg-linear-to-br from-white via-cyan-50/30 to-white py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-bold text-gray-900 leading-tight text-[clamp(1.8rem,3.2vw,3.2rem)]">
  Built for Service-Based Businesses
</h1>
        <p className="text-gray-700 mt-3">
          From coaches to contractors, we help service businesses automate their
          front office operations
        </p>
      </div>

     {/* Cards Grid */}
<div className="max-w-7xl mx-auto px-6">
  {/* Top 4 cards - Mobile-e grid-cols-2 dewa hoyeche */}
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 justify-items-center">
    {items.slice(0, 4).map((item, index) => (
      <div
        key={index}
        className="group relative bg-white rounded-2xl px-4 md:px-8 shadow-md flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-4 h-28 md:h-36 w-full md:w-72 overflow-hidden transition-all duration-300 hover:shadow-xl"
      >
        {/* Icon size mobile-e choto kora hoyeche */}
        <div className="p-2 md:p-4 bg-blue-100 rounded-xl text-xl md:text-3xl text-blue-600 transition-all duration-300 group-hover:bg-linear-to-br group-hover:from-blue-400 group-hover:via-blue-300 group-hover:to-transparent group-hover:text-white group-hover:rotate-6 group-hover:translate-x-2">
          {item.icon}
        </div>
        {/* Text size mobile-e choto kora hoyeche */}
        <p className="font-medium text-gray-900 text-[10px] md:text-base text-center md:text-left transition-colors duration-300 group-hover:text-gray-800">
          {item.title}
        </p>
        <span className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r from-blue-400 via-indigo-400 to-transparent transition-all duration-500 group-hover:w-full"></span>
      </div>
    ))}
  </div>

  {/* Bottom 3 cards centered */}
  <div className="mt-4 md:mt-8 flex flex-wrap justify-center gap-4 md:gap-8">
    {items.slice(4).map((item, index) => (
      <div
        key={index + 4}
        className="group relative bg-white rounded-2xl px-4 md:px-8 shadow-md flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-4 h-28 md:h-36 w-[calc(50%-0.5rem)] md:w-72 overflow-hidden transition-all duration-300 hover:shadow-xl"
      >
        <div className="p-2 md:p-4 bg-blue-100 rounded-xl text-xl md:text-3xl text-blue-600 transition-all duration-300 group-hover:bg-linear-to-br group-hover:from-blue-400 group-hover:via-blue-300 group-hover:to-transparent group-hover:text-white group-hover:rotate-6 group-hover:translate-x-2">
          {item.icon}
        </div>
        <p className="font-medium text-gray-900 text-[10px] md:text-base text-center md:text-left transition-colors duration-300 group-hover:text-gray-800">
          {item.title}
        </p>
        <span className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r from-blue-400 via-indigo-400 to-transparent transition-all duration-500 group-hover:w-full"></span>
      </div>
    ))}
  </div>
</div>
    </div>
  );
};

export default Services;
