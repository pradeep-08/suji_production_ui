import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X, PhoneCall } from "lucide-react";
import logo from "../img/Logo/newLogo.webp";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const pageTitles: Record<string, string> = {
    "/": "Suji Hair & Makeup",
    "/about": "Meet Suji",
    "/gallery": "Bridal Gallery",
    "/services": "Our Services",
    "/contact": "Book a Consultation",
  };

  const currentTitle = pageTitles[location.pathname] || "Suji Hair & Makeup";

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `relative font-sans text-sm font-medium tracking-wide transition-all duration-300 py-1.5 px-3 rounded-full ${
      isActive
        ? "text-bridal-rose bg-bridal-blush/40 font-semibold"
        : "text-bridal-brown hover:text-bridal-rose hover:bg-bridal-blush/20"
    }`;
  };

  const handleMobileNavClick = () => setIsOpen(false);

  return (
    <>
      {/* Floating Navbar */}
      <nav className="fixed w-full z-50 flex justify-center mt-4 sm:mt-6 transition-all duration-300">
        <div className="bg-[#FFF8F2]/95 border border-bridal-champagne/30 text-bridal-brown flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full shadow-lg w-[92%] max-w-6xl backdrop-blur-md">
          
          {/* === Mobile View Header === */}
          <div className="md:hidden flex items-center justify-between w-full">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center border border-bridal-champagne/20 shadow-sm overflow-hidden">
                <img src={logo} alt="Suji Hair & Makeup Logo" className="w-8 h-8 object-cover" />
              </div>
              <span className="font-playfair font-bold text-sm tracking-tight text-bridal-brown">
                Suji Hair & Makeup
              </span>
            </Link>
            
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/917305931283"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2 transition shadow-sm"
                aria-label="Chat on WhatsApp"
              >
                <IoLogoWhatsapp size={16} />
              </a>
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-bridal-brown hover:text-bridal-rose transition p-1"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* === Desktop View === */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Left: Brand Logo & Typography */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center border border-bridal-champagne/20 shadow-sm transition-transform duration-300 group-hover:scale-105 overflow-hidden">
                <img src={logo} alt="Suji Hair & Makeup Logo" className="w-9 h-9 object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-playfair font-extrabold text-base tracking-wide text-bridal-brown group-hover:text-bridal-rose transition-colors duration-300">
                  Suji Hair & Makeup
                </span>
                <span className="text-[10px] uppercase font-sans tracking-widest text-bridal-rose/85 font-semibold -mt-1">
                  Bridal Artist
                </span>
              </div>
            </Link>

            {/* Center: Elegant Nav Links */}
            <div className="flex items-center gap-1.5">
              <Link to="/" className={getLinkClass("/")}>Home</Link>
              <Link to="/about" className={getLinkClass("/about")}>Meet Suji</Link>
              <Link to="/gallery" className={getLinkClass("/gallery")}>Bridal Gallery</Link>
              <Link to="/services" className={getLinkClass("/services")}>Services</Link>
              <Link to="/contact" className={getLinkClass("/contact")}>Contact</Link>
            </div>

            {/* Right: Booking Action */}
            <div>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-bridal-rose hover:bg-bridal-brown text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md transition-all duration-300 hover:shadow-lg active:scale-95"
              >
                <PhoneCall size={14} />
                <span>Book Now</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Panel */}
      {isOpen && (
        <div className="fixed top-[80px] left-1/2 transform -translate-x-1/2 w-[92%] max-w-6xl bg-[#FFF8F2] border border-bridal-champagne/20 rounded-2xl text-center py-6 px-4 z-40 md:hidden shadow-xl animate-fade-in">
          <ul className="space-y-4 text-bridal-brown text-base font-semibold">
            <li>
              <Link 
                to="/" 
                className={`block py-2 rounded-xl transition ${location.pathname === "/" ? "text-bridal-rose bg-bridal-blush/30" : "hover:text-bridal-rose"}`} 
                onClick={handleMobileNavClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`block py-2 rounded-xl transition ${location.pathname === "/about" ? "text-bridal-rose bg-bridal-blush/30" : "hover:text-bridal-rose"}`} 
                onClick={handleMobileNavClick}
              >
                Meet Suji
              </Link>
            </li>
            <li>
              <Link 
                to="/gallery" 
                className={`block py-2 rounded-xl transition ${location.pathname === "/gallery" ? "text-bridal-rose bg-bridal-blush/30" : "hover:text-bridal-rose"}`} 
                onClick={handleMobileNavClick}
              >
                Bridal Gallery
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className={`block py-2 rounded-xl transition ${location.pathname === "/services" ? "text-bridal-rose bg-bridal-blush/30" : "hover:text-bridal-rose"}`} 
                onClick={handleMobileNavClick}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`block py-2 rounded-xl transition ${location.pathname === "/contact" ? "text-bridal-rose bg-bridal-blush/30" : "hover:text-bridal-rose"}`} 
                onClick={handleMobileNavClick}
              >
                Book Consultation
              </Link>
            </li>
          </ul>

          <div className="h-[1px] bg-bridal-champagne/20 my-5" />

          {/* Social Connections */}
          <div className="flex justify-center items-center gap-4 text-lg">
            <a className="bg-white hover:bg-bridal-blush text-bridal-brown p-2 rounded-full shadow-sm transition" href="https://www.facebook.com/sujihairandmakeup/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a className="bg-white hover:bg-bridal-blush text-bridal-brown p-2 rounded-full shadow-sm transition" href="https://www.instagram.com/sujihairandmakeup/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a className="bg-white hover:bg-bridal-blush text-bridal-brown p-2 rounded-full shadow-sm transition" href="https://www.youtube.com/@sujihairandmakeup" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
            <a className="bg-white hover:bg-bridal-blush text-bridal-brown p-2 rounded-full shadow-sm transition" href="mailto:sujihairandmakeup@gmail.com" aria-label="Email"><MdEmail /></a>
            <a className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-sm transition" href="https://wa.me/917305931283" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><IoLogoWhatsapp /></a>
          </div>
        </div>
      )}
    </>
  );
}
