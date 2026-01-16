import React from "react";
import mortgage from "../assets/mortgage.png";
import financial from "../assets/financial.png";
import realEstate from "../assets/real-estate.png";
import electrical from "../assets/electrical.png";

const BrandSlider = () => {
  const brands = [mortgage, financial, realEstate, electrical];

  return (
    <div className="relative overflow-hidden bg-linear-to-br from-white via-cyan-50/30 to-white py-10 group">
      {/* Continuous Scroll Row */}
      <div className="flex w-max animate-marquee group-hover:paused space-x-16">
        {[...brands, ...brands, ...brands].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Brand icon"
            className="w-40 md:w-60 h-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300"
          />
        ))}
      </div>

      {/* Fade effect on sides for smooth entry/exit */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white to-transparent"></div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }

          .animate-marquee {
            display: flex;
            animation: marquee 30s linear infinite;
          }

          .group:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

export default BrandSlider;
