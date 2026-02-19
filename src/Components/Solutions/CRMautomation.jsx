import { motion } from 'framer-motion';
import { FaCog, FaRobot, FaChartBar, FaHandshake } from 'react-icons/fa';
import crm from '../../assets/lottiefiles/crm.json'
import aWorkflow from '../../assets/lottiefiles/Automated Workflows.json'
import Lottie from 'lottie-react';

const CRMautomation = () => {

    
    return (
        <div className="min-h-screen bg-linear-to-br from-white via-cyan-50/30 to-white text-slate-800 overflow-hidden">
      {/* Hero Section */}
<section className="max-w-6xl mx-auto text-center mt-22 px-6">
  <motion.h1
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-5xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-blue-500"
  >
    CRM Workflow Automation
  </motion.h1>

  <p className="mt-6 text-lg max-w-2xl mx-auto text-slate-600">
    Turn your CRM into a smart, connected ecosystem where automation drives action, productivity, and revenue growth.
  </p>

  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.3 }}
    className=" rounded-2xl mx-auto w-full md:w-3/4 lg:w-2/3"
  >
    <Lottie animationData={crm} loop={true} />
  </motion.div>
</section>


      {/* What is CRM Automation */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold text-blue-600">What is CRM Workflow Automation?</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            CRM Workflow Automation connects your marketing, sales, and operations in one synchronized flow. It ensures that every task, communication, and update happens automatically based on intelligent triggers.
          </p>
          <ul className="mt-6 space-y-2 text-slate-700">
            <li>✔ Auto-assign leads and follow-up tasks</li>
            <li>✔ Trigger actions at every sales stage</li>
            <li>✔ Improve transparency and efficiency</li>
          </ul>
        </motion.div>
        <motion.div initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
           <Lottie animationData={aWorkflow} loop={true} />
        </motion.div>
      </section>

      {/* Challenges */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-600">Business Challenges Without Automation</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {['Sales reps forgetting tasks','Manual stage updates','Delayed internal communication','Poor customer tracking','No visibility into deal progress','Inefficient onboarding'].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl border border-slate-100 shadow-sm bg-gradient-to-br from-white to-slate-50 text-center hover:shadow-md transition"
              >
                <p className="font-medium text-slate-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-blue-600">Our Implementation Framework</h2>
        <div className="mt-12 grid md:grid-cols-4 gap-8">
          {[
            { icon: FaCog, title: '1. Process Audit', desc: 'Analyze your workflows to identify automation opportunities.' },
            { icon: FaRobot, title: '2. Workflow Design', desc: 'Map out logic, triggers, and process rules.' },
            { icon: FaChartBar, title: '3. Automation Deployment', desc: 'Implement tasks, email triggers, and segmentation.' },
            { icon: FaHandshake, title: '4. Continuous Optimization', desc: 'Track results and refine workflows for peak performance.' },
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-2xl shadow-lg border border-slate-100 text-center"
            >
              <step.icon className="text-3xl text-cyan-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-800">{step.title}</h4>
              <p className="text-sm text-slate-600 mt-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Business Impact */}
      <section className=" py-20 text-center">
        <h2 className="text-3xl font-bold">Business Impact</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {['Increased productivity','Faster deal closure','Reduced errors','Improved coordination','Enhanced experience','Streamlined operations'].map((impact, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="bg-blue-300 text-gray-900 rounded-xl p-6 border border-white/20">
              <p className="font-medium">{impact}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12">
          <a href="/booking" className="px-8 py-4  text-white font-semibold rounded-lg shadow hover:scale-105 transition bg-[#3b82f6]">Book a Demo</a>
        </div>
      </section>
    </div>
    );
};

export default CRMautomation;