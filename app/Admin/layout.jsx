"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Search,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Bell,
  User,
  Menu,
  X,
  Shield,
  LayoutDashboard,
  Users,
  CalendarCheck,
  Map,
  FileText,
  Activity,
  Briefcase,
  CreditCard,
  Megaphone,
  Settings,
  Headphones,
  Star,
  TrendingUp,
  Sparkles,
  Crown,
  Zap,
} from "lucide-react";
import PortalIntro from "../Layout/PortalsAnimation";

// Admin menu items with consistent blue-cyan gradient
const adminMenuItems = [
  { id: "Dashboard", label: "Dashboard", icon: LayoutDashboard, badge: null },
  {
    id: "UsersManagement",
    label: "Users Management",
    icon: Users,
    badge: null,
  },
  {
    id: "ExhibitionBookingManagement",
    label: "Exhibition Booking",
    icon: CalendarCheck,
    badge: null,
  },
  {
    id: "FloorPlanningManagement",
    label: "Floor Planning",
    icon: Map,
    badge: null,
  },
  { id: "Reports", label: "Reports", icon: FileText, badge: null },
  {
    id: "SecurityAuditLogs",
    label: "Security & Audit",
    icon: Activity,
    badge: null,
  },
  {
    id: "PortalManagement",
    label: "Portal Management",
    icon: Shield,
    badge: null,
  },
  {
    id: "SponsorManagement",
    label: "Sponsor Management",
    icon: Briefcase,
    badge: null,
  },
  {
    id: "PaymentsInvoiceManagement",
    label: "Payments & Invoices",
    icon: CreditCard,
    badge: null,
  },
  {
    id: "NotificationsAnnouncements",
    label: "Notifications",
    icon: Megaphone,
    badge: "3",
  },
  { id: "Settings", label: "Settings", icon: Settings, badge: null },
  {
    id: "SupportHelpDesk",
    label: "Support Desk",
    icon: Headphones,
    badge: null,
  },
];

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: "New user registered", time: "5 min ago", read: false },
    {
      id: 2,
      title: "Booking payment received",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 3,
      title: "System update completed",
      time: "3 hours ago",
      read: true,
    },
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const getActiveMenu = () => {
    for (const item of adminMenuItems) {
      if (pathname?.includes(item.id)) {
        return item.id;
      }
    }
    return "Dashboard";
  };

  const activeMenu = getActiveMenu();

  const handleNavigation = (id) => {
    router.push(`/Admin/${id}`);
    setIsMobileMenuOpen(false);
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
      {showIntro && (
        <PortalIntro
          onFinish={() => setShowIntro(false)}
          title={"ADMIN"}
          subtitle={"ADMIN DASHBOARD"}
        />
      )}

      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/5 backdrop-blur-2xl border-b border-white/10  h-16 shadow-2xl">
        <div className="flex items-center justify-between px-4 sm:px-6 h-full">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl transition-all duration-300 hover:bg-blue-500/10 text-gray-300 hover:text-white"
            >
              <Menu className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden lg:flex p-2 rounded-xl transition-all duration-300 hover:bg-blue-500/10 text-gray-300 hover:text-white"
            >
              {isCollapsed ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </button>

            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur-lg opacity-50 animate-pulse"></div>
                <div className="relative w-9 h-9 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Crown className="w-4 h-4 text-white" />
                </div>
              </div>
              <div>
                <span className="text-base font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Admin Portal
                </span>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-[10px] text-gray-400">Admin</span>
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div
            className={`hidden md:flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-xl rounded-xl border transition-all duration-300 min-w-[300px] ${
              searchFocused
                ? "border-blue-500/50 shadow-lg shadow-blue-500/20 bg-gray-800/70"
                : "border-blue-500/20 hover:bg-gray-800/70"
            }`}
          >
            <Search
              className={`w-4 h-4 transition-colors duration-300 ${searchFocused ? "text-blue-400" : "text-gray-400"}`}
            />
            <input
              type="text"
              placeholder="Search anything..."
              className="bg-transparent border-none focus:outline-none text-sm flex-1 text-white placeholder:text-gray-400"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-gray-400 bg-gray-800 rounded border border-blue-500/20">
              ⌘
            </kbd>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-xl transition-all duration-300 hover:bg-blue-500/10 text-gray-300 hover:text-white relative group"
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-[10px] font-bold text-white flex items-center justify-center shadow-lg animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notifications dropdown */}
              {showNotifications && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowNotifications(false)}
                  ></div>
                  <div className="absolute right-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl rounded-xl border border-blue-500/20 shadow-2xl z-50 overflow-hidden animate-in slide-in-from-top-2 duration-200">
                    <div className="p-3 border-b border-blue-500/20">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-white">
                          Notifications
                        </h3>
                        <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
                          Mark all read
                        </button>
                      </div>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notif) => (
                        <div
                          key={notif.id}
                          className={`p-3 border-b border-blue-500/10 hover:bg-blue-500/5 transition-colors cursor-pointer ${!notif.read ? "bg-blue-500/5" : ""}`}
                        >
                          <div className="flex items-start gap-2">
                            <div
                              className={`w-2 h-2 rounded-full mt-1.5 ${!notif.read ? "bg-blue-400" : "bg-gray-600"}`}
                            ></div>
                            <div>
                              <p className="text-sm font-medium text-white">
                                {notif.title}
                              </p>
                              <p className="text-xs text-gray-400 mt-1">
                                {notif.time}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 border-t border-blue-500/20">
                      <button className="w-full text-center text-xs text-blue-400 hover:text-blue-300 transition-colors">
                        View all notifications
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* User Profile */}
            <button
              onClick={() => setShowProfileModal(true)}
              className="flex items-center gap-2 ml-1 p-1.5 rounded-xl transition-all duration-300 hover:bg-blue-500/10 group"
            >
              <div className="relative">
                <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
                  <span className="text-white text-xs font-bold">AD</span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
              </div>
              <div className="hidden sm:block text-left">
                <span className="text-sm font-medium text-white block">
                  Admin User
                </span>
                <span className="text-xs text-gray-400">Admin</span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Search */}
      <div className="md:hidden fixed top-16 left-0 right-0 z-30 bg-gray-900/95 backdrop-blur-xl border-b border-blue-500/20 px-4 py-2">
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-xl border border-blue-500/20">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none focus:outline-none text-sm flex-1 text-white placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex pt-16 md:pt-16">
        {/* Sidebar */}
        <aside
          className={`
            fixed left-0 top-16 h-[calc(100vh-4rem)]
           bg-white/5 backdrop-blur-xl border-r border-white/10
            backdrop-blur-xl border-r border-blue-500/20
            z-30
            ${isCollapsed ? "w-20" : "w-72"}
            ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            transition-all duration-300
          `}
        >
          <div className="h-full flex flex-col">
            {/* Menu Items */}
            <nav className="flex-1 py-6 px-3 space-y-1.5 overflow-y-auto">
              {adminMenuItems.map(({ id, label, icon: Icon, badge }) => {
                const isActive = activeMenu === id;
                return (
                  <button
                    key={id}
                    onClick={() => handleNavigation(id)}
                    className={`
                      group relative w-full flex items-center gap-3 px-3 py-2.5 rounded-xl
                      transition-all duration-300
                      ${
                        isActive
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                          : "text-gray-300 hover:bg-blue-500/10 hover:text-white"
                      }
                      ${isCollapsed ? "justify-center" : ""}
                    `}
                  >
                    <Icon
                      className={`w-5 h-5 flex-shrink-0 transition-transform group-hover:scale-110 ${isActive ? "text-white" : ""}`}
                    />

                    {!isCollapsed && (
                      <>
                        <span className="text-sm font-medium flex-1 text-left">
                          {label}
                        </span>
                        {badge && (
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                              isActive
                                ? "bg-white/20 text-white"
                                : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                            }`}
                          >
                            {badge}
                          </span>
                        )}
                      </>
                    )}

                    {/* Tooltip for collapsed mode */}
                    {isCollapsed && (
                      <div className="absolute left-full ml-3 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-all whitespace-nowrap z-50 border border-blue-500/20 shadow-lg">
                        {label}
                      </div>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Bottom Section */}
            <div className="border-t border-blue-500/20 pt-4 mt-4 px-3 pb-6">
              <button
                onClick={() => setShowProfileModal(true)}
                className={`group w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-blue-500/10 text-gray-300 hover:text-white transition-all duration-300 ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                  <User className="w-4 h-4 text-white" />
                </div>
                {!isCollapsed && (
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-white">Admin User</p>
                    <p className="text-xs text-gray-400">admin@medconf.com</p>
                  </div>
                )}
              </button>

              <button
                className={`group w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-300 mt-1 ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                <LogOut className="w-5 h-5" />
                {!isCollapsed && (
                  <span className="text-sm font-medium">Sign Out</span>
                )}
              </button>
            </div>
          </div>
        </aside>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-20 animate-in fade-in duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Main Content */}
        <main
          className={`
            flex-1 min-w-0 transition-all duration-300
            ${isCollapsed ? "lg:ml-20" : "lg:ml-72"}
            ml-0
          `}
        >
          <div className="p-4 lg:p-6">{children}</div>
        </main>
      </div>

      {/* Profile Modal */}
      {showProfileModal && (
        <AdminProfileModal
          isOpen={showProfileModal}
          onClose={() => setShowProfileModal(false)}
        />
      )}
    </div>
  );
}

// Enhanced Profile Modal Component
const AdminProfileModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("profile");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
        onClick={onClose}
      />

      <div className="relative bg-gradient-to-b from-gray-900 to-gray-900 backdrop-blur-2xl rounded-2xl w-full max-w-lg shadow-2xl border border-blue-500/20 animate-in zoom-in-95 duration-300 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="relative p-6 border-b border-blue-500/20">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Admin Profile
            </h2>
            <button
              onClick={onClose}
              className="p-1 rounded-lg transition-all duration-300 hover:bg-blue-500/10 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="relative px-6 pt-4">
          <div className="flex gap-2 border-b border-blue-500/20">
            {["profile", "security", "activity"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6">
          {activeTab === "profile" && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <span className="text-white text-2xl font-bold">AD</span>
                  </div>
                  <button className="absolute -bottom-2 -right-2 p-1.5 bg-gray-800 rounded-full border border-blue-500/20 hover:bg-gray-700 transition-colors">
                    <Camera className="w-3 h-3 text-white" />
                  </button>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Admin User</h3>
                  <p className="text-sm text-blue-400">Administrator</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Shield className="w-3 h-3 text-blue-400" />
                    <span className="text-xs text-gray-400">Admin Account</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-gray-800/50 rounded-xl border border-blue-500/20 hover:bg-gray-800/70 transition-colors">
                  <p className="text-xs text-gray-400 mb-1">Email Address</p>
                  <p className="text-sm font-medium text-white">
                    admin@medconf.com
                  </p>
                </div>
                <div className="p-3 bg-gray-800/50 rounded-xl border border-blue-500/20 hover:bg-gray-800/70 transition-colors">
                  <p className="text-xs text-gray-400 mb-1">Role</p>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-400" />
                    <p className="text-sm font-medium text-white">
                      Administrator
                    </p>
                  </div>
                </div>
                <div className="p-3 bg-gray-800/50 rounded-xl border border-blue-500/20 hover:bg-gray-800/70 transition-colors">
                  <p className="text-xs text-gray-400 mb-1">Last Login</p>
                  <p className="text-sm font-medium text-white">
                    Today, 09:42 AM
                  </p>
                  <p className="text-xs text-gray-500 mt-1">IP: 192.168.1.1</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="space-y-4">
              <div className="p-4 bg-gray-800/50 rounded-xl border border-blue-500/20">
                <p className="text-sm font-medium text-white mb-2">
                  Two-Factor Authentication
                </p>
                <p className="text-xs text-gray-400 mb-3">
                  Add an extra layer of security to your account
                </p>
                <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white text-sm font-medium hover:shadow-lg transition-all">
                  Enable 2FA
                </button>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-xl border border-blue-500/20">
                <p className="text-sm font-medium text-white mb-2">
                  Change Password
                </p>
                <p className="text-xs text-gray-400 mb-3">
                  Update your password regularly
                </p>
                <button className="w-full py-2 bg-gray-700 rounded-lg text-white text-sm font-medium hover:bg-gray-600 transition-all">
                  Change Password
                </button>
              </div>
            </div>
          )}

          {activeTab === "activity" && (
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-xl border border-blue-500/20">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Activity className="w-4 h-4 text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white">
                    Logged in from new device
                  </p>
                  <p className="text-xs text-gray-400">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-xl border border-blue-500/20">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white">
                    Security settings updated
                  </p>
                  <p className="text-xs text-gray-400">Yesterday</p>
                </div>
              </div>
            </div>
          )}

          <button className="relative w-full mt-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-medium overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="relative">Save Changes</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Camera icon component
const Camera = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);
