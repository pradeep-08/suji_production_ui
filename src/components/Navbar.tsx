import React from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../img/Logo/Logo2.png";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NavLink, Link, NavLinkProps } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const pageTitles: Record<string, string> = {
    "/": "Suji Hair and Makeup",
    "/about": "Why Us ?",
    "/gallery": "Gallery",
    "/services": "Services",
    "/contact": "Contact",
  };

  const currentTitle = pageTitles[location.pathname] || "";

  const navLinkClass: NavLinkProps["className"] = ({ isActive }) =>
    isActive
      ? "text-white font-semibold bg-white/10 px-4 py-1.5 rounded-full"
      : "text-white hover:bg-white/10 hover:px-4 hover:py-1.5 hover:rounded-full transition-all duration-300";

  const handleMobileNavClick = () => setIsOpen(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed w-full z-50 flex justify-center  mt-6">
        <div className="bg-black/80 backdrop-blur-md text-white flex items-center justify-between px-4 py-2 rounded-full shadow-2xl w-[90%] max-w-6xl">

          {/* === Mobile View === */}
          <div className="md:hidden flex items-center justify-center bg-white text-black rounded-full w-10 h-10">
            <img src={logo} alt="logo" className="w-8 h-8 rounded-full" />
          </div>
          <div className="md:hidden flex-1 text-center font-semibold text-white text-base">
            {currentTitle}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="ml-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* === Desktop View === */}
          <div className="hidden md:flex items-center w-full">
            {/* Left: Logo + Title */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center">
                <img src={logo} alt="logo" className="w-6 h-6" />
              </div>
              <span className="whitespace-nowrap font-semibold">
                Suji Hair and Makeup
              </span>
            </div>

            {/* Center: Nav Links */}
            <div className="flex-1 flex justify-center items-center gap-6 text-base font-medium">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/about" className={navLinkClass}>Why Us ?</NavLink>
              <NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink>
              <NavLink to="/services" className={navLinkClass}>Services</NavLink>
              <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            </div>

            {/* Right: Say Hello Button */}
            <div className="flex-shrink-0 ml-4">
              <Link to="/contact" className="relative group">
                <div className="relative z-10 rounded-full bg-black px-5 py-1.5 text-white text-sm font-medium flex items-center justify-center">
                  Say Hello
                </div>
                <div className="absolute inset-0 rounded-full p-[2px] bg-white group-hover:bg-gradient-to-r from-cyan-400 via-pink-500 to-orange-400 transition-transform duration-300 group-hover:scale-105"></div>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="fixed top-[100px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl bg-black/90 rounded-xl text-center py-4 z-40 md:hidden shadow-xl">
          <ul className="space-y-4 text-white text-base font-medium">
            <li><NavLink to="/" className={navLinkClass} onClick={handleMobileNavClick}>Home</NavLink></li>
            <li><NavLink to="/about" className={navLinkClass} onClick={handleMobileNavClick}>Why Us ?</NavLink></li>
            <li><NavLink to="/gallery" className={navLinkClass} onClick={handleMobileNavClick}>Gallery</NavLink></li>
            <li><NavLink to="/services" className={navLinkClass} onClick={handleMobileNavClick}>Our Services</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClass} onClick={handleMobileNavClick}>Contact Us</NavLink></li>
          </ul>

          {/* Social Icons */}
          <div className="flex justify-center mt-4 gap-4 text-xl">
            <a href="https://www.facebook.com/sujihairandmakeup/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/sujihairandmakeup/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a href="mailto:sujihairandmakeup@gmail.com"><MdEmail /></a>
            <a href="https://wa.me/9941492115" target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp /></a>
          </div>
        </div>
      )}
    </>
  );
}
