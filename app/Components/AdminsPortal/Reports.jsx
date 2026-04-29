"use client";

import { useState } from "react";
import {
  FileText,
  Download,
  Calendar,
  Filter,
  TrendingUp,
  Users,
  Building2,
  CreditCard,
  DollarSign,
  BarChart3,
  PieChart,
  LineChart,
  Printer,
  Mail,
  ChevronDown,
  Search,
  Eye,
  Clock,
  CheckCircle,
  XCircle,
  RefreshCw,
  FileBarChart,
  FileSpreadsheet,
  FileImage,
} from "lucide-react";

export default function Reports() {
  const [reportType, setReportType] = useState("bookings");
  const [dateRange, setDateRange] = useState("month");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Report types
  const reportTypes = [
    { id: "bookings", name: "Bookings Report", icon: FileText },
    { id: "revenue", name: "Revenue Report", icon: DollarSign },
    { id: "exhibitors", name: "Exhibitors Report", icon: Building2 },
    { id: "sponsors", name: "Sponsors Report", icon: Users },
    { id: "users", name: "Users Activity Report", icon: TrendingUp },
    { id: "floorplan", name: "Floor Plan Report", icon: BarChart3 },
  ];

  // Saved reports
  const [savedReports, setSavedReports] = useState([
    {
      id: 1,
      name: "Q1 2024 Bookings Summary",
      type: "bookings",
      dateGenerated: "2024-03-15",
      format: "PDF",
      size: "1.2 MB",
      status: "ready",
    },
    {
      id: 2,
      name: "February 2024 Revenue Report",
      type: "revenue",
      dateGenerated: "2024-03-01",
      format: "Excel",
      size: "856 KB",
      status: "ready",
    },
    {
      id: 3,
      name: "Exhibitor Performance - Hall A",
      type: "exhibitors",
      dateGenerated: "2024-02-28",
      format: "PDF",
      size: "2.1 MB",
      status: "ready",
    },
    {
      id: 4,
      name: "Sponsor Package Utilization",
      type: "sponsors",
      dateGenerated: "2024-02-20",
      format: "Excel",
      size: "654 KB",
      status: "ready",
    },
    {
      id: 5,
      name: "User Registration Trends",
      type: "users",
      dateGenerated: "2024-02-15",
      format: "PDF",
      size: "1.5 MB",
      status: "ready",
    },
  ]);

  // Preview data based on report type
  const getPreviewData = () => {
    switch (reportType) {
      case "bookings":
        return {
          title: "Bookings Report Preview",
          summary: "Total Bookings: 1,847 | Confirmed: 1,423 | Pending: 248 | Cancelled: 176",
          chartData: [320, 450, 580, 420, 390, 480, 520],
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        };
      case "revenue":
        return {
          title: "Revenue Report Preview",
          summary: "Total Revenue: $2.4M | Average per Booking: $1,299 | Growth: +18%",
          chartData: [280, 420, 510, 390, 450, 520, 580],
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        };
      case "exhibitors":
        return {
          title: "Exhibitors Report Preview",
          summary: "Total Exhibitors: 248 | New: 45 | Returning: 203 | Industries: 12",
          chartData: [42, 38, 45, 52, 48, 55, 62],
          labels: ["Healthcare", "Tech", "Pharma", "Diagnostics", "Wellness", "Devices", "Biotech"],
        };
      case "sponsors":
        return {
          title: "Sponsors Report Preview",
          summary: "Total Sponsors: 56 | Platinum: 8 | Gold: 15 | Silver: 33",
          chartData: [28, 32, 25, 18, 22, 30, 35],
          labels: ["Platinum", "Gold", "Silver", "Bronze", "Media", "Community", "Startup"],
        };
      case "users":
        return {
          title: "Users Activity Report Preview",
          summary: "Total Users: 1,247 | Active: 892 | New This Month: 156",
          chartData: [85, 92, 78, 95, 88, 102, 110],
          labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7"],
        };
      default:
        return {
          title: "Floor Plan Report Preview",
          summary: "Total Booths: 156 | Occupied: 116 | Available: 40",
          chartData: [48, 42, 36, 30],
          labels: ["Hall A", "Hall B", "Hall C", "Hall D"],
        };
    }
  };

  const handleGenerateReport = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowPreview(true);
    }, 2000);
  };

  const handleDownload = (format) => {
    alert(`Downloading ${reportType} report as ${format}...`);
  };

  const handleDownloadSaved = (report) => {
    alert(`Downloading ${report.name}...`);
  };

  const previewData = getPreviewData();

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Reports
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Generate and download system reports
          </p>
        </div>
        <button className="relative px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
          <RefreshCw className="w-4 h-4" />
          <span>Sync Data</span>
        </button>
      </div>

      {/* Report Generation Card */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-300">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="relative p-6 border-b border-white/10">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <FileBarChart className="w-5 h-5 text-blue-400" />
            Generate New Report
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Select report type, date range, and filters
          </p>
        </div>

        <div className="relative p-6">
          {/* Report Type Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-3">Report Type</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {reportTypes.map((type) => {
                const Icon = type.icon;
                const isActive = reportType === type.id;
                return (
                  <button
                    key={type.id}
                    onClick={() => setReportType(type.id)}
                    className={`p-3 rounded-xl border transition-all duration-300 ${
                      isActive
                        ? "bg-blue-500/20 border-blue-500/30 shadow-lg shadow-blue-500/20"
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <Icon className={`w-5 h-5 mx-auto mb-1 ${isActive ? "text-blue-400" : "text-gray-400"}`} />
                    <p className={`text-xs font-medium ${isActive ? "text-blue-400" : "text-gray-300"}`}>
                      {type.name}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Date Range Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Date Range</label>
              <div className="flex gap-2 flex-wrap">
                {["day", "week", "month", "quarter", "year"].map((range) => (
                  <button
                    key={range}
                    onClick={() => setDateRange(range)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                      dateRange === range
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                        : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10"
                    }`}
                  >
                    {range.charAt(0).toUpperCase() + range.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-400 mb-1">Start Date</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">End Date</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Additional Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Event</label>
              <select className="w-full px-3 py-2 bg-slate-800 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 transition-all">
                <option>All Events</option>
                <option>Global Health Exhibition 2026</option>
                <option>Cardiology Summit 2026</option>
                <option>Digital Health Forum 2026</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Status</label>
              <select className="w-full px-3 py-2 bg-slate-800 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 transition-all">
                <option>All Status</option>
                <option>Confirmed</option>
                <option>Pending</option>
                <option>Cancelled</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Format</label>
              <select className="w-full px-3 py-2 bg-slate-800 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 transition-all">
                <option>PDF</option>
                <option>Excel (.xlsx)</option>
                <option>CSV</option>
                <option>JSON</option>
              </select>
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerateReport}
            disabled={isGenerating}
            className="relative w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-medium overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 disabled:opacity-50"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <span className="relative flex items-center justify-center gap-2">
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Generating Report...
                </>
              ) : (
                <>
                  <FileText className="w-4 h-4" />
                  Generate Report
                </>
              )}
            </span>
          </button>
        </div>
      </div>

      {/* Report Preview */}
      {showPreview && (
        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-300 animate-in fade-in duration-300">
          <div className="relative p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <Search className="w-5 h-5 text-blue-400" />
                Report Preview
              </h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDownload("PDF")}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300 hover:bg-white/10 transition-all flex items-center gap-1"
                >
                  <FileText className="w-3 h-3" />
                  PDF
                </button>
                <button
                  onClick={() => handleDownload("Excel")}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300 hover:bg-white/10 transition-all flex items-center gap-1"
                >
                  <FileSpreadsheet className="w-3 h-3" />
                  Excel
                </button>
                <button
                  onClick={() => setShowPreview(false)}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300 hover:bg-white/10 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>

          <div className="relative p-6">
            {/* Report Header */}
            <div className="mb-6 text-center">
              <h3 className="text-xl font-bold text-white">{previewData.title}</h3>
              <p className="text-sm text-gray-400 mt-1">
                Generated on {new Date().toLocaleDateString()} | {dateRange.toUpperCase()} Range
              </p>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-6">
              {previewData.summary.split(" | ").map((stat, idx) => {
                const [label, value] = stat.split(": ");
                return (
                  <div key={idx} className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-xs text-gray-400">{label}</p>
                    <p className="text-lg font-bold text-white">{value}</p>
                  </div>
                );
              })}
            </div>

            {/* Sample Data Table */}
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-white/10">
                  <tr>
                    <th className="p-3 text-left text-xs text-gray-400">Category</th>
                    <th className="p-3 text-right text-xs text-gray-400">Count</th>
                    <th className="p-3 text-right text-xs text-gray-400">Percentage</th>
                    <th className="p-3 text-right text-xs text-gray-400">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {previewData.labels.map((label, idx) => (
                    <tr key={idx} className="border-b border-white/5">
                      <td className="p-3 text-white">{label}</td>
                      <td className="p-3 text-right text-gray-300">{previewData.chartData[idx]}</td>
                      <td className="p-3 text-right text-gray-300">
                        {((previewData.chartData[idx] / previewData.chartData.reduce((a, b) => a + b, 0)) * 100).toFixed(1)}%
                      </td>
                      <td className="p-3 text-right">
                        <span className="text-emerald-400">+{Math.floor(Math.random() * 20)}%</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Export Actions */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-3 justify-end">
              <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:bg-white/10 transition-all flex items-center gap-2">
                <Printer className="w-4 h-4" />
                Print
              </button>
              <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:bg-white/10 transition-all flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Report
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Saved Reports */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-300">
        <div className="relative p-6 border-b border-white/10">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-400" />
            Saved Reports
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Previously generated reports
          </p>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-white/10 bg-white/5">
              <tr>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Report Name</th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Date Generated</th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Format</th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Size</th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {savedReports.map((report) => {
                const reportTypeIcon = reportTypes.find((t) => t.id === report.type)?.icon || FileText;
                const Icon = reportTypeIcon;
                return (
                  <tr key={report.id} className="border-b border-white/5 hover:bg-white/5 transition-all duration-300">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-medium text-white">{report.name}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-xs text-gray-300 capitalize">{report.type}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-gray-300">{report.dateGenerated}</span>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        report.format === "PDF" 
                          ? "bg-red-500/20 text-red-400 border border-red-500/30"
                          : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      }`}>
                        {report.format}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-gray-400">{report.size}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleDownloadSaved(report)}
                          className="p-1.5 hover:bg-white/10 rounded-lg transition-all"
                          title="Download"
                        >
                          <Download className="w-4 h-4 text-blue-400" />
                        </button>
                        <button
                          className="p-1.5 hover:bg-white/10 rounded-lg transition-all"
                          title="View Details"
                        >
                          <Search className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-5 border-t border-white/10 flex items-center justify-between">
          <p className="text-xs text-gray-400">
            Showing {savedReports.length} of {savedReports.length} reports
          </p>
          <div className="flex gap-1">
            <button className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 hover:bg-white/10 transition-all">Previous</button>
            <button className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-xs text-white shadow-lg shadow-blue-500/30">1</button>
            <button className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 hover:bg-white/10 transition-all">Next</button>
          </div>
        </div>
      </div>

      {/* Schedule Reports Card */}
      <div className="relative bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-xl rounded-2xl p-5 border border-blue-500/30 overflow-hidden hover:border-blue-500/50 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5" />
        <div className="relative flex items-start gap-3">
          <Calendar className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-white mb-1">Schedule Automated Reports</p>
            <p className="text-xs text-gray-300">
              Set up recurring reports to be sent to your email automatically on a daily, weekly, or monthly basis.
            </p>
            <button className="mt-3 px-4 py-1.5 bg-white/10 border border-white/20 rounded-lg text-xs text-gray-300 hover:bg-white/20 transition-all">
              Configure Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}