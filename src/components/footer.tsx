
const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Collaboration CTA */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6">Start Collaborating with us</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://twitter.com" className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">Twitter</a>
            <a href="https://facebook.com/sujihairandmakeup" target="_blank" className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">Facebook</a>
            <a href="https://www.instagram.com/sujihairandmakeup/" target="_blank" className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">Instagram</a>
            <a href="mailto:sujihairandmakeup@gmail.com" className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">Email</a>
          </div>
        </div>

        <hr className="border-gray-600 mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 text-gray-300">
          {/* Brand Info */}
          <div>
            <h3 className="font-bold text-white text-lg mb-2">Suji Hair and Makeup</h3>
            <p className="text-sm">
              Explore expert bridal makeup, HD & airbrush techniques, traditional Mehandi artistry, and saree draping services in Chennai. Trusted by brides for creating stunning looks that elevate your special day. Let us make your beauty timeless.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-md mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white">Home Page</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-12 pt-6 border-t border-gray-700">
          &copy; {new Date().getFullYear()} Suji Hair and Makeup. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
