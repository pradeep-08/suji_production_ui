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
import { Helmet } from "react-helmet";


const services = [
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Professional Makeup",
    description:
      "Expert professional makeup artist for bridal, party, and everyday makeup looks. Enhance your natural beauty with long-lasting results for flawless skin and radiant makeup that suits every occasion.",
  },
  {
    icon: <Flower2 className="h-8 w-8" />,
    title: "Mehandi Design",
    description:
      "Custom Mehandi design for weddings, festivals, and special occasions. Offering intricate traditional and modern henna patterns that add charm and elegance to your special event.",
  },
  {
    icon: <Shirt className="h-8 w-8" />,
    title: "Saree Draping",
    description:
      "Professional saree draping services in classic and contemporary styles, perfect for weddings, events, and cultural celebrations. Get a flawless saree look with expert draping for an unforgettable appearance.",
  },
  {
    icon: <Baby className="h-8 w-8" />,
    title: "Baby Shower",
    description:
      "Creative baby shower styling and decorations to make your celebration memorable. Offering unique baby shower themes and custom setups for a personalized and joyful experience.",
  },
  {
    icon: <PartyPopper className="h-8 w-8" />,
    title: "Party Makeup",
    description:
      "Vibrant party makeup services for all events. Stand out with personalized looks that match your style for a special occasion, ensuring you look stunning at every party or celebration.",
  },
  {
    icon: <Camera className="h-8 w-8" />,
    title: "Pre-Wedding Photoshoot Makeup",
    description:
      "Flawless pre-wedding makeup for photoshoots, designed to enhance your natural features. Get stunning bridal portraits with professional makeup that lasts through your special day.",
  },
  {
    icon: <Brush className="h-8 w-8" />,
    title: "Air Brush Makeup",
    description:
      "Airbrush makeup for a smooth, flawless finish that lasts all day. Ideal for weddings, parties, and special events, providing you with a long-lasting, natural-looking makeup look.",
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
    
      <div data-aos="zoom-in-up" id="services" className=" py-24">
      <Helmet>
        <title>Our Services - Suji Hair & Makeup</title>
        <meta
          name="description"
          content="Explore our range of services including bridal makeup, hair styling, and saree draping. Book your appointment today!"
        />
        <meta property="og:title" content="Our Services - Suji Hair & Makeup" />
        <meta
          property="og:description"
          content="Professional bridal and event makeup, hair styling, and saree draping services tailored for your special occasions."
        />
        <meta
          property="og:image"
          content="https://www.sujihairandmakeup.com/assets/services.png"
        />
        <meta
          property="og:url"
          content="https://sujihairandmakeup.com/services"
        />
        <link rel="canonical" href="https://sujihairandmakeup.com/services" />
      </Helmet>
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

          <a href="#contact">
            <div data-aos=" ease-in" className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <div className="text-pink-600 mb-4">{service.icon}</div>
                  <h2 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
              ))}
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
