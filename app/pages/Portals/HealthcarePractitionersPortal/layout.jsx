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
} from "lucide-react";
import { menuItems } from "../../../Data/hcp-data";

export default function HCPLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        
        {/* Top Nav */}
        <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 h-16 shadow-sm">
          <div className="flex items-center justify-between px-4 sm:px-6 h-full">
            <div className="flex items-center gap-3">
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
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                ) : (
                  <ChevronLeft className="w-4 h-4 text-gray-400" />
                )}
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-md">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <span className="text-base font-bold text-gray-900 dark:text-white">
                  MedConf
                </span>
              </div>
            </div>

            {/* Search Bar */}
            <div className={`hidden md:flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg border transition-all duration-200 ${searchFocused ? 'border-blue-500' : 'border-transparent'}`}>
              <Search className={`w-4 h-4 transition-colors ${searchFocused ? 'text-blue-500' : 'text-gray-400'}`} />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none focus:outline-none text-sm w-64 text-gray-700 dark:text-gray-300 placeholder:text-gray-400"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-amber-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-500" />
                )}
              </button>

              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all relative">
                <Bell className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>

              <button
                onClick={() => setShowProfileModal(true)}
                className="flex items-center gap-2 ml-1 p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-xs font-bold">DR</span>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:block">
                  Dr. Ahmed
                </span>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Search */}
        <div className="md:hidden fixed top-16 left-0 right-0 z-30 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 px-4 py-2">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none focus:outline-none text-sm flex-1 text-gray-700 dark:text-gray-300"
            />
          </div>
        </div>

        {/* Layout */}
        <div className="flex pt-16 md:pt-16">
          {/* Sidebar */}
          <aside
            className={`
              fixed left-0 top-16 h-[calc(100vh-4rem)]
              bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800
              transition-all duration-300 ease-in-out z-30
              ${isCollapsed ? "w-20" : "w-70"}
              ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            `}
          >
            <nav className="h-full flex flex-col py-4">
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
                        relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
                        transition-all duration-200
                        ${isActive
                          ? "bg-blue-600 text-white shadow-md"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                        }
                        ${isCollapsed ? "justify-center" : ""}
                      `}
                    >
                      <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-white' : ''}`} />

                      {!isCollapsed && (
                        <>
                          <span className="text-sm font-medium flex-1 text-left">
                            {label}
                          </span>
                          {badge && (
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              isActive
                                ? "bg-white/20 text-white"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                            }`}>
                              {badge}
                            </span>
                          )}
                        </>
                      )}

                      {isCollapsed && (
                        <div className="absolute left-full ml-3 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-all whitespace-nowrap z-50">
                          {label}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Bottom Actions */}
              <div className="border-t border-gray-200 dark:border-gray-800 pt-4 mt-4 px-3 space-y-1">
                <button
                  onClick={() => setShowProfileModal(true)}
                  className={`group w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-all ${
                    isCollapsed ? "justify-center" : ""
                  }`}
                >
                  <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-500" />
                  </div>
                  {!isCollapsed && (
                    <div className="flex-1 text-left">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Dr. Ahmed
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Cardiologist
                      </p>
                    </div>
                  )}
                </button>

                <button
                  className={`group w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:bg-red-50 dark:hover:bg-red-950/50 hover:text-red-600 transition-all ${
                    isCollapsed ? "justify-center" : ""
                  }`}
                >
                  <LogOut className="w-5 h-5" />
                  {!isCollapsed && <span className="text-sm font-medium">Sign out</span>}
                </button>
              </div>
            </nav>
          </aside>

          {/* Mobile overlay */}
          {isMobileMenuOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-black/30 z-20"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}

          {/* Main content */}
          <main
            className={`
              flex-1 transition-all duration-300 min-w-0
              ${isCollapsed ? "lg:ml-20" : "lg:ml-64"}
              ml-0
            `}
          >
            <div className="p-4 lg:ps-12">
              {children}
            </div>
          </main>
        </div>
      </div>

      {/* Profile Modal */}
      {showProfileModal && (
        <ProfileModal isOpen={showProfileModal} onClose={() => setShowProfileModal(false)} />
      )}
    </div>
  );
}

// Profile Modal Component
const ProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white dark:bg-gray-950 rounded-2xl w-full max-w-md shadow-2xl border border-gray-200 dark:border-gray-800">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Profile</h2>
            <button onClick={onClose} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
              <span className="text-white text-xl font-bold">DR</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Dr. Ahmed Hassan</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400">Senior Cardiologist</p>
              <div className="flex items-center gap-1 mt-1">
                <Shield className="w-3 h-3 text-green-500" />
                <span className="text-xs text-gray-500">Verified Professional</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">dr.ahmed@medical.com</p>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <p className="text-xs text-gray-500">Phone</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">+966 50 123 4567</p>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <p className="text-xs text-gray-500">License ID</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">SCH-2024-12345</p>
            </div>
          </div>

          <button className="w-full mt-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-all">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};