import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  // ডিফল্ট হিসেবে খালি রাখা হয়েছে, useEffect দিয়ে সেট হবে
  const [openIndex, setOpenIndex] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // মোবাইলের জন্য শুধু ১ম টা ওপেন
        setOpenIndex([0]);
      } else {
        // ডেস্কটপের জন্য আগের মতো ০ এবং ৬ ওপেন
        setOpenIndex([0, 6]);
      }
    };

    // শুরুতে একবার রান হবে
    handleResize();

    // উইন্ডো রিসাইজ করলে আপডেট হবে
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const faqsColumn1 = [
    {
      question: "What benefits can I expect?",
      answer: "Faster lead response, higher engagement, more bookings, less manual work, better customer experience, and more time to grow your business."
    },
    {
      question: "Do AI Agents handle real conversations?",
      answer: "Yes. Our AI Agents sound natural, answer questions, and guide leads just like a human assistant."
    },
    {
      question: "What does the AI Agent service do?",
      answer: "They work 24/7 to engage visitors, qualify leads, answer questions, and book appointments automatically, proactively nurturing leads so you can focus on high-value work."
    },
    {
      question: "What is Workflow Automation?",
      answer: "It automates repetitive tasks: follow-ups, appointment reminders, and lead nurturing—reducing manual work and errors while improving efficiency and client satisfaction."
    }
  ];

  const faqsColumn2 = [
    {
      question: "What makes Expority AI different?",
      answer: "Unlike standard chat bots, our AI understands your business, connects conversations with workflows, and automatically follows up, qualifies, and moves leads forward."
    },
    {
      question: "Which industries benefit most?",
      answer: "Service-driven businesses like real estate, financial services, healthcare, education, marketing agencies, e-commerce, and any business handling high volumes of inquiries."
    },
    {
      question: "Do I need technical knowledge?",
      answer: "No. We handle setup, configuration, and optimization, and the system is easy to manage."
    },
    {
      question: "Can Expority integrate with my business?",
      answer: "Yes. Our AI works seamlessly with your existing processes and tools."
    }
  ];

  const toggleFAQ = (index) => {
    if (openIndex.includes(index)) {
      setOpenIndex(openIndex.filter(i => i !== index));
    } else {
      setOpenIndex([...openIndex, index]);
    }
  };

  const renderFAQItem = (faq, index) => (
    <div
      key={index}
      className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
    >
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full px-6 py-5 flex items-center justify-between text-left min-h-[72px]"
      >
        <span className="font-semibold text-gray-800 pr-4">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
            openIndex.includes(index) ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ${
          openIndex.includes(index) ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-linear-to-br from-white via-cyan-50/30 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-16">
          FREQUENTLY ASKED <br /> <span>QUESTIONS</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="flex flex-col gap-6">
            {faqsColumn1.map((faq, index) => renderFAQItem(faq, index))}
          </div>
          
          <div className="flex flex-col gap-6">
            {faqsColumn2.map((faq, index) => renderFAQItem(faq, index + 4))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;