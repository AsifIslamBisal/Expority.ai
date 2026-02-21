import React, { useEffect, useRef, useState } from "react";
import CoachesConsultants from '../../assets/Services/Coaches & Consultants.svg'
import Agencies from '../../assets/Services/Agencies & Service Businesses.svg'
import HomeServices from '../../assets/Services/Home Services.svg'
import LegalFinancial from '../../assets/Services/Legal & Financial Firms.svg'
import RealEstateMortgage from '../../assets/Services/Real Estate & Mortgage.svg'
import HighTicket from '../../assets/Services/High-Ticket Sales.svg'
import MedicalWellness from '../../assets/Services/Medical & Wellness.svg'

const Services = () => {
  const items = [
    { icon: CoachesConsultants, title: "Coaches & Consultants" },
    { icon: Agencies, title: "Agencies & Service Businesses" },
    { icon: HomeServices, title: "Home Services" },
    { icon: LegalFinancial, title: "Legal & Financial Firms" },
    { icon: RealEstateMortgage, title: "Real Estate & Mortgage" },
    { icon: HighTicket, title: "High-Ticket Sales" },
    { icon: MedicalWellness, title: "Medical & Wellness" },
  ];

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-linear-to-br from-white via-cyan-50/30 to-white py-20 overflow-hidden"
    >
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(50px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideInLeftFar {
            0% { opacity: 0; transform: translateX(-150px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInRightFar {
            0% { opacity: 0; transform: translateX(150px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .fadeInUp { animation: fadeInUp 1s ease forwards; }
          .slideInLeftFar { animation: slideInLeftFar 1s ease forwards; }
          .slideInRightFar { animation: slideInRightFar 1s ease forwards; }
        `}
      </style>

      {/* Header */}
      <div
        className={`text-center mb-12 transition-all duration-700 ${
          visible ? "fadeInUp" : "opacity-0 translate-y-10"
        }`}
      >
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
        {/* Top 4 cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 justify-items-center">
          {items.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl px-4 md:px-8 shadow-md flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-4 h-28 md:h-36 w-full md:w-72 overflow-hidden transition-all duration-300 hover:shadow-xl ${
                visible ? "slideInLeftFar" : "opacity-0 -translate-x-20"
              }`}
              style={{
                animationDelay: visible ? `${index * 0.15}s` : "0s",
              }}
            >
              <div className="p-2 md:p-4 bg-blue-100 rounded-xl text-xl md:text-3xl text-blue-600 transition-all duration-300 group-hover:bg-linear-to-br group-hover:from-blue-400 group-hover:via-blue-300 group-hover:to-transparent group-hover:text-white group-hover:rotate-6 group-hover:translate-x-2">
                <img
          src={item.icon}
          alt={item.title}
          className="w-10 h-10 md:w-12 md:h-12 object-contain"
        />
              </div>
              <p className="font-medium text-gray-900 text-[10px] md:text-base text-center md:text-left transition-colors duration-300 group-hover:text-gray-800">
                {item.title}
              </p>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r from-blue-400 via-indigo-400 to-transparent transition-all duration-500 group-hover:w-full"></span>
            </div>
          ))}
        </div>

        {/* Bottom 3 cards */}
        <div className="mt-4 md:mt-8 flex flex-wrap justify-center gap-4 md:gap-8">
          {items.slice(4).map((item, index) => (
            <div
              key={index + 4}
              className={`group relative bg-white rounded-2xl px-4 md:px-8 shadow-md flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-4 h-28 md:h-36 w-[calc(50%-0.5rem)] md:w-72 overflow-hidden transition-all duration-300 hover:shadow-xl ${
                visible ? "slideInRightFar" : "opacity-0 translate-x-20"
              }`}
              style={{
                animationDelay: visible ? `${index * 0.15 + 0.3}s` : "0s",
              }}
            >
              <div className="p-2 md:p-4 bg-blue-100 rounded-xl text-xl md:text-3xl text-blue-600 transition-all duration-300 group-hover:bg-linear-to-br group-hover:from-blue-400 group-hover:via-blue-300 group-hover:to-transparent group-hover:text-white group-hover:rotate-6 group-hover:translate-x-2">
                <img
          src={item.icon}
          alt={item.title}
          className="w-10 h-10 md:w-12 md:h-12 object-contain"
        />
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
