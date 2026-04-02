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
    { icon: MessageSquare, title: "Live Chat", desc: "Chat with our support team", availability: "24/7", action: "Start Chat", color: "blue" },
    { icon: Mail, title: "Email Support", desc: "support@medconf.com", availability: "Response within 24h", action: "Send Email", color: "blue" },
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
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-block p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl mb-4">
            <Headphones className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">How can we help you?</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Get instant support or browse frequently asked questions</p>
          
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contact Support */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Contact Support</h2>
              <p className="text-sm text-gray-500 mt-1">Choose your preferred way to connect</p>
            </div>
            
            <div className="p-6 space-y-3">
              {contactOptions.map(({ icon: Icon, title, desc, availability, color }) => (
                <button key={title} className="w-full text-left p-4 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 rounded-lg transition-all">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-950 rounded-lg">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{title}</h3>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                      <p className="text-xs text-gray-600 mt-1">{desc}</p>
                      <div className="flex items-center gap-1 mt-2">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <p className="text-xs text-gray-500">{availability}</p>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="p-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
              <div className="flex items-center gap-2 mb-3">
                <Headphones className="w-4 h-4 text-blue-500" />
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Support Hours</h4>
              </div>
              <div className="space-y-1 text-xs text-gray-600">
                <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
                  <p className="text-sm text-gray-500 mt-1">Find quick answers to common questions</p>
                </div>
                <div className="flex gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSearchTerm(cat)}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-all"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6">
              {filteredFaqs.length === 0 ? (
                <div className="text-center py-12">
                  <HelpCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">No results found</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredFaqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                      >
                        <div className="flex items-start gap-3 flex-1">
                          <HelpCircle className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <p className="text-sm font-medium text-gray-900 dark:text-white">{faq.question}</p>
                              <span className="px-2 py-0.5 text-xs bg-gray-100 rounded-full">{faq.category}</span>
                            </div>
                          </div>
                        </div>
                        {expandedFaq === index ? (
                          <ChevronUp className="w-4 h-4 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                      
                      {expandedFaq === index && (
                        <div className="px-4 pb-4 pt-0">
                          <div className="pl-7">
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{faq.answer}</p>
                            <div className="flex items-center gap-4 pt-3 border-t border-gray-100 dark:border-gray-800">
                              <span className="text-xs text-gray-500">Was this helpful?</span>
                              <div className="flex gap-2">
                                <button className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs hover:bg-gray-100 transition-all">
                                  <ThumbsUp className="w-3 h-3" />
                                  Yes ({faq.helpful})
                                </button>
                                <button className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs hover:bg-gray-100 transition-all">
                                  <ThumbsDown className="w-3 h-3" />
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

            {/* Still Need Help */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Still need help?</h4>
                  <p className="text-xs text-gray-600 mb-3">Can't find what you're looking for? Our support team is ready to assist you.</p>
                  <button
                    onClick={() => setShowChat(true)}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Start Live Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Resources */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { icon: FileText, title: "User Guide", desc: "Complete platform documentation" },
          { icon: Video, title: "Video Tutorials", desc: "Step-by-step video guides" },
          { icon: BookOpen, title: "Knowledge Base", desc: "Articles and best practices" },
        ].map((resource, idx) => {
          const Icon = resource.icon;
          return (
            <a key={idx} href="#" className="group p-4 bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all hover:-translate-y-0.5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <Icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{resource.title}</h3>
                  <p className="text-xs text-gray-500">{resource.desc}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          );
        })}
      </div>

      {/* Live Chat Modal */}
      {showChat && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white dark:bg-gray-950 rounded-xl w-full max-w-md shadow-2xl border border-gray-200 dark:border-gray-800">
            <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-white" />
                  <h3 className="font-semibold text-white">Live Support</h3>
                </div>
                <button onClick={() => setShowChat(false)} className="text-white hover:bg-white/10 rounded-lg p-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-lg p-3 ${
                    msg.type === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700'
                  }`}>
                    <p className="text-sm">{msg.text}</p>
                    <p className="text-xs mt-1 opacity-70">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                />
                <button onClick={handleSendMessage} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                  <Send className="w-4 h-4" />
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