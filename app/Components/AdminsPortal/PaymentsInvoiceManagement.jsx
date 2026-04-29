"use client";

import { useState } from "react";
import {
  CreditCard,
  Plus,
  Search,
  Filter,
  ChevronDown,
  Eye,
  Download,
  Printer,
  Mail,
  CheckCircle,
  XCircle,
  Clock,
  RefreshCw,
  DollarSign,
  Calendar,
  Building2,
  User,
  FileText,
  Receipt,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  Ban,
  Send,
  MoreVertical,
  X,
  Edit,
  Trash2,
} from "lucide-react";

export default function PaymentsInvoiceManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [dateRange, setDateRange] = useState("month");

  // Transactions data
  const [transactions, setTransactions] = useState([
    {
      id: "INV-2024-001",
      invoiceNo: "INV-2024-001",
      type: "invoice",
      customer: {
        name: "MedTech Solutions",
        type: "exhibitor",
        email: "sarah@medtech.com",
      },
      amount: 5000,
      status: "paid",
      paymentMethod: "bank_transfer",
      date: "2024-03-15",
      dueDate: "2024-03-30",
      description: "Booth A12 - Premium Package",
      items: [
        {
          description: "Booth Rental - A12",
          quantity: 1,
          unitPrice: 3500,
          total: 3500,
        },
        {
          description: "Premium Package Upgrade",
          quantity: 1,
          unitPrice: 1500,
          total: 1500,
        },
      ],
      paymentDate: "2024-03-16",
      transactionId: "TXN-123456",
    },
    {
      id: "INV-2024-002",
      invoiceNo: "INV-2024-002",
      type: "invoice",
      customer: {
        name: "PharmaCorp Intl.",
        type: "exhibitor",
        email: "khalid@pharmacorp.com",
      },
      amount: 7500,
      status: "paid",
      paymentMethod: "credit_card",
      date: "2024-03-10",
      dueDate: "2024-03-25",
      description: "Booth C21 - Corner Package",
      items: [
        {
          description: "Booth Rental - C21",
          quantity: 1,
          unitPrice: 5500,
          total: 5500,
        },
        {
          description: "Corner Package Upgrade",
          quantity: 1,
          unitPrice: 2000,
          total: 2000,
        },
      ],
      paymentDate: "2024-03-12",
      transactionId: "TXN-123457",
    },
    {
      id: "INV-2024-003",
      invoiceNo: "INV-2024-003",
      type: "invoice",
      customer: {
        name: "Global Health Co.",
        type: "sponsor",
        email: "ahmed@globalhealth.com",
      },
      amount: 150000,
      status: "pending",
      paymentMethod: "bank_transfer",
      date: "2024-03-05",
      dueDate: "2024-04-05",
      description: "Platinum Sponsorship Package",
      items: [
        {
          description: "Platinum Plus Sponsorship",
          quantity: 1,
          unitPrice: 150000,
          total: 150000,
        },
      ],
      paymentDate: null,
      transactionId: null,
    },
    {
      id: "INV-2024-004",
      invoiceNo: "INV-2024-004",
      type: "invoice",
      customer: {
        name: "HealthAI Systems",
        type: "exhibitor",
        email: "omar@healthai.com",
      },
      amount: 3500,
      status: "overdue",
      paymentMethod: "credit_card",
      date: "2024-02-20",
      dueDate: "2024-03-06",
      description: "Booth B07 - Standard Package",
      items: [
        {
          description: "Booth Rental - B07",
          quantity: 1,
          unitPrice: 2500,
          total: 2500,
        },
        {
          description: "Standard Package",
          quantity: 1,
          unitPrice: 1000,
          total: 1000,
        },
      ],
      paymentDate: null,
      transactionId: null,
    },
    {
      id: "INV-2024-005",
      invoiceNo: "INV-2024-005",
      type: "receipt",
      customer: {
        name: "Siemens Healthineers",
        type: "sponsor",
        email: "thomas@siemens.com",
      },
      amount: 200000,
      status: "paid",
      paymentMethod: "bank_transfer",
      date: "2024-03-01",
      dueDate: "2024-03-15",
      description: "Platinum Premier Sponsorship",
      items: [
        {
          description: "Platinum Premier Sponsorship",
          quantity: 1,
          unitPrice: 200000,
          total: 200000,
        },
      ],
      paymentDate: "2024-03-02",
      transactionId: "TXN-123458",
    },
    {
      id: "PAY-2024-001",
      invoiceNo: null,
      type: "payment",
      customer: {
        name: "Wellness Global",
        type: "exhibitor",
        email: "nora@wellnessglobal.com",
      },
      amount: 3200,
      status: "completed",
      paymentMethod: "bank_transfer",
      date: "2024-03-14",
      description: "Partial payment for Booth E09",
      paymentDate: "2024-03-14",
      transactionId: "TXN-123459",
    },
    {
      id: "REF-2024-001",
      invoiceNo: "INV-2024-004",
      type: "refund",
      customer: {
        name: "HealthAI Systems",
        type: "exhibitor",
        email: "omar@healthai.com",
      },
      amount: 3500,
      status: "completed",
      paymentMethod: "bank_transfer",
      date: "2024-03-12",
      description: "Full refund for cancelled booking",
      paymentDate: "2024-03-12",
      transactionId: "TXN-123460",
    },
  ]);

  const statusOptions = [
    { value: "all", label: "All Status", color: "gray" },
    { value: "paid", label: "Paid", color: "emerald", icon: CheckCircle },
    { value: "pending", label: "Pending", color: "amber", icon: Clock },
    { value: "overdue", label: "Overdue", color: "red", icon: AlertCircle },
    {
      value: "completed",
      label: "Completed",
      color: "emerald",
      icon: CheckCircle,
    },
  ];

  const typeOptions = [
    { value: "all", label: "All Types" },
    { value: "invoice", label: "Invoices", icon: FileText },
    { value: "receipt", label: "Receipts", icon: Receipt },
    { value: "payment", label: "Payments", icon: CreditCard },
    { value: "refund", label: "Refunds", icon: Ban },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "paid":
      case "completed":
        return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
      case "pending":
        return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
      case "overdue":
        return "bg-red-500/20 text-red-400 border border-red-500/30";
      default:
        return "bg-white/10 text-gray-300 border border-white/10";
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "invoice":
        return <FileText className="w-4 h-4 text-blue-400" />;
      case "receipt":
        return <Receipt className="w-4 h-4 text-blue-400" />;
      case "payment":
        return <CreditCard className="w-4 h-4 text-blue-400" />;
      case "refund":
        return <Ban className="w-4 h-4 text-blue-400" />;
      default:
        return <FileText className="w-4 h-4 text-gray-400" />;
    }
  };

  const getPaymentMethodBadge = (method) => {
    switch (method) {
      case "bank_transfer":
        return "bg-blue-500/20 text-blue-400 border border-blue-500/30";
      case "credit_card":
        return "bg-purple-500/20 text-purple-400 border border-purple-500/30";
      default:
        return "bg-white/10 text-gray-300 border border-white/10";
    }
  };

  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch =
      t.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || t.status === statusFilter;
    const matchesType = typeFilter === "all" || t.type === typeFilter;
    return matchesSearch && matchesStatus && matchesType;
  });

  const stats = {
    totalRevenue: transactions
      .filter((t) => t.type === "invoice" || t.type === "payment")
      .filter((t) => t.status === "paid" || t.status === "completed")
      .reduce((sum, t) => sum + t.amount, 0),
    pendingAmount: transactions
      .filter((t) => t.status === "pending")
      .reduce((sum, t) => sum + t.amount, 0),
    overdueAmount: transactions
      .filter((t) => t.status === "overdue")
      .reduce((sum, t) => sum + t.amount, 0),
    totalTransactions: transactions.length,
    paidCount: transactions.filter(
      (t) => t.status === "paid" || t.status === "completed",
    ).length,
    pendingCount: transactions.filter((t) => t.status === "pending").length,
    overdueCount: transactions.filter((t) => t.status === "overdue").length,
  };

  const handleStatusUpdate = (id, newStatus) => {
    setTransactions(
      transactions.map((t) =>
        t.id === id
          ? {
              ...t,
              status: newStatus,
              paymentDate:
                newStatus === "paid"
                  ? new Date().toISOString().split("T")[0]
                  : t.paymentDate,
            }
          : t,
      ),
    );
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Payments & Invoice Management
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Manage payments, invoices, and financial records
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="relative px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="relative px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-medium flex items-center gap-2 overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <Plus className="w-4 h-4" />
            <span>Create Invoice</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: "Total Revenue",
            value: `$${(stats.totalRevenue / 1000).toFixed(0)}K`,
            icon: DollarSign,
          },
          {
            label: "Pending Amount",
            value: `$${(stats.pendingAmount / 1000).toFixed(0)}K`,
            icon: Clock,
          },
          {
            label: "Overdue Amount",
            value: `$${(stats.overdueAmount / 1000).toFixed(0)}K`,
            icon: AlertCircle,
          },
          {
            label: "Total Transactions",
            value: stats.totalTransactions,
            icon: CreditCard,
          },
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

      {/* Payment Status Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Paid", value: stats.paidCount, icon: CheckCircle },
          { label: "Pending", value: stats.pendingCount, icon: Clock },
          { label: "Overdue", value: stats.overdueCount, icon: AlertCircle },
        ].map((status, idx) => (
          <div
            key={idx}
            className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg border border-white/20">
                <status.icon className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400">{status.label}</p>
                <p className="text-xl font-bold text-white">{status.value}</p>
              </div>
            </div>
          </div>
        ))}
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
                placeholder="Search by customer or transaction ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500/50 transition-all"
              />
            </div>

            {/* Type Filter */}
            <div className="relative w-40">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full pl-10 pr-8 py-2 bg-slate-800 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 appearance-none cursor-pointer"
              >
                {typeOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            {/* Status Filter */}
            <div className="relative w-40">
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

            {/* Date Range */}
            <div className="flex gap-2">
              {["week", "month", "quarter", "year"].map((range) => (
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

            {/* Refresh Button */}
            <button className="p-2 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all">
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-white/10 bg-white/5">
              <tr>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  ID
                </th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Customer
                </th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Amount
                </th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Payment Method
                </th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.length === 0 ? (
                <tr>
                  <td colSpan="8" className="p-12 text-center">
                    <CreditCard className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                    <p className="text-gray-400">No transactions found</p>
                  </td>
                </tr>
              ) : (
                filteredTransactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="border-b border-white/5 hover:bg-white/5 transition-all duration-300"
                  >
                    <td className="p-4">
                      <p className="text-sm font-mono text-white">
                        {transaction.id}
                      </p>
                    </td>
                    <td className="p-4">
                      <div>
                        <p className="text-sm font-medium text-white">
                          {transaction.customer.name}
                        </p>
                        <p className="text-xs text-gray-400 capitalize">
                          {transaction.customer.type}
                        </p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {getTypeIcon(transaction.type)}
                        <span className="text-sm text-gray-300 capitalize">
                          {transaction.type}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="text-sm font-semibold text-white">
                        ${transaction.amount.toLocaleString()}
                      </p>
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(transaction.status)}`}
                      >
                        {transaction.status.charAt(0).toUpperCase() +
                          transaction.status.slice(1)}
                      </span>
                    </td>
                    <td className="p-4">
                      {transaction.paymentMethod && (
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${getPaymentMethodBadge(transaction.paymentMethod)}`}
                        >
                          {transaction.paymentMethod
                            .replace("_", " ")
                            .toUpperCase()}
                        </span>
                      )}
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-gray-300">
                        {transaction.date}
                      </p>
                      {transaction.dueDate && (
                        <p className="text-xs text-gray-500">
                          Due: {transaction.dueDate}
                        </p>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => {
                            setSelectedTransaction(transaction);
                            setShowDetailsModal(true);
                          }}
                          className="p-1.5 hover:bg-white/10 rounded-lg transition-all"
                          title="View Details"
                        >
                          <Search className="w-4 h-4 text-blue-400" />
                        </button>
                        {transaction.type === "invoice" &&
                          transaction.status === "pending" && (
                            <button
                              onClick={() =>
                                handleStatusUpdate(transaction.id, "paid")
                              }
                              className="p-1.5 hover:bg-emerald-500/10 rounded-lg transition-all"
                              title="Mark as Paid"
                            >
                              <CheckCircle className="w-4 h-4 text-emerald-400" />
                            </button>
                          )}
                        <button
                          className="p-1.5 hover:bg-white/10 rounded-lg transition-all"
                          title="Download"
                        >
                          <Download className="w-4 h-4 text-blue-400" />
                        </button>
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
            Showing {filteredTransactions.length} of {transactions.length}{" "}
            transactions
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

      {/* Recent Activity Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Payments */}
        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-300">
          <div className="relative p-5 border-b border-white/10">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-400" />
              Recent Payments
            </h3>
          </div>
          <div className="relative p-5 space-y-3">
            {transactions
              .filter((t) => t.status === "paid" || t.status === "completed")
              .slice(0, 3)
              .map((payment) => (
                <div
                  key={payment.id}
                  className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10"
                >
                  <div>
                    <p className="text-sm font-medium text-white">
                      {payment.customer.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {payment.paymentDate}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-white">
                      ${payment.amount.toLocaleString()}
                    </p>
                    <p className="text-xs text-emerald-400">
                      {payment.paymentMethod?.replace("_", " ").toUpperCase()}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Upcoming Payments / Overdue */}
        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-300">
          <div className="relative p-5 border-b border-white/10">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-400" />
              Pending & Overdue
            </h3>
          </div>
          <div className="relative p-5 space-y-3">
            {transactions
              .filter((t) => t.status === "pending" || t.status === "overdue")
              .slice(0, 3)
              .map((invoice) => (
                <div
                  key={invoice.id}
                  className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10"
                >
                  <div>
                    <p className="text-sm font-medium text-white">
                      {invoice.customer.name}
                    </p>
                    <p className="text-xs text-red-400">
                      Due: {invoice.dueDate}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-white">
                      ${invoice.amount.toLocaleString()}
                    </p>
                    <button className="text-xs text-blue-400 hover:text-blue-300">
                      Send Reminder
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Transaction Details Modal */}
      {showDetailsModal && selectedTransaction && (
        <TransactionDetailsModal
          transaction={selectedTransaction}
          onClose={() => {
            setShowDetailsModal(false);
            setSelectedTransaction(null);
          }}
          onStatusUpdate={handleStatusUpdate}
        />
      )}

      {/* Create Invoice Modal */}
      {showAddModal && (
        <CreateInvoiceModal
          onClose={() => setShowAddModal(false)}
          onSave={(newInvoice) => {
            setTransactions([
              {
                ...newInvoice,
                id: `INV-2024-${String(transactions.length + 1).padStart(3, "0")}`,
              },
              ...transactions,
            ]);
            setShowAddModal(false);
          }}
        />
      )}
    </div>
  );
}

// Transaction Details Modal Component
const TransactionDetailsModal = ({ transaction, onClose, onStatusUpdate }) => {
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
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Transaction Details
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
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
            <div>
              <p className="text-xs text-gray-400">Transaction ID</p>
              <p className="text-sm font-mono text-white">{transaction.id}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Status</p>
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(transaction.status)}`}
              >
                {transaction.status.charAt(0).toUpperCase() +
                  transaction.status.slice(1)}
              </span>
            </div>
            <div>
              <p className="text-xs text-gray-400">Date</p>
              <p className="text-sm text-white">{transaction.date}</p>
            </div>
          </div>

          {/* Customer Info */}
          <div className="p-4 bg-white/5 rounded-xl border border-white/10">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2 mb-3">
              <User className="w-4 h-4 text-blue-400" />
              Customer Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-400">Name</p>
                <p className="text-sm text-white">
                  {transaction.customer.name}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Type</p>
                <p className="text-sm text-white capitalize">
                  {transaction.customer.type}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Email</p>
                <p className="text-sm text-white">
                  {transaction.customer.email}
                </p>
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div className="p-4 bg-white/5 rounded-xl border border-white/10">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2 mb-3">
              <DollarSign className="w-4 h-4 text-blue-400" />
              Payment Details
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between py-2 border-b border-white/10">
                <span className="text-sm text-gray-400">Amount</span>
                <span className="text-sm font-bold text-white">
                  ${transaction.amount.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/10">
                <span className="text-sm text-gray-400">Payment Method</span>
                <span className="text-sm text-white capitalize">
                  {transaction.paymentMethod?.replace("_", " ")}
                </span>
              </div>
              {transaction.dueDate && (
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-sm text-gray-400">Due Date</span>
                  <span className="text-sm text-white">
                    {transaction.dueDate}
                  </span>
                </div>
              )}
              {transaction.paymentDate && (
                <div className="flex justify-between py-2">
                  <span className="text-sm text-gray-400">Payment Date</span>
                  <span className="text-sm text-white">
                    {transaction.paymentDate}
                  </span>
                </div>
              )}
              {transaction.transactionId && (
                <div className="flex justify-between py-2">
                  <span className="text-sm text-gray-400">
                    Transaction Reference
                  </span>
                  <span className="text-sm font-mono text-white">
                    {transaction.transactionId}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Invoice Items */}
          {transaction.items && (
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2 mb-3">
                <FileText className="w-4 h-4 text-blue-400" />
                Invoice Items
              </h3>
              <div className="space-y-2">
                {transaction.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between py-2 border-b border-white/10"
                  >
                    <div>
                      <p className="text-sm text-white">{item.description}</p>
                      <p className="text-xs text-gray-400">
                        {item.quantity} x ${item.unitPrice.toLocaleString()}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-white">
                      ${item.total.toLocaleString()}
                    </span>
                  </div>
                ))}
                <div className="flex justify-between pt-2">
                  <span className="text-sm font-semibold text-white">
                    Total
                  </span>
                  <span className="text-sm font-bold text-white">
                    ${transaction.amount.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Description */}
          {transaction.description && (
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs text-gray-400 mb-1">Description</p>
              <p className="text-sm text-gray-300">{transaction.description}</p>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            {transaction.type === "invoice" &&
              transaction.status === "pending" && (
                <button
                  onClick={() => {
                    onStatusUpdate(transaction.id, "paid");
                    onClose();
                  }}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-emerald-500/30 transition-all"
                >
                  Mark as Paid
                </button>
              )}
            <button className="flex-1 px-4 py-2 border border-white/10 rounded-xl text-gray-300 hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              Download PDF
            </button>
            <button className="flex-1 px-4 py-2 border border-white/10 rounded-xl text-gray-300 hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              Send Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Create Invoice Modal Component
const CreateInvoiceModal = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    customerType: "exhibitor",
    customerEmail: "",
    amount: "",
    dueDate: "",
    description: "",
    paymentMethod: "bank_transfer",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      type: "invoice",
      invoiceNo: null,
      customer: {
        name: formData.customerName,
        type: formData.customerType,
        email: formData.customerEmail,
      },
      amount: parseFloat(formData.amount),
      status: "pending",
      paymentMethod: formData.paymentMethod,
      date: new Date().toISOString().split("T")[0],
      dueDate: formData.dueDate,
      description: formData.description,
      items: [
        {
          description: formData.description,
          quantity: 1,
          unitPrice: parseFloat(formData.amount),
          total: parseFloat(formData.amount),
        },
      ],
      paymentDate: null,
      transactionId: null,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl w-full max-w-2xl shadow-2xl border border-blue-500/20 animate-in zoom-in-95 duration-300">
        <div className="relative p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Create Invoice
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">
                Customer Name
              </label>
              <input
                type="text"
                required
                value={formData.customerName}
                onChange={(e) =>
                  setFormData({ ...formData, customerName: e.target.value })
                }
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">
                Customer Type
              </label>
              <select
                value={formData.customerType}
                onChange={(e) =>
                  setFormData({ ...formData, customerType: e.target.value })
                }
                className="w-full px-4 py-2 bg-slate-800 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
              >
                <option value="exhibitor">Exhibitor</option>
                <option value="sponsor">Sponsor</option>
                <option value="practitioner">Healthcare Practitioner</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">
                Customer Email
              </label>
              <input
                type="email"
                required
                value={formData.customerEmail}
                onChange={(e) =>
                  setFormData({ ...formData, customerEmail: e.target.value })
                }
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">
                Amount ($)
              </label>
              <input
                type="number"
                required
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">
                Due Date
              </label>
              <input
                type="date"
                required
                value={formData.dueDate}
                onChange={(e) =>
                  setFormData({ ...formData, dueDate: e.target.value })
                }
                className="w-full px-4 py-2 bg-slate-800 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">
                Payment Method
              </label>
              <select
                value={formData.paymentMethod}
                onChange={(e) =>
                  setFormData({ ...formData, paymentMethod: e.target.value })
                }
                className="w-full px-4 py-2 bg-slate-800 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50"
              >
                <option value="bank_transfer">Bank Transfer</option>
                <option value="credit_card">Credit Card</option>
                <option value="cash">Cash</option>
              </select>
            </div>
          </div>
         
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">
                Description
              </label>
              <textarea
                rows={3}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 resize-none"
                placeholder="Invoice description..."
              />
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
              Create Invoice
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Helper functions
const getStatusBadge = (status) => {
  switch (status) {
    case "paid":
    case "completed":
      return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
    case "pending":
      return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
    case "overdue":
      return "bg-red-500/20 text-red-400 border border-red-500/30";
    default:
      return "bg-white/10 text-gray-300 border border-white/10";
  }
};
