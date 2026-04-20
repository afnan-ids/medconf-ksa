// "use client";

// import { useState } from "react";
// import {
//   Megaphone,
//   Send,
//   Mail,
//   Bell,
//   Users,
//   Calendar,
//   Clock,
//   Eye,
//   CheckCircle,
//   XCircle,
//   RefreshCw,
//   Search,
//   Filter,
//   ChevronDown,
//   Plus,
//   Trash2,
//   Edit,
//   Copy,
//   BarChart3,
//   MessageSquare,
//   Globe,
//   Smartphone,
//   Target,
//   Tag,
//   Zap,
//   Repeat,
//   Download,
//   X,
//   AlertCircle,
// } from "lucide-react";

// export default function NotificationsAnnouncements() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [statusFilter, setStatusFilter] = useState("all");
//   const [typeFilter, setTypeFilter] = useState("all");
//   const [showCreateModal, setShowCreateModal] = useState(false);
//   const [showDetailsModal, setShowDetailsModal] = useState(false);
//   const [selectedNotification, setSelectedNotification] = useState(null);

//   // Notifications data
//   const [notifications, setNotifications] = useState([
//     {
//       id: 1,
//       title: "Early Bird Registration Closing Soon",
//       message: "Early bird registration for Global Health Exhibition 2026 ends in 7 days. Register now to save 30%!",
//       type: "announcement",
//       channel: ["email", "sms", "in_app"],
//       audience: "all",
//       status: "sent",
//       sentCount: 1247,
//       openRate: 68,
//       clickRate: 42,
//       scheduledDate: null,
//       sentDate: "2024-03-15 09:00:00",
//       createdBy: "Admin User",
//       priority: "high",
//       tags: ["registration", "promotion"],
//     },
//     {
//       id: 2,
//       title: "Booth Allocation Update",
//       message: "Booth assignments for Hall A and Hall B have been updated. Please review your allocation in the portal.",
//       type: "announcement",
//       channel: ["email", "in_app"],
//       audience: "exhibitors",
//       status: "sent",
//       sentCount: 248,
//       openRate: 72,
//       clickRate: 55,
//       scheduledDate: null,
//       sentDate: "2024-03-14 14:30:00",
//       createdBy: "Admin User",
//       priority: "medium",
//       tags: ["booths", "allocation"],
//     },
//     {
//       id: 3,
//       title: "New CPD Course Available",
//       message: "A new accredited course 'AI in Modern Healthcare' is now available. Earn 15 CPD points upon completion.",
//       type: "promotion",
//       channel: ["email", "in_app"],
//       audience: "practitioners",
//       status: "sent",
//       sentCount: 892,
//       openRate: 45,
//       clickRate: 28,
//       scheduledDate: null,
//       sentDate: "2024-03-13 11:15:00",
//       createdBy: "Admin User",
//       priority: "medium",
//       tags: ["cpd", "course"],
//     },
//     {
//       id: 4,
//       title: "Payment Reminder: Invoice INV-2024-004",
//       message: "This is a reminder that your invoice INV-2024-004 is due on March 6, 2024. Please process payment to avoid late fees.",
//       type: "reminder",
//       channel: ["email", "sms"],
//       audience: "specific",
//       targetUsers: ["HealthAI Systems"],
//       status: "sent",
//       sentCount: 1,
//       openRate: 100,
//       clickRate: 100,
//       scheduledDate: null,
//       sentDate: "2024-03-10 08:00:00",
//       createdBy: "Admin User",
//       priority: "high",
//       tags: ["payment", "reminder"],
//     },
//     {
//       id: 5,
//       title: "Speaker Announcement: Dr. Sarah Johnson",
//       message: "We're excited to announce Dr. Sarah Johnson as our keynote speaker for the Cardiology Summit 2026.",
//       type: "announcement",
//       channel: ["email", "in_app", "sms"],
//       audience: "all",
//       status: "scheduled",
//       sentCount: 0,
//       openRate: 0,
//       clickRate: 0,
//       scheduledDate: "2024-03-20 10:00:00",
//       sentDate: null,
//       createdBy: "Admin User",
//       priority: "high",
//       tags: ["speakers", "event"],
//     },
//     {
//       id: 6,
//       title: "Exhibitor Setup Instructions",
//       message: "Setup instructions for exhibitors are now available. Please review the guidelines before arrival.",
//       type: "announcement",
//       channel: ["email", "in_app"],
//       audience: "exhibitors",
//       status: "draft",
//       sentCount: 0,
//       openRate: 0,
//       clickRate: 0,
//       scheduledDate: null,
//       sentDate: null,
//       createdBy: "Admin User",
//       priority: "medium",
//       tags: ["setup", "logistics"],
//     },
//   ]);

