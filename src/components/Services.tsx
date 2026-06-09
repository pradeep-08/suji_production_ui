import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Sparkles, CheckCircle, IoLogoWhatsapp } from "react-icons/io";
import { Check } from "lucide-react";
import { formatPrice } from "../utils/pricing";

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

export interface ServiceDetail {
  title: string;
  category: string;
  img: string;
  description: string;
  price: number;
  inclusions: string[];
}

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const serviceList: ServiceDetail[] = [
    {
      title: "Airbrush Bridal Makeup",
      category: "Premium Bridal",
      img: newImg10,
      description: "Ultra sweat-proof, matte, and transfer-resistant silicon makeup applied using state-of-the-art compressor tools. Perfect for long mugurtham events and hot climate sessions.",
      price: 35000,
      inclusions: ["Silicon-based Airbrush base", "Luxury 3D silk lashes", "Bridal hairstyle design", "Wedding saree draping", "Jewelry placement helper"]
    },
    {
      title: "Bridal HD Makeup",
      category: "Signature Bridal",
      img: newImg9,
      description: "High-definition camera-friendly bridal makeup designed to hide fine pores and create a seamless dewy finish under heavy studio flash photography.",
      price: 12000,
      inclusions: ["HD liquid base application", "Faux lashes placement", "Traditional hair bun/braid styling", "Classic saree draping", "Touch-up assistance guidance"]
    },
    {
      title: "Engagement / Reception Look",
      category: "Special Occasions",
      img: newImg3,
      description: "Fresh, contemporary, and glamorous styling customized to complement modern engagement gowns, lehengas, or designer sarees.",
      price: 7500,
      inclusions: ["Custom HD face markup", "Lashes placement", "Modern waves or designer hairstyle", "Saree / Lehenga draping", "Premium setting spray finish"]
    },
    {
      title: "Traditional Saree Draping",
      category: "Styling Services",
      img: newImg12,
      description: "Get your traditional silk saree, kanjeevaram, or reception lehenga draped with clean pleats, pin placements, and total physical comfort.",
      price: 499,
      inclusions: ["Ironing checks & pleating", "Classic South Indian folding", "Modern contemporary styles", "Secure safety pinning", "Waistbelt/accessory alignment"]
    },
    {
      title: "Bridal Hairstyling",
      category: "Hair Artistry",
      img: newImg6,
      description: "Traditional jasmine poola jada braids, high floral buns, or elegant half-up styles decorated with gold hair ornaments and matching accessories.",
      price: 2000,
      inclusions: ["Hair blow-dry & texturizing", "Extensions setting (if needed)", "Jewelry/accessory securing", "Real or artificial flower styling", "Anti-frizz hair spray lock"]
    },
    {
      title: "Party / Guest Styling",
      category: "Party Looks",
      img: newImg8,
      description: "Elegant makeup and styling services for bridesmaids, mothers of the bride, baby showers, or birthday party celebrations.",
      price: 5000,
      inclusions: ["Standard party makeup", "Quick hair curls or blowdry", "Saree draping assistance", "Lightweight long-stay finish"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Bridal Makeup, Mehandi & Saree Draping Services in Chennai</title>
        <meta name="description" content="Explore our premium bridal services including Ultra HD makeup, waterproof airbrush makeup, mehandi, and expert saree draping in Chennai by Suji." />
        <meta name="keywords" content="bridal makeup services Chennai, waterproof bridal makeup, traditional mehandi Chennai, saree draping Chennai, party makeup" />
        <link rel="canonical" href="https://sujihairandmakeup.in/services" />
      </Helmet>

      {/* Page Header */}
      <div className="bg-bridal-bg text-bridal-brown pt-32 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <span className="text-bridal-rose text-xs font-bold uppercase tracking-widest bg-bridal-blush/40 px-3.5 py-1 rounded-full">
            Our Offerings
          </span>
          <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-gray-900 mt-4 mb-4">
            Professional Bridal & Beauty Services
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Crafting elegant, custom looks that emphasize your natural beauty for weddings, engagements, receptions, and parties in Chennai.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="bg-white py-20 px-4 sm:px-6 text-bridal-brown">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceList.map((service, idx) => (
              <div
                key={idx}
                className="bg-bridal-bg rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-bridal-champagne/10 flex flex-col justify-between h-full"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div>
                  {/* Service Image */}
                  <div className="h-60 overflow-hidden relative">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-white/95 text-bridal-rose text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                      {service.category}
                    </span>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-baseline mb-3">
                      <h3 className="text-lg font-playfair font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="border-t border-bridal-champagne/20 my-4" />

                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-800 mb-3">What's Included:</h4>
                    <ul className="space-y-2 mb-6">
                      {service.inclusions.map((inclusion, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-2 text-xs text-gray-600">
                          <Check size={14} className="text-bridal-rose flex-shrink-0" />
                          <span>{inclusion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="px-6 pb-6 pt-2">
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-[10px] text-gray-400 font-semibold uppercase">Starting from</span>
                    <span className="text-xl font-bold font-playfair text-gray-900">{formatPrice(service.price)}</span>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={`https://wa.me/917305931283?text=Hi Suji, I would like to inquire about the ${encodeURIComponent(service.title)} service.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 bg-green-500 hover:bg-green-600 text-white font-bold text-[10px] uppercase tracking-wider py-2.5 px-4 rounded-full transition"
                    >
                      <IoLogoWhatsapp size={14} />
                      <span>WhatsApp Inquiry</span>
                    </a>
                    <a
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="flex-1 inline-flex items-center justify-center bg-bridal-rose hover:bg-bridal-brown text-white font-bold text-[10px] uppercase tracking-wider py-2.5 px-4 rounded-full transition"
                    >
                      <span>Book Now</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote Request banner */}
      <section className="bg-bridal-bg py-16 px-4 sm:px-6 text-center text-bridal-brown">
        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-gray-900 mb-3">Looking for a Customized Bridal Combo?</h3>
          <p className="text-gray-600 text-xs sm:text-sm max-w-md mx-auto mb-6">
            We provide specialized discounted packages when booking multiple services together (e.g., Mugurtham + Reception + Saree Draping + Groom Touchup).
          </p>
          <a
            href="/contact"
            className="inline-flex bg-bridal-brown hover:bg-bridal-rose text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full shadow-md transition"
          >
            Request Custom Quote
          </a>
        </div>
      </section>
    </>
  );
}
