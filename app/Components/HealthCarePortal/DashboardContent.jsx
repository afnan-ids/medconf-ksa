"use client";

import { useState } from "react";
import {
  Store,
  Calendar,
  Bell,
  CheckCircle,
  AlertCircle,
  Users,
  MapPin,
  Megaphone,
  Clock,
  ArrowRight,
  TrendingUp,
  MessageSquare,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const DashboardContent = ({ isGlassTheme }) => {
  const [showAllUpdates, setShowAllUpdates] = useState(false);

  const statsData = [
    { title: "Total Booths", value: "120", icon: Store, trend: "+12%", trendUp: true, progress: 80 },
    { title: "Active Exhibitors", value: "98", icon: Users, trend: "+8%", trendUp: true, progress: 70 },
    { title: "Pending Approvals", value: "12", icon: AlertCircle, trend: "-5%", trendUp: false, progress: 40 },
  ];

  const boothUpdates = [
    { id: 1, title: "Booth #A12 - TechCorp", details: "Setup approved with premium package", time: "1 hour ago", status: "approved" },
    { id: 2, title: "Booth #B07 - DesignHub", details: "Awaiting design confirmation", time: "3 hours ago", status: "pending" },
    { id: 3, title: "Booth #C21 - InnovateCo", details: "Design guidelines not met", time: "Yesterday", status: "rejected" },
    { id: 4, title: "Booth #D14 - HealthInc", details: "Confirmed with VIP amenities", time: "Yesterday", status: "approved" },
  ];

  const eventUpdates = [
    { id: 1, title: "Opening Ceremony", date: "June 10", time: "10:00 AM", location: "Main Hall", attendees: "450+" },
    { id: 2, title: "Networking Session", date: "June 11", time: "2:00 PM", location: "Expo Lounge", attendees: "280+" },
    { id: 3, title: "Closing Ceremony", date: "June 12", time: "5:00 PM", location: "Main Stage", attendees: "600+" },
  ];

  const displayedUpdates = showAllUpdates ? boothUpdates : boothUpdates.slice(0, 3);

  const getStatusBadge = (status) => {
    switch(status) {
      case "approved": return "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400";
      case "pending": return "bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400";
      case "rejected": return "bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-400";
      default: return "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300";
    }
  };

  return (
    <div className="space-y-4">
      {/* Compact Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {statsData.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className={`rounded-lg p-3 border shadow-sm hover:shadow-md transition-all ${
              isGlassTheme 
                ? "bg-white/5 backdrop-blur-sm border-white/20 hover:bg-white/10" 
                : "bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800"
            }`}>
              <div className="flex justify-between items-start mb-2">
                <div className={`p-1.5 rounded-md ${isGlassTheme ? "bg-white/10" : "bg-gray-100 dark:bg-gray-800"}`}>
                  <Icon className="w-3.5 h-3.5 text-blue-600" />
                </div>
                <div className={`flex items-center gap-0.5 text-xs font-medium ${stat.trendUp ? 'text-emerald-600' : 'text-red-600'}`}>
                  <TrendingUp className={`w-3 h-3 ${!stat.trendUp && 'rotate-180'}`} />
                  {stat.trend}
                </div>
              </div>
              <p className={`text-xs ${isGlassTheme ? "text-gray-300" : "text-gray-500 dark:text-gray-400"}`}>{stat.title}</p>
              <h2 className={`text-xl font-bold mt-0.5 ${isGlassTheme ? "text-white" : "text-gray-900 dark:text-white"}`}>{stat.value}</h2>
              <div className="mt-2">
                <div className={`h-1.5 rounded-full overflow-hidden ${isGlassTheme ? "bg-white/10" : "bg-gray-100 dark:bg-gray-800"}`}>
                  <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all" style={{ width: `${stat.progress}%` }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Compact Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Booth Updates */}
        <div className={`lg:col-span-2 rounded-lg border shadow-sm ${
          isGlassTheme 
            ? "bg-white/5 backdrop-blur-sm border-white/20" 
            : "bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800"
        }`}>
          <div className={`p-3 border-b flex justify-between items-center ${isGlassTheme ? "border-white/20" : "border-gray-200 dark:border-gray-800"}`}>
            <div>
              <h3 className={`text-sm font-semibold ${isGlassTheme ? "text-white" : "text-gray-900 dark:text-white"}`}>Booth Updates</h3>
              <p className={`text-xs mt-0.5 ${isGlassTheme ? "text-gray-300" : "text-gray-500 dark:text-gray-400"}`}>Recent activity</p>
            </div>
            <button 
              onClick={() => setShowAllUpdates(!showAllUpdates)} 
              className="text-xs text-blue-600 hover:text-blue-700 font-medium flex items-center gap-0.5"
            >
              {showAllUpdates ? "Less" : "All"}
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
          <div className="p-3">
            <div className="space-y-2">
              {displayedUpdates.map((item) => (
                <div key={item.id} className={`p-2.5 rounded-md transition-all ${
                  isGlassTheme 
                    ? "bg-white/5 hover:bg-white/10" 
                    : "bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}>
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-semibold ${isGlassTheme ? "text-white" : "text-gray-900 dark:text-white"}`}>{item.title}</p>
                      <p className={`text-xs mt-0.5 ${isGlassTheme ? "text-gray-300" : "text-gray-600 dark:text-gray-400"}`}>{item.details}</p>
                      <div className={`flex items-center gap-1 text-xs mt-1 ${isGlassTheme ? "text-gray-400" : "text-gray-400"}`}>
                        <Clock className="w-2.5 h-2.5" />
                        {item.time}
                      </div>
                    </div>
                    <span className={`px-1.5 py-0.5 rounded-full text-xs font-medium flex-shrink-0 ${getStatusBadge(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className={`rounded-lg border shadow-sm ${
          isGlassTheme 
            ? "bg-white/5 backdrop-blur-sm border-white/20" 
            : "bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800"
        }`}>
          <div className={`p-3 border-b ${isGlassTheme ? "border-white/20" : "border-gray-200 dark:border-gray-800"}`}>
            <h3 className={`text-sm font-semibold ${isGlassTheme ? "text-white" : "text-gray-900 dark:text-white"}`}>Upcoming Events</h3>
            <p className={`text-xs mt-0.5 ${isGlassTheme ? "text-gray-300" : "text-gray-500 dark:text-gray-400"}`}>Key moments</p>
          </div>
          <div className="p-3">
            <div className="space-y-2">
              {eventUpdates.map((event) => (
                <div key={event.id} className={`p-2.5 rounded-md ${isGlassTheme ? "bg-white/5" : "bg-gray-50 dark:bg-gray-900"}`}>
                  <p className={`text-sm font-semibold ${isGlassTheme ? "text-white" : "text-gray-900 dark:text-white"}`}>{event.title}</p>
                  <div className="space-y-1 mt-1.5">
                    <div className="flex items-center gap-1.5 text-xs">
                      <Calendar className="w-3 h-3 text-blue-500" />
                      <span className={isGlassTheme ? "text-gray-300" : "text-gray-600 dark:text-gray-400"}>{event.date} • {event.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs">
                      <MapPin className="w-3 h-3 text-blue-500" />
                      <span className={isGlassTheme ? "text-gray-300" : "text-gray-600 dark:text-gray-400"}>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs">
                      <Users className="w-3 h-3 text-blue-500" />
                      <span className={isGlassTheme ? "text-gray-300" : "text-gray-600 dark:text-gray-400"}>{event.attendees}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`p-2.5 border-t ${isGlassTheme ? "border-white/20" : "border-gray-200 dark:border-gray-800"}`}>
            <button className="w-full text-xs text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center gap-1">
              Full Schedule <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Compact Quick Actions */}
      <div className={`rounded-lg border shadow-sm ${
        isGlassTheme 
          ? "bg-white/5 backdrop-blur-sm border-white/20" 
          : "bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800"
      }`}>
        <div className={`p-3 border-b ${isGlassTheme ? "border-white/20" : "border-gray-200 dark:border-gray-800"}`}>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <h3 className={`text-sm font-semibold ${isGlassTheme ? "text-white" : "text-gray-900 dark:text-white"}`}>Quick Actions</h3>
          </div>
        </div>
        <div className="p-3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              { name: "Create Booth", icon: Store },
              { name: "Broadcast", icon: Megaphone },
              { name: "Reports", icon: TrendingUp },
              { name: "Help", icon: MessageSquare },
            ].map((action, idx) => {
              const Icon = action.icon;
              return (
                <button key={idx} className={`p-2.5 rounded-md hover:shadow-md transition-all text-left group ${
                  isGlassTheme ? "bg-white/5 hover:bg-white/10" : "bg-gray-50 dark:bg-gray-900"
                }`}>
                  <div className={`p-1.5 rounded-md w-fit mb-2 group-hover:scale-110 transition-transform ${
                    isGlassTheme ? "bg-white/10" : "bg-white dark:bg-gray-800"
                  }`}>
                    <Icon className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <p className={`text-xs font-medium ${isGlassTheme ? "text-white" : "text-gray-900 dark:text-white"}`}>{action.name}</p>
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