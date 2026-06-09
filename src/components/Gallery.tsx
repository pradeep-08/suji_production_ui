import { useEffect, useState } from "react";
import AOS from "aos";
import { Helmet } from "react-helmet-async";
import "aos/dist/aos.css";
import { ArrowRight, X, Heart } from "lucide-react";

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

type GalleryItem = {
  url: string;
  title: string;
  category: "Bridal" | "Engagement" | "Hairstyles" | "Saree Draping" | "Others";
};

const allImages: GalleryItem[] = [
  { url: newImg10, title: "Ultra Airbrush Bridal Look", category: "Bridal" },
  { url: newImg2, title: "Traditional Mugurtham Bridal", category: "Bridal" },
  { url: newImg3, title: "Engagement Soft Glam Look", category: "Engagement" },
  { url: newImg4, title: "Reception Waves & Styling", category: "Hairstyles" },
  { url: newImg12, title: "Traditional Kanjeevaram Saree Draping", category: "Saree Draping" },
  { url: newImg6, title: "Muhurtham Flower Braid Hairstyling", category: "Hairstyles" },
  { url: newImg7, title: "Engagement Dewy Pink Glow", category: "Engagement" },
  { url: newImg8, title: "Pre-Wedding Shoot Glow", category: "Others" },
  { url: newImg9, title: "Signature HD Bridal Makeup", category: "Bridal" },
  { url: newImg1, title: "Traditional Ceremony Makeup", category: "Others" },
  { url: newImg5, title: "Elegant Maternity Shoot Style", category: "Others" },
  { url: newImg11, title: "Intricate Bridal Mehandi Design", category: "Others" },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const filteredImages = selectedCategory === "All" 
    ? allImages 
    : allImages.filter(img => img.category === selectedCategory);

  const categories = ["All", "Bridal", "Engagement", "Hairstyles", "Saree Draping", "Others"];

  return (
    <>
      <Helmet>
        <title>Bridal Makeup Gallery | Suji Hair & Makeup Tambaram Chennai</title>
        <meta name="description" content="Explore the best bridal makeup transformations in Tambaram, Chennai. View HD makeup, airbrush bridal looks, saree draping styles, mehandi art, and hairstyles by Suji." />
        <meta name="keywords" content="Bridal Makeup Chennai, HD Makeup Tambaram, Airbrush Makeup Artist, Saree Draping Chennai, Pre-wedding Makeup Chennai, Mehandi Tambaram, Bridal Hair Styling, Reception Makeup Chennai, Best Bridal Artist Chennai" />
        <link rel="canonical" href="https://sujihairandmakeup.in/gallery" />
      </Helmet>

      {/* Header section */}
      <section className="bg-bridal-bg text-bridal-brown pt-32 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <span className="text-bridal-rose text-xs font-bold uppercase tracking-widest bg-bridal-blush/40 px-3.5 py-1 rounded-full">
            Bridal Gallery
          </span>
          <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-gray-900 mt-4 mb-4 font-playfair">
            Real Brides. Real Elegance.
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Browse through our portfolio of wedding-day transformations, engagement glows, and detailed styling work.
          </p>
        </div>
      </section>

      {/* Dynamic Filters */}
      <section className="bg-white py-6 text-bridal-brown border-b border-bridal-blush/20">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-2">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition ${
                selectedCategory === cat
                  ? "bg-bridal-rose text-white shadow-sm"
                  : "bg-bridal-bg text-bridal-brown hover:bg-bridal-blush/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="bg-bridal-bg/40 py-16 px-4 sm:px-6 text-bridal-brown">
        <div className="max-w-6xl mx-auto">
          {filteredImages.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No images available in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-sm border border-bridal-champagne/15 cursor-pointer aspect-[3/4]"
                  data-aos="zoom-in"
                  onClick={() => setLightboxImg(image.url)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5" />
                  
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs text-bridal-rose text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-xs">
                    {image.category}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white z-10 transform translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-300">
                    <span className="text-[10px] text-bridal-champagne uppercase tracking-wider font-semibold">Suji Hair & Makeup</span>
                    <h3 className="text-base font-playfair font-semibold mt-0.5">{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Overlay */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setLightboxImg(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-bridal-champagne text-3xl font-light z-55 bg-black/40 w-12 h-12 rounded-full flex items-center justify-center transition"
            onClick={() => setLightboxImg(null)}
            aria-label="Close image preview"
          >
            &times;
          </button>
          <div className="max-w-3xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl relative">
            <img src={lightboxImg} alt="Close up bridal portfolio" className="max-w-full max-h-[80vh] object-contain rounded-xl" />
          </div>
        </div>
      )}

      {/* Quick Booking Callout */}
      <section className="bg-white py-16 px-4 sm:px-6 text-center text-bridal-brown">
        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-gray-900 mb-3">Loved Our Portfolio Looks?</h3>
          <p className="text-gray-600 text-xs sm:text-sm max-w-md mx-auto mb-6">
            Get in touch to check if Suji is available for your wedding date. Let's design your perfect bridal look.
          </p>
          <a
            href="/contact"
            className="inline-flex bg-bridal-rose hover:bg-bridal-brown text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full shadow-md transition"
          >
            Check My Wedding Date
          </a>
        </div>
      </section>
    </>
  );
}
