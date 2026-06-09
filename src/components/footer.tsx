import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../img/Logo/newLogo.webp";

const Footer = () => {
  return (
    <footer className="bg-bridal-brown text-white pt-16 pb-8 px-6 sm:px-10 lg:px-20 border-t border-bridal-champagne/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Branding & Social Connections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-bridal-blush/80 mb-12">
          
          {/* Logo & Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center border border-bridal-champagne/20 overflow-hidden">
                <img src={logo} alt="Suji Hair & Makeup Logo" className="w-9 h-9 object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-playfair font-extrabold text-lg tracking-wide text-white">
                  Suji Hair & Makeup
                </span>
                <span className="text-[9px] uppercase font-sans tracking-widest text-bridal-champagne font-bold -mt-1">
                  Bridal Artist
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm leading-relaxed max-w-sm">
              Creating elegant, skin-friendly, and lightweight bridal transformations custom-tailored for wedding mugurtham looks, receptions, and engagements in Chennai.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 md:pl-10">
            <h4 className="text-white font-playfair font-bold text-base tracking-wide">Explore</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans">
              <li><Link to="/" className="hover:text-bridal-champagne transition">Home Page</Link></li>
              <li><Link to="/about" className="hover:text-bridal-champagne transition">Meet Suji</Link></li>
              <li><Link to="/gallery" className="hover:text-bridal-champagne transition">Bridal Gallery</Link></li>
              <li><Link to="/services" className="hover:text-bridal-champagne transition">Services</Link></li>
              <li><Link to="/contact" className="hover:text-bridal-champagne transition">Contact & Booking</Link></li>
            </ul>
          </div>

          {/* Connect & Inquiries */}
          <div className="space-y-4">
            <h4 className="text-white font-playfair font-bold text-base tracking-wide">Connect with Us</h4>
            <p className="text-xs leading-relaxed max-w-xs">
              Based in East Tambaram, Chennai. For rates, consultations, and bookings, reach out directly.
            </p>
            <div className="flex flex-wrap gap-2.5 pt-2">
              <a 
                href="https://wa.me/917305931283?text=Hi Suji, I'd like to check availability."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2.5 transition shadow-sm"
                aria-label="WhatsApp"
              >
                <IoLogoWhatsapp size={16} />
              </a>
              <a 
                href="https://www.instagram.com/sujihairandmakeup/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 text-white rounded-full p-2.5 transition shadow-sm"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a 
                href="https://www.facebook.com/sujihairandmakeup/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2.5 transition shadow-sm"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </a>
              <a 
                href="https://www.youtube.com/@sujihairandmakeup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white rounded-full p-2.5 transition shadow-sm"
                aria-label="YouTube"
              >
                <FaYoutube size={16} />
              </a>
              <a 
                href="mailto:sujihairandmakeup@gmail.com"
                className="bg-gray-600 hover:bg-gray-700 text-white rounded-full p-2.5 transition shadow-sm"
                aria-label="Email"
              >
                <MdEmail size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-bridal-champagne/10 my-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-center gap-4 text-xs text-bridal-blush/40">
          <div>
            &copy; {new Date().getFullYear()} Suji Hair & Makeup. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-bridal-champagne transition">Privacy Policy</Link>
            <span>•</span>
            <span className="text-bridal-blush/35">Bridal Makeup Artist in Chennai</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
