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
  ChevronRight,
  ThumbsUp,
  ThumbsDown,
  FileText,
  AlertCircle,
  Sparkles,
  CreditCard,
  Truck,
  Building2,
  User,
  Calendar,
  X,
  Loader2,
} from "lucide-react";
import {
  exhibitorFaqs,
  exhibitorContactOptions,
} from "../../Data/exhibitor-data";

const SupportContent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [ticketSubject, setTicketSubject] = useState("");
  const [ticketCategory, setTicketCategory] = useState("");
  const [ticketMessage, setTicketMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackState, setFeedbackState] = useState({});

  const filteredFaqs = exhibitorFaqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const categories = [...new Set(exhibitorFaqs.map((f) => f.category))];

  const handleFeedback = (faqId, helpful) => {
    setFeedbackState((prev) => ({ ...prev, [faqId]: helpful }));
    // In a real app, you'd send this to an API
  };

  const handleSubmitTicket = () => {
    if (!ticketSubject || !ticketCategory || !ticketMessage) {
      alert("Please fill in all fields");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowTicketModal(false);
      setTicketSubject("");
      setTicketCategory("");
      setTicketMessage("");
      alert(
        "Support ticket submitted successfully! Our team will respond within 24 hours.",
      );
    }, 1500);
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Setup":
        return <Calendar className="w-4 h-4 text-blue-400" />;
      case "Booth":
        return <Building2 className="w-4 h-4 text-purple-400" />;
      case "Registration":
        return <User className="w-4 h-4 text-cyan-400" />;
      case "Payment":
        return <CreditCard className="w-4 h-4 text-emerald-400" />;
      case "Technology":
        return <Sparkles className="w-4 h-4 text-amber-400" />;
      default:
        return <HelpCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getContactIcon = (iconName) => {
    switch (iconName) {
      case "Headphones":
        return <Headphones className="w-5 h-5 text-blue-400" />;
      case "CreditCard":
        return <CreditCard className="w-5 h-5 text-emerald-400" />;
      case "Truck":
        return <Truck className="w-5 h-5 text-amber-400" />;
      default:
        return <MessageSquare className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Hero Section - Glass */}
      <div className="relative bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="relative text-center max-w-2xl mx-auto">
          <div className="inline-block p-3 bg-gradient-to-br from-blue-800 to-cyan-600 rounded-xl mb-4 shadow-lg shadow-blue-500/30">
            <Headphones className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent mb-2">
            Exhibitor Support Center
          </h1>
          <p className="text-gray-300 mb-6">
            Get instant support or browse frequently asked questions for
            exhibitors
          </p>

          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:border-blue-500/50 text-white placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contact Support - Glass */}
        <div className="lg:col-span-1">
          <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>

            <div className="relative p-6 border-b border-white/10">
              <h2 className="text-lg font-bold text-white">Contact Support</h2>
              <p className="text-sm text-gray-300 mt-1">
                Choose your preferred way to connect
              </p>
            </div>

            <div className="relative p-6 space-y-3">
              {exhibitorContactOptions.map((option, idx) => (
                <button
                  key={idx}
                  className="group w-full text-left p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      {getContactIcon(option.icon)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
                          {option.title}
                        </h3>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                      </div>
                      <p className="text-xs text-gray-300 mt-1">
                        {option.desc}
                      </p>
                      <div className="flex items-center gap-1 mt-2">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <p className="text-xs text-gray-400">
                          {option.availability}
                        </p>
                      </div>
                      <p className="text-xs text-blue-400 mt-1 font-mono">
                        {option.contact}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="relative p-6 border-t border-white/10 bg-white/5">
              <div className="flex items-center gap-2 mb-3">
                <Headphones className="w-4 h-4 text-blue-400" />
                <h4 className="text-sm font-semibold text-white">
                  Support Hours
                </h4>
              </div>
              <div className="space-y-1 text-xs text-gray-300">
                <p>Saturday - Thursday: 9:00 AM - 8:00 PM</p>
                <p>Friday: Closed</p>
                <p>Event Days (March 12-14): 24/7 Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs - Glass */}
        <div className="lg:col-span-2">
          <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="relative p-6 border-b border-white/10">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h2 className="text-lg font-bold text-white">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-sm text-gray-300 mt-1">
                    Find quick answers to common exhibitor questions
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSearchTerm(cat)}
                      className="px-3 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-full hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 border border-white/10"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative p-6">
              {filteredFaqs.length === 0 ? (
                <div className="text-center py-12">
                  <HelpCircle className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                  <p className="text-gray-400">No results found</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredFaqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border border-white/10 rounded-xl overflow-hidden bg-white/5"
                    >
                      <button
                        onClick={() =>
                          setExpandedFaq(expandedFaq === index ? null : index)
                        }
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3 flex-1">
                          {getCategoryIcon(faq.category)}
                          <div className="flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <p className="text-sm font-medium text-white">
                                {faq.question}
                              </p>
                              <span className="px-2 py-0.5 text-xs bg-white/10 rounded-full text-gray-300 border border-white/10">
                                {faq.category}
                              </span>
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
                            <p className="text-sm text-gray-300 mb-4">
                              {faq.answer}
                            </p>
                            <div className="flex items-center gap-4 pt-3 border-t border-white/10">
                              <span className="text-xs text-gray-400">
                                Was this helpful?
                              </span>
                              <div className="flex gap-2">
                                <button
                                  onClick={() => handleFeedback(faq.id, true)}
                                  className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs transition-all ${
                                    feedbackState[faq.id] === true
                                      ? "bg-emerald-500/20 text-emerald-400"
                                      : "hover:bg-white/10 text-gray-300"
                                  }`}
                                >
                                  <ThumbsUp className="w-3 h-3" />
                                  Yes ({faq.helpful})
                                </button>
                                <button
                                  onClick={() => handleFeedback(faq.id, false)}
                                  className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs transition-all ${
                                    feedbackState[faq.id] === false
                                      ? "bg-red-500/20 text-red-400"
                                      : "hover:bg-white/10 text-gray-300"
                                  }`}
                                >
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

            {/* Still Need Help - Glass */}
            <div className="relative p-6 border-t border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/10 rounded-lg border border-white/20">
                  <FileText className="w-5 h-5 text-blue-400" />
                </div>

                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-white mb-1">
                    Still need help?
                  </h4>
                  <p className="text-xs text-gray-300 mb-3">
                    Can't find what you're looking for? Submit a request and our
                    support team will get back to you within 24 hours.
                  </p>

                  <button
                    onClick={() => setShowTicketModal(true)}
                    className="relative px-4 py-2 bg-gradient-to-br from-blue-800 to-cyan-600 text-white rounded-lg text-sm font-medium overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
                  >
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                    <span className="relative flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Submit Support Ticket
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Tips Section */}
      <div className="relative bg-blue-500/10 backdrop-blur-xl rounded-xl p-5 border border-blue-500/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        <div className="relative flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-white mb-1">
              Quick Tips for Exhibitors
            </p>
            <p className="text-xs text-gray-300">
              •{" "}
              <span className="font-medium text-blue-400">
                Setup begins March 10
              </span>{" "}
              - Ensure all materials arrive by March 9
              <br />•{" "}
              <span className="font-medium text-blue-400">Staff badges</span> -
              Register your team members by March 5
              <br />•{" "}
              <span className="font-medium text-blue-400">
                Lead scanner app
              </span>{" "}
              - Download and test before the event
              <br />•{" "}
              <span className="font-medium text-blue-400">
                Booth insurance
              </span>{" "}
              - Required documentation must be submitted
            </p>
          </div>
        </div>
      </div>

      {/* Submit Ticket Modal */}
      {showTicketModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">
          <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl top-10 right-10"></div>
          <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-10 left-10"></div>

          <div className="relative w-full max-w-md mx-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Header */}
            <div className="p-5 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
                  Submit Support Ticket
                </h3>
                <button
                  onClick={() => setShowTicketModal(false)}
                  className="p-1 rounded-lg transition-all duration-300 hover:bg-white/10 text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Our team will get back to you within 24 hours
              </p>
            </div>

            {/* Form */}
            <div className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Category <span className="text-red-400">*</span>
                </label>
                <select
                  value={ticketCategory}
                  onChange={(e) => setTicketCategory(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/40 focus:bg-white/10 transition-all"
                >
                  <option value="">Select a category</option>
                  <option value="Booth Setup">Booth Setup</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Payment & Billing">Payment & Billing</option>
                  <option value="Logistics">Logistics</option>
                  <option value="Registration">Staff Registration</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Subject <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={ticketSubject}
                  onChange={(e) => setTicketSubject(e.target.value)}
                  placeholder="Brief description of your issue"
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500/40 focus:bg-white/10 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  value={ticketMessage}
                  onChange={(e) => setTicketMessage(e.target.value)}
                  placeholder="Please provide details about your issue..."
                  rows={4}
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500/40 focus:bg-white/10 transition-all resize-none"
                />
              </div>

              {/* Priority Note */}
              <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/30">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-300">
                    For urgent matters during event days (March 12-14), please
                    call our emergency hotline:
                    <strong className="text-amber-400">
                      {" "}
                      +966 55 123 4567
                    </strong>
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handleSubmitTicket}
                  disabled={isSubmitting}
                  className="flex-1 py-2.5 bg-gradient-to-br from-blue-800 to-cyan-600 text-white rounded-xl font-medium relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Ticket
                    </>
                  )}
                </button>

                <button
                  onClick={() => setShowTicketModal(false)}
                  className="px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:bg-red-500/20 transition-all duration-300"
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
