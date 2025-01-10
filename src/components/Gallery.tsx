import babyshower from "../img/Babyshower/babyshower1.jpeg";
import newImg11 from "../img/new/11.jpeg";
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

const images = [
  {
    url: [newImg10],
    title: "Air Brush Makeup",
  },
  {
    url: [newImg2],
    title: "Mugurtham Makeup",
  },
  {
    url: [newImg3],
    title: "Engagement Basic Makeup",
  },
  {
    url: [newImg4],
    title: "Reception Hairstyle",
  },
  {
    url: [newImg5],
    title: "Saree Draping",
  },
  {
    url: [newImg6],
    title: "Mugurtham Hairstyle",
  },
  {
    url: [newImg7],
    title: "Engagement Look",
  },
  {
    url: [newImg8],
    title: "Pre-Wedding Shoot",
  },
  {
    url: [newImg9],
    title: "HD Makeup",
  },
  {
    url: [newImg1],
    title: "Puberty Makeup",
  },
  {
    url: [babyshower],
    title: "Maternity",
  },
  {
    url: [newImg11],
    title: "Meganthi",
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
