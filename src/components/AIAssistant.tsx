import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";

interface Message {
  role: string;
  text: string;
  timestamp?: Date;
}

const AIAssistant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sample initial messages for a better UX
  const initialMessages: Message[] = [
    {
      role: "bot",
      text: "Hello! I'm your AI assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ];

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages(initialMessages);
    }
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: "user", text: input, timestamp: new Date() };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://gihozo780.pythonanywhere.com/api/chat/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMessage: Message = { role: "bot", text: data.reply, timestamp: new Date() };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Sorry, I'm having trouble connecting. Please try again.", timestamp: new Date() },
      ]);
    }

    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl animate-bounce"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div className="w-80 md:w-96 bg-white rounded-xl shadow-2xl flex flex-col border border-gray-200 overflow-hidden transform transition-all duration-300 scale-100 opacity-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 p-1 rounded-full">
                <Bot size={16} />
              </div>
              <span className="font-semibold">AI Assistant</span>
            </div>
            <button 
              onClick={() => setOpen(false)} 
              className="hover:bg-white/20 rounded-full p-1 transition-colors"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-96 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`flex max-w-xs ${msg.role === "user" ? "flex-row-reverse" : "flex-row"} items-end space-x-2`}>
                  <div className={`flex-shrink-0 rounded-full p-1 ${msg.role === "user" ? "bg-blue-100 ml-2" : "bg-indigo-100 mr-2"}`}>
                    {msg.role === "user" ? (
                      <User size={12} className="text-blue-600" />
                    ) : (
                      <Bot size={12} className="text-indigo-600" />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span
                      className={`inline-block px-4 py-2 rounded-2xl break-words ${
                        msg.role === "user"
                          ? "bg-blue-500 text-white rounded-br-none"
                          : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                    </span>
                    {msg.timestamp && (
                      <span className={`text-xs text-gray-500 mt-1 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                        {formatTime(msg.timestamp)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {loading && (
              <div className="flex justify-start">
                <div className="flex flex-row items-end space-x-2">
                  <div className="flex-shrink-0 rounded-full p-1 bg-indigo-100 mr-2">
                    <Bot size={12} className="text-indigo-600" />
                  </div>
                  <div className="bg-white text-gray-800 border border-gray-200 px-4 py-2 rounded-2xl rounded-bl-none">
                    <div className="flex items-center space-x-2">
                      <Loader2 size={14} className="animate-spin" />
                      <span>Thinking...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="flex border-t border-gray-200 bg-white p-3">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 text-gray-800 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-r-lg hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 transition-colors flex items-center justify-center"
              aria-label="Send message"
            >
              {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;