//   const audienceOptions = [
//     { value: "all", label: "All Users", count: 1247, icon: Globe },
//     { value: "exhibitors", label: "Exhibitors Only", count: 248, icon: Users },
//     { value: "sponsors", label: "Sponsors Only", count: 56, icon: Users },
//     { value: "practitioners", label: "Healthcare Practitioners", count: 892, icon: Users },
//     { value: "specific", label: "Specific Users", count: null, icon: Target },
//   ];

//   const typeOptions = [
//     { value: "all", label: "All Types", color: "gray" },
//     { value: "announcement", label: "Announcements", color: "indigo", icon: Megaphone },
//     { value: "promotion", label: "Promotions", color: "amber", icon: Tag },
//     { value: "reminder", label: "Reminders", color: "cyan", icon: Bell },
//     { value: "alert", label: "Alerts", color: "red", icon: AlertCircle },
//   ];

//   const statusOptions = [
//     { value: "all", label: "All Status", color: "gray" },
//     { value: "sent", label: "Sent", color: "emerald", icon: CheckCircle },
//     { value: "scheduled", label: "Scheduled", color: "amber", icon: Calendar },
//     { value: "draft", label: "Draft", color: "gray", icon: Edit },
//     { value: "failed", label: "Failed", color: "red", icon: XCircle },
//   ];

//   const channelOptions = [
//     { value: "email", label: "Email", icon: Mail, color: "blue" },
//     { value: "sms", label: "SMS", icon: MessageSquare, color: "green" },
//     { value: "in_app", label: "In-App", icon: Bell, color: "purple" },
//   ];

//   const getStatusBadge = (status) => {
//     switch (status) {
//       case "sent":
//         return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
//       case "scheduled":
//         return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
//       case "draft":
//         return "bg-gray-500/20 text-gray-400 border border-gray-500/30";
//       case "failed":
//         return "bg-red-500/20 text-red-400 border border-red-500/30";
//       default:
//         return "bg-white/10 text-gray-300 border border-white/10";
//     }
//   };

//   const getTypeBadge = (type) => {
//     switch (type) {
//       case "announcement":
//         return "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30";
//       case "promotion":
//         return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
//       case "reminder":
//         return "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30";
//       case "alert":
//         return "bg-red-500/20 text-red-400 border border-red-500/30";
//       default:
//         return "bg-white/10 text-gray-300 border border-white/10";
//     }
//   };

//   const getPriorityBadge = (priority) => {
//     switch (priority) {
//       case "high":
//         return "bg-red-500/20 text-red-400 border border-red-500/30";
//       case "medium":
//         return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
//       case "low":
//         return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
//       default:
//         return "bg-white/10 text-gray-300 border border-white/10";
//     }
//   };

//   const filteredNotifications = notifications.filter((n) => {
//     const matchesSearch = n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                           n.message.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesStatus = statusFilter === "all" || n.status === statusFilter;
//     const matchesType = typeFilter === "all" || n.type === typeFilter;
//     return matchesSearch && matchesStatus && matchesType;
//   });

