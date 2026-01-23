import React from "react";
import Lottie from "lottie-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header Text */}
      <div className="mb-10 text-center md:text-left ">
        <h1 className="text-4xl mb-4 text-center ">
          Why use AI Agents to Automate <br />
        </h1>
        <h1 className="text-4xl mb-5 text-center ">Industry-Specific Client Acquisition?</h1>
        <p className="text-gray-700 text-center ">
          Automation boosts efficiency, increases lead conversion, and enhances client engagement—saving time and driving measurable growth.
          <br />
          AI agents target the right prospects, automate follow-ups, and engage leads naturally—delivering faster conversions and consistent growth.
        </p>
      </div>

      {/* Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Lottie Animation Div */}
        <div className="w-full max-w-120">
          <Lottie animationData={agent}></Lottie>
        </div>

        {/* Progress Bars + Buttons */}
        <div className="w-full space-y-6">
          <ProgressBar label="Time Saving" value={82} />
          <ProgressBar label="Brand Positioning" value={75} />

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-4 py-1.5 rounded-full bg-[#3b82f6] text-white text-sm hover:shadow-md transition">
              Execution
            </button>
            <button className="px-4 py-1.5 rounded-full bg-[#3b82f6] text-white text-sm hover:shadow-md transition">
              Analysis
            </button>
            <button className="px-4 py-1.5 rounded-full bg-[#3b82f6] text-white text-sm hover:shadow-md transition">
              Optimization
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agent;
