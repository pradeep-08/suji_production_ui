import React from "react";
import { Menu, X } from "lucide-react";
import logo from "../img/Logo/Logo2.png";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleNavigation = (sectionId: string) => {
    navigate("/"); // Keep URL clean
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay ensures React updates the page
  };
  return (
    <>
      <nav className="bg-white/95 backdrop-blur-sm fixed w-full z-50 shadow-sm">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="logo max-h-64 w-12">
                <img src={logo} alt="logo" />
              </div>
              <h1 className="ml-2 text-xl font-semibold font-math text-gray-900">
                Suji Hair and Makeup
              </h1>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/#"
                onClick={() => handleNavigation("hero")}
                className="text-pink-400 hover:text-pink-600 transition"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => handleNavigation("about")}
                className="text-black-700 hover:text-pink-600 transition"
              >
                About
              </Link>
              <Link
                to="/gallery"
                onClick={() => handleNavigation("gallery")}
                className="text-black-700 hover:text-pink-600 transition"
              >
                Gallery
              </Link>
              <Link
                to="/services"
                onClick={() => handleNavigation("services")}
                className="text-black-700 hover:text-pink-600 transition"
              >
                Services
              </Link>
              <Link
                to="/contact"
                onClick={() => handleNavigation("contact")}
                className="text-black-700 hover:text-pink-600 transition"
              >
                Contact
              </Link>

              <div className=" icons flex flex-wrap content-center py-2 justify-center list-none ">
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

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:text-pink-600"
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-pink-600"
              >
                About
              </a>
              <a
                href="#gallery"
                className="block px-3 py-2 text-gray-700 hover:text-pink-600"
              >
                Gallery
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-pink-600"
              >
                Services
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-pink-600"
              >
                Contact
              </a>

              <div className=" icons  p-2 flex flex-wrap list-none content-center">
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
    </>
  );
}

{
  /* <button className="w-full text-left px-3 py-2 text-pink-600 font-medium">
              Book Now
            </button> */
}