//   const stats = {
//     total: notifications.length,
//     sent: notifications.filter(n => n.status === "sent").length,
//     scheduled: notifications.filter(n => n.status === "scheduled").length,
//     draft: notifications.filter(n => n.status === "draft").length,
//     totalRecipients: notifications.reduce((sum, n) => sum + n.sentCount, 0),
//     avgOpenRate: Math.round(notifications.filter(n => n.openRate > 0).reduce((sum, n) => sum + n.openRate, 0) / notifications.filter(n => n.openRate > 0).length) || 0,
//   };

//   const handleDuplicate = (notification) => {
//     const newNotification = {
//       ...notification,
//       id: notifications.length + 1,
//       title: `${notification.title} (Copy)`,
//       status: "draft",
//       sentCount: 0,
//       openRate: 0,
//       clickRate: 0,
//       sentDate: null,
//     };
//     setNotifications([newNotification, ...notifications]);
//   };

//   const handleDelete = (id) => {
//     setNotifications(notifications.filter(n => n.id !== id));
//   };

//   return (
//     <div className="space-y-6">
//       {/* Page Header */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//         <div>
//           <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">
//             Notifications & Announcements
//           </h1>
//           <p className="text-sm text-gray-400 mt-1">
//             Send system announcements to portal users
//           </p>
//         </div>
//         <div className="flex items-center gap-2">
//           <button className="relative px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
//             <Download className="w-4 h-4" />
//             <span>Export Report</span>
//           </button>
//           <button
//             onClick={() => setShowCreateModal(true)}
//             className="relative px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium flex items-center gap-2 overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30"
//           >
//             <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
//             <Plus className="w-4 h-4" />
//             <span>Create Notification</span>
//           </button>
//         </div>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
//         {[
//           { label: "Total Notifications", value: stats.total, icon: Megaphone, color: "indigo" },
//           { label: "Sent", value: stats.sent, icon: CheckCircle, color: "emerald" },
//           { label: "Scheduled", value: stats.scheduled, icon: Calendar, color: "amber" },
//           { label: "Draft", value: stats.draft, icon: Edit, color: "gray" },
//           { label: "Avg. Open Rate", value: `${stats.avgOpenRate}%`, icon: Eye, color: "cyan" },
//         ].map((stat, idx) => (
//           <div key={idx} className="relative bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-xs text-gray-400">{stat.label}</p>
//                 <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
//               </div>
//               <div className={`p-2 bg-${stat.color}-500/20 rounded-lg border border-${stat.color}-500/30`}>
//                 <stat.icon className={`w-4 h-4 text-${stat.color}-400`} />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Audience Quick Stats */}
//       <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
//         {audienceOptions.filter(a => a.count !== null).map((audience) => (
//           <div key={audience.value} className="relative bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10">
//             <div className="flex items-center gap-3">
//               <div className="p-2 bg-indigo-500/20 rounded-lg border border-indigo-500/30">
//                 <audience.icon className="w-4 h-4 text-indigo-400" />
//               </div>
//               <div>
//                 <p className="text-xs text-gray-400">{audience.label}</p>
//                 <p className="text-xl font-bold text-white">{audience.count.toLocaleString()}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Filters */}
//       <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
//         <div className="p-5 border-b border-white/10">
//           <div className="flex flex-col sm:flex-row gap-4">
//             {/* Search */}
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search notifications..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-indigo-500/50 transition-all"
//               />
//             </div>

//             {/* Type Filter */}
//             <div className="relative w-40">
//               <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
//               <select
//                 value={typeFilter}
//                 onChange={(e) => setTypeFilter(e.target.value)}
//                 className="w-full pl-10 pr-8 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50 appearance-none cursor-pointer"
//               >
//                 {typeOptions.map((opt) => (
//                   <option key={opt.value} value={opt.value}>{opt.label}</option>
//                 ))}
//               </select>
//               <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
//             </div>

