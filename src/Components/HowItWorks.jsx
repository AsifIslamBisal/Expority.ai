import React from 'react';
import worksBg from '../assets/works/hero_banner.png';
import userIcon from '../assets/works/follow-up.png';
import bookingIcon from '../assets/works/booking.png';
import automationIcon from '../assets/works/automation.png';
import { IoArrowForwardCircle } from 'react-icons/io5';
import Contact from './Contact';

const HowItWorks = () => {
  return (
    <div className="bg-linear-to-br from-white via-cyan-50/30 to-white overflow-hidden">

      {/* ----------- HERO SECTION ----------- */}
      <section className="relative w-full h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={worksBg}
            alt="background"
            className="w-full h-full object-cover opacity-95"
          />
          <div className="absolute inset-0 bg-linear-to-b from-white/40 via-white/20 to-white/50"></div>
        </div>

        <div className="relative z-10 max-w-4xl px-6 pb-30">
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-cyan-400 to-blue-500 mb-2 drop-shadow-md leading-tight">
            How Expority’s AI
          </h1>
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 mb-6 drop-shadow-md leading-tight">
            Automation Engine Works
          </h1>
          <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A seamless system that captures leads, qualifies them intelligently, follows up <br />
            persistently, and books appointments automatically.
          </p>
        </div>
      </section>

      {/* ----------- STAGE 01: FRONTIER ----------- */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 mb-14 leading-tight">
          Stage 01: Frontier
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-start gap-8 max-w-2xl mx-auto">
          {/* Step 01 */}
    <div className="group border border-blue-300 h-80 pt-10 rounded-xl p-6 flex-1 transition duration-300 hover:bg-linear-to-br hover:from-cyan-400 hover:to-blue-600">
      <h3 className="font-semibold mb-4 text-xl">
        <span className="block font-bold text-blue-600 group-hover:text-white">(Step 01)</span>
        <span className="block font-semibold text-blue-600 group-hover:text-white">Lead Generation</span>
      </h3>
      <ul className="space-y-2">
        <li className="font-semibold text-gray-700 group-hover:text-white">• AI responds instantly across chat, voice, and SMS.</li>
        <li className="font-semibold text-gray-700 group-hover:text-white">• Natural conversation that feels human.</li>
        <li className="font-semibold text-gray-700 group-hover:text-white">• Available 24/7 with zero wait time.</li>
        
      </ul>
    </div>

          {/* Step 02 */}
          <div className="group border border-blue-300 h-80 pt-10 rounded-xl p-6 flex-1 transition duration-300 hover:bg-linear-to-br hover:from-cyan-400 hover:to-blue-600">
      <h3 className="font-semibold mb-4 text-xl">
        <span className="block font-bold text-blue-600 group-hover:text-white">(Step 02)</span>
        <span className="block font-semibold text-blue-600 group-hover:text-white">Lead Qualification</span>
      </h3>
      <ul className="space-y-2">
        <li className="font-semibold text-gray-700 group-hover:text-white">• Smart questions identify high-value leads</li>
        <li className="font-semibold text-gray-700 group-hover:text-white">• Captures budget, timeline, and needs</li>
        <li className="font-semibold text-gray-700 group-hover:text-white">• Filters out unqualified prospects automatically</li>
        
      </ul>
    </div>
        </div>
      </section>

      {/* ----------- STAGE 02: EXTENSION ----------- */}
      <section className="pt-8 pb-20 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600 mb-12 text-center leading-tight">
          Stage 02: Extension
        </h2>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start text-center md:text-left pl-10">
          {/* Column 1 */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <img src={userIcon} alt="Follow-Up" className="w-10 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2 text-base md:text-lg">
              Follow-Up (AI Agent)
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed w-[340px]">
              <li className="font-semibold ">Persistent multi-channel follow-up sequences</li>
              <li className="font-semibold ">Personalized based on previous interactions</li>
              <li className="font-semibold ">Re-engages cold leads automatically</li>
            </p>
            <button className="flex items-center justify-center md:justify-start font-medium gap-1 mt-3 text-gray-700 hover:text-blue-600 transition">
              Read More <IoArrowForwardCircle className="text-xl" />
            </button>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-300 h-48 mx-16"></div>
          <br className="md:hidden border-t border-gray-300 my-6" />

          {/* Column 2 */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <img src={bookingIcon} alt="Booking" className="w-10 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2 text-base md:text-lg">
              Booking (AI Agent)
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              <li className="font-semibold ">Real-time calendar availability</li>
              <li className="font-semibold ">Automatic time zone handling</li>
              <li className="font-semibold ">Confirmation and reminder sequences</li>
            </p>
            <button className="flex items-center justify-center md:justify-start font-medium gap-1 mt-3 text-gray-700 hover:text-blue-600 transition">
              Read More <IoArrowForwardCircle className="text-xl" />
            </button>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-300 h-48 mx-16"></div>
          <br className="md:hidden border-t border-gray-300 my-6" />

          {/* Column 3 */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <img src={automationIcon} alt="Automation" className="w-10 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2 text-base md:text-lg">
              Automation & Reporting
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              <li className="font-semibold ">CRM auto-sync for all interactions</li>
              <li className="font-semibold ">Real-time analytics dashboard</li>
              <li className="font-semibold ">ROI tracking and optimization insights</li>
            </p>
            <button className="flex items-center justify-center md:justify-start font-medium gap-1 mt-3 text-gray-700 hover:text-blue-600 transition">
              Read More <IoArrowForwardCircle className="text-xl" />
            </button>
          </div>
        </div>
      </section>
      <Contact/>
    </div>
  );
};

export default HowItWorks;
