import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

type Message = {
  sender: "user" | "bot";
  text: string;
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState<string>("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    // Simulated bot response
    setTimeout(() => {
      const botReply: Message = {
        sender: "bot",
        text: "Thank you for your message! We'll get back to you shortly.",
      };
      setMessages((prev) => [...prev, botReply]);
    }, 800);

    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 h-96 bg-white shadow-xl rounded-xl flex flex-col">
          {/* Header */}
          <div className="bg-teal-600 text-white px-4 py-2 rounded-t-xl flex justify-between items-center">
            <span className="font-semibold">Chat with Artist</span>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, index)  => (
              <div
                key={index}
                className={`${
                  msg.sender === "user"
                    ? "text-right text-gray-800"
                    : "text-left text-gray-600"
                }`}
              >
                <div
                  className={`inline-block px-3 py-2 rounded-lg ${
                    msg.sender === "user" ? "bg-teal-100" : "bg-gray-100"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 border-t flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 border border-gray-300 rounded px-3 py-1 text-sm"
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              className="bg-teal-600 text-white text-sm px-3 py-1 rounded"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition"
        >
          <MessageCircle className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
