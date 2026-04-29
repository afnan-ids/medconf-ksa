"use client";

import { useState } from "react";
import {
  Headphones,
  MessageSquare,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  ChevronDown,
  ChevronRight,
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Trash2,
  Send,
  Paperclip,
  User,
  Calendar,
  Star,
  ThumbsUp,
  ThumbsDown,
  RefreshCw,
  Download,
  X,
  Minus,
  Maximize2,
  Smile,
  MoreVertical,
  Reply,
  Forward,
  Archive,
  Flag,
} from "lucide-react";

export default function SupportHelpDesk() {
  const [activeTab, setActiveTab] = useState("tickets");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Support Tickets
  const [tickets, setTickets] = useState([
    {
      id: "TKT-001",
      subject: "Cannot upload document - file size error",
      description:
        "I'm trying to upload my medical license but getting a file size error even though it's under 10MB.",
      status: "open",
      priority: "high",
      category: "technical",
      createdBy: "Dr. Ahmed Hassan",
      userEmail: "ahmed.hassan@medical.com",
      userType: "practitioner",
      createdAt: "2024-03-15 09:30:00",
      lastUpdated: "2024-03-15 14:20:00",
      assignedTo: "Support Team",
      messages: [
        {
          id: 1,
          sender: "Dr. Ahmed Hassan",
          message: "I've tried multiple times but keep getting the same error.",
          timestamp: "2024-03-15 09:30:00",
          isAdmin: false,
        },
        {
          id: 2,
          sender: "Support Agent",
          message:
            "Could you please share the file size and format you're trying to upload?",
          timestamp: "2024-03-15 10:15:00",
          isAdmin: true,
        },
        {
          id: 3,
          sender: "Dr. Ahmed Hassan",
          message: "It's a PDF, 8.5MB. The error says 'Upload failed'.",
          timestamp: "2024-03-15 11:00:00",
          isAdmin: false,
        },
        {
          id: 4,
          sender: "Support Agent",
          message:
            "We've identified the issue. Please try again now - the limit has been increased to 15MB.",
          timestamp: "2024-03-15 14:20:00",
          isAdmin: true,
        },
      ],
    },
    {
      id: "TKT-002",
      subject: "Booth booking payment issue",
      description:
        "My credit card was charged but booking status still shows pending.",
      status: "in_progress",
      priority: "high",
      category: "payment",
      createdBy: "Sarah Al-Omari",
      userEmail: "sarah@medtech.com",
      userType: "exhibitor",
      createdAt: "2024-03-14 15:45:00",
      lastUpdated: "2024-03-15 09:00:00",
      assignedTo: "Billing Team",
      messages: [
        {
          id: 1,
          sender: "Sarah Al-Omari",
          message: "Payment went through but booking still pending.",
          timestamp: "2024-03-14 15:45:00",
          isAdmin: false,
        },
        {
          id: 2,
          sender: "Support Agent",
          message:
            "I've forwarded this to our billing team. They'll investigate and get back to you within 24 hours.",
          timestamp: "2024-03-14 16:30:00",
          isAdmin: true,
        },
      ],
    },
    {
      id: "TKT-003",
      subject: "How to claim CPD points?",
      description:
        "I attended the Cardiology Workshop last week. How do I claim my CPD points?",
      status: "resolved",
      priority: "medium",
      category: "general",
      createdBy: "Dr. Fatima Al-Zahrani",
      userEmail: "fatima@clinic.com",
      userType: "practitioner",
      createdAt: "2024-03-13 10:00:00",
      lastUpdated: "2024-03-13 16:30:00",
      assignedTo: "Support Team",
      messages: [
        {
          id: 1,
          sender: "Dr. Fatima Al-Zahrani",
          message: "Need guidance on claiming CPD points.",
          timestamp: "2024-03-13 10:00:00",
          isAdmin: false,
        },
        {
          id: 2,
          sender: "Support Agent",
          message:
            "You can claim your CPD points by going to the CPD Tracker section and clicking 'Claim Points' for the completed workshop.",
          timestamp: "2024-03-13 11:30:00",
          isAdmin: true,
        },
        {
          id: 3,
          sender: "Dr. Fatima Al-Zahrani",
          message: "Got it, thank you!",
          timestamp: "2024-03-13 14:00:00",
          isAdmin: false,
        },
        {
          id: 4,
          sender: "Support Agent",
          message: "You're welcome! I'll mark this as resolved.",
          timestamp: "2024-03-13 16:30:00",
          isAdmin: true,
        },
      ],
    },
    {
      id: "TKT-004",
      subject: "Sponsorship package upgrade",
      description:
        "We want to upgrade from Silver to Gold sponsorship. Please advise on next steps.",
      status: "open",
      priority: "medium",
      category: "sales",
      createdBy: "Omar Al-Jabri",
      userEmail: "omar@healthai.com",
      userType: "sponsor",
      createdAt: "2024-03-15 08:15:00",
      lastUpdated: "2024-03-15 08:15:00",
      assignedTo: "Sales Team",
      messages: [
        {
          id: 1,
          sender: "Omar Al-Jabri",
          message: "Interested in upgrading our sponsorship package.",
          timestamp: "2024-03-15 08:15:00",
          isAdmin: false,
        },
      ],
    },
  ]);

  // FAQ Data
  const faqs = [
    {
      id: 1,
      question: "How do I reset my password?",
      answer:
        "Click 'Forgot Password' on the login page. Enter your email address and you'll receive a password reset link. The link expires in 24 hours.",
      category: "account",
      helpful: 156,
      notHelpful: 12,
    },
    {
      id: 2,
      question: "How to upload documents?",
      answer:
        "Navigate to the Document Management section. Click 'Upload New' and select your document. Supported formats: PDF, DOC, JPG, PNG. Max size: 10MB.",
      category: "documents",
      helpful: 89,
      notHelpful: 8,
    },
    {
      id: 3,
      question: "How to earn CPD points?",
      answer:
        "Earn points by attending workshops, conferences, and completing certified courses. Track progress in the CPD Points Tracker section. Each event shows the points available.",
      category: "cpd",
      helpful: 234,
      notHelpful: 15,
    },
    {
      id: 4,
      question: "How to book a booth?",
      answer:
        "Go to Exhibition Floor Plan, select an available booth, review the pricing, and complete the booking process. You'll receive a confirmation email.",
      category: "booths",
      helpful: 167,
      notHelpful: 10,
    },
    {
      id: 5,
      question: "What payment methods are accepted?",
      answer:
        "We accept credit cards (Visa, Mastercard, AMEX), bank transfers, and PayPal. All payments are processed securely.",
      category: "payments",
      helpful: 98,
      notHelpful: 5,
    },
    {
      id: 6,
      question: "How to contact event organizers?",
      answer:
        "You can submit a support ticket through this Help Desk, email support@medconf.com, or call +966 800 123 4567 during business hours (9 AM - 6 PM, Sunday-Thursday).",
      category: "general",
      helpful: 76,
      notHelpful: 4,
    },
  ];

  const categories = [...new Set(faqs.map((f) => f.category))];

  const getStatusBadge = (status) => {
    switch (status) {
      case "open":
        return "bg-red-500/20 text-red-400 border border-red-500/30";
      case "in_progress":
        return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
      case "resolved":
        return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
      default:
        return "bg-white/10 text-gray-300 border border-white/10";
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-500/20 text-red-400 border border-red-500/30";
      case "medium":
        return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
      case "low":
        return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
      default:
        return "bg-white/10 text-gray-300 border border-white/10";
    }
  };

  const getCategoryBadge = (category) => {
    switch (category) {
      case "technical":
        return "bg-blue-500/20 text-blue-400 border border-blue-500/30";
      case "payment":
        return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
      case "general":
        return "bg-purple-500/20 text-purple-400 border border-purple-500/30";
      case "sales":
        return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
      default:
        return "bg-white/10 text-gray-300 border border-white/10";
    }
  };

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.createdBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || ticket.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const stats = {
    total: tickets.length,
    open: tickets.filter((t) => t.status === "open").length,
    inProgress: tickets.filter((t) => t.status === "in_progress").length,
    resolved: tickets.filter((t) => t.status === "resolved").length,
    avgResponseTime: "2.5 hours",
    satisfactionRate: "94%",
  };

  const handleMarkResolved = (id) => {
    setTickets(
      tickets.map((t) =>
        t.id === id
          ? {
              ...t,
              status: "resolved",
              lastUpdated: new Date()
                .toISOString()
                .slice(0, 19)
                .replace("T", " "),
            }
          : t,
      ),
    );
  };

  const handleMarkHelpful = (faqId) => {
    setFaqs(
      faqs.map((f) => (f.id === faqId ? { ...f, helpful: f.helpful + 1 } : f)),
    );
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Support & Help Desk
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Contact event organizers for support
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="relative px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span>Export Tickets</span>
          </button>
          <button
            onClick={() => setShowTicketModal(true)}
            className="relative px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-medium flex items-center gap-2 overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <Plus className="w-4 h-4" />
            <span>New Ticket</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {[
          { label: "Total Tickets", value: stats.total, icon: Headphones },
          { label: "Open", value: stats.open, icon: AlertCircle },
          { label: "In Progress", value: stats.inProgress, icon: RefreshCw },
          { label: "Resolved", value: stats.resolved, icon: CheckCircle },
          { label: "Avg Response", value: stats.avgResponseTime, icon: Clock },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold text-white mt-1">
                  {stat.value}
                </p>
              </div>
              <div className="p-2 bg-white/10 rounded-lg border border-white/20">
                <stat.icon className="w-4 h-4 text-blue-400" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-white/10 pb-4">
        <button
          onClick={() => setActiveTab("tickets")}
          className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
            activeTab === "tickets"
              ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
              : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10"
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          Support Tickets
          <span className="ml-1 text-xs opacity-80">({stats.total})</span>
        </button>
        <button
          onClick={() => setActiveTab("faq")}
          className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
            activeTab === "faq"
              ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
              : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10"
          }`}
        >
          <Headphones className="w-4 h-4" />
          FAQ
        </button>
        <button
          onClick={() => setActiveTab("contact")}
          className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
            activeTab === "contact"
              ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
              : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10"
          }`}
        >
          <Phone className="w-4 h-4" />
          Contact Info
        </button>
      </div>

      {/* Tickets Tab */}
      {activeTab === "tickets" && (
        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-300">
          <div className="p-5 border-b border-white/10">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tickets by subject, user, or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500/50"
                />
              </div>
              <div className="relative w-48">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full pl-10 pr-8 py-2 bg-slate-800 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 appearance-none cursor-pointer"
                >
                  <option value="all">All Status</option>
                  <option value="open">Open</option>
                  <option value="in_progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-white/10 bg-white/5">
                <tr>
                  <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Ticket ID
                  </th>
                  <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    User
                  </th>
                  <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Last Updated
                  </th>
                  <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredTickets.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="p-12 text-center">
                      <MessageSquare className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                      <p className="text-gray-400">No tickets found</p>
                    </td>
                  </tr>
                ) : (
                  filteredTickets.map((ticket) => (
                    <tr
                      key={ticket.id}
                      className="border-b border-white/5 hover:bg-white/5 transition-all duration-300"
                    >
                      <td className="p-4">
                        <p className="text-sm font-mono text-white">
                          {ticket.id}
                        </p>
                      </td>
                      <td className="p-4">
                        <p className="text-sm font-medium text-white">
                          {ticket.subject}
                        </p>
                        <p className="text-xs text-gray-400 capitalize">
                          {ticket.category}
                        </p>
                      </td>
                      <td className="p-4">
                        <div>
                          <p className="text-sm text-gray-300">
                            {ticket.createdBy}
                          </p>
                          <p className="text-xs text-gray-500 capitalize">
                            {ticket.userType}
                          </p>
                        </div>
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(ticket.status)}`}
                        >
                          {ticket.status
                            .replace("_", " ")
                            .charAt(0)
                            .toUpperCase() +
                            ticket.status.slice(1).replace("_", " ")}
                        </span>
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityBadge(ticket.priority)}`}
                        >
                          {ticket.priority.charAt(0).toUpperCase() +
                            ticket.priority.slice(1)}
                        </span>
                      </td>
                      <td className="p-4">
                        <p className="text-sm text-gray-300">
                          {ticket.lastUpdated.split(" ")[0]}
                        </p>
                        <p className="text-xs text-gray-500">
                          {ticket.lastUpdated.split(" ")[1]}
                        </p>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => {
                              setSelectedTicket(ticket);
                              setShowReplyModal(true);
                            }}
                            className="p-1.5 hover:bg-white/10 rounded-lg transition-all"
                            title="View & Reply"
                          >
                            <Search className="w-4 h-4 text-blue-400" />
                          </button>
                          {ticket.status !== "resolved" && (
                            <button
                              onClick={() => handleMarkResolved(ticket.id)}
                              className="p-1.5 hover:bg-emerald-500/10 rounded-lg transition-all"
                              title="Mark Resolved"
                            >
                              <CheckCircle className="w-4 h-4 text-emerald-400" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="p-5 border-t border-white/10 flex items-center justify-between">
            <p className="text-xs text-gray-400">
              Showing {filteredTickets.length} of {tickets.length} tickets
            </p>
            <div className="flex gap-1">
              <button className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 hover:bg-white/10 transition-all">
                Previous
              </button>
              <button className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-xs text-white shadow-lg shadow-blue-500/30">
                1
              </button>
              <button className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 hover:bg-white/10 transition-all">
                2
              </button>
              <button className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 hover:bg-white/10 transition-all">
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Tab */}
      {activeTab === "faq" && (
        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-300">
          <div className="p-5 border-b border-white/10">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500/50"
                />
              </div>
              <div className="flex gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSearchTerm(cat)}
                    className="px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 transition-all capitalize"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="p-5 space-y-3">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <Headphones className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                <p className="text-gray-400">No FAQs found</p>
              </div>
            ) : (
              filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="border border-white/10 rounded-xl overflow-hidden bg-white/5"
                >
                  <button
                    onClick={() =>
                      setExpandedFaq(expandedFaq === faq.id ? null : faq.id)
                    }
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <Headphones className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-white">
                          {faq.question}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className={`px-2 py-0.5 text-[10px] font-medium rounded-full bg-white/10 text-gray-300 border border-white/10 capitalize`}
                          >
                            {faq.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    {expandedFaq === faq.id ? (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    )}
                  </button>

                  {expandedFaq === faq.id && (
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
                              onClick={() => handleMarkHelpful(faq.id)}
                              className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs hover:bg-white/10 transition-all text-gray-300"
                            >
                              <ThumbsUp className="w-3 h-3" />
                              Yes ({faq.helpful})
                            </button>
                            <button className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs hover:bg-white/10 transition-all text-gray-300">
                              <ThumbsDown className="w-3 h-3" />
                              No ({faq.notHelpful})
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Still Need Help */}
          <div className="p-5 border-t border-white/10 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-white/10 rounded-lg border border-white/20">
                <MessageSquare className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-white mb-1">
                  Still need help?
                </h4>
                <p className="text-xs text-gray-300 mb-3">
                  Can't find what you're looking for? Submit a support ticket
                  and our team will assist you.
                </p>
                <button
                  onClick={() => setShowTicketModal(true)}
                  className="relative px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl text-sm font-medium overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
                >
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Create Support Ticket
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Info Tab */}
      {activeTab === "contact" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-300">
            <div className="p-6 text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Email Support
              </h3>
              <p className="text-sm text-gray-300 mb-3">
                Send us an email and we'll respond within 24 hours
              </p>
              <a
                href="mailto:support@medconf.com"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                support@medconf.com
              </a>
            </div>
          </div>
          <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-300">
            <div className="p-6 text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30 mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Phone Support
              </h3>
              <p className="text-sm text-gray-300 mb-3">
                Available during business hours
              </p>
              <a
                href="tel:+9668001234567"
                className="text-emerald-400 hover:text-emerald-300 font-medium"
              >
                +966 800 123 4567
              </a>
              <div className="mt-3 text-xs text-gray-400">
                <Clock className="w-3 h-3 inline mr-1" />
                Sun-Thu: 9 AM - 6 PM
              </div>
            </div>
          </div>
          <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-300">
            <div className="p-6 text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Submit a Ticket
              </h3>
              <p className="text-sm text-gray-300 mb-3">
                Get help from our support team
              </p>
              <button className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-400 hover:bg-blue-500/30 transition-all">
                Create Ticket
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Ticket Modal */}
      {showTicketModal && (
        <CreateTicketModal
          onClose={() => setShowTicketModal(false)}
          onSave={(newTicket) => {
            setTickets([
              {
                ...newTicket,
                id: `TKT-${String(tickets.length + 1).padStart(3, "0")}`,
                createdAt: new Date()
                  .toISOString()
                  .slice(0, 19)
                  .replace("T", " "),
                lastUpdated: new Date()
                  .toISOString()
                  .slice(0, 19)
                  .replace("T", " "),
                messages: [],
              },
              ...tickets,
            ]);
            setShowTicketModal(false);
          }}
        />
      )}

      {/* Reply Ticket Modal */}
      {showReplyModal && selectedTicket && (
        <ReplyTicketModal
          ticket={selectedTicket}
          onClose={() => {
            setShowReplyModal(false);
            setSelectedTicket(null);
          }}
          onSendReply={(message) => {
            const updatedTicket = {
              ...selectedTicket,
              messages: [
                ...selectedTicket.messages,
                {
                  id: selectedTicket.messages.length + 1,
                  sender: "Support Agent",
                  message: message,
                  timestamp: new Date()
                    .toISOString()
                    .slice(0, 19)
                    .replace("T", " "),
                  isAdmin: true,
                },
              ],
              lastUpdated: new Date()
                .toISOString()
                .slice(0, 19)
                .replace("T", " "),
            };
            setTickets(
              tickets.map((t) =>
                t.id === selectedTicket.id ? updatedTicket : t,
              ),
            );
            setSelectedTicket(updatedTicket);
          }}
          onMarkResolved={() => {
            handleMarkResolved(selectedTicket.id);
            setShowReplyModal(false);
            setSelectedTicket(null);
          }}
        />
      )}
    </div>
  );
}

// Create Ticket Modal Component
const CreateTicketModal = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    subject: "",
    description: "",
    category: "general",
    priority: "medium",
    createdBy: "Admin User",
    userEmail: "admin@medconf.com",
    userType: "admin",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      status: "open",
      assignedTo: "Support Team",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl w-full max-w-md shadow-2xl border border-blue-500/20 animate-in zoom-in-95 duration-300">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />

        <div className="relative p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Create Support Ticket
            </h2>
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="relative p-6 space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">
              Subject
            </label>
            <input
              type="text"
              required
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
              placeholder="Brief description of your issue"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">
              Description
            </label>
            <textarea
              rows={4}
              required
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 resize-none"
              placeholder="Please provide detailed information about your issue..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full px-4 py-2 bg-slate-800 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
              >
                <option value="general">General</option>
                <option value="technical">Technical</option>
                <option value="payment">Payment</option>
                <option value="sales">Sales</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">
                Priority
              </label>
              <select
                value={formData.priority}
                onChange={(e) =>
                  setFormData({ ...formData, priority: e.target.value })
                }
                className="w-full px-4 py-2 bg-slate-800 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-white/10 rounded-xl text-gray-300 hover:bg-white/10 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              Submit Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Reply Ticket Modal Component
const ReplyTicketModal = ({ ticket, onClose, onSendReply, onMarkResolved }) => {
  const [replyMessage, setReplyMessage] = useState("");

  const handleSend = () => {
    if (replyMessage.trim()) {
      onSendReply(replyMessage);
      setReplyMessage("");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl w-full max-w-2xl shadow-2xl border border-blue-500/20 animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />

        <div className="relative p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Ticket #{ticket.id}
              </h2>
              <p className="text-sm text-gray-400 mt-1">{ticket.subject}</p>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative p-6 space-y-4">
          {/* Ticket Info */}
          <div className="flex flex-wrap gap-2 pb-3 border-b border-white/10">
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(ticket.status)}`}
            >
              {ticket.status.replace("_", " ").charAt(0).toUpperCase() +
                ticket.status.slice(1).replace("_", " ")}
            </span>
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityBadge(ticket.priority)}`}
            >
              {ticket.priority.charAt(0).toUpperCase() +
                ticket.priority.slice(1)}{" "}
              Priority
            </span>
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryBadge(ticket.category)}`}
            >
              {ticket.category.charAt(0).toUpperCase() +
                ticket.category.slice(1)}
            </span>
          </div>

          {/* Conversation Thread */}
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {ticket.messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isAdmin ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] ${message.isAdmin ? "bg-blue-500/20 border border-blue-500/30" : "bg-white/5 border border-white/10"} rounded-xl p-3`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-white">
                      {message.sender}
                    </span>
                    <span className="text-xs text-gray-400">
                      {message.timestamp.split(" ")[1]}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300">{message.message}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Reply Box */}
          <div className="pt-4 border-t border-white/10">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Reply to User
            </label>
            <textarea
              rows={3}
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 resize-none"
              placeholder="Type your response here..."
            />
            <div className="flex gap-3 mt-3">
              {ticket.status !== "resolved" && (
                <button
                  onClick={onMarkResolved}
                  className="px-4 py-2 border border-emerald-500/30 rounded-xl text-emerald-400 hover:bg-emerald-500/10 transition-all"
                >
                  Mark as Resolved
                </button>
              )}
              <button
                onClick={handleSend}
                disabled={!replyMessage.trim()}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper functions
const getStatusBadge = (status) => {
  switch (status) {
    case "open":
      return "bg-red-500/20 text-red-400 border border-red-500/30";
    case "in_progress":
      return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
    case "resolved":
      return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
    default:
      return "bg-white/10 text-gray-300 border border-white/10";
  }
};

const getPriorityBadge = (priority) => {
  switch (priority) {
    case "high":
      return "bg-red-500/20 text-red-400 border border-red-500/30";
    case "medium":
      return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
    case "low":
      return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
    default:
      return "bg-white/10 text-gray-300 border border-white/10";
  }
};

const getCategoryBadge = (category) => {
  switch (category) {
    case "technical":
      return "bg-blue-500/20 text-blue-400 border border-blue-500/30";
    case "payment":
      return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
    case "general":
      return "bg-purple-500/20 text-purple-400 border border-purple-500/30";
    case "sales":
      return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
    default:
      return "bg-white/10 text-gray-300 border border-white/10";
  }
};