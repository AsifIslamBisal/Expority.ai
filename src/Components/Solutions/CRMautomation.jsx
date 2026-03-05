import { motion } from 'framer-motion';
import { FaCog, FaRobot, FaChartBar, FaHandshake } from 'react-icons/fa';
import crm from '../../assets/lottiefiles/crm.json'
import Automation from '../../assets/CRM/Automation Deployment.svg'
import Continuous from '../../assets/CRM/Continuous Optimization.svg'
import Process from '../../assets/CRM/Process Audit.svg'
import WorkflowDesign from '../../assets/CRM/Workflow Design.svg'
import aWorkflow from '../../assets/lottiefiles/Automated Workflows.json'
import Lottie from 'lottie-react';

const CRMautomation = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-white via-cyan-50/30 to-white text-slate-800 overflow-x-hidden">
            
            {/* 1. Hero Section */}
            <section className="max-w-6xl mx-auto text-center mt-25 md:mt-28 px-6">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-blue-500 leading-tight"
                >
                    CRM Workflow Automation
                </motion.h1>

                <p className="mt-6 text-base md:text-lg max-w-2xl mx-auto text-slate-600 px-2">
                    Turn your CRM into a smart, connected ecosystem where automation drives action, productivity, and revenue growth.
                </p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mx-auto w-full sm:w-3/4 lg:w-2/3 "
                >
                    <Lottie animationData={crm} loop={true} className="w-full h-auto" />
                </motion.div>
            </section>

            {/* 2. What is CRM Automation - Responsive Grid */}
            <section className="max-w-6xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <motion.div 
                    initial={{ x: -40, opacity: 0 }} 
                    whileInView={{ x: 0, opacity: 1 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center md:text-left"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-600">What is CRM Workflow Automation?</h2>
                    <p className="mt-4 text-slate-600 leading-relaxed text-sm md:text-base">
                        CRM Workflow Automation connects your marketing, sales, and operations in one synchronized flow. It ensures that every task, communication, and update happens automatically based on intelligent triggers.
                    </p>
                    <ul className="mt-6 space-y-3 text-slate-700 inline-block text-left">
                        <li className="flex items-start gap-2"><span>✔</span> Auto-assign leads and follow-up tasks</li>
                        <li className="flex items-start gap-2"><span>✔</span> Trigger actions at every sales stage</li>
                        <li className="flex items-start gap-2"><span>✔</span> Improve transparency and efficiency</li>
                    </ul>
                </motion.div>
                
                <motion.div 
                    initial={{ x: 40, opacity: 0 }} 
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }} 
                    transition={{ duration: 0.6 }}
                    className="order-first md:order-last" 
                >
                    <Lottie animationData={aWorkflow} loop={true} className="w-full max-w-sm mx-auto" />
                </motion.div>
            </section>

            {/* 3. Challenges - Responsive Grid */}
            <section className=" py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600">Business Challenges Without Automation</h2>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {['Sales reps forgetting tasks','Manual stage updates','Delayed internal communication','Poor customer tracking','No visibility into deal progress','Inefficient onboarding'].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="p-5 md:p-6 rounded-xl border border-slate-100 shadow-sm bg-gradient-to-br from-white to-slate-50 text-center hover:shadow-md transition"
                            >
                                <p className="font-medium text-slate-700 text-sm md:text-base">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Implementation Steps - Responsive Grid */}
            <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600">Our Implementation Framework</h2>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {[
                        { icon: Process, title: '1. Process Audit', desc: 'Analyze your workflows to identify automation opportunities.' },
                        { icon: WorkflowDesign, title: '2. Workflow Design', desc: 'Map out logic, triggers, and process rules.' },
                        { icon: Automation, title: '3. Automation Deployment', desc: 'Implement tasks, email triggers, and segmentation.' },
                        { icon: Continuous, title: '4. Continuous Optimization', desc: 'Track results and refine workflows for peak performance.' },
                    ].map((step, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="p-6 bg-white rounded-2xl shadow-lg border border-slate-100 text-center flex flex-col items-center"
                        >
                            <img
                                src={step.icon}
                                alt={step.title}
                                className="w-12 h-12 mb-4"
                            />
                            <h4 className="font-semibold text-slate-800">{step.title}</h4>
                            <p className="text-xs md:text-sm text-slate-600 mt-2">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 5. Business Impact - Responsive Flex/Grid */}
            <section className="py-16 md:py-24 px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold">Business Impact</h2>
                <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
                    {['Increased productivity','Faster deal closure','Reduced errors','Improved coordination','Enhanced experience','Streamlined operations'].map((impact, i) => (
                        <motion.div 
                            key={i} 
                            whileHover={{ y: -5 }} 
                            className="bg-blue-50 text-blue-800 rounded-xl p-4 md:p-6 border border-blue-100 shadow-sm"
                        >
                            <p className="font-semibold text-xs md:text-base">{impact}</p>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-12">
                    <a 
                        href="/booking" 
                        className="inline-block px-10 py-4 text-white font-bold rounded-full shadow-lg hover:shadow-cyan-200/50 hover:scale-105 transition-all duration-300 bg-blue-600"
                    >
                        Book a Demo
                    </a>
                </div>
            </section>
        </div>
    );
};

export default CRMautomation;