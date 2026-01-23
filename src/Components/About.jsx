import React from 'react';
import robot from '../assets/about/Robot.png';
import robot2 from '../assets/about/image.png';
import { Target, Eye, Sparkles } from 'lucide-react';
import FAQ from './FAQ';

const About = () => {
  return (
    <section>
        <section className="relative w-full h-screen bg-white flex flex-col items-center justify-start overflow-hidden font-sans">
      
      {/* 1. Background Big Text - Desktop এ আগের জায়গায়, ফোনে একটু ছোট */}
      <div className="absolute top-10 md:top-10 flex flex-col items-center pointer-events-none z-0 w-full">
        <h1 className="text-center font-bold text-[#DDEBFF] leading-[0.8] select-none">
          <span className="text-[8vw] md:text-[8vw] block">WE ARE</span>
          <span className="text-[8vw] md:text-[8vw] block">YOUR SALES PARTNER</span>
        </h1>
      </div>

      {/* 2. Content Layer */}
      <div className="relative bottom-32 md:bottom-0 w-full max-w-[1600px] h-full mx-auto px-6 md:px-10">
        
        {/* Robot Image - ডেস্কটপে আপনার আগের সাইজেই থাকবে */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center items-end h-[70%] md:h-[75%]">
          <img 
            src={robot} 
            alt="Robot" 
            className="h-full w-auto object-contain object-bottom"
          />
        </div>

        {/* --- LEFT SIDE ELEMENTS --- */}

        {/* Top-Left Description */}
        <div className="hidden sm:block absolute left-6 md:left-24 top-[40%] md:top-[45%] z-20 max-w-[150px] md:max-w-[220px]">
          <p className="text-[11px] md:text-[14px] text-gray-400 leading-snug font-normal">
            Our AI systems are designed to learn continuously — adapting in real time
          </p>
        </div>

        {/* Bottom-Left AI Card - ডেস্কটপে আপনার আগের জায়গায় */}
        <div className="absolute left-6 md:left-16 bottom-[10%] md:bottom-[15%] z-20 bg-[#F4F7F9]/80 backdrop-blur-md p-4 md:p-8 rounded-[25px] md:rounded-[40px] w-[240px] md:w-[350px]">
          <h3 className="text-[9px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3 md:mb-6">AI MODEL ANALYTICS</h3>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[9px] md:text-[11px] text-gray-400 leading-tight">Human like<br/>behavior</span>
              <span className="text-xl md:text-3xl font-semibold text-slate-800 mt-1 md:mt-2">99.7%</span>
            </div>
            <div className="w-[1px] h-8 md:h-10 bg-gray-300"></div>
            <div className="flex flex-col">
              <span className="text-[9px] md:text-[11px] text-gray-400 leading-tight">Response<br/>rate</span>
              <span className="text-xl md:text-3xl font-semibold text-slate-800 mt-1 md:mt-2">100%</span>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE ELEMENTS --- */}

        {/* Top-Right Heading */}
        <div className="hidden sm:block absolute right-6 md:right-80 top-[40%] md:top-[45%] z-20 text-right md:text-left">
          <h2 className="text-sm md:text-xl font-bold text-black uppercase tracking-tight leading-none">
            PROCESS<br />OPTIMIZATION
          </h2>
        </div>

        {/* Middle-Right Precision Text */}
        <div className="hidden sm:block absolute right-6 md:right-[10%] top-[50%] md:top-[60%] z-20 max-w-[120px] md:max-w-[180px] text-right md:text-left">
          <p className="text-[11px] md:text-[13px] text-gray-400 leading-relaxed">
            Automate repetitive tasks with precision
          </p>
        </div>

        {/* Bottom-Right Labels */}
        <div className=" hidden sm:block absolute right-6 md:right-24 bottom-[5%] md:bottom-[15%] z-20 flex space-x-6 md:space-x-16">
          <span className="text-[9px] md:text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] md:tracking-[0.4em]">SYSTEMS</span>
          <span className="text-[9px] md:text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] md:tracking-[0.4em]">ENGINES</span>
        </div>

      </div>

      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-[#F0F7FF] to-transparent pointer-events-none -z-10" />
    </section>
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Title and Intro Text */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          {/* Left: Heading */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#00C2FF] leading-[1.1] uppercase tracking-tight max-w-md">
            ABOUT <br /> EXPORITY AI
          </h2>
          
          {/* Right: Intro Text (Added 'mt-2' to push it slightly down) */}
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg md:mt-4 lg:mt-6">
            Expority AI helps service-based businesses across Canada turn more
leads into booked appointments and paying clients—automatically.
We design smart AI systems that respond instantly, qualify leads, book
calls 24/7, and follow up until no opportunity is missed. The result?
Higher conversions, faster response times, and more revenue—without
increasing staff or workload. Trusted by real estate professionals,
mortgage brokers, lawyers, and growing service businesses
nationwide.
          </p>
        </div>

        {/* Bottom Section: Image and Feature Text */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Image Container (Occupies 2/3 space) */}
          <div className="w-full lg:w-[70%]">
            <div className="rounded-[40px] overflow-hidden shadow-sm">
              <img 
                src={robot2} 
                alt="AI Robot" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Side Content (Added 'mt-10' to align with the image top) */}
          <div className="w-full lg:w-[30%] flex flex-col pt-8 gap-7 ">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 uppercase leading-tight tracking-wide">
              LET’S BUILD YOUR GROWTH SYSTEM
            </h3>
            <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed">
             Whether you need a high-converting website, powerful advertising or
intelligent AI support —Expority AI delivers solutions designed for real business
impact.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
        <div className="min-h-screen bg-linear-to-br from-white via-cyan-50/30 to-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-8">
            LEARN. ENGAGE.<br />ACQUIRE
          </h1>
          <p className="text-gray-600 max-w-md ml-auto text-sm leading-relaxed">
            We help businesses learn about their prospects through intelligent insights, engage them with personalized, timely interactions, and acquire clients efficiently using AI-powered automation—turning opportunities into measurable growth.
          </p>
        </div>

        {/* Cards Section */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
  
  {/* Mission Card */}
  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
    <div className="flex items-center gap-3 mb-6">
      <Target className="w-6 h-6" />
      <h2 className="text-xl font-bold">MISSION</h2>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
      To help businesses grow efficiently by integrating AI, automation, and digital systems into one seamless operational framework.
    </p>
    <button className="text-sm font-medium hover:text-cyan-400 transition-colors text-left w-fit">
      Learn More
    </button>
  </div>

  {/* Vision Card */}
  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
    <div className="flex items-center gap-3 mb-6">
      <Eye className="w-6 h-6" />
      <h2 className="text-xl font-bold">VISION</h2>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
      To become a trusted AI automation and digital growth partner for businesses across Canada, the United States, and North America by delivering reliable, ethical, and scalable solutions.
    </p>
    <button className="text-sm font-medium hover:text-cyan-400 transition-colors text-left w-fit">
      Learn More
    </button>
  </div>

  {/* Experience Card */}
  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
    <div className="flex items-center gap-3 mb-6">
      <Sparkles className="w-6 h-6" />
      <h2 className="text-xl font-bold">Core Values</h2>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
      At the heart of our company are integrity, innovation, and client success. We prioritize delivering measurable results, embracing advanced technology, and building lasting partnerships based on trust and excellence.
    </p>
    <button className="text-sm font-medium hover:text-cyan-400 transition-colors text-left w-fit">
      Learn More
    </button>
  </div>

</div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg hover:shadow-xl">
            Talk to Our Team
          </button>
        </div>
      </div>
    </div>
    </section>
    <section>
        <FAQ/>
    </section>
    </section>
  );
};

export default About;