"use client";

import { useState } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Globe,
  Download,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Info,
  Star,
  Building,
  Phone,
  Mail,
  Navigation,
  Ticket,
  Video,
  Coffee,
  Wifi,
  Car,
  Utensils,
  Shield,
  Sparkles,
  Bookmark,
  Share2,
  Heart,
} from "lucide-react";
import { eventDetails, eventSchedule } from "../../Data/sponsor-data";

const EventsContent = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [savedEvents, setSavedEvents] = useState([]);

  const toggleSaveEvent = (eventTitle) => {
    if (savedEvents.includes(eventTitle)) {
      setSavedEvents(savedEvents.filter((e) => e !== eventTitle));
    } else {
      setSavedEvents([...savedEvents, eventTitle]);
    }
  };

  const amenities = [
    { icon: Wifi, label: "Free WiFi", available: true },
    { icon: Coffee, label: "Coffee Station", available: true },
    { icon: Car, label: "Valet Parking", available: true },
    { icon: Utensils, label: "Catering", available: true },
    { icon: Shield, label: "Security", available: true },
    { icon: Video, label: "AV Equipment", available: true },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-cyan-500/10 to-gray-500/10 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-cyan-500/30 shadow-2xl overflow-hidden">
        <div className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-48 sm:w-64 h-48 sm:h-64 bg-gray-500/20 rounded-full blur-3xl"></div>

        <div className="relative p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                <span className="text-[10px] sm:text-sm font-medium text-cyan-400 uppercase tracking-wide">
                  Event Information
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {eventDetails.name}
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 flex flex-wrap items-center gap-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                {eventDetails.venue} • {eventDetails.dates}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Event Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-3 sm:p-4 border border-white/10">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-1.5 sm:p-2 bg-cyan-500/20 rounded-lg">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-gray-400">Dates</p>
              <p className="text-[11px] sm:text-sm font-semibold text-white">
                {eventDetails.dates}
              </p>
            </div>
          </div>
        </div>
        <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-3 sm:p-4 border border-white/10">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-1.5 sm:p-2 bg-purple-500/20 rounded-lg">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-gray-400">Attendees</p>
              <p className="text-[11px] sm:text-sm font-semibold text-white">
                {eventDetails.expectedAttendees}
              </p>
            </div>
          </div>
        </div>
        <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-3 sm:p-4 border border-white/10">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-1.5 sm:p-2 bg-emerald-500/20 rounded-lg">
              <Building className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-gray-400">Exhibitors</p>
              <p className="text-[11px] sm:text-sm font-semibold text-white">
                {eventDetails.expectedExhibitors}
              </p>
            </div>
          </div>
        </div>
        <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-3 sm:p-4 border border-white/10">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-1.5 sm:p-2 bg-cyan-500/20 rounded-lg">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-gray-400">Countries</p>
              <p className="text-[11px] sm:text-sm font-semibold text-white">
                {eventDetails.countriesRepresented}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {/* Event Schedule */}
          <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="relative p-4 sm:p-6 border-b border-white/10">
              <h3 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent flex items-center gap-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                Event Schedule
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Daily agenda and session details for sponsors
              </p>
            </div>

            {/* Day Selector */}
            <div className="relative px-4 sm:px-6 pt-2 sm:pt-4 overflow-x-auto">
              <div className="flex gap-1 sm:gap-2 border-b border-white/10 min-w-max">
                {eventSchedule.map((day, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedDay(idx)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-300 relative whitespace-nowrap ${
                      selectedDay === idx
                        ? "text-cyan-400"
                        : "text-gray-400 hover:text-gray-300"
                    }`}
                  >
                    {day.day}
                    {selectedDay === idx && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-600 to-cyan-700" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative p-4 sm:p-6">
              <div className="space-y-2 sm:space-y-3">
                {eventSchedule[selectedDay].sessions.map((session, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-gray-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                    <div className="relative p-3 sm:p-4">
                      <div className="flex flex-col sm:flex-row justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="text-xs sm:text-sm font-semibold text-white">
                              {session.title}
                            </span>
                            <span
                              className={`px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-xs font-medium rounded-full ${
                                session.type === "Mandatory"
                                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                                  : session.type === "Exclusive"
                                    ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                                    : session.type === "Platinum Only"
                                      ? "bg-gradient-to-r from-gray-600 to-cyan-700 text-white"
                                      : "bg-white/10 text-gray-300 border border-white/10"
                              }`}
                            >
                              {session.type}
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-400">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3 text-cyan-400" />
                              {session.time}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-gray-400" />
                              <span className="truncate">
                                {session.location}
                              </span>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => toggleSaveEvent(session.title)}
                          className="p-1.5 sm:p-2 rounded-lg transition-all hover:bg-white/10 self-start"
                        >
                          <Heart
                            className={`w-3 h-3 sm:w-4 sm:h-4 ${
                              savedEvents.includes(session.title)
                                ? "fill-red-400 text-red-400"
                                : "text-gray-400"
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
         
        </div>
         {/* Venue Information */}
          <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative p-4 sm:p-6 border-b border-white/10">
              <h3 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent flex items-center gap-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                Venue Information
              </h3>
            </div>

            <div className="relative p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <p className="text-sm sm:text-base font-semibold text-white">
                    {eventDetails.venue}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1">
                    {eventDetails.address}
                  </p>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                      <span>+966 00 000 0000</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                      <span className="truncate">venue@ricc.com</span>
                    </div>
                  </div>
                  <button className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                    <Navigation className="w-3 h-3 sm:w-4 sm:h-4" />
                    Get Directions
                  </button>
                </div>

                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-white mb-3">
                    Amenities
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <amenity.icon className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                        <span className="text-[10px] sm:text-xs text-gray-300">
                          {amenity.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

      {/* Help Section */}
      <div className="relative bg-cyan-500/10 backdrop-blur-xl rounded-xl p-4 sm:p-5 border border-cyan-500/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-gray-500/5"></div>
        <div className="relative flex flex-col sm:flex-row items-start gap-3">
          <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-1">
              Need Event Assistance?
            </h4>
            <p className="text-xs sm:text-sm text-gray-300">
              For any event-related questions or special arrangements, please
              contact our event coordination team at{" "}
              <a
                href="mailto:events@event.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                events@event.com
              </a>{" "}
              or call <span className="text-cyan-400">+966 00 000 0000</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsContent;
