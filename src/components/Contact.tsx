import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div id="contact" className=" py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for bookings and inquiries. We're here to make
            your special day perfect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 p-1 block w-full rounded-md border-gray-900 shadow-md focus:border-pink-500 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 p-1 block w-full rounded-md border-gray-900 shadow-md focus:border-pink-500 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Phone
                </label>
                <input
                  type="number"
                  maxLength={10}
                  className="mt-1 p-1 block w-full rounded-md border-gray-900 shadow-md focus:border-pink-500 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Date
                </label>
                <input
                  type="date"
                  className="mt-1 p-1 block w-full rounded-md border-gray-900 shadow-md focus:border-pink-500 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Event
                </label>
                <input
                  type="text"
                  className="mt-1 p-1 block w-full rounded-md border-gray-900 shadow-md focus:border-pink-500 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="mt-1 p-1 block w-full rounded-md border-gray-900 shadow-md focus:border-pink-500 focus:ring-pink-500"
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
                    href="https://maps.app.goo.gl/FXni1koye5jsVT499"
                    className="text-gray-600"
                  >
                    Chennai
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
