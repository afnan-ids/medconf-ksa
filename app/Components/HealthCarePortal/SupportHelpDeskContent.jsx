"use client";
import { useState } from "react";
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  HelpCircle, 
  Search,
  ChevronDown,
  ChevronUp,
  Send,
  Headphones,
  Clock,
  CheckCircle,
  ArrowRight,
  ThumbsUp,
  ThumbsDown,
  ExternalLink,
  MessageCircle,
  FileText,
  Video,
  BookOpen,
  AlertCircle
} from "lucide-react";

const SupportHelpDeskContent = ({ getColorClasses }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [feedbackGiven, setFeedbackGiven] = useState({});
  const [chatMessage, setChatMessage] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello! How can I help you today?", time: "Just now" }
  ]);

  const faqs = [
    { 
      question: "How do I upload documents?",
      answer: "Navigate to the Document Management section. Click on 'Upload New' and select your document. Supported formats: PDF, DOC, JPG, PNG. Max size: 10MB.",
      category: "Documents",
      helpful: 128
    },
    { 
      question: "How to earn CPD points?",
      answer: "Earn points by attending workshops, conferences, and completing certified courses. Track progress in the CPD Points Tracker section.",
      category: "CPD",
      helpful: 245
    },
    { 
      question: "Event registration process",
      answer: "Go to Event Schedule, browse events, and click 'Register'. You'll receive a confirmation email with ticket details.",
      category: "Events",
      helpful: 189
    },
    { 
      question: "Booth booking guidelines",
      answer: "Select an available booth from the Exhibition Floor Plan, review pricing, and complete the booking process.",
      category: "Exhibition",
      helpful: 156
    },
    { 
      question: "How to reset my password?",
      answer: "Click 'Forgot Password' on login page. Follow instructions sent to your email. Link expires in 24 hours.",
      category: "Account",
      helpful: 167
    },
  ];

  const contactOptions = [
    { icon: MessageSquare, title: "Live Chat", desc: "Chat with our team", availability: "24/7", action: "Start Chat", color: "blue" },
    { icon: Mail, title: "Email Support", desc: "support@medconf.com", availability: "Response 24h", action: "Send Email", color: "blue" },
    { icon: Phone, title: "Phone Support", desc: "+966 800 123 4567", availability: "9 AM - 6 PM", action: "Call Now", color: "blue" },
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(faqs.map(f => f.category))];

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      setMessages([...messages, { type: "user", text: chatMessage, time: "Just now" }]);
      setChatMessage("");
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          type: "bot", text: "Thanks! Our team will get back to you shortly.", time: "Just now" 
        }]);
      }, 1000);
    }
  };

  return (
    <div className="space-y-4">
      {/* Compact Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg p-5 border border-blue-200 dark:border-blue-800">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-block p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg mb-2">
            <Headphones className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-lg font-bold text-gray-900 dark:text-white mb-1">How can we help?</h1>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">Get instant support or browse FAQs</p>
          
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Compact Contact Support */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
            <div className="p-4 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-sm font-bold text-gray-900 dark:text-white">Contact Support</h2>
              <p className="text-xs text-gray-500 mt-0.5">Choose your way to connect</p>
            </div>
            
            <div className="p-4 space-y-2">
              {contactOptions.map(({ icon: Icon, title, desc, availability, color }) => (
                <button key={title} className="w-full text-left p-2.5 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 rounded-md transition-all">
                  <div className="flex items-start gap-2.5">
                    <div className="p-1.5 bg-blue-100 dark:bg-blue-950 rounded-md">
                      <Icon className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs font-semibold text-gray-900 dark:text-white">{title}</h3>
                        <ArrowRight className="w-3 h-3 text-gray-400" />
                      </div>
                      <p className="text-[10px] text-gray-600 mt-0.5">{desc}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Clock className="w-2.5 h-2.5 text-gray-400" />
                        <p className="text-[10px] text-gray-500">{availability}</p>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
              <div className="flex items-center gap-1.5 mb-2">
                <Headphones className="w-3.5 h-3.5 text-blue-500" />
                <h4 className="text-xs font-semibold text-gray-900 dark:text-white">Hours</h4>
              </div>
              <div className="space-y-0.5 text-[10px] text-gray-600">
                <p>Mon-Fri: 9 AM - 8 PM</p>
                <p>Sat: 10 AM - 4 PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Compact FAQs */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
            <div className="p-4 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <h2 className="text-sm font-bold text-gray-900 dark:text-white">FAQs</h2>
                  <p className="text-xs text-gray-500 mt-0.5">Quick answers to common questions</p>
                </div>
                <div className="flex gap-1.5">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSearchTerm(cat)}
                      className="px-2 py-0.5 text-[10px] font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-all"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4">
              {filteredFaqs.length === 0 ? (
                <div className="text-center py-8">
                  <HelpCircle className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                  <p className="text-xs text-gray-500">No results found</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {filteredFaqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                      >
                        <div className="flex items-start gap-2 flex-1">
                          <HelpCircle className="w-3.5 h-3.5 text-gray-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <p className="text-xs font-medium text-gray-900 dark:text-white">{faq.question}</p>
                              <span className="px-1.5 py-0.5 text-[9px] bg-gray-100 rounded-full">{faq.category}</span>
                            </div>
                          </div>
                        </div>
                        {expandedFaq === index ? (
                          <ChevronUp className="w-3.5 h-3.5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                        )}
                      </button>
                      
                      {expandedFaq === index && (
                        <div className="px-4 pb-3 pt-0">
                          <div className="pl-6">
                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{faq.answer}</p>
                            <div className="flex items-center gap-3 pt-2 border-t border-gray-100 dark:border-gray-800">
                              <span className="text-[10px] text-gray-500">Helpful?</span>
                              <div className="flex gap-1.5">
                                <button className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-md text-[10px] hover:bg-gray-100 transition-all">
                                  <ThumbsUp className="w-2.5 h-2.5" />
                                  Yes ({faq.helpful})
                                </button>
                                <button className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-md text-[10px] hover:bg-gray-100 transition-all">
                                  <ThumbsDown className="w-2.5 h-2.5" />
                                  No
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Compact Still Need Help */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 bg-white dark:bg-gray-900 rounded-md shadow-sm">
                  <MessageCircle className="w-3.5 h-3.5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-0.5">Still need help?</h4>
                  <p className="text-[10px] text-gray-600 mb-2">Our team is ready to assist you.</p>
                  <button
                    onClick={() => setShowChat(true)}
                    className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md text-[10px] font-medium hover:shadow-md transition-all flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3 h-3" />
                    Live Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Quick Resources */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
        {[
          { icon: FileText, title: "User Guide", desc: "Complete documentation" },
          { icon: Video, title: "Video Tutorials", desc: "Step-by-step guides" },
          { icon: BookOpen, title: "Knowledge Base", desc: "Articles & best practices" },
        ].map((resource, idx) => {
          const Icon = resource.icon;
          return (
            <a key={idx} href="#" className="group p-3 bg-white dark:bg-gray-950 rounded-md border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all hover:-translate-y-0.5">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-gray-100 dark:bg-gray-800 rounded-md group-hover:bg-blue-100 transition-colors">
                  <Icon className="w-3.5 h-3.5 text-gray-600 group-hover:text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-gray-900 dark:text-white">{resource.title}</h3>
                  <p className="text-[10px] text-gray-500">{resource.desc}</p>
                </div>
                <ExternalLink className="w-3 h-3 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          );
        })}
      </div>

      {/* Compact Live Chat Modal */}
      {showChat && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white dark:bg-gray-950 rounded-lg w-full max-w-md shadow-2xl border border-gray-200 dark:border-gray-800">
            <div className="p-3 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-white" />
                  <h3 className="text-sm font-semibold text-white">Live Support</h3>
                </div>
                <button onClick={() => setShowChat(false)} className="text-white hover:bg-white/10 rounded-md p-0.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="h-80 overflow-y-auto p-3 space-y-3">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-md p-2 ${
                    msg.type === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700'
                  }`}>
                    <p className="text-xs">{msg.text}</p>
                    <p className="text-[10px] mt-0.5 opacity-70">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-3 border-t border-gray-200 dark:border-gray-800">
              <div className="flex gap-1.5">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-2 py-1.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 rounded-md text-xs focus:outline-none focus:border-blue-500"
                />
                <button onClick={handleSendMessage} className="px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportHelpDeskContent;