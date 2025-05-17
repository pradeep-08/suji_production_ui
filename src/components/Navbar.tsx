import React from "react";
import { Menu, X } from "lucide-react";
import logo from "../img/Logo/Logo2.png";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-pink-600 font-semibold transition"
      : "text-gray-700 hover:text-pink-600 transition";

  return (
    <nav className="bg-white/95 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="logo max-h-64 w-12">
              <img src={logo} alt="logo" />
            </div>
            <NavLink to="/">
              <h1 className="ml-2 text-xl font-semibold font-math text-gray-900">
                Suji Hair and Makeup
              </h1>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              Why Us ?
            </NavLink>
            <NavLink to="/gallery" className={navLinkClass}>
              Gallery
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>

            <ul className="icons flex flex-wrap content-center py-2 justify-center list-none">
              <li className="p-2 hover:text-blue-600">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/sujihairandmakeup/"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="p-2 hover:text-orange-600">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/sujihairandmakeup/"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className="p-2 hover:text-red-600">
                <a href="#">
                  <FaYoutube />
                </a>
              </li>
              <li className="p-2 hover:text-red-600">
                <a href="mailto:sujihairandmakeup@gmail.com">
                  <MdEmail />
                </a>
              </li>
              <li className="p-2 hover:text-green-600">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/9941492115"
                >
                  <IoLogoWhatsapp />
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={() => setIsOpen(false)}>
              Why Us ?
            </NavLink>
            <NavLink to="/gallery" className={navLinkClass} onClick={() => setIsOpen(false)}>
              Gallery
            </NavLink>
            <NavLink to="/services" className={navLinkClass} onClick={() => setIsOpen(false)}>
              Services
            </NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>

            <ul className="icons p-2 flex flex-wrap list-none content-center">
              <li className="p-2 hover:text-blue-600">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/sujihairandmakeup/"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="p-2 hover:text-orange-600">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/sujihairandmakeup/"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className="p-2 hover:text-red-600">
                <a href="#">
                  <FaYoutube />
                </a>
              </li>
              <li className="p-2 hover:text-red-600">
                <a href="mailto:sujihairandmakeup@gmail.com">
                  <MdEmail />
                </a>
              </li>
              <li className="p-2 hover:text-green-600">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/9941492115"
                >
                  <IoLogoWhatsapp />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )} */}


{isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
              <a
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-pink-600"
              >
                Home
              </a>
              <a
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-pink-600"
              >
                About
              </a>
              <a
                href="/gallery"
                className="block px-3 py-2 text-gray-700 hover:text-pink-600"
              >
                Gallery
              </a>
              <a
                href="/services"
                className="block px-3 py-2 text-gray-700 hover:text-pink-600"
              >
                Services
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-pink-600"
              >
                Contact
              </a>

              <div className=" icons p-2 flex flex-wrap list-none  justify-center">
                <li className="p-2  hover:text-blue-600">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/sujihairandmakeup/"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li className="p-2  hover:text-orange-600">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/sujihairandmakeup/"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li className="p-2  hover:text-red-600">
                  <a href="">
                    <FaYoutube />
                  </a>
                </li>
                <li className="p-2  hover:text-red-600">
                  <a href="sujihairandmakeup@gmail.com">
                    <MdEmail />
                  </a>
                </li>
                <li className="p-2  hover:text-green-600">
                  <a target="_blank" href="https://wa.me/9941492115">
                    <IoLogoWhatsapp />
                  </a>
                </li>
              </div>
            </div>
            </div>
        )}
    </nav>
  );
  
}
