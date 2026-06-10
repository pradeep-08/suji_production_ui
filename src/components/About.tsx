import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Award, ShieldCheck, Heart, Sparkles, MapPin, CheckCircle } from "lucide-react";
import aboutCert from "../img/About/About2.webp";
import aboutHero from "../img/About/image.webp";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Meet Suji | Top Bridal Makeup Artist in Chennai | Suji Hair & Makeup</title>
        <meta name="description" content="Learn about Suji, a professional certified bridal makeup artist in Chennai with 10+ years of experience in HD bridal beauty, mehandi, and saree draping." />
        <meta name="keywords" content="about Suji makeup artist, bridal makeup experience, Chennai makeup artist profile, trusted makeup artist Chennai" />
        <link rel="canonical" href="https://sujihairandmakeup.in/about" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center bg-bridal-brown overflow-hidden">
        <img
          src={aboutHero}
          alt="Suji Hair and Makeup Certificate & Preparation"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bridal-brown via-bridal-brown/40 to-transparent"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-3xl" data-aos="fade-up">
          <span className="text-bridal-champagne text-xs font-bold uppercase tracking-widest bg-bridal-champagne/20 px-3.5 py-1 rounded-full border border-bridal-champagne/30 backdrop-blur-xs">
            Our Journey
          </span>
          <h1 className="text-4xl sm:text-6xl font-playfair font-bold mt-4 mb-4">Meet Suji</h1>
          <p className="text-base sm:text-lg text-bridal-blush font-light max-w-xl mx-auto leading-relaxed">
            The heart and hand behind Suji Hair & Makeup, dedicated to creating elegant, skin-friendly, and custom bridal transformations in Chennai.
          </p>
        </div>
      </div>

      {/* About Description */}
      <section className="bg-bridal-bg py-20 px-4 sm:px-6 text-bridal-brown">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <span className="text-bridal-rose text-xs font-bold uppercase tracking-widest bg-bridal-blush/40 px-3 py-1 rounded-full">Our Philosophy</span>
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mt-4 mb-6">Enhancing Natural Grace with Luxury Craftsmanship</h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            At <strong className="text-bridal-brown font-semibold">Suji Hair & Makeup</strong>, we believe every bride deserves to look like the most refined version of herself. We steer clear of heavy, mask-like makeup, focusing instead on seamless skin matching, customized hairstyling, and traditional saree draping precision. 
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto mt-4">
            Leveraging over a decade of hands-on expertise in HD cosmetics and airbrush styling, we custom-design looks that translate beautifully in high-definition video, flash photography, and close-up real life.
          </p>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="bg-white py-20 px-4 sm:px-6 text-bridal-brown">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-playfair font-bold text-gray-900">Why Brides Entrust Their Special Day to Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Sanitation Protocols",
                desc: "We practice surgical-grade tool sterilization, single-use applicators, and makeup tray hygiene to guarantee total safety for your skin.",
                icon: ShieldCheck
              },
              {
                title: "Skin-Tone True Matching",
                desc: "We analyze skin undertones before product application to prevent ashiness, keeping your bridal look vibrant and natural all day.",
                icon: Sparkles
              },
              {
                title: "Venue & Travel Support",
                desc: "Our fully equipped mobile bridal squad travels directly to your venue or home in Chennai and across Tamil Nadu.",
                icon: MapPin
              }
            ].map((badge, idx) => (
              <div 
                key={idx} 
                className="bg-bridal-bg p-6 sm:p-8 rounded-2xl border border-bridal-champagne/10 text-center"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="bg-bridal-rose/10 text-bridal-rose rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <badge.icon size={24} />
                </div>
                <h3 className="font-playfair font-bold text-base text-gray-900 mb-2">{badge.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder & Certification Details */}
      <section className="bg-bridal-brown text-white py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" data-aos="fade-right">
            <span className="text-bridal-champagne text-xs font-bold uppercase tracking-widest bg-bridal-champagne/20 px-3 py-1 rounded-full">The Makeup Artist</span>
            <h3 className="text-3xl sm:text-4xl font-playfair font-bold text-bridal-champagne">Certified Luxury Bridal Artistry</h3>
            <p className="text-bridal-blush/80 text-sm leading-relaxed">
              Suji is a professional certified cosmetics practitioner who has trained extensively with top-tier beauty academies. She works with a curated network of senior hairstylists and draping assistants to provide a seamless, stress-free bridal service on your wedding morning.
            </p>
            <p className="text-bridal-blush/80 text-sm leading-relaxed">
              Her personal kit contains exclusively elite global cosmetics brands such as MAC, Huda Beauty, Anastasia Beverly Hills, Bobbi Brown, and Estée Lauder, guaranteeing a waterproof, lightweight, and long-lasting finish.
            </p>
            <div className="space-y-3 pt-3">
              {[
                "South Indian Bridal Specialist",
                "HD & Airbrush Certified Professional",
                "Advanced Hair Accessory & Jewelry Setting",
                "Traditional Muhurtham & Contemporary reception looks"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm">
                  <CheckCircle size={16} className="text-bridal-champagne flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative" data-aos="fade-left">
            <img
              src={aboutCert}
              alt="Suji certified makeup studio and tools"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3] border border-bridal-champagne/20"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16 px-4 sm:px-6 text-bridal-brown">
        <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <h4 className="text-2xl sm:text-3xl font-playfair font-bold text-gray-900 mb-3">Reserve Your Bridal Date</h4>
          <p className="text-gray-600 text-xs sm:text-sm max-w-md mx-auto mb-6">
            Ensure your dates are locked in with Chennai's trusted bridal artist. Connect with us to check package rates.
          </p>
          <Link
            to="/contact"
            className="inline-flex bg-bridal-rose hover:bg-bridal-brown text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full shadow-md transition"
          >
            Inquire Bridal Availability
          </Link>
        </div>
      </section>
    </>
  );
}
