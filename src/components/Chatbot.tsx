import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

type Message = {
  sender: "user" | "bot";
  text: string;
  options?: string[];
  contactService?: string;
};

type Service = {
  id: string;
  title: string;
  price: string;
  description: string;
  category: string;
  rating: string;
  reviews: string;
};

const services: Service[] = [
  {
    id: "1",
    title: "Air Brush Makeup",
    price: "₹35,000 – ₹45,000",
    description:
      "Flawless, long-lasting makeup application using airbrush technology for a natural finish",
    category: "Bridal Makeup",
    rating: "5.0",
    reviews: "12 Reviews",
  },
  {
    id: "2",
    title: "Mugurtham Makeup",
    price: "₹9,000 – ₹12,000",
    description:
      "Traditional South Indian bridal makeup for the wedding ceremony",
    category: "Mehndi Artist",
    rating: "4.9",
    reviews: "28 Reviews",
  },
  {
    id: "3",
    title: "Engagement Basic Makeup",
    price: "₹7,000 – ₹9,000",
    description:
      "Elegant yet simple makeup look perfect for engagement ceremonies",
    category: "Saree Styling",
    rating: "4.7",
    reviews: "35 Reviews",
  },
  {
    id: "4",
    title: "Engagement Look",
    price: "₹7,500 – ₹10,000",
    description:
      "Complete bridal hair styling for engagement ceremonies with accessories",
    category: "Hair Services",
    rating: "4.8",
    reviews: "8 Reviews",
  },
  {
    id: "5",
    title: "Saree Draping",
    price: "₹499 – ₹1,000",
    description:
      "Professional saree draping in various traditional and contemporary styles",
    category: "Hair Services",
    rating: "4.8",
    reviews: "8 Reviews",
  },
  {
    id: "6",
    title: "Mugurtham Hairstyle",
    price: "₹2,000 – ₹3,000",
    description:
      "Traditional South Indian bridal hairstyle with jewelry and accessories",
    category: "Hair Services",
    rating: "4.8",
    reviews: "8 Reviews",
  },
  {
    id: "7",
    title: "Pre-Wedding Shoot",
    price: "₹5,000 – ₹7,000",
    description:
      "Complete hair and makeup services for pre-wedding photo shoots",
    category: "Hair Services",
    rating: "4.8",
    reviews: "8 Reviews",
  },
  {
    id: "8",
    title: "Pre-Wedding Shoot",
    price: "₹6,000 – ₹8,000",
    description:
      "Professional makeup and styling for pre-wedding photography sessions",
    category: "Hair Services",
    rating: "4.8",
    reviews: "8 Reviews",
  },
  {
    id: "9",
    title: "HD Makeup",
    price: "₹12,000 – ₹16,000",
    description:
      "High-definition makeup perfect for photography and special occasions",
    category: "Hair Services",
    rating: "4.8",
    reviews: "8 Reviews",
  },
  {
    id: "10",
    title: "Puberty Makeup",
    price: "₹5,000 – ₹7,000",
    description:
      "Special makeup services for puberty ceremonies and coming-of-age events",
    category: "Hair Services",
    rating: "4.8",
    reviews: "8 Reviews",
  },
  {
    id: "11",
    title: "Maternity",
    price: "₹5,000 – ₹7,000",
    description:
      "Makeup and styling services tailored for maternity photo shoots",
    category: "Hair Services",
    rating: "4.8",
    reviews: "8 Reviews",
  },
  {
    id: "12",
    title: "Meganthi",
    price: "₹5,000 – ₹7,000",
    description:
      "Traditional makeup and hairstyling for South Indian meganthi ceremonies",
    category: "Hair Services",
    rating: "4.8",
    reviews: "8 Reviews",
  },
];

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hi! I'm Suji’s assistant. Please select a service to view details:",
      options: services.map((s) => s.title),
    },
  ]);

  const handleOptionClick = (option: string) => {
    const selectedService = services.find((s) => s.title === option);

    const userMessage: Message = { sender: "user", text: option };

    const botReply: Message = {
      sender: "bot",
      text: selectedService
        ? `${selectedService.title}\n\n ${selectedService.price}\n ${selectedService.category}\n ${selectedService.rating} (${selectedService.reviews})\n\n${selectedService.description}`
        : "Sorry, I couldn't find details for that service.",
      contactService: selectedService?.title,
    };

    setMessages((prev) => [...prev, userMessage, botReply]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 h-96 bg-white border border-gray-300 shadow-lg rounded-xl flex flex-col">
          {/* Header */}
          <div className="bg-pink-500 text-white px-4 py-2 rounded-t-xl flex justify-between items-center">
            <span className="font-semibold text-sm">Chat with Suji's Assistant</span>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 text-sm text-gray-800">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${msg.sender === "user" ? "text-right" : "text-left"}`}
              >
                <div
                  className={`inline-block whitespace-pre-wrap px-3 py-2 rounded-lg ${msg.sender === "user"
                    ? "bg-gray-100 text-black"
                    : "bg-gray-200 text-black"
                    }`}
                >
                  {msg.text}
                </div>

                {/* Options */}
                {msg.options && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {msg.options.map((option, i) => (
                      <button
                        key={i}
                        onClick={() => handleOptionClick(option)}
                        className="border border-black text-black text-xs px-3 py-1 rounded hover:bg-black hover:text-white transition"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}

                {/* Contact CTA */}
                {msg.contactService && (
                  <div className="mt-2">
                    <a
                      href={`/contact?service=${encodeURIComponent(msg.contactService)}`}
                      className="inline-block text-xs bg-black text-white px-3 py-1 rounded hover:bg-gray-900 transition"
                    >
                      Contact Us to Book
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="p-2 text-center text-xs text-gray-500 border-t">
            Tap a service to learn more
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-pink-500 text-white text-2xl p-5 rounded-full shadow-lg hover:bg-gray-900 transition"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
