import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import AOS from "aos";
import { Helmet } from "react-helmet-async";
import { IoLogoWhatsapp } from "react-icons/io";

// Image imports
import newImg1 from "../img/new/1.webp";
import newImg2 from "../img/new/2.webp";
import newImg3 from "../img/new/3.webp";
import newImg4 from "../img/new/4.webp";
import newImg5 from "../img/new/5.webp";
import newImg6 from "../img/new/6.webp";
import newImg7 from "../img/new/7.webp";
import newImg8 from "../img/new/8.webp";
import newImg9 from "../img/new/9.webp";
import newImg10 from "../img/new/10.webp";
import newImg11 from "../img/new/11.webp";
import newImg12 from "../img/new/12.webp";
import hero from "../img/hero/hero.webp";

const makeupOptions = [
  "Bridal Essential Package",
  "Bridal Premium Luxe Package",
  "Pre-Wedding / Reception Glam",
  "Saree Draping only",
  "Bridal Hairstyling only",
  "Party Makeup Look",
  "Others"
];

const imageSlides = [
  { title: "Air Brush Makeup", url: newImg10 },
  { title: "Mugurtham Makeup", url: newImg2 },
  { title: "Engagement Basic Makeup", url: newImg3 },
  { title: "Reception Hairstyle", url: newImg4 },
  { title: "Saree Draping", url: newImg12 },
  { title: "Mugurtham Hairstyle", url: newImg6 },
  { title: "Engagement Look", url: newImg7 },
  { title: "Pre-Wedding Shoot", url: newImg8 },
  { title: "HD Makeup", url: newImg9 },
  { title: "Puberty Makeup", url: newImg1 },
  { title: "Maternity", url: newImg5 },
  { title: "Meganthi", url: newImg11 },
  { title: "Others", url: hero }
];

