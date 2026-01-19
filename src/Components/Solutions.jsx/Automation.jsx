import React from 'react';
import aiHand from '../../assets/Sales/ai hand.png'
import smartPhone from '../../assets/Sales/smartphone.png'
import image1 from '../../assets/Sales/image1.jpg'
import image2 from '../../assets/Sales/image2.jpg'
import image3 from '../../assets/Sales/image3.jpg'
import { PiBookmarksThin } from 'react-icons/pi';
import { FcOk } from 'react-icons/fc';
import { MdElectricBolt } from 'react-icons/md';
import { BsStars } from 'react-icons/bs';
import BrandSlider from '../BrandSlider';

const Automation = () => {
  const cards = [
    {
      title: "AI Lead Qualification",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      bullets: ["Bullet Point", "Bullet Point", "Bullet Point", "Bullet Point"],
      isCenter: false
    },
    {
      title: "AI Appointment Booking",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      bullets: ["Bullet Point", "Bullet Point", "Bullet Point"],
      isCenter: true
    },
    {
      title: "AI Sales Follow-Up",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      bullets: ["Bullet Point", "Bullet Point", "Bullet Point", "Bullet Point"],
      isCenter: false
    }
  ];

  return (
    <section className='bg-linear-to-br from-white via-cyan-50/30 to-white'>
      <section className='mt-20 relative'>
        {/* Circle Background */}
        <div className="absolute flex items-center justify-center inset-0 z-0 scale-75 md:scale-100 circle-mask">
          <div className="flex h-80 w-80 sm:h-120 sm:w-120 md:h-160 md:w-160 items-center justify-center rounded-full border-2 border-gray-200">
            <div className="flex h-64 w-64 sm:h-100 sm:w-100 md:h-140 md:w-140 items-center justify-center rounded-full border-2 border-gray-200">
              <div className="flex h-52 w-52 sm:h-80 sm:w-80 md:h-120 md:w-120 items-center justify-center rounded-full border-2 border-gray-200">
                <div className="flex h-40 w-40 sm:h-64 sm:w-64 md:h-100 md:w-100 items-center justify-center rounded-full border-2 border-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
{/* Phone → Circle Fade Bridge */}
<div className="absolute inset-0 z-10 pointer-events-none phone-fade-bridge" />
        <div className="absolute inset-0 z-10 pointer-events-none fade-bridge" />

        {/* Main Content */}
        <div className='flex flex-col md:flex-row relative items-center justify-evenly z-10 space-y-10 md:space-y-0'>
          {/* Left Section */}
          <div className='flex items-center gap-3 sm:gap-5'>
            <div>
              <img className=' w-16 sm:w-24 md:w-30 ' src={aiHand} alt="" />
            </div>
            <div className='space-y-2 sm:space-y-4 text-center md:text-left'>
              <p className='text-blue-600 font-semibold text-sm sm:text-base'>Lead<br />Generation</p>
              <p className='text-gray-400 text-xs sm:text-sm'>Automated<br />Lead Generation</p>
            </div>
          </div>

          {/* Center Section */}
          <div className='flex flex-col sm:flex-row items-center mt-4 md:mt-8'>
            <div>
              <img className='w-48 sm:w-72 md:w-110 relative z-20 hand-fade' src={smartPhone} alt="" />
            </div>
            
            <div className='flex items-center mb-6 sm:mb-12 md:mb-50'>
              <div className="absolute inset-0 pointer-events-none"></div>
              <div>
                <img className=" -top-6 -right-8 
                 w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 
                 rounded-full shadow-lg" src={image1} alt="" />
              </div>
              <div className='space-y-4 ml-4 sm:space-y-10 sm:ml-8 md:space-y-15 md:ml-10'>
                <img className='w-8 h-8 sm:w-12 sm:h-12 md:w-15 md:h-15 rounded-full' src={image2} alt="" />
                <img className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full' src={image3} alt="" />
              </div>
            </div>
            <div className='mt-6 lg:mb-100 sm:mt-20 md:mt-50 ml-2 sm:ml-5 space-y-2 sm:space-y-4 text-center md:text-left'>
              <p className='text-blue-600 font-semibold text-sm sm:text-base'>Customer <br />Interaction Al</p>
              <p className='text-gray-400 text-xs sm:text-sm'>24/7 Virtual Agents That Act</p>
            </div>
          </div>
        </div>

        {/* Smart Automation Card */}
        <div className='absolute left-1/2 md:left-[75%] top-[90%] md:top-[70%] transform -translate-x-1/2 z-20 bg-blue-100 p-5 sm:p-6 md:p-8 space-y-5 rounded-2xl shadow-lg w-64 sm:w-72 md:w-80 text-center'>
          <div className='text-blue-600 font-bold text-base sm:text-lg'>
            <h1>Smart Automation</h1>
          </div>
          <div className='flex items-center justify-around'>
            <div className='space-y-2 text-sm'>
              <div className='bg-blue-50 w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 rounded-full p-2 sm:p-3 border-t-3 border-blue-500'>
                <PiBookmarksThin className='w-6 h-6 sm:w-8 sm:h-8 mx-auto' />
              </div>
              <p>Analyze</p>
            </div>
            <div className='space-y-2 text-sm'>
              <div className='bg-blue-50 w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 rounded-full p-2 sm:p-3 border-l-3 border-blue-500'>
                <FcOk className='w-6 h-6 sm:w-8 sm:h-8 mx-auto' />
              </div>
              <p>Act</p>
            </div>
            <div className='space-y-2 text-sm'>
              <div className='bg-blue-50 w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 rounded-full p-2 sm:p-3 border-r-3 border-blue-500'>
                <MdElectricBolt className='w-6 h-6 sm:w-8 sm:h-8 mx-auto' />
              </div>
              <p>Decide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Title Section */}
      <div className='text-center mt-24 sm:mt-28 space-y-4 sm:space-y-6 px-4'>
        <div className='ml-0 md:ml-160'>
          <BsStars className='text-blue-600 w-16 h-8 sm:w-40 sm:h-16 md:w-50 md:h-20 mx-auto md:mx-0' />
        </div>
        <div className='text-2xl sm:text-4xl md:text-7xl font-bold text-blue-600'>
          <h1>AI SALES AUTOMATION BUILT <br className='hidden md:block' /> FOR CONVERSION</h1>
        </div>
      </div>

      <div className='my-10 sm:my-16'>
        <BrandSlider />
      </div>

      <section>
  {/* Card Section */}
  <div className="bg-linear-to-br from-white via-cyan-50/30 to-white py-10 sm:py-16 px-4">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16 text-gray-800">
      Sales Automations
    </h1>

    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 max-w-7xl mx-auto">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative bg-white rounded-3xl w-72 sm:w-80 p-6 sm:p-10 shadow-xl transition-all duration-500 group hover:scale-105 sm:hover:scale-110 hover:bg-blue-600 hover:shadow-2xl z-10 flex flex-col"
          style={{
            minHeight: '480px', // বাটন আসার জন্য একটু জায়গা বাড়ানো হয়েছে
          }}
        >
          {/* Card Title */}
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-5 transition-colors duration-500 text-gray-800 group-hover:text-white">
            {card.title}
          </h2>

          {/* Card Description */}
          <p className="text-center mb-6 leading-relaxed text-xs sm:text-sm transition-colors duration-500 text-gray-600 group-hover:text-white">
            {card.description}
          </p>

          {/* Bullet Points */}
          <ul className="mb-8 space-y-3 flex-grow">
            {card.bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex items-center text-sm transition-colors duration-500 text-gray-600 group-hover:text-white"
              >
                <span className="mr-3 transition-colors duration-500 text-gray-400 group-hover:text-white/80">
                  ✓
                </span>
                {bullet}
              </li>
            ))}
          </ul>

          {/* Animated Button: Hovers from bottom */}
          <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
            <button className="w-full bg-blue-600 group-hover:bg-white text-white group-hover:text-blue-600 font-semibold py-3 sm:py-4 rounded-full transition-all duration-300 hover:shadow-lg text-sm sm:text-base">
              Get Started
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </section>
  );
};

export default Automation;
