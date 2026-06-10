import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Sparkles, ArrowRight, Star, ShieldCheck, Award, Phone, Mail, MapPin } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";
import { formatPrice } from "../utils/pricing";

// Import images for portfolio grids
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

interface ServiceData {
  title: string;
  description: string;
  keywords: string;
  h1: string;
  subheading: string;
  intro: string;
  longContent: string[];
  features: { title: string; desc: string }[];
  price: number;
  packageDetails: string[];
  faqs: { question: string; answer: string }[];
  images: string[];
}

const servicesContent: Record<string, ServiceData> = {
  "bridal-makeup-artist-chennai": {
    title: "Bridal Makeup Artist in Chennai | Suji Hair & Makeup",
    description: "Looking for the best bridal makeup artist in Chennai? Suji Hair & Makeup offers premium HD and airbrush bridal makeovers tailored for South Indian weddings.",
    keywords: "bridal makeup artist in Chennai, best bridal makeup artist in Chennai, wedding makeup Chennai, South Indian bridal makeup, mugurtham makeup artist",
    h1: "Bridal Makeup Artist in Chennai",
    subheading: "Exquisite, Luxury South Indian Bridal Makeovers custom-crafted for your big day",
    intro: "Suji Hair & Makeup is a premier Chennai-based bridal makeup service specializing in high-definition (HD), airbrush, and traditional South Indian bridal transformations. Recognized for her radiant skin-like finishes, long-lasting products, and absolute punctuality, Suji provides customized bridal makeovers across Chennai including T Nagar, Anna Nagar, Adyar, Velachery, and Tambaram. Every bridal look is designed to perfectly harmonize with your outfit, jewelry, lighting setups, and skin tone.",
    longContent: [
      "Your wedding day is one of the most significant moments of your life. In Chennai, traditional wedding events span across multiple rituals—from early morning Muhurtham ceremonies to grand evening Receptions. Each of these events demands a distinct makeup styling, hair setup, and saree draping style. At Suji Hair & Makeup, we understand the technicalities behind wedding photography, humid weather conditions, and personal comfort. We formulate your bridal makeup using dermatologist-tested, water-resistant, and high-performance luxury brands such as MAC, NARS, Huda Beauty, Bobbi Brown, and Estee Lauder.",
      "Our signature bridal makeover centers on enhancing your natural features rather than masking them. We avoid cakey overlays, ensuring your makeup feels light, breathable, and glows naturally under heavy mandap lighting. Our team travels directly to your venue or home across Chennai, meaning you can stay relaxed while we take care of your styling needs.",
      "From traditional temple jewelry setting to modern floral braids, our hairstyling matches your wedding theme. Saree draping is executed with flawless pleats that remain locked and comfortable for hours of standing, walking, and greeting guests. Secure your wedding date with Chennai's trusted bridal artist to look and feel absolute best."
    ],
    features: [
      { title: "Tailored to Skin Tone", desc: "Expert undertone matching for flawless appearance in person and on camera." },
      { title: "Premium Brand Guarantee", desc: "100% genuine luxury cosmetics ensuring zero skin irritation or breakouts." },
      { title: "Pleat-Perfect Saree Draping", desc: "Traditional and modern saree draping styles customized for heavy Kanjeevarams." }
    ],
    price: 15000,
    packageDetails: [
      "HD / Airbrush Bridal Makeup",
      "Luxury Bridal Hairstyling & Hair Extensions",
      "Professional Saree Draping / Lehenga Setting",
      "Premium False Eye Lashes & Eyelid Enhancements",
      "Jewelry Placement & Secure Pinning",
      "On-Location Travel Service Across Chennai"
    ],
    faqs: [
      { question: "Do you travel to venues in Chennai?", answer: "Yes, we travel directly to your home, hotel room, or wedding venue anywhere in Chennai, including T Nagar, Velachery, Anna Nagar, and Tambaram." },
      { question: "What brands of makeup do you use?", answer: "We use only high-end, international brands like MAC, Huda Beauty, NARS, Bobbi Brown, and Anastasia Beverly Hills." },
      { question: "Is a trial makeup session available?", answer: "Yes, trial sessions can be booked in advance to align on colors, hair structure, and skin preferences before the main event." }
    ],
    images: [newImg1, newImg11, newImg3, newImg4]
  },
  "hd-bridal-makeup-chennai": {
    title: "HD Bridal Makeup Artist in Chennai | Suji Hair & Makeup",
    description: "Get flawless, camera-ready HD bridal makeup in Chennai. Long-lasting, sweat-proof, and camera-optimized bridal beauty by Suji Hair & Makeup.",
    keywords: "HD bridal makeup Chennai, high definition makeup artist Chennai, best HD bridal makeup, Chennai wedding makeup",
    h1: "HD Bridal Makeup in Chennai",
    subheading: "Flawless High-Definition Bridal Makeup for High-Resolution Photography",
    intro: "Capture every beautiful emotion with high-definition (HD) bridal makeup. Specially optimized for 4K video cameras and close-up photography, HD makeup scatters light evenly across the face to create an ultra-smooth, skin-like texture. Suji Hair & Makeup is the top specialist in Chennai offering HD bridal styling that keeps you looking flawless, camera-ready, and glowing under high-intensity event lighting.",
    longContent: [
      "Traditional makeup can sometimes look heavy or noticeable under high-resolution modern cameras. HD Bridal Makeup solves this by using micro-fine pigments that mimic natural skin. These specialized cosmetics blend seamlessly into your skin, blurring blemishes, fine lines, and open pores without looking cakey or dry. This is highly essential for Chennai weddings where humidity can affect makeup longevity.",
      "Suji designs HD bridal makeovers using premium, light-diffusing formulas. Whether your event is an outdoor morning Muhurtham or a brightly lit indoor hall, our HD techniques ensure your skin looks luminous, soft, and balanced. We pay close attention to color matching, ensuring the foundation looks like a second skin under flash photography.",
      "Our package is completely comprehensive. Alongside HD makeup, we provide luxury hairstyling and traditional saree draping to ensure every detail of your bridal look is neat, symmetric, and securely set for the entire day's celebrations."
    ],
    features: [
      { title: "Light-Diffusing Formulas", desc: "Prevents flashback and white-cast under camera flashes and videography lights." },
      { title: "Micro-Fine Blendability", desc: "Provides high coverage while maintaining a lightweight, breathable feel." },
      { title: "Flawless Pore Blurring", desc: "Minimizes the appearance of skin textures, open pores, and dark spots." }
    ],
    price: 16000,
    packageDetails: [
      "Premium High-Definition (HD) Makeup Application",
      "Custom Face Contouring & Highlighting",
      "Waterproof Eye Makeup & Lash Extensions",
      "Professional Bridal Hairstyle (Floral Braids / Buns)",
      "Perfect Saree Draping & Pleating",
      "Venue Travel & Styling Setup across Chennai"
    ],
    faqs: [
      { question: "What makes HD makeup different from regular makeup?", answer: "HD makeup uses light-diffusing, micro-pigmented formulas that blend seamlessly to look natural under high-resolution lenses without looking cakey." },
      { question: "Will the HD makeup last through hot Chennai weather?", answer: "Yes! We prep the skin with premium primers and set it with professional setting sprays so it remains sweat-proof and shine-free." },
      { question: "Do you provide lashes with HD makeup?", answer: "Yes, premium false eyelashes are included in all of our HD bridal makeup packages." }
    ],
    images: [newImg5, newImg6, newImg7, newImg8]
  },
  "airbrush-makeup-chennai": {
    title: "Airbrush Bridal Makeup Artist in Chennai | Suji Hair & Makeup",
    description: "Experience lightweight, transfer-proof, and sweat-resistant airbrush bridal makeup in Chennai by Suji. Perfect for humid climates.",
    keywords: "airbrush makeup artist Chennai, airbrush bridal makeup Chennai, transfer proof makeup, sweat proof bridal makeup",
    h1: "Airbrush Bridal Makeup in Chennai",
    subheading: "Lightweight, Transfer-Proof and Long-Lasting Airbrush Makeovers",
    intro: "For brides seeking the ultimate in durability and flawless coverage, airbrush makeup is the premier choice. Using a professional stylus, foundation is sprayed as a micro-fine mist onto the skin, creating a thin, uniform veil of color. Suji Hair & Makeup offers premium airbrush bridal makeup in Chennai, delivering transfer-proof, water-resistant, and sweat-proof finishes that stay fresh for up to 18 hours.",
    longContent: [
      "In Chennai's humid and warm climate, makeup melting is a primary concern for brides. Airbrush makeup is highly recommended because of its silicone-based, water-resistant properties. Instead of being rubbed onto the skin, it is sprayed in layers, ensuring it bonds tightly to the skin surface. This makes the look completely smudge-proof and transfer-proof—meaning it won't rub off onto your silk saree or guests' shoulders during hugs.",
      "The result is a stunning porcelain finish. It is highly effective for concealing acne scars, pigmentation, or uneven skin textures. Because the coverage is built up using micro-layers, it requires less product than traditional liquid foundation, making it feel incredibly light and comfortable.",
      "Suji and her team ensure the airbrush technique is customized to your skin type. Whether you prefer a matte or dewy finish, we adjust the formulas to give you a long-lasting, luxury glow that lasts from the early morning rituals till the reception afterparties."
    ],
    features: [
      { title: "Silicone-Based Durability", desc: "Completely sweat-proof and waterproof, ideal for Chennai humidity." },
      { title: "Smudge & Transfer Proof", desc: "Will not transfer onto clothing, jewelry, or fabrics throughout the event." },
      { title: "Porcelain Airbrushed Finish", desc: "Even, spray-mist application that covers textures with minimal product weight." }
    ],
    price: 18000,
    packageDetails: [
      "Professional Airbrush Foundation & Blush Mist",
      "Silicone-based HD Primer & Prep",
      "Lash Application & High-Performance Setting",
      "Bridal Bun or Classic South Indian Floral Jada",
      "Saree Draping / Dupatta Pleating",
      "All Travel Charges inside Chennai Included"
    ],
    faqs: [
      { question: "Is airbrush makeup good for oily skin?", answer: "Yes, airbrush makeup is exceptional for oily and combination skin as it is highly resistant to sweat, water, and sebum production." },
      { question: "How long does airbrush makeup last?", answer: "It easily lasts 15 to 18 hours without requiring touch-ups, making it perfect for long wedding days." },
      { question: "Is airbrush makeup heavier than HD makeup?", answer: "No, it actually feels much lighter on the skin because the spray technique uses a very thin layer of product." }
    ],
    images: [newImg9, newImg10, newImg11, newImg12]
  },
  "engagement-makeup-chennai": {
    title: "Engagement Makeup Artist in Chennai | Suji Hair & Makeup",
    description: "Book professional engagement makeup artist in Chennai. Elegant, fresh, and soft glam looks for your engagement ceremony by Suji.",
    keywords: "engagement makeup artist Chennai, best engagement makeup, pre-wedding makeover Chennai, soft glam makeup Chennai",
    h1: "Engagement Makeup Artist in Chennai",
    subheading: "Soft Glam & Elegant Makeovers for Your Engagement Ceremony",
    intro: "Your engagement ceremony marks the official beginning of your wedding celebrations. The makeup for this event is typically softer, fresher, and more contemporary than the primary bridal look. Suji Hair & Makeup specializes in creating elegant engagement looks in Chennai, providing the perfect balance between traditional warmth and modern, lightweight sophistication.",
    longContent: [
      "Engagement looks are a great opportunity to experiment with modern styles. Many brides choose pastel lehengas, modern fusion gowns, or soft silk sarees. The makeup should match this aesthetic. Suji customizes your engagement makeover to focus on luminous skin, soft eye definition, and neutral or rosy lip colors that complement your outfit.",
      "We prepare your skin with hydrating bases that look fresh and dewy. Whether you want a classic South Indian look with a half-braid or a modern look with soft waves and smokey eyes, we align the hairstyle and draping to create a cohesive style.",
      "Booking professional engagement styling ensures you look polished and confident for your ring exchange and photography. We travel directly to your home or venue, ensuring you are ready on time without any stress."
    ],
    features: [
      { title: "Soft-Glam Aesthetic", desc: "Fresh, romantic styles designed to look glowing and effortless." },
      { title: "Modern Hairstyles", desc: "Options include soft Hollywood waves, textured buns, and floral half-updos." },
      { title: "Custom Draping", desc: "Expert styling for lehengas, designer sarees, and modern fusion gowns." }
    ],
    price: 8000,
    packageDetails: [
      "HD Engagement Makeup Application",
      "Hydrating Skin Prep & Glow Finish",
      "Modern / Traditional Hairstyling & Setting",
      "Saree / Lehenga Draping",
      "Jewelry Styling & Secure Placement",
      "Direct Venue / Home Service in Chennai"
    ],
    faqs: [
      { question: "How long does engagement makeup take?", answer: "Typically, it takes about 1.5 to 2 hours for makeup, hair, and draping." },
      { question: "Can I choose a modern hairstyle for my engagement?", answer: "Absolutely! We specialize in textured updos, messy braids, and soft waves that pair beautifully with modern outfits." },
      { question: "Do you travel to venues for engagement makeup?", answer: "Yes, we provide home and venue service for all engagement bookings across Chennai." }
    ],
    images: [newImg2, newImg3, newImg6, newImg7]
  },
  "reception-makeup-chennai": {
    title: "Reception Makeup Artist in Chennai | Suji Hair & Makeup",
    description: "Glamorous, high-shine reception makeup in Chennai. Modern waves and bold makeup aesthetics designed by Suji Hair & Makeup.",
    keywords: "reception makeup Chennai, reception makeup artist, wedding reception makeover, bold makeup look Chennai",
    h1: "Reception Makeup in Chennai",
    subheading: "Glamorous, High-Shine Reception Makeovers and Modern Hairstyles",
    intro: "The wedding reception is the ultimate evening celebration. With grand stage lighting, flash photography, and modern outfits like designer lehengas, gowns, or fancy sarees, the makeup needs to be bold, glamorous, and long-lasting. Suji Hair & Makeup offers premium reception makeup services in Chennai, designed to make you stand out and shine under the evening spotlight.",
    longContent: [
      "Evening receptions require a different makeup technique than morning ceremonies. The stage lights can easily wash out soft colors, so we design reception makeup with defined eyes, bold contouring, and luminous highlighting that reflects light beautifully. From classic gold cut-creases to modern smokey eyes and glossy lips, we customize the look to match your outfit and personality.",
      "Hairstyling for receptions is often more relaxed and modern. We offer Hollywood curls, sleek ponytails, messy low buns, or voluminous braids adorned with baby's breath or modern hair accessories. Every style is locked with professional hold sprays so it stays perfect through hours of standing, photography, and dancing.",
      "Our reception package includes skin prep, premium lashes, hairstyle, and outfit draping. Suji will design a look that makes you feel confident, radiant, and absolutely stunning for your grand entrance."
    ],
    features: [
      { title: "Stage-Optimized Glow", desc: "Makeup designed to look radiant under bright halogen and stage lighting." },
      { title: "Modern Hair Designs", desc: "Sleek ponytails, glamorous waves, and contemporary hair styling." },
      { title: "Eye & Lip Definition", desc: "Expert placement of shimmer, eyeliner, and long-lasting lip colors." }
    ],
    price: 9000,
    packageDetails: [
      "HD / Airbrush Reception Makeup",
      "Luminous Highlighting & Sculpting",
      "Glamour Eye Makeup & Lashes",
      "Modern Evening Hairstyle",
      "Saree / Lehenga / Gown Setting",
      "On-Location Travel Service inside Chennai"
    ],
    faqs: [
      { question: "What is the difference between Muhurtham and Reception makeup?", answer: "Muhurtham makeup is typically more traditional, natural, and matte, whereas Reception makeup is bolder, features defined eyes, and has a more luminous, glamorous finish." },
      { question: "Can you style modern lehengas and gowns?", answer: "Yes! We specialize in modern draping and styling for lehengas, fusion wear, and western gowns." },
      { question: "Do you provide hair accessories for the reception?", answer: "We secure your extensions and pins; any specific artificial flowers or designer clips should be provided by the client." }
    ],
    images: [newImg1, newImg4, newImg9, newImg12]
  },
  "party-makeup-artist-chennai": {
    title: "Party Makeup Artist in Chennai | Suji Hair & Makeup",
    description: "Book professional party makeup artist in Chennai. Flawless makeup and hairstyling for family events, pre-wedding parties, and special occasions.",
    keywords: "party makeup artist Chennai, guest makeup Chennai, party makeover, family makeup service Chennai",
    h1: "Party Makeup Artist in Chennai",
    subheading: "Sophisticated & Fresh Party Makeup for All Festive Occasions",
    intro: "Whether you are a bridesmaid, the mother of the bride, attending a close friend's wedding, or celebrating a family event, looking polished is essential. Suji Hair & Makeup offers professional party makeup services in Chennai, providing lightweight, natural-looking, and high-quality makeovers for guests, family members, and party attendees.",
    longContent: [
      "Guest and party makeup should be polished and long-lasting without overshadowing the bride. We focus on clean, skin-like bases that cover imperfections while looking fresh and natural. We customize the eye makeup and lip colors to suit your outfit, whether it's a traditional silk saree, salwar suit, or modern dress.",
      "Our party makeup package is designed to be quick and efficient, ensuring you and your family are ready on time. We use premium, skin-friendly products that stay fresh through long ceremonies without drying or oxidation.",
      "We offer group bookings for family members and bridesmaids, making it convenient for everyone to get styled at the venue or home. Let us help you look your best for your next special occasion."
    ],
    features: [
      { title: "Quick & Efficient Setup", desc: "Perfect for group styling, ensuring everyone is ready on time." },
      { title: "Natural & Clean Finish", desc: "Soft coverage that enhances your natural beauty without looking heavy." },
      { title: "Skin-Friendly Products", desc: "Hypoallergenic formulas that are safe for all skin types and ages." }
    ],
    price: 4000,
    packageDetails: [
      "HD Party Makeup Application",
      "Basic Skin Hydration & Prep",
      "Elegant Hairstyling (Blow-dry / Soft Curls / Simple Bun)",
      "Saree Draping / Salwar Setting",
      "Basic Lash Placement (Optional)",
      "Service Available at Your Location or Studio"
    ],
    faqs: [
      { question: "Do you offer group discounts for family makeup?", answer: "Yes, we offer custom group pricing when booking makeup for 3 or more family members." },
      { question: "Can I book only saree draping and hair for a party?", answer: "Yes, we offer standalone hair and draping services as well." },
      { question: "How long does a party makeup session take?", answer: "It takes approximately 1 hour per person for makeup, hair, and simple draping." }
    ],
    images: [newImg2, newImg5, newImg8, newImg10]
  },
  "hairstyling-saree-draping-chennai": {
    title: "Hairstyling and Saree Draping in Chennai | Suji Hair & Makeup",
    description: "Professional hairstyling and saree draping services in Chennai. Traditional South Indian braids, elegant buns, and pleat-perfect saree draping.",
    keywords: "hairstyling and saree draping Chennai, saree draping artist Chennai, professional hair stylist, traditional bridal hairstyle",
    h1: "Hairstyling & Saree Draping in Chennai",
    subheading: "Traditional Braids, Modern Updos, and Pleat-Perfect Saree Draping",
    intro: "A beautiful outfit and makeup are complete only when paired with the perfect hairstyle and neat saree draping. Suji Hair & Makeup offers professional hairstyling and saree draping services in Chennai, ensuring your attire looks structured, clean, and elegant for any occasion.",
    longContent: [
      "Saree draping is an art that requires precision. Heavy silk sarees like Kanjeevaram demand firm pleats, secure pin placement, and correct height adjustment to ensure you can walk and sit comfortably. Suji is an expert in draping, creating clean lines that highlight your silhouette without slipping or bulkiness.",
      "Our hairstyling services range from traditional South Indian bridal braids (Jada) to modern buns, textured updos, and open-hair Hollywood curls. We use professional hair paddings, extensions, and styling tools to add volume and secure your hair accessories.",
      "Whether you are styling a traditional bride, attending a formal dinner, or celebrating a festival, our team provides custom hair and draping solutions directly at your doorstep."
    ],
    features: [
      { title: "Perfect Pleat Alignment", desc: "Precision folding and pinning that keeps heavy sarees light and secure." },
      { title: "Voluminous Hair Artistry", desc: "Expert styling for thin or short hair using premium extensions." },
      { title: "Secure Pinning & Comfort", desc: "Safe pinning techniques that protect delicate fabrics from tears." }
    ],
    price: 3000,
    packageDetails: [
      "Professional Saree Draping (Muhurtham / Modern Styles)",
      "Custom Hairstyling (Traditional Braid / Low Bun / Curls)",
      "Extensions Setting & Hair Padding",
      "Flowers & Jewelry Placement",
      "Secure Pinning & Attire Alignment",
      "Available for Group Bookings at Your Location"
    ],
    faqs: [
      { question: "Can you drape heavy silk sarees?", answer: "Yes, we specialize in handling heavy Kanjeevaram and Banarasi sarees, ensuring the pleats are neat and secure." },
      { question: "Do you bring hair extensions?", answer: "We can help you set and style extensions, but the extensions themselves must be purchased or provided by the client." },
      { question: "How many pins do you use for draping?", answer: "We use the minimum necessary high-quality safety pins to keep the drape secure without damaging the silk." }
    ],
    images: [newImg3, newImg6, newImg9, newImg11]
  },
  "home-service-bridal-makeup-chennai": {
    title: "Home Service Bridal Makeup in Chennai | Suji Hair & Makeup",
    description: "Enjoy premium home service bridal makeup in Chennai. Suji and her team travel to your home or venue across Chennai for stress-free beauty.",
    keywords: "home service bridal makeup Chennai, bridal makeup at home Chennai, doorstep makeup service, wedding venue makeup artist",
    h1: "Home Service Bridal Makeup in Chennai",
    subheading: "Premium On-Venue and In-Home Bridal Makeup Services across Chennai",
    intro: "Your wedding day should be filled with joy, not travel stress. Getting ready in the comfort of your own home or wedding venue hotel room allows you to remain calm and focused. Suji Hair & Makeup offers premium home service bridal makeup in Chennai, bringing the entire luxury studio experience directly to your doorstep.",
    longContent: [
      "Traveling to a salon on your wedding morning can lead to delays, traffic stress, and messed-up hair. Our home service eliminates these issues. Suji and her professional team arrive at your location ahead of schedule, equipped with professional lighting, sanitize-tested products, and all necessary tools.",
      "We set up a comfortable styling station in your room, coordinating with your photographers and family members. We ensure the timeline is maintained, leaving plenty of time for outfit adjustments, jewelry setting, and pre-wedding bridal portraits.",
      "Our home service covers all areas in Chennai, including Anna Nagar, Velachery, T Nagar, Tambaram, Adyar, and surrounding districts. Book our doorstep service for a luxury, stress-free makeover experience."
    ],
    features: [
      { title: "Punctual On-Site Setup", desc: "We arrive early with professional makeup vanity kits and lights." },
      { title: "Stress-Free Prep", desc: "Avoid morning traffic and salon rushes by styling in your comfort zone." },
      { title: "Complete Group Styling", desc: "We style the bride, bridesmaids, and family members at the same venue." }
    ],
    price: 15000,
    packageDetails: [
      "HD / Airbrush Bridal Makeup at Your Venue",
      "Premium Skin Prep & Hydrating Massage",
      "Luxury Hairstyling & Extensions Attachment",
      "Professional Saree Draping / Lehenga Pleating",
      "Lashes & Jewelry Placement",
      "Full On-Venue Support until the Photographer Arrives"
    ],
    faqs: [
      { question: "Is there an extra travel fee for home service?", answer: "Travel charges within Chennai city limits are completely included in our primary package pricing." },
      { question: "What requirements do you need in the room?", answer: "We require a clean table, a comfortable chair, good electrical outlets, and a well-ventilated space with natural light or bright bulbs." },
      { question: "How early do you arrive?", answer: "We always arrive 15 to 30 minutes before the scheduled start time to set up our workstation." }
    ],
    images: [newImg4, newImg7, newImg10, newImg12]
  }
};

