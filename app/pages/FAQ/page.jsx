"use client";

import { useState } from "react";
import {
  Search,
  Sparkles,
  Headphones,
  Clock,
  Users,
  Award,
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  ThumbsUp,
  ThumbsDown,
  HelpCircle,
  Ticket,
  Building2,
  Calendar,
  UserCheck,
  CreditCard,
  Globe,
  Shield,
  Zap,
  Star,
  MessageSquare,
  FileText,
  Video,
  Download,
  ExternalLink,
  CheckCircle,
  XCircle,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import BreadCrumb from "../../Components/BreadCrum";

import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../il18/FAQ";

export default function FAQPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [feedbackGiven, setFeedbackGiven] = useState({});
  // FAQ Categories with icons and colors
  const categories = [
    {
      id: "all",
      name: t.allTopics,
      icon: Sparkles,
      color: "from-blue-500 to-purple-500",
      count: 24,
    },
    {
      id: "registration",
      name: t.registration,
      icon: Ticket,
      color: "from-green-500 to-emerald-500",
      count: 8,
    },
    {
      id: "booth",
      name: t.boothBooking,
      icon: Building2,
      color: "from-orange-500 to-amber-500",
      count: 6,
    },
    {
      id: "event",
      name: t.event,
      icon: Calendar,
      color: "from-purple-500 to-pink-500",
      count: 10,
    },
    {
      id: "portal",
      name: t.portal,
      icon: UserCheck,
      color: "from-cyan-500 to-blue-500",
      count: 12,
    },
    {
      id: "payment",
      name: t.payment,
      icon: CreditCard,
      color: "from-indigo-500 to-purple-500",
      count: 5,
    },
  ];

  // FAQ Data - Organized by category
  const faqData = {
    registration: [
      {
        question: t.faqRegisterQuestion,
        answer: t.faqRegisterAnswer,
        helpful: 245,
      },
      {
        question: t.faqEarlyBirdQuestion,
        answer: t.faqEarlyBirdAnswer,
        helpful: 189,
      },
      {
        question: t.faqTransferQuestion,
        answer: t.faqTransferAnswer,
        helpful: 67,
      },
      {
        question: t.faqCancellationQuestion,
        answer: t.faqCancellationAnswer,
        helpful: 123,
      },
    ],
    booth: [
      {
        question: t.faqBoothQuestion,
        answer: t.faqBoothAnswer,
        helpful: 156,
      },
      {
        question: t.faqBoothPackageQuestion,
        answer: t.faqBoothPackageAnswer,
        helpful: 134,
      },
    ],
    event: [
      {
        question: t.faqCMEQuestion,
        answer: t.faqCMEAnswer,
      },
      {
        question: t.faqDressCodeQuestion,
        answer: t.faqDressCodeAnswer,
        helpful: 45,
      },
      {
        question: t.faqNetworkingQuestion,
        answer: t.faqNetworkingAnswer,
        helpful: 178,
      },
      {
        question: t.faqVirtualQuestion,
        answer: t.faqVirtualAnswer,
        helpful: 234,
      },
    ],
    portal: [
      {
        question: t.faqDashboardQuestion,
        answer: t.faqDashboardAnswer,
        helpful: 167,
      },
      {
        question: t.faqResetPasswordQuestion,
        answer: t.faqResetPasswordAnswer,
        helpful: 98,
      },
      {
        question: t.faqCertificatesQuestion,
        answer: t.faqCertificatesAnswer,
        helpful: 203,
      },
      {
        question: t.faqUpdateProfileQuestion,
        answer: t.faqUpdateProfileAnswer,
        helpful: 76,
      },
    ],
    payment: [
      {
        question: t.faqPaymentQuestion,
        answer: t.faqPaymentAnswer,
        helpful: 145,
      },
      {
        question: t.faqInvoiceQuestion,
        answer: t.faqInvoiceAnswer,
        helpful: 112,
      },
    ],
  };

  // Quick Stats
  const stats = [
    {
      icon: Headphones,
      value: "24/7",
      label: "Support",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Clock,
      value: "< 24h",
      label: "Response Time",
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: Users,
      value: "98%",
      label: "Satisfaction",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: Award,
      value: "5K+",
      label: "Questions Answered",
      color: "from-orange-500 to-amber-400",
    },
  ];

  // Contact Cards
  const contactCards = [
    {
      icon: Mail,
      value: "support@Hpql.com",
      title: t.emailSupport,
      action: t.sendEmail,
      link: "mailto:support@Hpql.com",
      gradient: "from-blue-500 to-cyan-400",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: Phone,
      value: "+966 800 123 4567",
      title: t.phoneSupport,
      action: t.callNow,
      link: "tel:+9668001234567",
      gradient: "from-purple-500 to-pink-400",
      bgGradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      icon: MessageSquare,
      title: t.submitTicket,
      value: t.ticketDescription,
      action: t.createTicket,
      link: "../SignIn",
      gradient: "from-green-500 to-emerald-400",
      bgGradient: "from-green-500/10 to-emerald-500/10",
    },
  ];

  // Get current FAQs based on category
  const getCurrentFaqs = () => {
    if (activeCategory === "all") {
      // Flatten all FAQs from all categories
      return [
        ...faqData.registration,
        ...faqData.booth,
        ...faqData.event,
        ...faqData.portal,
        ...faqData.payment,
      ];
    }
    return faqData[activeCategory] || [];
  };

  // Filter FAQs based on search
  const allFaqs = getCurrentFaqs();
  const filteredFaqs = allFaqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Get current category color
  const currentCategory = categories.find((c) => c.id === activeCategory);
  const currentColor = currentCategory?.color || "from-blue-500 to-purple-500";

  const handleFeedback = (faqIndex, type) => {
    setFeedbackGiven((prev) => ({ ...prev, [faqIndex]: type }));
  };

  return (
    <>
      <BreadCrumb
        title={t.helpCenter}
        backgroundImage="/Images/Home/Bread-crum-1.avif"
        path={[{ label: t.helpSupport }]}
      />

      <section className="relative min-h-screen py-10 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section - Modern */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 mb-4">
              <Star className="w-3 h-3 text-blue-400" />
              <span className="text-xs font-medium text-gray-300">
                {t.howCanWeHelpShort}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              {t.helloHelpTitle}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                {t.howCanWeHelpTitle}
              </span>
            </h1>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              {t.helpDescription}
            </p>
          </div>

          {/* Search Bar - Hero Style */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative group">
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${currentColor} rounded-xl blur opacity-0 group-focus-within:opacity-30 transition duration-500`}
              ></div>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
                <input
                  type="text"
                  placeholder={t.searchAnswers}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-transparent transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <XCircle className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Category Tabs - Modern Pill Design */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative group px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-r ${cat.color} text-white shadow-lg scale-105`
                      : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-3.5 h-3.5" />
                    <span className="text-xs font-medium">{cat.name}</span>
                    <span
                      className={`text-[10px] ${isActive ? "text-white/80" : "text-gray-500"}`}
                    >
                      {cat.count}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* FAQ Grid - Card Based Layout */}
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 bg-white/5 rounded-2xl border border-white/10">
              <HelpCircle className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400">
                {t.noResultsFound} "{searchQuery}"
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 text-sm text-blue-400 hover:text-blue-300"
              >
                {t.clearSearch}
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {filteredFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`group relative bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 cursor-pointer ${
                    selectedFaq === idx ? "ring-2 ring-blue-500/50" : ""
                  }`}
                  onClick={() =>
                    setSelectedFaq(selectedFaq === idx ? null : idx)
                  }
                >
                  {/* Gradient hover effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${currentColor} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-500`}
                  ></div>

                  <div className="relative">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-white mb-2 pr-6">
                          {faq.question}
                        </h3>
                        {selectedFaq === idx && (
                          <p className="text-xs text-gray-400 leading-relaxed mt-3 pt-3 border-t border-white/10">
                            {faq.answer}
                          </p>
                        )}
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-300 ${selectedFaq === idx ? "rotate-90" : ""}`}
                      />
                    </div>

                    {/* Helpful buttons - only show when expanded */}
                    {selectedFaq === idx && (
                      <div className="flex items-center gap-4 mt-4 pt-3 border-t border-white/10">
                        <span className="text-[10px] text-gray-500">
                          {t.wasThisHelpful}
                        </span>
                        <div className="flex gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleFeedback(idx, "yes");
                            }}
                            className={`flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] transition-all ${
                              feedbackGiven[idx] === "yes"
                                ? "bg-green-500/20 text-green-400"
                                : "text-gray-400 hover:text-green-400 hover:bg-green-500/10"
                            }`}
                          >
                            <ThumbsUp className="w-3 h-3" />
                            {t.yes} ({faq.helpful})
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleFeedback(idx, "no");
                            }}
                            className={`flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] transition-all ${
                              feedbackGiven[idx] === "no"
                                ? "bg-red-500/20 text-red-400"
                                : "text-gray-400 hover:text-red-400 hover:bg-red-500/10"
                            }`}
                          >
                            <ThumbsDown className="w-3 h-3" />
                            {t.no}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Contact Section - Modern 3 Column Cards */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold text-white mb-2">
                {t.stillHaveQuestions}
              </h2>
              <p className="text-sm text-gray-400">{t.supportReady}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {contactCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <Link key={idx} href={card.link} className="group relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    ></div>
                    <div
                      className={`relative bg-gradient-to-r ${card.bgGradient} border border-white/20 rounded-2xl p-5 text-center hover:bg-white/10 transition-all duration-300`}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${card.gradient} flex items-center justify-center mx-auto mb-3 shadow-lg`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-sm font-semibold text-white mb-1">
                        {card.title}
                      </h3>
                      <p className="text-xs text-gray-400 mb-3">{card.value}</p>
                      <span className="inline-flex items-center gap-1 text-xs text-blue-400 group-hover:gap-2 transition-all">
                        {card.action} <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
