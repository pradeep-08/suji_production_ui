import { } from "lucide-react";
import { Helmet } from "react-helmet-async";
import hero from "../img/hero/hero.jpeg";
import { useEffect } from "react";
import AOS from "aos";
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
import {
  Palette,
  Flower2,
  Shirt,
  Baby,
  PartyPopper,
  Camera,
  Brush,
  Phone, MapPin, ArrowRight, Mail
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">About</h1>
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Our Services
            </h1>
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Our Gallery
            </h1>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get in touch with us for bookings and inquiries. We're here to
              make your special day perfect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                id="request"
                className="space-y-6"
              >
                <div>
                  <input
                    type="hidden"
                    name="access_key"
                    value="6a320d9d-1efa-45d9-9307-885f2424b1ba"
                  />
                  <input
                    type="hidden"
                    name="subject"
                    value="New Request from Client ❗⚠️"
                  />
                  <input
                    type="hidden"
                    name="from_name"
                    value="Client Notification ⚠️"
                  />
                  <label className="block text-sm font-medium text-gray-900">
                    Name
                  </label>
                  <input
                    name="Full Name"
                    type="text"
                    className="placeholder-gray-500 mt-1 p-1 block w-full rounded-md border border-[#aaaaaa] focus:border-pink-500 focus:ring-pink-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <input
                    id="to"
                    name="Email"
                    type="email"
                    placeholder="Your Mail"
                    className="mt-1 p-1 block w-full rounded-md  border border-[#aaaaaa] focus:border-pink-500 focus:ring-pink-500"
                    required
                  />
                </div>
                <div>
                  <label className="block colour-black text-sm font-medium text-gray-900">
                    Phone
                  </label>
                  <input
                    type="tel"
                    pattern="[0-9]{10}"
                    className="mt-1 p-1 block w-full rounded-md border border-[#aaaaaa] focus:border-pink-500 focus:ring-pink-500"
                    name="Phone Number"
                    placeholder="+91 9876543210"
                    required
                    max="10"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="mt-1 p-1 block w-full rounded-md border border-[#aaaaaa] focus:border-pink-500 focus:ring-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">
                    Event
                  </label>
                  <input
                    type="text"
                    name="event"
                    placeholder="Event Name"
                    className="mt-1 p-1 block w-full rounded-md border border-[#aaaaaa] focus:border-pink-500 focus:ring-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    aria-label="msg-me"
                    name="message"
                    rows={4}
                    className="mt-1 p-1 block w-full rounded-md   border border-[#aaaaaa] focus:border-pink-500 focus:ring-pink-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition"
                >
                  Book Now
                </button>
              </form>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-pink-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a
                      target="_blank"
                      href="https://wa.me/9941492115"
                      className="text-gray-600"
                    >
                      +91 9941492115
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 text-pink-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      target="_blank"
                      href="mailto:sujihairandmakeup@gmail.com"
                      className="text-gray-600"
                    >
                      sujihairandmakeup@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-pink-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <a
                      target="_blank"
                      href="https://maps.app.goo.gl/xvmJuEWPTRAkjoc97"
                      className="text-gray-600"
                    >
                      Makeup Artist : <b> Suji</b>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <iframe
                  title="location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d280.7992693848448!2d80.13686454845711!3d12.928752116473857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f1b543c2993%3A0x1ffacd20ec75cff2!2s5%2F16%2C%20Ramakrishnapuram%2C%20Kuppusamy%20Nagar%2C%20East%20Tambaram%2C%20Tambaram%2C%20Chennai%2C%20Tamil%20Nadu%20600059!5e0!3m2!1sen!2sin!4v1739266320074!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
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
