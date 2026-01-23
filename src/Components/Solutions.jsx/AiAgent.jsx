import React from "react";
import { Layers, Box, MessageCircle, Mic } from "lucide-react";
import { motion } from "framer-motion";
import aiBot from "../../assets/Ai Agent/Ai.png";
import BrandSlider from "../BrandSlider";
import card1 from '../..//assets/Ai Agent/card 1.png'
import card2 from '../..//assets/Ai Agent/card 2.png'
import { MessageSquare, Phone, } from 'lucide-react';

const AiAgent = () => {

  const agents = [
    {
      icon: MessageSquare,
      title: "AI Chat Agent",
      points: ["Engages website visitors instantly", "Answers questions,captures leads", "Qualifies prospects automatically","Books appointments in real time"]
    },
    {
      icon: Phone,
      title: "AI Voice Agent",
      points: ["Handles inbound calls 24/7", "Qualifies callers professionally", "Books and routes appointments","Eliminates missed calls"]
    },
    {
      icon: MessageCircle,
      title: "AI SMS Agent",
      points: ["Instant SMS follow-ups", "conversations human-like ", "Reminders & confirmations","Natural interactions"]
    }
  ];

  return (
    <section className="relative bg-linear-to-br from-white via-cyan-50/30 to-white overflow-hidden pb-20">
<div className="relative w-full bg-white py-10 md:py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Wrapper */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
          
          {/* 1. Left Side: Lead Generation */}
          <div className="lg:w-1/4 flex justify-center lg:justify-start">
            <div className="flex items-center space-x-3">
              <div className="bg-[#4489F7] text-white p-2.5 rounded-xl ">
                <Layers size={20} />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">AI-Enhanced</p>
                <p className="text-sm font-bold text-gray-900 whitespace-nowrap">Lead Generation</p>
              </div>
            </div>
          </div>

          {/* 2. Center Content: Fixed 2 Lines */}
          <div className="lg:w-2/4 text-center flex flex-col items-center">
            <p className="text-[10px] md:text-xs tracking-[0.5em] text-gray-400 font-bold uppercase mb-6 md:mb-10">
              Powered by Creativity
            </p>
            
            {/* Heading Section: No-Wrap use kora hoyeche jate line na bhange */}
            <div className="flex flex-col items-center w-full">
              <h1 className="text-[6vw] sm:text-[5vw] md:text-[50px] lg:text-[62px] font-semibold text-gray-900 tracking-tight leading-tight whitespace-nowrap">
                AI Agents That Work 
              </h1>
              <h1 className="text-[6vw] sm:text-[6vw] md:text-[50px] lg:text-[62px] font-semibold text-gray-900 tracking-tight leading-none whitespace-nowrap">
                Like Your Top Performers
              </h1>
            </div>

            <p className="text-gray-500 text-sm md:text-lg max-w-xl mx-auto mt-8 md:mt-10 leading-relaxed font-medium">
              AI-driven tools to accelerate your business, transform ideas into visuals, and create stunning digital experiences effortlessly.
            </p>

            <div className="mt-8 md:mt-10">
              <button className="bg-[#4489F7] hover:bg-blue-600 text-white px-10 md:px-14 py-3.5 md:py-4 rounded-full text-sm md:text-base font-bold transition-all ">
                Launch Now
              </button>
            </div>
          </div>

          {/* 3. Right Side: Social Media Manager (Icon in Center) */}
          <div className="lg:w-1/4 flex flex-col items-center text-center md:pl-35">
            <div className="bg-[#4489F7] text-white p-3 md:p-2.5 rounded-xl  mb-4">
              <Box size={20} />
            </div>
            <div>
              <p className="text-sm md:text-lg text-gray-900 font-bold whitespace-nowrap">Social Media Manager</p>
              <p className="text-[10px] md:text-xs text-gray-400 max-w-[150px] mx-auto mt-1 leading-tight">
                Creations powered by our AI tools.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

     {/* Middle Section */}
<div className="relative mt-8">
  {/* Background Large Text */}
  <div
    
    className="absolute inset-0 flex justify-center items-center overflow-hidden pointer-events-none top-[30%] md:top-[45%]"
    style={{ transform: "translateY(-50%)" }}
  >
    <h1
      className="text-[4rem] md:text-[12rem] lg:text-[6rem] xl:text-[13rem] font-black tracking-tighter select-none whitespace-nowrap leading-none transition-all duration-300"
      style={{
        /* 1. Gradient color */
        background: "linear-gradient(to right, #dcf0fb, #7dd3fc, #dcf0fb)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        
        /* 2. Fading effect */
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
        
        opacity: 0.8,
      }}
    >
      EXPORITY AI
    </h1>
  </div>

  {/* Content Over Background */}
  <div className="relative z-10 max-w-6xl mx-auto px-6">
    {/* Top Cards */}
    <div className="flex justify-between items-start mb-6 max-w-4xl mx-auto">
      {/* Left AI Chat Card */}
      <div className="hidden sm:block bg-blue-50 border border-blue-100 px-4 py-3 items-center rounded-xl shadow-sm">
        <div className=" items-center space-x-2 mb-1 ml-3">
          <div className="bg-blue-500 w-8 text-white p-2 ml-1 rounded-full">
            <MessageCircle size={16} />
          </div>
          <p className="font-semibold text-blue-900 text-sm">AI Chat</p>
        </div>
        <p className="text-xs text-gray-600 ">
          AI Chat Agent <br />ready to work <br />for you
        </p>
      </div>

      {/* Right AI Voice Card */}
      <div className="hidden sm:block bg-blue-50 border border-blue-100 px-4 py-3 rounded-xl shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-500 text-white p-1.5 rounded-full">
            <Mic size={16} />
          </div>
          <p className="font-semibold text-blue-900 text-sm">
            AI Voice Agent
          </p>
        </div>
      </div>
    </div>

    {/* AI Bot Image */}
    <div className="flex justify-center my-8">
      <div className="w-[350px] md:w-[450px] lg:w-[500px] h-[400px] md:h-[500px] lg:h-[500px] flex items-center justify-center">
        <img src={aiBot} alt="AI Bot" />
      </div>
    </div>

    {/* Bottom Text */}
    <div className=" flex justify-between items-end max-w-5xl mx-auto">
      <div className="text-left max-w-xs">
        <p className="text-gray-600 text-sm leading-relaxed">
          Connect every part of your workflow with intelligent automation
          instantly.
        </p>
      </div>
      <div className="text-right">
        <p className="font-semibold text-base md:text-lg">
          Optimized for Speed.
        </p>
        <p className="font-semibold text-base md:text-lg ">
          <span className="italic">Engineered for </span>
          <span>Creativity</span>.
        </p>
      </div>
    </div>
  </div>
</div>

      {/* Brand Slider */}
      <BrandSlider />
{/* Social Media Manager Section */}
<div className="max-w-6xl mx-auto px-6 mt-20 grid lg:grid-cols-2 gap-10 items-center">
  {/* Text */}
  <div>
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      AI Powered Social Media Manager
    </h1>
    <p className="text-gray-600 mb-6 leading-relaxed">
      Discover a new way to generate, refine, and explore visual concepts —
      bringing your imagination to life with unmatched efficiency.
    </p>
    <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition duration-300 shadow-md">
      Learn More
    </button>
  </div>

  {/* Image Section */}
  <div className="relative w-87.5 sm:w-100 h-87.5 mx-auto">
    {/* Left Card — now ABOVE */}
    <motion.div
      whileHover={{ rotate: -5, y: -10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 150 }}
      className="absolute top-16 left-0 bg-white shadow-xl rounded-xl rotate-[-4deg] w-64 z-20"
    >
      <img src={card1} alt="coffee" className="rounded-xl" />
    </motion.div>

    {/* Right Card — stays below */}
    <motion.div
      whileHover={{ rotate: 5, y: -10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 150 }}
      className="absolute top-0 right-1 bg-white shadow-2xl rounded-xl rotate-6 w-64 z-10"
    >
      <img src={card2} alt="laptop" className="rounded-xl" />
    </motion.div>
  </div>
</div>

<div className=" mt-20 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Agent Types
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unlock a suite of intelligent tools designed to elevate your
            business and bring your clients at your doorstep.
          </p>
        </div>

       {/* Agent Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
  {agents.map((agent, index) => (
    <div
      key={index}
      className="bg-cyan-50  p-8 transition-all hover:shadow-lg"
      style={{
        borderLeft: '2px solid',
        borderRight: '2px solid',
        // Border image gradient: Transparent -> Blue -> Transparent
        borderImageSource: 'linear-gradient(to bottom, transparent, #60a5fa 50%, transparent)',
        borderImageSlice: 1,
      }}
    >
      <div className="mb-6">
        <div className="bg-blue-500 p-2 rounded-lg inline-block">
          <agent.icon className="w-6 h-6 text-white" />
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        {agent.title}
      </h2>
      
      <ul className="space-y-3 list-disc list-inside">
        {agent.points.map((point, idx) => (
          <li key={idx} className="text-gray-600">
            {point}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>

        {/* Deploy Button */}
        <div className="flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg hover:shadow-xl">
            Deploy AI Agent
          </button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default AiAgent;
