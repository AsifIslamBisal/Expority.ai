import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/works" },
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
            <li key={idx}>
              <NavLink
                to={item.path}
                className="flex items-center gap-1 px-2 py-1 rounded-md hover:text-cyan-500 transition"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3">
          <button className="px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm hover:shadow-md transition">
            Try Now
          </button>
          <button className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm hover:shadow-md transition">
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
            <NavLink
              key={idx}
              to={item.path}
              onClick={() => setShowMenu(false)}
              className="flex items-center justify-between w-full hover:text-cyan-600"
            >
              <p>{item.name}</p>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
}