//             {/* Status Filter */}
//             <div className="relative w-40">
//               <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
//               <select
//                 value={statusFilter}
//                 onChange={(e) => setStatusFilter(e.target.value)}
//                 className="w-full pl-10 pr-8 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50 appearance-none cursor-pointer"
//               >
//                 {statusOptions.map((opt) => (
//                   <option key={opt.value} value={opt.value}>{opt.label}</option>
//                 ))}
//               </select>
//               <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
//             </div>

//             {/* Refresh Button */}
//             <button className="p-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all">
//               <RefreshCw className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         {/* Notifications Table */}
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="border-b border-white/10 bg-white/5">
//               <tr>
//                 <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Title</th>
//                 <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
//                 <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Audience</th>
//                 <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Channels</th>
//                 <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
//                 <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Stats</th>
//                 <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
//                 <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredNotifications.length === 0 ? (
//                 <tr>
//                   <td colSpan="8" className="p-12 text-center">
//                     <Megaphone className="w-12 h-12 text-gray-500 mx-auto mb-3" />
//                     <p className="text-gray-400">No notifications found</p>
//                   </td>
//                 </tr>
//               ) : (
//                 filteredNotifications.map((notification) => (
//                   <tr key={notification.id} className="border-b border-white/5 hover:bg-white/5 transition-all duration-300">
//                     <td className="p-4">
//                       <div>
//                         <p className="text-sm font-semibold text-white">{notification.title}</p>
//                         <p className="text-xs text-gray-400 truncate max-w-xs">{notification.message.substring(0, 60)}...</p>
//                       </div>
//                     </td>
//                     <td className="p-4">
//                       <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeBadge(notification.type)}`}>
//                         {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
//                       </span>
//                     </td>
//                     <td className="p-4">
//                       <span className="text-sm text-gray-300 capitalize">
//                         {notification.audience === "all" ? "All Users" : 
//                          notification.audience === "exhibitors" ? "Exhibitors" :
//                          notification.audience === "sponsors" ? "Sponsors" :
//                          notification.audience === "practitioners" ? "Practitioners" : "Specific Users"}
//                       </span>
//                     </td>
//                     <td className="p-4">
//                       <div className="flex gap-1">
//                         {notification.channel.map((ch) => {
//                           const channel = channelOptions.find(c => c.value === ch);
//                           return channel ? (
//                             <span key={ch} className={`px-1.5 py-0.5 text-[10px] font-medium rounded bg-${channel.color}-500/20 text-${channel.color}-400`}>
//                               {channel.label}
//                             </span>
//                           ) : null;
//                         })}
//                       </div>
//                     </td>
//                     <td className="p-4">
//                       <div className="flex items-center gap-1">
//                         <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(notification.status)}`}>
//                           {notification.status.charAt(0).toUpperCase() + notification.status.slice(1)}
//                         </span>
//                         {notification.priority === "high" && (
//                           <span className="px-1.5 py-0.5 text-[10px] font-medium rounded-full bg-red-500/20 text-red-400">
//                             High
//                           </span>
//                         )}
//                       </div>
//                     </td>
//                     <td className="p-4">
//                       {notification.status === "sent" ? (
//                         <div className="text-center">
//                           <p className="text-xs font-semibold text-white">{notification.sentCount}</p>
//                           <p className="text-[10px] text-gray-400">sent</p>
//                           <div className="flex gap-2 mt-1">
//                             <span className="text-[10px] text-emerald-400">{notification.openRate}% open</span>
//                             <span className="text-[10px] text-cyan-400">{notification.clickRate}% click</span>
//                           </div>
//                         </div>
//                       ) : notification.status === "scheduled" ? (
//                         <div className="text-center">
//                           <Clock className="w-4 h-4 text-amber-400 mx-auto" />
//                           <p className="text-[10px] text-gray-400 mt-1">Scheduled</p>
//                         </div>
//                       ) : (
//                         <div className="text-center">
//                           <Edit className="w-4 h-4 text-gray-400 mx-auto" />
//                           <p className="text-[10px] text-gray-400 mt-1">Draft</p>
//                         </div>
//                       )}
//                     </td>
//                     <td className="p-4">
//                       <p className="text-sm text-gray-300">
//                         {notification.sentDate ? notification.sentDate.split(" ")[0] : 
//                          notification.scheduledDate ? notification.scheduledDate.split(" ")[0] : "Not set"}
//                       </p>
//                     </td>
//                     <td className="p-4">
//                       <div className="flex items-center gap-1">
//                         <button
//                           onClick={() => {
//                             setSelectedNotification(notification);
//                             setShowDetailsModal(true);
//                           }}
//                           className="p-1.5 hover:bg-white/10 rounded-lg transition-all"
//                           title="View Details"
//                         >
//                           <Eye className="w-4 h-4 text-indigo-400" />
//                         </button>
//                         {notification.status === "draft" && (
//                           <button className="p-1.5 hover:bg-white/10 rounded-lg transition-all" title="Edit">
//                             <Edit className="w-4 h-4 text-cyan-400" />
//                           </button>
//                         )}
//                         <button
//                           onClick={() => handleDuplicate(notification)}
//                           className="p-1.5 hover:bg-white/10 rounded-lg transition-all"
//                           title="Duplicate"
//                         >
//                           <Copy className="w-4 h-4 text-emerald-400" />
//                         </button>
//                         <button
//                           onClick={() => handleDelete(notification.id)}
//                           className="p-1.5 hover:bg-red-500/10 rounded-lg transition-all"
//                           title="Delete"
//                         >
//                           <Trash2 className="w-4 h-4 text-red-400" />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="p-5 border-t border-white/10 flex items-center justify-between">
//           <p className="text-xs text-gray-400">
//             Showing {filteredNotifications.length} of {notifications.length} notifications
//           </p>
//           <div className="flex gap-1">
//             <button className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 hover:bg-white/10 transition-all">Previous</button>
//             <button className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-xs text-white shadow-lg shadow-indigo-500/30">1</button>
//             <button className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 hover:bg-white/10 transition-all">2</button>
//             <button className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 hover:bg-white/10 transition-all">Next</button>
//           </div>
//         </div>
//       </div>

