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
  Diamond,
  Shield,
} from "lucide-react";
import { menuItems } from "../../../Data/sponsor-data";

// Import all content components
import DashboardContent from "../../../Components/SponsorPortal/DashboardContent";
import ProfileContent from "../../../Components/SponsorPortal/ProfileContent";
import PackageContent from "../../../Components/SponsorPortal/PackageContent";
import BrandingContent from "../../../Components/SponsorPortal/BrandingContent";
import PaymentsContent from "../../../Components/SponsorPortal/PaymentsContent";
import EventsContent from "../../../Components/SponsorPortal/EventsContent";
import SupportContent from "../../../Components/SponsorPortal/SupportContent";
import PortalIntro from "../../../Layout/PortalsAnimation";

// Component mapping based on route id
const componentMap = {
  dashboard: DashboardContent,
  profile: ProfileContent,
  package: PackageContent,
  branding: BrandingContent,
  payments: PaymentsContent,
  events: EventsContent,
  support: SupportContent,
};

export default function SponsorPortalLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Get current page from pathname
  const currentPage = pathname?.split("/").pop() || "dashboard";
  const CurrentComponent = componentMap[currentPage] || DashboardContent;

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle navigation
  const handleNavigation = (id) => {
    router.push(`/pages/Portals/SponcerPortal/${id}`);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
      {/* animation  */}
      {showIntro && (
        <PortalIntro
          onFinish={() => setShowIntro(false)}
          title={"SPONSOR"}
          subtitle={"SPONSOR DASHBOARD"}
          titlecolor={"from-gray-200 to-cyan-700"}
          portalcolor={"from-cyan-700 to-gray-200"}
        />
      )}

      {/* Floating orbs background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-56 sm:w-80 h-56 sm:h-80 bg-gray-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-indigo-500/15 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Top Nav - Glassmorphism */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/5 backdrop-blur-2xl border-b border-white/10 h-16 shadow-2xl">
        <div className="flex items-center justify-between px-3 sm:px-6 h-full">
          <div className="flex items-center gap-2 sm:gap-3">
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
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-gray-600 to-cyan-700 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Diamond className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
              <span className="text-sm sm:text-base font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Sponsor Portal
              </span>
            </div>
          </div>

          {/* Search Bar - Glass style */}
          <div
            className={`hidden md:flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 backdrop-blur-xl rounded-lg border transition-all duration-300 ${
              searchFocused
                ? "border-cyan-500/50 shadow-lg shadow-cyan-500/20"
                : "border-white/10"
            }`}
          >
            <Search
              className={`w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-300 ${
                searchFocused ? "text-cyan-400" : "text-gray-400"
              }`}
            />
            <input
              type="text"
              placeholder="Search events, documents..."
              className="bg-transparent border-none focus:outline-none text-xs sm:text-sm w-40 lg:w-64 text-white placeholder:text-gray-400"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-lg transition-all duration-300 hover:bg-white/10 text-gray-300 hover:text-white relative group">
              <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full ring-2 ring-gray-900 animate-pulse"></span>
            </button>

            <button
              onClick={() => setShowProfileModal(true)}
              className="flex items-center gap-1 sm:gap-2 ml-1 p-1 rounded-lg transition-all duration-300 hover:bg-white/10"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-gray-600 to-cyan-700 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <span className="text-white text-[10px] sm:text-xs font-bold">
                  SP
                </span>
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-200 hidden sm:block">
                Sponsor Corp
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Search */}
      <div className="md:hidden fixed top-16 left-0 right-0 z-30 bg-white/5 backdrop-blur-xl border-b border-white/10 px-3 py-2">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
          <Search className="w-3 h-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search events, conferences..."
            className="bg-transparent border-none focus:outline-none text-xs flex-1 text-white placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Layout */}
      <div className="flex pt-16">
        {/* Sidebar - Glassmorphism */}
        <aside
          className={`
            fixed left-0 top-16 h-[calc(100vh-4rem)]
            bg-white/5 backdrop-blur-xl border-r border-white/10
            z-30
            transition-all duration-300 ease-out
            ${isCollapsed ? "w-[72px]" : "w-70"}
            ${
              isMobileMenuOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }
          `}
        >
          <nav className="h-full flex flex-col py-4">
            <div className="flex-1 space-y-1 px-2 overflow-y-auto">
              {menuItems.map(({ id, label, icon: Icon, badge }) => {
                const isActive = currentPage === id;
                return (
                  <button
                    key={id}
                    onClick={() => handleNavigation(id)}
                    className={`
                      relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
                      transition-all duration-200
                      ${
                        isActive
                          ? "bg-gradient-to-r from-gray-600 to-cyan-700 text-white shadow-lg shadow-cyan-500/20 border border-white/20"
                          : "text-gray-300 hover:bg-white/10 hover:text-white"
                      }
                      ${isCollapsed ? "justify-center px-2" : ""}
                      group
                    `}
                  >
                    <Icon
                      className={`w-5 h-5 flex-shrink-0 ${
                        isActive ? "text-white" : ""
                      }`}
                    />

                    {!isCollapsed && (
                      <>
                        <span className="text-sm font-medium flex-1 text-left">
                          {label}
                        </span>
                        {badge && (
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${
                              isActive
                                ? "bg-white/20 text-white"
                                : "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                            }`}
                          >
                            {badge}
                          </span>
                        )}
                      </>
                    )}

                    {isCollapsed && (
                      <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900/90 backdrop-blur-xl text-white text-xs rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-all whitespace-nowrap z-50 border border-white/10">
                        {label}
                        {badge && ` (${badge})`}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="border-t border-white/10 pt-4 mt-4 px-2 space-y-1">
              <button
                onClick={() => setShowProfileModal(true)}
                className={`group w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-200 ${
                  isCollapsed ? "justify-center px-2" : ""
                }`}
              >
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                  <User className="w-4 h-4 text-gray-300" />
                </div>
                {!isCollapsed && (
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-white">
                      Sponsor Corp
                    </p>
                    <p className="text-xs text-gray-400">Platinum Partner</p>
                  </div>
                )}
              </button>

              <button
                className={`group w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200 ${
                  isCollapsed ? "justify-center px-2" : ""
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
            flex-1 min-w-0
            transition-all duration-300 ease-out
            ${isCollapsed ? "lg:ml-[72px]" : "lg:ml-70"}
            ml-0
          `}
        >
          <div className="p-3 sm:p-4 lg:p-6">
            <CurrentComponent />
          </div>
        </main>
      </div>

      {/* Profile Modal */}
      {showProfileModal && (
        <ProfileModal onClose={() => setShowProfileModal(false)} />
      )}
    </div>
  );
}

// Profile Modal Component - Updated with Gray + Cyan theme
const ProfileModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl w-full max-w-md shadow-2xl border border-white/20 mx-4">
        {/* Decorative glows */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gray-500/20 rounded-full blur-3xl"></div>

        <div className="relative p-5 sm:p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Sponsor Profile
            </h2>
            <button
              onClick={onClose}
              className="p-1 rounded-lg transition-all duration-300 hover:bg-white/10 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="relative p-5 sm:p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-600 to-cyan-700 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <Diamond className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Pharma International
              </h3>
              <p className="text-xs sm:text-sm text-cyan-400">
                Platinum Sponsor
              </p>
              <div className="flex items-center gap-1 mt-1">
                <Shield className="w-3 h-3 text-emerald-400" />
                <span className="text-[10px] sm:text-xs text-gray-400">
                  Verified Partner
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-[10px] sm:text-xs text-gray-400">
                Contact Person
              </p>
              <p className="text-xs sm:text-sm font-medium text-white">
                Mohammed Al-Otaibi
              </p>
            </div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-[10px] sm:text-xs text-gray-400">Email</p>
              <p className="text-xs sm:text-sm font-medium text-white break-all">
                sponsor@pharma.com
              </p>
            </div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-[10px] sm:text-xs text-gray-400">Phone</p>
              <p className="text-xs sm:text-sm font-medium text-white">
                +966 00 000 0000
              </p>
            </div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-[10px] sm:text-xs text-gray-400">
                Sponsorship Tier
              </p>
              <p className="text-xs sm:text-sm font-medium text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                Platinum Partner
              </p>
            </div>
          </div>

          <button className="relative w-full mt-6 py-2 sm:py-2.5 bg-gradient-to-r from-gray-600 to-cyan-700 text-white rounded-lg text-sm font-medium overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30">
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="relative">Edit Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};
