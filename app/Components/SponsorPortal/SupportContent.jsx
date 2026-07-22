"use client";

import { useState } from "react";
import {
  Headphones,
  Mail,
  Phone,
  MessageCircle,
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  Send,
  Clock,
  CheckCircle,
  ChevronRight,
  ThumbsUp,
  ThumbsDown,
  FileText,
  Video,
  BookOpen,
  AlertCircle,
  Star,
  Users,
  Calendar,
  Download,
  ExternalLink,
  MessageSquare,
  Award,
  Shield,
  Sparkles,
} from "lucide-react";
import { faqs, supportContacts, supportTickets } from "../../Data/sponsor-data";

const SupportContent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [...new Set(faqs.map((f) => f.category))];

  const filteredFaqs = faqs.filter(
    (faq) =>
      (activeCategory === "all" || faq.category === activeCategory) &&
      (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())),
  );
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-cyan-500/10 to-gray-500/10 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-cyan-500/30 shadow-2xl overflow-hidden">
        <div className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-48 sm:w-64 h-48 sm:h-64 bg-gray-500/20 rounded-full blur-3xl"></div>

        <div className="relative p-6 sm:p-8 text-center">
          <div className="inline-block p-2 sm:p-3 bg-gradient-to-r from-gray-600 to-cyan-700 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 shadow-lg shadow-cyan-500/30">
            <Headphones className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2">
            Sponsor Support Desk
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
            Dedicated support for our platinum sponsors - We're here to help
            24/7
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto px-3 sm:px-0">
            <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for answers, guides, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:border-cyan-500/50 text-white placeholder:text-gray-400 text-xs sm:text-sm transition-all"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Contact Support Section */}
        <div className="lg:col-span-1">
          <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="absolute -top-20 -right-20 w-36 sm:w-48 h-36 sm:h-48 bg-gray-500/10 rounded-full blur-3xl"></div>

            <div className="relative p-4 sm:p-6 border-b border-white/10">
              <h2 className="text-base sm:text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Contact Support
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Priority support for sponsors
              </p>
            </div>

            <div className="relative p-4 sm:p-6 space-y-3 sm:space-y-4">
              {/* Priority Support Card */}
              <div className="bg-gradient-to-r from-cyan-500/20 to-gray-500/20 rounded-xl p-3 sm:p-4 border border-cyan-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                  <span className="text-[10px] sm:text-xs font-semibold text-cyan-400 uppercase">
                    Platinum Priority
                  </span>
                </div>
                <p className="text-lg sm:text-2xl font-bold text-white mb-1 break-words">
                  +966 00 000 0000
                </p>
                <p className="text-[10px] sm:text-xs text-gray-300">
                  24/7 Dedicated Sponsor Hotline
                </p>
              </div>

              {/* Contact Options */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-3 p-2.5 sm:p-3 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-500/30 transition-all">
                  <div className="p-1.5 sm:p-2 bg-cyan-500/20 rounded-lg">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-white">
                      Email Support
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-400 truncate">
                      sponsors@event.com
                    </p>
                  </div>
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                </div>

                <div className="flex items-center gap-3 p-2.5 sm:p-3 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-500/30 transition-all">
                  <div className="p-1.5 sm:p-2 bg-emerald-500/20 rounded-lg">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm font-medium text-white">
                      Schedule a Call
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-400">
                      Book a meeting
                    </p>
                  </div>
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                </div>
              </div>
            </div>

            <div className="relative p-4 sm:p-6 border-t border-white/10 bg-white/5">
              <div className="flex items-center gap-2 mb-3">
                <Headphones className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                <h4 className="text-xs sm:text-sm font-semibold text-white">
                  Support Hours
                </h4>
              </div>
              <div className="space-y-1 text-[10px] sm:text-xs text-gray-300">
                <div className="flex justify-between">
                  <span>Saturday - Thursday</span>
                  <span>9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span>Closed</span>
                </div>
                <div className="flex justify-between">
                  <span>Event Days</span>
                  <span className="text-cyan-400">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="lg:col-span-2">
          <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="relative p-4 sm:p-6 border-b border-white/10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-base sm:text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1">
                    Quick answers to common sponsor questions
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveCategory("all")}
                    className={`px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full transition-all ${
                      activeCategory === "all"
                        ? "bg-gradient-to-r from-gray-600 to-cyan-700 text-white"
                        : "bg-white/10 text-gray-300 hover:bg-white/20"
                    }`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full transition-all ${
                        activeCategory === cat
                          ? "bg-gradient-to-r from-gray-600 to-cyan-700 text-white"
                          : "bg-white/10 text-gray-300 hover:bg-white/20"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative p-4 sm:p-6">
              {filteredFaqs.length === 0 ? (
                <div className="text-center py-8 sm:py-12">
                  <HelpCircle className="w-10 h-10 sm:w-12 sm:h-12 text-gray-500 mx-auto mb-3" />
                  <p className="text-xs sm:text-sm text-gray-400">
                    No results found
                  </p>
                </div>
              ) : (
                <div className="space-y-2 sm:space-y-3">
                  {filteredFaqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border border-white/10 rounded-xl overflow-hidden bg-white/5"
                    >
                      <button
                        onClick={() =>
                          setExpandedFaq(expandedFaq === index ? null : index)
                        }
                        className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="flex items-start gap-2 sm:gap-3 flex-1">
                          <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="text-xs sm:text-sm font-medium text-white">
                                {faq.question}
                              </p>
                              <span className="px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-xs bg-white/10 rounded-full text-gray-300 border border-white/10">
                                {faq.category}
                              </span>
                            </div>
                          </div>
                        </div>
                        {expandedFaq === index ? (
                          <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                        )}
                      </button>

                      {expandedFaq === index && (
                        <div className="px-3 sm:px-4 pb-3 sm:pb-4 pt-0">
                          <div className="pl-5 sm:pl-7">
                            <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4">
                              {faq.answer}
                            </p>
                            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3 border-t border-white/10">
                              <span className="text-[10px] sm:text-xs text-gray-400">
                                Was this helpful?
                              </span>
                              <div className="flex gap-2">
                                <button className="flex items-center gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg text-[10px] sm:text-xs hover:bg-white/10 transition-all text-gray-300">
                                  <ThumbsUp className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                  Yes ({faq.helpful})
                                </button>
                                <button className="flex items-center gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg text-[10px] sm:text-xs hover:bg-white/10 transition-all text-gray-300">
                                  <ThumbsDown className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
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
            <div className="relative p-4 sm:p-6 border-t border-white/10 bg-gradient-to-r from-cyan-500/10 to-gray-500/10">
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <div className="p-1.5 sm:p-2 bg-white/10 rounded-lg border border-white/20">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm sm:text-base font-semibold text-white mb-1">
                    Still need help?
                  </h4>
                  <p className="text-[10px] sm:text-xs text-gray-300 mb-3">
                    Can't find what you're looking for? Submit a ticket and our
                    priority support team will get back to you within 2 hours.
                  </p>
                  <button
                    onClick={() => setShowTicketModal(true)}
                    className="relative px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-gray-600 to-cyan-700 text-white rounded-lg text-xs sm:text-sm font-medium overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
                  >
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                    <span className="relative flex items-center justify-center gap-2">
                      <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                      Submit Priority Ticket
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support Team Section */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="relative p-4 sm:p-6 border-b border-white/10">
          <h3 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent flex items-center gap-2">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            Your Dedicated Support Team
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 mt-1">
            Meet your sponsor relations managers - here to assist you
          </p>
        </div>

        <div className="relative p-4 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {supportContacts.map((contact, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-gray-600 to-cyan-700 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-white font-bold text-base sm:text-lg">
                    {contact.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm sm:text-base font-semibold text-white">
                    {contact.name}
                  </p>
                  <p className="text-[10px] sm:text-xs text-cyan-400">
                    {contact.role}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <Mail className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-400" />
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-[10px] sm:text-xs text-gray-300 hover:text-cyan-400 transition-colors truncate"
                    >
                      {contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-400" />
                    <span className="text-[10px] sm:text-xs text-gray-300">
                      {contact.phone}
                    </span>
                  </div>
                </div>
                <button className="p-1.5 sm:p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all self-end sm:self-center">
                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="relative bg-cyan-500/10 backdrop-blur-xl rounded-xl p-4 sm:p-5 border border-cyan-500/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-gray-500/5"></div>
        <div className="relative flex flex-col sm:flex-row items-start gap-3">
          <Award className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-1">
              Sponsor Resource Center
            </h4>
            <p className="text-xs sm:text-sm text-gray-300">
              Access detailed sponsor guides, marketing templates, and event
              toolkits in our resource center.{" "}
              <a
                href="#"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Browse Resources →
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Support Ticket Modal */}
      {showTicketModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="absolute w-56 sm:w-72 h-56 sm:h-72 bg-cyan-500/20 rounded-full blur-3xl top-10 right-10"></div>
          <div className="absolute w-56 sm:w-72 h-56 sm:h-72 bg-gray-500/20 rounded-full blur-3xl bottom-10 left-10"></div>

          <div className="relative w-full max-w-md mx-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Submit Priority Ticket
                </h3>
                <button
                  onClick={() => setShowTicketModal(false)}
                  className="p-1 hover:bg-white/10 rounded-lg transition-all"
                >
                  <span className="text-gray-400 text-xl">&times;</span>
                </button>
              </div>
              <p className="text-[10px] sm:text-xs text-gray-400 mt-1">
                Our team will respond within 2 hours
              </p>
            </div>

            <div className="p-4 sm:p-5 space-y-3 sm:space-y-4">
              <div>
                <label className="block text-[10px] sm:text-xs font-medium text-gray-400 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Brief description of your issue"
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-xs sm:text-sm placeholder:text-gray-400 focus:outline-none focus:border-cyan-500/40 focus:bg-white/10 transition-all"
                />
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs font-medium text-gray-400 mb-1">
                  Category
                </label>
                <select className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500/40 transition-all">
                  <option>Branding & Marketing</option>
                  <option>Payment & Invoices</option>
                  <option>Event Logistics</option>
                  <option>Technical Issue</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs font-medium text-gray-400 mb-1">
                  Priority Level
                </label>
                <div className="flex gap-3">
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="priority"
                      className="text-cyan-600"
                      defaultChecked
                    />
                    <span className="text-[10px] sm:text-xs text-gray-300">
                      Normal
                    </span>
                  </label>
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="priority"
                      className="text-cyan-600"
                    />
                    <span className="text-[10px] sm:text-xs text-gray-300">
                      High
                    </span>
                  </label>
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="priority"
                      className="text-red-600"
                    />
                    <span className="text-[10px] sm:text-xs text-gray-300">
                      Urgent
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs font-medium text-gray-400 mb-1">
                  Description
                </label>
                <textarea
                  placeholder="Please provide detailed information about your request..."
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-xs sm:text-sm placeholder:text-gray-400 focus:outline-none focus:border-cyan-500/40 focus:bg-white/10 transition-all resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 pt-2">
                <button className="w-full sm:flex-1 py-2 sm:py-2.5 bg-gradient-to-r from-gray-600 to-cyan-700 text-white rounded-xl text-sm font-medium relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30">
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                    Submit Ticket
                  </span>
                </button>
                <button
                  onClick={() => setShowTicketModal(false)}
                  className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:bg-red-500/20 transition-all duration-300 text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportContent;
