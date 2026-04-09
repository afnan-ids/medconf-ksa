"use client";

import { useState } from "react";
import {
  FileText,
  Download,
  CheckCircle,
  Clock,
  AlertCircle,
  Shield,
  Signature,
  Eye,
  X,
  Save,
  Printer,
  Mail,
} from "lucide-react";
import { contractData } from "../../Data/exhibitor-data";

const ContractContent = () => {
  const [isSigned, setIsSigned] = useState(false);
  const [showSignModal, setShowSignModal] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(true);
  const [signatureName, setSignatureName] = useState("Ahmed Al-Saud");
  const [signatureDate, setSignatureDate] = useState("2026-01-15");

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      alert("Contract downloaded successfully!");
    }, 1500);
  };

  const handleSign = () => {
    setShowSignModal(false);
    setIsSigned(true);
    alert("Contract signed successfully! A copy has been sent to your email.");
  };

  return (
    <div className="space-y-4 sm:space-y-5 md:space-y-6">
      {/* Main Contract Card - Glassmorphism */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-48 sm:w-64 h-48 sm:h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="relative p-4 sm:p-5 md:p-6 border-b border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 sm:p-2.5 bg-gradient-to-br from-blue-800 to-cyan-600 rounded-lg shadow-lg shadow-blue-500/30">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
                  Exhibition Contract
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 mt-0.5 flex flex-wrap items-center gap-1 sm:gap-2">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  <span>Legally binding agreement</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Contract #{contractData.contractNumber}</span>
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg border flex items-center gap-1.5 sm:gap-2 ${
                isSigned 
                  ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" 
                  : "bg-amber-500/20 text-amber-400 border-amber-500/30"
              }`}>
                {isSigned ? (
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                ) : (
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                )}
                <span className="text-[10px] sm:text-xs font-medium whitespace-nowrap">
                  {isSigned ? "Signed" : "Pending Signature"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contract Content */}
        <div className="relative p-4 sm:p-5 md:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
            {/* Left Column - Contract Terms */}
            <div className="lg:col-span-2">
              <div className="bg-white/5 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-white/10">
                <h3 className="text-sm font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-400" />
                  Contract Agreement
                </h3>
                
                <div className="space-y-4 sm:space-y-5">
                  {/* Section 1: Parties */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-blue-400 mb-1.5 sm:mb-2">1. PARTIES</h4>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      This Exhibition Participation Agreement ("Agreement") is made and entered into between:
                    </p>
                    <div className="mt-2 ml-3 sm:ml-4 space-y-1">
                      <p className="text-xs text-gray-300">
                        <strong className="text-white">Organizer:</strong> {contractData.parties.organizer}
                      </p>
                      <p className="text-xs text-gray-300">
                        <strong className="text-white">Exhibitor:</strong> {contractData.parties.exhibitor}
                      </p>
                    </div>
                  </div>

                  {/* Section 2: Booth Allocation */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-blue-400 mb-1.5 sm:mb-2">2. BOOTH ALLOCATION</h4>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      The Organizer allocates the following booth space to the Exhibitor:
                    </p>
                    <div className="mt-2 ml-3 sm:ml-4 space-y-1">
                      <p className="text-xs text-gray-300">• <strong>Booth Number:</strong> {contractData.boothDetails.number}</p>
                      <p className="text-xs text-gray-300">• <strong>Size:</strong> {contractData.boothDetails.size}</p>
                      <p className="text-xs text-gray-300">• <strong>Location:</strong> {contractData.boothDetails.location}</p>
                    </div>
                  </div>

                  {/* Section 3: Payment Terms */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-blue-400 mb-1.5 sm:mb-2">3. PAYMENT TERMS</h4>
                    <div className="mt-2 ml-3 sm:ml-4 space-y-1">
                      <p className="text-xs text-gray-300">
                        • <strong>Total Participation Fee:</strong> {contractData.paymentTerms.totalAmount}
                      </p>
                      <p className="text-xs text-gray-300">
                        • <strong>Initial Deposit (50%):</strong> {contractData.paymentTerms.deposit} ({contractData.paymentTerms.depositDue})
                      </p>
                      <p className="text-xs text-gray-300">
                        • <strong>Final Payment (50%):</strong> {contractData.paymentTerms.finalPayment} (Due {contractData.paymentTerms.finalDue})
                      </p>
                    </div>
                  </div>

                  {/* Section 4: Cancellation Policy */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-blue-400 mb-1.5 sm:mb-2">4. CANCELLATION POLICY</h4>
                    <div className="mt-2 ml-3 sm:ml-4 space-y-1">
                      <p className="text-xs text-gray-300">
                        • <strong>Before January 15, 2026:</strong> {contractData.cancellationPolicy.beforeJan15}
                      </p>
                      <p className="text-xs text-gray-300">
                        • <strong>After January 15, 2026:</strong> {contractData.cancellationPolicy.afterJan15}
                      </p>
                    </div>
                  </div>

                  {/* Section 5: Terms & Conditions */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-blue-400 mb-1.5 sm:mb-2">5. TERMS & CONDITIONS</h4>
                    <ul className="mt-2 ml-3 sm:ml-4 space-y-1 list-disc">
                      {contractData.terms.map((term, index) => (
                        <li key={index} className="text-xs text-gray-300 leading-relaxed">{term}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Section 6: Insurance & Liability */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-blue-400 mb-1.5 sm:mb-2">6. INSURANCE & LIABILITY</h4>
                    <p className="text-xs text-gray-300 leading-relaxed mt-2 ml-3 sm:ml-4">
                      Exhibitor must maintain comprehensive general liability insurance with minimum coverage of SAR 1,000,000. 
                      Organizer is not liable for any loss, damage, or theft of exhibitor property.
                    </p>
                  </div>
                </div>

                {/* Terms Acceptance */}
                <div className="mt-5 sm:mt-6 pt-4 border-t border-white/10">
                  <label className="flex items-start gap-2 sm:gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      className="mt-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded text-blue-600 bg-white/10 border-white/20"
                    />
                    <span className="text-[11px] sm:text-xs text-gray-300 leading-relaxed">
                      I confirm that I have read, understood, and agree to all the terms and conditions 
                      outlined in this Exhibition Participation Contract.
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Column - Contract Info & Actions */}
            <div className="space-y-3 sm:space-y-4">
              {/* Contract Status Card */}
              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-blue-500/30">
                <h4 className="text-xs font-semibold text-gray-300 mb-3 flex items-center gap-2">
                  <FileText className="w-3 h-3 text-blue-400" />
                  Contract Information
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-[11px] sm:text-xs text-gray-400">Contract Number</span>
                    <span className="text-[11px] sm:text-xs font-medium text-white">{contractData.contractNumber}</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-[11px] sm:text-xs text-gray-400">Signed Date</span>
                    <span className="text-[11px] sm:text-xs font-medium text-white">{contractData.signedDate}</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-[11px] sm:text-xs text-gray-400">Valid Until</span>
                    <span className="text-[11px] sm:text-xs font-medium text-white">March 14, 2026</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-[11px] sm:text-xs text-gray-400">Status</span>
                    <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-medium text-emerald-400">
                      <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Signature Section */}
              {isSigned ? (
                <div className="bg-emerald-500/10 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-emerald-500/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Signature className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                    <h4 className="text-xs font-semibold text-white">Signed & Executed</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-1">
                      <span className="text-[11px] sm:text-xs text-gray-400">Signed By</span>
                      <span className="text-[11px] sm:text-xs font-medium text-white">Ahmed Al-Saud</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-[11px] sm:text-xs text-gray-400">Position</span>
                      <span className="text-[11px] sm:text-xs font-medium text-white">Exhibitor Representative</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-[11px] sm:text-xs text-gray-400">Date</span>
                      <span className="text-[11px] sm:text-xs font-medium text-white">January 15, 2026</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-amber-500/10 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-amber-500/30">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                    <h4 className="text-xs font-semibold text-white">Awaiting Signature</h4>
                  </div>
                  <p className="text-[11px] sm:text-xs text-gray-300 mb-3 leading-relaxed">
                    Please review the contract and sign to confirm your participation.
                  </p>
                  <button
                    onClick={() => setShowSignModal(true)}
                    disabled={!acceptTerms}
                    className={`w-full py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                      acceptTerms
                        ? "bg-gradient-to-br from-blue-800 to-cyan-600 text-white hover:shadow-lg hover:shadow-blue-500/30"
                        : "bg-gray-600/50 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    <Signature className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Sign Contract
                  </button>
                </div>
              )}

              {/* Action Buttons */}
              <div className="bg-white/5 rounded-lg sm:rounded-xl p-4 border border-white/10">
                <h4 className="text-xs font-semibold text-gray-300 mb-3">Actions</h4>
                <div className="space-y-2">
                  <button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="w-full py-2 sm:py-2.5 bg-white/10 rounded-lg text-xs font-medium text-gray-300 hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                  >
                    {isDownloading ? (
                      <>
                        <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Downloading...</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        <span>Download Contract (PDF)</span>
                      </>
                    )}
                  </button>
                  <button className="w-full py-2 sm:py-2.5 bg-white/10 rounded-lg text-xs font-medium text-gray-300 hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                    <Printer className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span>Print Contract</span>
                  </button>
                  <button className="w-full py-2 sm:py-2.5 bg-white/10 rounded-lg text-xs font-medium text-gray-300 hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                    <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span>Email Contract</span>
                  </button>
                </div>
              </div>

              {/* Support Contact */}
              <div className="bg-white/5 rounded-lg sm:rounded-xl p-4 border border-white/10">
                <h4 className="text-xs font-semibold text-gray-300 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-3 h-3 text-blue-400" />
                  Need Help?
                </h4>
                <p className="text-[11px] sm:text-xs text-gray-400 mb-2 leading-relaxed">
                  For contract-related questions, contact our legal team.
                </p>
                <div className="text-[11px] sm:text-xs text-gray-300 space-y-1">
                  <p>📧 legal@medconfksa.com</p>
                  <p>📞 +966 55 123 4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sign Contract Modal - Glassmorphism Responsive */}
      {showSignModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowSignModal(false)}
          />
          <div className="relative bg-white/5 backdrop-blur-2xl rounded-xl sm:rounded-2xl w-full max-w-[90%] sm:max-w-md shadow-2xl border border-white/20 animate-in fade-in zoom-in duration-300">
            {/* Decorative glows */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

            <div className="relative p-4 sm:p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h2 className="text-base sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
                  Sign Contract
                </h2>
                <button
                  onClick={() => setShowSignModal(false)}
                  className="p-1 rounded-lg transition-all duration-300 hover:bg-white/10 text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
              <p className="text-[11px] sm:text-xs text-gray-400 mt-1">
                Please provide your signature to execute this agreement
              </p>
            </div>

            <div className="relative p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-medium text-gray-300 mb-1">
                    Full Name (as signatory)
                  </label>
                  <input
                    type="text"
                    value={signatureName}
                    onChange={(e) => setSignatureName(e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500/50"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-medium text-gray-300 mb-1">
                    Position / Title
                  </label>
                  <input
                    type="text"
                    defaultValue="Exhibitor Representative"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500/50"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-medium text-gray-300 mb-1">
                    Date of Signing
                  </label>
                  <input
                    type="date"
                    value={signatureDate}
                    onChange={(e) => setSignatureDate(e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500/50"
                  />
                </div>

                <div className="p-2.5 sm:p-3 bg-blue-500/10 rounded-lg border border-blue-500/30">
                  <div className="flex items-start gap-2">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-[10px] sm:text-xs text-gray-300 leading-relaxed">
                      By signing this contract, you confirm that you are authorized to sign on behalf of 
                      <strong className="text-white"> {contractData.parties.exhibitor}</strong> and agree to all terms and conditions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-3 mt-5 sm:mt-6">
                <button
                  onClick={() => setShowSignModal(false)}
                  className="px-4 py-2 sm:py-2.5 rounded-lg border border-white/20 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 text-xs sm:text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSign}
                  className="flex-1 py-2 sm:py-2.5 bg-gradient-to-br from-blue-800 to-cyan-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 text-xs sm:text-sm"
                >
                  <Signature className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  Confirm Signature
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Security Notice */}
      <div className="relative bg-blue-500/10 backdrop-blur-xl rounded-lg sm:rounded-xl p-3 sm:p-4 border border-blue-500/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        <div className="relative flex items-start gap-2 sm:gap-3">
          <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-xs sm:text-sm font-medium text-white">Legally Binding Contract</p>
            <p className="text-[11px] sm:text-xs text-gray-300 mt-0.5 leading-relaxed">
              This contract is legally binding under Saudi Arabian law. Please ensure you have read all terms carefully before signing. 
              A digitally signed copy will be sent to your registered email address.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractContent;