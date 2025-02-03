import {
  Palette,
  Flower2,
  Shirt,
  Baby,
  PartyPopper,
  Camera,
  Brush,
} from "lucide-react";
import { useEffect } from "react";
import AOS from 'aos';

const services = [
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Professional Makeup",
    description:
      "Bridal, party, or everyday makeup looks tailored to enhance your natural beauty.",
  },
  {
    icon: <Flower2 className="h-8 w-8" />,
    title: "Mehandi Design",
    description:
      "Traditional and modern mehandi patterns for weddings and special occasions.",
  },
  {
    icon: <Shirt className="h-8 w-8" />,
    title: "Saree Draping",
    description:
      "Expert saree draping services in various regional and contemporary styles.",
  },
  {
    icon: <Baby className="h-8 w-8" />,
    title: "Baby Shower ",
    description:
      "Expert saree draping services in various regional and contemporary styles.",
  },
  {
    icon: <PartyPopper className="h-8 w-8" />,
    title: "Party Makeup ",
    description:
      "Expert saree draping services in various regional and contemporary styles.",
  },
  {
    icon: <Camera className="h-8 w-8" />,
    title: "Pre-Wedding Photoshoot Makeup ",
    description:
      "Expert saree draping services in various regional and contemporary styles.",
  },
  {
    icon: <Brush className="h-8 w-8" />,
    title: "Air Brush Makeup   ",
    description:
      "Expert saree draping services in various regional and contemporary styles.",
  },
];

export default function Services() {
   useEffect(() => {
            AOS.init({ duration: 2000 });
          }, []);
  return (
    <div   data-aos="zoom-in-up" id="services" className=" py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a range of professional beauty services to make you look
            and feel your best on your special day.
          </p>
        </div>

        <a href="#contact"><div data-aos=" ease-in" className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="text-pink-600 mb-4">{service.icon}</div>
              <h1 className="text-xl font-semibold mb-2">{service.title}</h1>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          ))}
        </div>
        </a>
      </div>
    </div>
  );
}
