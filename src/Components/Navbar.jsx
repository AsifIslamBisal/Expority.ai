import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiChevronDown,
  FiBook,
  FiStar,
  FiMenu,
  FiX,
} from "react-icons/fi";
import logo from "../assets/logo.png";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbWorldSearch } from "react-icons/tb";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState(null); // desktop hover dropdown
  const [showMenu, setShowMenu] = useState(false); // mobile sidebar
  const [mobileDropdownIndex, setMobileDropdownIndex] = useState(null); // mobile dropdown

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Service",
      dropdown: [
        { label: "Web Development", icon: <HiOutlineDesktopComputer />, path: "/services/web" },
        { label: "Search Engine Optimization (SEO)", icon: <TbWorldSearch />, path: "/services/seo" },
        { label: "Brand Establishment & Communication", icon: <FiStar />, path: "/services/brand" },
        { label: "CRM", icon: <FiBook />, path: "/services/crm" },
        { label: "Lead Engine System", icon: <FiBook />, path: "/services/graphic" },
        { label: "AI Automation Suite", icon: <FiBook />, path: "/services/marketing" },
        { label: "AI Concierge System", icon: <FiBook />, path: "/services/printing" },
      ],
    },
    { name: "Industries", path: "/industries" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex flex-col items-center relative z-9999">
      {/* Navbar */}
      <nav
        className={`fixed top-4 w-[95%] md:w-[90%] mx-auto z-9999 flex items-center justify-between px-6 py-3 rounded-2xl border border-white/20 backdrop-blur-lg shadow-[0_8px_20px_rgba(0,255,255,0.1)] transition-all duration-300 ${
          scrolled ? "bg-white/25" : "bg-white/15"
        }`}
      >
        <Link to="/">
          <img src={logo} alt="Logo" className="w-28 md:w-36" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center text-gray-800 font-medium relative z-9999">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="relative"
              onMouseEnter={() => item.dropdown && setOpenIndex(idx)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <Link
                to={item.path || "#"}
                className="flex items-center gap-1 px-2 py-1 rounded-md hover:text-cyan-500 transition"
              >
                {item.name}
                {item.dropdown && (
                  <FiChevronDown
                    className={`text-xs transition-transform ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              {/* Desktop Dropdown (unchanged) */}
              {item.dropdown && (
                <div
                  className={`absolute left-0 top-full mt-2 w-150 rounded-xl border border-cyan-200/30 p-5 
                    bg-white/80 backdrop-blur-xl shadow-[0_8px_25px_rgba(0,200,255,0.25)] transition-all duration-300 z-9999
                    ${
                      openIndex === idx
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-rows-3 gap-4">
                    {item.dropdown.map((drop, dIdx) => (
                      <Link
                        key={dIdx}
                        to={drop.path}
                        className="group flex items-center gap-3 px-3 py-2 rounded-lg 
                          text-gray-800 transition-all duration-300 hover:bg-cyan-50 hover:text-cyan-700"
                      >
                        <span className="text-lg transition-all group-hover:text-cyan-500">
                          {drop.icon}
                        </span>
                        <span className="text-sm">{drop.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3">
          <button className="px-4 py-1.5 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 text-white text-sm hover:shadow-md transition">
            Try Now
          </button>
          <button className="px-4 py-1.5 rounded-full bg-linear-to-r from-blue-600 to-cyan-500 text-white text-sm hover:shadow-md transition">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <FiMenu
          onClick={() => setShowMenu(true)}
          className="w-6 h-6 text-gray-700 md:hidden cursor-pointer"
        />
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300 ${
          showMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setShowMenu(false)}
      ></div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-9999 shadow-lg transform transition-transform duration-300 md:hidden ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-6 border-b border-gray-300">
          <img className="w-32" src={logo} alt="Logo" />
          <FiX
            className="w-6 h-6 text-gray-600 cursor-pointer"
            onClick={() => setShowMenu(false)}
          />
        </div>

        <ul className="flex flex-col items-start gap-4 mt-5 px-6 text-lg font-medium">
          {navItems.map((item, idx) => (
            <React.Fragment key={idx}>
              {/* Dropdown or direct NavLink */}
              {item.dropdown ? (
                <button
                  onClick={() =>
                    setMobileDropdownIndex(
                      mobileDropdownIndex === idx ? null : idx
                    )
                  }
                  className="flex items-center justify-between w-full hover:text-cyan-600"
                >
                  <p>{item.name}</p>
                  <FiChevronDown
                    className={`transition-transform ${
                      mobileDropdownIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <NavLink
                  to={item.path}
                  onClick={() => setShowMenu(false)}
                  className="flex items-center justify-between w-full hover:text-cyan-600"
                >
                  <p>{item.name}</p>
                </NavLink>
              )}

              {/* Mobile Dropdown */}
              {item.dropdown && mobileDropdownIndex === idx && (
                <div className="ml-4 flex flex-col gap-2 mt-2">
                  {item.dropdown.map((drop, dIdx) => (
                    <NavLink
                      key={dIdx}
                      to={drop.path}
                      onClick={() => setShowMenu(false)}
                      className="flex items-center gap-2 text-gray-700 hover:text-cyan-500 transition"
                    >
                      <span className="text-base">{drop.icon}</span>
                      <span className="text-sm">{drop.label}</span>
                    </NavLink>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
