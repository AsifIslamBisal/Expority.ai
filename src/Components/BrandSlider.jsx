import React from "react";
import mortgage from "../assets/mortgage.png";
import financial from "../assets/financial.png";
import realEstate from "../assets/real-estate.png";
import electrical from "../assets/electrical.png";

const BrandSlider = () => {
  const brands = [mortgage, financial, realEstate, electrical];

  return (
    <div className="overflow-hidden bg-white py-8">
      <div className="flex animate-marquee space-x-16">
        {[...brands, ...brands, ...brands].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Brand icon"
            className="w-24 md:w-28 h-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300"
          />
        ))}
      </div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 40s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default BrandSlider;
