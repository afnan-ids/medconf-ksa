"use client";

import { useState } from "react";
import { Download, Mail, QrCode, CheckCircle, Calendar, MapPin, User, Ticket, Award, Shield, Share2 } from "lucide-react";

const TicketContent = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleAction = (action) => {
    if (action === "download") {
      setIsDownloading(true);
      setTimeout(() => { setIsDownloading(false); alert("Ticket downloaded successfully!"); }, 1500);
    } else if (action === "email") alert("Ticket sent to your email address!");
    else if (action === "share") alert("Share link copied to clipboard!");
  };

  const benefits = ["Access to all conference sessions", "VIP Lounge access", "Networking reception entry", "Complimentary lunch & coffee breaks", "Event materials & gift bag"];

  return (
    <div className="space-y-6">
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="relative p-6 border-b border-white/10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-br from-purple-500 to-pink-400 rounded-lg shadow-lg">
                <QrCode className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">Your Digital E-Ticket</h2>
                <p className="text-sm text-gray-300 flex items-center gap-2"><Shield className="w-4 h-4 text-blue-400" /> Present this QR code at the entrance</p>
              </div>
            </div>
            <div className="px-3 py-2 bg-white/10 rounded-lg border border-white/20"><Award className="w-4 h-4 inline text-amber-400 mr-1" /><span className="text-xs text-gray-300">VIP Access</span></div>
          </div>
        </div>

        {/* Ticket Card */}
        <div className="relative p-6">
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-blue-500 to-purple-400"></div>
            
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Global Health Exhibition 2026</h3>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <Calendar className="w-4 h-4 text-blue-400" /><span className="text-sm text-gray-300">March 12-14, 2026</span>
                    <span className="text-gray-500">•</span><MapPin className="w-4 h-4 text-purple-400" /><span className="text-sm text-gray-300">RICC, Riyadh</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Visitor Info */}
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-center gap-3 mb-3"><User className="w-5 h-5 text-blue-400" /><h4 className="font-semibold text-white">Visitor Information</h4></div>
                    <div className="space-y-3">
                      <div><p className="text-xs text-gray-400">Full Name</p><p className="text-sm font-medium text-white">Dr. John Doe</p></div>
                      <div><p className="text-xs text-gray-400">Registration ID</p><p className="text-sm font-medium text-white">REG-2026-12345</p></div>
                      <div><p className="text-xs text-gray-400">Ticket Type</p><p className="text-sm font-medium text-white">Full Access - All Days</p></div>
                    </div>
                  </div>

                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-center gap-3 mb-3"><Ticket className="w-5 h-5 text-purple-400" /><h4 className="font-semibold text-white">Access Benefits</h4></div>
                    <div className="space-y-2">{benefits.map((b, i) => <div key={i} className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-emerald-400" /><span className="text-xs text-gray-300">{b}</span></div>)}</div>
                  </div>
                </div>

                {/* QR Code */}
                <div className="flex flex-col items-center justify-center">
                  <div className="relative"><div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl"></div><div className="relative bg-white p-4 rounded-2xl shadow-2xl"><img src="/Images/QrCode-e-Ticket.png" alt="QR Code" className="w-48 h-48 object-contain" onError={(e) => e.target.src = "https://via.placeholder.com/200x200?text=QR+Code"} /></div></div>
                  <p className="text-xs text-gray-400 mt-4 text-center">Scan this QR code at the entrance<br />for quick check-in</p>
                  <div className="flex items-center gap-2 mt-3"><Shield className="w-3 h-3 text-green-400" /><span className="text-xs text-gray-400">Secure & Verified</span></div>
                </div>
              </div>

              <div className="relative my-6"><div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div></div>
              <p className="text-xs text-gray-400 text-center pt-2">This ticket is non-transferable. Please carry a valid ID for verification.</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button onClick={() => handleAction("download")} disabled={isDownloading} className="flex-1 py-3 bg-gradient-to-br from-purple-500 to-pink-400 text-white rounded-xl font-medium flex items-center justify-center gap-2 disabled:opacity-50">
              {isDownloading ? <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />Downloading...</> : <><Download className="w-4 h-4" />Download PDF Ticket</>}
            </button>
            <button onClick={() => handleAction("email")} className="flex-1 py-3 bg-white/10 border border-white/20 rounded-xl text-gray-300 hover:bg-white/20 flex items-center justify-center gap-2"><Mail className="w-4 h-4" />Email Ticket</button>
            <button onClick={() => handleAction("share")} className="flex-1 py-3 bg-white/10 border border-white/20 rounded-xl text-gray-300 hover:bg-white/20 flex items-center justify-center gap-2"><Share2 className="w-4 h-4" />Share Ticket</button>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mx-6 mb-6 p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
          <div className="flex items-start gap-3"><Shield className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><div><p className="text-sm font-medium text-white">Secure Digital Ticket</p><p className="text-xs text-gray-300">Your ticket is encrypted and securely stored. Please keep this ticket confidential.</p></div></div>
        </div>
      </div>
    </div>
  );
};

export default TicketContent;