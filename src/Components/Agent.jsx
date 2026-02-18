import React, { useState, useRef, useEffect } from "react";
import Lottie from "lottie-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { InlineWidget } from "react-calendly";
import agent from "../assets/lottiefiles/Ai-Agent.json";

const ProgressBar = ({ label, value }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ width: `${value}%` });
    }
  }, [inView, controls, value]);

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-gray-700">{label}</span>
        <span className="text-sm font-bold text-gray-700">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="bg-cyan-500 h-2.5 rounded-full"
        ></motion.div>
      </div>
    </div>
  );
};

const Agent = () => {
  const [open, setOpen] = useState(false);
  const [calendlyUrl, setCalendlyUrl] = useState("");
  const modalRef = useRef(null);

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Scroll animation
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-7xl mx-auto px-4 py-10"
    >
      {/* Header Text */}
      <div className="mb-10 text-center md:text-left ">
        <h1 className="text-4xl mb-4 text-center ">
          Why use AI Agents to Automate <br />
        </h1>
        <h1 className="text-4xl mb-5 text-center ">
          Industry-Specific Client Acquisition?
        </h1>
        <p className="text-gray-700 text-center ">
          Automation boosts efficiency, increases lead conversion, and enhances
          client engagement—saving time and driving measurable growth.
          <br />
          AI agents target the right prospects, automate follow-ups, and engage
          leads naturally—delivering faster conversions and consistent growth.
        </p>
      </div>

      {/* Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Lottie Animation Div */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={controls}
          transition={{ duration: 1 }}
          className="w-full max-w-120"
        >
          <Lottie animationData={agent}></Lottie>
        </motion.div>

        {/* Progress Bars + Buttons */}
        <div className="w-full space-y-6">
          <ProgressBar label="Time Saving" value={82} />
          <ProgressBar label="Brand Positioning" value={75} />

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => {
                setCalendlyUrl("https://calendly.com/ronyt2sec/30min");
                setOpen(true);
              }}
              className="px-4 py-1.5 rounded-full bg-[#3b82f6] text-white text-sm hover:shadow-md transition "
            >
              Execution
            </button>
            <button
              onClick={() => {
                setCalendlyUrl("https://calendly.com/ronyt2sec/30min");
                setOpen(true);
              }}
              className="px-4 py-1.5 rounded-full bg-[#3b82f6] text-white text-sm hover:shadow-md transition"
            >
              Analysis
            </button>
            <button
              onClick={() => {
                setCalendlyUrl("https://calendly.com/ronyt2sec/30min");
                setOpen(true);
              }}
              className="px-4 py-1.5 rounded-full bg-[#3b82f6] text-white text-sm hover:shadow-md transition"
            >
              Optimization
            </button>
          </div>
        </div>
      </div>

      {/* Calendly Modal */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl w-[90%] md:w-[800px] h-[600px] p-4 relative"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>
            <InlineWidget
              url={calendlyUrl}
              styles={{ height: "100%", width: "100%" }}
            />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Agent;
