import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {

    const [openIndex, setOpenIndex] = useState([0, 6]);

 const faqsColumn1 = [
    {
      question: "What makes Expority AI different?",
      answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here."
    },
    {
      question: "How fast can your models adapt?",
      answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here."
    },
    {
      question: "Do I need technical knowledge?",
      answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here."
    },
    {
      question: "Can Expority integrate with our existing Business Model?",
      answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here."
    }
  ];

  const faqsColumn2 = [
    {
      question: "What industries benefit most from Expority AI?",
      answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here."
    },
    {
      question: "Is there a way to test before full integration?",
      answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here."
    },
    {
      question: "Is your AI safe for enterprise-level deployment?",
      answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here."
    },
    {
      question: "What kind of data does Expority AI require to train?",
      answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here."
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
         <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 py-16 px-4">
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