//       {/* Quick Actions */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//         <div className="relative bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-xl rounded-xl p-4 border border-indigo-500/30">
//           <div className="flex items-center gap-3">
//             <Zap className="w-5 h-5 text-amber-400" />
//             <div>
//               <p className="text-sm font-semibold text-white">Bulk Actions</p>
//               <p className="text-xs text-gray-300">Send bulk notifications to selected audiences</p>
//             </div>
//           </div>
//         </div>
//         <div className="relative bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-xl rounded-xl p-4 border border-emerald-500/30">
//           <div className="flex items-center gap-3">
//             <Repeat className="w-5 h-5 text-emerald-400" />
//             <div>
//               <p className="text-sm font-semibold text-white">Recurring Notifications</p>
//               <p className="text-xs text-gray-300">Set up automated recurring announcements</p>
//             </div>
//           </div>
//         </div>
//         <div className="relative bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-xl p-4 border border-cyan-500/30">
//           <div className="flex items-center gap-3">
//             <BarChart3 className="w-5 h-5 text-cyan-400" />
//             <div>
//               <p className="text-sm font-semibold text-white">Analytics Dashboard</p>
//               <p className="text-xs text-gray-300">View notification performance metrics</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Create Notification Modal */}
//       {showCreateModal && (
//         <CreateNotificationModal
//           onClose={() => setShowCreateModal(false)}
//           onSave={(newNotification) => {
//             setNotifications([{ ...newNotification, id: notifications.length + 1 }, ...notifications]);
//             setShowCreateModal(false);
//           }}
//           audienceOptions={audienceOptions}
//           channelOptions={channelOptions}
//         />
//       )}

//       {/* Notification Details Modal */}
//       {showDetailsModal && selectedNotification && (
//         <NotificationDetailsModal
//           notification={selectedNotification}
//           onClose={() => {
//             setShowDetailsModal(false);
//             setSelectedNotification(null);
//           }}
//           channelOptions={channelOptions}
//         />
//       )}
//     </div>
//   );
// }

// // Create Notification Modal Component
// const CreateNotificationModal = ({ onClose, onSave, audienceOptions, channelOptions }) => {
//   const [formData, setFormData] = useState({
//     title: "",
//     message: "",
//     type: "announcement",
//     audience: "all",
//     channels: ["email", "in_app"],
//     priority: "medium",
//     scheduleType: "now",
//     scheduledDate: "",
//     scheduledTime: "",
//     tags: [],
//   });

//   const [tagInput, setTagInput] = useState("");

//   const handleAddTag = () => {
//     if (tagInput && !formData.tags.includes(tagInput)) {
//       setFormData({ ...formData, tags: [...formData.tags, tagInput] });
//       setTagInput("");
//     }
//   };

//   const handleRemoveTag = (tag) => {
//     setFormData({ ...formData, tags: formData.tags.filter(t => t !== tag) });
//   };

//   const handleChannelToggle = (channel) => {
//     if (formData.channels.includes(channel)) {
//       setFormData({ ...formData, channels: formData.channels.filter(c => c !== channel) });
//     } else {
//       setFormData({ ...formData, channels: [...formData.channels, channel] });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave({
//       ...formData,
//       status: formData.scheduleType === "now" ? "sent" : "scheduled",
//       sentCount: 0,
//       openRate: 0,
//       clickRate: 0,
//       sentDate: formData.scheduleType === "now" ? new Date().toISOString().slice(0, 19).replace("T", " ") : null,
//       scheduledDate: formData.scheduleType === "later" ? `${formData.scheduledDate} ${formData.scheduledTime}` : null,
//       createdBy: "Admin User",
//     });
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//       <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
//       <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl w-full max-w-2xl shadow-2xl border border-white/20 animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">
//         <div className="relative p-6 border-b border-white/10">
//           <div className="flex items-center justify-between">
//             <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">
//               Create Notification
//             </h2>
//             <button onClick={onClose} className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-all">
//               <X className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         <form onSubmit={handleSubmit} className="relative p-6 space-y-4">
//           <div>
//             <label className="block text-xs font-medium text-gray-400 mb-1">Title</label>
//             <input
//               type="text"
//               required
//               value={formData.title}
//               onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//               className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//               placeholder="Notification title..."
//             />
//           </div>

//           <div>
//             <label className="block text-xs font-medium text-gray-400 mb-1">Message</label>
//             <textarea
//               rows={4}
//               required
//               value={formData.message}
//               onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//               className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50 resize-none"
//               placeholder="Notification message content..."
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-xs font-medium text-gray-400 mb-1">Type</label>
//               <select
//                 value={formData.type}
//                 onChange={(e) => setFormData({ ...formData, type: e.target.value })}
//                 className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//               >
//                 <option value="announcement">Announcement</option>
//                 <option value="promotion">Promotion</option>
//                 <option value="reminder">Reminder</option>
//                 <option value="alert">Alert</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-xs font-medium text-gray-400 mb-1">Priority</label>
//               <select
//                 value={formData.priority}
//                 onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
//                 className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//               >
//                 <option value="high">High</option>
//                 <option value="medium">Medium</option>
//                 <option value="low">Low</option>
//               </select>
//             </div>
//           </div>

