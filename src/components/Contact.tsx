import { Phone, Mail, MapPin } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Suji Hair & Makeup | Book Your Bridal Makeup in Chennai</title>
        <meta name="description" content="Get in touch with Suji Hair & Makeup for bridal bookings, makeup trials, and consultations in Chennai. Call or WhatsApp now!" />
        <meta name="keywords" content="contact bridal makeup artist, book makeup Chennai, makeup appointment Chennai, Suji Hair and Makeup contact" />
        <link rel="canonical" href="https://sujihairandmakeup.com/contact" />

        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact",
      "url": "https://sujihairandmakeup.com/contact",
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
            "name": "Contact",
            "item": "https://sujihairandmakeup.com/contact"
          }
        ]
      }
    }
    `}
        </script>

      </Helmet>
      <div data-aos="zoom-in-up" id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get in touch with us for bookings and inquiries. We're here to
              make your special day perfect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                id="request"
                className="space-y-6"
              >
                <div>
                  <input
                    type="hidden"
                    name="access_key"
                    value="6a320d9d-1efa-45d9-9307-885f2424b1ba"
                  />
                  <input
                    type="hidden"
                    name="subject"
                    value="New Request from Client ❗⚠️"
                  />
                  <input
                    type="hidden"
                    name="from_name"
                    value="Client Notification ⚠️"
                  />
                  <label className="block text-sm font-medium text-gray-900">
                    Name
                  </label>
                  <input
                    name="Full Name"
                    type="text"
                    className="placeholder-gray-500 mt-1 p-1 block w-full rounded-md border border-[#aaaaaa] focus:border-pink-500 focus:ring-pink-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <input
                    id="to"
                    name="Email"
                    type="email"
                    placeholder="Your Mail"
                    className="mt-1 p-1 block w-full rounded-md  border border-[#aaaaaa] focus:border-pink-500 focus:ring-pink-500"
                    required
                  />
                </div>
                <div>
                  <label className="block colour-black text-sm font-medium text-gray-900">
                    Phone
                  </label>
                  <input
                    type="tel"
                    pattern="[0-9]{10}"
                    className="mt-1 p-1 block w-full rounded-md border border-[#aaaaaa] focus:border-pink-500 focus:ring-pink-500"
                    name="Phone Number"
                    placeholder="+91 9876543210"
                    required
                    max="10"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="mt-1 p-1 block w-full rounded-md border border-[#aaaaaa] focus:border-pink-500 focus:ring-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">
                    Event
                  </label>
                  <input
                    type="text"
                    name="event"
                    placeholder="Event Name"
                    className="mt-1 p-1 block w-full rounded-md border border-[#aaaaaa] focus:border-pink-500 focus:ring-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    aria-label="msg-me"
                    name="message"
                    rows={4}
                    className="mt-1 p-1 block w-full rounded-md   border border-[#aaaaaa] focus:border-pink-500 focus:ring-pink-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition"
                >
                  Book Now
                </button>
              </form>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-pink-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a
                      target="_blank"
                      href="https://wa.me/9941492115"
                      className="text-gray-600"
                    >
                      +91 9941492115
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 text-pink-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      target="_blank"
                      href="mailto:sujihairandmakeup@gmail.com"
                      className="text-gray-600"
                    >
                      sujihairandmakeup@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-pink-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <a
                      target="_blank"
                      href="https://maps.app.goo.gl/xvmJuEWPTRAkjoc97"
                      className="text-gray-600"
                    >
                      Chennai
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <iframe
                  title="location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d280.7992693848448!2d80.13686454845711!3d12.928752116473857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f1b543c2993%3A0x1ffacd20ec75cff2!2s5%2F16%2C%20Ramakrishnapuram%2C%20Kuppusamy%20Nagar%2C%20East%20Tambaram%2C%20Tambaram%2C%20Chennai%2C%20Tamil%20Nadu%20600059!5e0!3m2!1sen!2sin!4v1739266320074!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
