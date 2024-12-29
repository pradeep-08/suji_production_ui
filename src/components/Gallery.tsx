import babyshower from "../img/Babyshower/babyshower1.jpeg";
import floringmaking from "../img/Floringmaking/floring making.jpeg";
import HD from "../img/HD/HD1.jpg";
import Hairstyle from "../img/Hairstyle/Hairstyle1.jpg";
import Meganthi from "../img/Meganthi/meganthi1.jpeg";
import Messybun from "../img/Messybun/messy bun.jpeg";
import HD4 from "../img/HD/HD4.jpeg";
import HD7 from "../img/HD/HD7.jpeg";
import HD8 from "../img/HD/HD8.jpeg";``
import sarreDraping from "../img/Sareedraping/Sareedraping3.jpeg";
import HD12 from "../img/HD/HD12.jpeg";
import Puberty from "../img/puberty/puberty1.jpeg";
const images = [
  {
    url: [HD8],
    title: "Basic Makeup",
  },
  {
    url: [HD7],
    title: "HD Makeup",
  },
  {
    url: [HD4],
    title: "Bridel Makeup",
  },
  {
    url: [Puberty],
    title: "Puberty Makeup",
  },
  {
    url: [HD12],
    title: "Pre Wedding Shoot Makeup",
  },
  {
    url: [sarreDraping],
    title: "SareeDraping",
  },
  {
    url: [Messybun],
    title: "Messybun",
  },
  {
    url: [Meganthi],
    title: "Meganthi",
  },
  {
    url: [Hairstyle],
    title: "Hairstyle",
  },
  {
    url: [HD],
    title: "Air Brush Makeup",
  },
  {
    url: [babyshower],
    title: "babyshower",
  },
  {
    url: [floringmaking],
    title: "Floring making",
  },
];

export default function Gallery() {
  return (
    <div id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our portfolio of makeup transformations, mehandi
            designs, and saree draping styles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-medium">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
