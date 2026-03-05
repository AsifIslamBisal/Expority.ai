import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { BarChart2, Eye, Tag, Link2, MessageCircle, Zap, Bell, Shuffle } from "lucide-react";
import Lottie from 'lottie-react';
import lead from '../../assets/lottiefiles/LeadList.json'

const LeadQualification = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Hero parallax
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const heroOp = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // FadeUp helper
  const FadeUp = ({ children, delay = 0, className = "" }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });
    return (
      <motion.div
        ref={ref}
        className={className}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.div>
    );
  };

  const steps = [
    { n: "01", title: "Data Collection", sub: "Gathering intelligence", body: "Information is gathered from website forms, landing pages, ads, chat interactions, AI agents and CRM activity.", tags: ["Website Forms", "AI Agents", "CRM History"] },
    { n: "02", title: "Criteria Definition", sub: "Aligning marketing and sales", body: "Qualification rules are defined based on industry type, company size, revenue, role, budget, and timeline.", tags: ["Industry", "Authority", "Budget"] },
    { n: "03", title: "Lead Scoring", sub: "Quantifying purchase intent", body: "Demographic factors are combined with behavioral signals: page visits, email opens, clicks, and form submissions.", tags: ["Demographic", "Behavioral", "Intent"] },
    { n: "04", title: "AI Segmentation", sub: "Intelligent automation", body: "Leads are automatically segmented into High-Priority, Nurture Sequence, or Low Priority buckets.", tags: ["High Priority", "Nurture", "AI Segments"] },
    { n: "05", title: "Automated Routing", sub: "Right rep, right moment", body: "Qualified leads are assigned to specific sales reps and triggered into follow-up sequences automatically.", tags: ["Assignment", "Pipeline", "Alerts"] },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-cyan-50/30 to-white font-sans text-slate-900 overflow-x-hidden">
      
      {/* HERO SECTION  */}
      <div ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-0 md:pt-28">
        
        <motion.div 
          style={{ y: heroY, opacity: heroOp }} 
          className="w-full max-w-5xl mx-auto text-center z-10 relative"
        >
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-black leading-[0.9] tracking-tight text-slate-900"
            
            style={{ fontSize: "clamp(40px, 8vw, 85px)" }} 
          >
            Lead<br />
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Qualification
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-sm md:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed px-4"
          >
            Turning raw leads into revenue opportunities — intelligent scoring, 
            automated routing, and data-driven prioritization.
          </motion.p>
        </motion.div>

        {/* Lottie Animation - Responsive Size */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="w-full max-w-[300px] md:max-w-[450px] lg:max-w-[500px] mt-8 z-0"
        >
          <Lottie animationData={lead} loop={true} />
        </motion.div>
      </div>

      {/* --- DEFINITION SECTION --- */}
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <FadeUp>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-cyan-100 border border-cyan-300 text-cyan-700">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> Definition
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mt-4 mb-5 tracking-tight">
              What is Lead Qualification?
            </h2>
            <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed mb-6">
              It is a <strong className="text-slate-900">data-driven process</strong> that evaluates prospects so sales teams focus only on those most likely to convert.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Buying Intent", "Budget Capacity", "Decision Authority", "Urgency", "Engagement", "Business Fit"].map((s, i) => (
                <div key={i} className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-white border border-cyan-100 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  <span className="text-[12px] font-semibold text-slate-700">{s}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="space-y-3 bg-white/50 p-4 rounded-3xl border border-cyan-50">
              {[
                { label: "Cold Leads", bar: 15, color: "bg-slate-400", text: "text-slate-500" },
                { label: "Warm Leads", bar: 42, color: "bg-cyan-400", text: "text-cyan-500" },
                { label: "Hot Leads", bar: 70, color: "bg-cyan-500", text: "text-cyan-600" },
                { label: "MQL", bar: 83, color: "bg-sky-600", text: "text-sky-700" },
                { label: "SQL", bar: 100, color: "bg-blue-600", text: "text-blue-700" },
              ].map((l, i) => (
                <div key={i} className="bg-white border border-cyan-100 rounded-xl px-4 py-3 shadow-sm">
                  <div className="flex justify-between mb-2">
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${l.text}`}>{l.label}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-cyan-50 overflow-hidden">
                    <motion.div 
                      className={`h-full ${l.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.bar}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>

      {/* --- PROBLEM / SOLUTION --- */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <FadeUp className="bg-red-50/50 border border-red-100 rounded-3xl p-8">
            <p className="text-red-500 font-bold text-[11px] tracking-widest uppercase mb-6 flex items-center gap-2">
               Without Qualification
            </p>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex gap-3">✕ <span className="text-slate-700">Sales teams waste time chasing "ghost" leads.</span></li>
              <li className="flex gap-3">✕ <span className="text-slate-700">High-value opportunities get buried in noise.</span></li>
              <li className="flex gap-3">✕ <span className="text-slate-700">Overall conversion rates and morale remain low.</span></li>
            </ul>
          </FadeUp>
          <FadeUp delay={0.1} className="bg-cyan-50/50 border border-cyan-100 rounded-3xl p-8">
            <p className="text-cyan-600 font-bold text-[11px] tracking-widest uppercase mb-6 flex items-center gap-2">
               With Qualification
            </p>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex gap-3">✓ <span className="text-slate-700">Focus 100% effort on high-probability leads.</span></li>
              <li className="flex gap-3">✓ <span className="text-slate-700">Immediate automated action on "Hot" prospects.</span></li>
              <li className="flex gap-3">✓ <span className="text-slate-700">Clear, measurable Marketing ROI and growth.</span></li>
            </ul>
          </FadeUp>
        </div>
      </div>

      {/* --- PROCESS TABS --- */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-12">
           <h2 className="text-2xl md:text-3xl font-bold">The Qualification Pipeline</h2>
        </div>
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
          {/* Nav - Scrollable on mobile */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
            {steps.map((st, i) => (
              <button 
                key={i} 
                onClick={() => setActiveStep(i)}
                className={`flex-shrink-0 text-left flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all duration-300
                  ${activeStep === i ? "bg-white border-cyan-400 shadow-lg shadow-cyan-100 scale-[1.02]" : "bg-white/50 border-slate-100 hover:border-cyan-200"}`}
              >
                <span className={`text-lg font-black ${activeStep === i ? "text-cyan-500" : "text-slate-200"}`}>{st.n}</span>
                <span className={`text-sm font-bold whitespace-nowrap ${activeStep === i ? "text-slate-800" : "text-slate-400"}`}>{st.title}</span>
              </button>
            ))}
          </div>

          {/* Display Panel */}
          <motion.div 
            key={activeStep}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-cyan-100 rounded-[2rem] p-8 md:p-12 shadow-xl shadow-cyan-900/5 min-h-[350px] flex flex-col justify-center"
          >
            <div className="mb-6">
              <span className="text-cyan-500 text-xs font-black uppercase tracking-[0.2em]">{steps[activeStep].sub}</span>
              <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mt-2">{steps[activeStep].title}</h3>
            </div>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">{steps[activeStep].body}</p>
            <div className="flex flex-wrap gap-2">
              {steps[activeStep].tags.map(t => (
                <span key={t} className="px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-wider">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- KEY COMPONENTS GRID --- */}
      <div className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-100">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold">Key Components</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <BarChart2 size={28} />, t: "Smart Scoring", d: "Weighted demographic signals." },
            { icon: <Eye size={28} />, t: "Behavioral", d: "Tracking every interaction." },
            { icon: <Zap size={28} />, t: "Predictive", d: "ML-driven probability." },
            { icon: <Shuffle size={28} />, t: "Auto Routing", d: "Instant rep assignment." },
          ].map((c, i) => (
            <FadeUp key={i} delay={i * 0.1} className="bg-white border border-slate-100 p-8 rounded-[2rem] hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-900/5 transition-all group">
              <div className="text-slate-300 group-hover:text-cyan-500 transition-colors mb-6">{c.icon}</div>
              <p className="font-bold text-slate-800 text-lg mb-2">{c.t}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{c.d}</p>
            </FadeUp>
          ))}
        </div>
      </div>

    </div>
  );
};

export default LeadQualification;