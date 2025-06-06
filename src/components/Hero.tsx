import { } from "lucide-react";
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


export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Professional Makeup",
      description:
        "Expert professional makeup artist for bridal, party, and everyday makeup looks. Enhance your natural beauty with long-lasting results for flawless skin and radiant makeup that suits every occasion.",
    },
    {
      icon: <Flower2 className="h-8 w-8" />,
      title: "Mehandi Design",
      description:
        "Custom Mehandi design for weddings, festivals, and special occasions. Offering intricate traditional and modern henna patterns that add charm and elegance to your special event.",
    },
    {
      icon: <Shirt className="h-8 w-8" />,
      title: "Saree Draping",
      description:
        "Professional saree draping services in classic and contemporary styles, perfect for weddings, events, and cultural celebrations. Get a flawless saree look with expert draping for an unforgettable appearance.",
    },
    {
      icon: <Baby className="h-8 w-8" />,
      title: "Baby Shower",
      description:
        "Creative baby shower styling and decorations to make your celebration memorable. Offering unique baby shower themes and custom setups for a personalized and joyful experience.",
    },
    {
      icon: <PartyPopper className="h-8 w-8" />,
      title: "Party Makeup",
      description:
        "Vibrant party makeup services for all events. Stand out with personalized looks that match your style for a special occasion, ensuring you look stunning at every party or celebration.",
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Pre-Wedding Photoshoot Makeup",
      description:
        "Flawless pre-wedding makeup for photoshoots, designed to enhance your natural features. Get stunning bridal portraits with professional makeup that lasts through your special day.",
    },
    {
      icon: <Brush className="h-8 w-8" />,
      title: "Air Brush Makeup",
      description:
        "Airbrush makeup for a smooth, flawless finish that lasts all day. Ideal for weddings, parties, and special events, providing you with a long-lasting, natural-looking makeup look.",
    },
  ];
  const images = [
    { url: newImg10, title: "Air Brush Makeup" },
    { url: newImg2, title: "Mugurtham Makeup" },
    { url: newImg3, title: "Engagement Basic Makeup" },
    { url: newImg4, title: "Reception Hairstyle" },
    { url: newImg12, title: "Saree Draping" },
    { url: newImg6, title: "Mugurtham Hairstyle" },
    { url: newImg7, title: "Engagement Look" },
    { url: newImg8, title: "Pre-Wedding Shoot" },
    { url: newImg9, title: "HD Makeup" },
    { url: newImg1, title: "Puberty Makeup" },
    { url: newImg5, title: "Maternity" },
    { url: newImg11, title: "Meganthi" },
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
      <Helmet>
        <title>Top Bridal Makeup Artist in Chennai | Suji Hair & Makeup</title>
        <meta name="description" content="Top bridal makeup artist in Chennai. Suji offers HD bridal makeup, mehandi, and saree draping for weddings, receptions, and all special occasions." />
        <meta name="keywords" content="bridal makeup Chennai, best makeup artist Chennai, HD bridal makeup, saree draping artist, Chennai mehandi service, party makeup, wedding makeup Chennai, Suji Hair and Makeup" />
        <meta name="author" content="Suji Hair & Makeup" />
        <link rel="canonical" href="https://sujihairandmakeup.com/" />
        {/* Open Graph (Facebook) */}
        <meta property="og:title" content="Suji Hair & Makeup | Bridal Makeup Artist in Chennai" />
        <meta property="og:description" content="Get stunning bridal makeup, mehandi designs, and perfect saree draping for your big day. Book Suji Hair & Makeup now!" />
        <meta property="og:image" content={hero} />
        <meta property="og:url" content="https://sujihairandmakeup.com/" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="max-image-preview:large" />
        {/* Twitter Card */}
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
            <a href="#contact">
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
      <div data-aos="zoom-in-up" id="services" className=" py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a range of professional beauty services to make you look
              and feel your best on your special day.
            </p>
          </div>

          <a href="#contact">
            <div data-aos=" ease-in" className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <div className="text-pink-600 mb-4">{service.icon}</div>
                  <h2 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
              ))}
            </div>
          </a>
        </div>
      </div>
      <div id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our portfolio of makeup transformations, mehandi
              designs, and saree draping styles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                data-aos="flip-left"
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-100px object-cover transform group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4">
                    <h2 className="text-white font-medium">{image.title}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
                      placeholder={`I am looking to book the \"${selectedMakeup || 'a makeup service'}\" package with Suji Hair & Makeup. Kindly share details about pricing and availability.`}
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
                    <a href="tel:+919941492115" className="text-sm text-gray-600">+91 9941492115</a>
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
      {/* <About />
      <Services />
      <Gallery />
      <Contact /> */}
    </>
  );
}
