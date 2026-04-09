"use client";

import { useState } from "react";
import {
  Diamond,
  CheckCircle,
  DollarSign,
  Users,
  TrendingUp,
  Bell,
  ChevronRight,
  Calendar,
  MapPin,
  Clock,
  AlertCircle,
  FileText,
  Download,
  Star,
  Award,
  Gift,
  Sparkles,
  Target,
  Eye,
  Share2,
  MessageCircle,
} from "lucide-react";
import {
  dashboardStats,
  notifications,
  eventSchedule,
  sponsorshipPackage,
} from "../../Data/sponsor-data";

const DashboardContent = () => {
  const [showAllNotifications, setShowAllNotifications] = useState(false);
  const displayedNotifications = showAllNotifications
    ? notifications
    : notifications.slice(0, 3);

  // Get upcoming events (next 3)
  const upcomingEvents = eventSchedule
    .flatMap((day) =>
      day.sessions.map((session) => ({
        ...session,
        day: day.day,
      }))
    )
    .slice(0, 3);

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Welcome Section - Glassmorphism */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-48 sm:w-64 h-48 sm:h-64 bg-gray-500/10 rounded-full blur-3xl"></div>

        <div className="relative p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                <span className="text-xs sm:text-sm font-medium text-cyan-400 uppercase tracking-wide">
                  Welcome Back
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Pharma International
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 flex items-center gap-2">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                <span>Platinum Sponsor • Premium Partner</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards - Glassmorphism */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {dashboardStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/10 shadow-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-gray-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-cyan-500/20 rounded-bl-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                <div className="flex justify-between items-start mb-2 sm:mb-3">
                  <div className="p-2 sm:p-2.5 bg-white/10 rounded-lg border border-white/20">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                  </div>
                  <div className="flex items-center gap-1 text-xs sm:text-sm font-medium text-emerald-400">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                    {stat.trend}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-300">{stat.title}</p>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-1 break-words">
                  {stat.value}
                </h2>
                {stat.sub && (
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-1 sm:mt-2 truncate">
                    {stat.sub}
                  </p>
                )}
                <div className="mt-2 sm:mt-3">
                  <div className="h-1 sm:h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-gray-400 to-cyan-500 rounded-full transition-all duration-500"
                      style={{ width: stat.title === "Total Investment" ? "50%" : "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Left Column - Notifications & Quick Actions */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {/* Notifications */}
          <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="relative p-4 sm:p-5 border-b border-white/10">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent flex items-center gap-2">
                    <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                    Notifications & Updates
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1">
                    Stay updated with your sponsorship status
                  </p>
                </div>
                <button
                  onClick={() => setShowAllNotifications(!showAllNotifications)}
                  className="text-xs sm:text-sm text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 transition-colors"
                >
                  {showAllNotifications ? "Show Less" : "View All"}
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>

            <div className="relative p-4 sm:p-5">
              <div className="space-y-2 sm:space-y-3">
                {displayedNotifications.map((item) => (
                  <div
                    key={item.id}
                    className="group relative p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-gray-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                    <div className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                      <div className="flex-1">
                        <p className="text-sm sm:text-base font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 group-hover:bg-clip-text transition-all duration-300">
                          {item.title}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-300 mt-1">
                          {item.message}
                        </p>
                        <div className="flex items-center gap-1 text-[10px] sm:text-xs text-gray-400 mt-2">
                          <Clock className="w-3 h-3 text-cyan-400" />
                          {item.time}
                        </div>
                      </div>
                      <button className="px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/20 transition-all whitespace-nowrap">
                        {item.action}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Schedule */}
          <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="absolute -bottom-20 -left-20 w-48 sm:w-64 h-48 sm:h-64 bg-gray-500/10 rounded-full blur-3xl"></div>

            <div className="relative p-4 sm:p-5 border-b border-white/10">
              <h3 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent flex items-center gap-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                Upcoming Schedule
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Your upcoming sponsor activities
              </p>
            </div>

            <div className="relative p-4 sm:p-5">
              <div className="space-y-2 sm:space-y-3">
                {upcomingEvents.map((event, idx) => (
                  <div
                    key={idx}
                    className="p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-3">
                      <div className="flex-1">
                        <p className="text-sm sm:text-base font-semibold text-white">{event.title}</p>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2">
                          <div className="flex items-center gap-1 text-[10px] sm:text-xs text-gray-300">
                            <Calendar className="w-3 h-3 text-cyan-400" />
                            {event.day}
                          </div>
                          <div className="flex items-center gap-1 text-[10px] sm:text-xs text-gray-300">
                            <Clock className="w-3 h-3 text-gray-400" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-1 text-[10px] sm:text-xs text-gray-300">
                            <MapPin className="w-3 h-3 text-gray-400" />
                            <span className="truncate">{event.location}</span>
                          </div>
                        </div>
                      </div>
                      <span
                        className={`px-2 py-1 text-[10px] sm:text-xs font-medium rounded-full backdrop-blur-sm border whitespace-nowrap ${
                          event.type === "Mandatory"
                            ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
                            : event.type === "Exclusive"
                            ? "bg-gray-500/20 text-gray-400 border-gray-500/30"
                            : "bg-white/10 text-gray-300 border-white/10"
                        }`}
                      >
                        {event.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4 sm:space-y-6">
          {/* Sponsorship Benefits Highlight */}
          <div className="relative bg-gradient-to-br from-cyan-500/10 to-gray-500/10 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-cyan-500/30 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-cyan-500/20 rounded-bl-full blur-2xl"></div>

            <div className="relative p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                <h3 className="text-sm sm:text-base font-semibold text-white">Your Benefits</h3>
              </div>

              <div className="space-y-2 sm:space-y-3">
                {sponsorshipPackage.benefits.slice(0, 3).map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-white">
                        {benefit.category}
                      </p>
                      <p className="text-[10px] sm:text-xs text-gray-400">
                        {benefit.items.length} inclusions
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="relative w-full mt-3 sm:mt-4 py-1.5 sm:py-2 bg-gradient-to-r from-gray-600 to-cyan-700 text-white rounded-lg text-xs sm:text-sm font-medium overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30">
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center gap-2">
                  <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                  View Full Package
                </span>
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative p-4 sm:p-5">
              <h3 className="text-sm sm:text-base font-semibold text-white flex items-center gap-2 mb-3 sm:mb-4">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                Quick Stats
              </h3>

              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-gray-300">Profile Views</span>
                  <span className="text-xs sm:text-sm font-semibold text-white">1,234</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-gray-300">Lead Captures</span>
                  <span className="text-xs sm:text-sm font-semibold text-white">89</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-gray-300">Meeting Requests</span>
                  <span className="text-xs sm:text-sm font-semibold text-white">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-gray-300">Documents Downloaded</span>
                  <span className="text-xs sm:text-sm font-semibold text-white">45</span>
                </div>
              </div>

              <div className="mt-3 sm:mt-4 pt-3 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] sm:text-xs text-gray-400">Completion Rate</span>
                  <span className="text-[10px] sm:text-xs font-semibold text-emerald-400">75%</span>
                </div>
                <div className="mt-2 h-1 sm:h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-emerald-500 to-green-400 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section - Glass style */}
      <div className="relative bg-cyan-500/10 backdrop-blur-xl rounded-xl p-4 sm:p-5 border border-cyan-500/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-gray-500/5"></div>
        <div className="relative flex flex-col sm:flex-row items-start gap-3">
          <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-1">Need Assistance?</h4>
            <p className="text-xs sm:text-sm text-gray-300">
              Contact your dedicated sponsor relation manager at{" "}
              <a
                href="mailto:sponsors@event.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                sponsors@event.com
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

export default DashboardContent;