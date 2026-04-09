"use client";

import { useState } from "react";
import {
  Diamond,
  CheckCircle,
  Download,
  FileText,
  Calendar,
  DollarSign,
  TrendingUp,
  Award,
  Gift,
  Star,
  Clock,
  Shield,
  AlertCircle,
  ChevronRight,
  Users,
  Video,
  ShoppingBag,
  Globe,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Heart,
  Sparkles,
  Zap,
  Crown,
} from "lucide-react";
import { sponsorshipPackage } from "../../Data/sponsor-data";

const PackageContent = () => {
  const [expandedBenefit, setExpandedBenefit] = useState(null);

  const benefitIcons = {
    "Branding Benefits": Globe,
    "Speaking Opportunities": Video,
    "Exhibition Benefits": ShoppingBag,
    "Networking Benefits": Users,
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-cyan-500/10 to-gray-500/10 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-cyan-500/30 shadow-2xl overflow-hidden">
        <div className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-48 sm:w-64 h-48 sm:h-64 bg-gray-500/20 rounded-full blur-3xl"></div>

        <div className="relative p-4 sm:p-6 text-center">
          <div className="inline-block p-2 sm:p-3 bg-gradient-to-r from-gray-600 to-cyan-700 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 shadow-lg shadow-cyan-500/30">
            <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {sponsorshipPackage.tier} Sponsorship
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 mt-2 max-w-2xl mx-auto px-2">
            Premium partnership package with exclusive benefits and maximum visibility
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-3 sm:mt-4">
            <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] sm:text-sm font-medium border border-emerald-500/30">
              {sponsorshipPackage.status}
            </span>
            <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 text-gray-300 rounded-full text-[10px] sm:text-sm border border-white/10">
              Valid until {sponsorshipPackage.validUntil}
            </span>
          </div>
        </div>
      </div>

      {/* Investment Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Investment Card */}
        <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden lg:col-span-2">
          <div className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

          <div className="relative p-4 sm:p-6 border-b border-white/10">
            <h3 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent flex items-center gap-2">
              <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
              Investment Overview
            </h3>
          </div>

          <div className="relative p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <p className="text-xs sm:text-sm text-gray-400">Total Package Value</p>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-1 break-words">
                  {sponsorshipPackage.amount}
                </p>
                <div className="mt-3">
                  <div className="flex justify-between text-xs sm:text-sm mb-1">
                    <span className="text-gray-400">Paid Amount</span>
                    <span className="text-emerald-400">{sponsorshipPackage.paidAmount}</span>
                  </div>
                  <div className="h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full"
                      style={{ width: "50%" }}
                    />
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-2">
                    Next payment due: {sponsorshipPackage.dueDate}
                  </p>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 sm:p-3 bg-white/5 rounded-lg border border-white/10 gap-1 sm:gap-0">
                  <span className="text-xs sm:text-sm text-gray-300">Contract Signed</span>
                  <span className="text-xs sm:text-sm font-medium text-white flex items-center gap-2">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                    {sponsorshipPackage.contractSigned}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 sm:p-3 bg-white/5 rounded-lg border border-white/10 gap-1 sm:gap-0">
                  <span className="text-xs sm:text-sm text-gray-300">Valid Through</span>
                  <span className="text-xs sm:text-sm font-medium text-white flex items-center gap-2">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                    {sponsorshipPackage.validUntil}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 sm:p-3 bg-white/5 rounded-lg border border-white/10 gap-1 sm:gap-0">
                  <span className="text-xs sm:text-sm text-gray-300">Package Tier</span>
                  <span className="text-xs sm:text-sm font-medium text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                    {sponsorshipPackage.tier}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="relative p-4 sm:p-6">
            <h3 className="text-sm sm:text-base font-semibold text-white flex items-center gap-2 mb-3 sm:mb-4">
              <Download className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
              Quick Actions
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {sponsorshipPackage.documents.map((doc, idx) => (
                <button
                  key={idx}
                  className="w-full flex items-center justify-between p-2 sm:p-3 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors truncate">
                      {doc.name}
                    </span>
                  </div>
                  <Download className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-cyan-400 transition-colors flex-shrink-0 ml-2" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-48 sm:w-64 h-48 sm:h-64 bg-gray-500/10 rounded-full blur-3xl"></div>

        <div className="relative p-4 sm:p-6 border-b border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div>
              <h3 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent flex items-center gap-2">
                <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                Package Benefits & Inclusions
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Everything included in your {sponsorshipPackage.tier} sponsorship package
              </p>
            </div>
            <div className="flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-cyan-500/20 rounded-lg border border-cyan-500/30">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
              <span className="text-[10px] sm:text-xs font-medium text-cyan-400">
                {sponsorshipPackage.benefits.reduce((acc, b) => acc + b.items.length, 0)} Total Benefits
              </span>
            </div>
          </div>
        </div>

        <div className="relative p-4 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {sponsorshipPackage.benefits.map((benefit, idx) => {
              const Icon = benefitIcons[benefit.category] || Award;

              return (
                <div
                  key={idx}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-gray-500/0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

                  <div className="relative p-4 sm:p-5">
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <div className="p-1.5 sm:p-2 bg-gradient-to-br from-cyan-500/20 to-gray-500/20 rounded-lg">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                      </div>
                      <h4 className="font-semibold text-white text-base sm:text-lg">
                        {benefit.category}
                      </h4>
                    </div>

                    <ul className="space-y-1.5 sm:space-y-2">
                      {benefit.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>

                    
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Value Add Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
        <div className="relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-xl p-4 sm:p-5 border border-cyan-500/30">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <div className="p-1.5 sm:p-2 bg-cyan-500/20 rounded-lg">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            </div>
            <h4 className="text-sm sm:text-base font-semibold text-white">ROI Projection</h4>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-white mb-1">3.5x</p>
          <p className="text-[10px] sm:text-xs text-gray-400">Expected return on investment</p>
          <div className="mt-2 sm:mt-3 h-1 sm:h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-gradient-to-r from-gray-400 to-cyan-500 rounded-full" />
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-xl p-4 sm:p-5 border border-purple-500/30">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <div className="p-1.5 sm:p-2 bg-purple-500/20 rounded-lg">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            </div>
            <h4 className="text-sm sm:text-base font-semibold text-white">Brand Exposure</h4>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-white mb-1">15K+</p>
          <p className="text-[10px] sm:text-xs text-gray-400">Expected audience reach</p>
          <p className="text-[10px] sm:text-xs text-emerald-400 mt-2">+45% from last year</p>
        </div>

        <div className="relative bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-xl rounded-xl p-4 sm:p-5 border border-emerald-500/30">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <div className="p-1.5 sm:p-2 bg-emerald-500/20 rounded-lg">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
            </div>
            <h4 className="text-sm sm:text-base font-semibold text-white">Lead Generation</h4>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-white mb-1">500+</p>
          <p className="text-[10px] sm:text-xs text-gray-400">Expected qualified leads</p>
          <p className="text-[10px] sm:text-xs text-emerald-400 mt-2">Target: C-level executives</p>
        </div>
      </div>

      

      {/* Help Section */}
      <div className="relative bg-cyan-500/10 backdrop-blur-xl rounded-xl p-4 sm:p-5 border border-cyan-500/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-gray-500/5"></div>
        <div className="relative flex flex-col sm:flex-row items-start gap-3">
          <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-1">Questions About Your Package?</h4>
            <p className="text-xs sm:text-sm text-gray-300">
              Contact our sponsor relations team for detailed benefit explanations or customization options at{" "}
              <a
                href="mailto:benefits@event.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                benefits@event.com
              </a>{" "}
              or call{" "}
              <span className="text-cyan-400">+966 00 000 0000</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageContent;