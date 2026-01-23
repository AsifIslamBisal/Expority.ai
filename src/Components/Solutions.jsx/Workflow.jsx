import React from 'react';
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
    return (
        <section>
            <section className="relative max-w-8xl mx-auto px-20 pt-20 pb-40 min-h-212.5 flex items-start overflow-visible">
            
            
            <div className="w-full lg:w-3/5 z-10">
                <h1 className="text-3xl md:text-5xl leading-tight">
    {/* Automate - এটি বোল্ড এবং সলিড কালার */}
    <span className="font-bold text-[#00C2FF]">
        Automate
    </span>
    
    {/* "the Work That" থেকে "Slows You Down" পর্যন্ত কন্টিনিউয়াস গ্রাডিয়েন্ট */}
    <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] via-[#4D7CFF] to-[#4D7CFF]">
        {" "}the Work That
        <br />
        Slows You Down
    </span>
</h1>
                
                <div className="mt-8">
                    <p className="text-gray-500 text-xl max-w-lg leading-relaxed">
                        It is a long established fact that a reader will be distracted by the readable 
                        content of a page when looking at its layout.
                    </p>
                    
                    <button className="mt-10 bg-[#4D7CFF] hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-xl text-lg">
                        Get Started
                    </button>
                </div>
            </div>

            
            <div className="absolute right-[8%] md:right-[-10%] lg:right-0 bottom-[0px] lg:bottom-[50px] w-full lg:w-1/2 flex justify-end pointer-events-none"> 
                <img 
                    src={Ai} 
                    alt="AI Robot" 
                    className="w-[150%] lg:w-[180%] h-auto object-contain max-w-none hidden sm:block"
    
                />
            </div>
            
        </section>
        <div>
            <BrandSlider/>
        </div>
        <div className="bg-linear-to-br from-white via-cyan-50/30 to-white py-20 px-10 min-h-screen">
            {/* Header Section */}
            <div className='text-center mb-16'>
                <h1 className='text-5xl font-bold text-slate-800'>Workflow Features</h1>
            </div>

            {/* Cards Container */}
            <div className='flex flex-wrap items-center justify-center gap-8'>
                {features.map((feature, index) => (
                    <div key={index} className='bg-[#E9F2FF] p-8 rounded-3xl shadow-sm w-full max-w-sm border border-blue-100'>
                        {/* Card Header */}
                        <div className='flex items-center gap-4 mb-6'>
                            <div className='bg-slate-300 p-3 rounded-xl text-slate-700'>
                                <TiDocumentAdd size={30} />
                            </div>
                            <div>
                                <p className='text-sm text-slate-500 font-medium'>{feature.title}</p>
                                <h3 className='text-xl font-bold text-slate-800'>{feature.subtitle}</h3>
                            </div>
                        </div>

                        {/* Divider */}
                        <hr className='border-blue-200 mb-6' />

                        {/* List Items */}
                        <div className='space-y-4'>
                            {feature.items.map((item, idx) => (
                                <div key={idx} className='flex items-center gap-3 text-slate-600 font-medium'>
                                    <FcOk size={20} />
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </section>
    );
};

export default Workflow;