export default function Contact() {
  const [selectedMakeup, setSelectedMakeup] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 150);

    if (!autoSlide) {
      return () => clearTimeout(timer);
    }
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imageSlides.length);
    }, 3000);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [autoSlide]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();

  useEffect(() => {
    if (selectedMakeup) {
      const index = imageSlides.findIndex((img) => img.title === selectedMakeup || img.title.includes(selectedMakeup));
      if (index !== -1) {
        setCurrentSlide(index);
        setAutoSlide(false);
      }
    }
  }, [selectedMakeup]);

  useEffect(() => {
    const serviceFromQuery = query.get("service");
    if (serviceFromQuery && !selectedMakeup) {
      // Find matching option
      const matched = makeupOptions.find(opt => opt.toLowerCase().includes(serviceFromQuery.toLowerCase()) || serviceFromQuery.toLowerCase().includes(opt.toLowerCase())) || serviceFromQuery;
      setSelectedMakeup(matched);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Suji Hair & Makeup | Book Your Bridal Makeup in Chennai</title>
        <meta name="description" content="Get in touch with Suji Hair & Makeup for bridal bookings, makeup trials, and consultations in Chennai. Call or WhatsApp now!" />
        <meta name="keywords" content="contact bridal makeup artist, book makeup Chennai, makeup appointment Chennai, Suji Hair and Makeup contact" />
        <link rel="canonical" href="https://sujihairandmakeup.in/contact" />
      </Helmet>

      {/* Page Header */}
      <div className="bg-bridal-bg text-bridal-brown pt-32 pb-12 px-4 text-center">
        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <span className="text-bridal-rose text-xs font-bold uppercase tracking-widest bg-bridal-blush/40 px-3.5 py-1 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-gray-900 mt-4 mb-3 font-playfair">
            Let's Plan Your Perfect Bridal Look
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
            Ready to secure your wedding or reception dates? Drop us a line and let Suji curate your dream look.
          </p>
        </div>
      </div>

      <div className="py-12 bg-bridal-bg/40 px-4 sm:px-6 lg:px-8 text-bridal-brown">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Booking Inquiry Form */}
          <div className="bg-white p-8 sm:p-10 shadow-sm rounded-3xl border border-bridal-champagne/10 flex-1 flex flex-col justify-between" data-aos="fade-right">
            <div>
              <h2 className="text-bridal-rose text-xs font-bold uppercase tracking-widest mb-1.5">Availability Request</h2>
              <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">Send an Inquiry</h2>
              
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                <input type="hidden" name="access_key" value="6a320d9d-1efa-45d9-9307-885f2424b1ba" />
                <input type="hidden" name="subject" value="New Request from Suji Makeup Client ❗" />
                <input type="hidden" name="from_name" value="Suji Website Booking Form" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">First Name<span className="text-red-500">*</span></label>
                    <input type="text" name="First Name" placeholder="First name" required className="w-full mt-1.5 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-bridal-rose focus:ring-1 focus:ring-bridal-rose text-sm text-gray-900" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">Last Name</label>
                    <input type="text" name="Last Name" placeholder="Last name" className="w-full mt-1.5 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-bridal-rose focus:ring-1 focus:ring-bridal-rose text-sm text-gray-900" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">Email Address<span className="text-red-500">*</span></label>
                    <input type="email" name="Email" placeholder="Email address" required className="w-full mt-1.5 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-bridal-rose focus:ring-1 focus:ring-bridal-rose text-sm text-gray-900" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">Mobile Number<span className="text-red-500">*</span></label>
                    <input type="tel" name="Mobile" placeholder="WhatsApp mobile number" required className="w-full mt-1.5 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-bridal-rose focus:ring-1 focus:ring-bridal-rose text-sm text-gray-900" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">Event Date<span className="text-red-500">*</span></label>
                    <input type="date" name="Event Date" required className="w-full mt-1.5 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-bridal-rose focus:ring-1 focus:ring-bridal-rose text-sm text-gray-900" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">Select Makeup Service</label>
                    <select
                      name="Makeup Type"
                      className="w-full mt-1.5 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-bridal-rose focus:ring-1 focus:ring-bridal-rose text-sm text-gray-900"
                      value={selectedMakeup}
                      onChange={(e) => setSelectedMakeup(e.target.value)}
                    >
                      <option value="">-- Please select --</option>
                      {makeupOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">Event Location / Venue<span className="text-red-500">*</span></label>
                  <input type="text" name="Location" placeholder="E.g., Hall Name, Tambaram, Chennai" required className="w-full mt-1.5 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-bridal-rose focus:ring-1 focus:ring-bridal-rose text-sm text-gray-900" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">Message / Custom Requirements</label>
                  <textarea
                    name="Message"
                    rows={4}
                    placeholder={`I am looking to book the ${selectedMakeup || "bridal styling"} services with Suji Hair & Makeup. Please let me know pricing and slots availability.`}
                    className="w-full mt-1.5 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-bridal-rose focus:ring-1 focus:ring-bridal-rose text-sm text-gray-900"
                  />
                </div>
                
                <div className="flex items-start space-x-2 text-xs text-gray-500 pt-2">
                  <input type="checkbox" required className="mt-0.5 accent-bridal-rose rounded" />
                  <p>I agree to the friendly <Link to="/privacy" className="text-bridal-rose underline hover:text-bridal-brown">privacy policy</Link> guidelines.</p>
                </div>
                
                <button type="submit" className="w-full bg-bridal-rose hover:bg-bridal-brown text-white font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-full shadow-md transition active:scale-98">
                  Check Slot Availability
                </button>
              </form>
            </div>
          </div>

          {/* Carousel Slide & Direct Contact Links */}
          <div className="flex-1 flex flex-col justify-between" data-aos="fade-left">
            <div className="relative w-full h-[320px] md:h-full max-h-[460px] overflow-hidden rounded-3xl shadow-sm border border-bridal-champagne/10">
              <img
                key={currentSlide}
                src={imageSlides[currentSlide].url}
                alt={imageSlides[currentSlide].title}
                className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ease-in-out"
              />
              {selectedMakeup && imageSlides[currentSlide].title.includes(selectedMakeup) && (
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <CheckCircle className="h-3.5 w-3.5" /> Selected Look
                </div>
              )}
              <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs px-3 py-1.5 rounded-lg backdrop-blur-xs font-playfair">
                {imageSlides[currentSlide].title}
              </div>
            </div>

            {/* Direct Links */}
            <div className="bg-white p-6 rounded-3xl border border-bridal-champagne/10 space-y-4 mt-6">
              <div className="flex items-start gap-4">
                <div className="bg-bridal-blush/40 text-bridal-rose p-2.5 rounded-full flex-shrink-0 mt-0.5">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-playfair font-bold text-sm text-gray-900">Email Address</h4>
                  <a href="mailto:sujihairandmakeup@gmail.com" className="text-xs sm:text-sm text-gray-600 mt-0.5 block hover:text-bridal-rose transition">sujihairandmakeup@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-bridal-blush/40 text-bridal-rose p-2.5 rounded-full flex-shrink-0 mt-0.5">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-playfair font-bold text-sm text-gray-900">Phone consultation</h4>
                  <a href="tel:+919941492115" className="text-xs sm:text-sm text-gray-600 mt-0.5 block hover:text-bridal-rose transition">+91 99414 92115</a>
                  <a href="tel:+917305931283" className="text-xs sm:text-sm text-gray-600 block hover:text-bridal-rose transition">+91 73059 31283</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-bridal-blush/40 text-bridal-rose p-2.5 rounded-full flex-shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-playfair font-bold text-sm text-gray-900">Studio Location</h4>
                  <a 
                    href="https://maps.app.goo.gl/xvmJuEWPTRAkjoc97" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-gray-600 mt-0.5 block hover:text-bridal-rose transition"
                  >
                    5/16 Ramakrishnapuram, East Tambaram, Chennai - 600059
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 text-green-600 p-2.5 rounded-full flex-shrink-0 mt-0.5">
                  <IoLogoWhatsapp size={18} />
                </div>
                <div>
                  <h4 className="font-playfair font-bold text-sm text-gray-900">Quick WhatsApp Message</h4>
                  <a 
                    href="https://wa.me/917305931283?text=Hi Suji, I'd like to check availability for my wedding date." 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-green-600 font-bold mt-0.5 block hover:text-green-700 transition"
                  >
                    Chat on WhatsApp Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
