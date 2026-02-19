import React from 'react';
import { motion } from 'framer-motion';
import Ai from '../../assets/workflow/Ai.png';
import BrandSlider from '../BrandSlider';
import { TiDocumentAdd } from 'react-icons/ti';
import { FcOk } from 'react-icons/fc';

const Workflow = () => {
  const features = [
    {
      title: "Real-Time Automation",
      subtitle: "AI Intake Automation",
      items: ["Instant lead capture", "Automatic data collection", "Smart lead qualification", "Real-time CRM sync"]
    },
    {
      title: "Constantly Updation",
      subtitle: "AI Documentation",
      items: ["Auto document updates", "Version tracking", "Instant access to changes", "Seamless data management"]
    },
    {
      title: "All-in-One System",
      subtitle: "CRM Automation",
      items: ["Centralized CRM", "Automated workflows", "Lead tracking", "Real-time reporting"]
    }
  ];

  // animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section>
      {/* HERO SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative max-w-8xl mx-auto px-20 pt-20 pb-40 min-h-212.5 flex items-start overflow-visible mt-10"
      >
        {/* LEFT SIDE TEXT */}
        <motion.div variants={fadeUp} className="w-full lg:w-3/5 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl leading-tight"
          >
            <span className="font-bold text-[#00C2FF]">Automate</span>
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] via-[#4D7CFF] to-[#4D7CFF]">
              {" "}the Work That
              <br />
              Slows You Down
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-8"
          >
            <p className="text-gray-500 text-xl max-w-lg leading-relaxed">
              It is a long established fact that a reader will be distracted by the readable 
              content of a page when looking at its layout.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-10 bg-[#4D7CFF] hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-xl text-lg"
            >
              Get Started
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute right-[8%] md:right-[-10%] lg:right-0 bottom-[0px] lg:bottom-[50px] w-full lg:w-1/2 flex justify-end pointer-events-none"
        >
          <img
            src={Ai}
            alt="AI Robot"
            className="w-[150%] lg:w-[180%] h-auto object-contain max-w-none hidden sm:block"
          />
        </motion.div>
      </motion.section>

      {/* BRAND SLIDER */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <BrandSlider />
      </motion.div>

      {/* WORKFLOW FEATURE SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-linear-to-br from-white via-cyan-50/30 to-white py-20 px-10 min-h-screen"
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-800">Workflow Features</h1>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-[#E9F2FF] p-8 rounded-3xl shadow-sm w-full max-w-sm border border-blue-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-slate-300 p-3 rounded-xl text-slate-700">
                  <TiDocumentAdd size={30} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">{feature.title}</p>
                  <h3 className="text-xl font-bold text-slate-800">{feature.subtitle}</h3>
                </div>
              </div>

              <hr className="border-blue-200 mb-6" />

              <div className="space-y-4">
                {feature.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-center gap-3 text-slate-600 font-medium"
                  >
                    <FcOk size={20} />
                    <p>{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Workflow;
