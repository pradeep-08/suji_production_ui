import { ArrowRight, Mail } from "lucide-react";
import hero from "../img/hero/hero.jpeg";
import { useEffect } from "react";
import AOS from "aos";
import { Helmet } from "react-helmet-async";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
     
      <div
        data-aos="fade-zoom-in"
        id="home"
        className="relative min-h-screen flex items-center"
      >
         <Helmet>
        <title > Suji Hair & Makeup - Beauty Experts</title>
        <meta
          name="description"
          content="Transform your look with Suji Hair & Makeup. Bridal makeup, hair styling, and saree draping services for every occasion."
        />
        <meta
          property="og:title"
          content="Suji Hair & Makeup - Beauty Experts"
        />
        <meta
          property="og:description"
          content="Flawless makeup, expert hair styling, and perfect saree draping – Suji Hair & Makeup is here for your big day!"
        />
        <meta
          property="og:image"
          content="https://www.sujihairandmakeup.com/assets/hero.png"
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
              Professional makeup, traditional mehandi designs, and elegant
              saree draping services for all your special occasions.
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
    </>
  );
}
