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
} from "lucide-react";
import PortalIntro from "../Layout/PortalsAnimation";

// Admin menu items
const adminMenuItems = [
  { id: "Dashboard", label: "Dashboard", icon: LayoutDashboard, badge: null },
  { id: "UsersManagement", label: "Users Management", icon: Users, badge: null },
  { id: "ExhibitionBookingManagement", label: "Exhibition Booking Management", icon: CalendarCheck, badge: null },
  { id: "FloorPlanningManagement", label: "Exhibition Floor Planning", icon: Map, badge: null },
  { id: "Reports", label: "Reports", icon: FileText, badge: null },
  { id: "SecurityAuditLogs", label: "Security & Audit Logs", icon: Activity, badge: null },
  { id: "PortalManagement", label: "Portal Management", icon: Shield, badge: null },
  { id: "SponsorManagement", label: "Sponsor Management", icon: Briefcase, badge: null },
  { id: "PaymentsInvoiceManagement", label: "Payments & Invoices", icon: CreditCard, badge:null },
  { id: "NotificationsAnnouncements", label: "Notifications", icon: Megaphone, badge: null },
  { id: "Settings", label: "Settings", icon: Settings, badge: null },
  { id: "SupportHelpDesk", label: "Support / Help Desk", icon: Headphones, badge: null },
];

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Get current active menu based on pathname
  const getActiveMenu = () => {
    for (const item of adminMenuItems) {
      if (pathname?.includes(item.id)) {
        return item.id;
      }
    }
    return "dashboard";
  };

  const activeMenu = getActiveMenu();

  const handleNavigation = (id) => {
    router.push(`/AdminPortal/${id}`);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
       {/* animation  */}
            {showIntro && (
              <PortalIntro
                onFinish={() => setShowIntro(false)}
                title={"ADMIN"}
                subtitle={"ADMIN DASHBOARD"}
                titlecolor={"from-indigo-500 to-purple-500"}
                portalcolor={"from-purple-500 to-indigo-500"}
              />
            )}
      
      {/* Floating orbs background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Top Nav - Glassmorphism */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/5 backdrop-blur-2xl border-b border-white/10 h-16 shadow-2xl">
        <div className="flex items-center justify-between px-4 sm:px-6 h-full">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-all duration-300 hover:bg-white/10 text-gray-300 hover:text-white"
            >
              <Menu className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden lg:flex p-2 rounded-lg transition-all duration-300 hover:bg-white/10 text-gray-300 hover:text-white"
            >
              {isCollapsed ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-base font-bold bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">
                Admin Portal
              </span>
            </div>
          </div>

          {/* Search Bar - Glass style */}
          <div
            className={`hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-lg border transition-all duration-300 ${
              searchFocused ? "border-indigo-500/50 shadow-lg shadow-indigo-500/20" : "border-white/10"
            }`}
          >
            <Search
              className={`w-4 h-4 transition-colors duration-300 ${searchFocused ? "text-indigo-400" : "text-gray-400"}`}
            />
            <input
              type="text"
              placeholder="Search admin, users, bookings..."
              className="bg-transparent border-none focus:outline-none text-sm w-64 text-white placeholder:text-gray-400"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-lg transition-all duration-300 hover:bg-white/10 text-gray-300 hover:text-white relative group">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-amber-500 rounded-full ring-2 ring-gray-900 animate-pulse"></span>
            </button>

            <button
              onClick={() => setShowProfileModal(true)}
              className="flex items-center gap-2 ml-1 p-1.5 rounded-lg transition-all duration-300 hover:bg-white/10"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <span className="text-white text-xs font-bold">AD</span>
              </div>
              <span className="text-sm font-medium text-gray-200 hidden sm:block">
                Admin User
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Search - Glass style */}
      <div className="md:hidden fixed top-16 left-0 right-0 z-30 bg-white/5 backdrop-blur-xl border-b border-white/10 px-4 py-2">
        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search admin, users, bookings..."
            className="bg-transparent border-none focus:outline-none text-sm flex-1 text-white placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Layout */}
      <div className="flex pt-16 md:pt-16">
        {/* Sidebar - Glassmorphism */}
        <aside
          className={`
            fixed left-0 top-16 h-[calc(100vh-4rem)]
            bg-white/5 backdrop-blur-xl border-r border-white/10
            z-30
            ${isCollapsed ? "w-20" : "w-72"}
            ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            transition-all duration-300
          `}
        >
          <nav className="h-full flex flex-col py-4">
            <div className="flex-1 space-y-1 px-3 overflow-y-auto">
              {adminMenuItems.map(({ id, label, icon: Icon, badge }) => {
                const isActive = activeMenu === id;
                return (
                  <button
                    key={id}
                    onClick={() => handleNavigation(id)}
                    className={`
                      group relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
                      transition-all duration-300
                      ${isActive 
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 border border-white/20" 
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                      }
                      ${isCollapsed ? "justify-center" : ""}
                    `}
                  >
                    <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-white" : ""}`} />

                    {!isCollapsed && (
                      <>
                        <span className="text-sm font-medium flex-1 text-left">
                          {label}
                        </span>
                        {badge && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                            {badge}
                          </span>
                        )}
                      </>
                    )}

                    {isCollapsed && (
                      <div className="absolute left-full ml-3 px-2 py-1 bg-gray-900/90 backdrop-blur-xl text-white text-xs rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-all whitespace-nowrap z-50 border border-white/10">
                        {label}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="border-t border-white/10 pt-4 mt-4 px-3 space-y-1">
              <button
                onClick={() => setShowProfileModal(true)}
                className={`group w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-300 ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                  <User className="w-4 h-4 text-gray-300" />
                </div>
                {!isCollapsed && (
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-white">Admin User</p>
                    <p className="text-xs text-gray-400">Super Administrator</p>
                  </div>
                )}
              </button>

              <button
                className={`group w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-300 ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                <LogOut className="w-5 h-5" />
                {!isCollapsed && (
                  <span className="text-sm font-medium">Sign out</span>
                )}
              </button>
            </div>
          </nav>
        </aside>

        {/* Mobile overlay */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-20"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Main content */}
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

      {/* Profile Modal - Glassmorphism */}
      {showProfileModal && (
        <AdminProfileModal isOpen={showProfileModal} onClose={() => setShowProfileModal(false)} />
      )}
    </div>
  );
}

// Admin Profile Modal Component
const AdminProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl w-full max-w-md shadow-2xl border border-white/20 animate-in zoom-in-95 duration-300">
        {/* Decorative glow */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="relative p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">
              Admin Profile
            </h2>
            <button
              onClick={onClose}
              className="p-1 rounded-lg transition-all duration-300 hover:bg-white/10 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="relative p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <span className="text-white text-xl font-bold">AD</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Admin User</h3>
              <p className="text-sm text-indigo-400">Super Administrator</p>
              <div className="flex items-center gap-1 mt-1">
                <Shield className="w-3 h-3 text-amber-400" />
                <span className="text-xs text-gray-400">Full Access</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xs text-gray-400">Email</p>
              <p className="text-sm font-medium text-white">admin@medconf.com</p>
            </div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xs text-gray-400">Role</p>
              <p className="text-sm font-medium text-white">Super Administrator</p>
            </div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xs text-gray-400">Last Login</p>
              <p className="text-sm font-medium text-white">Today, 09:42 AM</p>
            </div>
          </div>

          <button className="relative w-full mt-6 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-medium overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30">
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="relative">Edit Profile</span>
          </button>
        </div>
      </div>

    </div>
  );
};