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
      description: "Our AI system automatically captures and evaluates leads, identifying high-potential prospects so your team can focus on closing deals efficiently.",
      bullets: ["Auto-qualifies leads", "Filters high-intent prospects", "Collects key client details", "Syncs with your CRM instantly"],
      isCenter: false
    },
    {
      title: "AI Appointment Booking",
      description: "Our AI automates timely follow-ups with leads, maintaining human-like engagement to nurture prospects and boost conversions.",
      bullets: ["Instant scheduling", "Syncs with your calendar", "Automated reminders", "Reduces no-shows"],
      isCenter: true
    },
    {
      title: "AI Sales Follow-Up",
      description: "Our AI handles scheduling instantly, syncing calendars and sending reminders to ensure appointments are never missed.",
      bullets: ["Automates follow-ups", "Human-like engagement", "Nurtures leads consistently", "Increases conversion rates"],
      isCenter: false
    }
  ];

  return (
    <section className='bg-linear-to-br from-white via-cyan-50/30 to-white'>
      <section className=' relative mt-25 md:-mt-12'>
        {/* Main Content */}
        <div className='flex flex-col md:flex-row relative items-center justify-evenly space-y-12 md:space-y-0'>
          {/* Left Section */}
          <div className='hidden sm:block flex items-center  gap-3 sm:gap-5'>
            <div>
              <img className=' w-16 sm:w-24 md:w-30 ' src={aiHand} alt="" />
            </div>
            <div className='space-y-2 sm:space-y-4 text-center md:text-left'>
              <p className='text-blue-600 font-semibold text-sm sm:text-base'>Lead<br />Generation</p>
              <p className='text-gray-400 text-xs sm:text-sm'>Automated<br />Lead Generation</p>
            </div>
          </div>
            <div className='absolute'>
              <img className='w-60 sm:w-90 md:w-150  ' src={smartPhone} alt="" />
            </div>
          {/* Center Section */}
          <div className=' relative flex flex-col sm:flex-row items-center pl-40 md:pl-18 pb-30'>
            
            
            <div className='flex items-center mb-6 sm:mb-12 md:mb-50 '>
              <div className="absolute inset-0 pointer-events-none"></div>
              <div className='space-y-4 ml-4 sm:space-y-10 sm:ml-8 md:space-y-15 md:ml-10'>
                <img className='w-8 h-8 sm:w-12 sm:h-12 md:w-15 md:h-15 rounded-full' src={image2} alt="" />
                <img className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full' src={image3} alt="" />
              </div>
            </div>
            <div className='hidden sm:block pt-20 lg:mb-100  md:mt-50 ml-2  space-y-2  sm:space-y-4 text-center md:text-left'>
              <p className='text-blue-600 font-semibold text-sm sm:text-base'>Customer <br />Interaction Al</p>
              <p className='text-gray-400 text-xs sm:text-sm'>24/7 Virtual Agents That Act</p>
            </div>
          </div>
        </div>

        {/* Smart Automation Card */}
        <div className='absolute hidden sm:block left-1/2 md:left-[72%] top-[80%] md:top-[60%] transform -translate-x-1/2 z-20 bg-blue-100 p-5 sm:p-6 md:p-8 space-y-5 rounded-2xl shadow-lg w-64 sm:w-72 md:w-80 text-center'>
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
      <div className='text-center space-y-4 sm:space-y-6 px-4'>
        <div className='ml-0 md:ml-160'>
          <BsStars className='text-blue-600 w-16 h-8 sm:w-40 sm:h-16 md:w-50 md:h-20 mx-auto md:mx-0' />
        </div>
        <div className='text-2xl sm:text-4xl md:text-6xl font-semibold text-blue-600'>
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
