"use client";

import { useState } from "react";
import {
  Calendar,
  Bell,
  TrendingUp,
  Users,
  MapPin,
  Clock,
  ChevronRight,
  Sparkles,
  ChevronRight,
  Store,
  CheckCircle,
  DollarSign,
  Package,
  FileText,
  Edit2Icon,
  ShoppingCart,
  QrCode,
  UserCircle,
} from "lucide-react";
import {
  exhibitorStats,
  exhibitorNotifications,
  exhibitorEvents,
  exhibitorQuickLinks,
} from "../../Data/exhibitor-data";

const DashboardContent = () => {
  const [showAllUpdates, setShowAllUpdates] = useState(false);

  const getIcon = (iconName) => {
    switch (iconName) {
      case "Store":
        return Store;
      case "CheckCircle":
        return CheckCircle;
      case "DollarSign":
        return DollarSign;
      case "UserCircle":
        return UserCircle;
      case "FileText":
        return FileText;
      case "Edit":
        return Edit2Icon;
      case "Users":
        return Users;
      case "ShoppingCart":
        return ShoppingCart;
      case "Map":
        return MapPin;
      case "QrCode":
        return QrCode;
      default:
        return Store;
    }
  };

  const dashboardStats = exhibitorStats.map((stat) => ({
    ...stat,
    Icon: getIcon(stat.icon),
  }));

  const displayedUpdates = showAllUpdates
    ? exhibitorNotifications
    : exhibitorNotifications.slice(0, 3);

  return (
    <div className="space-y-4 sm:space-y-5 md:space-y-6">
      {/* Stats Cards - Fully Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        {dashboardStats.map((stat, i) => {
          const Icon = stat.Icon;
          return (
            <div
              key={i}
              className="group relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10 shadow-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-blue-500/20 rounded-bl-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative flex justify-between items-start mb-3 sm:mb-4">
                <div className="p-2 sm:p-2.5 bg-white/10 rounded-lg border border-white/20">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                </div>
                <div className="flex items-center gap-1 text-xs sm:text-sm font-medium text-emerald-400">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                  {stat.trend}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-300">{stat.title}</p>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-1 truncate">
                {stat.value}
              </h2>
              {stat.sub && (
                <p className="text-[10px] sm:text-xs text-gray-400 mt-2 flex items-center gap-1">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  {stat.sub}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Main Section - Responsive Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {/* Notifications / Updates */}
        <div className="lg:col-span-2 relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="relative p-4 sm:p-5 md:p-6 border-b border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <h3 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
                Recent Updates
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-0.5 sm:mt-1">
                Latest news and announcements
              </p>
            </div>
            <button
              onClick={() => setShowAllUpdates(!showAllUpdates)}
              className="text-xs sm:text-sm text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 transition-colors"
            >
              {showAllUpdates ? "Show Less" : "View All"}
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>

          <div className="relative p-4 sm:p-5 md:p-6">
            <div className="space-y-2 sm:space-y-3">
              {displayedUpdates.map((item) => (
                <div
                  key={item.id}
                  className="group relative p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                  <div className="relative flex gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Bell className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-white text-sm sm:text-base group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300 break-words">
                        {item.title}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-300 mt-1 break-words">
                        {item.message}
                      </p>
                      <div className="flex items-center gap-1 text-[10px] sm:text-xs text-gray-400 mt-2">
                        <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400" />
                        {item.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {/* Next Event Card */}
          <div className="relative bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/10 overflow-hidden">
            <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
            <div className="relative">
              <h3 className="text-xs sm:text-sm font-semibold text-blue-400 mb-2 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Next Event
              </h3>
              <p className="text-base sm:text-lg font-bold text-white">
                Exhibitor Briefing
              </p>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                March 10, 2026 at 10:00 AM
              </p>
              <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                Main Hall A
              </p>
              <button className="mt-3 sm:mt-4 text-[10px] sm:text-xs bg-white/10 backdrop-blur-sm px-2.5 py-1.5 sm:px-3 rounded-lg hover:bg-white/20 transition-all flex items-center gap-1">
                <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                Add to Calendar
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/10">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
              Quick Stats
            </h3>
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex justify-between items-center pb-1.5 border-b border-white/10">
                <span className="text-xs text-gray-400">Leads Collected</span>
                <span className="text-sm sm:text-base font-bold text-white">
                  245
                </span>
              </div>
              <div className="flex justify-between items-center pb-1.5 border-b border-white/10">
                <span className="text-xs text-gray-400">Staff Registered</span>
                <span className="text-sm sm:text-base font-bold text-white">
                  5 / 8
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">Days Until Event</span>
                <span className="text-sm sm:text-base font-bold text-white">
                  12 Days
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="absolute -top-20 -left-20 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="relative p-4 sm:p-5 md:p-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            <h3 className="text-base sm:text-lg font-semibold text-white">
              Upcoming Events
            </h3>
          </div>
        </div>

        <div className="relative p-4 sm:p-5 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {exhibitorEvents.map((event) => (
              <div
                key={event.id}
                className="group relative p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-1.5 sm:p-2 bg-white/10 rounded-lg">
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                    </div>
                    <span
                      className={`text-[10px] sm:text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full ${
                        event.type === "mandatory"
                          ? "bg-red-500/20 text-red-400"
                          : event.type === "setup"
                            ? "bg-amber-500/20 text-amber-400"
                            : "bg-green-500/20 text-green-400"
                      } capitalize`}
                    >
                      {event.type}
                    </span>
                  </div>
                  <p className="font-semibold text-white text-xs sm:text-sm break-words">
                    {event.title}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-2 flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5" />
                    {event.date} • {event.time}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-1 flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5" />
                    {event.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions / Quick Links */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="absolute -top-20 -left-20 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="relative p-4 sm:p-5 md:p-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            <h3 className="text-base sm:text-lg font-semibold text-white">
              Quick Links
            </h3>
          </div>
        </div>

        <div className="relative p-4 sm:p-5 md:p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {exhibitorQuickLinks.map((action, idx) => {
              const Icon = getIcon(action.icon);
              return (
                <button
                  key={idx}
                  className="group relative p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden text-center sm:text-left w-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                  <div className="relative flex flex-col items-center gap-2">
                    <div className="p-1.5 sm:p-2 bg-white/10 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300 border border-white/20">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-[10px] sm:text-xs font-medium text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
                      {action.name}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
