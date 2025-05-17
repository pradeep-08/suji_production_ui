import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import aboutCert from "../img/About/About2.jpeg";
import aboutHero from "../img/About/image.png";


export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      <Helmet>
        <title>Why Choose Us? Suji Hair & Makeup | Top-Rated Bridal Artist in Chennai</title>
        <meta
          name="description"
          content="Learn about Suji, a professional bridal makeup artist in Chennai with 10+ years of experience in bridal beauty, mehandi, and saree draping."
        />
        <meta
          name="keywords"
          content="about Suji makeup artist, bridal makeup experience, Chennai makeup artist profile, trusted makeup artist Chennai"
        />
        <link rel="canonical" href="https://www.sujihairandmakeup.com/about" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "About Us",
              "url": "https://sujihairandmakeup.com/about",
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://sujihairandmakeup.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "About Us",
                    "item": "https://sujihairandmakeup.com/about"
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[80vh] sm:h-[90vh] flex items-center justify-center bg-black overflow-hidden">
        <img
          src={aboutHero}
          alt="Suji Hair and Makeup Certificate"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">Who we are?</h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto">
            Suji Hair & Makeup is a passionate team of bridal experts helping
            women feel confident, elegant, and radiant on their special day.
          </p>
        </div>
      </div>

      {/* About Text Section */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
          <p className="text-base sm:text-xl text-gray-700 leading-relaxed">
            At <strong>Suji Hair & Makeup</strong>, we believe that the true beauty of a bride
            lies in the perfect blend of tradition and style. Our mission is to empower every bride
            with <strong>confidence, grace, and elegance</strong> using industry-leading techniques
            in bridal makeup, saree draping, mehandi, and hairstyling. With over a decade of
            experience, we specialize in <strong>HD makeup, airbrush looks, and natural finishes</strong>
            tailored for engagement, reception, and baby shower events.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center mb-10">What We Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Bridal & Reception Makeup",
              "HD / Airbrush / Dewy Finish",
              "Saree Draping Services",
              "Mehandi for Brides & Guests",
              "Pre-Wedding Shoots",
              "Party & Celebrity Makeup",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
              >
                <p className="font-semibold text-base sm:text-lg text-gray-800">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-black text-white py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-up">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">The Woman Behind the Brand</h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Suji is a certified and seasoned makeup artist with years of
              experience. She leads a skilled team dedicated to bringing out the
              best in every bride, whether it's for traditional weddings or
              contemporary celebrations. Her passion lies in helping women feel
              radiant and confident on their special days.
            </p>
          </div>
          <div data-aos="fade-up">
            <img
              src={aboutCert}
              alt="Makeup artist applying foundation"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-pink-100 py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h4 className="text-2xl sm:text-3xl font-bold mb-4">Start Your Bridal Journey With Us</h4>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Book your bridal consultation today and let Suji Hair & Makeup create your dream look for your dream day.
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
