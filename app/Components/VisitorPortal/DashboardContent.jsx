"use client";

import { useState } from "react";
import {
  Calendar,
  Bell,
  TrendingUp,
  Users,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Ticket,
  UserCheck,
  Key,
  CalendarDays,
  QrCode,
  Headphones,
} from "lucide-react";
import { statsData, notifications, quickLinks } from "../../Data/visitor-data";

const DashboardContent = () => {
  const [showAllUpdates, setShowAllUpdates] = useState(false);

  // Map icon names to actual Lucide icons
  const getIcon = (iconName) => {
    switch(iconName) {
      case "Calendar": return Calendar;
      case "Map": return MapPin;
      case "QrCode": return QrCode;
      case "Headphones": return Headphones;
      default: return Calendar;
    }
  };

  // Dashboard stats with custom icons
  const dashboardStats = [
    { title: "Event", value: "Global Health 2026", sub: "March 12-14, 2026", icon: CalendarDays, trend: "+12%" },
    { title: "Access", value: "All Areas", sub: "VIP Pass", icon: Key, trend: "Full" },
    { title: "Days Until", value: "12 Days", sub: "March 12, 2026", icon: Ticket, trend: "Countdown" },
  ];

  const displayedUpdates = showAllUpdates ? notifications : notifications.slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Stats Cards - Glassmorphism */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardStats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
              
              {/* Decorative corner glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/20 rounded-bl-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative flex justify-between items-start mb-4">
                <div className="p-2.5 bg-white/10 rounded-lg border border-white/20">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-emerald-400">
                  <TrendingUp className="w-4 h-4" />
                  {stat.trend}
                </div>
              </div>
              <p className="text-sm text-gray-300">{stat.title}</p>
              <h2 className="text-xl font-bold text-white mt-1 truncate">
                {stat.value}
              </h2>
              {stat.sub && (
                <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  {stat.sub}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Notifications / Updates - Glass */}
        <div className="lg:col-span-2 relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative p-6 border-b border-white/10 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
                Recent Updates
              </h3>
              <p className="text-sm text-gray-300 mt-1">Latest news and announcements</p>
            </div>
            <button 
              onClick={() => setShowAllUpdates(!showAllUpdates)} 
              className="text-sm text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 transition-colors"
            >
              {showAllUpdates ? "Show Less" : "View All"}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="relative p-6">
            <div className="space-y-3">
              {displayedUpdates.map((item) => (
                <div
                  key={item.id}
                  className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  
                  <div className="relative flex justify-between items-start">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-9 h-9 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <Bell className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-300 mt-1">{item.message}</p>
                        <div className="flex items-center gap-1 text-xs text-gray-400 mt-2">
                          <Clock className="w-3 h-3 text-blue-400" />
                          {item.time}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Next Event & Progress - Glass */}
        <div className="space-y-6">
          {/* Next Session Card */}
          <div className="relative bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-2xl p-5 border border-white/10 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
            <div className="relative">
              <h3 className="text-sm font-semibold text-blue-400 mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Next Session
              </h3>
              <p className="text-lg font-bold text-white">Opening Ceremony</p>
              <p className="text-sm text-gray-300 mt-1">Today at 10:00 AM</p>
              <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3" />
                Main Hall
              </p>
              <button className="mt-4 text-xs bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg hover:bg-white/20 transition-all">
                Add to Calendar
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Quick Actions - Glass */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative p-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          </div>
        </div>
        <div className="relative p-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {quickLinks.map((action, idx) => {
              const Icon = getIcon(action.icon);
              return (
                <button key={idx} className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden text-left">
                  {/* Hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  
                  <div className="relative">
                    <div className="p-2 bg-white/10 rounded-lg w-fit mb-3 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                      <Icon className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                    <p className="font-medium text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
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