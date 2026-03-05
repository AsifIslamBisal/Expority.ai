import React from 'react';
import { motion } from 'framer-motion'; 
import robot from '../assets/about/Robot.png';
import robot2 from '../assets/about/image.png';
import { Target, Eye, Sparkles } from 'lucide-react';
import FAQ from './FAQ';


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const About = () => {
  return (
    <section>
      {/* 1. Hero Section - Fade In Effect */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative w-full h-screen bg-white flex flex-col items-center justify-start overflow-hidden font-sans mt-18 md:mt-14"
      >
        <div className="absolute top-10 md:top-15 flex flex-col items-center pointer-events-none z-0 w-full">
          <h1 className="text-center font-bold text-[#DDEBFF] leading-[0.8] select-none">
            <span className="text-[8vw] md:text-[8vw] block">WE ARE</span>
            <span className="text-[8vw] md:text-[8vw] block">YOUR SALES PARTNER</span>
          </h1>
        </div>

        <div className="relative bottom-32 md:bottom-0 w-full max-w-[1600px] h-full mx-auto px-6 md:px-10">
          <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center items-end h-[70%] md:h-[75%]">
            <img src={robot} alt="Robot" className="h-full w-auto object-contain object-bottom" />
          </div>

          <div className="hidden sm:block absolute left-6 md:left-24 top-[40%] md:top-[45%] z-20 max-w-[150px] md:max-w-[220px]">
            <p className="text-[11px] md:text-[14px] text-gray-400 leading-snug font-normal">
              Our AI systems are designed to learn continuously — adapting in real time
            </p>
          </div>

          <motion.div 
            variants={fadeInUp}
            className="absolute left-6 md:left-16 bottom-[10%] md:bottom-[15%] z-20 bg-[#F4F7F9]/80 backdrop-blur-md p-4 md:p-8 rounded-[25px] md:rounded-[40px] w-[240px] md:w-[350px]"
          >
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
          </motion.div>

          <div className="hidden sm:block absolute right-6 md:right-80 top-[40%] md:top-[45%] z-20 text-right md:text-left">
            <h2 className="text-sm md:text-xl font-bold text-black uppercase tracking-tight leading-none">PROCESS<br />OPTIMIZATION</h2>
          </div>

          <div className="hidden sm:block absolute right-6 md:right-[10%] top-[50%] md:top-[60%] z-20 max-w-[120px] md:max-w-[180px] text-right md:text-left">
            <p className="text-[11px] md:text-[13px] text-gray-400 leading-relaxed">Automate repetitive tasks with precision</p>
          </div>

          <div className="hidden sm:block absolute right-6 md:right-24 bottom-[5%] md:bottom-[15%] z-20 flex space-x-6 md:space-x-16">
            <span className="text-[9px] md:text-[11px] font-bold text-gray-400 uppercase tracking-[0.4em]">SYSTEMS</span>
            <span className="text-[9px] md:text-[11px] font-bold text-gray-400 uppercase tracking-[0.4em]">ENGINES</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-radial-gradient from-[#F0F7FF] to-transparent pointer-events-none -z-10" />
      </motion.section>

      {/* 2. Intro Section - Slide in animation */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-24 font-sans overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="flex flex-col md:row justify-between items-start mb-16 gap-8 md:flex-row"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-[#00C2FF] leading-[1.1] uppercase tracking-tight max-w-md">
              ABOUT <br /> EXPORITY AI
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg md:mt-4 lg:mt-6">
              Expority AI helps service-based businesses across Canada turn more leads into booked appointments...
            </motion.p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-start gap-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-[70%]"
            >
              <div className="rounded-[40px] overflow-hidden shadow-sm">
                <img src={robot2} alt="AI Robot" className="w-full h-auto object-cover" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-[30%] flex flex-col pt-8 gap-7"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6 uppercase leading-tight tracking-wide">LET’S BUILD YOUR GROWTH SYSTEM</h3>
              <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed">Whether you need a high-converting website...</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Mission/Vision Section - Staggered Cards */}
      <section className="min-h-screen bg-linear-to-br from-white via-cyan-50/30 to-white px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold text-cyan-400 mb-8"
            >
              LEARN. ENGAGE.<br />ACQUIRE
            </motion.h1>
            <p className="text-gray-600 max-w-md ml-auto text-sm leading-relaxed">We help businesses learn about their prospects...</p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {[
              { icon: <Target className="w-6 h-6" />, title: "MISSION", text: "To become a trusted AI automation and digital growth partner for businesses across Canada, the United States, and North America by delivering reliable, ethical, and scalable solutions." },
              { icon: <Eye className="w-6 h-6" />, title: "VISION", text: "To help businesses grow efficiently by integrating AI, automation, and digital systems into one seamless operational framework." },
              { icon: <Sparkles className="w-6 h-6" />, title: "Core Values", text: "We create AI-powered, future-ready solutions that transform how businesses capture and convert leads" }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  {item.icon}
                  <h2 className="text-xl font-bold uppercase">{item.title}</h2>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 grow">{item.text}</p>
                
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <a href="/booking"><button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg">
              Talk to Our Team
            </button></a>
          </motion.div>
        </div>
      </section>

      
      <section>
        <FAQ />
      </section>
    </section>
  );
};

export default About;