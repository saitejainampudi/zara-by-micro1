
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Send, MessageCircle } from "lucide-react";

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "system", content: "Hi there! 👋 I'm Exterview, your AI recruiting assistant. How can I help you today?" }
  ]);
  const [userInput, setUserInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    // Add user message
    const newMessages = [
      ...messages,
      { role: "user", content: userInput }
    ];
    
    setMessages(newMessages);
    setUserInput("");
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const assistantResponses = [
        "I'd be happy to help you find qualified candidates. What role are you hiring for?",
        "You can view our pricing plans on the pricing page. We have options for companies of all sizes.",
        "Exterview conducts AI-powered interviews in over 15 languages, evaluating technical skills, problem-solving abilities, and soft skills.",
        "Yes, you can customize the interview questions to match your specific requirements."
      ];
      
      const randomResponse = assistantResponses[Math.floor(Math.random() * assistantResponses.length)];
      
      setMessages([
        ...newMessages,
        { role: "system", content: randomResponse }
      ]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg flex items-center justify-center p-0 z-50"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <MessageCircle size={24} />
        )}
      </Button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-xl shadow-xl z-50 overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-purple-600 p-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-purple-600 font-bold mr-3">
                E
              </div>
              <div>
                <h3 className="font-semibold text-white">Exterview Assistant</h3>
                <p className="text-white text-xs opacity-80">Online | Typically responds in seconds</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-96 overflow-y-auto p-4 flex flex-col space-y-4" style={{ scrollBehavior: 'smooth' }}>
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.role === "user" 
                      ? "bg-purple-600 text-white rounded-br-none" 
                      : "bg-gray-100 text-gray-800 rounded-bl-none"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <Input 
                placeholder="Type a message..." 
                value={userInput} 
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-grow"
              />
              <Button 
                size="icon" 
                className="bg-purple-600 hover:bg-purple-700" 
                onClick={handleSendMessage}
                disabled={!userInput.trim()}
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatAssistant;
