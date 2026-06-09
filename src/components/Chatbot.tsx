import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { formatPrice } from "../utils/pricing";

type Message = {
  sender: "user" | "bot";
  text: string;
  options?: string[];
  contactService?: string;
};

type Service = {
  id: string;
  title: string;
  minPrice: number;
  maxPrice: number;
  description: string;
  category: string;
  rating: string;
  reviews: string;
};

const services: Service[] = [
  {
    id: "1",
    title: "Air Brush Makeup",
    minPrice: 35000,
    maxPrice: 45000,
    description: "Flawless, long-lasting makeup application using airbrush technology for a natural finish",
    category: "Bridal Makeup",
    rating: "5.0",
    reviews: "12 Reviews",
  },
  {
    id: "2",
    title: "Mugurtham Makeup",
    minPrice: 9000,
    maxPrice: 12000,
    description: "Traditional South Indian bridal makeup for the wedding ceremony",
    category: "Mehndi Artist",
    rating: "4.9",
    reviews: "28 Reviews",
  },
  {
    id: "3",
    title: "Engagement Basic Makeup",
    minPrice: 7000,
    maxPrice: 9000,
    description: "Elegant yet simple makeup look perfect for engagement ceremonies",
    category: "Saree Styling",
    rating: "4.7",
    reviews: "35 Reviews",
  },
  {
    id: "4",
    title: "Engagement Look",
    minPrice: 7500,
    maxPrice: 10000,
    description: "Complete bridal hair styling for engagement ceremonies with accessories",
    category: "Hair Services",
    rating: "4.8",
    reviews: "8 Reviews",
  },
  {
    id: "5",
    title: "Saree Draping",
    minPrice: 499,
    maxPrice: 1000,
    description: "Professional saree draping in various traditional and contemporary styles",
    category: "Hair Services",
    rating: "4.8",
    reviews: "8 Reviews",
  },
  {
    id: "6",
    title: "Mugurtham Hairstyle",
    minPrice: 2000,
    maxPrice: 3000,
    description: "Traditional South Indian bridal hairstyle with jewelry and accessories",
    category: "Hair Services",
    rating: "4.8",
    reviews: "8 Reviews",
  },
  {
    id: "7",
    title: "Pre-Wedding Shoot",
    minPrice: 5000,
    maxPrice: 8000,
    description: "Complete hair, makeup, and styling services for pre-wedding photography sessions",
    category: "Hair Services",
    rating: "4.8",
    reviews: "8 Reviews",
  },
  {
    id: "9",
    title: "HD Makeup",
    minPrice: 12000,
    maxPrice: 16000,
    description: "High-definition makeup perfect for photography and special occasions",
    category: "Hair Services",
    rating: "4.8",
    reviews: "8 Reviews",
  },
  {
    id: "10",
    title: "Puberty Makeup",
    minPrice: 5000,
    maxPrice: 7000,
    description: "Special makeup services for puberty ceremonies and coming-of-age events",
    category: "Hair Services",
    rating: "4.8",
    reviews: "8 Reviews",
  },
  {
    id: "11",
    title: "Maternity",
    minPrice: 5000,
    maxPrice: 7000,
    description: "Makeup and styling services tailored for maternity photo shoots",
    category: "Hair Services",
    rating: "4.8",
    reviews: "8 Reviews",
  },
  {
    id: "12",
    title: "Meganthi",
    minPrice: 5000,
    maxPrice: 7000,
    description: "Traditional makeup and hairstyling for South Indian meganthi ceremonies",
    category: "Hair Services",
    rating: "4.8",
    reviews: "8 Reviews",
  },
];

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hi! I'm Suji’s assistant. Please select a service to view details:",
      options: services.map((s) => s.title),
    },
  ]);

  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleOptionClick = (option: string) => {
    const selectedService = services.find((s) => s.title === option);

    const userMessage: Message = { sender: "user", text: option };

    const botReply: Message = {
      sender: "bot",
      text: selectedService
        ? `${selectedService.title}\n\nPrice: ${formatPrice(selectedService.minPrice)} – ${formatPrice(selectedService.maxPrice)}\nCategory: ${selectedService.category}\nRating: ${selectedService.rating} (${selectedService.reviews})\n\nDescription: ${selectedService.description}`
        : "Sorry, I couldn't find details for that service.",
      contactService: selectedService?.title,
    };

    setMessages((prev) => [...prev, userMessage, botReply]);
  };

  const handleInputSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input.trim() };

    const botReply: Message = {
      sender: "bot",
      text: "Sorry, I can only assist with listed services. Please select a service option to view more details.",
    };

    setMessages((prev) => [...prev, userMessage, botReply]);
    setInput("");
  };

  return (
    <div className="fixed bottom-24 right-6 z-40">
      {isOpen ? (
        <div className="w-80 h-[450px] bg-white border border-bridal-champagne/20 shadow-xl rounded-2xl flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-bridal-rose text-white px-4 py-3 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="font-playfair font-bold text-sm">Suji's Assistant</span>
              <span className="text-[10px] text-bridal-blush font-light">Online • Instant Help</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-bridal-blush transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={chatRef} className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs text-gray-800 bg-bridal-bg/30">
            {messages.map((msg, index) => (
              <div key={index} className={msg.sender === "user" ? "text-right" : "text-left"}>
                <div className={`inline-block whitespace-pre-wrap px-3.5 py-2.5 rounded-2xl max-w-[85%] leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-bridal-rose text-white rounded-tr-none shadow-sm"
                    : "bg-white text-gray-800 border border-gray-100 rounded-tl-none shadow-xs"
                }`}>
                  {msg.text}
                </div>

                {/* Options */}
                {msg.options && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {msg.options.map((option, i) => (
                      <button
                        key={i}
                        onClick={() => handleOptionClick(option)}
                        className="border border-bridal-rose/50 text-bridal-rose text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white hover:bg-bridal-rose hover:text-white transition shadow-xs"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}

                {/* Contact CTA */}
                {msg.contactService && (
                  <div className="mt-3">
                    <a
                      href={`/contact?service=${encodeURIComponent(msg.contactService)}`}
                      className="inline-block text-[10px] font-bold uppercase tracking-wider bg-bridal-brown hover:bg-bridal-rose text-white px-4 py-2 rounded-full transition shadow-xs"
                    >
                      Book this Look
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 border-t border-gray-100 flex items-center gap-2 bg-white">
            <input
              type="text"
              className="flex-1 px-3.5 py-2 text-xs border border-gray-200 rounded-full focus:outline-none focus:border-bridal-rose"
              placeholder="Ask a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleInputSend()}
            />
            <button
              onClick={handleInputSend}
              className="bg-bridal-rose hover:bg-bridal-brown text-white font-bold text-[10px] uppercase tracking-wider px-4 py-2 rounded-full transition"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-bridal-rose text-white p-3.5 rounded-full shadow-lg hover:bg-bridal-brown transition duration-300 hover:scale-105"
          aria-label="Chat with assistant"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default ChatBot;