"use client";
import { useState } from "react";
import { 
  Clock, 
  MapPin, 
  Calendar, 
  Users, 
  ChevronRight, 
  Bell,
  CheckCircle,
  Star,
  Mic,
  Search,
  ArrowRight,
  CalendarDays,
  Ticket,
  AlertCircle
} from "lucide-react";

const EventScheduleContent = ({ upcomingEvents, getColorClasses }) => {
  const [viewMode, setViewMode] = useState("week");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  const enhancedEvents = upcomingEvents.map((event, index) => ({
    ...event,
    category: ["Conference", "Workshop", "Networking", "Keynote", "Panel"][index % 5],
    speakers: ["Dr. Sarah Johnson", "Prof. Michael Chen", "Emma Watson", "Dr. James Wilson"][index % 4],
    capacity: [50, 100, 200, 150, 75][index % 5],
    registered: Math.floor(Math.random() * 50) + 20,
    description: "Join us for an engaging session on the latest trends in healthcare.",
    tags: ["Innovation", "Technology", "Healthcare", "AI"][index % 4],
  }));

  const filteredEvents = enhancedEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.speakers.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || event.category.toLowerCase() === filterCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const handleRegister = (event) => {
    if (!registeredEvents.includes(event.id)) {
      setRegisteredEvents([...registeredEvents, event.id]);
    }
  };

  const isRegistered = (eventId) => registeredEvents.includes(eventId);
  const categories = ["all", ...new Set(enhancedEvents.map(e => e.category.toLowerCase()))];

  const getEventIcon = (category) => {
    switch(category.toLowerCase()) {
      case "workshop": return <Mic className="w-4 h-4" />;
      case "networking": return <Users className="w-4 h-4" />;
      case "keynote": return <Star className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Event Schedule</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                {filteredEvents.length} events scheduled
              </p>
            </div>
            
            <div className="flex gap-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
              {["month", "week", "day"].map((view) => (
                <button
                  key={view}
                  onClick={() => setViewMode(view)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    viewMode === view
                      ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {view.charAt(0).toUpperCase() + view.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search events or speakers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                    filterCategory === cat
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat === "all" ? "All Events" : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Events List */}
        <div className="p-6">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No events found</h3>
              <p className="text-sm text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className={`p-5 rounded-lg border transition-all hover:shadow-md ${
                    selectedEvent === event.id
                      ? "border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20"
                      : "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
                  }`}
                  onMouseEnter={() => setSelectedEvent(event.id)}
                  onMouseLeave={() => setSelectedEvent(null)}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    {/* Date */}
                    <div className="flex-shrink-0 w-24 text-center">
                      <div className="p-2 bg-white dark:bg-gray-800 rounded-lg">
                        <p className="text-xs text-gray-500">{event.date.split(" ")[0]}</p>
                        <p className="text-xl font-bold text-gray-900 dark:text-white">{event.date.split(" ")[1]}</p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <div className={`px-2 py-0.5 rounded-full text-xs font-medium flex items-center gap-1 ${
                          event.category === "Keynote" ? "bg-amber-100 text-amber-700" :
                          event.category === "Workshop" ? "bg-blue-100 text-blue-700" :
                          "bg-purple-100 text-purple-700"
                        }`}>
                          {getEventIcon(event.category)}
                          {event.category}
                        </div>
                        <div className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 rounded-full text-xs text-gray-600">
                          {event.tags}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {event.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {event.description}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-2">
                        <div className="flex items-center gap-1">
                          <Mic className="w-3 h-3" />
                          {event.speakers}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {event.location}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-xs">
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3 text-blue-500" />
                          <span>{event.registered}/{event.capacity} registered</span>
                        </div>
                        <div className="flex-1 max-w-xs">
                          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                              style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action */}
                    <div className="flex-shrink-0">
                      {isRegistered(event.id) ? (
                        <div className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg text-sm font-medium flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Registered
                        </div>
                      ) : (
                        <button
                          onClick={() => handleRegister(event)}
                          className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center gap-2"
                        >
                          <Ticket className="w-4 h-4" />
                          Register Now
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Stats */}
        {filteredEvents.length > 0 && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>Total attendees: {enhancedEvents.reduce((sum, e) => sum + e.registered, 0)}</span>
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                View Full Calendar <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Tips Card */}
      <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-5 border border-blue-200 dark:border-blue-800">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Pro Tip</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Register early for events to secure your spot. Popular sessions fill up quickly!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventScheduleContent;