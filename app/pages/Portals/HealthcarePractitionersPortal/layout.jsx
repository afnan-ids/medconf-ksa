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
  Sun,
  Moon,
  Heart,
  Sparkles,
  Shield,
  HelpCircle,
} from "lucide-react";
import { menuItems } from "../../../Data/hcp-data";
import ProfileModal from "../../../Components/HealthCarePortal/ProfileModal";
import { ThemeProvider, useTheme } from "../../../Context/ThemeContext";

// Main Layout Wrapper with Provider
export default function HCPLayout({ children }) {
  return (
    <ThemeProvider>
      <HCPLayoutContent>{children}</HCPLayoutContent>
    </ThemeProvider>
  );
}

// Inner component that uses the theme
function HCPLayoutContent({ children }) {
  const { isGlassTheme, toggleGlassTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isGlassTheme ? "glass-theme-bg" : "bg-gray-50"
    }`}>
      {/* Floating Orbs - Only in Glass Theme */}
      {isGlassTheme && (
        <>
          <div className="fixed top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow" />
          <div className="fixed bottom-20 right-20 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse-slow delay-1000" />
          <div className="fixed top-1/3 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow delay-500" />
          <div className="fixed bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow delay-1500" />
          <div className="fixed top-1/2 right-1/3 w-56 h-56 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow delay-2000" />
        </>
      )}
      
      {/* Top Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-40 h-[70px] shadow-sm transition-all duration-300 ${
        isGlassTheme 
          ? "bg-white/10 backdrop-blur-xl border-b border-white/20" 
          : "bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800"
      }`}>
        <div className="flex items-center justify-between px-6 lg:px-8 h-full">
          {/* Left section */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
            >
              <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden lg:flex p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
            >
              {isCollapsed ? (
                <ChevronRight className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronLeft className="w-5 h-5 text-gray-400" />
              )}
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className={`text-lg font-bold ${
                  isGlassTheme ? "text-white" : "bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent"
                }`}>
                  MedConf
                </span>
                <p className={`text-xs hidden sm:block ${isGlassTheme ? "text-gray-300" : "text-gray-500 dark:text-gray-400"}`}>
                  Healthcare Portal
                </p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className={`hidden md:flex items-center gap-3 px-5 py-2.5 rounded-xl border transition-all duration-200 min-w-[320px] ${
            isGlassTheme 
              ? `bg-white/10 backdrop-blur-sm border-white/20 ${searchFocused ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-white/20'}`
              : `bg-gray-100 dark:bg-gray-800 ${searchFocused ? 'border-blue-500 shadow-sm' : 'border-transparent'}`
          }`}>
            <Search className={`w-5 h-5 transition-colors ${searchFocused ? 'text-blue-500' : 'text-gray-400'}`} />
            <input
              type="text"
              placeholder="Search..."
              className={`bg-transparent border-none focus:outline-none text-sm w-full ${
                isGlassTheme ? "text-white placeholder:text-gray-400" : "text-gray-700 dark:text-gray-300 placeholder:text-gray-400"
              }`}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleGlassTheme}
              className={`p-2.5 rounded-xl transition-all ${
                isGlassTheme 
                  ? "bg-white/10 hover:bg-white/20 text-yellow-400" 
                  : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500"
              }`}
              title={isGlassTheme ? "Switch to Light Mode" : "Switch to Glass Theme"}
            >
              {isGlassTheme ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button className={`p-2.5 rounded-xl transition-all relative ${
              isGlassTheme ? "bg-white/10 hover:bg-white/20" : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}>
              <Bell className={`w-5 h-5 ${isGlassTheme ? "text-gray-300" : "text-gray-500 dark:text-gray-400"}`} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </button>

            <button
              onClick={() => setShowProfileModal(true)}
              className={`flex items-center gap-3 ml-2 p-2 rounded-xl transition-all ${
                isGlassTheme ? "bg-white/10 hover:bg-white/20" : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white text-sm font-bold">DR</span>
              </div>
              <div className="hidden lg:block text-left">
                <p className={`text-sm font-semibold ${isGlassTheme ? "text-white" : "text-gray-900 dark:text-white"}`}>
                  Dr. Ahmed Hassan
                </p>
                <p className={`text-xs ${isGlassTheme ? "text-gray-300" : "text-gray-500 dark:text-gray-400"}`}>
                  Senior Cardiologist
                </p>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Search */}
      <div className={`md:hidden fixed top-[70px] left-0 right-0 z-30 px-4 py-3 ${
        isGlassTheme ? "bg-white/10 backdrop-blur-xl border-b border-white/20" : "bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800"
      }`}>
        <div className={`flex items-center gap-3 px-4 py-2.5 rounded-xl ${
          isGlassTheme ? "bg-white/10" : "bg-gray-100 dark:bg-gray-800"
        }`}>
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className={`bg-transparent border-none focus:outline-none text-sm flex-1 ${
              isGlassTheme ? "text-white placeholder:text-gray-400" : "text-gray-700 dark:text-gray-300"
            }`}
          />
        </div>
      </div>

      {/* Layout */}
      <div className="flex pt-[70px] md:pt-[70px]">
        {/* Sidebar */}
        <aside
          className={`
            fixed left-0 top-[70px] h-[calc(100vh-70px)]
            transition-all duration-300 ease-in-out z-30
            ${isCollapsed ? "w-20" : "w-72"}
            ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            ${isGlassTheme 
              ? "bg-white/10 backdrop-blur-xl border-r border-white/20" 
              : "bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800"
            }
          `}
        >
          <nav className="h-full flex flex-col py-6">
            <div className="flex-1 space-y-1 px-3 overflow-y-auto">
              {menuItems.map(({ id, label, icon: Icon, badge }) => {
                const isActive = pathname === `/pages/Portals/HealthcarePractitionersPortal/${id}`;
                return (
                  <button
                    key={id}
                    onClick={() => {
                      router.push(`/pages/Portals/HealthcarePractitionersPortal/${id}`);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`
                      relative w-full flex items-center gap-3 px-4 py-3 rounded-xl
                      transition-all duration-200 group
                      ${isActive
                        ? isGlassTheme
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                          : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                        : isGlassTheme
                          ? "text-gray-300 hover:bg-white/10 hover:text-white"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                      }
                      ${isCollapsed ? "justify-center" : ""}
                    `}
                  >
                    <Icon className={`w-5 h-5 flex-shrink-0 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : ''}`} />

                    {!isCollapsed && (
                      <>
                        <span className="text-sm font-medium flex-1 text-left">
                          {label}
                        </span>
                        {badge && (
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            isActive
                              ? "bg-white/20 text-white"
                              : isGlassTheme
                                ? "bg-white/10 text-gray-300"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                          }`}>
                            {badge}
                          </span>
                        )}
                      </>
                    )}

                    {isCollapsed && (
                      <div className={`absolute left-full ml-3 px-3 py-1.5 text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all whitespace-nowrap z-50 shadow-xl ${
                        isGlassTheme
                          ? "bg-gray-900 text-white"
                          : "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                      }`}>
                        {label}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className={`border-t pt-4 mt-4 px-3 space-y-1 ${
              isGlassTheme ? "border-white/20" : "border-gray-200 dark:border-gray-800"
            }`}>
              <button
                className={`group w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isCollapsed ? "justify-center" : ""
                } ${
                  isGlassTheme
                    ? "text-gray-300 hover:bg-red-500/20 hover:text-red-400"
                    : "text-gray-500 hover:bg-red-50 dark:hover:bg-red-950/50 hover:text-red-600"
                }`}
              >
                <LogOut className="w-5 h-5 transition-transform group-hover:scale-110" />
                {!isCollapsed && <span className="text-sm font-medium">Sign out</span>}
              </button>
            </div>
          </nav>
        </aside>

        {/* Mobile overlay */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-20"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Main content */}
        <main
          className={`
            flex-1 transition-all duration-300 min-w-0
            ${isCollapsed ? "lg:ml-20" : "lg:ml-72"}
            ml-0
          `}
        >
          {/* Page Header */}
          <div className={`sticky top-[70px] z-20 backdrop-blur-sm border-b px-6 lg:px-8 py-4 ${
            isGlassTheme
              ? "bg-white/5 border-white/20"
              : "bg-gray-50/80 dark:bg-gray-950/80 border-gray-200 dark:border-gray-800"
          }`}>
            <div className="flex items-center justify-between">
              <div>
                <h1 className={`text-xl font-bold ${isGlassTheme ? "text-white" : "text-gray-900 dark:text-white"}`}>
                  {pathname?.split("/").pop()?.replace(/-/g, " ") || "Dashboard"}
                </h1>
                <p className={`text-sm mt-0.5 ${isGlassTheme ? "text-gray-300" : "text-gray-500 dark:text-gray-400"}`}>
                  Welcome back, Dr. Ahmed
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button className={`p-2 rounded-lg transition-all ${
                  isGlassTheme ? "hover:bg-white/10" : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}>
                  <HelpCircle className={`w-5 h-5 ${isGlassTheme ? "text-gray-300" : "text-gray-500"}`} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Content Area */}
          <div className="p-3">
            {children}
          </div>
        </main>
      </div>

      {/* Profile Modal */}
      {showProfileModal && (
        <ProfileModal isOpen={showProfileModal} onClose={() => setShowProfileModal(false)} />
      )}

      <style jsx global>{`
        .glass-theme-bg {
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%);
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-1500 {
          animation-delay: 1.5s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}