//           <div>
//             <label className="block text-xs font-medium text-gray-400 mb-1">Audience</label>
//             <select
//               value={formData.audience}
//               onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
//               className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//             >
//               {audienceOptions.map((opt) => (
//                 <option key={opt.value} value={opt.value}>{opt.label}</option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block text-xs font-medium text-gray-400 mb-2">Channels</label>
//             <div className="flex gap-3">
//               {channelOptions.map((channel) => (
//                 <label key={channel.value} className="flex items-center gap-2 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={formData.channels.includes(channel.value)}
//                     onChange={() => handleChannelToggle(channel.value)}
//                     className="w-4 h-4 rounded border-white/20 bg-white/5 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0"
//                   />
//                   <span className="text-sm text-gray-300">{channel.label}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div>
//             <label className="block text-xs font-medium text-gray-400 mb-2">Tags</label>
//             <div className="flex gap-2 mb-2">
//               <input
//                 type="text"
//                 value={tagInput}
//                 onChange={(e) => setTagInput(e.target.value)}
//                 onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTag())}
//                 className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                 placeholder="Add tag..."
//               />
//               <button
//                 type="button"
//                 onClick={handleAddTag}
//                 className="px-4 py-2 bg-white/10 rounded-lg text-gray-300 hover:bg-white/20 transition-all"
//               >
//                 Add
//               </button>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {formData.tags.map((tag) => (
//                 <span key={tag} className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-500/20 rounded-lg text-xs text-indigo-400">
//                   {tag}
//                   <button type="button" onClick={() => handleRemoveTag(tag)} className="hover:text-white">
//                     <X className="w-3 h-3" />
//                   </button>
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div>
//             <label className="block text-xs font-medium text-gray-400 mb-2">Schedule</label>
//             <div className="space-y-3">
//               <label className="flex items-center gap-2 cursor-pointer">
//                 <input
//                   type="radio"
//                   value="now"
//                   checked={formData.scheduleType === "now"}
//                   onChange={(e) => setFormData({ ...formData, scheduleType: e.target.value })}
//                   className="text-indigo-600"
//                 />
//                 <span className="text-sm text-gray-300">Send Now</span>
//               </label>
//               <label className="flex items-center gap-2 cursor-pointer">
//                 <input
//                   type="radio"
//                   value="later"
//                   checked={formData.scheduleType === "later"}
//                   onChange={(e) => setFormData({ ...formData, scheduleType: e.target.value })}
//                   className="text-indigo-600"
//                 />
//                 <span className="text-sm text-gray-300">Schedule for Later</span>
//               </label>
//               {formData.scheduleType === "later" && (
//                 <div className="grid grid-cols-2 gap-3 pl-6">
//                   <input
//                     type="date"
//                     required
//                     value={formData.scheduledDate}
//                     onChange={(e) => setFormData({ ...formData, scheduledDate: e.target.value })}
//                     className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                   />
//                   <input
//                     type="time"
//                     required
//                     value={formData.scheduledTime}
//                     onChange={(e) => setFormData({ ...formData, scheduledTime: e.target.value })}
//                     className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
//                   />
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className="flex gap-3 pt-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="flex-1 px-4 py-2 border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 transition-all"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
//             >
//               {formData.scheduleType === "now" ? "Send Now" : "Schedule"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// // Notification Details Modal Component
// const NotificationDetailsModal = ({ notification, onClose, channelOptions }) => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//       <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
//       <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl w-full max-w-md shadow-2xl border border-white/20 animate-in zoom-in-95 duration-300">
//         <div className="relative p-6 border-b border-white/10">
//           <div className="flex items-center justify-between">
//             <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">
//               Notification Details
//             </h2>
//             <button onClick={onClose} className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-all">
//               <X className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         <div className="relative p-6 space-y-4">
//           <div className="p-4 bg-white/5 rounded-xl border border-white/10">
//             <h3 className="text-sm font-semibold text-white mb-2">{notification.title}</h3>
//             <p className="text-sm text-gray-300">{notification.message}</p>
//           </div>

//           <div className="space-y-2">
//             <div className="flex justify-between py-2 border-b border-white/10">
//               <span className="text-sm text-gray-400">Type</span>
//               <span className="text-sm text-white capitalize">{notification.type}</span>
//             </div>
//             <div className="flex justify-between py-2 border-b border-white/10">
//               <span className="text-sm text-gray-400">Priority</span>
//               <span className={`text-sm capitalize ${notification.priority === "high" ? "text-red-400" : notification.priority === "medium" ? "text-amber-400" : "text-emerald-400"}`}>
//                 {notification.priority}
//               </span>
//             </div>
//             <div className="flex justify-between py-2 border-b border-white/10">
//               <span className="text-sm text-gray-400">Audience</span>
//               <span className="text-sm text-white capitalize">
//                 {notification.audience === "all" ? "All Users" : 
//                  notification.audience === "exhibitors" ? "Exhibitors" :
//                  notification.audience === "sponsors" ? "Sponsors" :
//                  notification.audience === "practitioners" ? "Practitioners" : "Specific Users"}
//               </span>
//             </div>
//             <div className="flex justify-between py-2 border-b border-white/10">
//               <span className="text-sm text-gray-400">Channels</span>
//               <div className="flex gap-1">
//                 {notification.channel.map((ch) => {
//                   const channel = channelOptions.find(c => c.value === ch);
//                   return channel ? (
//                     <span key={ch} className="text-xs text-gray-300">{channel.label}</span>
//                   ) : null;
//                 })}
//               </div>
//             </div>
//             {notification.tags && notification.tags.length > 0 && (
//               <div className="flex justify-between py-2 border-b border-white/10">
//                 <span className="text-sm text-gray-400">Tags</span>
//                 <div className="flex gap-1">
//                   {notification.tags.map((tag) => (
//                     <span key={tag} className="px-1.5 py-0.5 bg-indigo-500/20 rounded text-xs text-indigo-400">{tag}</span>
//                   ))}
//                 </div>
//               </div>
//             )}
//             <div className="flex justify-between py-2 border-b border-white/10">
//               <span className="text-sm text-gray-400">Status</span>
//               <span className="text-sm text-white capitalize">{notification.status}</span>
//             </div>
//             {notification.status === "sent" && (
//               <>
//                 <div className="flex justify-between py-2 border-b border-white/10">
//                   <span className="text-sm text-gray-400">Sent Date</span>
//                   <span className="text-sm text-white">{notification.sentDate}</span>
//                 </div>
//                 <div className="flex justify-between py-2 border-b border-white/10">
//                   <span className="text-sm text-gray-400">Recipients</span>
//                   <span className="text-sm font-semibold text-white">{notification.sentCount.toLocaleString()}</span>
//                 </div>
//                 <div className="flex justify-between py-2 border-b border-white/10">
//                   <span className="text-sm text-gray-400">Open Rate</span>
//                   <span className="text-sm text-emerald-400">{notification.openRate}%</span>
//                 </div>
//                 <div className="flex justify-between py-2">
//                   <span className="text-sm text-gray-400">Click Rate</span>
//                   <span className="text-sm text-cyan-400">{notification.clickRate}%</span>
//                 </div>
//               </>
//             )}
//             {notification.status === "scheduled" && (
//               <div className="flex justify-between py-2">
//                 <span className="text-sm text-gray-400">Scheduled Date</span>
//                 <span className="text-sm text-amber-400">{notification.scheduledDate}</span>
//               </div>
//             )}
//             <div className="flex justify-between py-2">
//               <span className="text-sm text-gray-400">Created By</span>
//               <span className="text-sm text-white">{notification.createdBy}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from 'react'

const NotificationsAnnouncements = () => {
  return (
    <div className='text-white'>Notifications & Announcements</div>
  )
}

export default NotificationsAnnouncements