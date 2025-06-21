import { Helmet } from "react-helmet-async";
import { useEffect, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Image imports
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
import newImg11 from "../img/new/11.jpeg";
import newImg12 from "../img/new/12.jpeg";

const originalBlocks = [
  { type: "full", image: newImg10, title: "Air Brush Makeup", description: "Airbrush makeup for a smooth, flawless finish that lasts all day. Ideal for weddings, parties, and special events. Long-lasting, natural-looking and HD-ready." },
  {
    type: "half",
    images: [
      { url: newImg2, title: "Mugurtham Makeup", description: "Traditional South Indian bridal look customized for auspicious ceremonies with a spiritual touch and cultural essence." },
      { url: newImg3, title: "Engagement Basic Makeup", description: "Soft and glowing makeup that enhances your engagement day charm while ensuring photo-ready beauty." },
    ],
  },
  { type: "full", image: newImg4, title: "Reception Hairstyle", description: "Timeless hairstyles from elegant buns to modern waves that complete your bridal appearance with grace." },
  {
    type: "half",
    images: [
      { url: newImg12, title: "Saree Draping", description: "Classic to trendy draping styles for all occasions. Draped with precision for comfort and elegance throughout your day." },
      { url: newImg6, title: "Professional Makeup", description: "Expert makeup services using premium products to create radiant, flawless finishes that suit your skin tone and outfit." },
    ],
  },
  { type: "full", image: newImg1, title: "Puberty Makeup", description: "Simple, fresh looks for puberty ceremonies that enhance natural features while respecting tradition." },
  {
    type: "half",
    images: [
      { url: newImg5, title: "Maternity", description: "Capture your glow with maternity-friendly makeup that keeps comfort and beauty in perfect harmony." },
      { url: newImg7, title: "Pre-Wedding Photoshoot Makeup", description: "Long-lasting, camera-friendly makeup designed to highlight your features in pre-wedding shoots." },
    ],
  },
  { type: "full", image: newImg8, title: "Party Makeup", description: "From cocktail nights to birthday bashes, we craft glamorous looks to match your vibe and dress." },
  {
    type: "half",
    images: [
      { url: newImg9, title: "Baby Shower", description: "Delicate and radiant makeup for expecting moms. We ensure comfort and beauty go hand in hand." },
      { url: newImg11, title: "Mehandi Design", description: "Bridal and festive henna art with intricate patterns and deep color that last and impress." },
    ],
  },
];

export default function GalleryShowcase() {
  useEffect(() => {
     window.scrollTo(0, 0);
    AOS.init({ duration: 1200 });
  }, []);

  const layoutBlocks = useMemo(() => {
    const shuffled = [...originalBlocks];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  return (
    <>
      <Helmet>
        <title>Bridal Makeup, Mehandi & Saree Draping Services in Chennai</title>
        <meta name="description" content="Explore our bridal services including HD makeup, waterproof makeup, traditional mehandi, and expert saree draping for weddings and events." />
        <meta name="keywords" content="bridal makeup services Chennai, waterproof bridal makeup, traditional mehandi Chennai, saree draping Chennai, party makeup" />
        <link rel="canonical" href="https://sujihairandmakeup.com/services" />
        <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Services",
      "url": "https://sujihairandmakeup.com/services",
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
            "name": "Services",
            "item": "https://sujihairandmakeup.com/services"
          }
        ]
      }
    }
  `}</script>
      </Helmet>

      <div className="text-center pt-[100px] px-4 mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Our Services
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
          We offer a range of professional beauty services to make you look and feel your best on your special day.
        </p>
      </div>

      <div className="w-full">
        {layoutBlocks.map((block, idx) =>
          block.type === "full" ? (
            <a
              href="/contact"
              key={idx}
              className="group relative h-[70vh] block overflow-hidden"
              data-aos="fade-up"
            >
              <img src={block.image} alt={block.title} className="w-full h-full object-cover group-hover:blur-sm transition duration-700" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition" />
              <div className="absolute z-10 inset-y-0 left-6 flex flex-col justify-center text-white">
                <h2 className="text-2xl sm:text-4xl font-bold uppercase">{block.title}</h2>
                <p className="mt-2 max-w-xl text-sm sm:text-base opacity-0 group-hover:opacity-100 transition duration-500">{block.description}</p>
              </div>
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 sm:p-3 rounded-full opacity-0 group-hover:opacity-100 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ) : (
            <div key={idx} className="grid grid-cols-1 sm:grid-cols-2">
              {(block.images || []).map((img, subIdx) => (
                <a href="/contact" key={subIdx} className="group relative h-[60vh] block overflow-hidden" data-aos="fade-up">
                  <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:blur-sm transition duration-700" />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition" />
                  <div className="absolute z-10 inset-y-0 left-6 flex flex-col justify-center text-white">
                    <h2 className="text-xl sm:text-2xl font-bold uppercase">{img.title}</h2>
                    <p className="mt-1 max-w-md text-sm opacity-0 group-hover:opacity-100 transition duration-500">{img.description}</p>
                  </div>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          )
        )}
      </div>
    </>
  );
}