export default function ServiceDetail() {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const { pathname } = useLocation();
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  // Extract the slug from the pathname to support both route patterns (dynamic parameter or static route path)
  const slug = serviceSlug || pathname.replace(/^\/|\/$/g, "");
  const data = slug ? servicesContent[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveFAQ(null);
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 150);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-bridal-bg text-bridal-brown font-sans p-6 text-center">
        <h1 className="text-3xl font-playfair font-bold text-gray-900 mb-4">Service Page Not Found</h1>
        <p className="text-gray-600 mb-8 max-w-md">The service page you are looking for does not exist or has been migrated.</p>
        <Link to="/" className="bg-bridal-rose hover:bg-bridal-brown text-white font-semibold text-xs uppercase tracking-widest px-8 py-3 rounded-full transition shadow-md">
          Return to Homepage
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta name="keywords" content={data.keywords} />
        <link rel="canonical" href={`https://sujihairandmakeup.in/${slug}`} />
      </Helmet>

      {/* Hero Header */}
      <section className="relative min-h-[60vh] flex items-center justify-center font-sans overflow-hidden bg-bridal-brown text-white">
        <div className="absolute inset-0 opacity-40">
          <img src={data.images[0]} alt={data.h1} className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-bridal-brown via-bridal-brown/60 to-transparent" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center z-10">
          <span className="inline-flex items-center gap-1.5 bg-bridal-champagne/20 text-bridal-champagne border border-bridal-champagne/30 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles size={12} className="animate-spin" />
            <span>Chennai Local SEO Verified Service</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-playfair font-bold leading-tight mb-4 text-white">
            {data.h1}
          </h1>
          <p className="text-sm sm:text-base text-bridal-blush max-w-2xl mx-auto italic font-light">
            {data.subheading}
          </p>
        </div>
      </section>

      {/* Main Copywriting Block */}
      <section className="py-20 bg-white text-bridal-brown font-sans">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* 600+ Word Content Column */}
            <div className="lg:col-span-2 space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
              <h2 className="text-2xl font-playfair font-bold text-gray-900 border-b border-bridal-champagne/20 pb-3">
                Complete Service Guide & Overview
              </h2>
              <p className="font-semibold text-gray-900 bg-bridal-bg/40 p-4 rounded-xl border-l-4 border-bridal-rose">
                {data.intro}
              </p>
              {data.longContent.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              {/* Service Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
                {data.features.map((feature, idx) => (
                  <div key={idx} className="bg-bridal-bg p-4 rounded-xl border border-bridal-champagne/10 text-center">
                    <h4 className="font-playfair font-bold text-gray-900 mb-1 text-sm">{feature.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Price & Package Card Side Column */}
            <div className="bg-bridal-bg border border-bridal-champagne/20 rounded-3xl p-6 sm:p-8 h-fit shadow-xs space-y-6">
              <span className="text-bridal-rose text-[10px] font-extrabold uppercase tracking-widest bg-bridal-blush/40 px-3 py-1 rounded-full">
                Service Package Rate
              </span>
              <div>
                <span className="text-3xl font-playfair font-bold text-gray-900">
                  {formatPrice(data.price)}
                </span>
                <span className="text-xs text-gray-500 block mt-1">*Rate varies dynamically based on platforms detection.</span>
              </div>

              <div className="border-t border-bridal-champagne/20 pt-6">
                <h4 className="font-playfair font-bold text-sm text-gray-900 mb-4">Package Inclusions:</h4>
                <ul className="space-y-3 text-xs text-gray-600">
                  {data.packageDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-bridal-rose text-sm font-bold">✔</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 space-y-3">
                <a
                  href={`https://wa.me/917305931283?text=${encodeURIComponent(
                    `Hi Suji, I would like to book the ${data.h1} for my wedding event. Please check availability.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full shadow-md transition"
                >
                  <IoLogoWhatsapp size={16} />
                  <span>Check Dates via WhatsApp</span>
                </a>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-bridal-rose hover:bg-bridal-brown text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full shadow-md transition"
                >
                  <span>Book Consultation Form</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service Portfolio Grid */}
      <section className="py-20 bg-bridal-bg text-bridal-brown font-sans border-t border-bridal-champagne/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-bridal-rose text-xs font-bold uppercase tracking-widest bg-bridal-blush/40 px-3 py-1 rounded-full">Portfolio Showcase</span>
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-gray-900 mt-2">Real Transformations</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {data.images.map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden aspect-[3/4] shadow-sm border border-bridal-champagne/20">
                <img src={img} alt={`${data.h1} preview look`} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-white text-bridal-brown font-sans border-t border-bridal-champagne/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-bridal-rose text-xs font-bold uppercase tracking-widest bg-bridal-blush/40 px-3 py-1 rounded-full">Answers</span>
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-gray-900 mt-2">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, index) => (
              <div key={index} className="border border-bridal-champagne/20 rounded-xl overflow-hidden">
                <button
                  onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                  className="w-full flex justify-between items-center px-5 py-4 bg-bridal-bg text-left text-gray-800 font-semibold text-sm hover:bg-bridal-blush/10 transition"
                >
                  <span className="font-playfair">{faq.question}</span>
                  <span className="text-bridal-rose font-bold text-sm">
                    {activeFAQ === index ? "▴" : "▾"}
                  </span>
                </button>
                {activeFAQ === index && (
                  <div className="px-5 pb-4 pt-2 text-gray-600 text-xs sm:text-sm bg-bridal-bg leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Internal Links for SEO juice */}
          <div className="mt-16 pt-8 border-t border-bridal-champagne/20 text-center">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Other Bridal Styling Services</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.keys(servicesContent)
                .filter((key) => key !== slug)
                .map((key) => (
                  <Link
                    key={key}
                    to={`/${key}`}
                    className="text-xs bg-bridal-bg hover:bg-bridal-rose hover:text-white px-4 py-2 rounded-full border border-bridal-champagne/10 text-gray-600 transition"
                  >
                    {servicesContent[key].h1}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Guarantees section */}
      <section className="py-12 bg-bridal-brown text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <ShieldCheck className="text-bridal-champagne mb-2" size={32} />
              <h4 className="font-playfair font-bold text-sm">Hygiene & Safety</h4>
              <p className="text-[10px] text-bridal-blush/80 mt-1">Deep cleaned brushes, disposable applicators, and sanitized setup.</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="text-bridal-champagne mb-2" size={32} />
              <h4 className="font-playfair font-bold text-sm">Elite Artistry</h4>
              <p className="text-[10px] text-bridal-blush/80 mt-1">Certified by leading beauty academies with 10+ years wedding industry experience.</p>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles className="text-bridal-champagne mb-2 animate-pulse" size={32} />
              <h4 className="font-playfair font-bold text-sm">Tailored Aesthetics</h4>
              <p className="text-[10px] text-bridal-blush/80 mt-1">We listen to your skin type, outfit preferences, and makeup style.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
