
import React, { useState } from 'react';
import { Send, Bot, ChevronDown, User, Mic } from 'lucide-react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Hello! How can I assist with your vehicle today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isExpanded, setIsExpanded] = useState(true);
  
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    const newMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);
    setInputValue('');
    
    // Mock AI response
    setTimeout(() => {
      let response = "I'm analyzing your vehicle data now...";
      
      if (inputValue.toLowerCase().includes("engine") && inputValue.toLowerCase().includes("hot")) {
        response = "Your engine temperature is currently at 92°F, which is within the normal operating range. There's no need to worry!";
      } else if (inputValue.toLowerCase().includes("oil change")) {
        response = "Based on your vehicle's data, I recommend scheduling an oil change in the next 8 days. Your next service is due on April 15th.";
      } else if (inputValue.toLowerCase().includes("tire pressure")) {
        response = "Your tire pressure readings are: Front Left: 32 PSI, Front Right: 33 PSI, Rear Left: 31 PSI, Rear Right: 32 PSI. All tires are properly inflated.";
      }
      
      const aiResponse = {
        id: messages.length + 2,
        sender: 'ai',
        text: response,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prevMessages => [...prevMessages, aiResponse]);
    }, 1000);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  return (
    <div className={`volt-panel fixed bottom-4 right-4 w-full max-w-md overflow-hidden transition-all duration-300 ${isExpanded ? 'h-96' : 'h-14'}`}>
      {/* Header */}
      <div 
        className="bg-gradient-volt text-white p-3 flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          <Bot size={18} />
          <h3 className="font-medium">VoltAI Assistant</h3>
        </div>
        <ChevronDown size={18} className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </div>
      
      {/* Chat Messages */}
      <div className={`p-3 overflow-y-auto ${isExpanded ? 'h-[calc(100%-7rem)]' : 'hidden'}`}>
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`mb-3 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] rounded-2xl p-3 ${
                message.sender === 'user' 
                  ? 'bg-volt-blue text-white rounded-tr-none' 
                  : 'bg-gray-100 text-gray-800 rounded-tl-none'
              }`}
            >
              <div className="flex items-center gap-2 mb-1 text-xs opacity-80">
                {message.sender === 'user' ? (
                  <>
                    <span>You</span>
                    <User size={12} />
                  </>
                ) : (
                  <>
                    <Bot size={12} />
                    <span>VoltAI</span>
                  </>
                )}
                <span className="ml-auto">{message.timestamp}</span>
              </div>
              <p>{message.text}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Input Area */}
      <div className={`p-3 border-t border-gray-200 flex items-center gap-2 ${isExpanded ? '' : 'hidden'}`}>
        <button className="p-2 rounded-full text-gray-500 hover:text-volt-blue hover:bg-gray-100">
          <Mic size={20} />
        </button>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask about your vehicle..."
          className="flex-1 volt-input text-sm"
        />
        <button 
          onClick={handleSendMessage}
          disabled={!inputValue.trim()} 
          className={`p-2 rounded-full ${inputValue.trim() ? 'text-volt-blue bg-blue-50 hover:bg-blue-100' : 'text-gray-300 bg-gray-50'}`}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
