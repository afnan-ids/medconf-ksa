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
  Building2,
  LayoutDashboard,
  MapPin,
  Store,
  FileText,
  Folder,
  Headphones,
  CreditCard,
} from "lucide-react";

import { exhibitorMenuItems } from "../../../Data/exhibitor-data";
import PortalIntro from "../../../Layout/PortalsAnimation";

export default function ExhibitorLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [searchFocused, setSearchFocused] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Get current page from pathname
  const currentPage = pathname?.split("/").pop() || "dashboard";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
      {/* Animation Intro  */}
      {showIntro && (
        <PortalIntro
          onFinish={() => setShowIntro(false)}
          title={"Exhibitor"}
          subtitle={"EXHIBITOR DASHBOARD"}
          titlecolor={"from-blue-400 to-cyan-400"}
          portalcolor={"from-cyan-600 to-blue-800"}
        />
      )}
      {/* Floating orbs background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Top Nav  */}
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
              <div className="w-8 h-8 bg-gradient-to-br from-blue-800/80 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Building2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-base font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Exhibitor Portal
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div
            className={`hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-lg border transition-all duration-300 ${
              searchFocused
                ? "border-blue-500/50 shadow-lg shadow-blue-500/20"
                : "border-white/10"
            }`}
          >
            <Search
              className={`w-4 h-4 transition-colors duration-300 ${
                searchFocused ? "text-blue-400" : "text-gray-400"
              }`}
            />
            <input
              type="text"
              placeholder="Search booths, leads, documents..."
              className="bg-transparent border-none focus:outline-none text-sm w-64 text-white placeholder:text-gray-400"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-lg transition-all duration-300 hover:bg-white/10 text-gray-300 hover:text-white relative group">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-gray-900 animate-pulse"></span>
            </button>

            <button
              onClick={() => setShowProfileModal(true)}
              className="flex items-center gap-2 ml-1 p-1.5 rounded-lg transition-all duration-300 hover:bg-white/10"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-800 to-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                <span className="text-white text-xs font-bold">PC</span>
              </div>
              <span className="text-sm font-medium text-gray-200 hidden sm:block">
                PharmaCo
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Search  */}
      <div className="md:hidden fixed top-16 left-0 right-0 z-30 bg-white/5 backdrop-blur-xl border-b border-white/10 px-4 py-2">
        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search booths, leads, documents..."
            className="bg-transparent border-none focus:outline-none text-sm flex-1 text-white placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Layout */}
      <div className="flex pt-16 md:pt-16">
        {/* Sidebar */}
        <aside
          className={`
            fixed left-0 top-16 h-[calc(100vh-4rem)]
            bg-white/5 backdrop-blur-xl border-r border-white/10
            z-30 transition-all duration-300
            ${isCollapsed ? "w-20" : "w-70"}
            ${
              isMobileMenuOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }
          `}
        >
          <nav className="h-full flex flex-col py-4">
            <div className="flex-1 space-y-1 px-3 overflow-y-auto">
              {exhibitorMenuItems.map(({ id, label, icon: iconName }) => {
                const isActive =
                  pathname === `/pages/Portals/ExhibitorPortal/${id}`;

                const getSidebarIcon = () => {
                  const iconClasses = `w-5 h-5 flex-shrink-0 ${isActive ? "text-white" : "text-gray-400"}`;
                  switch (iconName) {
                    case "Dashboard":
                      return <LayoutDashboard className={iconClasses} />;
                    case "User":
                      return <User className={iconClasses} />;
                    case "Map":
                      return <MapPin className={iconClasses} />;
                    case "Store":
                      return <Store className={iconClasses} />;
                    case "FileText":
                      return <FileText className={iconClasses} />;
                    case "CreditCard":
                      return <CreditCard className={iconClasses} />;
                    case "Folder":
                      return <Folder className={iconClasses} />;
                    case "Headphones":
                      return <Headphones className={iconClasses} />;
                    default:
                      return <LayoutDashboard className={iconClasses} />;
                  }
                };

                return (
                  <button
                    key={id}
                    onClick={() => {
                      router.push(`/pages/Portals/ExhibitorPortal/${id}`);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`
                      group relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
                      transition-all duration-300
                      ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600/80 to-cyan-600/80 text-white shadow-lg shadow-blue-500/20 border border-white/20"
                          : "text-gray-300 hover:bg-white/10 hover:text-white"
                      }
                      ${isCollapsed ? "justify-center" : ""}
                    `}
                  >
                    {getSidebarIcon()}

                    {!isCollapsed && (
                      <span className="text-sm font-medium flex-1 text-left">
                        {label}
                      </span>
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
                  <Building2 className="w-4 h-4 text-gray-300" />
                </div>
                {!isCollapsed && (
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-white">PharmaCo</p>
                    <p className="text-xs text-gray-400">Premium Exhibitor</p>
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

        {/* Main content - children will be the page component */}
        <main
          className={`
            flex-1 min-w-0 transition-all duration-300
            ${isCollapsed ? "lg:ml-20" : "lg:ml-70"}
            ml-0
          `}
        >
          <div className="p-4 lg:p-4">{children}</div>
        </main>
      </div>

      {/* Profile Modal - Glassmorphism */}
      {showProfileModal && (
        <ProfileModal onClose={() => setShowProfileModal(false)} />
      )}
    </div>
  );
}

// Profile Modal Component
const ProfileModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl w-full max-w-md shadow-2xl border border-white/20 animate-in fade-in zoom-in duration-300">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="relative p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
              Exhibitor Profile
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
            <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                PharmaCo Exhibitions
              </h3>
              <p className="text-sm text-blue-400">Premium Exhibitor</p>
              <div className="flex items-center gap-1 mt-1">
                <Shield className="w-3 h-3 text-green-400" />
                <span className="text-xs text-gray-400">Booth A12</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xs text-gray-400">Contact Person</p>
              <p className="text-sm font-medium text-white">Ahmed Al-Saud</p>
            </div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xs text-gray-400">Email</p>
              <p className="text-sm font-medium text-white">
                exhibitor@pharmaco.com
              </p>
            </div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xs text-gray-400">Phone</p>
              <p className="text-sm font-medium text-white">+966 50 123 4567</p>
            </div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xs text-gray-400">Booth Number</p>
              <p className="text-sm font-medium text-white">
                A12 - Premium Corner
              </p>
            </div>
          </div>

          <button className="relative w-full mt-6 py-2.5 bg-gradient-to-br from-blue-800 to-cyan-600 text-white rounded-lg font-medium overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="relative">View Full Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};
