"use client";

import { useState } from "react";
import {
  Shield,
  Activity,
  Search,
  Filter,
  Eye,
  Download,
  RefreshCw,
  ChevronDown,
  User,
  LogIn,
  LogOut,
  Settings,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  Clock,
  Server,
  Database,
  Lock,
  Key,
  FileText,
  Calendar,
  MapPin,
  CreditCard,
  Users,
  Building2,
  Globe,
  Terminal,
  ChevronRight,
  X,
} from "lucide-react";

export default function SecurityAuditLogs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [actionFilter, setActionFilter] = useState("all");
  const [severityFilter, setSeverityFilter] = useState("all");
  const [userFilter, setUserFilter] = useState("all");
  const [selectedLog, setSelectedLog] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [dateRange, setDateRange] = useState("today");

  // Audit logs data
  const [auditLogs, setAuditLogs] = useState([
    {
      id: 1,
      timestamp: "2024-03-15 09:32:45",
      user: {
        name: "Admin User",
        email: "admin@medconf.com",
        role: "super_admin",
        ip: "192.168.1.101",
      },
      action: "user_login",
      actionType: "authentication",
      severity: "info",
      resource: "Authentication",
      resourceId: "user_123",
      details: "Successful login from new device",
      userAgent: "Chrome 122.0 / Windows 11",
      location: "Riyadh, SA",
    },
    {
      id: 2,
      timestamp: "2024-03-15 09:28:12",
      user: {
        name: "Admin User",
        email: "admin@medconf.com",
        role: "super_admin",
        ip: "192.168.1.101",
      },
      action: "booking_approved",
      actionType: "booking",
      severity: "warning",
      resource: "Booking",
      resourceId: "BK-1024",
      details: "Approved booth booking for MedTech Solutions - Booth A12",
      oldValue: "pending",
      newValue: "confirmed",
    },
    {
      id: 3,
      timestamp: "2024-03-15 08:45:22",
      user: {
        name: "Sarah Al-Omari",
        email: "sarah@medtech.com",
        role: "exhibitor",
        ip: "192.168.1.156",
      },
      action: "profile_updated",
      actionType: "user",
      severity: "info",
      resource: "User Profile",
      resourceId: "user_456",
      details: "Updated company information and contact details",
      changes: ["company_name", "phone_number"],
    },
    {
      id: 4,
      timestamp: "2024-03-14 22:15:03",
      user: {
        name: "System",
        email: "system@medconf.com",
        role: "system",
        ip: "127.0.0.1",
      },
      action: "backup_completed",
      actionType: "system",
      severity: "info",
      resource: "Database Backup",
      resourceId: "backup_0314",
      details: "Automated system backup completed successfully",
      size: "2.4 GB",
      duration: "4m 32s",
    },
    {
      id: 5,
      timestamp: "2024-03-14 18:30:15",
      user: {
        name: "Admin User",
        email: "admin@medconf.com",
        role: "super_admin",
        ip: "192.168.1.101",
      },
      action: "user_role_changed",
      actionType: "permission",
      severity: "high",
      resource: "User Role",
      resourceId: "user_789",
      details: "Changed user role from exhibitor to sponsor",
      oldValue: "exhibitor",
      newValue: "sponsor",
    },
    {
      id: 6,
      timestamp: "2024-03-14 15:20:44",
      user: {
        name: "Omar Al-Jabri",
        email: "omar@healthai.com",
        role: "exhibitor",
        ip: "192.168.1.234",
      },
      action: "booking_request",
      actionType: "booking",
      severity: "info",
      resource: "Booking",
      resourceId: "BK-1025",
      details: "Submitted new booth booking request - Booth B07",
      amount: "$3,500",
    },
    {
      id: 7,
      timestamp: "2024-03-14 11:45:33",
      user: {
        name: "Admin User",
        email: "admin@medconf.com",
        role: "super_admin",
        ip: "192.168.1.101",
      },
      action: "payment_refunded",
      actionType: "payment",
      severity: "warning",
      resource: "Payment",
      resourceId: "PAY-2024-001",
      details: "Processed refund for cancelled booking BK-1021",
      amount: "$2,800",
    },
    {
      id: 8,
      timestamp: "2024-03-13 20:10:22",
      user: {
        name: "System",
        email: "system@medconf.com",
        role: "system",
        ip: "127.0.0.1",
      },
      action: "failed_login_attempt",
      actionType: "security",
      severity: "critical",
      resource: "Authentication",
      resourceId: "user_999",
      details: "Multiple failed login attempts detected from IP 45.67.89.123",
      attempts: 5,
      blocked: true,
    },
    {
      id: 9,
      timestamp: "2024-03-13 14:22:18",
      user: {
        name: "Admin User",
        email: "admin@medconf.com",
        role: "super_admin",
        ip: "192.168.1.101",
      },
      action: "settings_updated",
      actionType: "configuration",
      severity: "medium",
      resource: "System Settings",
      resourceId: "config_general",
      details: "Updated event registration deadline and pricing configuration",
      changes: ["registration_deadline", "early_bird_discount"],
    },
    {
      id: 10,
      timestamp: "2024-03-13 09:05:11",
      user: {
        name: "Fatima Al-Zahrani",
        email: "fatima@clinic.com",
        role: "healthcare_practitioner",
        ip: "192.168.1.189",
      },
      action: "document_uploaded",
      actionType: "document",
      severity: "info",
      resource: "Document",
      resourceId: "doc_567",
      details: "Uploaded medical license verification document",
      fileSize: "2.1 MB",
      fileType: "PDF",
    },
  ]);

  const actionCategories = [
    { value: "all", label: "All Actions", icon: Activity },
    { value: "authentication", label: "Authentication", icon: LogIn },
    { value: "booking", label: "Bookings", icon: Calendar },
    { value: "user", label: "User Management", icon: Users },
    { value: "payment", label: "Payments", icon: CreditCard },
    { value: "permission", label: "Permissions", icon: Lock },
    { value: "configuration", label: "Configuration", icon: Settings },
    { value: "system", label: "System", icon: Server },
    { value: "security", label: "Security", icon: Shield },
    { value: "document", label: "Documents", icon: FileText },
  ];

  const severityLevels = [
    { value: "all", label: "All Severities", color: "gray" },
    { value: "info", label: "Info", color: "blue", icon: Info },
    { value: "warning", label: "Warning", color: "amber", icon: AlertTriangle },
    { value: "medium", label: "Medium", color: "orange", icon: AlertTriangle },
    { value: "high", label: "High", color: "red", icon: AlertTriangle },
    { value: "critical", label: "Critical", color: "red", icon: XCircle },
  ];

  const usersList = [
    { value: "all", label: "All Users" },
    { value: "admin", label: "Admin User" },
    { value: "sarah", label: "Sarah Al-Omari" },
    { value: "omar", label: "Omar Al-Jabri" },
    { value: "fatima", label: "Fatima Al-Zahrani" },
  ];

  const getSeverityBadge = (severity) => {
    switch (severity) {
      case "info":
        return "bg-blue-500/20 text-blue-400 border border-blue-500/30";
      case "warning":
        return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
      case "medium":
        return "bg-orange-500/20 text-orange-400 border border-orange-500/30";
      case "high":
        return "bg-red-500/20 text-red-400 border border-red-500/30";
      case "critical":
        return "bg-red-500/30 text-red-300 border border-red-500/40 animate-pulse";
      default:
        return "bg-white/10 text-gray-300 border border-white/10";
    }
  };

  const getActionIcon = (actionType) => {
    switch (actionType) {
      case "authentication":
        return <LogIn className="w-4 h-4" />;
      case "booking":
        return <Calendar className="w-4 h-4" />;
      case "user":
        return <Users className="w-4 h-4" />;
      case "payment":
        return <CreditCard className="w-4 h-4" />;
      case "permission":
        return <Lock className="w-4 h-4" />;
      case "configuration":
        return <Settings className="w-4 h-4" />;
      case "system":
        return <Server className="w-4 h-4" />;
      case "security":
        return <Shield className="w-4 h-4" />;
      case "document":
        return <FileText className="w-4 h-4" />;
      default:
        return <Activity className="w-4 h-4" />;
    }
  };

  const filteredLogs = auditLogs.filter((log) => {
    const matchesSearch = 
      log.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.details.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAction = actionFilter === "all" || log.actionType === actionFilter;
    const matchesSeverity = severityFilter === "all" || log.severity === severityFilter;
    const matchesUser = userFilter === "all" || 
      (userFilter === "admin" && log.user.role === "super_admin") ||
      (userFilter === "sarah" && log.user.name === "Sarah Al-Omari") ||
      (userFilter === "omar" && log.user.name === "Omar Al-Jabri") ||
      (userFilter === "fatima" && log.user.name === "Fatima Al-Zahrani");
    return matchesSearch && matchesAction && matchesSeverity && matchesUser;
  });

  const stats = {
    total: auditLogs.length,
    critical: auditLogs.filter((l) => l.severity === "critical").length,
    high: auditLogs.filter((l) => l.severity === "high").length,
    warnings: auditLogs.filter((l) => l.severity === "warning").length,
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">
            Security & Audit Logs
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Track admin activities and system security events
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="relative px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span>Export Logs</span>
          </button>
          <button className="p-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all">
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {[
          { label: "Total Events", value: stats.total, icon: Activity, color: "indigo" },
          { label: "Critical", value: stats.critical, icon: XCircle, color: "red" },
          { label: "High Severity", value: stats.high, icon: AlertTriangle, color: "orange" },
          { label: "Warnings", value: stats.warnings, icon: AlertTriangle, color: "amber" },
        ].map((stat, idx) => (
          <div key={idx} className="relative bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
              </div>
              <div className={`p-2 bg-${stat.color}-500/20 rounded-lg border border-${stat.color}-500/30`}>
                <stat.icon className={`w-4 h-4 text-${stat.color}-400`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
        <div className="p-5 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search logs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-indigo-500/50 transition-all"
              />
            </div>

            {/* Action Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                value={actionFilter}
                onChange={(e) => setActionFilter(e.target.value)}
                className="w-full pl-10 pr-8 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50 appearance-none cursor-pointer"
              >
                {actionCategories.map((cat) => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            {/* Severity Filter */}
            <div className="relative">
              <AlertTriangle className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                value={severityFilter}
                onChange={(e) => setSeverityFilter(e.target.value)}
                className="w-full pl-10 pr-8 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50 appearance-none cursor-pointer"
              >
                {severityLevels.map((level) => (
                  <option key={level.value} value={level.value}>{level.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            {/* User Filter */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                value={userFilter}
                onChange={(e) => setUserFilter(e.target.value)}
                className="w-full pl-10 pr-8 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50 appearance-none cursor-pointer"
              >
                {usersList.map((user) => (
                  <option key={user.value} value={user.value}>{user.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Date Range Quick Select */}
          <div className="flex gap-2 mt-4">
            {["today", "yesterday", "week", "month"].map((range) => (
              <button
                key={range}
                onClick={() => setDateRange(range)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-300 ${
                  dateRange === range
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30"
                    : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10"
                }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Logs Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-white/10 bg-white/5">
              <tr>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Timestamp</th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Action</th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Resource</th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Severity</th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Details</th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.length === 0 ? (
                <tr>
                  <td colSpan="7" className="p-12 text-center">
                    <Shield className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                    <p className="text-gray-400">No logs found</p>
                   </td>
                 </tr>
              ) : (
                filteredLogs.map((log) => (
                  <tr key={log.id} className="border-b border-white/5 hover:bg-white/5 transition-all duration-300">
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gray-500" />
                        <span className="text-xs text-gray-300">{log.timestamp}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <p className="text-sm font-medium text-white">{log.user.name}</p>
                        <p className="text-xs text-gray-400">{log.user.role.replace("_", " ")}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="p-1 bg-white/10 rounded-lg">
                          {getActionIcon(log.actionType)}
                        </div>
                        <span className="text-sm text-gray-300 capitalize">
                          {log.action.replace(/_/g, " ")}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <p className="text-sm text-gray-300">{log.resource}</p>
                        {log.resourceId && (
                          <p className="text-xs text-gray-500">{log.resourceId}</p>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getSeverityBadge(log.severity)}`}>
                        {log.severity.charAt(0).toUpperCase() + log.severity.slice(1)}
                      </span>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-gray-300 max-w-md truncate">{log.details}</p>
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => {
                          setSelectedLog(log);
                          setShowDetailsModal(true);
                        }}
                        className="p-1.5 hover:bg-white/10 rounded-lg transition-all"
                        title="View Details"
                      >
                        <Search className="w-4 h-4 text-indigo-400" />
                      </button>
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
            Showing {filteredLogs.length} of {auditLogs.length} logs
          </p>
          <div className="flex gap-1">
            <button className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 hover:bg-white/10 transition-all">Previous</button>
            <button className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-xs text-white shadow-lg shadow-indigo-500/30">1</button>
            <button className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 hover:bg-white/10 transition-all">2</button>
            <button className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 hover:bg-white/10 transition-all">3</button>
            <button className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 hover:bg-white/10 transition-all">Next</button>
          </div>
        </div>
      </div>

      {/* Security Overview Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Security Events */}
        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
          <div className="relative p-5 border-b border-white/10">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <Shield className="w-4 h-4 text-red-400" />
              Recent Security Events
            </h3>
          </div>
          <div className="relative p-5 space-y-3">
            {auditLogs.filter(l => l.severity === "critical" || l.severity === "high").slice(0, 3).map((log) => (
              <div key={log.id} className="p-3 bg-red-500/10 rounded-xl border border-red-500/30">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-white">{log.action.replace(/_/g, " ")}</p>
                    <p className="text-xs text-gray-300 mt-1">{log.details}</p>
                    <p className="text-xs text-red-400 mt-2">{log.timestamp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Session & IP Info */}
        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
          <div className="relative p-5 border-b border-white/10">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <Globe className="w-4 h-4 text-indigo-400" />
              Active Sessions & Locations
            </h3>
          </div>
          <div className="relative p-5 space-y-3">
            {[
              { user: "Admin User", ip: "192.168.1.101", location: "Riyadh, SA", device: "Chrome / Windows", lastActive: "Now" },
              { user: "Sarah Al-Omari", ip: "192.168.1.156", location: "Jeddah, SA", device: "Firefox / Mac", lastActive: "5 min ago" },
              { user: "Omar Al-Jabri", ip: "192.168.1.234", location: "Dubai, UAE", device: "Safari / iPhone", lastActive: "15 min ago" },
            ].map((session, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <div>
                    <p className="text-sm font-medium text-white">{session.user}</p>
                    <p className="text-xs text-gray-400">{session.ip} • {session.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">{session.device}</p>
                  <p className="text-xs text-emerald-400">{session.lastActive}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Log Details Modal */}
      {showDetailsModal && selectedLog && (
        <LogDetailsModal
          log={selectedLog}
          onClose={() => {
            setShowDetailsModal(false);
            setSelectedLog(null);
          }}
        />
      )}
    </div>
  );
}

// Log Details Modal Component
const LogDetailsModal = ({ log, onClose }) => {
  const severityBadge = (() => {
    switch (log.severity) {
      case "info": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "warning": return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      case "medium": return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "high": return "bg-red-500/20 text-red-400 border-red-500/30";
      case "critical": return "bg-red-500/30 text-red-300 border-red-500/40";
      default: return "bg-white/10 text-gray-300 border-white/10";
    }
  })();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl w-full max-w-2xl shadow-2xl border border-white/20 animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="relative p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">
              Log Details
            </h2>
            <button onClick={onClose} className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-all">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative p-6 space-y-4">
          {/* Header Info */}
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
            <div>
              <p className="text-xs text-gray-400">Event ID</p>
              <p className="text-sm font-mono text-white">#{log.id}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Timestamp</p>
              <p className="text-sm text-white">{log.timestamp}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Severity</p>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${severityBadge}`}>
                {log.severity.charAt(0).toUpperCase() + log.severity.slice(1)}
              </span>
            </div>
          </div>

          {/* User Info */}
          <div className="p-4 bg-white/5 rounded-xl border border-white/10">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2 mb-3">
              <User className="w-4 h-4 text-indigo-400" />
              User Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-400">Name</p>
                <p className="text-sm text-white">{log.user.name}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Email</p>
                <p className="text-sm text-white">{log.user.email}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Role</p>
                <p className="text-sm text-white capitalize">{log.user.role.replace("_", " ")}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">IP Address</p>
                <p className="text-sm font-mono text-white">{log.user.ip}</p>
              </div>
            </div>
          </div>

          {/* Action Details */}
          <div className="p-4 bg-white/5 rounded-xl border border-white/10">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2 mb-3">
              <Activity className="w-4 h-4 text-purple-400" />
              Action Details
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-400">Action Type</p>
                <p className="text-sm text-white capitalize">{log.actionType}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Action</p>
                <p className="text-sm text-white capitalize">{log.action.replace(/_/g, " ")}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Resource</p>
                <p className="text-sm text-white">{log.resource}</p>
              </div>
              {log.resourceId && (
                <div>
                  <p className="text-xs text-gray-400">Resource ID</p>
                  <p className="text-sm font-mono text-white">{log.resourceId}</p>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="p-4 bg-white/5 rounded-xl border border-white/10">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2 mb-3">
              <FileText className="w-4 h-4 text-cyan-400" />
              Description
            </h3>
            <p className="text-sm text-gray-300">{log.details}</p>
          </div>

          {/* Additional Info */}
          {log.userAgent && (
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2 mb-3">
                <Terminal className="w-4 h-4 text-amber-400" />
              Technical Details
              </h3>
              <div className="space-y-2">
                <div>
                  <p className="text-xs text-gray-400">User Agent</p>
                  <p className="text-xs font-mono text-gray-300 break-all">{log.userAgent}</p>
                </div>
                {log.location && (
                  <div>
                    <p className="text-xs text-gray-400">Location</p>
                    <p className="text-xs text-white">{log.location}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Old/New Values if present */}
          {(log.oldValue || log.newValue) && (
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2 mb-3">
                <RefreshCw className="w-4 h-4 text-emerald-400" />
                Value Changes
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {log.oldValue && (
                  <div>
                    <p className="text-xs text-gray-400">Previous Value</p>
                    <p className="text-sm text-red-400">{log.oldValue}</p>
                  </div>
                )}
                {log.newValue && (
                  <div>
                    <p className="text-xs text-gray-400">New Value</p>
                    <p className="text-sm text-emerald-400">{log.newValue}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};