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
    <div className="min-h-screen bg-gradient-to-br from-white via-cyan-50/30 to-white font-sans text-slate-900 overflow-x-hidden">
      
      {/* HERO */}
<div ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
  
  {/* Contenedor de Texto */}
  <motion.div 
    style={{ y: heroY, opacity: heroOp }} 
    className="w-full max-w-5xl mx-auto text-center z-10 relative"
  >
    <motion.h1
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-[48px] sm:text-[72px] md:text-[112px] font-black leading-[0.9] tracking-tight text-slate-900"
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
      className="mt-6 text-base md:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed"
    >
      Turning raw leads into revenue opportunities — intelligent scoring, 
      automated routing, and data-driven prioritization.
    </motion.p>
  </motion.div>

  {/* Animación Lottie - Debajo del texto */}
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5, duration: 1 }}
    className="w-full max-w-[350px] md:max-w-[500px] mt-8 z-0"
  >
    <Lottie animationData={lead} loop={true} />
  </motion.div>

</div>

      {/* DEFINITION */}
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-cyan-100 border border-cyan-300 text-cyan-700">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> Definition
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-5 tracking-tight">
              What is Lead Qualification?
            </h2>
            <p className="text-[15px] text-slate-600 leading-relaxed mb-6">
              It is a <strong className="text-slate-900">data-driven process</strong> that evaluates prospects so sales teams focus only on those most likely to convert.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {["Buying Intent", "Budget Capacity", "Decision Authority", "Urgency", "Engagement", "Business Fit"].map((s, i) => (
                <div key={i} className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-cyan-50 border border-cyan-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  <span className="text-[12px] font-semibold text-slate-700">{s}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="space-y-3">
              {[
                { label: "Cold Leads", bar: 15, color: "bg-slate-400", text: "text-slate-500" },
                { label: "Warm Leads", bar: 42, color: "bg-cyan-400", text: "text-cyan-500" },
                { label: "Hot Leads", bar: 70, color: "bg-cyan-500", text: "text-cyan-600" },
                { label: "MQL", bar: 83, color: "bg-sky-600", text: "text-sky-700" },
                { label: "SQL", bar: 100, color: "bg-blue-600", text: "text-blue-700" },
              ].map((l, i) => (
                <div key={i} className="bg-white border border-cyan-100 rounded-xl px-4 py-3 shadow-sm">
                  <div className="flex justify-between mb-2">
                    <span className={`text-[12px] font-bold ${l.text}`}>{l.label}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-cyan-100 overflow-hidden">
                    <motion.div 
                      className={`h-full ${l.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.bar}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>

      {/* PROBLEM / SOLUTION */}
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-5 bg-white/50 rounded-[3rem]">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Why it is Critical</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <FadeUp className="bg-red-50 border border-red-100 rounded-2xl p-6">
            <p className="text-red-500 font-bold text-[11px] tracking-widest uppercase mb-4">Without Qualification</p>
            <ul className="space-y-3 text-[13.5px] text-slate-600">
              <li className="flex gap-2">✕ Sales teams chase ghosts</li>
              <li className="flex gap-2">✕ High-value leads are ignored</li>
              <li className="flex gap-2">✕ Conversion rates remain low</li>
            </ul>
          </FadeUp>
          <FadeUp delay={0.1} className="bg-cyan-50 border border-cyan-100 rounded-2xl p-6">
            <p className="text-cyan-600 font-bold text-[11px] tracking-widest uppercase mb-4">With Qualification</p>
            <ul className="space-y-3 text-[13.5px] text-slate-600">
              <li className="flex gap-2">✓ Focus on high-probability leads</li>
              <li className="flex gap-2">✓ Immediate action on hot leads</li>
              <li className="flex gap-2">✓ Measurable Marketing ROI</li>
            </ul>
          </FadeUp>
        </div>
      </div>

      {/* PROCESS - RESPONSIVE TABS */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-[240px_1fr] gap-8">
          {/* Mobile Scrollable Nav */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 no-scrollbar">
            {steps.map((st, i) => (
              <button 
                key={i} 
                onClick={() => setActiveStep(i)}
                className={`flex-shrink-0 lg:flex-shrink-1 flex items-center gap-3 px-5 py-3 rounded-xl border transition-all
                  ${activeStep === i ? "bg-cyan-50 border-cyan-300 shadow-sm" : "bg-white border-cyan-100"}`}
              >
                <span className={`font-bold ${activeStep === i ? "text-cyan-500" : "text-slate-300"}`}>{st.n}</span>
                <span className={`text-[13px] font-bold whitespace-nowrap ${activeStep === i ? "text-slate-800" : "text-slate-400"}`}>{st.title}</span>
              </button>
            ))}
          </div>

          {/* Panel */}
          <motion.div 
            key={activeStep}
            initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
            className="bg-white border border-cyan-100 rounded-2xl p-6 md:p-10 shadow-xl shadow-cyan-900/5"
          >
            <h3 className="text-2xl font-bold text-slate-900">{steps[activeStep].title}</h3>
            <p className="text-cyan-500 text-sm font-medium mb-4">{steps[activeStep].sub}</p>
            <p className="text-slate-600 leading-relaxed mb-6">{steps[activeStep].body}</p>
            <div className="flex flex-wrap gap-2">
              {steps[activeStep].tags.map(t => (
                <span key={t} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-[11px] font-bold text-slate-500 uppercase">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ARCHITECTURE GRID */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Key Components</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <BarChart2 />, t: "Smart Scoring", d: "Weighted demographic signals." },
            { icon: <Eye />, t: "Behavioral", d: "Tracking every interaction." },
            { icon: <Zap />, t: "Predictive", d: "ML-driven probability." },
            { icon: <Shuffle />, t: "Auto Routing", d: "Instant rep assignment." },
          ].map((c, i) => (
            <FadeUp key={i} delay={i * 0.05} className="bg-white border border-cyan-100 p-6 rounded-2xl hover:border-cyan-400 transition-colors">
              <div className="text-cyan-500 mb-4">{c.icon}</div>
              <p className="font-bold text-slate-800 text-[14px] mb-1">{c.t}</p>
              <p className="text-slate-400 text-[12px]">{c.d}</p>
            </FadeUp>
          ))}
        </div>
      </div>

    </div>
  );
};

export default LeadQualification;