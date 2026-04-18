"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { 
  Menu, X, LogIn, ChevronDown, 
  Calendar, Building, UserPlus, Eye, 
  Stethoscope, Trophy, Lightbulb, Microscope, Cpu, 
  UsersRound, Landmark, BookOpen, ArrowRight
} from "lucide-react";

const navlinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/Services",
    submenus: [
      {
        label: "Conference Organization",
        href: "/Services/conferenceorganization",
        icon: Calendar,
      },
      {
        label: "Exhibition & Space Booking",
        href: "/Services/exhibitionspacebooking",
        icon: Building,
      },
      {
        label: "Practitioner Registration",
        href: "/Services/practitionerregistration",
        icon: UserPlus,
      },
      {
        label: "View All Services",
        href: "/Services",
        isViewAll: true,
        icon: Eye,
      },
    ],
  },
  { label: "Events", href: "/pages/NavBar-Links/NavEvents" },
  {
    label: "Portals",
    href: "/pages/Portals",
    submenus: [
      {
        label: "Sponsor Portal",
        href: "/pages/Portals/SponcerPortal/dashboard",
        icon: Trophy,
      },
      {
        label: "Exhibitor Portal",
        href: "/pages/Portals/ExhibitorPortal/dashboard",
        icon: Building,
      },
      {
        label: "Visitor Portal",
        href: "/pages/Portals/VisitorPortal/dashboard",
        icon: Eye,
      },
      {
        label: "Health Care Portal",
        href: "/pages/Portals/HealthcarePractitionersPortal/dashboard",
        icon: Stethoscope,
      },
      { label: "View All Portals", href: "/pages/Portals/", isViewAll: true, icon: Eye },
    ],
  },
  { label: "About", href: "/pages/AboutUs" },
  { label: "Contact", href: "/pages/ContactUs" },
  { label: "News & Blogs", href: "/pages/NewsBlogPage" },
  { label: "FAQ", href: "/pages/FAQ" },
  {
    label: "Whats On ?",
    href: "#",
    submenus: [
      {
        label: "Medical-Innovation-Arena",
        href: "/pages/WhatsOn/MedicalInnovationArena",
        icon: Lightbulb,
      },
      {
        label: "Healthcare-Innovation-Hub",
        href: "/pages/WhatsOn/HealthcareInnovationHub",
        icon: Microscope,
      },
      {
        label: "Medical-Technology-Zone",
        href: "/pages/WhatsOn/MedicalTechnologyZone",
        icon: Cpu,
      },
      {
        label: "Clinical-Knowledge-Forum",
        href: "/pages/WhatsOn/ClinicalKnowledgeForum",
        icon: BookOpen,
      },
      {
        label: "Industry-Collaboration-Exchange",
        href: "/pages/WhatsOn/IndustryCollaborationExchange",
        icon: UsersRound,
      },
      {
        label: "Guided-Exhibition-Tours",
        href: "/pages/WhatsOn/GuidedExhibitionTours",
        icon: Landmark,
      },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownTimeoutRef = useRef(null);

  const pathname = usePathname();

  /* ---------------- MOUNT FIX ---------------- */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* ---------------- SCROLL EFFECT ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- CLOSE MOBILE ON ROUTE CHANGE ---------------- */
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  if (!mounted) return null;

  /* ---------------- ACTIVE LINK ---------------- */
  const isActive = (href, submenus = null) => {
    if (href === "/") return pathname === "/";
    
    // Check if current path matches the main href (ignore #)
    if (href !== "#" && pathname?.startsWith(href)) return true;
    
    // Check if any submenu item is active
    if (submenus && submenus.length > 0) {
      return submenus.some(submenu => pathname?.startsWith(submenu.href));
    }
    
    return false;
  };

  /* ---------------- DROPDOWN HANDLERS ---------------- */
  const handleMouseEnter = (label) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? "bg-gray-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        )}

        <div className="max-w-[1300px] mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <span className={`relative text-3xl font-black tracking-tight transition-all duration-500 text-white`}>
                Medconf
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent ml-1">
                  KSA
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navlinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    link.submenus && handleMouseEnter(link.label)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 group flex items-center gap-1 ${
                      isActive(link.href, link.submenus)
                        ? "text-blue-400"
                        : scrolled
                          ? "text-gray-300 hover:text-white"
                          : "text-gray-200 hover:text-white"
                    }`}
                  >
                    {isActive(link.href, link.submenus) && (
                      <span className="absolute inset-0 bg-blue-500/10 rounded-xl border border-blue-500/30"></span>
                    )}
                    <span className="absolute inset-0 rounded-xl transition-opacity duration-300 bg-white/5 opacity-0 group-hover:opacity-100"></span>
                    <span className="relative z-10">{link.label}</span>
                    {link.submenus && (
                      <ChevronDown
                        className={`relative z-10 w-4 h-4 transition-transform duration-300 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                    {isActive(link.href, link.submenus) && !link.submenus && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></span>
                    )}
                  </Link>

                  {/* Dropdown Submenu */}
                  {link.submenus && openDropdown === link.label && (
                    <div className="absolute left-0 top-full pt-2 w-80 z-50">
                      <div className="relative overflow-hidden bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl">
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

                        <div className="relative p-2">
                          <div className="space-y-1">
                            {link.submenus
                              .filter((s) => !s.isViewAll)
                              .map((submenu) => {
                                const IconComponent = submenu.icon;
                                return (
                                  <Link
                                    key={submenu.label}
                                    href={submenu.href}
                                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 group/item ${
                                      pathname === submenu.href
                                        ? "text-blue-400 bg-blue-500/10"
                                        : "text-gray-300 hover:text-white hover:bg-white/5"
                                    }`}
                                    onClick={() => setOpenDropdown(null)}
                                  >
                                    {IconComponent && (
                                      <div className="flex items-center justify-center w-5 h-5">
                                        <IconComponent className="w-4 h-4 text-gray-400 group-hover/item:text-blue-400 transition-colors duration-300" />
                                      </div>
                                    )}
                                    <span className="flex-1">{submenu.label}</span>
                                    <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-all duration-300 -translate-x-2 group-hover/item:translate-x-0" />
                                  </Link>
                                );
                              })}
                          </div>

                          {link.submenus.some((s) => s.isViewAll) && (
                            <div className="relative my-2">
                              <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10"></div>
                              </div>
                            </div>
                          )}

                          {link.submenus
                            .filter((s) => s.isViewAll)
                            .map((viewAllItem) => {
                              const IconComponent = viewAllItem.icon;
                              return (
                                <Link
                                  key={viewAllItem.label}
                                  href={viewAllItem.href}
                                  className="flex items-center justify-between gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 transition-all duration-300 group"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  <span className="flex items-center gap-3">
                                    {IconComponent && (
                                      <IconComponent className="w-4 h-4" />
                                    )}
                                    {viewAllItem.label}
                                  </span>
                                  <ArrowRight className="w-3 h-3 opacity-70 group-hover:translate-x-1 transition-transform" />
                                </Link>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Sign In Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/Forms/Login"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <LogIn className="w-4 h-4" />
                  Sign In
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                scrolled
                  ? "text-white bg-white/10 hover:bg-white/20"
                  : "text-white bg-white/10 hover:bg-white/20"
              }`}
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {scrolled && (
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        )}
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 z-50 transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="mx-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="relative overflow-hidden bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

            <div className="relative p-4 space-y-2">
              {navlinks.map((link) => (
                <div key={link.label} className="space-y-1">
                  <button
                    onClick={() => {
                      if (link.submenus) {
                        setOpenDropdown(openDropdown === link.label ? null : link.label);
                      } else {
                        setMobileOpen(false);
                        window.location.href = link.href;
                      }
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      isActive(link.href, link.submenus)
                        ? "text-blue-400 bg-blue-500/10 border border-blue-500/30"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.submenus && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {link.submenus && openDropdown === link.label && (
                    <div className="ml-4 space-y-1 border-l-2 border-blue-500/30 pl-3 mt-2">
                      {link.submenus.map((submenu) => {
                        const IconComponent = submenu.icon;
                        return (
                          <Link
                            key={submenu.label}
                            href={submenu.href}
                            onClick={() => {
                              setMobileOpen(false);
                              setOpenDropdown(null);
                            }}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                              pathname === submenu.href
                                ? "text-blue-400 bg-blue-500/10"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            {IconComponent && <IconComponent className="w-4 h-4" />}
                            <span>{submenu.label}</span>
                            {submenu.isViewAll && (
                              <ArrowRight className="w-3 h-3 ml-auto opacity-70" />
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
              </div>

              <Link
                href="/Forms/Login"
                onClick={() => setMobileOpen(false)}
                className="group relative overflow-hidden block w-full text-center px-4 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <LogIn className="w-4 h-4" />
                  Sign In
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}