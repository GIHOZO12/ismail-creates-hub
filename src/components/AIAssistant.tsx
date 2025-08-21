import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hi! I'm Ismail's AI assistant. I can help you learn about his skills, experience, and how he can support your projects. What would you like to know?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    // Skills and Technologies
    if (input.includes("skill") || input.includes("technology") || input.includes("tech stack")) {
      return "Ismail is proficient in:\n• Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Bootstrap, Tailwind CSS\n• Backend: Python, Django, Django REST Framework\n• Databases: PostgreSQL, MySQL, SQLite\n• Other: React Native, AI Integration, Git, Team Collaboration\n\nHe's currently expanding his skills through the Code to Connect fellowship at Solvit Africa.";
    }

    // Projects
    if (input.includes("project") || input.includes("work") || input.includes("portfolio")) {
      return "Ismail has worked on several impactful projects:\n\n1. **Citizen Engagement System** - A platform for reporting public service issues with real-time tracking\n2. **School Management System** - Complete administration system with student management and scheduling\n3. **AI-based e-Clinic App** - Healthcare app with AI symptom checker and multilingual support\n\nEach project demonstrates his full-stack development capabilities and problem-solving skills.";
    }

    // Experience and Background
    if (input.includes("experience") || input.includes("background") || input.includes("education")) {
      return "Ismail is currently:\n• Pursuing a Bachelor of Science in Information Technology at University of Rwanda\n• Participating in Code to Connect fellowship at Solvit Africa (Django internship)\n• Building practical experience in team collaboration and AI integration\n\nHe has certifications from DataCamp (Python API) and freeCodeCamp (Frontend), plus participation in the codeExtrem hackathon.";
    }

    // Services and What he can do
    if (input.includes("service") || input.includes("help") || input.includes("hire") || input.includes("work with")) {
      return "Ismail can help you with:\n• Full-stack web application development (Django + React)\n• RESTful API development and integration\n• Database design and management\n• Frontend UI/UX implementation\n• Mobile app development (React Native)\n• AI integration in web applications\n• Team collaboration and agile development\n\nHe's passionate about solving real-world problems through technology!";
    }

    // Contact and Availability
    if (input.includes("contact") || input.includes("reach") || input.includes("available") || input.includes("hire")) {
      return "You can reach Ismail through:\n📧 Email: gihozoismail@gmail.com\n📞 Phone: +250 783227185\n💼 GitHub: https://github.com/GIHOZO12\n📍 Location: Kigali, Rwanda\n\nHe's open to discussing new opportunities, projects, and collaborations. Feel free to use the contact form on this website or reach out directly!";
    }

    // Pricing and Rates
    if (input.includes("price") || input.includes("rate") || input.includes("cost") || input.includes("budget")) {
      return "Ismail offers competitive rates for his services. Project pricing depends on:\n• Project complexity and scope\n• Timeline requirements\n• Technology stack needed\n• Ongoing support requirements\n\nHe's open to discussing both project-based and hourly arrangements. Contact him directly to discuss your specific needs and get a customized quote.";
    }

    // Languages
    if (input.includes("language") || input.includes("communication")) {
      return "Ismail communicates in:\n• English (Fluent)\n• French (Conversational)\n• Kinyarwanda (Native)\n\nHe has experience building multilingual applications and can work effectively with international teams.";
    }

    // Location and Remote Work
    if (input.includes("location") || input.includes("remote") || input.includes("timezone") || input.includes("where")) {
      return "Ismail is based in Kigali, Rwanda (Central Africa Time - CAT, UTC+2). He's experienced with:\n• Remote collaboration and communication\n• Working across different timezones\n• Using modern collaboration tools\n• Agile development methodologies\n\nHe's open to both local and remote opportunities worldwide.";
    }

    // Default response
    return "I can help you learn more about Ismail's:\n• Technical skills and expertise\n• Project portfolio and experience\n• Available services and collaboration\n• Contact information and availability\n\nWhat specific aspect would you like to know more about?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      content: getAIResponse(inputValue),
      sender: "bot",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botResponse]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-accent-gradient hover:shadow-glow transition-all duration-300 hover:scale-110"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Interface */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-card-gradient border-border/50 shadow-elegant">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src="/lovable-uploads/e23002d5-603d-43d1-b490-64132b7d955e.png"
                    alt="Ismail GIHOZO"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse" />
                </div>
                <div>
                  <CardTitle className="text-lg">AI Assistant</CardTitle>
                  <p className="text-sm text-muted-foreground">Ask me about Ismail</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex flex-col h-[calc(100%-80px)] p-3">
            <ScrollArea className="flex-1 pr-3">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start gap-2 ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {message.sender === "bot" && (
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground ml-2"
                          : "bg-muted text-foreground mr-2"
                      }`}
                    >
                      <div className="whitespace-pre-line">{message.content}</div>
                      <div
                        className={`text-xs mt-1 opacity-70 ${
                          message.sender === "user" ? "text-primary-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                    {message.sender === "user" && (
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <User className="h-4 w-4 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-muted text-foreground p-3 rounded-lg mr-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div ref={messagesEndRef} />
            </ScrollArea>

            <div className="flex gap-2 mt-3">
              <Input
                placeholder="Ask me about Ismail's skills, projects, or services..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isTyping}
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                size="icon"
                className="bg-accent-gradient hover:shadow-glow"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default AIAssistant;