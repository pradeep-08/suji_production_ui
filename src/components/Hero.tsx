import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Star, StarIcon, CheckCircle, Mail, Phone, MapPin, ArrowRight,
  Sparkles, Check, ChevronLeft, ChevronRight, Award, ShieldCheck, Heart
} from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

// Image imports
import hero from "../img/hero/hero.webp";
import about2 from "../img/About/About2.webp";
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

import { formatPrice } from "../utils/pricing";

export interface ServiceItem {
  title: string;
  desc: string;
  img: string;
  price: number;
  slug?: string;
}

export default function Hero() {
  const [selectedMakeup, setSelectedMakeup] = useState("");
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const trustStats = [
    { value: "500+", label: "Brides Styled" },
    { value: "4.9 ★", label: "Google Rating" },
    { value: "10+", label: "Years Experience" },
    { value: "Chennai", label: "Based Artist" }
  ];

  const galleryPreview = [
    { url: newImg10, title: "Airbrush Bridal Glow", category: "Bridal" },
    { url: newImg2, title: "Traditional Muhurtham", category: "Bridal" },
    { url: newImg7, title: "Soft Glam Engagement", category: "Engagement" },
    { url: newImg9, title: "Dewy Reception Look", category: "Reception" }
  ];

  const mainServices: ServiceItem[] = [
    { title: "Bridal HD Makeup", desc: "High-definition camera-ready bridal makeup customized to your skin-tone, wedding outfit and lighting conditions.", img: newImg9, price: 12000, slug: "hd-bridal-makeup-chennai" },
    { title: "Airbrush Bridal Makeup", desc: "Flawless, sweat-proof, and ultra long-lasting silicon-based makeup applied with precision airbrush tools.", img: newImg10, price: 35000, slug: "airbrush-makeup-chennai" },
    { title: "Engagement Makeup", desc: "A fresh, glowing look tailored for pre-wedding ceremonies, featuring soft-glam options.", img: newImg3, price: 7500, slug: "engagement-makeup-chennai" },
    { title: "Reception Hair & Makeup", desc: "Glamorous reception styling, ranging from modern waves to bold makeup aesthetics that dazzle.", img: newImg4, price: 9000, slug: "reception-makeup-chennai" },
    { title: "Saree Draping", desc: "Precision saree folding and draping in traditional South Indian, Gujarati, or contemporary styles.", img: newImg12, price: 499, slug: "hairstyling-saree-draping-chennai" },
    { title: "Bridal Hairstyling", desc: "Intricate braids, floral buns, or elegant up-dos complete with hair accessories and jewelry setting.", img: newImg6, price: 2000, slug: "hairstyling-saree-draping-chennai" }
  ];

  const packages = [
    {
      name: "Bridal Essential",
      description: "Perfect for traditional wedding or muhurtham look.",
      price: 9000,
      inclusions: [
        "HD Bridal Makeup",
        "Classic Hairstyling / Bridal Bun",
        "Traditional Saree Draping",
        "Flower Decoration Setting",
        "Product Consultation & Lash Placement"
      ],
      whatsappMsg: "Hi Suji, I'd like to book the Bridal Essential package. Please let me know your availability."
    },
    {
      name: "Bridal Premium Luxe",
      description: "Ultimate bridal glow featuring airbrush technology.",
      price: 35000,
      featured: true,
      inclusions: [
        "Premium Airbrush / Ultra HD Makeup",
        "Advanced Hair Styling (Extended Volume)",
        "Jewelry Setting & Saree Draping",
        "Luxury Lash Extensions (3D Silk)",
        "Prep & Hydration Skin Treatment",
        "Bridal Assistant for Touch-ups"
      ],
      whatsappMsg: "Hi Suji, I'm interested in your Bridal Premium Luxe package. Please share availability and details."
    },
    {
      name: "Pre-Wedding / Reception Glam",
      description: "Chic and modern looks for pre-wedding shoots or reception party.",
      price: 7500,
      inclusions: [
        "Matte or Dewy HD Makeup",
        "Contemporary Hairstyling / Waves",
        "Lehenga or Saree Draping",
        "Lash Placement",
        "Long-lasting Setting Spray Finish"
      ],
      whatsappMsg: "Hi Suji, I want to inquire about the Pre-Wedding / Reception Glam package. Please share details."
    }
  ];

  const testimonials = [
    {
      name: "Anitha Ramesh",
      location: "Chennai",
      review: "Suji is an absolute magician! She styled my bridal makeup for both Mugurtham and Reception. It looked incredibly natural, glowing, and stayed perfect through the Chennai humidity. Everyone complimented me!",
      rating: 5,
      date: "3 days ago"
    },
    {
      name: "Karthika Ravi",
      location: "Tambaram",
      review: "Amazing hairstyle and saree draping service! I booked her for my sister's wedding. Suji was extremely punctual, professional, and took care of all the minute details. Highly recommended!",
      rating: 5,
      date: "1 week ago"
    },
    {
      name: "Deepika Natarajan",
      location: "Chennai",
      review: "Highly professional and friendly. My engagement look came out so beautiful. She customized the makeup based on my skin tone and outfit perfectly. The products used were top-notch quality.",
      rating: 5,
      date: "2 weeks ago"
    }
  ];

  const faqs = [
    {
      question: "Do you provide bridal makeup services at the venue?",
      answer: "Yes, we travel directly to your wedding venue or home across Chennai, Tamil Nadu, and neighboring states for your convenience."
    },
    {
      question: "Do you offer trial makeup sessions?",
      answer: "Yes, trials are highly recommended and can be booked in advance to test shades, hairstyles, and finalize your customized bridal look."
    },
    {
      question: "What brands of makeup products do you use?",
      answer: "We use only high-end, dermatologist-approved luxury products such as MAC, Huda Beauty, Bobbi Brown, NARS, and Kryolan to ensure long-lasting, skin-safe wear."
    },
    {
      question: "Does the package include saree draping and hairstyling?",
      answer: "Yes! Our bridal packages are all-inclusive of customized HD makeup, professional hairstyling, jewelry setting, and saree draping."
    },
    {
      question: "How early should I book my wedding date?",
      answer: "Bridal slots book out fast, especially during peak wedding seasons. We recommend securing your date 3 to 6 months in advance."
    },
    {
      question: "How do I secure my booking?",
      answer: "Bookings are confirmed upon receipt of a nominal advance payment. You can initiate the request via our contact form or WhatsApp."
    }
  ];

  const handleNextReview = () => {
    setCurrentReviewIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrevReview = () => {
    setCurrentReviewIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <>
      <Helmet>
        <title>Bridal Makeup Artist in Chennai | Suji Hair & Makeup</title>
        <meta name="description" content="Book professional bridal makeup, HD makeup, engagement makeup, hairstyling, and saree draping services in Chennai. Elegant bridal looks by Suji Hair & Makeup." />
        <meta name="keywords" content="bridal makeup artist in Chennai, best bridal makeup artist in Chennai, HD bridal makeup Chennai, airbrush makeup artist Chennai, engagement makeup artist Chennai, reception makeup Chennai, party makeup artist Chennai, saree draping and hairstyling Chennai, home service bridal makeup Chennai" />
      </Helmet>

      {/* 1. Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center font-sans overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Beautiful South Indian Bride"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bridal-brown/85 via-bridal-brown/50 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10 w-full text-white">
          <div className="max-w-2xl" data-aos="fade-right">
            <span className="inline-flex items-center gap-2 bg-bridal-champagne/20 text-bridal-champagne border border-bridal-champagne/30 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
              <Sparkles size={12} className="animate-spin" />
              <span>Chennai's Premier Bridal Artist</span>
            </span>

            <h1 className="text-4xl sm:text-6xl font-playfair font-bold leading-tight text-white mb-6">
              Bridal Makeup Artist in Chennai
            </h1>

            <p className="text-base sm:text-lg text-bridal-blush font-light mb-8 max-w-xl leading-relaxed">
              Professional bridal makeup, hairstyling, saree draping, and engagement looks crafted uniquely for your skin tone, outfit, and wedding style.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#booking"
                className="bg-bridal-rose hover:bg-white hover:text-bridal-brown text-white font-semibold tracking-wide px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 text-sm uppercase flex items-center gap-2"
              >
                <span>Book Bridal Consultation</span>
                <ArrowRight size={16} />
              </a>
              <a
                href="#gallery"
                className="bg-transparent hover:bg-white/10 text-white border border-white/60 font-semibold tracking-wide px-8 py-3.5 rounded-full transition-all duration-300 text-sm uppercase"
              >
                View Bridal Looks
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Stats Section */}
      <section className="bg-bridal-brown text-white py-12 relative z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-bridal-champagne/20">
            {trustStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col justify-center items-center px-4" data-aos="fade-up" data-aos-delay={idx * 100}>
                <span className="text-3xl sm:text-4xl font-playfair font-bold text-bridal-champagne mb-1">{stat.value}</span>
                <span className="text-xs sm:text-sm text-bridal-blush/80 uppercase tracking-widest font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Bridal Gallery Preview */}
      <section id="gallery" className="py-24 bg-white text-bridal-brown font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-bridal-rose text-xs font-bold uppercase tracking-widest bg-bridal-blush/40 px-3 py-1 rounded-full">Portfolio Highlights</span>
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mt-3 mb-4">Real Bridal Makeup Portfolio</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">Explore stunning, high-definition bridal transformations captured on their special day.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryPreview.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer aspect-[3/4]"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
                onClick={() => setLightboxImg(item.url)}
              >
                <img src={item.url} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5" />
                <div className="absolute bottom-4 left-4 right-4 text-white z-10 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[10px] text-bridal-champagne uppercase tracking-widest font-semibold">{item.category}</span>
                  <h3 className="text-base font-playfair font-semibold mt-1">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/gallery"
              className="inline-flex items-center gap-2 text-bridal-rose hover:text-bridal-brown font-semibold tracking-wider transition-all duration-300 hover:gap-3"
            >
              <span>View Full Gallery Portfolio</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 4. Services Grid */}
      <section id="services" className="py-24 bg-bridal-bg text-bridal-brown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-bridal-rose text-xs font-bold uppercase tracking-widest bg-bridal-blush/40 px-3 py-1 rounded-full">Exquisite Services</span>
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mt-3 mb-4">Bridal Makeup Services in Chennai</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">Professional luxury styling custom-tailored for wedding, reception, and festive ceremonies in Chennai.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-bridal-champagne/10 flex flex-col h-full"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="h-56 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-bridal-rose text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                    Starting from {formatPrice(service.price)}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg font-playfair font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">{service.desc}</p>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <a
                      href={`https://wa.me/917305931283?text=Hi Suji, I would like to enquire about ${encodeURIComponent(service.title)} service.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 bg-green-500 hover:bg-green-600 text-white font-semibold text-xs uppercase tracking-wider py-2 px-4 rounded-full shadow-sm transition"
                    >
                      <IoLogoWhatsapp size={14} />
                      <span>WhatsApp Ask</span>
                    </a>
                    {service.slug ? (
                      <Link
                        to={`/${service.slug}`}
                        className="flex-1 inline-flex items-center justify-center gap-1 bg-bridal-rose hover:bg-bridal-brown text-white font-semibold text-xs uppercase tracking-wider py-2 px-4 rounded-full transition"
                      >
                        <span>View Details</span>
                        <ArrowRight size={12} />
                      </Link>
                    ) : (
                      <a
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="flex-1 inline-flex items-center justify-center gap-1 bg-bridal-rose hover:bg-bridal-brown text-white font-semibold text-xs uppercase tracking-wider py-2 px-4 rounded-full transition"
                      >
                        <span>Book Now</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bridal Packages */}
      <section id="packages" className="py-24 bg-white text-bridal-brown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-bridal-rose text-xs font-bold uppercase tracking-widest bg-bridal-blush/40 px-3 py-1 rounded-full">Pricing & Inclusions</span>
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mt-3 mb-4">Bridal Makeup Packages</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">Transparent, inclusion-packed bridal packages structured to simplify your wedding preparations.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 ${pkg.featured
                    ? "bg-bridal-brown text-white shadow-xl relative ring-2 ring-bridal-champagne scale-105 z-10"
                    : "bg-bridal-bg text-bridal-brown border border-bridal-champagne/20"
                  }`}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {pkg.featured && (
                  <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-bridal-champagne text-bridal-brown text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                    Most Requested
                  </span>
                )}
                <div>
                  <h3 className={`text-xl sm:text-2xl font-playfair font-bold mb-2 ${pkg.featured ? "text-bridal-champagne" : "text-gray-900"}`}>{pkg.name}</h3>
                  <p className={`text-xs mb-6 ${pkg.featured ? "text-bridal-blush/80" : "text-gray-500"}`}>{pkg.description}</p>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-xs font-semibold">Starts from</span>
                    <span className="text-2xl sm:text-4xl font-bold font-playfair">{formatPrice(pkg.price)}</span>
                  </div>

                  <div className={`h-[1px] my-6 ${pkg.featured ? "bg-white/10" : "bg-bridal-champagne/20"}`} />

                  <ul className="space-y-3.5 mb-8">
                    {pkg.inclusions.map((inclusion, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Check size={16} className={`flex-shrink-0 mt-0.5 ${pkg.featured ? "text-bridal-champagne" : "text-bridal-rose"}`} />
                        <span>{inclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <a
                    href={`https://wa.me/917305931283?text=${encodeURIComponent(pkg.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full shadow-md transition-all duration-300 ${pkg.featured
                        ? "bg-bridal-champagne hover:bg-white text-bridal-brown"
                        : "bg-bridal-rose hover:bg-bridal-brown text-white"
                      }`}
                  >
                    <IoLogoWhatsapp size={16} />
                    <span>Get Bridal Package Rate</span>
                  </a>
                  <p className={`text-[10px] text-center mt-3 ${pkg.featured ? "text-bridal-blush/60" : "text-gray-400"}`}>
                    *Advance deposit required to reserve wedding dates.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Before / After Interactive Section */}
      <section className="py-24 bg-bridal-bg text-bridal-brown overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <span className="text-bridal-rose text-xs font-bold uppercase tracking-widest bg-bridal-blush/40 px-3 py-1 rounded-full">Makeup Quality Proof</span>
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mt-3 mb-6">HD & Airbrush Bridal Makeup</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Hover or slide to see the difference between raw camera preparation and the final long-lasting, HD bridal makeup application. We specialize in enhancing natural skin tones without creating heavy cakey overlays.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex gap-3 items-start">
                  <ShieldCheck className="text-bridal-rose flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900">Zero Cakeyness Guarantee</h4>
                    <p className="text-gray-500 text-xs mt-0.5">Ultralight blends that hydrate, breathe, and highlight native features.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Award className="text-bridal-rose flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900">HD & Airbrush Mastery</h4>
                    <p className="text-gray-500 text-xs mt-0.5">Optimized for high-resolution videography and harsh flash photography.</p>
                  </div>
                </div>
              </div>
              <a
                href="#booking"
                className="bg-bridal-rose hover:bg-bridal-brown text-white font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition"
              >
                Book Your Consultation Look
              </a>
            </div>

            {/* Interactive Before/After Slider */}
            <div className="flex justify-center" data-aos="fade-left">
              <div className="relative w-full aspect-[4/5] max-w-sm overflow-hidden rounded-2xl select-none shadow-xl border border-bridal-champagne/20">
                {/* After Image (Base) */}
                <img src={newImg9} alt="After Makeup Look" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-bridal-rose text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10 shadow-md">After</div>

                {/* Before Image (Overlay clipped by slider width) */}
                <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
                  <img src={newImg2} alt="Before Makeup Look" className="absolute inset-0 w-full h-full object-cover max-w-none" style={{ width: '100vw', maxWidth: '384px', height: '100%' }} />
                  <div className="absolute top-4 left-4 bg-bridal-brown text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10 shadow-md">Before</div>
                </div>

                {/* Slider Handle Line */}
                <div className="absolute inset-y-0 z-20 pointer-events-none" style={{ left: `${sliderPos}%` }}>
                  <div className="absolute inset-y-0 -ml-[1px] w-[2px] bg-white shadow-md"></div>
                  <div className="absolute top-1/2 -mt-4 -ml-4 w-8 h-8 rounded-full bg-white text-bridal-brown border border-bridal-champagne/30 shadow-lg flex items-center justify-center font-bold text-xs select-none pointer-events-auto">↔</div>
                </div>

                {/* Slider Range Control Input */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  aria-label="Before after look slider control"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Choose Suji */}
      <section className="py-24 bg-white text-bridal-brown">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-bridal-rose text-xs font-bold uppercase tracking-widest bg-bridal-blush/40 px-3 py-1 rounded-full">The Luxury Edge</span>
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mt-3 mb-4">Why Brides Choose Suji Hair & Makeup</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">Every element of our service is designed to feel luxury, clean, stress-free, and customized to you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Skin-Tone Customization", desc: "We match foundations and palettes to your exact undertone to avoid looking gray or chalky.", icon: Sparkles },
              { title: "Premium Brand Focus", desc: "Exclusively using MAC, Huda Beauty, Bobbi Brown, NARS, and Fenty for elite, clean finishes.", icon: Heart },
              { title: "On-Location Service", desc: "Relax as our professional squad travels directly to your wedding home or venue across Chennai.", icon: MapPin },
              { title: "Strict Hygiene Standard", desc: "Sanitized brushes, single-use applicators, and cleaned tool palettes for flawless skin safety.", icon: ShieldCheck }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-bridal-bg rounded-2xl p-6 text-center border border-bridal-champagne/10 hover:-translate-y-1 transition duration-300"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="bg-bridal-rose/10 text-bridal-rose rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="text-base font-playfair font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 bg-bridal-rose hover:bg-bridal-brown text-white font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition shadow-md hover:shadow-lg"
            >
              <span>Experience Premium Bridal Luxury</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. About Artist (Meet Suji) */}
      <section id="about" className="py-24 bg-bridal-bg text-bridal-brown">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative" data-aos="fade-right">
              <img
                src={about2}
                alt="Suji Bridal Makeup Artist applying makeup"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/5] border border-bridal-champagne/30"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-lg border border-bridal-champagne/20 hidden sm:block max-w-[200px]">
                <span className="text-3xl font-playfair font-bold text-bridal-rose">10+</span>
                <p className="text-xs text-gray-600 mt-1 font-semibold">Years Styling Brides and Creating Radiant Memories</p>
              </div>
            </div>

            <div className="space-y-6" data-aos="fade-left">
              <span className="text-bridal-rose text-xs font-bold uppercase tracking-widest bg-bridal-blush/40 px-3 py-1 rounded-full">Meet Your Artist</span>
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mt-3">Engagement and Reception Makeup</h2>
              <p className="text-gray-600 text-sm leading-relaxed font-semibold">
                Suji Hair & Makeup is a Chennai-based bridal makeup service offering bridal makeup, engagement makeup, reception makeup, hairstyling, and saree draping. Every look is designed to suit your skin tone, outfit, jewellery, wedding theme, and comfort.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Whether you prefer a natural bridal look, soft glam, traditional South Indian bridal makeup, HD makeup, or airbrush makeup, we help you feel confident and camera-ready throughout your special day.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Suji is a professional certified bridal makeup artist based in East Tambaram, Chennai. Recognized for her soft-glam transformations and natural finish techniques, she believes every bride deserves to feel radiant and fully confident on their wedding day. With a deep specialization in South Indian bridal mugurtham looks, reception hairstyles, and luxury saree draping, she adapts her work to match the bride's attire, facial structure, and skin comfort.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="border border-bridal-champagne/20 rounded-xl p-3 bg-white">
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider block">Certified by</span>
                  <span className="text-sm font-bold text-gray-900">Industry Academies</span>
                </div>
                <div className="border border-bridal-champagne/20 rounded-xl p-3 bg-white">
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider block">Hygiene Focused</span>
                  <span className="text-sm font-bold text-gray-900">100% Skin Safe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Reviews & Testimonials Carousel */}
      <section className="bg-white py-24 text-bridal-brown overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <span className="text-bridal-rose text-xs font-bold uppercase tracking-widest bg-bridal-blush/40 px-3 py-1 rounded-full">Loved by Brides</span>
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mt-3">Client Reviews</h2>
          </div>

          <div className="bg-bridal-bg p-8 sm:p-12 rounded-3xl relative shadow-sm border border-bridal-champagne/10 min-h-[300px] flex flex-col justify-between" data-aos="fade-up">
            <div className="absolute top-6 left-6 text-bridal-champagne/20 font-serif text-8xl leading-none">“</div>

            <div className="relative z-10">
              <div className="flex gap-1 mb-5">
                {[...Array(testimonials[currentReviewIndex].rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic mb-8">
                "{testimonials[currentReviewIndex].review}"
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-bridal-champagne/20 pt-6">
              <div>
                <h4 className="font-playfair font-bold text-base text-gray-900">{testimonials[currentReviewIndex].name}</h4>
                <p className="text-xs text-bridal-rose uppercase tracking-wider mt-0.5">{testimonials[currentReviewIndex].location} Bride</p>
              </div>
              <span className="text-xs text-gray-400">{testimonials[currentReviewIndex].date}</span>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrevReview}
              className="bg-bridal-bg hover:bg-bridal-rose hover:text-white border border-bridal-champagne/30 text-bridal-brown rounded-full p-3 shadow transition-all duration-300"
              aria-label="Previous review"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNextReview}
              className="bg-bridal-bg hover:bg-bridal-rose hover:text-white border border-bridal-champagne/30 text-bridal-brown rounded-full p-3 shadow transition-all duration-300"
              aria-label="Next review"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* 10. Instagram Portfolio Section */}
      <section className="py-24 bg-bridal-bg text-bridal-brown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-bridal-rose text-xs font-bold uppercase tracking-widest bg-bridal-blush/40 px-3 py-1 rounded-full">Social Inspiration</span>
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mt-3 mb-4">Follow Our Bridal Looks on Instagram</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">Stay updated with our latest bride transformations, hairstyles, and reel highlights on <a href="https://www.instagram.com/sujihairandmakeup/" target="_blank" rel="noopener noreferrer" className="font-bold underline text-bridal-rose hover:text-bridal-brown">@sujihairandmakeup</a>.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[newImg1, newImg11, newImg3, newImg4, newImg5, newImg6].map((img, idx) => (
              <a
                key={idx}
                href="https://www.instagram.com/sujihairandmakeup/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl aspect-square shadow-sm"
                data-aos="zoom-in"
                data-aos-delay={idx * 50}
              >
                <img src={img} alt="Instagram bridal post showcase" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <FaInstagram className="text-white text-3xl transform scale-75 group-hover:scale-100 transition duration-300" />
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.instagram.com/sujihairandmakeup/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-bridal-rose hover:bg-bridal-brown text-white font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-md transition"
            >
              <FaInstagram size={16} />
              <span>View Instagram Portfolio</span>
            </a>
          </div>
        </div>
      </section>

      {/* 11. FAQ Section */}
      <section className="bg-white py-24 text-bridal-brown">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-bridal-rose text-xs font-bold uppercase tracking-widest bg-bridal-blush/40 px-3 py-1 rounded-full">Clarifications</span>
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mt-3">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-bridal-champagne/20 rounded-2xl overflow-hidden shadow-xs transition"
              >
                <button
                  onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                  className="w-full flex justify-between items-center px-6 py-4 bg-bridal-bg text-left text-gray-800 font-semibold text-sm hover:bg-bridal-blush/20 transition"
                >
                  <span className="font-playfair">{faq.question}</span>
                  <span className="text-bridal-rose font-bold text-base transition-transform duration-300">
                    {activeFAQ === index ? "▴" : "▾"}
                  </span>
                </button>
                {activeFAQ === index && (
                  <div className="px-6 pb-5 pt-2 text-gray-600 text-xs sm:text-sm bg-bridal-bg leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Short Booking Form & 13. Contact + Map Details */}
      <section id="booking" className="py-24 bg-bridal-bg text-bridal-brown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-bridal-rose text-xs font-bold uppercase tracking-widest bg-bridal-blush/40 px-3 py-1 rounded-full">Inquire Availability</span>
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mt-3 mb-4">Book Your Bridal Makeup Appointment</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">Share your wedding date, event location, and preferred makeup style. We’ll check availability and suggest the right bridal package.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {/* Booking Form Card */}
            <div className="bg-white p-8 sm:p-10 shadow-sm rounded-3xl border border-bridal-champagne/10 flex flex-col justify-between" data-aos="fade-right">
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                <input type="hidden" name="access_key" value="6a320d9d-1efa-45d9-9307-885f2424b1ba" />
                <input type="hidden" name="subject" value="New Bridal Consultation Request ❗" />
                <input type="hidden" name="from_name" value="Suji Website Client" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">Full Name<span className="text-red-500">*</span></label>
                    <input type="text" name="First Name" placeholder="Your name" required className="w-full mt-1.5 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-bridal-rose focus:ring-1 focus:ring-bridal-rose text-sm text-gray-900" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">Mobile Number<span className="text-red-500">*</span></label>
                    <input type="tel" name="Mobile Number" placeholder="Phone number" required className="w-full mt-1.5 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-bridal-rose focus:ring-1 focus:ring-bridal-rose text-sm text-gray-900" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      <option value="">-- Choose Option --</option>
                      <option value="Bridal Essential Package">Bridal Essential Package</option>
                      <option value="Bridal Premium Luxe Package">Bridal Premium Luxe Package</option>
                      <option value="Pre-Wedding / Reception Glam">Pre-Wedding / Reception Glam</option>
                      <option value="Saree Draping only">Saree Draping only</option>
                      <option value="Bridal Hairstyling only">Bridal Hairstyling only</option>
                      <option value="Party Makeup Look">Party Makeup Look</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">Event Location / Venue<span className="text-red-500">*</span></label>
                  <input type="text" name="Location" placeholder="E.g., Chennai Mandapam, Tambaram" required className="w-full mt-1.5 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-bridal-rose focus:ring-1 focus:ring-bridal-rose text-sm text-gray-900" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">Message / Custom Requirements</label>
                  <textarea
                    name="Message"
                    rows={4}
                    placeholder={`Hi Suji, I would love to check availability for the ${selectedMakeup || "Bridal Package"} for my wedding event...`}
                    className="w-full mt-1.5 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-bridal-rose focus:ring-1 focus:ring-bridal-rose text-sm text-gray-900"
                  />
                </div>

                <div className="flex items-start space-x-2 text-xs text-gray-500 pt-2">
                  <input type="checkbox" required className="mt-0.5 accent-bridal-rose rounded" />
                  <p>I agree to the friendly <a href="/privacy" className="text-bridal-rose underline hover:text-bridal-brown">privacy policy</a> guidelines.</p>
                </div>

                <button type="submit" className="w-full bg-bridal-rose hover:bg-bridal-brown text-white font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-full shadow-md hover:shadow-lg transition-all active:scale-98">
                  Submit Availability Check
                </button>
              </form>
            </div>

            {/* Contact Details & Maps Card */}
            <div className="flex flex-col justify-between gap-6" data-aos="fade-left">
              {/* Direct Maps Widget */}
              <div className="rounded-3xl overflow-hidden shadow-sm border border-bridal-champagne/15 h-64 md:h-full min-h-[250px] relative">
                <iframe
                  title="Suji Hair & Makeup Tambaram Chennai Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.9234857469796!2d80.117188!3d12.912663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f0bd5a2789f%3A0xc1f237ef1b702ec8!2sSuji%20Hair%20%26%20Makeup!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 absolute inset-0"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Direct Contact Inquiries */}
              <div className="bg-white p-6 rounded-3xl shadow-xs border border-bridal-champagne/10 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-bridal-blush/40 text-bridal-rose rounded-full p-2.5 flex-shrink-0 mt-0.5">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-sm text-gray-900">Direct Consultation Call</h4>
                    <a href="tel:+919941492115" className="text-xs sm:text-sm text-gray-600 block mt-1 hover:text-bridal-rose transition">+91 99414 92115</a>
                    <a href="tel:+917305931283" className="text-xs sm:text-sm text-gray-600 block hover:text-bridal-rose transition">+91 73059 31283</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-bridal-blush/40 text-bridal-rose rounded-full p-2.5 flex-shrink-0 mt-0.5">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-sm text-gray-900">Email Inquiries</h4>
                    <a href="mailto:sujihairandmakeup@gmail.com" className="text-xs sm:text-sm text-gray-600 mt-1 block hover:text-bridal-rose transition">sujihairandmakeup@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-bridal-blush/40 text-bridal-rose rounded-full p-2.5 flex-shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-sm text-gray-900">Artist Location & Studio</h4>
                    <a
                      href="https://maps.app.goo.gl/xvmJuEWPTRAkjoc97"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-gray-600 mt-1 block hover:text-bridal-rose transition"
                    >
                      5/16 Ramakrishnapuram, East Tambaram, Chennai - 600059
                    </a>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-xs border border-bridal-champagne/10">
                  <h4 className="font-playfair font-bold text-sm text-gray-900 mb-2">Bridal Makeup Services Across Chennai</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    We provide bridal makeup services across Chennai, including Anna Nagar, T Nagar, Adyar, Velachery, Porur, Tambaram, OMR, ECR, Nungambakkam, Mylapore, Madipakkam, Chromepet, and nearby locations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Gallery Preview */}
      {lightboxImg && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setLightboxImg(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-bridal-champagne text-3xl font-light z-55 bg-black/40 w-12 h-12 rounded-full flex items-center justify-center transition"
            onClick={() => setLightboxImg(null)}
            aria-label="Close image preview"
          >
            &times;
          </button>
          <div className="max-w-3xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl relative">
            <img src={lightboxImg} alt="Bridal look portfolio close up" className="max-w-full max-h-[80vh] object-contain rounded-xl" />
          </div>
        </div>
      )}

      {/* Sticky WhatsApp Pulsating Widget */}
      <a
        href="https://wa.me/917305931283?text=Hi Suji, I'd like to check availability for my wedding makeup."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 text-white rounded-full p-3.5 shadow-xl hover:bg-green-600 transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center justify-center focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75 group-hover:opacity-0 pointer-events-none"></span>
        <IoLogoWhatsapp size={24} className="relative z-10" />
      </a>
    </>
  );
}
