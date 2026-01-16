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
            items: ["Bullet Point", "Bullet Point", "Bullet Point", "Bullet Point"]
        },
        {
            title: "Constantly Updation",
            subtitle: "AI Documentation",
            items: ["Bullet Point", "Bullet Point", "Bullet Point", "Bullet Point"]
        },
        {
            title: "All-in-One System",
            subtitle: "CRM Automation",
            items: ["Bullet Point", "Bullet Point", "Bullet Point", "Bullet Point"]
        }
    ];
    return (
        <section>
            <section className="relative max-w-8xl mx-auto px-20 pt-20 pb-40 min-h-212.5 flex items-start overflow-visible">
            
            
            <div className="w-full lg:w-3/5 z-10">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                    <span className="text-[#00C2FF]">Automate</span> <span className="text-[#4D7CFF]">the Work That</span>
                    <br />
                    <span className="text-[#4D7CFF]">Slows You Down</span>
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

            
            <div className="absolute right-0 bottom-[0px] lg:bottom-[50px] w-full lg:w-1/2 flex justify-end pointer-events-none"> 
                <img 
                    src={Ai} 
                    alt="AI Robot" 
                    className="w-[150%] lg:w-[180%] h-auto object-contain max-w-none"
    
                />
            </div>
            
        </section>
        <div>
            <BrandSlider/>
        </div>
        <div className="bg-slate-50 py-20 px-10 min-h-screen">
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