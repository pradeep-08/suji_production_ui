import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import AOS from "aos";
import { Helmet } from "react-helmet-async";
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
import hero from "../img/hero/hero.jpeg";

const makeupOptions = [
  "Air Brush Makeup",
  "Mugurtham Makeup",
  "Engagement Basic Makeup",
  "Reception Hairstyle",
  "Saree Draping",
  "Mugurtham Hairstyle",
  "Engagement Look",
  "Pre-Wedding Shoot",
  "HD Makeup",
  "Puberty Makeup",
  "Maternity",
  "Meganthi",
  "Others"
];

const imageSlides = [
  { title: "Air Brush Makeup", url: newImg10 },
  { title: "Mugurtham Makeup", url: newImg2 },
  { title: "Engagement Basic Makeup", url: newImg3 },
  { title: "Reception Hairstyle", url: newImg4 },
  { title: "Saree Draping", url: newImg12 },
  { title: "Mugurtham Hairstyle", url: newImg6 },
  { title: "Engagement Look", url: newImg7 },
  { title: "Pre-Wedding Shoot", url: newImg8 },
  { title: "HD Makeup", url: newImg9 },
  { title: "Puberty Makeup", url: newImg1 },
  { title: "Maternity", url: newImg5 },
  { title: "Meganthi", url: newImg11 },
  { title: "Others", url: hero }
];

export default function Contact() {
  const [selectedMakeup, setSelectedMakeup] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 2000 });

    if (!autoSlide) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imageSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [autoSlide]);

  useEffect(() => {
    if (selectedMakeup) {
      const index = imageSlides.findIndex((img) => img.title === selectedMakeup);
      if (index !== -1) {
        setCurrentSlide(index);
        setAutoSlide(false);
      }
    }
  }, [selectedMakeup]);

  return (
    <>
     <Helmet>
  <title>Contact Suji Hair & Makeup | Book Your Bridal Makeup in Chennai</title>
  <meta name="description" content="Get in touch with Suji Hair & Makeup for bridal bookings, makeup trials, and consultations in Chennai. Call or WhatsApp now!" />
  <meta name="keywords" content="contact bridal makeup artist, book makeup Chennai, makeup appointment Chennai, Suji Hair and Makeup contact" />
  <link rel="canonical" href="https://sujihairandmakeup.com/contact" />
  <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "url": "https://sujihairandmakeup.com/contact",
      "mainEntity": {
        "@type": "Organization",
        "name": "Suji Hair & Makeup",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-XXXXXXXXXX",
          "contactType": "Customer Service"
        }
      }
    }
  `}</script>
</Helmet>

      <div className="py-24 bg-[#f9fafb] px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-stretch">
          <div className="bg-white p-10 shadow-md rounded-xl flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-pink-600 text-sm font-semibold">Get in Touch</h2>
              <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3">Let's Chat, Reach Out to Us</h1>
              <p className="text-gray-600 text-sm mb-6">Have questions or feedback? We're here to help. Send us a message, and we'll respond within 24 hours.</p>
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                <input type="hidden" name="access_key" value="6a320d9d-1efa-45d9-9307-885f2424b1ba" />
                <input type="hidden" name="subject" value="New Request from Client ❗⚠️" />
                <input type="hidden" name="from_name" value="Client Notification ⚠️" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">First Name<span className="text-red-500">*</span></label>
                    <input type="text" name="First Name" placeholder="First name" required className="w-full mt-1 px-3 py-2 border rounded-md focus:border-green-500 focus:ring-green-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input type="text" name="Last Name" placeholder="Last name" className="w-full mt-1 px-3 py-2 border rounded-md focus:border-green-500 focus:ring-green-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email Address<span className="text-red-500">*</span></label>
                  <input type="email" name="Email" placeholder="Email address" required className="w-full mt-1 px-3 py-2 border rounded-md focus:border-green-500 focus:ring-green-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Select Makeup Service</label>
                  <select
                    name="Makeup Type"
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:border-green-500 focus:ring-green-500"
                    value={selectedMakeup}
                    onChange={(e) => setSelectedMakeup(e.target.value)}
                  >
                    <option value="">-- Please select --</option>
                    {makeupOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    name="Message"
                    rows={5}
                    placeholder={`I am looking to book the \"${selectedMakeup || 'a makeup service'}\" package with Suji Hair & Makeup. Kindly share details about pricing and availability.`}
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div className="flex items-start space-x-2 text-sm">
                  <input type="checkbox" required className="mt-1" />
                  <p>I agree to our friendly <a href="/privacy" className="text-pink-600 underline">privacy policy</a></p>
                </div>
                <button type="submit" className="w-full bg-pink-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-pink-700">Send Message</button>
              </form>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div className="relative w-full h-full max-h-[660px] overflow-hidden rounded-xl">
              <img
                key={currentSlide}
                src={imageSlides[currentSlide].url}
                alt={imageSlides[currentSlide].title}
                className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ease-in-out"
              />
              {selectedMakeup && imageSlides[currentSlide].title === selectedMakeup && (
                <div className="absolute top-2 right-2 bg-green-600 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" /> Selected
                </div>
              )}
              <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs md:text-sm px-3 py-1 rounded-md">
                {imageSlides[currentSlide].title}
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md space-y-6 mt-6">
              <div className="flex items-start space-x-3">
                <Mail className="text-pink-600" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:sujihairandmakeup@gmail.com" className="text-sm text-gray-600">sujihairandmakeup@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="text-pink-600" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a href="tel:+919941492115" className="text-sm text-gray-600">+91 9941492115 / 7305931283</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-pink-600" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <a href="https://maps.app.goo.gl/xvmJuEWPTRAkjoc97" target="_blank" className="text-sm text-gray-600">5/16 Ramakrishnapuram, East Tambaram, Chennai - 600059</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
