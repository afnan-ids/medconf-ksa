"use client";

import { useState } from "react";
import {
  CreditCard,
  Receipt,
  CheckCircle,
  Clock,
  AlertCircle,
  Download,
  Smartphone,
  Building2,
  Shield,
  Calendar,
  TrendingUp,
  ArrowRight,
  X,
  FileText,
  Wallet,
  Landmark,
  DollarSign,
} from "lucide-react";
import { paymentData } from "../../Data/exhibitor-data";

const PaymentContent = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [expandedInvoice, setExpandedInvoice] = useState(null);

  const paymentMethods = [
    { id: "card", name: "Credit / Debit Card", icon: CreditCard, description: "Visa, Mastercard, Mada" },
    { id: "bank", name: "Bank Transfer", icon: Landmark, description: "Direct bank transfer" },
    { id: "mada", name: "Mada / SPAN", icon: Smartphone, description: "Local payment network" },
  ];

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowPaymentModal(false);
      alert("Payment processed successfully! Receipt has been sent to your email.");
    }, 2000);
  };

  const handleDownloadInvoice = (invoiceId) => {
    alert(`Downloading invoice #${invoiceId}...`);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "paid":
        return { color: "emerald", icon: CheckCircle, text: "Paid" };
      case "pending":
        return { color: "amber", icon: Clock, text: "Pending" };
      default:
        return { color: "gray", icon: AlertCircle, text: status };
    }
  };

  const totalPaid = paymentData.paymentSchedule
    .filter(p => p.status === "paid")
    .reduce((sum, p) => sum + parseInt(p.amount.replace("SAR ", "")), 0);
  
  const totalPending = paymentData.paymentSchedule
    .filter(p => p.status === "pending")
    .reduce((sum, p) => sum + parseInt(p.amount.replace("SAR ", "")), 0);

  return (
    <div className="space-y-6">
      {/* Main Payment Card - Glassmorphism */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="relative p-6 border-b border-white/10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-br from-blue-800 to-cyan-600 rounded-lg shadow-lg shadow-blue-500/30">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
                  Payment Management
                </h2>
                <p className="text-sm text-gray-300 mt-0.5 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  Secure payment processing
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-3 py-2 bg-white/10 rounded-lg border border-white/20">
                <span className="text-xs text-gray-300">Total: </span>
                <span className="text-xs font-bold text-white">{paymentData.totalAmount}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Content */}
        <div className="relative p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Payment Summary */}
            <div className="lg:col-span-2 space-y-4">
              {/* Payment Progress */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                  Payment Progress
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Total Amount</span>
                    <span className="font-bold text-white">{paymentData.totalAmount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Paid Amount</span>
                    <span className="font-bold text-emerald-400">{paymentData.paidAmount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Remaining Balance</span>
                    <span className="font-bold text-amber-400">{paymentData.remainingAmount}</span>
                  </div>
                  <div className="mt-3">
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${(totalPaid / (totalPaid + totalPending)) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-2">
                      {Math.round((totalPaid / (totalPaid + totalPending)) * 100)}% completed
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment Schedule */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  Payment Schedule
                </h3>
                <div className="space-y-3">
                  {paymentData.paymentSchedule.map((payment) => {
                    const status = getStatusBadge(payment.status);
                    const StatusIcon = status.icon;
                    return (
                      <div
                        key={payment.id}
                        className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all"
                      >
                        <div>
                          <p className="text-sm font-medium text-white">{payment.title}</p>
                          <p className="text-xs text-gray-400 mt-0.5">Due: {payment.dueDate}</p>
                          {payment.paidDate && (
                            <p className="text-xs text-emerald-400 mt-0.5">Paid: {payment.paidDate}</p>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-white">{payment.amount}</p>
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-${status.color}-500/20 text-${status.color}-400 mt-1`}>
                            <StatusIcon className="w-3 h-3" />
                            {status.text}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Invoice Items */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                  <Receipt className="w-4 h-4 text-cyan-400" />
                  Invoice Breakdown
                </h3>
                <div className="space-y-2">
                  {paymentData.invoiceItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-xs text-gray-300">{item.description}</span>
                      <span className="text-xs font-medium text-white">{item.amount}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-3 mt-2 border-t border-white/20">
                    <span className="text-sm font-semibold text-white">Total</span>
                    <span className="text-sm font-bold text-blue-400">{paymentData.totalAmount}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Payment Actions */}
            <div className="space-y-4">
              {/* Make Payment Card */}
              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl p-5 border border-blue-500/30">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-blue-400" />
                  Make a Payment
                </h4>
                <p className="text-xs text-gray-300 mb-4">
                  Pay your remaining balance of <strong className="text-amber-400">{paymentData.remainingAmount}</strong>
                </p>
                <button
                  onClick={() => setShowPaymentModal(true)}
                  className="w-full py-2.5 bg-gradient-to-br from-blue-800 to-cyan-600 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                >
                  <CreditCard className="w-4 h-4" />
                  Pay Now
                </button>
              </div>

              {/* Payment Methods */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-xs font-semibold text-gray-300 mb-3">Accepted Payment Methods</h4>
                <div className="flex flex-wrap gap-2">
                  {paymentMethods.map((method) => (
                    <div key={method.id} className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg">
                      <method.icon className="w-3 h-3 text-blue-400" />
                      <span className="text-xs text-gray-300">{method.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download Invoices */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-xs font-semibold text-gray-300 mb-3 flex items-center gap-2">
                  <Download className="w-3 h-3 text-blue-400" />
                  Download Invoices
                </h4>
                <div className="space-y-2">
                  <button
                    onClick={() => handleDownloadInvoice("INV-2026-001")}
                    className="w-full py-2 bg-white/10 rounded-lg text-xs text-gray-300 hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                  >
                    <FileText className="w-3 h-3" />
                    Initial Deposit Invoice
                  </button>
                  <button
                    onClick={() => handleDownloadInvoice("INV-2026-002")}
                    className="w-full py-2 bg-white/10 rounded-lg text-xs text-gray-300 hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                  >
                    <FileText className="w-3 h-3" />
                    Final Payment Invoice (Pending)
                  </button>
                  <button
                    onClick={() => handleDownloadInvoice("INV-2026-ALL")}
                    className="w-full py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg text-xs text-blue-400 hover:from-blue-600/30 hover:to-purple-600/30 transition-all flex items-center justify-center gap-2"
                  >
                    <Download className="w-3 h-3" />
                    Download All Invoices
                  </button>
                </div>
              </div>

              {/* Payment History Summary */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-xs font-semibold text-gray-300 mb-2">Payment History</h4>
                <div className="space-y-2">
                  <div className="flex justify-between py-1">
                    <span className="text-xs text-gray-400">Jan 15, 2026</span>
                    <span className="text-xs font-medium text-emerald-400">SAR 42,500</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-xs text-gray-400">Feb 15, 2026</span>
                    <span className="text-xs font-medium text-amber-400">SAR 42,500 (Pending)</span>
                  </div>
                </div>
              </div>

              {/* Support Contact */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-xs font-semibold text-gray-300 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-3 h-3 text-blue-400" />
                  Payment Support
                </h4>
                <p className="text-xs text-gray-400 mb-2">
                  For payment-related questions or issues:
                </p>
                <div className="text-xs text-gray-300">
                  <p>📧 finance@Hpql.com</p>
                  <p className="mt-1">📞 +966 55 123 4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal - Glassmorphism */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowPaymentModal(false)}
          />
          <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl w-full max-w-md shadow-2xl border border-white/20 animate-in fade-in zoom-in duration-300">
            {/* Decorative glows */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

            <div className="relative p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
                  Make a Payment
                </h2>
                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="p-1 rounded-lg transition-all duration-300 hover:bg-white/10 text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Amount due: <strong className="text-amber-400">{paymentData.remainingAmount}</strong>
              </p>
            </div>

            <div className="relative p-6">
              <div className="space-y-4">
                {/* Payment Method Selection */}
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-2">
                    Select Payment Method
                  </label>
                  <div className="space-y-2">
                    {paymentMethods.map((method) => {
                      const Icon = method.icon;
                      return (
                        <label
                          key={method.id}
                          className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                            selectedPaymentMethod === method.id
                              ? "bg-blue-500/20 border-blue-500/50"
                              : "bg-white/5 border-white/10 hover:border-white/20"
                          }`}
                        >
                          <input
                            type="radio"
                            name="paymentMethod"
                            value={method.id}
                            checked={selectedPaymentMethod === method.id}
                            onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                            className="text-blue-600"
                          />
                          <Icon className="w-5 h-5 text-blue-400" />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-white">{method.name}</p>
                            <p className="text-xs text-gray-400">{method.description}</p>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Card Details (if card selected) */}
                {(selectedPaymentMethod === "card" || selectedPaymentMethod === "mada") && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="**** **** **** ****"
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500/50"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-300 mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500/50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-300 mb-1">
                          CVV
                        </label>
                        <input
                          type="text"
                          placeholder="***"
                          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500/50"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Bank Transfer Details */}
                {selectedPaymentMethod === "bank" && (
                  <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30">
                    <p className="text-xs text-gray-300 mb-2">Bank Account Details:</p>
                    <div className="space-y-1 text-xs">
                      <p><span className="text-gray-400">Bank:</span> Saudi National Bank (SNB)</p>
                      <p><span className="text-gray-400">Account Name:</span>HPQL</p>
                      <p><span className="text-gray-400">IBAN:</span> SA03 5000 0000 0000 0000 1234</p>
                      <p><span className="text-gray-400">Reference:</span> Booth A12 - PharmaCo</p>
                    </div>
                  </div>
                )}

                {/* Payment Summary */}
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs text-gray-400">Amount to Pay</span>
                    <span className="text-sm font-bold text-white">{paymentData.remainingAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-400">Processing Fee</span>
                    <span className="text-xs text-gray-300">SAR 0</span>
                  </div>
                  <div className="flex justify-between pt-2 mt-2 border-t border-white/10">
                    <span className="text-sm font-semibold text-white">Total</span>
                    <span className="text-sm font-bold text-blue-400">{paymentData.remainingAmount}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="flex-1 py-2.5 bg-gradient-to-br from-blue-800 to-cyan-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-4 h-4" />
                      Pay {paymentData.remainingAmount}
                    </>
                  )}
                </button>
                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="px-4 py-2.5 rounded-lg border border-white/20 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Security Notice */}
      <div className="relative bg-blue-500/10 backdrop-blur-xl rounded-xl p-4 border border-blue-500/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        <div className="relative flex items-start gap-3">
          <Shield className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-white">Secure Payment Processing</p>
            <p className="text-xs text-gray-300 mt-0.5">
              All payments are processed through secure, PCI-compliant gateways. Your financial information is encrypted and never stored.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentContent;