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
import AOS from "aos";

const services = [
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Professional Makeup",
    description:
      "Expert makeup artist for bridal, party, and everyday looks, enhancing your natural beauty with long-lasting results.",
  },
  {
    icon: <Flower2 className="h-8 w-8" />,
    title: "Mehandi Design",
    description:
      "Custom mehandi designs for weddings, festivals, and special occasions, offering intricate traditional and modern henna patterns.",
  },
  {
    icon: <Shirt className="h-8 w-8" />,
    title: "Saree Draping",
    description:
      "Professional saree draping services in classic and contemporary styles, perfect for weddings, events, and cultural celebrations.",
  },
  {
    icon: <Baby className="h-8 w-8" />,
    title: "Baby Shower",
    description:
      "Creative baby shower styling and decorations, making your celebration memorable with unique themes and custom setups.",
  },
  {
    icon: <PartyPopper className="h-8 w-8" />,
    title: "Party Makeup",
    description:
      "Vibrant party makeup services for all events, ensuring you stand out with personalized looks for your special occasion.",
  },
  {
    icon: <Camera className="h-8 w-8" />,
    title: "Pre-Wedding Photoshoot Makeup",
    description:
      "Flawless pre-wedding makeup for photoshoots, designed to enhance your natural features for stunning bridal portraits.",
  },
  {
    icon: <Brush className="h-8 w-8" />,
    title: "Air Brush Makeup",
    description:
      "Airbrush makeup for a smooth, flawless finish that lasts all day, ideal for weddings, parties, and special events.",
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="zoom-in-up" id="services" className=" py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a range of professional beauty services to make you look
            and feel your best on your special day.
          </p>
        </div>

        <a href="#contact">
          <div data-aos=" ease-in" className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="text-pink-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
            ))}
          </div>
        </a>
      </div>
    </div>
  );
}
