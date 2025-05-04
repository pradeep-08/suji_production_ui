import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                "Expert hair and makeup for every occasion." <br></br>
                "Flawless looks, tailored just for you."
              </p>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>

              <div className="flex space-x-4">
                <a
                  target="_blank"
                  href="https://www.facebook.com/sujihairandmakeup/"
                >
                  <FaFacebookF />
                </a>
                <a target="_blank" href="https://wa.me/9941492115">
                  <IoLogoWhatsapp />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/sujihairandmakeup/"
                >
                  <FaInstagram />
                </a>
                <a href="sujihairandmakeup@gmail.com">
                  <MdEmail />
                </a>
              </div>
            </div>

            {/* Newsletter Subscription Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Developer</h3>

              <a
                href="https://naveen-767.github.io/Portfolio-Naveen/"
                target="blank"
              >
                <button className="w-full bg-blue-600 py-2 rounded text-white hover:bg-blue-500">
                  Contact
                </button>
              </a>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="text-center mt-8 border-t border-gray-600 pt-4">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} SujiHairAndMakeup. All rights
              reserved.{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
