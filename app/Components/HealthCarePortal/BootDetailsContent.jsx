"use client";
import { useState } from "react";
import { 
  Storefront as StorefrontIcon,
  CalendarToday,
  LocationOn,
  Person,
  ConfirmationNumber,
  EventAvailable,
  Cancel,
  Refresh,
  Star,
  StarBorder
} from "@mui/icons-material";
import { Calendar, Clock, MapPin, Users, Award, AlertCircle } from "lucide-react";

const BootDetailsContent = ({
  booths,
  onCancel,
}) => {
  const [hoveredBooth, setHoveredBooth] = useState(null);

  const bookedBooths = booths.filter((b) => b.status === "Booked");
  const totalBookings = bookedBooths.length;
  const totalSpent = bookedBooths.reduce((sum, booth) => sum + (booth.price || 0), 0);
  const upcomingCount = bookedBooths.filter(b => new Date(b.date) > new Date()).length;

  const getStatusStyle = (status) => {
    if (status === "Booked") return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
    return "bg-amber-500/20 text-amber-400 border border-amber-500/30";
  };

  return (
    <div className="space-y-6">
      {/* Header Stats - Glassmorphism */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                My Booked Booths
              </h2>
              <p className="text-sm text-gray-300 mt-1 flex items-center gap-2">
                <EventAvailable className="w-4 h-4 text-blue-400" />
                <span>{totalBookings} active {totalBookings === 1 ? 'booking' : 'bookings'}</span>
              </p>
            </div>
            <button className="relative px-4 py-2 text-sm font-medium text-blue-400 bg-blue-500/10 rounded-lg border border-blue-500/30 overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:bg-blue-500/20">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></span>
              <span className="relative flex items-center gap-2">
                <Refresh className="w-4 h-4" />
                Sync
              </span>
            </button>
          </div>

          {/* Stats Cards - Glass style */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-2">
                <ConfirmationNumber className="w-5 h-5 text-blue-400" />
                <span className="text-2xl font-bold text-white">{totalBookings}</span>
              </div>
              <p className="text-sm text-gray-300">Total Bookings</p>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 rounded-xl group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500"></div>
            </div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-2">
                <CalendarToday className="w-5 h-5 text-purple-400" />
                <span className="text-2xl font-bold text-white">{upcomingCount}</span>
              </div>
              <p className="text-sm text-gray-300">Upcoming Events</p>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 rounded-xl group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500"></div>
            </div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-amber-500/30 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span className="text-2xl font-bold text-white">
                  ${totalSpent.toLocaleString()}
                </span>
              </div>
              <p className="text-sm text-gray-300">Total Spent</p>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-orange-500/0 rounded-xl group-hover:from-amber-500/5 group-hover:to-orange-500/5 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Booth Cards Grid */}
      {bookedBooths.length === 0 ? (
        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-12 text-center overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative">
            <div className="inline-block p-4 bg-white/10 rounded-full mb-4 border border-white/20">
              <StorefrontIcon className="w-12 h-12 text-gray-300" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">No booths booked yet</h3>
            <p className="text-gray-300 mb-4">Browse available booths and secure your spot today.</p>
            <button className="relative px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg font-medium overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="relative">Book New Booth</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookedBooths.map((booth, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-white/20"
              onMouseEnter={() => setHoveredBooth(index)}
              onMouseLeave={() => setHoveredBooth(null)}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
              
              {/* Top section with gradient */}
              <div className="relative h-28 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-4">
                {/* Corner glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/20 rounded-bl-3xl blur-xl"></div>
                
                <div className="absolute top-3 right-3 z-10">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${getStatusStyle(booth.status)}`}>
                    {booth.status}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 z-10">
                  <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-xs font-medium text-white border border-white/20">
                    Booth #{booth.number}
                  </span>
                </div>
              </div>

              <div className="p-4 relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
                      {booth.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-gray-300 mt-1">
                      <LocationOn className="w-3 h-3 text-blue-400" />
                      <span>Hall A, Section {Math.floor(Math.random() * 5) + 1}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span>{booth.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Person className="w-4 h-4 text-cyan-400" />
                    <span>Up to 4 representatives</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <div>
                    <p className="text-xs text-gray-400">Total Price</p>
                    <p className="font-bold text-white">${booth.price?.toLocaleString() || "2,500"}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => onCancel?.(booth)}
                      className="relative px-3 py-1.5 text-sm font-medium text-red-400 bg-red-500/10 rounded-lg border border-red-500/30 overflow-hidden group/btn transition-all duration-300 hover:bg-red-500/20 hover:shadow-lg hover:shadow-red-500/20"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover/btn:opacity-10 transition-opacity duration-500"></span>
                      <span className="relative">Cancel</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Help Section - Glass style */}
      {bookedBooths.length > 0 && (
        <div className="relative bg-blue-500/10 backdrop-blur-xl rounded-xl p-5 border border-blue-500/30 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5"></div>
          <div className="relative flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-white mb-1">Need Help?</h4>
              <p className="text-sm text-gray-300">
                Contact support at <a href="mailto:events@example.com" className="text-blue-400 hover:text-blue-300 transition-colors hover:underline">events@example.com</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BootDetailsContent;