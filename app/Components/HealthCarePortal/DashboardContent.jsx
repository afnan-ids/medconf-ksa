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

const DashboardContent = () => {
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
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statsData.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-white dark:bg-gray-950 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${stat.trendUp ? 'text-emerald-600' : 'text-red-600'}`}>
                  <TrendingUp className={`w-4 h-4 ${!stat.trendUp && 'rotate-180'}`} />
                  {stat.trend}
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</h2>
              <div className="mt-4">
                <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all" style={{ width: `${stat.progress}%` }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Booth Updates */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Booth Status Updates</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Recent activity and approvals</p>
            </div>
            <button 
              onClick={() => setShowAllUpdates(!showAllUpdates)} 
              className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
            >
              {showAllUpdates ? "Show Less" : "View All"}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {displayedUpdates.map((item) => (
                <div key={item.id} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 dark:text-white">{item.title}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.details}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-400 mt-2">
                        <Clock className="w-3 h-3" />
                        {item.time}
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadge(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Upcoming Events</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Don't miss these key moments</p>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {eventUpdates.map((event) => (
                <div key={event.id} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="font-semibold text-gray-900 dark:text-white">{event.title}</p>
                  <div className="space-y-1 mt-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      {event.date} • {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Users className="w-4 h-4 text-blue-500" />
                      {event.attendees} attending
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <button className="w-full text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center gap-2">
              View Full Schedule <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Actions</h3>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Create Booth", icon: Store },
              { name: "Send Broadcast", icon: Megaphone },
              { name: "View Reports", icon: TrendingUp },
              { name: "Help Center", icon: MessageSquare },
            ].map((action, idx) => {
              const Icon = action.icon;
              return (
                <button key={idx} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:shadow-md transition-all text-left group">
                  <div className="p-2 bg-white dark:bg-gray-800 rounded-lg w-fit mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="font-medium text-gray-900 dark:text-white">{action.name}</p>
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