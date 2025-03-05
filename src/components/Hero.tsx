import { ArrowRight, Mail } from "lucide-react";
import hero from "../img/hero/hero.jpeg";
import { useEffect } from "react";
import AOS from "aos";
import { Helmet } from "react-helmet";
export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      data-aos="fade-zoom-in"
      id="home"
      className="relative min-h-screen flex items-center"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Suji Makeup Artist – Bridal Makeup, Hair & Saree Draping</title>
        <meta
          name="description"
          content="Sujihairandmakeup offers professional hair styling, makeup, and saree draping services. Perfect for weddings, events, and special occasions. Get flawless beauty and makeup results tailored to you!"
        />
        <meta
          name="keywords"
          content="hair and makeup services, bridal makeup, celebrity makeup artist, glam makeup, luxury makeup services, makeup for bridesmaids, makeup for photoshoots, minimalist makeup, eco-friendly beauty, vegan makeup artist, natural beauty makeup, bridal hair styling, saree draping for brides, sleek wedding hair, event makeup, bridal party makeup, makeup for red carpet, bridal beauty, makeup transformation, boho chic hair, clean beauty makeup, mehendi services, bridal mehendi, henna designs, mehendi for weddings, mehendi artist, wedding mehendi, bridal hand mehendi, mehendi for events, mehendi for photoshoots, Chennai makeup artist, Tambaram makeup artist, makeup artist near me, bridal makeup near me, hair stylist near me, makeup services in Chennai, bridal hair and makeup Chennai, wedding makeup artist in Tambaram, professional makeup artist near me, makeup artist for special events in Chennai, best makeup artist in Tambaram, bridal makeup in Chennai, makeup for weddings near me, makeup and saree draping services in Chennai, affordable makeup artist in Chennai, luxury makeup services in Tambaram"
        />

        <meta name="author" content="Sujihairandmakeup" />
        <meta
          property="og:title"
          content="Sujihairandmakeup - Your Beauty, Our Expertise"
        />
        <meta
          property="og:description"
          content="Get stunning bridal and event makeup, hair styling, and saree draping services with Sujihairandmakeup. Let us help you shine for every occasion!"
        />
        <meta
          property="og:image"
          content="https://www.sujihairandmakeup.com/assets/Suji-QuUuC_J5.png" // Replace with actual image URL
        />
        <meta property="og:url" content="https://sujihairandmakeup.com/" />
        <link rel="canonical" href="https://sujihairandmakeup.com/" />
      </Helmet>

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
            Transform Your Look with Expert Beauty Services.
          </h1>
          <p className="text-xl text-gray-200 mb-8 ">
            Professional makeup, traditional mehandi designs, and elegant saree
            draping services for all your special occasions.
          </p>
          <a href="#contact">
            <button
              data-aos="slide-up"
              className="bg-pink-600 text-white px-8 py-3 rounded-md hover:bg-pink-700 transition flex items-center space-x-4 animate-blinkWave "
            >
              <Mail className=" h-5 w-5 text-white-600 flex-shrink-0" />
              <span>Book Appointment</span>
              <ArrowRight className="h-5 w-5 " />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
