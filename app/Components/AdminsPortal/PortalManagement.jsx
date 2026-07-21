"use client";

import { useState } from "react";
import {
  Users,
  Building2,
  UserCheck,
  UserPlus,
  Edit,
  Trash2,
  Eye,
  Search,
  Filter,
  ChevronDown,
  X,
  CheckCircle,
  XCircle,
  Clock,
  Calendar,
  Mail,
  Phone,
  MapPin,
  DollarSign,
  RefreshCw,
  Download,
  Shield,
  UserCog,
  Briefcase,
  Stethoscope,
  Plus,
  ChevronRight,
} from "lucide-react";

export default function PortalManagement() {
  const [activeTab, setActiveTab] = useState("exhibitors");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // Exhibitors data
  const [exhibitors, setExhibitors] = useState([
    {
      id: 1,
      companyName: "MedTech Solutions",
      contactPerson: "Sarah Al-Omari",
      email: "sarah@medtech.com",
      phone: "+966 55 789 0123",
      boothAllocated: "A12",
      status: "active",
      package: "Premium",
      amount: "$5,000",
      joinDate: "2024-01-15",
      employees: 12,
      country: "Saudi Arabia",
    },
    {
      id: 2,
      companyName: "HealthAI Systems",
      contactPerson: "Omar Al-Jabri",
      email: "omar@healthai.com",
      phone: "+966 52 345 6789",
      boothAllocated: "B07",
      status: "active",
      package: "Standard",
      amount: "$3,500",
      joinDate: "2024-01-20",
      employees: 8,
      country: "UAE",
    },
    {
      id: 3,
      companyName: "PharmaCorp Intl.",
      contactPerson: "Khalid Al-Mansour",
      email: "khalid@pharmacorp.com",
      phone: "+966 54 456 7890",
      boothAllocated: "C21",
      status: "active",
      package: "Corner",
      amount: "$7,500",
      joinDate: "2024-01-10",
      employees: 25,
      country: "Saudi Arabia",
    },
    {
      id: 4,
      companyName: "Diagnostic Labs",
      contactPerson: "Nora Al-Ghamdi",
      email: "nora@diagnosticlabs.com",
      phone: "+966 56 789 0123",
      boothAllocated: "D14",
      status: "inactive",
      package: "Standard",
      amount: "$2,800",
      joinDate: "2024-02-05",
      employees: 6,
      country: "Kuwait",
    },
    {
      id: 5,
      companyName: "Wellness Global",
      contactPerson: "Ahmed Al-Jabri",
      email: "ahmed@wellnessglobal.com",
      phone: "+966 53 567 8901",
      boothAllocated: "E09",
      status: "inactive",
      package: "Standard",
      amount: "$3,200",
      joinDate: "2024-01-25",
      employees: 10,
      country: "Saudi Arabia",
    },
    {
      id: 6,
      companyName: "Siemens Healthineers",
      contactPerson: "Thomas Mueller",
      email: "thomas@siemens.com",
      phone: "+966 50 123 9876",
      boothAllocated: "F03",
      status: "active",
      package: "Premium",
      amount: "$6,500",
      joinDate: "2024-02-01",
      employees: 18,
      country: "Germany",
    },
  ]);

  // Healthcare Practitioners data
  const [practitioners, setPractitioners] = useState([
    {
      id: 1,
      name: "Dr. Ahmed Hassan",
      email: "ahmed.hassan@medical.com",
      phone: "+966 50 123 4567",
      specialization: "Cardiology",
      licenseId: "SCH-2024-12345",
      status: "active",
      cpdPoints: 98,
      eventsAttended: 3,
      joinDate: "2024-01-10",
      hospital: "King Faisal Specialist Hospital",
    },
    {
      id: 2,
      name: "Dr. Fatima Al-Zahrani",
      email: "fatima.zahrani@clinic.com",
      phone: "+966 53 234 5678",
      specialization: "Pediatrics",
      licenseId: "SCH-2024-67890",
      status: "inactive",
      cpdPoints: 45,
      eventsAttended: 1,
      joinDate: "2024-01-05",
      hospital: "Al Habib Medical Group",
    },
    {
      id: 3,
      name: "Dr. Khalid Al-Mansour",
      email: "khalid.mansour@med.com",
      phone: "+966 54 456 7890",
      specialization: "Neurology",
      licenseId: "SCH-2024-11111",
      status: "active",
      cpdPoints: 156,
      eventsAttended: 5,
      joinDate: "2024-01-15",
      hospital: "King Abdulaziz Medical City",
    },
    {
      id: 4,
      name: "Dr. Noura Al-Qahtani",
      email: "noura.qahtani@health.com",
      phone: "+966 55 987 6543",
      specialization: "Oncology",
      licenseId: "SCH-2024-22222",
      status: "inactive",
      cpdPoints: 12,
      eventsAttended: 0,
      joinDate: "2024-02-20",
      hospital: "King Fahad Medical City",
    },
    {
      id: 5,
      name: "Dr. Youssef Al-Rashid",
      email: "youssef.rashid@clinic.com",
      phone: "+966 56 345 6789",
      specialization: "Orthopedics",
      licenseId: "SCH-2024-33333",
      status: "active",
      cpdPoints: 87,
      eventsAttended: 2,
      joinDate: "2024-01-28",
      hospital: "Dr. Sulaiman Al Habib Hospital",
    },
  ]);

  const statusOptions = [
    { value: "all", label: "All Status" },
    { value: "active", label: "Active", color: "emerald" },
    { value: "inactive", label: "Inactive", color: "red" },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
      case "inactive":
        return "bg-red-500/20 text-red-400 border border-red-500/30";
      default:
        return "bg-white/10 text-gray-300 border border-white/10";
    }
  };

  const getPackageBadge = (pkg) => {
    switch (pkg) {
      case "Premium":
        return "bg-blue-500/20 text-blue-400 border border-blue-500/30";
      case "Corner":
        return "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30";
      default:
        return "bg-blue-500/20 text-blue-400 border border-blue-500/30";
    }
  };

  const filteredExhibitors = exhibitors.filter((ex) => {
    const matchesSearch =
      ex.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ex.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ex.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || ex.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredPractitioners = practitioners.filter((prac) => {
    const matchesSearch =
      prac.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prac.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prac.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || prac.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleStatusToggle = (id, currentStatus, type) => {
    const newStatus = currentStatus === "active" ? "inactive" : "active";
    if (type === "exhibitor") {
      setExhibitors(
        exhibitors.map((e) => (e.id === id ? { ...e, status: newStatus } : e)),
      );
    } else {
      setPractitioners(
        practitioners.map((p) =>
          p.id === id ? { ...p, status: newStatus } : p,
        ),
      );
    }
  };

  const stats = {
    totalExhibitors: exhibitors.length,
    activeExhibitors: exhibitors.filter((e) => e.status === "active").length,
    totalPractitioners: practitioners.length,
    activePractitioners: practitioners.filter((p) => p.status === "active")
      .length,
    totalBoothsAllocated: exhibitors.filter((e) => e.boothAllocated).length,
    totalRevenue: exhibitors.reduce(
      (sum, e) => sum + parseInt(e.amount.replace("$", "").replace(",", "")),
      0,
    ),
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Portal Management
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Manage exhibitors, healthcare practitioners, and booth allocations
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="relative px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="relative px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-medium flex items-center gap-2 overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <UserPlus className="w-4 h-4" />
            <span>Add New</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {[
          {
            label: "Total Exhibitors",
            value: stats.totalExhibitors,
            icon: Building2,
          },
          {
            label: "Active Exhibitors",
            value: stats.activeExhibitors,
            icon: UserCheck,
          },
          {
            label: "Total Practitioners",
            value: stats.totalPractitioners,
            icon: Stethoscope,
          },
          {
            label: "Active Practitioners",
            value: stats.activePractitioners,
            icon: UserCheck,
          },
          {
            label: "Booths Allocated",
            value: stats.totalBoothsAllocated,
            icon: MapPin,
          },
          {
            label: "Total Revenue",
            value: `$${(stats.totalRevenue / 1000).toFixed(0)}K`,
            icon: DollarSign,
          },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">{stat.label}</p>
                <p className="text-xl font-bold text-white mt-1">
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
          onClick={() => setActiveTab("exhibitors")}
          className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
            activeTab === "exhibitors"
              ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
              : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10"
          }`}
        >
          <Building2 className="w-4 h-4" />
          Exhibitors
          <span className="ml-1 text-xs opacity-80">
            ({stats.totalExhibitors})
          </span>
        </button>
        <button
          onClick={() => setActiveTab("practitioners")}
          className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
            activeTab === "practitioners"
              ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
              : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10"
          }`}
        >
          <Stethoscope className="w-4 h-4" />
          Healthcare Practitioners
          <span className="ml-1 text-xs opacity-80">
            ({stats.totalPractitioners})
          </span>
        </button>
      </div>

      {/* Filters */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-300">
        <div className="p-5 border-b border-white/10">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder={`Search ${activeTab === "exhibitors" ? "company or contact..." : "name or specialization..."}`}
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
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
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

        {/* Exhibitors Table */}
        {activeTab === "exhibitors" && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-white/10 bg-white/5">
                <tr>
                  <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Booth
                  </th>
                  <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Package
                  </th>
                  <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredExhibitors.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="p-12 text-center">
                      <Building2 className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                      <p className="text-gray-400">No exhibitors found</p>
                    </td>
                  </tr>
                ) : (
                  filteredExhibitors.map((exhibitor) => (
                    <tr
                      key={exhibitor.id}
                      className="border-b border-white/5 hover:bg-white/5 transition-all duration-300"
                    >
                      <td className="p-4">
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {exhibitor.companyName}
                          </p>
                          <p className="text-xs text-gray-400">
                            {exhibitor.country}
                          </p>
                        </div>
                      </td>
                      <td className="p-4">
                        <div>
                          <p className="text-sm text-gray-300">
                            {exhibitor.contactPerson}
                          </p>
                          <p className="text-xs text-gray-400">
                            {exhibitor.email}
                          </p>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-white/10 rounded-lg text-sm font-mono text-white">
                          {exhibitor.boothAllocated || "Not assigned"}
                        </span>
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${getPackageBadge(exhibitor.package)}`}
                        >
                          {exhibitor.package}
                        </span>
                      </td>
                      <td className="p-4">
                        <p className="text-sm font-semibold text-white">
                          {exhibitor.amount}
                        </p>
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(exhibitor.status)}`}
                        >
                          {exhibitor.status.charAt(0).toUpperCase() +
                            exhibitor.status.slice(1)}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => {
                              setSelectedItem(exhibitor);
                              setShowDetailsModal(true);
                            }}
                            className="p-1.5 hover:bg-white/10 rounded-lg transition-all"
                            title="View Details"
                          >
                            <Search className="w-4 h-4 text-blue-400" />
                          </button>
                          <button
                            onClick={() =>
                              handleStatusToggle(
                                exhibitor.id,
                                exhibitor.status,
                                "exhibitor",
                              )
                            }
                            className="p-1.5 hover:bg-white/10 rounded-lg transition-all"
                            title={
                              exhibitor.status === "active"
                                ? "Deactivate"
                                : "Activate"
                            }
                          >
                            {exhibitor.status === "active" ? (
                              <XCircle className="w-4 h-4 text-red-400" />
                            ) : (
                              <CheckCircle className="w-4 h-4 text-emerald-400" />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Healthcare Practitioners Table */}
        {activeTab === "practitioners" && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-white/10 bg-white/5">
                <tr>
                  <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Specialization
                  </th>
                  <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    License ID
                  </th>
                  <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    CPD Points
                  </th>
                  <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredPractitioners.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="p-12 text-center">
                      <Stethoscope className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                      <p className="text-gray-400">No practitioners found</p>
                    </td>
                  </tr>
                ) : (
                  filteredPractitioners.map((practitioner) => (
                    <tr
                      key={practitioner.id}
                      className="border-b border-white/5 hover:bg-white/5 transition-all duration-300"
                    >
                      <td className="p-4">
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {practitioner.name}
                          </p>
                          <p className="text-xs text-gray-400">
                            {practitioner.hospital}
                          </p>
                        </div>
                      </td>
                      <td className="p-4">
                        <div>
                          <p className="text-sm text-gray-300">
                            {practitioner.email}
                          </p>
                          <p className="text-xs text-gray-400">
                            {practitioner.phone}
                          </p>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-white/10 rounded-lg text-xs text-white">
                          {practitioner.specialization}
                        </span>
                      </td>
                      <td className="p-4">
                        <p className="text-sm font-mono text-gray-300">
                          {practitioner.licenseId}
                        </p>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-semibold text-white">
                            {practitioner.cpdPoints}
                          </span>
                          <span className="text-xs text-gray-400">pts</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(practitioner.status)}`}
                        >
                          {practitioner.status.charAt(0).toUpperCase() +
                            practitioner.status.slice(1)}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => {
                              setSelectedItem(practitioner);
                              setShowDetailsModal(true);
                            }}
                            className="p-1.5 hover:bg-white/10 rounded-lg transition-all"
                            title="View Details"
                          >
                            <Search className="w-4 h-4 text-blue-400" />
                          </button>
                          <button
                            onClick={() =>
                              handleStatusToggle(
                                practitioner.id,
                                practitioner.status,
                                "practitioner",
                              )
                            }
                            className="p-1.5 hover:bg-white/10 rounded-lg transition-all"
                            title={
                              practitioner.status === "active"
                                ? "Deactivate"
                                : "Activate"
                            }
                          >
                            {practitioner.status === "active" ? (
                              <XCircle className="w-4 h-4 text-red-400" />
                            ) : (
                              <CheckCircle className="w-4 h-4 text-emerald-400" />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        <div className="p-5 border-t border-white/10 flex items-center justify-between">
          <p className="text-xs text-gray-400">
            Showing{" "}
            {activeTab === "exhibitors"
              ? filteredExhibitors.length
              : filteredPractitioners.length}{" "}
            of{" "}
            {activeTab === "exhibitors"
              ? exhibitors.length
              : practitioners.length}{" "}
            entries
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

      {/* Quick Allocation Summary */}
      <div className="relative bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-xl rounded-2xl p-5 border border-blue-500/30 overflow-hidden hover:border-blue-500/50 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5" />
        <div className="relative flex items-start justify-between flex-wrap gap-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-white mb-1">
                Booth Allocation Summary
              </p>
              <p className="text-xs text-gray-300">
                {stats.totalBoothsAllocated} booths allocated •{" "}
                {stats.totalExhibitors - stats.totalBoothsAllocated} exhibitors
                pending allocation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      {showDetailsModal && selectedItem && (
        <DetailsModal
          item={selectedItem}
          type={activeTab === "exhibitors" ? "exhibitor" : "practitioner"}
          onClose={() => {
            setShowDetailsModal(false);
            setSelectedItem(null);
          }}
        />
      )}

      {/* Add New Modal */}
      {showAddModal && (
        <AddNewModal
          type={activeTab}
          onClose={() => setShowAddModal(false)}
          onAdd={(newItem) => {
            if (activeTab === "exhibitors") {
              setExhibitors([
                { ...newItem, id: exhibitors.length + 1 },
                ...exhibitors,
              ]);
            } else {
              setPractitioners([
                { ...newItem, id: practitioners.length + 1 },
                ...practitioners,
              ]);
            }
            setShowAddModal(false);
          }}
        />
      )}
    </div>
  );
}

// Details Modal Component
const DetailsModal = ({ item, type, onClose }) => {
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
              {type === "exhibitor"
                ? "Exhibitor Details"
                : "Practitioner Details"}
            </h2>
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative p-6 space-y-4">
          {type === "exhibitor" ? (
            <>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mt-3">
                  {item.companyName}
                </h3>
                <p className="text-sm text-gray-400">{item.country}</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-sm text-gray-400">Contact Person</span>
                  <span className="text-sm text-white">
                    {item.contactPerson}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-sm text-gray-400">Email</span>
                  <span className="text-sm text-white">{item.email}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-sm text-gray-400">Phone</span>
                  <span className="text-sm text-white">{item.phone}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-sm text-gray-400">Booth Allocated</span>
                  <span className="text-sm font-mono text-white">
                    {item.boothAllocated || "Not assigned"}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-sm text-gray-400">Package</span>
                  <span className="text-sm text-white">{item.package}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-sm text-gray-400">Amount</span>
                  <span className="text-sm font-semibold text-white">
                    {item.amount}
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-sm text-gray-400">Join Date</span>
                  <span className="text-sm text-white">{item.joinDate}</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mt-3">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-400">{item.specialization}</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-sm text-gray-400">Email</span>
                  <span className="text-sm text-white">{item.email}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-sm text-gray-400">Phone</span>
                  <span className="text-sm text-white">{item.phone}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-sm text-gray-400">License ID</span>
                  <span className="text-sm font-mono text-white">
                    {item.licenseId}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-sm text-gray-400">Hospital</span>
                  <span className="text-sm text-white">{item.hospital}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-sm text-gray-400">CPD Points</span>
                  <span className="text-sm font-semibold text-white">
                    {item.cpdPoints} pts
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-sm text-gray-400">Events Attended</span>
                  <span className="text-sm text-white">
                    {item.eventsAttended}
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-sm text-gray-400">Join Date</span>
                  <span className="text-sm text-white">{item.joinDate}</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Add New Modal Component
const AddNewModal = ({ type, onClose, onAdd }) => {
  const [formData, setFormData] = useState(
    type === "exhibitors"
      ? {
          companyName: "",
          contactPerson: "",
          email: "",
          phone: "",
          country: "Saudi Arabia",
          package: "Standard",
          status: "active",
        }
      : {
          name: "",
          email: "",
          phone: "",
          specialization: "",
          licenseId: "",
          hospital: "",
          status: "active",
        },
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...formData, joinDate: new Date().toISOString().split("T")[0] });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl w-full max-w-2xl shadow-2xl border border-blue-500/20 animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">
        <div className="relative p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Add New {type === "exhibitors" ? "Exhibitor" : "Practitioner"}
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
          {type === "exhibitors" ? (
            <>
              {/* Row 1: Company Name, Contact Person, Email */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({ ...formData, companyName: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    Contact Person
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contactPerson: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
                  />
                </div>
              </div>

              {/* Row 2: Phone, Country, Package */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    Package
                  </label>
                  <select
                    value={formData.package}
                    onChange={(e) =>
                      setFormData({ ...formData, package: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-slate-800 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
                  >
                    <option value="Standard">Standard - $2,500</option>
                    <option value="Premium">Premium - $5,000</option>
                    <option value="Corner">Corner - $3,500</option>
                  </select>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Row 1: Full Name, Email, Phone */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
                  />
                </div>
              </div>

              {/* Row 2: Specialization, License ID, Hospital */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    Specialization
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.specialization}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        specialization: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    License ID
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.licenseId}
                    onChange={(e) =>
                      setFormData({ ...formData, licenseId: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    Hospital/Clinic
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.hospital}
                    onChange={(e) =>
                      setFormData({ ...formData, hospital: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
                  />
                </div>
              </div>
            </>
          )}

          {/* Row 3: Status - Full width or 1/3 width */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
                className="w-full px-4 py-2 bg-slate-800 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          {/* Buttons Row */}
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
              Add {type === "exhibitors" ? "Exhibitor" : "Practitioner"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
