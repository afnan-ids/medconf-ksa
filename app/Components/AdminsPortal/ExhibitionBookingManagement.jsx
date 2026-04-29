"use client";

import { useState } from "react";
import {
  CalendarCheck,
  Search,
  Filter,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Download,
  MoreVertical,
  Building2,
  MapPin,
  DollarSign,
  User,
  Calendar,
  Mail,
  Phone,
  MessageSquare,
  ChevronDown,
  X,
  RefreshCw,
  AlertCircle,
  GlassesIcon,
  SearchCheck,
} from "lucide-react";

export default function ExhibitionBookingManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  // Bookings data
  const [bookings, setBookings] = useState([
    {
      id: "BK-1024",
      exhibitor: {
        name: "MedTech Solutions",
        contact: "Sarah Al-Omari",
        email: "sarah@medtech.com",
        phone: "+966 55 789 0123",
      },
      booth: {
        id: "A12",
        hall: "Hall A",
        size: "Premium",
        price: "$5,000",
      },
      event: "Global Health Exhibition 2026",
      eventDate: "Oct 26-29, 2026",
      bookingDate: "2024-03-15",
      amount: "$5,000",
      status: "pending",
      paymentStatus: "pending",
      notes: "Requested additional power outlets and premium placement.",
      requirements: ["Power Outlet x2", "High-speed Internet", "Premium Location"],
    },
    {
      id: "BK-1023",
      exhibitor: {
        name: "HealthAI Systems",
        contact: "Omar Al-Jabri",
        email: "omar@healthai.com",
        phone: "+966 52 345 6789",
      },
      booth: {
        id: "B07",
        hall: "Hall B",
        size: "Standard",
        price: "$3,500",
      },
      event: "Global Health Exhibition 2026",
      eventDate: "Oct 26-29, 2026",
      bookingDate: "2024-03-14",
      amount: "$3,500",
      status: "confirmed",
      paymentStatus: "paid",
      notes: "Standard booth setup with branding.",
      requirements: ["Branding", "Brochure Display"],
    },
    {
      id: "BK-1022",
      exhibitor: {
        name: "PharmaCorp Intl.",
        contact: "Khalid Al-Mansour",
        email: "khalid@pharmacorp.com",
        phone: "+966 54 456 7890",
      },
      booth: {
        id: "C21",
        hall: "Hall C",
        size: "Corner",
        price: "$7,500",
      },
      event: "Global Health Exhibition 2026",
      eventDate: "Oct 26-29, 2026",
      bookingDate: "2024-03-10",
      amount: "$7,500",
      status: "confirmed",
      paymentStatus: "paid",
      notes: "Premium corner booth with extra visibility.",
      requirements: ["Corner Location", "Premium Setup", "VIP Access"],
    },
    {
      id: "BK-1021",
      exhibitor: {
        name: "Diagnostic Labs",
        contact: "Nora Al-Ghamdi",
        email: "nora@diagnosticlabs.com",
        phone: "+966 56 789 0123",
      },
      booth: {
        id: "D14",
        hall: "Hall D",
        size: "Standard",
        price: "$2,800",
      },
      event: "Cardiology Summit 2026",
      eventDate: "Nov 15-18, 2026",
      bookingDate: "2024-03-05",
      amount: "$2,800",
      status: "cancelled",
      paymentStatus: "refunded",
      notes: "Cancelled due to scheduling conflict.",
      requirements: [],
    },
    {
      id: "BK-1020",
      exhibitor: {
        name: "Wellness Global",
        contact: "Ahmed Al-Jabri",
        email: "ahmed@wellnessglobal.com",
        phone: "+966 53 567 8901",
      },
      booth: {
        id: "E09",
        hall: "Hall E",
        size: "Standard",
        price: "$3,200",
      },
      event: "Global Health Exhibition 2026",
      eventDate: "Oct 26-29, 2026",
      bookingDate: "2024-03-01",
      amount: "$3,200",
      status: "pending",
      paymentStatus: "pending",
      notes: "Requested adjacent booths for expansion.",
      requirements: ["Adjacent Booths", "Staff Badges x4"],
    },
    {
      id: "BK-1019",
      exhibitor: {
        name: "Siemens Healthineers",
        contact: "Thomas Mueller",
        email: "thomas@siemens.com",
        phone: "+966 50 123 9876",
      },
      booth: {
        id: "F03",
        hall: "Hall F",
        size: "Premium",
        price: "$6,500",
      },
      event: "Digital Health Forum 2026",
      eventDate: "Apr 15-17, 2026",
      bookingDate: "2024-02-28",
      amount: "$6,500",
      status: "confirmed",
      paymentStatus: "paid",
      notes: "Requires large equipment setup area.",
      requirements: ["Equipment Space", "Power 220V", "Technical Support"],
    },
  ]);

  const statusOptions = [
    { value: "all", label: "All Bookings", color: "gray" },
    { value: "pending", label: "Pending", color: "amber", icon: Clock },
    { value: "confirmed", label: "Confirmed", color: "emerald", icon: CheckCircle },
    { value: "cancelled", label: "Cancelled", color: "red", icon: XCircle },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
      case "pending":
        return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
      case "cancelled":
        return "bg-red-500/20 text-red-400 border border-red-500/30";
      default:
        return "bg-white/10 text-gray-300 border border-white/10";
    }
  };

  const getPaymentBadge = (status) => {
    switch (status) {
      case "paid":
        return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
      case "pending":
        return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
      case "refunded":
        return "bg-red-500/20 text-red-400 border border-red-500/30";
      default:
        return "bg-white/10 text-gray-300 border border-white/10";
    }
  };

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch = booking.exhibitor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          booking.booth.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: bookings.length,
    pending: bookings.filter((b) => b.status === "pending").length,
    confirmed: bookings.filter((b) => b.status === "confirmed").length,
    totalRevenue: bookings
      .filter((b) => b.status === "confirmed")
      .reduce((sum, b) => sum + parseInt(b.amount.replace("$", "").replace(",", "")), 0),
  };

  const handleApprove = () => {
    setBookings(
      bookings.map((b) =>
        b.id === selectedBooking.id ? { ...b, status: "confirmed", paymentStatus: "paid" } : b
      )
    );
    setShowApproveModal(false);
    setSelectedBooking(null);
  };

  const handleReject = () => {
    setBookings(
      bookings.map((b) =>
        b.id === selectedBooking.id ? { ...b, status: "cancelled", paymentStatus: "refunded" } : b
      )
    );
    setShowRejectModal(false);
    setSelectedBooking(null);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Exhibition Booking Management
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Manage exhibition bookings, approvals, and allocations
          </p>
        </div>
        <button className="relative px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
          <Download className="w-4 h-4" />
          <span>Export Report</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {[
          { label: "Total Bookings", value: stats.total, icon: CalendarCheck },
          { label: "Pending Approval", value: stats.pending, icon: Clock },
          { label: "Confirmed", value: stats.confirmed, icon: CheckCircle },
          { label: "Total Revenue", value: `$${stats.totalRevenue.toLocaleString()}`, icon: DollarSign },
        ].map((stat, idx) => (
          <div key={idx} className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
              </div>
              <div className="p-2 bg-white/10 rounded-lg border border-white/20">
                <stat.icon className="w-4 h-4 text-blue-400" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters and Search */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-300">
        <div className="p-5 border-b border-white/10">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by booking ID, exhibitor, or booth..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500/50 transition-all"
              />
            </div>

            {/* Status Filter */}
            <div className="relative w-48">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full pl-10 pr-8 py-2 bg-slate-800 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 appearance-none cursor-pointer"
              >
                {statusOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            {/* Refresh Button */}
            <button className="p-2 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all">
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-white/10 bg-white/5">
              <tr>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Booking ID</th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Exhibitor</th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Booth</th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Event</th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Amount</th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Payment</th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.length === 0 ? (
                <tr>
                  <td colSpan="8" className="p-12 text-center">
                    <CalendarCheck className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                    <p className="text-gray-400">No bookings found</p>
                  </td>
                </tr>
              ) : (
                filteredBookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-white/5 hover:bg-white/5 transition-all duration-300">
                    <td className="p-4">
                      <p className="text-sm font-semibold text-white">{booking.id}</p>
                      <p className="text-xs text-gray-400">{booking.bookingDate}</p>
                    </td>
                    <td className="p-4">
                      <div>
                        <p className="text-sm font-medium text-white">{booking.exhibitor.name}</p>
                        <p className="text-xs text-gray-400">{booking.exhibitor.contact}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <p className="text-sm font-semibold text-white">{booking.booth.id}</p>
                        <p className="text-xs text-gray-400">{booking.booth.hall} • {booking.booth.size}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-gray-300">{booking.event}</p>
                      <p className="text-xs text-gray-500">{booking.eventDate}</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm font-semibold text-white">{booking.amount}</p>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(booking.status)}`}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPaymentBadge(booking.paymentStatus)}`}>
                        {booking.paymentStatus.charAt(0).toUpperCase() + booking.paymentStatus.slice(1)}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => {
                            setSelectedBooking(booking);
                            setShowDetailsModal(true);
                          }}
                          className="p-1.5 hover:bg-white/10 rounded-lg transition-all"
                          title="View Details"
                        >
                          <Search className="w-4 h-4 text-blue-400" />
                        </button>
                        {booking.status === "pending" && (
                          <>
                            <button
                              onClick={() => {
                                setSelectedBooking(booking);
                                setShowRejectModal(true);
                              }}
                              className="p-1.5 hover:bg-red-500/10 rounded-lg transition-all"
                              title="Reject"
                            >
                              <XCircle className="w-4 h-4 text-red-400" />
                            </button>
                            <button
                              onClick={() => {
                                setSelectedBooking(booking);
                                setShowApproveModal(true);
                              }}
                              className="p-1.5 hover:bg-emerald-500/10 rounded-lg transition-all"
                              title="Approve"
                            >
                              <CheckCircle className="w-4 h-4 text-emerald-400" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-5 border-t border-white/10 flex items-center justify-between">
          <p className="text-xs text-gray-400">
            Showing {filteredBookings.length} of {bookings.length} bookings
          </p>
          <div className="flex gap-1">
            <button className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 hover:bg-white/10 transition-all">Previous</button>
            <button className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-xs text-white shadow-lg shadow-blue-500/30">1</button>
            <button className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 hover:bg-white/10 transition-all">2</button>
            <button className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 hover:bg-white/10 transition-all">Next</button>
          </div>
        </div>
      </div>

      {/* Booking Details Modal */}
      {showDetailsModal && selectedBooking && (
        <BookingDetailsModal
          booking={selectedBooking}
          onClose={() => {
            setShowDetailsModal(false);
            setSelectedBooking(null);
          }}
          onApprove={() => {
            setShowDetailsModal(false);
            setShowApproveModal(true);
          }}
          onReject={() => {
            setShowDetailsModal(false);
            setShowRejectModal(true);
          }}
        />
      )}

      {/* Approve Modal */}
      {showApproveModal && selectedBooking && (
        <ApproveRejectModal
          type="approve"
          booking={selectedBooking}
          onConfirm={handleApprove}
          onCancel={() => {
            setShowApproveModal(false);
            setSelectedBooking(null);
          }}
        />
      )}

      {/* Reject Modal */}
      {showRejectModal && selectedBooking && (
        <ApproveRejectModal
          type="reject"
          booking={selectedBooking}
          onConfirm={handleReject}
          onCancel={() => {
            setShowRejectModal(false);
            setSelectedBooking(null);
          }}
        />
      )}
    </div>
  );
}

// Booking Details Modal Component
const BookingDetailsModal = ({ booking, onClose, onApprove, onReject }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl w-full max-w-2xl shadow-2xl border border-blue-500/20 animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />

        <div className="relative p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Booking Details
              </h2>
              <p className="text-xs text-gray-400 mt-1">ID: {booking.id}</p>
            </div>
            <button onClick={onClose} className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-all">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative p-6 space-y-6">
          {/* Exhibitor Info */}
          <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2 mb-3">
              <Building2 className="w-4 h-4 text-blue-400" />
              Exhibitor Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-400">Company</p>
                <p className="text-sm font-medium text-white">{booking.exhibitor.name}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Contact Person</p>
                <p className="text-sm font-medium text-white">{booking.exhibitor.contact}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Email</p>
                <p className="text-sm text-white flex items-center gap-1">
                  <Mail className="w-3 h-3 text-blue-400" />
                  {booking.exhibitor.email}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Phone</p>
                <p className="text-sm text-white flex items-center gap-1">
                  <Phone className="w-3 h-3 text-blue-400" />
                  {booking.exhibitor.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Booth Info */}
          <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-blue-400" />
              Booth Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-400">Booth ID</p>
                <p className="text-sm font-semibold text-white">{booking.booth.id}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Hall</p>
                <p className="text-sm text-white">{booking.booth.hall}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Size Type</p>
                <p className="text-sm text-white">{booking.booth.size}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Price</p>
                <p className="text-sm font-semibold text-white">{booking.booth.price}</p>
              </div>
            </div>
          </div>

          {/* Event Info */}
          <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2 mb-3">
              <Calendar className="w-4 h-4 text-blue-400" />
              Event Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-400">Event Name</p>
                <p className="text-sm text-white">{booking.event}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Event Date</p>
                <p className="text-sm text-white">{booking.eventDate}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Booking Date</p>
                <p className="text-sm text-white">{booking.bookingDate}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Total Amount</p>
                <p className="text-sm font-semibold text-white">{booking.amount}</p>
              </div>
            </div>
          </div>

          {/* Requirements & Notes */}
          {booking.requirements.length > 0 && (
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2 mb-3">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                Special Requirements
              </h3>
              <div className="flex flex-wrap gap-2">
                {booking.requirements.map((req, idx) => (
                  <span key={idx} className="px-2 py-1 bg-white/10 rounded-lg text-xs text-gray-300 border border-white/10">
                    {req}
                  </span>
                ))}
              </div>
            </div>
          )}

          {booking.notes && (
            <div className="p-4 bg-amber-500/10 rounded-xl border border-amber-500/30">
              <p className="text-xs text-amber-400 font-medium mb-1">Notes</p>
              <p className="text-sm text-gray-300">{booking.notes}</p>
            </div>
          )}

          {/* Action Buttons */}
          {booking.status === "pending" && (
            <div className="flex gap-3 pt-4">
              <button
                onClick={onReject}
                className="flex-1 px-4 py-2 border border-red-500/30 rounded-xl text-red-400 hover:bg-red-500/10 transition-all"
              >
                Reject Booking
              </button>
              <button
                onClick={onApprove}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-emerald-500/30 transition-all"
              >
                Approve Booking
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Approve/Reject Modal Component
const ApproveRejectModal = ({ type, booking, onConfirm, onCancel }) => {
  const [reason, setReason] = useState("");
  const isApprove = type === "approve";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onCancel} />
      <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl w-full max-w-md shadow-2xl border border-blue-500/20 animate-in zoom-in-95 duration-300">
        <div className="relative p-6 text-center">
          <div className={`w-16 h-16 mx-auto mb-4 ${isApprove ? "bg-emerald-500/20" : "bg-red-500/20"} rounded-full flex items-center justify-center border ${isApprove ? "border-emerald-500/30" : "border-red-500/30"}`}>
            {isApprove ? (
              <CheckCircle className="w-8 h-8 text-emerald-400" />
            ) : (
              <XCircle className="w-8 h-8 text-red-400" />
            )}
          </div>
          <h3 className="text-lg font-bold text-white mb-2">
            {isApprove ? "Approve Booking" : "Reject Booking"}
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            {isApprove
              ? `Are you sure you want to approve booking ${booking?.id} for ${booking?.exhibitor?.name}?`
              : `Are you sure you want to reject booking ${booking?.id} for ${booking?.exhibitor?.name}?`}
          </p>
          
          {!isApprove && (
            <div className="mb-6">
              <label className="block text-xs font-medium text-gray-400 mb-1 text-left">
                Reason for Rejection (Optional)
              </label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={3}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500/50 transition-all resize-none"
                placeholder="Enter reason..."
              />
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="flex-1 px-4 py-2 border border-white/10 rounded-xl text-gray-300 hover:bg-white/10 transition-all"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className={`flex-1 px-4 py-2 rounded-xl font-medium transition-all ${
                isApprove
                  ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:shadow-lg hover:shadow-emerald-500/30"
                  : "bg-gradient-to-r from-red-600 to-red-500 text-white hover:shadow-lg hover:shadow-red-500/30"
              }`}
            >
              {isApprove ? "Approve" : "Reject"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};