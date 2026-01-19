import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-linear-to-br from-white via-cyan-50/30 to-white">
      <div className="w-full py-16 px-8 md:px-20 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12 border-b border-gray-200">
          
          {/* Logo and Description */}
          <div className="md:col-span-1 space-y-2">
            <div className="w-40">
                <img src={logo} alt="" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Expority AI is a forward-thinking platform, designed with a focus on intuitive navigation and impactful work.
            </p>
          </div>

          {/* Get Help */}
          <div>
            <h4 className="font-bold mb-4 text-gray-900">Get Help</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">Resources</li>
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">FAQs</li>
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">Events</li>
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">Support</li>
            </ul>
          </div>

          {/* Read More */}
          <div>
            <h4 className="font-bold mb-4 text-gray-900">Read More</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">Testimonials</li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-bold mb-4 text-gray-900">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">Services</li>
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">Case Studies</li>
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">Our Work</li>
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          {/* Learn More */}
          <div>
            <h4 className="font-bold mb-4 text-gray-900">Learn More</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">Resources</li>
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">Company</li>
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">Connect</li>
            </ul>
          </div>
        </div>

        {/* Get in Touch Section */}
        <div className="pt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Address */}
            <div className="flex items-start gap-4 p-6 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-linear-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shrink-0">
                <FaMapMarkerAlt className="text-white text-lg" />
              </div>
              <div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  300-25 Sheppard Avenue West,<br />
                  ONTARIO, CANADA
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-6 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-linear-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shrink-0">
                <FaEnvelope className="text-white text-lg" />
              </div>
              <div>
                <p className="text-sm text-gray-900 font-medium pt-2">
                  contact@expority.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 p-6 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-linear-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shrink-0">
                <FaPhone className="text-white text-lg" />
              </div>
              <div>
                <p className="text-sm text-gray-900 font-medium pt-2">
                  +1 647-496-0906
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-5 text-gray-600">
            <div className="w-10 h-10 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <a href="https://www.linkedin.com/company/exmarketing/"><FaLinkedinIn className="text-white text-lg" /></a>
            </div>
            <div className="w-10 h-10 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <a href="https://www.facebook.com/share/14VkXSqMYvT/?mibextid=wwXIfr"><FaFacebookF className="text-white text-lg" /></a>
            </div>
            <div className="w-10 h-10 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <a href="https://www.instagram.com/expority_marketing?igsh=OHY3YTAza2x0azZt"><FaInstagram className="text-white text-lg" /></a>
            </div>
          </div>

          <div className="text-sm text-gray-600 flex gap-4">
            <a href="/privacy-policy"><span className="hover:text-cyan-600 cursor-pointer transition-colors">Privacy Policy</span></a>
            <span>•</span>
            <span className="hover:text-cyan-600 cursor-pointer transition-colors">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-cyan-600 cursor-pointer transition-colors">Cookie Policy</span>
          </div>
        </div>

        <div className="pt-8 text-center text-sm text-gray-500">
          © 2025 <span className="font-semibold text-gray-700">Expority.AI</span>  All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;