"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  ChevronDown,
  ChevronUp,
  Download,
  Users,
  Mic,
  Coffee,
  Briefcase,
  Award,
  Sparkles,
} from "lucide-react";
import { scheduleData } from "../../Data/visitor-data";

const ScheduleContent = () => {
  const [expandedDay, setExpandedDay] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const toggleDay = (index) => {
    setExpandedDay(expandedDay === index ? null : index);
  };

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      alert("Schedule downloaded successfully!");
    }, 1500);
  };

  const getEventIcon = (title) => {
    if (title.includes("Keynote") || title.includes("Opening")) return <Mic className="w-4 h-4 text-purple-400" />;
    if (title.includes("Workshop")) return <Briefcase className="w-4 h-4 text-amber-400" />;
    if (title.includes("Coffee") || title.includes("Lunch") || title.includes("Networking")) return <Coffee className="w-4 h-4 text-emerald-400" />;
    if (title.includes("Panel")) return <Users className="w-4 h-4 text-blue-400" />;
    if (title.includes("Ceremony") || title.includes("Award")) return <Award className="w-4 h-4 text-amber-400" />;
    return <Sparkles className="w-4 h-4 text-cyan-400" />;
  };

  return (
    <div className="space-y-6">
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="relative p-6 border-b border-white/10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-br from-purple-500 to-pink-400 rounded-lg shadow-lg shadow-blue-500/30">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
                  Event Schedule
                </h2>
                <p className="text-sm text-gray-300 mt-0.5 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  Global Health Exhibition 2026 - Full Program
                </p>
              </div>
            </div>
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="relative px-5 py-2.5 bg-gradient-to-br from-purple-500 to-pink-400 text-white rounded-lg flex items-center gap-2 overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 disabled:opacity-50"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                {isDownloading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Downloading...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    Download Full Schedule
                  </>
                )}
              </span>
            </button>
          </div>
        </div>

        {/* Schedule Content */}
        <div className="relative p-6">
          <div className="max-w-4xl mx-auto space-y-4">
            {scheduleData.map((day, index) => {
              const isOpen = expandedDay === index;
              const eventCount = day.events.length;

              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/20"
                >
                  {/* Day Header */}
                  <button
                    onClick={() => toggleDay(index)}
                    className="w-full flex justify-between items-center p-5 text-left transition-all duration-300 hover:bg-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                        <Calendar className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {day.day}
                        </h3>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {eventCount} sessions • Full day program
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400 hidden sm:block">
                        {isOpen ? "Hide schedule" : "View schedule"}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>

                  {/* Day Events */}
                  {isOpen && (
                    <div className="border-t border-white/10 p-5 pt-0">
                      <div className="space-y-3 mt-4">
                        {day.events.map((event, eventIndex) => (
                          <div
                            key={eventIndex}
                            className="group relative p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                          >
                            {/* Hover gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                            
                            <div className="relative flex flex-col sm:flex-row sm:items-center gap-3">
                              {/* Time */}
                              <div className="sm:w-36 flex-shrink-0">
                                <div className="flex items-center gap-2">
                                  <Clock className="w-4 h-4 text-blue-400" />
                                  <span className="text-sm font-semibold text-blue-400">
                                    {event.time}
                                  </span>
                                </div>
                              </div>

                              {/* Event Details */}
                              <div className="flex-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                  {getEventIcon(event.title)}
                                  <h4 className="font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
                                    {event.title}
                                  </h4>
                                </div>
                                <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                                  <div className="flex items-center gap-1">
                                    <MapPin className="w-3 h-3 text-purple-400" />
                                    {event.location}
                                  </div>
                                </div>
                              </div>

                              {/* Action Button */}
                              <button className="sm:self-center px-3 py-1.5 text-xs bg-white/10 rounded-lg text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300">
                                Add to Calendar
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Info Note */}
          <div className="mt-6 p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-white">Schedule Notes</p>
                <p className="text-xs text-gray-300 mt-0.5">
                  • All timings are in Saudi Arabia Standard Time (AST)<br />
                  • Schedule subject to minor changes. Please check back for updates.<br />
                  • Coffee breaks and lunch are included for all registered attendees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleContent;