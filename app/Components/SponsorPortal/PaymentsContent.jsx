"use client";

import { useState } from "react";
import {
  CreditCard,
  Download,
  Eye,
  CheckCircle,
  Clock,
  AlertCircle,
  FileText,
  Calendar,
  DollarSign,
  Banknote,
  Wallet,
  Smartphone,
  Building,
  ChevronRight,
  Receipt,
  TrendingUp,
  Shield,
  Printer,
  Send,
  Plus,
  History,
  Lock,
} from "lucide-react";
import {
  invoices,
  paymentMethods,
  paymentHistory,
} from "../../Data/sponsor-data";

const PaymentsContent = () => {
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("bank");

  const totalPaid = invoices
    .filter((inv) => inv.status === "paid")
    .reduce(
      (sum, inv) =>
        sum + parseInt(inv.amount.replace("SAR ", "").replace(",", "")),
      0,
    );

  const totalDue = invoices
    .filter((inv) => inv.status === "pending")
    .reduce(
      (sum, inv) =>
        sum + parseInt(inv.amount.replace("SAR ", "").replace(",", "")),
      0,
    );

  const formatAmount = (amount) => {
    return amount.toLocaleString() + " SAR";
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "paid":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      case "pending":
        return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30";
      case "overdue":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-white/10 text-gray-300 border-white/10";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "paid":
        return <CheckCircle className="w-3 h-3" />;
      case "pending":
        return <Clock className="w-3 h-3" />;
      case "overdue":
        return <AlertCircle className="w-3 h-3" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header Section */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-48 sm:w-64 h-48 sm:h-64 bg-gray-500/10 rounded-full blur-3xl"></div>

        <div className="relative p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                <span className="text-[10px] sm:text-sm font-medium text-cyan-400 uppercase tracking-wide">
                  Financial Management
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Payments & Invoices
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Manage your sponsorship payments, view invoices, and track
                payment history
              </p>
            </div>
            <button className="relative w-full sm:w-auto px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-gray-600 to-cyan-700 text-white rounded-lg font-medium text-sm overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center gap-2">
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                <Receipt className="w-3 h-3 sm:w-4 sm:h-4" />
                Download All Statements
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Financial Summary Cards */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <div className="group relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/10 shadow-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-gray-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 sm:p-2.5 bg-white/10 rounded-lg border border-white/20">
                <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-300">
              Total Package Value
            </p>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-1">
              SAR 250,000
            </h2>
          </div>
        </div>

        <div className="group relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/10 shadow-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-gray-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 sm:p-2.5 bg-white/10 rounded-lg border border-white/20">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-300">Total Paid</p>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-1 break-words">
              {formatAmount(totalPaid)}
            </h2>
          </div>
        </div>

        <div className="group relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/10 shadow-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-gray-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 sm:p-2.5 bg-white/10 rounded-lg border border-white/20">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-300">Total Due</p>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-1 break-words">
              {formatAmount(totalDue)}
            </h2>
          </div>
        </div>
      </div>

      {/* Invoices Section */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="relative p-4 sm:p-6 border-b border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent flex items-center gap-2">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                Invoices
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                View and download your sponsorship invoices
              </p>
            </div>
            <div className="flex gap-2">
              <button className="px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/20 transition-all">
                All Invoices
              </button>
              <button className="px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-gray-300 bg-white/10 rounded-lg border border-white/10 hover:bg-white/20 transition-all">
                Paid
              </button>
              <button className="px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-gray-300 bg-white/10 rounded-lg border border-white/10 hover:bg-white/20 transition-all">
                Pending
              </button>
            </div>
          </div>
        </div>

        <div className="relative p-4 sm:p-6">
          <div className="space-y-3">
            {invoices.map((invoice, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-gray-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                <div className="relative p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                        <p className="text-sm sm:text-base font-semibold text-white">
                          {invoice.id}
                        </p>
                        <span
                          className={`px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium flex items-center gap-1 ${getStatusBadge(
                            invoice.status,
                          )}`}
                        >
                          {getStatusIcon(invoice.status)}
                          {invoice.status === "paid" ? "Paid" : "Pending"}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300">
                        {invoice.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2 text-[10px] sm:text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-cyan-400" />
                          Issued: {invoice.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-gray-400" />
                          Due: {invoice.dueDate}
                        </div>
                        {invoice.paidDate && (
                          <div className="flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-emerald-400" />
                            Paid: {invoice.paidDate}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-base sm:text-xl font-bold text-white">
                        {invoice.amount}
                      </p>
                      <div className="flex gap-2 mt-2 justify-start sm:justify-end">
                        <button className="p-1 sm:p-1.5 bg-white/10 rounded-md border border-white/20 hover:bg-white/20 transition-all">
                          <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300" />
                        </button>
                        <button className="p-1 sm:p-1.5 bg-white/10 rounded-md border border-white/20 hover:bg-white/20 transition-all">
                          <Download className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300" />
                        </button>
                        {invoice.status === "pending" && (
                          <button
                            onClick={() => setShowPaymentModal(true)}
                            className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-gray-600 to-cyan-700 text-white rounded-lg text-[10px] sm:text-xs font-medium flex items-center gap-1"
                          >
                            Pay Now
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 sm:gap-6">
        {/* Payment History */}
        <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="relative p-4 sm:p-6 border-b border-white/10">
            <h3 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent flex items-center gap-2">
              <History className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
              Payment History
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-1">
              Recent transactions and payment records
            </p>
          </div>

          <div className="relative p-4 sm:p-6">
            {paymentHistory.length === 0 ? (
              <div className="text-center py-6 sm:py-8">
                <History className="w-10 h-10 sm:w-12 sm:h-12 text-gray-500 mx-auto mb-3" />
                <p className="text-xs sm:text-sm text-gray-400">
                  No payment history yet
                </p>
              </div>
            ) : (
              <div className="space-y-2 sm:space-y-3">
                {paymentHistory.map((payment, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-white/5 rounded-lg border border-white/10"
                  >
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-white">
                        {payment.date}
                      </p>
                      <p className="text-[10px] sm:text-xs text-gray-400">
                        Reference: {payment.reference}
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-xs sm:text-sm font-semibold text-white">
                        {payment.amount}
                      </p>
                      <p className="text-[10px] sm:text-xs text-gray-400">
                        {payment.method}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <button className="w-full mt-3 sm:mt-4 py-1.5 sm:py-2 text-xs sm:text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center justify-center gap-1">
              View Full History
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Security Notice */}
      <div className="relative bg-emerald-500/10 backdrop-blur-xl rounded-xl p-4 sm:p-5 border border-emerald-500/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-green-500/5"></div>
        <div className="relative flex flex-col sm:flex-row items-start gap-3">
          <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-1">
              Secure Payment Processing
            </h4>
            <p className="text-xs sm:text-sm text-gray-300">
              All transactions are encrypted and secure. For payment assistance
              or to request a payment plan, contact{" "}
              <a
                href="mailto:finance@event.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                finance@event.com
              </a>{" "}
              or call <span className="text-cyan-400">+966 00 000 0000</span>
            </p>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative bg-white/10 backdrop-blur-2xl rounded-2xl max-w-md w-full shadow-2xl border border-white/20 mx-4">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gray-500/20 rounded-full blur-3xl"></div>

            <div className="relative p-5 sm:p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Make Payment
                </h3>
                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="p-1 hover:bg-white/10 rounded-lg transition-all"
                >
                  <span className="text-gray-400 text-xl">&times;</span>
                </button>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Invoice #INV-2026-002
              </p>
            </div>

            <div className="relative p-5 sm:p-6 space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex justify-between mb-2">
                  <span className="text-xs sm:text-sm text-gray-400">
                    Amount Due
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-white">
                    SAR 125,000
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs sm:text-sm text-gray-400">
                    Due Date
                  </span>
                  <span className="text-xs sm:text-sm text-cyan-400">
                    Feb 28, 2026
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                  Select Payment Method
                </label>
                <select className="w-full px-3 sm:px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500/50">
                  <option>Bank Transfer</option>
                  <option>Credit Card</option>
                  <option>Apple Pay</option>
                </select>
              </div>

              <button className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-gray-600 to-cyan-700 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center gap-2">
                <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentsContent;
