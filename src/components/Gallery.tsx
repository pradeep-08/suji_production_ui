import { useEffect } from "react";
import AOS from "aos";
import { Helmet } from "react-helmet-async";
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

const curvedImages = [newImg1, newImg2, newImg3, newImg4, newImg5];

const allImages = [
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

export default function Gallery() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <>
      <Helmet>
        <title>Bridal Makeup Gallery | Suji Hair & Makeup Tambaram Chennai</title>
        <meta
          name="description"
          content="Explore the best bridal makeup transformations in Tambaram, Chennai. View HD makeup, airbrush bridal looks, saree draping styles, mehandi art, and pre-wedding shoot highlights by Suji Hair & Makeup."
        />
        <meta
          name="keywords"
          content="Bridal Makeup Chennai, HD Makeup Tambaram, Airbrush Makeup Artist, Saree Draping Chennai, Pre-wedding Makeup Chennai, Mehandi Tambaram, Bridal Hair Styling, Reception Makeup Chennai, Best Bridal Artist Chennai"
        />
        <link rel="canonical" href="https://sujihairandmakeup.com/gallery" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Gallery",
              "url": "https://sujihairandmakeup.com/gallery",
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
                    "name": "Gallery",
                    "item": "https://sujihairandmakeup.com/gallery"
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section with Curved Floating Gallery */}
      <section className="bg-white font-poppins py-20 px-4 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Gallery
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-10">
          We offer a range of professional bridal beauty services — from HD makeup and airbrush styling to saree draping and mehandi — to make you look and feel your best on your special day.
        </p>

        {/* Curved Floating Image Strip */}
        <div className="flex flex-wrap justify-center items-end gap-4 transform scale-[1.05] skew-y-[-1.5deg] px-4 md:px-0">
          {curvedImages.map((img, index) => (
            <a
              key={index}
              href="/contact"
              className="relative overflow-hidden transform skew-y-[1.5deg] rounded-2xl transition-all hover:scale-105 hover:shadow-2xl group w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-[280px] sm:h-[300px] md:h-[320px]"
              style={{
                zIndex: 10 - index,
              }}
            >
              {/* Image */}
              <img
                src={img}
                alt={`Gallery showcase ${index}`}
                className="w-full h-full object-cover"
              />

              {/* Top-right Arrow */}
              <div className="absolute top-2 right-2 z-10 bg-white/80 backdrop-blur-md rounded-full p-2 group-hover:scale-110 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 7l-10 10m0-10h10v10"
                  />
                </svg>
              </div>

              {/* Footer CTA */}
              <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white px-4 py-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">Book Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white opacity-70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 7l-10 10m0-10h10v10"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>



      </section>

      {/* SEO Section */}
      <section className="bg-gray-50 py-12 px-6 font-poppins text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-4">
          Why Brides Choose Suji Hair & Makeup
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
          Based in Tambaram, Chennai, we specialize in creating stunning bridal looks for all occasions — Mugurtham, Reception, Engagement, and Baby Shower. With years of experience, our team offers airbrush makeup, HD coverage, pre-wedding shoot looks, traditional mehandi, and saree draping. Every bride’s style is unique — and so is our approach.
        </p>
      </section>

      {/* Grid Gallery */}
      <section id="gallery" className="py-20 bg-white font-poppins">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {allImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-md"
                data-aos="zoom-in"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="text-white p-4">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
