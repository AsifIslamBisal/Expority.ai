import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

// Images
import image1 from '../../assets/Mortgage/image 1.png';
import image2 from '../../assets/Mortgage/image 2.png';
import image3 from '../../assets/Mortgage/image 3.png';
import image4 from '../../assets/Mortgage/image 4.png';
import image5 from '../../assets/Mortgage/image 5.png';
import image6 from '../../assets/Mortgage/video thumbnail.png';
import avatar1 from '../../assets/Mortgage/client testimonial 1.png'; 
import avatar2 from '../../assets/Mortgage/client testimonial 2.png'; 
import { PiRainbowThin } from 'react-icons/pi';
import AgentClientVideo from '../../assets/Mortgage/Agent_Client.mp4'

const RealEstate = () => {


        
        const testimonialImages = [
            { id: 1, src: avatar1 }, 
            { id: 2, src: avatar2 }
        ];
    
        // video: true/false
      const isVideo = true;

    return (
        <section>
            <div className="min-h-screen bg-linear-to-br from-white via-cyan-50/30 to-white p-8 md:p-16 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Left Content Column */}
                <div className="lg:col-span-6 flex flex-col min-h-[85vh] justify-between">
                    <div className="space-y-10">
                        <div className="space-y-1">
                            <h1 className="text-6xl md:text-6xl font-semibold text-[#3B82F6] leading-tight tracking-tight">
                                AI Automation for
                            </h1>
                            <h1 className="text-6xl md:text-6xl font-bold text-[#3B82F6] tracking-tight">
                                Real Estate
                            </h1>
                        </div>

                        <div className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 rounded-full text-gray-500 bg-white shadow-sm">
                            <PiRainbowThin />
                            <span className="text-sm font-medium">Here to help you shine.</span>
                        </div>

                        {/* Testimonials */}
                        <div className="space-y-3 pt-4">
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {testimonialImages.map((img) => (
                                        <img
                                            key={img.id}
                                            className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-sm bg-gray-100"
                                            src={img.src} 
                                            alt="User"
                                        />
                                    ))}
                                    <div className="w-12 h-12 rounded-full bg-black border-4 border-white flex items-center justify-center text-white text-xl font-bold">
                                        +
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold text-gray-800">15,392+</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-400 font-medium">Our client testimonials</p>
                        </div>
                    </div>

                    {/* Bottom CTA and Text */}
                    <div className="mt-32 flex flex-col md:flex-row items-end gap-12 mb-8">
                        <div className="mb-2">
                            <button className="group flex items-center gap-4 bg-[#3B82F6] hover:bg-blue-600 text-white pl-8 pr-2 py-2 rounded-full transition-all shadow-xl shadow-blue-100">
                                <span className="text-lg font-semibold">Try now</span>
                                <div className="bg-white p-3 rounded-full text-[#3B82F6]">
                                    <ArrowUpRight size={24} />
                                </div>
                            </button>
                        </div>
                        <div className="flex flex-col gap-5 max-w-sm">
                            <h3 className="text-4xl font-semibold text-gray-800 leading-[1.1]">
                                Client Acquisition has <br /> never been easy befor!
                            </h3>
                            <p className="text-gray-500 text-base leading-relaxed">
                                There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Images Column */}
                <div className="lg:col-span-6 relative flex items-start justify-center lg:justify-end gap-2 pt-10">
                    
                    {/* Left side: Badges + Image 2  */}
                    <div className="relative mt-44">
                        
                        <div className="absolute -top-36 left-0 flex flex-col items-end gap-3 z-20 w-full">
                            <div className="bg-white hover:bg-blue-600 hover:text-white border border-gray-100 px-6 py-2.5 rounded-full text-[13px] font-medium text-gray-600 shadow-md">
                                Smart Automation
                            </div>
                            <div className="flex gap-2">
                                <div className="bg-white hover:bg-blue-600 hover:text-white border border-gray-100 px-5 py-2.5 rounded-full text-[13px] font-medium text-gray-600 shadow-md">
                                    Fully cust
                                </div>
                                <div className="bg-white hover:bg-blue-600 hover:text-white px-5 py-2.5 rounded-full text-[13px] font-medium text-gray-600 shadow-md">
                                    Client Onboard
                                </div>
                            </div>
                        </div>
                        <img
                            src={image2}
                            alt="Professional"
                            className="w-80 h-[480px]  relative z-10"
                        />
                    </div>

                    {/* Right side: Image 1 */}
                    <div className="relative">
                        <img
                            src={image1}
                            alt="Agent"
                            className="w-80 h-[600px]  "
                        />
                    </div>
                </div>

            </div>
        </div>
        <section className="bg-linear-to-br from-white via-cyan-50/30 to-white py-16 px-8 md:px-24 font-sans text-gray-900">
  {/* Top Section */}
  <div className="flex flex-col md:flex-row justify-between items-start mb-16">
    <div>
      <h2 className="text-5xl font-light mb-2">Problems</h2>
      <h2 className="text-5xl font-bold">We Solve</h2>
    </div>

    <div className="mt-8 md:mt-0 max-w-md">
      <div className="flex flex-wrap gap-3 mb-6">
        <button className="px-6 py-2 hover:bg-blue-600 border border-gray-300 hover:text-white rounded-full text-sm  transition">Leads</button>
        <button className="px-6 py-2 hover:bg-blue-600 border border-gray-300 hover:text-white rounded-full text-sm">Client Follow-up</button>
        <button className="px-6 py-2 hover:bg-blue-600 border border-gray-300 hover:text-white rounded-full text-sm transition">Schedule</button>
      </div>
      <p className="text-gray-500 leading-relaxed">
        There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form.
      </p>
    </div>
  </div>

  {/* Main Content Grid */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    
    {/* Left Side: Target Image & Heading */}
    <div className="lg:col-span-7 flex flex-col md:flex-row gap-8 items-center">
      {/* Box with rounded corners */}
      <div className="relative w-full max-w-[320px] aspect-square rounded-[40px] overflow-hidden flex-shrink-0">
          <img 
            src={image3} 
            alt="Targeting" 
            className="w-full h-full object-cover"
          />
          {/* Arrow Icon */}
          <div className="absolute top-6 right-6 w-10 h-10 border border-white/50 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm">
              <span className="text-white text-xl">↗</span>
          </div>
      </div>
      
      <div className="max-w-xs">
        <h3 className="text-3xl font-semibold mb-4 leading-tight">
          Targetting actual Clients
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          There are many variations of passages of Lorem Ipsum available, 
          but the majority have suffered alteration in some form.
        </p>
      </div>
    </div>

    {/* Right Side: Round Image & Stats */}
    <div className="lg:col-span-5 flex items-center gap-2">
      <div className="relative w-40 h-40 md:w-56 md:h-56 flex-shrink-0">
        <img 
          src={image4} 
          alt="Handshake" 
          className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg" 
        />
      </div>

      {/* Stats */}
      <div className="space-y-6">
        <div>
          <h4 className="text-3xl font-semibold leading-none">45K <span>+</span></h4>
          <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-[2px] mt-1 font-semibold">Leads Generation</p>
        </div>
        <div className='pl-15'>
          <h4 className="text-3xl font-semibold leading-none">78% <span>+</span></h4>
          <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-[2px] mt-1 font-semibold">Conversion Rate</p>
        </div>
        <div>
          <h4 className="text-3xl font-semibold leading-none">24/7</h4>
          <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-[2px] mt-1 font-semibold">Client Support</p>
        </div>
      </div>
    </div>

  </div>
</section>
<section className="bg-linear-to-br from-white via-cyan-50/30 to-white py-20 px-8 md:px-24 font-sans text-gray-900 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content Side */}
        <div className="flex flex-col space-y-10">
          <div>
            <h2 className="text-6xl font-normal leading-tight">What We</h2>
            <h2 className="text-6xl font-bold leading-tight">Automate</h2>
          </div>

          <ul className="space-y-4">
            {['Feature', 'Feature', 'Feature', 'Feature', 'Feature'].map((item, index) => (
              <li key={index} className="flex items-center text-2xl font-medium text-gray-800">
                <span className="mr-3 text-3xl">•</span> {item}
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <button className="bg-[#4285f4] hover:bg-blue-600 text-white pl-8 pr-2 py-2 rounded-full flex items-center gap-6 transition-all group">
              <span className="text-lg font-medium">Try now</span>
              <div className="bg-white text-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
                <span className="text-xl font-bold">↗</span>
              </div>
            </button>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="relative">
          <div className="absolute -top-12 right-0 md:right-5 z-10 ">
            <div className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded-full bg-white/50 backdrop-blur-sm text-gray-600 text-sm">
              <PiRainbowThin />
              <span>Here to help you shine.</span>
            </div>
          </div>

          {/* Robot Image Container */}
          <div className="rounded-[60px] overflow-hidden shadow-2xl mt-5">
            <img 
              src={image5}
              alt="AI Robot Automating Tasks" 
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </div>

      </div>
    </section>
    <section className="bg-linear-to-br from-white via-cyan-50/30 to-white py-20 px-8 md:px-24 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
       <div className="relative overflow-hidden rounded-[60px] shadow-xl aspect-square lg:aspect-auto lg:h-[600px]">
  <video 
    autoPlay 
    muted 
    loop 
    playsInline
    className="w-full h-full object-cover"
    poster="path-to-your-poster-image.jpg"
  >
    <source src={AgentClientVideo} type="video/mp4" />
  </video>
</div>
        {/* Right Side: Content */}
        <div className="flex flex-col space-y-8">
          <div>
            <h2 className="text-5xl font-light leading-tight">Outcomes of</h2>
            <h2 className="text-5xl font-bold leading-tight">Automation</h2>
          </div>

          <p className="text-gray-500 max-w-md leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form.
          </p>

          {/* Tags/Chips */}
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-2 border border-gray-300 hover:bg-blue-600 hover:text-white rounded-full text-sm  transition shadow-md">Automated Call</button>
            <div className="flex gap-3">
              <button className="px-6 py-2 border border-gray-300 hover:bg-blue-600 hover:text-white rounded-full text-sm  transition shadow-md">Voice Agent</button>
              <button className="px-6 py-2 border border-gray-300  hover:bg-blue-600 hover:text-white rounded-full text-sm transition shadow-md">Automated SMS</button>
            </div>
          </div>

          {/* Testimonials / Stats */}
          <div className="pt-6 flex flex-col space-y-4">
            <div className="flex items-center">
              <div className="flex -space-x-4">
                <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src={avatar1} alt="user" />
                <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src={avatar2} alt="user" />
                <div className="w-12 h-12 rounded-full border-2 border-white bg-black flex items-center justify-center text-white text-xl font-bold">
                  +
                </div>
              </div>
              <div className="ml-6">
                <span className="text-3xl font-semibold block">15,392+</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm font-medium">Our client testimonials</p>
          </div>
        </div>

      </div>
    </section>
    <section className="bg-linear-to-br from-white via-cyan-50/30 to-white py-24 px-8 md:px-24 font-sans text-gray-900 flex flex-col items-center text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Main Heading */}
        <h2 className="text-6xl md:text-7xl font-normal tracking-tight mb-10">
          Get Started
        </h2>

        <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl mb-12">
          Expert in machine learning and AI development. Spearheading innovation to bring smarter solutions to 
          designers. 10+ years of experience in AI and design automation.
        </p>

        {/* Custom Button */}
        <div className="mt-4">
          <button className="bg-[#4285f4] hover:bg-blue-600 text-white pl-10 pr-2 py-2.5 rounded-full flex items-center gap-8 transition-all group shadow-lg shadow-blue-200">
            <span className="text-xl font-medium">Try now</span>
            <div className="bg-white text-blue-600 w-11 h-11 rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
              <span className="text-2xl font-bold">↗</span>
            </div>
          </button>
        </div>

      </div>
    </section>
        </section>
    );
};

export default RealEstate;