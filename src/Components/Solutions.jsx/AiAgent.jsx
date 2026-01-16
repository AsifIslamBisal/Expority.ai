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
      points: ["Bullet Point", "Bullet Point", "Bullet Point"]
    },
    {
      icon: Phone,
      title: "AI Voice Agent",
      points: ["Bullet Point", "Bullet Point", "Bullet Point"]
    },
    {
      icon: MessageCircle,
      title: "AI SMS Agent",
      points: ["Bullet Point", "Bullet Point", "Bullet Point"]
    }
  ];

  return (
    <section className="relative bg-linear-to-br from-white via-cyan-50/30 to-white overflow-hidden pb-20">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid lg:grid-cols-3 items-center gap-8">
          {/* Left Icon */}
          <div className="flex items-center justify-center lg:justify-start space-x-3">
            <div className="bg-blue-500 text-white p-3 rounded-full">
              <Layers size={20} />
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-600">AI-Enhanced</p>
              <p className="text-sm text-gray-900 font-semibold">
                Lead Generation
              </p>
            </div>
          </div>

          {/* Center Text */}
          <div className="text-center space-y-5">
            <p className="text-xs tracking-[0.3em] text-gray-500 font-semibold uppercase">
              Powered by Creativity
            </p>
            <div className="space-y-2 leading-tight">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
                AI Agents That Work Like Your
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
                Best Team Members
              </h1>
            </div>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed pt-2">
              AI-driven tools to accelerate your business, transform ideas into
              visuals, and create stunning digital experiences effortlessly.
            </p>
            <div className="pt-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition duration-300 shadow-md">
                Launch Now
              </button>
            </div>
          </div>

          {/* Right Icon */}
          <div className="flex flex-col items-center justify-center lg:justify-end text-center">
            <div className="bg-blue-500 text-white p-4 rounded-full mb-3">
              <Box size={24} />
            </div>
            <p className="text-base text-gray-900 font-semibold">
              Social Media Manager
            </p>
            <p className="text-xs text-gray-600 max-w-[140px]">
              Creations powered by our AI tools.
            </p>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="relative mt-8">
        {/* Background Large Text */}
        <div
          className="absolute inset-0 flex justify-center items-center overflow-hidden pointer-events-none"
          style={{ top: "45%", transform: "translateY(-50%)" }}
        >
          <h1
            className="text-[8rem] md:text-[12rem] lg:text-[6rem] xl:text-[13rem] font-black tracking-tighter select-none whitespace-nowrap leading-none"
            style={{
              background:
                "linear-gradient(to bottom, #e0f2fe 0%, #bae6fd 30%, #7dd3fc 60%, #38bdf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: 0.3,
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
            <div className="bg-blue-50 border border-blue-100 px-4 py-3 items-center rounded-xl shadow-sm">
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
            <div className="bg-blue-50 border border-blue-100 px-4 py-3 rounded-xl shadow-sm">
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
              <img src={aiBot} alt="" />
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
              <p className="font-semibold text-base md:text-lg italic">
                Optimized for Speed.
              </p>
              <p className="font-semibold text-base md:text-lg italic">
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
              className="bg-cyan-50 to-transparent rounded-2xl p-8 border-l-1 border-r-1 border-blue-300 hover:border-blue-400 transition-all"
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
