import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Suji Hair & Makeup Chennai</title>
        <meta name="description" content="Privacy Policy and data protection guidelines for clients booking bridal makeup and consulting with Suji Hair & Makeup." />
      </Helmet>

      <div className="bg-bridal-bg text-bridal-brown pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-bridal-champagne/15 shadow-sm">
          <h1 className="text-3xl font-playfair font-bold text-gray-900 mb-6 border-b border-bridal-champagne/20 pb-4">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-400 mb-6">Last updated: June 2026</p>

          <div className="space-y-6 text-sm text-gray-600 leading-relaxed font-sans">
            <p>
              At <strong>Suji Hair & Makeup</strong>, accessible from sujihairandmakeup.in, one of our main priorities is the privacy of our visitors and clients. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.
            </p>

            <div>
              <h2 className="text-lg font-playfair font-bold text-gray-900 mb-2">1. Information We Collect</h2>
              <p>
                When you submit an availability query or booking request on our website, we collect personal information you provide, including:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Full name and contact phone number.</li>
                <li>Email address.</li>
                <li>Wedding or event date, venue location, and package selections.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-playfair font-bold text-gray-900 mb-2">2. How We Use Your Information</h2>
              <p> We use the collected data to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Check slots availability and communicate booking details.</li>
                <li>Address your questions and provide consultations.</li>
                <li>Deliver our professional bridal services on site.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-playfair font-bold text-gray-900 mb-2">3. Information Protection</h2>
              <p>
                Your personal details are stored securely. We do not sell, trade, or transfer your personally identifiable information to third parties, except as necessary to fulfill your booking or comply with safety laws.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-playfair font-bold text-gray-900 mb-2">4. Contact Us</h2>
              <p>
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <a href="mailto:sujihairandmakeup@gmail.com" className="text-bridal-rose underline">sujihairandmakeup@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
