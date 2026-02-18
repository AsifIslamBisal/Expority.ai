import React from 'react';
import { motion } from 'framer-motion';
import { Target, Edit3, Users, BarChart2, DollarSign } from 'lucide-react';

const SocialMediaManager = () => {

     const sections = [
    {
      icon: Target,
      title: ' Strategy Development',
      points: [
        'Create a content strategy aligned with business goals',
        'Define the target audience',
        'Choose the right platforms (Facebook, LinkedIn, Instagram, etc.)',
        'Plan a monthly content calendar',
      ],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Edit3,
      title: ' Content Creation & Management',
      points: [
        'Write captions and posts',
        'Design or coordinate visuals',
        'Create short-form videos (Reels, Shorts)',
        'Maintain a consistent brand voice',
      ],
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Users,
      title: ' Community Management',
      points: [
        'Reply to comments & DMs',
        'Build relationships with followers',
        'Handle negative feedback professionally',
      ],
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: BarChart2,
      title: ' Analytics & Performance Tracking',
      points: [
        'Monitor reach, engagement, and CTR',
        'Analyze which content performs best',
        'Optimize strategy based on data',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: DollarSign,
      title: ' Paid Ads (Optional but Powerful)',
      points: [
        'Run Meta ads',
        'Retarget website visitors',
        'Optimize conversion campaigns',
      ],
      color: 'from-amber-500 to-orange-500',
    },
  ];
    return (
        <section className="min-h-screen w-full bg-linear-to-br from-white via-cyan-50/30 to-white flex flex-col items-center justify-center p-10 font-sans">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-800 mt-18 mb-10 text-center"
      >
        Core Responsibilities — AI-Powered Social Media Manager
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {sections.map(({ icon: Icon, title, points, color }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`rounded-2xl shadow-xl bg-white/80 backdrop-blur-md border border-white/40 p-6 hover:shadow-2xl transition transform hover:-translate-y-1`}
          >
            <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-md`}>
              <Icon size={20} />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">{title}</h2>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              {points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
    );
};

export default SocialMediaManager;