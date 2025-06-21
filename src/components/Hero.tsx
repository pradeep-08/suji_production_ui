import { Star, StarIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import hero from "../img/hero/hero.jpeg";
import about2 from "../img/About/About2.jpeg";
import newImg11 from "../img/new/11.jpeg";
import newImg1 from "../img/new/1.jpeg";
import newImg2 from "../img/new/2.jpeg";
import newImg3 from "../img/new/3.jpeg";
import newImg4 from "../img/new/4.jpeg";
import newImg5 from "../img/new/5.jpeg";
import newImg6 from "../img/new/6.jpeg";
import newImg7 from "../img/new/7.jpeg";
import newImg8 from "../img/new/8.jpeg";
import newImg9 from "../img/new/9.jpeg";
import newImg10 from "../img/new/10.jpeg";
import newImg12 from "../img/new/12.jpeg";
import { useState, useEffect } from "react";
import AOS from "aos";
import {
  Palette,
  Flower2,
  Shirt,
  Baby,
  PartyPopper,
  Camera,
  Brush,
  Phone, MapPin, ArrowRight, Mail, CheckCircle
} from "lucide-react";
import { FaBrush, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { LuCalendarArrowUp } from "react-icons/lu";

export interface Service {
  id: string;
  tag?: string;
  url?: any;
  gallery: string[];
  icon?: string;
  title: string;
  price: string;
  rating: string;
  reviews: string;
  category: string;
  description: string;
  featured?: boolean;
}
export default function Hero() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 2000 });
  }, []);
  const [expandedService, setExpandedService] = useState<Service | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);


  const handleNext = () => {
    if (!expandedService) return;
    setCurrentImageIndex((prev) =>
      prev === expandedService.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    if (!expandedService) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? expandedService.gallery.length - 1 : prev - 1
    );
  };
  // { title: "Air Brush Makeup", url: newImg10 },
  // { title: "Mugurtham Makeup", url: newImg2 },
  // { title: "Engagement Basic Makeup", url: newImg3 },
  // { title: "", url: newImg4 },
  // { title: "", url: newImg12 },
  // { title: "", url: newImg6 },
  // { title: "", url: newImg7 },
  // { title: "", url: newImg8 },
  // { title: "HD Makeup", url: newImg9 },
  // { title: "Puberty Makeup", url: newImg1 },
  // { title: "Maternity", url: newImg5 },
  // { title: "Meganthi", url: newImg11 },
  // { title: "Others", url: hero }
  const services: Service[] = [
    {
      id: "1",
      tag: "Most Preferred",
      url: newImg10,
      gallery: [newImg10, newImg3, newImg6, newImg4],
      icon: "/icons/crown.svg",
      title: "Air Brush Makeup",
      price: "₹35,000 – ₹45,000",
      rating: "5.0",
      reviews: "12 Reviews",
      category: "Bridal Makeup",
      description: "Flawless, long-lasting makeup application using airbrush technology for a natural finish",
      featured: true
    },
    {
      id: "2",
      tag: "Popular",
      url: newImg2,
      gallery: [newImg2, newImg3, newImg6, newImg4],
      icon: "/icons/saree.svg",
      title: "Mugurtham Makeup",
      price: "₹9,000 – ₹12,000",
      rating: "4.9",
      reviews: "28 Reviews",
      category: "Mehndi Artist",
      description: "Traditional South Indian bridal makeup for the wedding ceremony"
    },
    {
      id: "3",
      tag: "💸 Budget Friendly",
      url: newImg3,
      gallery: [newImg3, newImg3, newImg6, newImg4],
      icon: "/icons/saree.svg",
      title: "Engagement Basic Makeup",
      price: "₹7,000 – ₹9,000",
      rating: "4.7",
      reviews: "35 Reviews",
      category: "Saree Styling",
      description: "Elegant yet simple makeup look perfect for engagement ceremonies"
    },
    {
      id: "4",
      tag: "🔥 New",
      url: newImg4,
      gallery: [newImg10, newImg3, newImg6, newImg4],
      icon: "/icons/scissors.svg",
      title: "Engagement Look",
      price: "₹7,500 – ₹10,000",
      rating: "4.8",
      reviews: "8 Reviews",
      category: "Hair Services",
      description: "Complete bridal hair styling for engagement ceremonies with accessories"
    },
    {
      id: "5",
      tag: "✨Most Preferred",
      url: newImg12,
      gallery: [newImg12, newImg10, newImg6, newImg4],
      icon: "/icons/scissors.svg",
      title: "Saree Draping",
      price: "₹499 – ₹1,000",
      rating: "4.8",
      reviews: "8 Reviews",
      category: "Hair Services",
      description: "Professional saree draping in various traditional and contemporary styles"
    },
    {
      id: "6",
      tag: "⭐ Popular",
      url: newImg6,
      gallery: [newImg6, newImg3, newImg6, newImg4],
      icon: "/icons/scissors.svg",
      title: "Mugurtham Hairstyle",
      price: "₹2,000 – ₹3,000",
      rating: "4.8",
      reviews: "8 Reviews",
      category: "Hair Services",
      description: "Traditional South Indian bridal hairstyle with jewelry and accessories"
    },
    {
      id: "7",
      tag: "🔥 New",
      url: newImg7,
      gallery: [newImg7, newImg3, newImg6, newImg4],
      icon: "/icons/scissors.svg",
      title: "Pre-Wedding Shoot",
      price: "₹5,000 – ₹7,000",
      rating: "4.8",
      reviews: "8 Reviews",
      category: "Hair Services",
      description: "Complete hair and makeup services for pre-wedding photo shoots"
    },
    {
      id: "8",
      tag: "Most Preferred",
      url: newImg8,
      gallery: [newImg8, newImg3, newImg6, newImg4],
      icon: "/icons/scissors.svg",
      title: "Pre-Wedding Shoot",
      price: "₹6,000 – ₹8,000",
      rating: "4.8",
      reviews: "8 Reviews",
      category: "Hair Services",
      description: "Professional makeup and styling for pre-wedding photography sessions"
    },
    {
      id: "9",
      tag: "Popular",
      url: newImg9,
      gallery: [newImg9, newImg3, newImg6, newImg4],
      icon: "/icons/scissors.svg",
      title: "HD Makeup",
      price: "₹12,000 – ₹16,000",
      rating: "4.8",
      reviews: "8 Reviews",
      category: "Hair Services",
      description: "High-definition makeup perfect for photography and special occasions"
    },
    {
      id: "10",
      tag: "🔥 New",
      url: newImg1,
      gallery: [newImg1, newImg3, newImg6, newImg4],
      icon: "/icons/scissors.svg",
      title: "Puberty Makeup",
      price: "₹5,000 – ₹7,000",
      rating: "4.8",
      reviews: "8 Reviews",
      category: "Hair Services",
      description: "Special makeup services for puberty ceremonies and coming-of-age events"
    },
    {
      id: "11",
      tag: "💸 Budget Friendly",
      url: newImg5,
      gallery: [newImg5, newImg3, newImg6, newImg4],
      icon: "/icons/scissors.svg",
      title: "Maternity",
      price: "₹5,000 – ₹7,000",
      rating: "4.8",
      reviews: "8 Reviews",
      category: "Hair Services",
      description: "Makeup and styling services tailored for maternity photo shoots"
    },
    {
      id: "12",
      tag: "💸 Budget Friendly",
      url: newImg11,
      gallery: [newImg11, newImg3, newImg6, newImg4],
      icon: "/icons/scissors.svg",
      title: "Meganthi",
      price: "₹5,000 – ₹7,000",
      rating: "4.8",
      reviews: "8 Reviews",
      category: "Hair Services",
      description: "Traditional makeup and hairstyling for South Indian meganthi ceremonies"
    }
  ];


  const recommendations = services.slice(0, 3);

  const faqs = [
    {
      question: "How far in advance should I book my bridal makeup?",
      answer:
        "It is recommended to book at least 3-6 months in advance to ensure availability, especially during the peak wedding season.",
    },
    {
      question: "Do you offer makeup trials before the wedding day?",
      answer:
        "Yes, makeup trials are available and highly encouraged to ensure you’re happy with the look beforehand.",
    },
    {
      question: "What brands of makeup products do you use?",
      answer:
        "We use premium and professional brands such as MAC, Huda Beauty, Bobbi Brown, and Kryolan to ensure quality and long-lasting wear.",
    },
    {
      question: "Do you provide makeup services at the venue?",
      answer:
        "Yes, we provide on-location makeup services across Tamil Nadu and surrounding areas for your convenience.",
    },
    {
      question: "What safety measures do you follow during makeup sessions?",
      answer:
        "We adhere to strict hygiene protocols including sanitized tools, masks, and personal hygiene standards to ensure safety for all clients.",
    },
  ];

  const makeupOptions = [
    "Air Brush Makeup",
    "Mugurtham Makeup",
    "Engagement Basic Makeup",
    "Reception Hairstyle",
    "Saree Draping",
    "Mugurtham Hairstyle",
    "Engagement Look",
    "Pre-Wedding Shoot",
    "HD Makeup",
    "Puberty Makeup",
    "Maternity",
    "Meganthi",
    "Others"
  ];

  const testimonials = [
    {
      name: "Anitha Ramesh",
      username: "radiant_beauty_01",
      rating: 5,
      review:
        "She did my makeup and hair so well for my wedding. Everyone said I looked amazing. Thank you!",
    },
    {
      name: "Karthika Ravi",
      username: "makeup_muse_22",
      rating: 4,
      review:
        "Good hair styling and soft makeup. It stayed perfect the whole day. I'm happy with the service.",
    },
    {
      name: "Deepika Natarajan",
      username: "glam_goddess_90",
      rating: 5,
      review:
        "Very professional and friendly. My engagement look came out so beautiful. Highly recommend.",
    },
    {
      name: "Meena Kumar",
      username: "bridal_bliss_33",
      rating: 4,
      review:
        "Nice work! She gave me a natural glow look which I really loved. My photos came out great too.",
    },
    {
      name: "Revathi Srinivasan",
      username: "flawless_finish_05",
      rating: 5,
      review:
        "The hair bun and eye makeup were perfect. I looked just how I imagined. So glad I chose her.",
    },
    {
      name: "Lakshmi Narayan",
      username: "elegant_glow_78",
      rating: 4,
      review:
        "My party makeup and hair were done nicely. Everyone complimented me. Thank you for the great work!",
    },
  ];

  function getDynamicDate(index: number) {
    const today = new Date();
    const monthsAgo = today.getMonth() - (index % 2 === 0 ? 1 : 2);
    const reviewDate = new Date(today);
    reviewDate.setMonth(monthsAgo);
    return reviewDate.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }


  function getInitials(name: string) {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  }


  const imageSlides = [
    { title: "Airbrush Bridal Makeup in Chennai", url: newImg10 }, // Air Brush Makeup
    { title: "Traditional Mugurtham Bridal Makeup Look", url: newImg2 }, // Mugurtham Makeup
    { title: "Simple Engagement Makeup for Brides", url: newImg3 }, // Engagement Basic Makeup
    { title: "Elegant Reception Hairstyle for Indian Brides", url: newImg4 }, // Reception Hairstyle
    { title: "Perfect Saree Draping for Wedding Functions", url: newImg12 }, // Saree Draping
    { title: "Mugurtham Bridal Hairstyle Inspiration", url: newImg6 }, // Mugurtham Hairstyle
    { title: "Gorgeous Engagement Bridal Look", url: newImg7 }, // Engagement Look
    { title: "Pre-Wedding Shoot Makeup and Styling", url: newImg8 }, // Pre-Wedding Shoot
    { title: "HD Bridal Makeup for Photoshoot", url: newImg9 }, // HD Makeup
    { title: "Traditional Puberty Makeup for Girls", url: newImg1 }, // Puberty Makeup
    { title: "Maternity Photoshoot Makeup Look", url: newImg5 }, // Maternity
    { title: "Mehendi / Meganthi Ceremony Bridal Look", url: newImg11 }, // Meganthi
    { title: "Bridal Makeup and Hairstyling Portfolio", url: hero } // Others
  ];
  const [selectedMakeup, setSelectedMakeup] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 2000 });

    if (!autoSlide) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imageSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [autoSlide]);

  useEffect(() => {
    if (selectedMakeup) {
      const index = imageSlides.findIndex((img) => img.title === selectedMakeup);
      if (index !== -1) {
        setCurrentSlide(index);
        setAutoSlide(false);
      }
    }
  }, [selectedMakeup]);


  return (
    <>
      {/* Helmet for SEO & Social Sharing */}
      {/* <Helmet>
        <title>Top Bridal Makeup Artist in Chennai | Suji Hair & Makeup</title>
        <meta name="description" content="Top bridal makeup artist in Chennai. Suji offers HD bridal makeup, mehandi, and saree draping for weddings, receptions, and all special occasions." />
        <meta name="keywords" content="bridal makeup Chennai, best makeup artist Chennai, HD bridal makeup, saree draping artist, Chennai mehandi service, party makeup, wedding makeup Chennai, Suji Hair and Makeup" />
        <meta name="author" content="Suji Hair & Makeup" />
        <link rel="canonical" href="https://sujihairandmakeup.com/" />
       
        <meta property="og:title" content="Suji Hair & Makeup | Bridal Makeup Artist in Chennai" />
        <meta property="og:description" content="Get stunning bridal makeup, mehandi designs, and perfect saree draping for your big day. Book Suji Hair & Makeup now!" />
        <meta property="og:image" content={hero} />
        <meta property="og:url" content="https://sujihairandmakeup.com/" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="max-image-preview:large" />
  
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Suji Hair & Makeup | Best Bridal Makeup Artist in Chennai" />
        <meta name="twitter:description" content="Professional bridal makeup, traditional mehandi, and saree draping services in Chennai. Book now!" />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Suji Hair & Makeup",
      "url": "https://sujihairandmakeup.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://sujihairandmakeup.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
    `}
        </script>
      </Helmet> */}
      <Helmet>
        <title>Top Bridal Makeup Artist in Chennai | Suji Hair & Makeup</title>
        <meta name="description" content="Top bridal makeup artist in Chennai. Suji offers HD bridal makeup, mehandi, and saree draping for weddings, receptions, and all special occasions." />
        <meta name="keywords" content="bridal makeup Chennai, best makeup artist Chennai, HD bridal makeup, saree draping artist, Chennai mehandi service, party makeup, wedding makeup Chennai, Suji Hair and Makeup" />
        <meta name="author" content="Suji Hair & Makeup" />
        <link rel="canonical" href="https://sujihairandmakeup.com/" />
        <meta property="og:title" content="Suji Hair & Makeup | Bridal Makeup Artist in Chennai" />
        <meta property="og:description" content="Get stunning bridal makeup, mehandi designs, and perfect saree draping for your big day. Book Suji Hair & Makeup now!" />
        <meta property="og:image" content={hero} />
        <meta property="og:url" content="https://sujihairandmakeup.com/" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="max-image-preview:large" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Suji Hair & Makeup | Best Bridal Makeup Artist in Chennai" />
        <meta name="twitter:description" content="Professional bridal makeup, traditional mehandi, and saree draping services in Chennai. Book now!" />
        <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Suji Hair & Makeup",
      "url": "https://sujihairandmakeup.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://sujihairandmakeup.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  `}</script>
      </Helmet>

      {/* Hero Section */}
      <div
        data-aos="fade-zoom-in"
        id="home"
        className="relative min-h-screen flex items-center"
      >
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Beauty background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Look with Expert Beauty Services .
            </h1>
            <p className="text-xl text-gray-200 mb-8 ">
              Professional makeup, traditional mehandi designs, and elegant
              saree draping services for all your special occasions.
            </p>
            <a href="/contact">
              <button
                data-aos="slide-up"
                className="bg-pink-600 text-white px-8 py-3 rounded-md hover:bg-pink-700 transition flex items-center space-x-4 animate-blinkWave "
              >
                <Mail className=" h-5 w-5 text-white-600 flex-shrink-0" />
                <span> Book Appointment </span>
                <ArrowRight className="h-5 w-5 " />
              </button>
            </a>
          </div>
        </div>
      </div>


      <div id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Makeup Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional makeup and styling services for all occasions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                {service.tag && (
                  <div className="absolute top-4 left-4 bg-white text-pink-600 font-bold px-3 py-1 rounded-full text-xs z-10">
                    {service.tag}
                  </div>
                )}
                <div className="h-64 overflow-hidden">
                  <img
                    src={service.url}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-pink-600 font-bold text-lg">
                      {service.price}
                    </span>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="text-gray-700">{service.rating}</span>
                      <span className="text-gray-500 text-sm ml-2">
                        ({service.reviews})
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      className="flex-1 border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white py-2 px-4 rounded transition-colors"
                      onClick={() => {
                        setExpandedService(service);
                        setCurrentImageIndex(0);
                      }}
                    >
                      Details
                    </button>
                    <a href={`/contact?service=${encodeURIComponent(service.title)}`}>
                      <button className="flex items-center justify-center flex-1 bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded transition-colors gap-2">
                        <LuCalendarArrowUp className="h-5 w-5" />
                        Book Now
                      </button>
                    </a>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {expandedService && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
              <div className="bg-white rounded-xl shadow-lg w-full max-w-6xl relative flex flex-col md:flex-row overflow-hidden">
                <button
                  className="absolute top-4 right-4 text-white mix-blend-difference text-2xl z-10"
                  onClick={() => setExpandedService(null)}
                >
                  &times;
                </button>

                <div className="md:w-1/2 relative h-[400px] md:h-auto">
                  <img
                    src={expandedService.gallery[currentImageIndex]}
                    alt={expandedService.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={handlePrev}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow"
                  >
                    <FaChevronRight />
                  </button>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    {expandedService.gallery.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-full ${idx === currentImageIndex ? "bg-pink-600" : "bg-gray-300"}`}
                      ></div>
                    ))}
                  </div>
                  <div className="absolute bottom-4 right-4 text-white text-xs bg-black bg-opacity-60 px-2 py-1 rounded">
                    {currentImageIndex + 1}/{expandedService.gallery.length}+
                  </div>
                </div>

                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    {expandedService.title}
                  </h3>
                  <p className="text-gray-700 mb-3 text-sm">
                    {expandedService.description}
                  </p>
                  <div className="flex items-center text-yellow-500 text-lg mb-2">
                    ★ {expandedService.rating}
                    <span className="text-sm text-gray-500 ml-2">
                      ({expandedService.reviews})
                    </span>
                  </div>
                  <div className="text-pink-600 font-bold text-2xl mb-6">
                    {expandedService.price}
                  </div>
                  <a href={`/contact?service=${encodeURIComponent(expandedService.title)}`}><div className="flex space-x-4">
                    <button className="flex items-center justify-center flex-1 bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded transition-colors gap-2">
                      <LuCalendarArrowUp className="h-5 w-5" />
                      Book Now
                    </button>

                  </div></a>
                  {/* Recommendations */}
                  {expandedService && (
                    <div className="hidden md:block bg-white mt-6 rounded-lg max-w-6xl w-full">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-xl font-bold">You may also like</h4>
                        <a href="#" className="text-pink-600 font-semibold text-sm">View all →</a>
                      </div>
                      <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2">
                        {recommendations.map((item) => (
                          <div
                            key={item.id}
                            onClick={() => {
                              setExpandedService(item);
                              setCurrentImageIndex(0);
                            }}
                            className="flex-shrink-0 w-64 bg-white rounded-lg shadow p-4 border border-gray-100 cursor-pointer hover:shadow-md transition"
                          >
                            <div className="flex items-center space-x-4">
                              <img src={item.url} alt={item.title} className="w-16 h-16 rounded-md object-cover" />
                              <div className="flex-1">
                                <div className="flex items-center text-yellow-500 text-sm mb-1">
                                  ★ {item.rating}
                                  <span className="text-gray-500 text-xs ml-1">{item.reviews}</span>
                                </div>
                                <h5 className="text-md font-semibold leading-tight text-gray-900">{item.title}</h5>
                                <p className="text-sm text-gray-500">{item.category}</p>
                                <p className="text-sm font-bold text-gray-900">{item.price}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

              </div>


            </div>
          )}
        </div >
      </div >
      <div data-aos="slide-right" id="about" className="  pt-24">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 d-grid">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About</h2>
          </div>
          <section className="pt-10 overflow-hidden  md:pt-0 sm:pt-16 2xl:pt-16">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div className="grid items-center grid-cols-1 md:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-bold leading-tight text-black  sm:text-5xl lg:text-3xl">
                    <br className="block sm:hidden" />
                    Suji Hair and Makeup
                  </h2>
                  <p
                    data-aos="fade-down"
                    className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600  md:mt-8"
                  >
                    offers a range of services to enhance your natural beauty
                    for any occasion. From basic to HD, matte, and dewy makeup,
                    we cater to all needs including engagement, reception, and
                    pre-wedding looks. Whether it’s party makeup, bridal makeup,
                    or special events like baby showers and puberty ceremonies,
                    our expert team ensures you look stunning and radiant. Let
                    us help you shine on your special day !!!
                  </p>
                </div>
                <div className="relative">
                  <img
                    src={about2}
                    className="rounded-xl transition-transform duration-300 transform "
                    alt="Imagem de perfil"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">Our trusted clients</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow text-sm text-gray-700"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={
                      i < t.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                    }
                    fill={i < t.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <p className="mb-4">"{t.review}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">
                    {getInitials(t.name)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">@{t.username}</p>
                  </div>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {getDynamicDate(index)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div data-aos="zoom-in-up" id="contact" className="py-24">
        <div className="py-24 bg-[#f9fafb] px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-stretch">
            <div className="bg-white p-10 shadow-md rounded-xl flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-pink-600 text-sm font-semibold">Get in Touch</h2>
                <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-3">Let's Chat, Reach Out to Us</h2>
                <p className="text-gray-600 text-sm mb-6">Have questions or feedback? We're here to help. Send us a message, and we'll respond within 24 hours.</p>
                <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                  <input type="hidden" name="access_key" value="6a320d9d-1efa-45d9-9307-885f2424b1ba" />
                  <input type="hidden" name="subject" value="New Request from Client ❗⚠️" />
                  <input type="hidden" name="from_name" value="Client Notification ⚠️" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">First Name<span className="text-red-500">*</span></label>
                      <input type="text" name="First Name" placeholder="First name" required className="w-full mt-1 px-3 py-2 border rounded-md focus:border-green-500 focus:ring-green-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Last Name</label>
                      <input type="text" name="Last Name" placeholder="Last name" className="w-full mt-1 px-3 py-2 border rounded-md focus:border-green-500 focus:ring-green-500" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email Address<span className="text-red-500">*</span></label>
                    <input type="email" name="Email" placeholder="Email address" required className="w-full mt-1 px-3 py-2 border rounded-md focus:border-green-500 focus:ring-green-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Select Makeup Service</label>
                    <select
                      name="Makeup Type"
                      className="w-full mt-1 px-3 py-2 border rounded-md focus:border-green-500 focus:ring-green-500"
                      value={selectedMakeup}
                      onChange={(e) => setSelectedMakeup(e.target.value)}
                    >
                      <option value="">-- Please select --</option>
                      {makeupOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      name="Message"
                      rows={5}
                      placeholder={`I am looking to book the \"₹{selectedMakeup || 'a makeup service'}\" package with Suji Hair & Makeup. Kindly share details about pricing and availability.`}
                      className="w-full mt-1 px-3 py-2 border rounded-md focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <div className="flex items-start space-x-2 text-sm">
                    <input type="checkbox" required className="mt-1" />
                    <p>I agree to our friendly <a href="/privacy" className="text-pink-600 underline">privacy policy</a></p>
                  </div>
                  <button type="submit" className="w-full bg-pink-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-pink-700">Send Message</button>
                </form>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div className="relative w-full h-full max-h-[660px] overflow-hidden rounded-xl">
                <img
                  key={currentSlide}
                  src={imageSlides[currentSlide].url}
                  alt={imageSlides[currentSlide].title}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ease-in-out"
                />
                {selectedMakeup && imageSlides[currentSlide].title === selectedMakeup && (
                  <div className="absolute top-2 right-2 bg-green-600 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                    <CheckCircle className="h-4 w-4" /> Selected
                  </div>
                )}
                <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs md:text-sm px-3 py-1 rounded-md">
                  {imageSlides[currentSlide].title}
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md space-y-6 mt-6">
                <div className="flex items-start space-x-3">
                  <Mail className="text-pink-600" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:sujihairandmakeup@gmail.com" className="text-sm text-gray-600">sujihairandmakeup@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="text-pink-600" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a href="tel:+919941492115" className="text-sm text-gray-600">+91 9941492115 / 73059 31283</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="text-pink-600" />
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <a href="https://maps.app.goo.gl/xvmJuEWPTRAkjoc97" target="_blank" className="text-sm text-gray-600">5/16 Ramakrishnapuram, East Tambaram, Chennai - 600059</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                  className="w-full flex justify-between items-center px-5 py-4 bg-white text-left text-gray-800 font-medium hover:bg-gray-100"
                >
                  <span>{faq.question}</span>
                  <span className="text-xl">{activeFAQ === index ? "▴" : "▾"}</span>
                </button>
                {activeFAQ === index && (
                  <div className="px-5 pb-5 text-gray-600 text-sm bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <About />
      <Services />
      <Gallery />
      <Contact /> */}
    </>
  );
}
