import React from 'react';
import { motion } from 'framer-motion'; 
import worksBg from '../assets/works/hero_banner.png';
import userIcon from '../assets/works/follow-up.png';
import bookingIcon from '../assets/works/booking.png';
import automationIcon from '../assets/works/automation.png';
import { IoArrowForwardCircle } from 'react-icons/io5';
import Contact from './Contact';

const vanishIn = {
  hidden: { opacity: 0, filter: "blur(10px)", scale: 0.9 },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)", 
    scale: 1,
    transition: { duration: 1, ease: "easeOut" } 
  }
};


const smoothFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 }
  }
};

const HowItWorks = () => {
  return (
    <div className="bg-linear-to-br from-white via-cyan-50/30 to-white overflow-hidden mt-15">

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

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={vanishIn}
          className="relative z-10 max-w-4xl px-6 pb-30"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-cyan-400 to-blue-500 mb-2 drop-shadow-md leading-tight">
            How Expority’s AI
          </h1>
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 mb-6 drop-shadow-md leading-tight">
            Automation Engine Works
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          >
            A seamless system that captures leads, qualifies them intelligently, follows up <br />
            persistently, and books appointments automatically.
          </motion.p>
        </motion.div>
      </section>

      {/* ----------- STAGE 01: FRONTIER ----------- */}
      <section className="py-20 px-4 text-center">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={vanishIn}
          className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 mb-14 leading-tight"
        >
          Stage 01: Frontier
        </motion.h2>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row justify-center items-start gap-8 max-w-2xl mx-auto"
        >
          <motion.div variants={smoothFadeUp} className="group border border-blue-300 h-80 pt-10 rounded-xl p-6 flex-1 transition duration-500 hover:shadow-2xl hover:shadow-cyan-100 hover:bg-linear-to-br hover:from-cyan-400 hover:to-blue-600">
            <h3 className="font-semibold mb-4 text-xl">
              <span className="block font-bold text-blue-600 group-hover:text-white">(Step 01)</span>
              <span className="block font-semibold text-blue-600 group-hover:text-white">Lead Generation</span>
            </h3>
            <ul className="space-y-2">
              <li className="font-semibold text-gray-700 group-hover:text-white">• AI responds instantly across chat, voice, and SMS.</li>
              <li className="font-semibold text-gray-700 group-hover:text-white">• Natural conversation that feels human.</li>
              <li className="font-semibold text-gray-700 group-hover:text-white">• Available 24/7 with zero wait time.</li>
            </ul>
          </motion.div>

          <motion.div variants={smoothFadeUp} className="group border border-blue-300 h-80 pt-10 rounded-xl p-6 flex-1 transition duration-500 hover:shadow-2xl hover:shadow-cyan-100 hover:bg-linear-to-br hover:from-cyan-400 hover:to-blue-600">
            <h3 className="font-semibold mb-4 text-xl">
              <span className="block font-bold text-blue-600 group-hover:text-white">(Step 02)</span>
              <span className="block font-semibold text-blue-600 group-hover:text-white">Lead Qualification</span>
            </h3>
            <ul className="space-y-2">
              <li className="font-semibold text-gray-700 group-hover:text-white">• Smart questions identify high-value leads</li>
              <li className="font-semibold text-gray-700 group-hover:text-white">• Captures budget, timeline, and needs</li>
              <li className="font-semibold text-gray-700 group-hover:text-white">• Filters out unqualified prospects automatically</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* ----------- STAGE 02: EXTENSION ----------- */}
      <section className="pt-8 pb-20 px-4">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={vanishIn}
          className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600 mb-12 text-center leading-tight"
        >
          Stage 02: Extension
        </motion.h2>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-stretch text-left pl-6 pr-6 md:pl-10"
        >
          {[
            { icon: userIcon, title: "Follow-Up (AI Agent)", list: ["Persistent multi-channel follow-up sequences", "Personalized based on previous interactions", "Re-engages cold leads automatically"] },
            { icon: bookingIcon, title: "Booking (AI Agent)", list: ["Real-time calendar availability", "Automatic time zone handling", "Confirmation and reminder sequences"] },
            { icon: automationIcon, title: "Automation & Reporting", list: ["CRM auto-sync for all interactions", "Real-time analytics dashboard", "ROI tracking and optimization insights"] }
          ].map((item, index) => (
            <React.Fragment key={index}>
              <motion.div variants={smoothFadeUp} className="flex-1 flex flex-col items-start">
                <img src={item.icon} alt={item.title} className="w-10 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 text-base md:text-lg">{item.title}</h3>
                <ul className="text-gray-600 text-sm leading-relaxed w-full max-w-[300px] list-disc pl-5 space-y-1">
                  {item.list.map((li, i) => <li key={i} className="font-semibold">{li}</li>)}
                </ul>
                
              </motion.div>
              {index < 2 && (
                <>
                  <div className="hidden md:block w-0.5 bg-gray-200 h-62 mx-10"></div>
                  <div className="block md:hidden border-t border-gray-200 my-6 w-full"></div>
                </>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Contact/>
      </motion.div>
    </div>
  );
};

export default HowItWorks;